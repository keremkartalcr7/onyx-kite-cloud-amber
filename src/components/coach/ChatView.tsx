import { SendHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { askCoach } from "@/lib/coach.functions";
import { buildContext } from "@/lib/context";
import { isoDate } from "@/lib/dates";
import { buildDay } from "@/lib/plan";
import { cn } from "@/lib/cn";
import { useCoach } from "@/lib/store";

const PROMPTS = [
  "Bugün masamda neye öncelik vereyim?",
  "Son denememe göre bu hafta neyi keseyim?",
  "25 dakikalık bir paragraf çalışması yaz.",
];

export function ChatView() {
  const profile = useCoach((state) => state.profile)!;
  const mastery = useCoach((state) => state.mastery);
  const mocks = useCoach((state) => state.mocks);
  const sessions = useCoach((state) => state.sessions);
  const done = useCoach((state) => state.done);
  const dayNonce = useCoach((state) => state.dayNonce);
  const messages = useCoach((state) => state.messages);
  const draft = useCoach((state) => state.draft);
  const setDraft = useCoach((state) => state.setDraft);
  const addMessage = useCoach((state) => state.addMessage);
  const patchMessage = useCoach((state) => state.patchMessage);
  const [sending, setSending] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const today = isoDate();
  const blocks = buildDay(today, profile, mastery, dayNonce[today] ?? 0);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [messages, sending]);

  async function send(text: string) {
    const message = text.trim();
    if (!message || sending) return;
    const userId = crypto.randomUUID();
    const pendingId = crypto.randomUUID();
    addMessage({ id: userId, role: "user", content: message });
    addMessage({ id: pendingId, role: "assistant", content: "Bakıyorum." });
    setDraft("");
    setSending(true);
    const history = [...messages.filter((item) => !item.error), { role: "user" as const, content: message }];
    try {
      const result = await askCoach({
        data: {
          message,
          history: history.slice(0, -1).map((item) => ({ role: item.role, content: item.content })),
          context: buildContext({ profile, mastery, mocks, sessions, blocks, done }),
        },
      });
      if (result.ok) patchMessage(pendingId, { content: result.text });
      else patchMessage(pendingId, { content: result.error, error: true });
    } catch {
      patchMessage(pendingId, { content: "Mesaj gitmedi. Aynı soruyu yeniden gönderebilirsin.", error: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-3xl min-h-0 flex-col px-4 pt-6 md:px-8 md:pt-8">
      <header>
        <h1 className="font-display text-4xl">Koç</h1>
        <p className="mt-2 text-sm text-muted">
          Defterini görür. Kısa sor. Her mesaj kotandan gider.
        </p>
      </header>

      <div ref={scroller} className="mt-4 flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto pb-3">
        {messages.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm">
              Ben Mürekkep. 11. sınıftasın, sınavın 2028. Takıldığın konuyu, süreni ya da son denemeni yaz. Sana bir
              oturum çıkarayım.
            </p>
          </div>
        ) : null}
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "max-w-[40rem] rounded-xl px-4 py-3 text-sm whitespace-pre-wrap",
              message.role === "user" ? "ml-8 bg-accent text-accent-foreground" : "mr-6 border border-border bg-card",
              message.error && "text-danger",
            )}
          >
            {message.content}
          </div>
        ))}
      </div>

      <div className="scroll-quiet flex gap-2 overflow-x-auto pb-2">
        {PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            disabled={sending}
            onClick={() => void send(prompt)}
            className="h-10 shrink-0 rounded-full border border-border bg-card px-3 text-sm"
          >
            {prompt}
          </button>
        ))}
      </div>

      <form
        className="flex items-end gap-2 py-3"
        onSubmit={(event) => {
          event.preventDefault();
          void send(draft);
        }}
      >
        <textarea
          value={draft}
          rows={2}
          maxLength={1200}
          placeholder="Nerede koptun?"
          aria-label="Koça mesaj"
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              void send(draft);
            }
          }}
          className="min-h-11 flex-1 resize-none rounded-md border border-border bg-card px-3 py-2 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
        <Button type="submit" size="icon" aria-label="Gönder" disabled={sending || draft.trim().length === 0}>
          <SendHorizontal className="size-4" />
        </Button>
      </form>
    </div>
  );
}
