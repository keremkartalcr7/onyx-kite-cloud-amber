import { useMemo, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { examSections, totalMax, totalNet, type Oturum } from "@/data/exams";
import { Button } from "@/components/ui/button";
import { Field, TextArea, TextInput } from "@/components/ui/field";
import { isoDate } from "@/lib/dates";
import { useCoach } from "@/lib/store";

export function MocksView() {
  const profile = useCoach((state) => state.profile)!;
  const mocks = useCoach((state) => state.mocks);
  const addMock = useCoach((state) => state.addMock);
  const removeMock = useCoach((state) => state.removeMock);
  const [oturum, setOturum] = useState<Oturum>("tyt");
  const [date, setDate] = useState(isoDate());
  const [note, setNote] = useState("");
  const [nets, setNets] = useState<Record<string, string>>({});
  const [error, setError] = useState("");

  const template = useMemo(() => examSections(oturum, profile.alan), [oturum, profile.alan]);

  const chart = [...mocks]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((mock) => ({
      name: mock.date.slice(5),
      net: Math.round(totalNet(mock.sections) * 10) / 10,
      label: mock.oturum.toUpperCase(),
    }));

  function submit() {
    const sections = template.map((section) => {
      const raw = nets[section.id]?.trim() ?? "0";
      const net = Number(raw.replace(",", "."));
      return { ...section, net };
    });
    if (sections.some((section) => !Number.isFinite(section.net) || section.net < 0 || section.net > section.max)) {
      setError("Net, sıfır ile soru sayısı arasında olmalı.");
      return;
    }
    addMock({
      id: crypto.randomUUID(),
      date,
      oturum,
      sections,
      note: note.trim().slice(0, 280),
    });
    setNets({});
    setNote("");
    setError("");
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6 md:px-8 md:py-8">
      <header>
        <h1 className="font-display text-4xl">Deneme defteri</h1>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Netleri yaz. Tavanlar güncel TYT ve AYT çatkısıdır; 2028 dağılımı kılavuzla değişebilir.
        </p>
      </header>

      <section className="rounded-xl border border-border bg-card p-4">
        <h2 className="text-sm font-medium">Net eğrisi</h2>
        {chart.length === 0 ? (
          <p className="mt-6 text-sm text-muted">İlk denemenden sonra çizgi burada durur.</p>
        ) : (
          <div className="mt-4 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chart}>
                <CartesianGrid stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} width={32} />
                <Tooltip
                  formatter={(value) => [`${value} net`, "Toplam"]}
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 12,
                    color: "var(--color-foreground)",
                  }}
                />
                <Line type="monotone" dataKey="net" stroke="var(--color-accent)" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        {profile.targetNet ? (
          <p className="mt-2 text-sm text-muted">Hedef netin: {profile.targetNet}</p>
        ) : null}
      </section>

      <section className="rounded-xl border border-border bg-card p-4">
        <h2 className="font-display text-2xl">Deneme ekle</h2>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {(
            [
              ["tyt", "TYT"],
              ["ayt", "AYT"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setOturum(id);
                setNets({});
              }}
              className={
                oturum === id
                  ? "h-11 rounded-md bg-accent text-sm font-medium text-accent-foreground"
                  : "h-11 rounded-md bg-subtle text-sm font-medium"
              }
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <Field label="Tarih">
            <TextInput type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </Field>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {template.map((section) => (
            <Field key={section.id} label={`${section.label} / ${section.max}`}>
              <TextInput
                inputMode="decimal"
                value={nets[section.id] ?? ""}
                placeholder="0"
                onChange={(event) => setNets((current) => ({ ...current, [section.id]: event.target.value }))}
              />
            </Field>
          ))}
        </div>
        <div className="mt-4">
          <Field label="Not" hint="Hangi ders boş kaldı, süre yetti mi?">
            <TextArea value={note} maxLength={280} onChange={(event) => setNote(event.target.value)} />
          </Field>
        </div>
        {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}
        <Button className="mt-4" onClick={submit}>
          Deftere yaz
        </Button>
      </section>

      <ul className="flex flex-col gap-3">
        {[...mocks].reverse().map((mock) => (
          <li key={mock.id} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-muted">
                  {mock.date} · {mock.oturum.toUpperCase()}
                </p>
                <p className="mt-1 font-display text-3xl tabular-nums">
                  {trimNet(totalNet(mock.sections))}
                  <span className="ml-1 font-sans text-sm text-muted">/ {totalMax(mock.sections)}</span>
                </p>
              </div>
              <Button variant="danger" size="sm" onClick={() => removeMock(mock.id)}>
                Sil
              </Button>
            </div>
            <p className="mt-2 text-sm text-muted">
              {mock.sections.map((section) => `${section.label} ${trimNet(section.net)}`).join(" · ")}
            </p>
            {mock.note ? <p className="mt-2 text-sm">{mock.note}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function trimNet(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0$/, "").replace(/\.$/, "");
}
