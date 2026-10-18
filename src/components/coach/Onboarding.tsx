import { useState } from "react";
import { ALANLAR, SUBJECTS } from "@/data/curriculum";
import { Button } from "@/components/ui/button";
import { Field, TextInput } from "@/components/ui/field";
import { cn } from "@/lib/cn";
import { useCoach } from "@/lib/store";
import type { Alan } from "@/lib/types";

export function Onboarding() {
  const setProfile = useCoach((state) => state.setProfile);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [alan, setAlan] = useState<Alan>("say");
  const [hours, setHours] = useState(3);
  const [focus, setFocus] = useState<string[]>([]);
  const [examDate, setExamDate] = useState("2028-06-17");

  const nameOk = name.trim().length >= 2;

  function toggleFocus(id: string) {
    setFocus((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function finish() {
    setProfile({
      name: name.trim().slice(0, 32),
      alan,
      dailyHours: hours,
      target: target.trim().slice(0, 80),
      examDate,
      focus,
      targetNet: null,
    });
  }

  return (
    <main className="min-h-dvh bg-background">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-10 md:grid-cols-2 md:items-end md:px-8 md:py-16">
        <div>
          <p className="text-sm font-medium tracking-wide text-accent">11. sınıf · Maarif · 2028 YKS</p>
          <h1 className="mt-3 font-display text-5xl text-foreground md:text-6xl">Mürekkep</h1>
          <p className="mt-4 max-w-md text-lg text-muted">
            Günlük masan, konu haritan ve deneme defterin. Koçun boş slogan kurmaz; süreyi ve konuyu söyler.
          </p>
        </div>

        <section className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm tabular-nums text-muted">
            {step + 1} / 3
          </p>

          {step === 0 ? (
            <div className="mt-4 flex flex-col gap-5">
              <h2 className="font-display text-3xl">Seni nasıl çağırayım?</h2>
              <Field label="Adın">
                <TextInput
                  value={name}
                  maxLength={32}
                  autoComplete="given-name"
                  placeholder="Adın"
                  onChange={(event) => setName(event.target.value)}
                />
              </Field>
              <Field label="Hedefin" hint="Bölüm ya da üniversite. Bilmiyorsan boş bırak.">
                <TextInput
                  value={target}
                  maxLength={80}
                  placeholder="Örnek: bilgisayar mühendisliği"
                  onChange={(event) => setTarget(event.target.value)}
                />
              </Field>
              <Button className="mt-2" disabled={!nameOk} onClick={() => setStep(1)}>
                Devam
              </Button>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="mt-4">
              <h2 className="font-display text-3xl">Alanın hangisi?</h2>
              <p className="mt-2 text-sm text-muted">Planın ağırlığı buna göre kurulur. Sonra değiştirebilirsin.</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {ALANLAR.map((item) => {
                  const selected = alan === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setAlan(item.id)}
                      className={cn(
                        "min-h-24 rounded-lg border px-3 py-3 text-left transition-[background-color,border-color] duration-quick",
                        selected ? "border-accent bg-accent-soft" : "border-border bg-card hover:bg-subtle",
                      )}
                    >
                      <span className="block text-base font-medium">{item.label}</span>
                      <span className="mt-1 block text-sm text-muted">{item.hint}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 flex gap-2">
                <Button variant="ghost" onClick={() => setStep(0)}>
                  Geri
                </Button>
                <Button className="flex-1" onClick={() => setStep(2)}>
                  Devam
                </Button>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="mt-4">
              <h2 className="font-display text-3xl">Günde ne kadar?</h2>
              <p className="mt-3 font-display text-4xl tabular-nums">{hours} saat</p>
              <input
                className="mt-4 w-full"
                type="range"
                min={1}
                max={6}
                step={0.5}
                value={hours}
                aria-label="Günlük çalışma saati"
                onChange={(event) => setHours(Number(event.target.value))}
              />
              <p className="mt-6 text-sm font-medium">Zorlandığın dersler</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {SUBJECTS.map((subject) => {
                  const selected = focus.includes(subject.id);
                  return (
                    <button
                      key={subject.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleFocus(subject.id)}
                      className={cn(
                        "h-10 rounded-full border px-3 text-sm",
                        selected ? "border-accent bg-accent text-accent-foreground" : "border-border bg-card",
                      )}
                    >
                      {subject.short}
                    </button>
                  );
                })}
              </div>
              <Field label="Tahmini TYT günü" hint="17 Haziran 2028 tahmindir. ÖSYM açıklayınca değiştir.">
                <TextInput className="mt-2" type="date" value={examDate} onChange={(event) => setExamDate(event.target.value)} />
              </Field>
              <div className="mt-5 flex gap-2">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  Geri
                </Button>
                <Button className="flex-1" onClick={finish}>
                  Masaya otur
                </Button>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
