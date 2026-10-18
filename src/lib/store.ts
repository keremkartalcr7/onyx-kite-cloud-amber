import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ChatMessage, MasteryLevel, MockExam, Profile, Session, ViewId } from "@/lib/types";

type CoachState = {
  hydrated: boolean;
  profile: Profile | null;
  mastery: Record<string, MasteryLevel>;
  sessions: Session[];
  done: Record<string, true>;
  dayNonce: Record<string, number>;
  dayNotes: Record<string, string>;
  mocks: MockExam[];
  messages: ChatMessage[];
  draft: string;
  view: ViewId;
  setHydrated: () => void;
  setProfile: (profile: Profile) => void;
  setView: (view: ViewId) => void;
  setDraft: (draft: string) => void;
  setMastery: (topicId: string, level: MasteryLevel) => void;
  setDayNote: (date: string, note: string) => void;
  bumpDay: (date: string) => void;
  completeBlock: (key: string, date: string, subjectId: string, topicId: string, minutes: number) => void;
  undoBlock: (key: string, date: string, topicId: string) => void;
  logTimer: (date: string, subjectId: string, topicId: string, minutes: number, key: string) => void;
  addMock: (mock: MockExam) => void;
  removeMock: (id: string) => void;
  addMessage: (message: ChatMessage) => void;
  patchMessage: (id: string, patch: Partial<ChatMessage>) => void;
  resetProgress: () => void;
};

const empty = {
  mastery: {} as Record<string, MasteryLevel>,
  sessions: [] as Session[],
  done: {} as Record<string, true>,
  dayNonce: {} as Record<string, number>,
  dayNotes: {} as Record<string, string>,
  mocks: [] as MockExam[],
  messages: [] as ChatMessage[],
};

export const useCoach = create<CoachState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      profile: null,
      ...empty,
      draft: "",
      view: "today",
      setHydrated: () => set({ hydrated: true }),
      setProfile: (profile) => set({ profile }),
      setView: (view) => set({ view }),
      setDraft: (draft) => set({ draft }),
      setMastery: (topicId, level) => set({ mastery: { ...get().mastery, [topicId]: level } }),
      setDayNote: (date, note) => set({ dayNotes: { ...get().dayNotes, [date]: note.slice(0, 400) } }),
      bumpDay: (date) =>
        set({
          dayNonce: { ...get().dayNonce, [date]: (get().dayNonce[date] ?? 0) + 1 },
        }),
      completeBlock: (key, date, subjectId, topicId, minutes) => {
        if (get().done[key]) return;
        set({
          done: { ...get().done, [key]: true },
          sessions: [
            ...get().sessions,
            {
              id: crypto.randomUUID(),
              date,
              subjectId,
              topicId,
              minutes,
              source: "plan" as const,
            },
          ].slice(-500),
        });
      },
      undoBlock: (key, date, topicId) => {
        const done = { ...get().done };
        delete done[key];
        const sessions = [...get().sessions];
        let index = -1;
        for (let cursor = sessions.length - 1; cursor >= 0; cursor -= 1) {
          const session = sessions[cursor];
          if (session && session.date === date && session.topicId === topicId && session.source === "plan") {
            index = cursor;
            break;
          }
        }
        if (index >= 0) sessions.splice(index, 1);
        set({ done, sessions });
      },
      logTimer: (date, subjectId, topicId, minutes, key) => {
        set({
          done: { ...get().done, [key]: true },
          sessions: [
            ...get().sessions,
            {
              id: crypto.randomUUID(),
              date,
              subjectId,
              topicId,
              minutes,
              source: "timer" as const,
            },
          ].slice(-500),
        });
      },
      addMock: (mock) => set({ mocks: [...get().mocks, mock].slice(-80) }),
      removeMock: (id) => set({ mocks: get().mocks.filter((mock) => mock.id !== id) }),
      addMessage: (message) => set({ messages: [...get().messages, message].slice(-40) }),
      patchMessage: (id, patch) =>
        set({
          messages: get().messages.map((message) => (message.id === id ? { ...message, ...patch } : message)),
        }),
      resetProgress: () => set({ ...empty, draft: "", view: "today" }),
    }),
    {
      name: "murekkep-v1",
      partialize: (state) => ({
        profile: state.profile,
        mastery: state.mastery,
        sessions: state.sessions,
        done: state.done,
        dayNonce: state.dayNonce,
        dayNotes: state.dayNotes,
        mocks: state.mocks,
        messages: state.messages,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
