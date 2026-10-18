import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { n as CURRICULUM_BRIEF } from "./curriculum-Clq1kdo5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coach.functions-CZMNDRYz.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SYSTEM = `Sen Mürekkep'sin. 11. sınıf öğrencisinin YKS koçusun. Türkçe konuş. Kısa, somut ve saygılı ol. Boş motive cümlesi kurma.

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
function clean(input) {
	const message = String(input?.message ?? "").trim().slice(0, 1200);
	if (!message) throw new Error("Boş mesaj gönderilemez.");
	return {
		message,
		history: (Array.isArray(input?.history) ? input.history.slice(-8).map((item) => ({
			role: item?.role === "assistant" ? "assistant" : "user",
			content: String(item?.content ?? "").slice(0, 2e3)
		})) : []).filter((item) => item.content.length > 0),
		context: String(input?.context ?? "").slice(0, 4e3)
	};
}
var askCoach_createServerFn_handler = createServerRpc({
	id: "0071272795c9a221527a7a562cf38040d03ef1b9a4823b9669e9929e1a8187c5",
	name: "askCoach",
	filename: "src/lib/coach.functions.ts"
}, (opts) => askCoach.__executeServer(opts));
var askCoach = createServerFn({ method: "POST" }).validator((input) => clean(input)).handler(askCoach_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "Koç şu an çevrimdışı. Planın ve konu haritan duruyor."
	};
	try {
		const response = await fetch("https://api.x.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			signal: AbortSignal.timeout(25e3),
			body: JSON.stringify({
				model: "grok-4.5",
				temperature: .4,
				max_tokens: 520,
				messages: [
					{
						role: "system",
						content: SYSTEM
					},
					{
						role: "system",
						content: `Öğrencinin güncel defteri:\n${data.context}`
					},
					...data.history,
					{
						role: "user",
						content: data.message
					}
				]
			})
		});
		if (!response.ok) return {
			ok: false,
			error: "Koç cevap veremedi. Biraz sonra tekrar dene."
		};
		const text = (await response.json()).choices?.[0]?.message?.content?.trim() ?? "";
		if (!text) return {
			ok: false,
			error: "Koç boş cevap döndü. Soruyu biraz daha somut sor."
		};
		return {
			ok: true,
			text
		};
	} catch {
		return {
			ok: false,
			error: "Bağlantı koptu. Sorun duruyor, yeniden gönderebilirsin."
		};
	}
});
//#endregion
export { askCoach_createServerFn_handler };
