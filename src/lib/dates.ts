export function isoDate(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function parseIso(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y ?? 2028, (m ?? 1) - 1, d ?? 1);
}

export function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function daysUntil(iso: string, from = new Date()) {
  const target = parseIso(iso);
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  return Math.round((target.getTime() - start.getTime()) / 86400000);
}

export function weekDates(anchor = new Date()) {
  const day = anchor.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = addDays(new Date(anchor.getFullYear(), anchor.getMonth(), anchor.getDate()), mondayOffset);
  return Array.from({ length: 7 }, (_, index) => addDays(monday, index));
}

export function formatLong(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

export function formatShort(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "short",
  }).format(date);
}

export function weekdayShort(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", { weekday: "short" }).format(date);
}

export function formatMinutes(minutes: number) {
  const rounded = Math.max(0, Math.round(minutes));
  if (rounded < 60) return `${rounded} dk`;
  const hours = Math.floor(rounded / 60);
  const rest = rounded % 60;
  return rest ? `${hours} sa ${rest} dk` : `${hours} sa`;
}

export function clock(minutesFromMidnight: number) {
  const wrapped = ((minutesFromMidnight % 1440) + 1440) % 1440;
  const h = Math.floor(wrapped / 60);
  const m = wrapped % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
