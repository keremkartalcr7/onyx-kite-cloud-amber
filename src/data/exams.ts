import type { Alan, MockSection } from "@/lib/types";

export type Oturum = "tyt" | "ayt";

export function examSections(oturum: Oturum, alan: Alan): MockSection[] {
  if (oturum === "tyt") {
    return [
      { id: "tur", label: "Türkçe", max: 40, net: 0 },
      { id: "sos", label: "Sosyal", max: 20, net: 0 },
      { id: "mat", label: "Matematik", max: 40, net: 0 },
      { id: "fen", label: "Fen", max: 20, net: 0 },
    ];
  }
  if (alan === "say") {
    return [
      { id: "mat", label: "Matematik", max: 40, net: 0 },
      { id: "fiz", label: "Fizik", max: 14, net: 0 },
      { id: "kim", label: "Kimya", max: 13, net: 0 },
      { id: "bio", label: "Biyoloji", max: 13, net: 0 },
    ];
  }
  if (alan === "ea") {
    return [
      { id: "mat", label: "Matematik", max: 40, net: 0 },
      { id: "edb", label: "Edebiyat", max: 24, net: 0 },
      { id: "tar", label: "Tarih-1", max: 10, net: 0 },
      { id: "cog", label: "Coğrafya-1", max: 6, net: 0 },
    ];
  }
  if (alan === "dil") {
    return [{ id: "ing", label: "İngilizce", max: 80, net: 0 }];
  }
  return [
    { id: "edb", label: "Edebiyat", max: 24, net: 0 },
    { id: "tar1", label: "Tarih-1", max: 10, net: 0 },
    { id: "cog1", label: "Coğrafya-1", max: 6, net: 0 },
    { id: "tar2", label: "Tarih-2", max: 11, net: 0 },
    { id: "cog2", label: "Coğrafya-2", max: 11, net: 0 },
    { id: "fel", label: "Felsefe", max: 12, net: 0 },
    { id: "din", label: "Din", max: 6, net: 0 },
  ];
}

export function totalNet(sections: { net: number }[]) {
  return sections.reduce((sum, section) => sum + section.net, 0);
}

export function totalMax(sections: { max: number }[]) {
  return sections.reduce((sum, section) => sum + section.max, 0);
}
