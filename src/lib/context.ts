import { alanLabel, subjectById, TOPICS, WEIGHTS } from "@/data/curriculum";
import { totalMax, totalNet } from "@/data/exams";
import { daysUntil, isoDate } from "@/lib/dates";
import type { StudyBlock } from "@/lib/plan";
import type { MasteryLevel, MockExam, Profile, Session } from "@/lib/types";

export function buildContext(input: {
  profile: Profile;
  mastery: Record<string, MasteryLevel>;
  mocks: MockExam[];
  sessions: Session[];
  blocks: StudyBlock[];
  done: Record<string, true>;
}) {
  const { profile } = input;
  const allowed = new Set(WEIGHTS[profile.alan].map((item) => item.id));
  for (const id of profile.focus) allowed.add(id);
  const weak = TOPICS.filter((topic) => allowed.has(topic.subjectId) && (input.mastery[topic.id] ?? 0) <= 1)
    .slice(0, 8)
    .map((topic) => `${subjectById(topic.subjectId)?.short ?? topic.subjectId}: ${topic.title}`);
  const solid = TOPICS.filter((topic) => allowed.has(topic.subjectId) && (input.mastery[topic.id] ?? 0) === 3).length;
  const relevant = TOPICS.filter((topic) => allowed.has(topic.subjectId)).length;
  const today = isoDate();
  const weekMinutes = input.sessions
    .filter((session) => session.date >= shift(today, -6))
    .reduce((sum, session) => sum + session.minutes, 0);
  const mocks = [...input.mocks]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-3)
    .map((mock) => {
      const net = totalNet(mock.sections).toFixed(2).replace(/\.00$/, "");
      const max = totalMax(mock.sections);
      return `${mock.date} ${mock.oturum.toUpperCase()} ${net}/${max}`;
    });
  const plan = input.blocks
    .map((block) => `${block.start} ${block.subject} / ${block.title} / ${block.minutes} dk${input.done[block.key] ? " (bitti)" : ""}`)
    .join("\n");

  return [
    `Ad: ${profile.name}. Alan: ${alanLabel(profile.alan)}. Günde ${profile.dailyHours} saat.`,
    `Hedef: ${profile.target || "henüz yazmadı"}.`,
    `Sınava ${daysUntil(profile.examDate)} gün (tarih ${profile.examDate}, tahmini).`,
    `Zorlandığı dersler: ${profile.focus.map((id) => subjectById(id)?.name ?? id).join(", ") || "işaretlemedi"}.`,
    `İşaretli konu: ${solid}/${relevant} sağlam.`,
    `Son 7 gün çalışılan: ${weekMinutes} dk.`,
    `En açık konular: ${weak.join("; ") || "henüz işaret yok"}.`,
    `Son denemeler: ${mocks.join(" | ") || "yok"}.`,
    `Bugünün planı:\n${plan || "yok"}`,
  ].join("\n");
}

function shift(iso: string, days: number) {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year ?? 2026, (month ?? 1) - 1, day ?? 1);
  date.setDate(date.getDate() + days);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
