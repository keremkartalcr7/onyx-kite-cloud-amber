import { useMemo, useState } from "react";
import { SUBJECTS, TOPICS } from "@/data/curriculum";
import { TextInput } from "@/components/ui/field";
import { cn } from "@/lib/cn";
import { useCoach } from "@/lib/store";
import type { MasteryLevel, Track } from "@/lib/types";

const LEVELS: { level: MasteryLevel; label: string }[] = [
  { level: 0, label: "Henüz" },
  { level: 1, label: "Gördüm" },
  { level: 2, label: "Soru" },
  { level: 3, label: "Sağlam" },
];

export function TopicsView() {
  const mastery = useCoach((state) => state.mastery);
  const setMastery = useCoach((state) => state.setMastery);
  const setDraft = useCoach((state) => state.setDraft);
  const setView = useCoach((state) => state.setView);
  const [track, setTrack] = useState<Track>("11");
  const [subjectId, setSubjectId] = useState("mat");
  const [query, setQuery] = useState("");

  const subjects = SUBJECTS.filter((subject) => TOPICS.some((topic) => topic.subjectId === subject.id && topic.track === track));
  const activeSubject = subjects.some((subject) => subject.id === subjectId) ? subjectId : (subjects[0]?.id ?? "mat");

  const rows = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("tr");
    return TOPICS.filter((topic) => {
      if (topic.track !== track || topic.subjectId !== activeSubject) return false;
      if (!needle) return true;
      return `${topic.title} ${topic.theme}`.toLocaleLowerCase("tr").includes(needle);
    });
  }, [activeSubject, query, track]);

  const themes: { theme: string; items: typeof rows }[] = [];
  for (const topic of rows) {
    const group = themes.find((item) => item.theme === topic.theme);
    if (group) group.items.push(topic);
    else themes.push({ theme: topic.theme, items: [topic] });
  }

  const owned = TOPICS.filter((topic) => topic.subjectId === activeSubject && topic.track === track);
  const solid = owned.filter((topic) => (mastery[topic.id] ?? 0) === 3).length;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6 md:px-8 md:py-8">
      <header>
        <h1 className="font-display text-4xl">Konu haritası</h1>
        <p className="mt-2 text-sm text-muted">
          {solid}/{owned.length} sağlam · {SUBJECTS.find((item) => item.id === activeSubject)?.name}
        </p>
      </header>

      <div className="grid grid-cols-2 gap-2 rounded-lg bg-subtle p-1">
        {(
          [
            ["11", "11. sınıf"],
            ["tyt", "TYT omurga"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTrack(id)}
            className={cn(
              "h-11 rounded-sm text-sm font-medium",
              track === id ? "bg-card text-foreground" : "text-muted",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="scroll-quiet -mx-4 flex gap-2 overflow-x-auto px-4">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            type="button"
            onClick={() => setSubjectId(subject.id)}
            className={cn(
              "h-10 shrink-0 rounded-full border px-3 text-sm",
              activeSubject === subject.id
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border bg-card",
            )}
          >
            {subject.short}
          </button>
        ))}
      </div>

      <TextInput
        value={query}
        placeholder="Konu ara"
        aria-label="Konu ara"
        onChange={(event) => setQuery(event.target.value)}
      />

      {themes.length === 0 ? <p className="text-sm text-muted">Bu süzgeçte konu yok.</p> : null}

      {themes.map((group) => (
        <section key={group.theme} className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted">{group.theme}</h2>
          {group.items.map((topic) => {
            const level = mastery[topic.id] ?? 0;
            return (
              <article key={topic.id} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-base font-medium">{topic.title}</h3>
                <p className="mt-1 text-sm text-muted">{topic.how}</p>
                <div className="mt-3 grid grid-cols-4 gap-1 rounded-md bg-subtle p-1">
                  {LEVELS.map((item) => (
                    <button
                      key={item.level}
                      type="button"
                      aria-pressed={level === item.level}
                      onClick={() => setMastery(topic.id, item.level)}
                      className={cn(
                        "h-11 rounded-sm text-xs font-medium sm:text-sm",
                        level === item.level ? "bg-accent text-accent-foreground" : "text-muted",
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-3 text-sm font-medium text-accent"
                  onClick={() => {
                    setDraft(
                      `${topic.title} (${topic.theme}) konusunda 11. sınıf Maarif seviyesinde çalışıyorum. Neyi anlamadığımı varsayma; önce bir teşhis sorusu sor, sonra 25 dakikalık plan ver.`,
                    );
                    setView("coach");
                  }}
                >
                  Koça sor
                </button>
              </article>
            );
          })}
        </section>
      ))}

      <p className="text-sm text-muted">
        11. sınıf başlıkları 2026-2027 Türkiye Yüzyılı Maarif Modeli program özetine göre dizildi. TYT omurgası 9 ve
        10. sınıf tekrarıdır. 2028 soru dağılımı ÖSYM kılavuzu çıkınca netleşir.
      </p>
    </div>
  );
}
