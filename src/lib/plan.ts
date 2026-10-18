import { WEIGHTS, subjectById, topicById } from "@/data/curriculum";
import { TOPICS } from "@/data/curriculum";
import { clock, parseIso } from "@/lib/dates";
import type { MasteryLevel, Profile } from "@/lib/types";

export type BlockKind = "anlatim" | "ornek" | "soru" | "tekrar";

export type StudyBlock = {
  key: string;
  subjectId: string;
  subject: string;
  topicId: string;
  theme: string;
  title: string;
  how: string;
  minutes: number;
  kind: BlockKind;
  start: string;
  end: string;
};

export const KIND_LABEL: Record<BlockKind, string> = {
  anlatim: "Konu",
  ornek: "Örnek",
  soru: "Soru",
  tekrar: "Tekrar",
};

function hashString(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function weightsFor(profile: Profile) {
  const table = WEIGHTS[profile.alan].map((item) => ({ ...item }));
  for (const id of profile.focus) {
    const found = table.find((item) => item.id === id);
    if (found) found.w += 2;
    else table.push({ id, w: 2 });
  }
  return table.filter((item) => TOPICS.some((topic) => topic.subjectId === item.id));
}

function pickSubjects(profile: Profile, count: number, seed: number) {
  const bag = weightsFor(profile);
  const chosen: string[] = [];
  let state = seed || 1;
  while (chosen.length < count && bag.length > 0) {
    const total = bag.reduce((sum, item) => sum + item.w, 0);
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    let roll = state % total;
    let index = 0;
    for (; index < bag.length; index += 1) {
      roll -= bag[index]!.w;
      if (roll < 0) break;
    }
    const pick = bag[Math.min(index, bag.length - 1)]!;
    chosen.push(pick.id);
    bag.splice(Math.min(index, bag.length - 1), 1);
  }
  return chosen;
}

function pickTopic(
  subjectId: string,
  date: string,
  index: number,
  count: number,
  mastery: Record<string, MasteryLevel>,
  nonce: number,
) {
  const day = parseIso(date).getDay();
  const preferTyt = day === 0 ? index % 2 === 1 : index === count - 1 && count >= 3;
  let pool = TOPICS.filter((item) => item.subjectId === subjectId && item.track === (preferTyt ? "tyt" : "11"));
  if (pool.length === 0) {
    pool = TOPICS.filter((item) => item.subjectId === subjectId);
  }
  const open = pool.filter((item) => (mastery[item.id] ?? 0) < 3);
  const list = open.length > 0 ? open : pool;
  const lowest = Math.min(...list.map((item) => mastery[item.id] ?? 0));
  const band = list.filter((item) => (mastery[item.id] ?? 0) === lowest);
  const choice = band[hashString(`${date}:${subjectId}:${index}:${nonce}`) % band.length]!;
  return choice;
}

export function buildDay(
  date: string,
  profile: Profile,
  mastery: Record<string, MasteryLevel>,
  nonce = 0,
): StudyBlock[] {
  const total = Math.max(45, Math.round(profile.dailyHours * 60));
  const table = weightsFor(profile);
  let count = Math.round(total / 50);
  count = Math.min(Math.max(count, 1), 5, Math.max(table.length, 1));
  const each = Math.max(30, Math.min(75, Math.round(total / count / 5) * 5));
  const seed = hashString(`${date}:${profile.alan}:${profile.dailyHours}:${nonce}:${profile.focus.join(",")}`);
  const subjects = pickSubjects(profile, count, seed);
  const day = parseIso(date).getDay();
  const weekday = day >= 1 && day <= 5;
  let cursor = weekday ? (count >= 4 ? 18 * 60 : 19 * 60) : day === 6 ? 10 * 60 + 30 : 11 * 60;

  return subjects.map((subjectId, index) => {
    const item = pickTopic(subjectId, date, index, count, mastery, nonce);
    const level = mastery[item.id] ?? 0;
    let kind: BlockKind = level === 0 ? "anlatim" : level === 1 ? "ornek" : "soru";
    if (day === 0 && level > 0) kind = "tekrar";
    const start = cursor;
    const end = cursor + each;
    cursor = end + 10;
    return {
      key: `${date}:${nonce}:${index}`,
      subjectId,
      subject: subjectById(subjectId)?.name ?? subjectId,
      topicId: item.id,
      theme: item.theme,
      title: item.title,
      how: item.how,
      minutes: each,
      kind,
      start: clock(start),
      end: clock(end),
    };
  });
}

export function blockTitle(topicId: string) {
  return topicById(topicId)?.title ?? "Konu";
}
