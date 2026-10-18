import { createServerFn } from "@tanstack/react-start";
import { CURRICULUM_BRIEF } from "@/data/curriculum";

const SYSTEM = `Sen Mürekkep'sin. 11. sınıf öğrencisinin YKS koçusun. Türkçe konuş. Kısa, somut ve saygılı ol. Boş motive cümlesi kurma.

Bağlam:
- Öğrenci 2026-2027'de 11. sınıfta, Türkiye Yüzyılı Maarif Modeli ile okuyor. Sınavı 2028 YKS.
- MEB, 2028'de soruların beceri ve bağlama daha yakın olacağını söyledi. ÖSYM 2028 soru sayısı ve kılavuzu bu sohbette kesin değildir. Soru sayısı uydurma.
- Güncel TYT/AYT çatkısını çalışma düzeni için kullan, "kesin 2028 dağılımı" diye sunma.
- ${CURRICULUM_BRIEF}
- Türev, integral ve limiti 11. sınıf ünitesi gibi dayatma.

Cevap düzeni:
1) Teşhis: bir cümle.
2) Bu oturum: dakika dakika ne yapacağı. En fazla dört adım.
3) Bir mini örnek, kontrol sorusu ya da cümle kurma işi.
4) Gerekirse tek uyarı.

Kurallar:
- 11. sınıf seviyesinde anlat. Formülü sade yaz.
- Ödevi olduğu gibi teslim ettirme. Yöntemi göster, öğrenciyi adım adım çalıştır.
- "Kazanırsın" diye kader biçme. Net, konu açığı ve süre konuş.
- En fazla 180 kelime.`;

type Incoming = {
  message: string;
  history: { role: "user" | "assistant"; content: string }[];
  context: string;
};

function clean(input: Incoming): Incoming {
  const message = String(input?.message ?? "").trim().slice(0, 1200);
  if (!message) throw new Error("Boş mesaj gönderilemez.");
  const history = Array.isArray(input?.history)
    ? input.history.slice(-8).map((item) => ({
        role: item?.role === "assistant" ? ("assistant" as const) : ("user" as const),
        content: String(item?.content ?? "").slice(0, 2000),
      }))
    : [];
  return {
    message,
    history: history.filter((item) => item.content.length > 0),
    context: String(input?.context ?? "").slice(0, 4000),
  };
}

export const askCoach = createServerFn({ method: "POST" })
  .validator((input: Incoming) => clean(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "Koç şu an çevrimdışı. Planın ve konu haritan duruyor." };
    }

    try {
      const response = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        signal: AbortSignal.timeout(25000),
        body: JSON.stringify({
          model: "grok-4.5",
          temperature: 0.4,
          max_tokens: 520,
          messages: [
            { role: "system", content: SYSTEM },
            {
              role: "system",
              content: `Öğrencinin güncel defteri:\n${data.context}`,
            },
            ...data.history,
            { role: "user", content: data.message },
          ],
        }),
      });

      if (!response.ok) {
        return { ok: false as const, error: "Koç cevap veremedi. Biraz sonra tekrar dene." };
      }

      const body = (await response.json()) as {
        choices?: { message?: { content?: string } }[];
      };
      const text = body.choices?.[0]?.message?.content?.trim() ?? "";
      if (!text) return { ok: false as const, error: "Koç boş cevap döndü. Soruyu biraz daha somut sor." };
      return { ok: true as const, text };
    } catch {
      return { ok: false as const, error: "Bağlantı koptu. Sorun duruyor, yeniden gönderebilirsin." };
    }
  });
