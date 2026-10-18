import { useState } from "react";
import { ALANLAR, SUBJECTS } from "@/data/curriculum";
import { Button } from "@/components/ui/button";
import { Field, TextInput } from "@/components/ui/field";
import { cn } from "@/lib/cn";
import { useCoach } from "@/lib/store";
import type { Alan } from "@/lib/types";

export function SettingsView() {
  const profile = useCoach((state) => state.profile)!;
  const setProfile = useCoach((state) => state.setProfile);
  const resetProgress = useCoach((state) => state.resetProgress);
  const [name, setName] = useState(profile.name);
  const [target, setTarget] = useState(profile.target);
  const [alan, setAlan] = useState<Alan>(profile.alan);
  const [hours, setHours] = useState(profile.dailyHours);
  const [focus, setFocus] = useState(profile.focus);
  const [examDate, setExamDate] = useState(profile.examDate);
  const [targetNet, setTargetNet] = useState(profile.targetNet ? String(profile.targetNet) : "");
  const [armed, setArmed] = useState(false);
  const [saved, setSaved] = useState(false);

  function toggle(id: string) {
    setFocus((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function save() {
    const net = targetNet.trim() === "" ? null : Number(targetNet.replace(",", "."));
    setProfile({
      name: name.trim().slice(0, 32) || profile.name,
      alan,
      dailyHours: hours,
      target: target.trim().slice(0, 80),
      examDate,
      focus,
      targetNet: net !== null && Number.isFinite(net) && net > 0 && net <= 120 ? net : null,
    });
    setSaved(true);
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6 md:px-8 md:py-8">
      <header>
        <h1 className="font-display text-4xl">Ayarlar</h1>
        <p className="mt-2 text-sm text-muted">Plan değişir, işaretlediğin konular durur.</p>
      </header>

      <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
        <Field label="Adın">
          <TextInput value={name} maxLength={32} onChange={(event) => setName(event.target.value)} />
        </Field>
        <Field label="Hedef">
          <TextInput value={target} maxLength={80} onChange={(event) => setTarget(event.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-2">
          {ALANLAR.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={alan === item.id}
              onClick={() => setAlan(item.id)}
              className={cn(
                "h-11 rounded-md border text-sm font-medium",
                alan === item.id ? "border-accent bg-accent-soft" : "border-border",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <Field label={`Günlük süre: ${hours} saat`}>
          <input
            className="w-full"
            type="range"
            min={1}
            max={6}
            step={0.5}
            value={hours}
            aria-label="Günlük çalışma saati"
            onChange={(event) => setHours(Number(event.target.value))}
          />
        </Field>
        <Field label="Tahmini sınav günü">
          <TextInput type="date" value={examDate} onChange={(event) => setExamDate(event.target.value)} />
        </Field>
        <Field label="Hedef net" hint="Boş bırakabilirsin. TYT için 120, AYT için 80 üst sınır sayılır.">
          <TextInput
            inputMode="decimal"
            value={targetNet}
            placeholder="Örnek: 90"
            onChange={(event) => setTargetNet(event.target.value)}
          />
        </Field>
        <div>
          <p className="mb-2 text-sm font-medium">Zorlandığın dersler</p>
          <div className="flex flex-wrap gap-2">
            {SUBJECTS.map((subject) => {
              const selected = focus.includes(subject.id);
              return (
                <button
                  key={subject.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggle(subject.id)}
                  className={cn(
                    "h-10 rounded-full border px-3 text-sm",
                    selected ? "border-accent bg-accent text-accent-foreground" : "border-border",
                  )}
                >
                  {subject.short}
                </button>
              );
            })}
          </div>
        </div>
        <Button onClick={save}>Kaydet</Button>
        {saved ? <p className="text-sm text-accent">Kaydedildi.</p> : null}
      </section>

      <section className="rounded-xl border border-border p-4">
        <h2 className="text-base font-medium">İlerlemeyi sil</h2>
        <p className="mt-1 text-sm text-muted">Konu işaretleri, denemeler, süre ve koç yazışması gider. Adın kalır.</p>
        {armed ? (
          <div className="mt-3 flex gap-2">
            <Button variant="danger" onClick={() => resetProgress()}>
              Eminim, sil
            </Button>
            <Button variant="ghost" onClick={() => setArmed(false)}>
              Vazgeç
            </Button>
          </div>
        ) : (
          <Button className="mt-3" variant="quiet" onClick={() => setArmed(true)}>
            İlerlemeyi sil
          </Button>
        )}
      </section>
    </div>
  );
}
