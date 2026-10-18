import { Check, Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextArea } from "@/components/ui/field";
import { daysUntil, formatLong, formatMinutes, isoDate } from "@/lib/dates";
import { buildDay, KIND_LABEL, type StudyBlock } from "@/lib/plan";
import { useCoach } from "@/lib/store";
import { cn } from "@/lib/cn";

const LINES = [
  "Aynı gün yirmi dakika. Okulda gördüğün konuyu akşama bırakma.",
  "Konu bitmiş sayılmaz. On soru çöz, yanlışın nedenini bir cümle yaz.",
  "TYT Türkçe her hafta masada kalsın. Paragrafı alan dersinin yanına koy.",
  "Uzun gün değil, kesintisiz blok. Telefonu başka odaya bırak.",
  "Zayıf konuyu saklama. Koça nerede koptuğunu yaz, örnek iste.",
  "Denemede önce boş bıraktığın konuya bak, nete sonra.",
  "Pazar tekrar günü. Yeni konu açma; bu haftanın yanlışına dön.",
];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function TodayView() {
  const profile = useCoach((state) => state.profile)!;
  const mastery = useCoach((state) => state.mastery);
  const done = useCoach((state) => state.done);
  const sessions = useCoach((state) => state.sessions);
  const dayNonce = useCoach((state) => state.dayNonce);
  const dayNotes = useCoach((state) => state.dayNotes);
  const completeBlock = useCoach((state) => state.completeBlock);
  const undoBlock = useCoach((state) => state.undoBlock);
  const logTimer = useCoach((state) => state.logTimer);
  const bumpDay = useCoach((state) => state.bumpDay);
  const setDayNote = useCoach((state) => state.setDayNote);
  const setView = useCoach((state) => state.setView);
  const setDraft = useCoach((state) => state.setDraft);

  const today = isoDate();
  const blocks = buildDay(today, profile, mastery, dayNonce[today] ?? 0);
  const remaining = daysUntil(profile.examDate);
  const weekMinutes = sessions
    .filter((session) => daysUntil(session.date) >= -6 && daysUntil(session.date) <= 0)
    .reduce((sum, session) => sum + session.minutes, 0);
  const goal = Math.round(profile.dailyHours * 60 * 7);
  const streak = countStreak(sessions, done, today);
  const line = LINES[dayOfYear(new Date()) % LINES.length] ?? LINES[0];

  const [activeKey, setActiveKey] = useState<string | null>(null);
  const active = blocks.find((block) => block.key === activeKey) ?? null;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6 md:px-8 md:py-8">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm capitalize text-muted">{formatLong(new Date())}</p>
          <h1 className="mt-1 font-display text-4xl">Merhaba, {profile.name}.</h1>
        </div>
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setView("settings")}>
          Ayarlar
        </Button>
      </header>

      <section className="grid grid-cols-3 gap-3">
        <Stat label="sınava" value={remaining > 0 ? String(remaining) : remaining === 0 ? "bugün" : "geçti"} unit={remaining > 0 ? "gün" : ""} />
        <Stat label="seri" value={String(streak)} unit="gün" />
        <Stat label="bu hafta" value={formatMinutes(weekMinutes)} unit={`/ ${formatMinutes(goal)}`} />
      </section>

      <div className="h-1.5 overflow-hidden rounded-full bg-subtle">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-fast ease-smooth"
          style={{ width: `${Math.min(100, Math.round((weekMinutes / Math.max(goal, 1)) * 100))}%` }}
        />
      </div>

      <section className="rounded-2xl border border-border bg-card p-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl">Bugünün masası</h2>
            <p className="mt-1 text-sm text-muted">
              {blocks.length} blok · {formatMinutes(blocks.reduce((sum, block) => sum + block.minutes, 0))}
            </p>
          </div>
          <Button variant="quiet" size="sm" onClick={() => bumpDay(today)}>
            <RotateCcw className="size-4" />
            Yenile
          </Button>
        </div>
        <ul className="mt-5 flex flex-col gap-3">
          {blocks.map((block) => (
            <BlockRow
              key={block.key}
              block={block}
              finished={Boolean(done[block.key])}
              open={activeKey === block.key}
              onOpen={() => setActiveKey((current) => (current === block.key ? null : block.key))}
              onDone={() => completeBlock(block.key, today, block.subjectId, block.topicId, block.minutes)}
              onUndo={() => undoBlock(block.key, today, block.topicId)}
              onAsk={() => {
                setDraft(
                  `${block.title} konusunda 11. sınıf seviyesinde takıldım. Teşhis et, sonra ${block.minutes} dakikalık bir çalışma ver.`,
                );
                setView("coach");
              }}
            />
          ))}
        </ul>
      </section>

      {active ? (
        <Timer
          key={active.key}
          block={active}
          onFinish={(minutes) => logTimer(today, active.subjectId, active.topicId, minutes, active.key)}
        />
      ) : null}

      <section className="rounded-xl border border-border bg-card p-4">
        <h2 className="text-sm font-medium">Günün notu</h2>
        <TextArea
          className="mt-3"
          maxLength={400}
          placeholder="Bugün nerede koptun, hangi soru tipi kaçtı?"
          value={dayNotes[today] ?? ""}
          onChange={(event) => setDayNote(today, event.target.value)}
        />
      </section>

      <p className="max-w-xl text-sm text-muted">{line}</p>
    </div>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-3 py-3">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-display text-2xl tabular-nums leading-none">
        {value}
        {unit ? <span className="ml-1 font-sans text-xs font-medium text-muted">{unit}</span> : null}
      </p>
    </div>
  );
}

function BlockRow({
  block,
  finished,
  open,
  onOpen,
  onDone,
  onUndo,
  onAsk,
}: {
  block: StudyBlock;
  finished: boolean;
  open: boolean;
  onOpen: () => void;
  onDone: () => void;
  onUndo: () => void;
  onAsk: () => void;
}) {
  return (
    <li className={cn("rounded-lg border border-border p-4", finished && "bg-accent-soft")}>
      <div className="flex items-start justify-between gap-3">
        <button type="button" className="min-w-0 text-left" onClick={onOpen}>
          <p className="text-xs text-muted">
            {block.start}–{block.end} · {block.subject} · {KIND_LABEL[block.kind]}
          </p>
          <p className="mt-1 text-base font-medium">{block.title}</p>
          <p className="mt-1 text-sm text-muted">{block.minutes} dk</p>
        </button>
        {finished ? (
          <Button variant="quiet" size="sm" onClick={onUndo}>
            Geri al
          </Button>
        ) : (
          <Button size="sm" onClick={onDone}>
            <Check className="size-4" />
            Bitti
          </Button>
        )}
      </div>
      {open ? (
        <div className="mt-3 border-t border-border pt-3">
          <p className="text-sm">{block.how}</p>
          <div className="mt-3 flex gap-2">
            <Button variant="ghost" size="sm" onClick={onAsk}>
              Koça sor
            </Button>
          </div>
        </div>
      ) : null}
    </li>
  );
}

function Timer({ block, onFinish }: { block: StudyBlock; onFinish: (minutes: number) => void }) {
  const length = 25 * 60;
  const [left, setLeft] = useState(length);
  const [running, setRunning] = useState(false);
  const [saved, setSaved] = useState(false);
  const savedRef = useRef(false);
  const finishRef = useRef(onFinish);
  finishRef.current = onFinish;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setLeft((value) => (value > 0 ? value - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (left !== 0 || !running || savedRef.current) return;
    savedRef.current = true;
    setRunning(false);
    setSaved(true);
    finishRef.current(25);
  }, [left, running]);

  const minutes = Math.floor(left / 60);
  const seconds = left % 60;

  return (
    <section className="rounded-2xl bg-accent p-6 text-accent-foreground">
      <p className="text-sm text-accent-foreground/80">{block.subject}</p>
      <h2 className="mt-1 font-display text-2xl">{block.title}</h2>
      <p className="mt-6 font-display text-6xl tabular-nums leading-none">
        {pad(minutes)}:{pad(seconds)}
      </p>
      <div className="mt-6 flex gap-2">
        <Button
          variant="quiet"
          onClick={() => setRunning((value) => !value)}
          disabled={left === 0}
        >
          {running ? <Pause className="size-4" /> : <Play className="size-4" />}
          {running ? "Duraklat" : "Başla"}
        </Button>
        <Button
          variant="quiet"
          onClick={() => {
            setRunning(false);
            setLeft(length);
            setSaved(false);
            savedRef.current = false;
          }}
        >
          Sıfırla
        </Button>
      </div>
      <p className="mt-4 text-sm text-accent-foreground/80">
        {saved ? "25 dakika işlendi." : "Yirmi beş dakika. Bitince blok tamamlanır."}
      </p>
    </section>
  );
}

function dayOfYear(date: Date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date.getTime() - start.getTime()) / 86400000);
}

function countStreak(sessions: { date: string }[], done: Record<string, true>, today: string) {
  const dates = new Set<string>(sessions.map((session) => session.date));
  for (const key of Object.keys(done)) {
    const date = key.slice(0, 10);
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) dates.add(date);
  }
  let cursor = dates.has(today) ? today : previous(today);
  let count = 0;
  while (dates.has(cursor)) {
    count += 1;
    cursor = previous(cursor);
  }
  return count;
}

function previous(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year ?? 2026, (month ?? 1) - 1, (day ?? 1) - 1);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
