export type Alan = "say" | "ea" | "soz" | "dil";

export type Track = "11" | "tyt";

export type MasteryLevel = 0 | 1 | 2 | 3;

export type Profile = {
  name: string;
  alan: Alan;
  dailyHours: number;
  target: string;
  examDate: string;
  focus: string[];
  targetNet: number | null;
};

export type Topic = {
  id: string;
  subjectId: string;
  track: Track;
  theme: string;
  title: string;
  how: string;
};

export type Session = {
  id: string;
  date: string;
  subjectId: string;
  topicId: string;
  minutes: number;
  source: "plan" | "timer";
};

export type MockSection = {
  id: string;
  label: string;
  max: number;
  net: number;
};

export type MockExam = {
  id: string;
  date: string;
  oturum: "tyt" | "ayt";
  sections: MockSection[];
  note: string;
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  error?: boolean;
};

export type ViewId = "today" | "plan" | "topics" | "mocks" | "coach" | "settings";
