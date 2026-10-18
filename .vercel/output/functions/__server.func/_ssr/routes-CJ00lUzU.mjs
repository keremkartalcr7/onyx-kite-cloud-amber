import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as WEIGHTS, i as TOPICS, o as alanLabel, r as SUBJECTS, s as subjectById, t as ALANLAR } from "./curriculum-Clq1kdo5.mjs";
import { a as RotateCcw, c as MessagesSquare, d as CalendarDays, f as BookOpen, i as SendHorizontal, l as Check, n as SunMedium, o as Play, r as Settings, s as Pause, u as ChartLine } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as CartesianGrid, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CJ00lUzU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[background-color,opacity,transform] duration-quick ease-smooth active:scale-[0.98] disabled:pointer-events-none disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-foreground hover:opacity-90",
			quiet: "bg-subtle text-foreground hover:bg-accent-soft",
			ghost: "bg-transparent text-foreground hover:bg-subtle",
			danger: "bg-transparent text-danger hover:bg-subtle"
		},
		size: {
			md: "h-11 px-4 text-sm rounded-full",
			sm: "h-10 px-3 text-sm rounded-full",
			icon: "size-11 rounded-full"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
var askCoach = createServerFn({ method: "POST" }).validator((input) => clean(input)).handler(createSsrRpc("0071272795c9a221527a7a562cf38040d03ef1b9a4823b9669e9929e1a8187c5"));
function examSections(oturum, alan) {
	if (oturum === "tyt") return [
		{
			id: "tur",
			label: "Türkçe",
			max: 40,
			net: 0
		},
		{
			id: "sos",
			label: "Sosyal",
			max: 20,
			net: 0
		},
		{
			id: "mat",
			label: "Matematik",
			max: 40,
			net: 0
		},
		{
			id: "fen",
			label: "Fen",
			max: 20,
			net: 0
		}
	];
	if (alan === "say") return [
		{
			id: "mat",
			label: "Matematik",
			max: 40,
			net: 0
		},
		{
			id: "fiz",
			label: "Fizik",
			max: 14,
			net: 0
		},
		{
			id: "kim",
			label: "Kimya",
			max: 13,
			net: 0
		},
		{
			id: "bio",
			label: "Biyoloji",
			max: 13,
			net: 0
		}
	];
	if (alan === "ea") return [
		{
			id: "mat",
			label: "Matematik",
			max: 40,
			net: 0
		},
		{
			id: "edb",
			label: "Edebiyat",
			max: 24,
			net: 0
		},
		{
			id: "tar",
			label: "Tarih-1",
			max: 10,
			net: 0
		},
		{
			id: "cog",
			label: "Coğrafya-1",
			max: 6,
			net: 0
		}
	];
	if (alan === "dil") return [{
		id: "ing",
		label: "İngilizce",
		max: 80,
		net: 0
	}];
	return [
		{
			id: "edb",
			label: "Edebiyat",
			max: 24,
			net: 0
		},
		{
			id: "tar1",
			label: "Tarih-1",
			max: 10,
			net: 0
		},
		{
			id: "cog1",
			label: "Coğrafya-1",
			max: 6,
			net: 0
		},
		{
			id: "tar2",
			label: "Tarih-2",
			max: 11,
			net: 0
		},
		{
			id: "cog2",
			label: "Coğrafya-2",
			max: 11,
			net: 0
		},
		{
			id: "fel",
			label: "Felsefe",
			max: 12,
			net: 0
		},
		{
			id: "din",
			label: "Din",
			max: 6,
			net: 0
		}
	];
}
function totalNet(sections) {
	return sections.reduce((sum, section) => sum + section.net, 0);
}
function totalMax(sections) {
	return sections.reduce((sum, section) => sum + section.max, 0);
}
function isoDate(date = /* @__PURE__ */ new Date()) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function parseIso(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(y ?? 2028, (m ?? 1) - 1, d ?? 1);
}
function addDays(date, days) {
	const next = new Date(date);
	next.setDate(next.getDate() + days);
	return next;
}
function daysUntil(iso, from = /* @__PURE__ */ new Date()) {
	const target = parseIso(iso);
	const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
	return Math.round((target.getTime() - start.getTime()) / 864e5);
}
function weekDates(anchor = /* @__PURE__ */ new Date()) {
	const day = anchor.getDay();
	const mondayOffset = day === 0 ? -6 : 1 - day;
	const monday = addDays(new Date(anchor.getFullYear(), anchor.getMonth(), anchor.getDate()), mondayOffset);
	return Array.from({ length: 7 }, (_, index) => addDays(monday, index));
}
function formatLong(date) {
	return new Intl.DateTimeFormat("tr-TR", {
		weekday: "long",
		day: "numeric",
		month: "long"
	}).format(date);
}
function formatShort(date) {
	return new Intl.DateTimeFormat("tr-TR", {
		day: "numeric",
		month: "short"
	}).format(date);
}
function weekdayShort(date) {
	return new Intl.DateTimeFormat("tr-TR", { weekday: "short" }).format(date);
}
function formatMinutes(minutes) {
	const rounded = Math.max(0, Math.round(minutes));
	if (rounded < 60) return `${rounded} dk`;
	const hours = Math.floor(rounded / 60);
	const rest = rounded % 60;
	return rest ? `${hours} sa ${rest} dk` : `${hours} sa`;
}
function clock(minutesFromMidnight) {
	const wrapped = (minutesFromMidnight % 1440 + 1440) % 1440;
	const h = Math.floor(wrapped / 60);
	const m = wrapped % 60;
	return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function buildContext(input) {
	const { profile } = input;
	const allowed = new Set(WEIGHTS[profile.alan].map((item) => item.id));
	for (const id of profile.focus) allowed.add(id);
	const weak = TOPICS.filter((topic) => allowed.has(topic.subjectId) && (input.mastery[topic.id] ?? 0) <= 1).slice(0, 8).map((topic) => `${subjectById(topic.subjectId)?.short ?? topic.subjectId}: ${topic.title}`);
	const solid = TOPICS.filter((topic) => allowed.has(topic.subjectId) && (input.mastery[topic.id] ?? 0) === 3).length;
	const relevant = TOPICS.filter((topic) => allowed.has(topic.subjectId)).length;
	const today = isoDate();
	const weekMinutes = input.sessions.filter((session) => session.date >= shift(today, -6)).reduce((sum, session) => sum + session.minutes, 0);
	const mocks = [...input.mocks].sort((a, b) => a.date.localeCompare(b.date)).slice(-3).map((mock) => {
		const net = totalNet(mock.sections).toFixed(2).replace(/\.00$/, "");
		const max = totalMax(mock.sections);
		return `${mock.date} ${mock.oturum.toUpperCase()} ${net}/${max}`;
	});
	const plan = input.blocks.map((block) => `${block.start} ${block.subject} / ${block.title} / ${block.minutes} dk${input.done[block.key] ? " (bitti)" : ""}`).join("\n");
	return [
		`Ad: ${profile.name}. Alan: ${alanLabel(profile.alan)}. Günde ${profile.dailyHours} saat.`,
		`Hedef: ${profile.target || "henüz yazmadı"}.`,
		`Sınava ${daysUntil(profile.examDate)} gün (tarih ${profile.examDate}, tahmini).`,
		`Zorlandığı dersler: ${profile.focus.map((id) => subjectById(id)?.name ?? id).join(", ") || "işaretlemedi"}.`,
		`İşaretli konu: ${solid}/${relevant} sağlam.`,
		`Son 7 gün çalışılan: ${weekMinutes} dk.`,
		`En açık konular: ${weak.join("; ") || "henüz işaret yok"}.`,
		`Son denemeler: ${mocks.join(" | ") || "yok"}.`,
		`Bugünün planı:\n${plan || "yok"}`
	].join("\n");
}
function shift(iso, days) {
	const [year, month, day] = iso.split("-").map(Number);
	const date = new Date(year ?? 2026, (month ?? 1) - 1, day ?? 1);
	date.setDate(date.getDate() + days);
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
var KIND_LABEL = {
	anlatim: "Konu",
	ornek: "Örnek",
	soru: "Soru",
	tekrar: "Tekrar"
};
function hashString(value) {
	let hash = 2166136261;
	for (let index = 0; index < value.length; index += 1) {
		hash ^= value.charCodeAt(index);
		hash = Math.imul(hash, 16777619);
	}
	return hash >>> 0;
}
function weightsFor(profile) {
	const table = WEIGHTS[profile.alan].map((item) => ({ ...item }));
	for (const id of profile.focus) {
		const found = table.find((item) => item.id === id);
		if (found) found.w += 2;
		else table.push({
			id,
			w: 2
		});
	}
	return table.filter((item) => TOPICS.some((topic) => topic.subjectId === item.id));
}
function pickSubjects(profile, count, seed) {
	const bag = weightsFor(profile);
	const chosen = [];
	let state = seed || 1;
	while (chosen.length < count && bag.length > 0) {
		const total = bag.reduce((sum, item) => sum + item.w, 0);
		state = Math.imul(state, 1664525) + 1013904223 >>> 0;
		let roll = state % total;
		let index = 0;
		for (; index < bag.length; index += 1) {
			roll -= bag[index].w;
			if (roll < 0) break;
		}
		const pick = bag[Math.min(index, bag.length - 1)];
		chosen.push(pick.id);
		bag.splice(Math.min(index, bag.length - 1), 1);
	}
	return chosen;
}
function pickTopic(subjectId, date, index, mastery, nonce) {
	const preferTyt = parseIso(date).getDay() === 0 || hashString(`${date}:${index}:${nonce}`) % 4 === 0;
	let pool = TOPICS.filter((item) => item.subjectId === subjectId && item.track === (preferTyt ? "tyt" : "11"));
	if (pool.length === 0) pool = TOPICS.filter((item) => item.subjectId === subjectId);
	const open = pool.filter((item) => (mastery[item.id] ?? 0) < 3);
	const list = open.length > 0 ? open : pool;
	const lowest = Math.min(...list.map((item) => mastery[item.id] ?? 0));
	const band = list.filter((item) => (mastery[item.id] ?? 0) === lowest);
	return band[hashString(`${date}:${subjectId}:${index}:${nonce}`) % band.length];
}
function buildDay(date, profile, mastery, nonce = 0) {
	const total = Math.max(45, Math.round(profile.dailyHours * 60));
	const table = weightsFor(profile);
	let count = Math.round(total / 50);
	count = Math.min(Math.max(count, 1), 5, Math.max(table.length, 1));
	const each = Math.max(30, Math.min(75, Math.round(total / count / 5) * 5));
	const seed = hashString(`${date}:${profile.alan}:${profile.dailyHours}:${nonce}:${profile.focus.join(",")}`);
	const subjects = pickSubjects(profile, count, seed);
	const day = parseIso(date).getDay();
	let cursor = day >= 1 && day <= 5 ? count >= 4 ? 1080 : 1140 : day === 6 ? 630 : 660;
	return subjects.map((subjectId, index) => {
		const item = pickTopic(subjectId, date, index, mastery, nonce);
		const level = mastery[item.id] ?? 0;
		let kind = level === 0 ? "anlatim" : level === 1 ? "ornek" : "soru";
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
			end: clock(end)
		};
	});
}
var empty = {
	mastery: {},
	sessions: [],
	done: {},
	dayNonce: {},
	dayNotes: {},
	mocks: [],
	messages: []
};
var useCoach = create()(persist((set, get) => ({
	hydrated: false,
	profile: null,
	...empty,
	draft: "",
	view: "today",
	setHydrated: () => set({ hydrated: true }),
	setProfile: (profile) => set({ profile }),
	setView: (view) => set({ view }),
	setDraft: (draft) => set({ draft }),
	setMastery: (topicId, level) => set({ mastery: {
		...get().mastery,
		[topicId]: level
	} }),
	setDayNote: (date, note) => set({ dayNotes: {
		...get().dayNotes,
		[date]: note.slice(0, 400)
	} }),
	bumpDay: (date) => set({ dayNonce: {
		...get().dayNonce,
		[date]: (get().dayNonce[date] ?? 0) + 1
	} }),
	completeBlock: (key, date, subjectId, topicId, minutes) => {
		if (get().done[key]) return;
		set({
			done: {
				...get().done,
				[key]: true
			},
			sessions: [...get().sessions, {
				id: crypto.randomUUID(),
				date,
				subjectId,
				topicId,
				minutes,
				source: "plan"
			}].slice(-500)
		});
	},
	undoBlock: (key, date, topicId) => {
		const done = { ...get().done };
		delete done[key];
		const sessions = [...get().sessions];
		let index = -1;
		for (let cursor = sessions.length - 1; cursor >= 0; cursor -= 1) {
			const session = sessions[cursor];
			if (session && session.date === date && session.topicId === topicId && session.source === "plan") {
				index = cursor;
				break;
			}
		}
		if (index >= 0) sessions.splice(index, 1);
		set({
			done,
			sessions
		});
	},
	logTimer: (date, subjectId, topicId, minutes, key) => {
		set({
			done: {
				...get().done,
				[key]: true
			},
			sessions: [...get().sessions, {
				id: crypto.randomUUID(),
				date,
				subjectId,
				topicId,
				minutes,
				source: "timer"
			}].slice(-500)
		});
	},
	addMock: (mock) => set({ mocks: [...get().mocks, mock].slice(-80) }),
	removeMock: (id) => set({ mocks: get().mocks.filter((mock) => mock.id !== id) }),
	addMessage: (message) => set({ messages: [...get().messages, message].slice(-40) }),
	patchMessage: (id, patch) => set({ messages: get().messages.map((message) => message.id === id ? {
		...message,
		...patch
	} : message) }),
	resetProgress: () => set({
		...empty,
		draft: "",
		view: "today"
	})
}), {
	name: "murekkep-v1",
	partialize: (state) => ({
		profile: state.profile,
		mastery: state.mastery,
		sessions: state.sessions,
		done: state.done,
		dayNonce: state.dayNonce,
		dayNotes: state.dayNotes,
		mocks: state.mocks,
		messages: state.messages
	}),
	onRehydrateStorage: () => (state) => {
		state?.setHydrated();
	}
}));
var PROMPTS = [
	"Bugün masamda neye öncelik vereyim?",
	"Son denememe göre bu hafta neyi keseyim?",
	"25 dakikalık bir paragraf çalışması yaz."
];
function ChatView() {
	const profile = useCoach((state) => state.profile);
	const mastery = useCoach((state) => state.mastery);
	const mocks = useCoach((state) => state.mocks);
	const sessions = useCoach((state) => state.sessions);
	const done = useCoach((state) => state.done);
	const dayNonce = useCoach((state) => state.dayNonce);
	const messages = useCoach((state) => state.messages);
	const draft = useCoach((state) => state.draft);
	const setDraft = useCoach((state) => state.setDraft);
	const addMessage = useCoach((state) => state.addMessage);
	const patchMessage = useCoach((state) => state.patchMessage);
	const [sending, setSending] = (0, import_react.useState)(false);
	const scroller = (0, import_react.useRef)(null);
	const today = isoDate();
	const blocks = buildDay(today, profile, mastery, dayNonce[today] ?? 0);
	(0, import_react.useEffect)(() => {
		scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
	}, [messages, sending]);
	async function send(text) {
		const message = text.trim();
		if (!message || sending) return;
		const userId = crypto.randomUUID();
		const pendingId = crypto.randomUUID();
		addMessage({
			id: userId,
			role: "user",
			content: message
		});
		addMessage({
			id: pendingId,
			role: "assistant",
			content: "Bakıyorum."
		});
		setDraft("");
		setSending(true);
		const history = [...messages.filter((item) => !item.error), {
			role: "user",
			content: message
		}];
		try {
			const result = await askCoach({ data: {
				message,
				history: history.slice(0, -1).map((item) => ({
					role: item.role,
					content: item.content
				})),
				context: buildContext({
					profile,
					mastery,
					mocks,
					sessions,
					blocks,
					done
				})
			} });
			if (result.ok) patchMessage(pendingId, { content: result.text });
			else patchMessage(pendingId, {
				content: result.error,
				error: true
			});
		} catch {
			patchMessage(pendingId, {
				content: "Mesaj gitmedi. Aynı soruyu yeniden gönderebilirsin.",
				error: true
			});
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex h-full w-full max-w-3xl min-h-0 flex-col px-4 pt-6 md:px-8 md:pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Koç"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Defterini görür. Kısa sor. Her mesaj kotandan gider."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scroller,
				className: "mt-4 flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto pb-3",
				children: [messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-border bg-card p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "Ben Mürekkep. 11. sınıftasın, sınavın 2028. Takıldığın konuyu, süreni ya da son denemeni yaz. Sana bir oturum çıkarayım."
					})
				}) : null, messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("max-w-[40rem] rounded-xl px-4 py-3 text-sm whitespace-pre-wrap", message.role === "user" ? "ml-8 bg-accent text-accent-foreground" : "mr-6 border border-border bg-card", message.error && "text-danger"),
					children: message.content
				}, message.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll-quiet flex gap-2 overflow-x-auto pb-2",
				children: PROMPTS.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: sending,
					onClick: () => void send(prompt),
					className: "h-10 shrink-0 rounded-full border border-border bg-card px-3 text-sm",
					children: prompt
				}, prompt))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex items-end gap-2 py-3",
				onSubmit: (event) => {
					event.preventDefault();
					send(draft);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: draft,
					rows: 2,
					maxLength: 1200,
					placeholder: "Nerede koptun?",
					"aria-label": "Koça mesaj",
					onChange: (event) => setDraft(event.target.value),
					onKeyDown: (event) => {
						if (event.key === "Enter" && !event.shiftKey) {
							event.preventDefault();
							send(draft);
						}
					},
					className: "min-h-11 flex-1 resize-none rounded-md border border-border bg-card px-3 py-2 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					"aria-label": "Gönder",
					disabled: sending || draft.trim().length === 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SendHorizontal, { className: "size-4" })
				})]
			})
		]
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-2 block text-sm font-medium",
				children: label
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block text-sm text-muted",
				children: hint
			}) : null
		]
	});
}
var control = "w-full rounded-sm border border-border bg-card px-3 text-base text-foreground placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
function TextInput({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(control, "h-11", className),
		...props
	});
}
function TextArea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(control, "min-h-24 py-3", className),
		...props
	});
}
function MocksView() {
	const profile = useCoach((state) => state.profile);
	const mocks = useCoach((state) => state.mocks);
	const addMock = useCoach((state) => state.addMock);
	const removeMock = useCoach((state) => state.removeMock);
	const [oturum, setOturum] = (0, import_react.useState)("tyt");
	const [date, setDate] = (0, import_react.useState)(isoDate());
	const [note, setNote] = (0, import_react.useState)("");
	const [nets, setNets] = (0, import_react.useState)({});
	const [error, setError] = (0, import_react.useState)("");
	const template = (0, import_react.useMemo)(() => examSections(oturum, profile.alan), [oturum, profile.alan]);
	const chart = [...mocks].sort((a, b) => a.date.localeCompare(b.date)).map((mock) => ({
		name: mock.date.slice(5),
		net: Math.round(totalNet(mock.sections) * 10) / 10,
		label: mock.oturum.toUpperCase()
	}));
	function submit() {
		const sections = template.map((section) => {
			const raw = nets[section.id]?.trim() ?? "0";
			const net = Number(raw.replace(",", "."));
			return {
				...section,
				net
			};
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
			note: note.trim().slice(0, 280)
		});
		setNets({});
		setNote("");
		setError("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6 md:px-8 md:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Deneme defteri"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-muted",
				children: "Netleri yaz. Tavanlar güncel TYT ve AYT çatkısıdır; 2028 dağılımı kılavuzla değişebilir."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-medium",
						children: "Net eğrisi"
					}),
					chart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted",
						children: "İlk denemenden sonra çizgi burada durur."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-52",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: chart,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "var(--color-border)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										tick: {
											fill: "var(--color-muted)",
											fontSize: 12
										},
										axisLine: false,
										tickLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tick: {
											fill: "var(--color-muted)",
											fontSize: 12
										},
										axisLine: false,
										tickLine: false,
										width: 32
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										formatter: (value) => [`${value} net`, "Toplam"],
										contentStyle: {
											background: "var(--color-card)",
											border: "1px solid var(--color-border)",
											borderRadius: 12,
											color: "var(--color-foreground)"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "net",
										stroke: "var(--color-accent)",
										strokeWidth: 2,
										dot: { r: 3 }
									})
								]
							})
						})
					}),
					profile.targetNet ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: ["Hedef netin: ", profile.targetNet]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Deneme ekle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-2",
						children: [["tyt", "TYT"], ["ayt", "AYT"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setOturum(id);
								setNets({});
							},
							className: oturum === id ? "h-11 rounded-md bg-accent text-sm font-medium text-accent-foreground" : "h-11 rounded-md bg-subtle text-sm font-medium",
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Tarih",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								type: "date",
								value: date,
								onChange: (event) => setDate(event.target.value)
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: template.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: `${section.label} / ${section.max}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								inputMode: "decimal",
								value: nets[section.id] ?? "",
								placeholder: "0",
								onChange: (event) => setNets((current) => ({
									...current,
									[section.id]: event.target.value
								}))
							})
						}, section.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Not",
							hint: "Hangi ders boş kaldı, süre yetti mi?",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: note,
								maxLength: 280,
								onChange: (event) => setNote(event.target.value)
							})
						})
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-danger",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						onClick: submit,
						children: "Deftere yaz"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-3",
				children: [...mocks].reverse().map((mock) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									mock.date,
									" · ",
									mock.oturum.toUpperCase()
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-display text-3xl tabular-nums",
								children: [trimNet(totalNet(mock.sections)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1 font-sans text-sm text-muted",
									children: ["/ ", totalMax(mock.sections)]
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "danger",
								size: "sm",
								onClick: () => removeMock(mock.id),
								children: "Sil"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: mock.sections.map((section) => `${section.label} ${trimNet(section.net)}`).join(" · ")
						}),
						mock.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: mock.note
						}) : null
					]
				}, mock.id))
			})
		]
	});
}
function trimNet(value) {
	return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0$/, "").replace(/\.$/, "");
}
function Onboarding() {
	const setProfile = useCoach((state) => state.setProfile);
	const [step, setStep] = (0, import_react.useState)(0);
	const [name, setName] = (0, import_react.useState)("");
	const [target, setTarget] = (0, import_react.useState)("");
	const [alan, setAlan] = (0, import_react.useState)("say");
	const [hours, setHours] = (0, import_react.useState)(3);
	const [focus, setFocus] = (0, import_react.useState)([]);
	const [examDate, setExamDate] = (0, import_react.useState)("2028-06-17");
	const nameOk = name.trim().length >= 2;
	function toggleFocus(id) {
		setFocus((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	function finish() {
		setProfile({
			name: name.trim().slice(0, 32),
			alan,
			dailyHours: hours,
			target: target.trim().slice(0, 80),
			examDate,
			focus,
			targetNet: null
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl gap-10 px-5 py-10 md:grid-cols-2 md:items-end md:px-8 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium tracking-wide text-accent",
					children: "11. sınıf · Maarif · 2028 YKS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl text-foreground md:text-6xl",
					children: "Mürekkep"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-lg text-muted",
					children: "Günlük masan, konu haritan ve deneme defterin. Koçun boş slogan kurmaz; süreyi ve konuyu söyler."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm tabular-nums text-muted",
						children: [step + 1, " / 3"]
					}),
					step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "Seni nasıl çağırayım?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Adın",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: name,
									maxLength: 32,
									autoComplete: "given-name",
									placeholder: "Adın",
									onChange: (event) => setName(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Hedefin",
								hint: "Bölüm ya da üniversite. Bilmiyorsan boş bırak.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: target,
									maxLength: 80,
									placeholder: "Örnek: bilgisayar mühendisliği",
									onChange: (event) => setTarget(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-2",
								disabled: !nameOk,
								onClick: () => setStep(1),
								children: "Devam"
							})
						]
					}) : null,
					step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "Alanın hangisi?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Planın ağırlığı buna göre kurulur. Sonra değiştirebilirsin."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid grid-cols-2 gap-3",
								children: ALANLAR.map((item) => {
									const selected = alan === item.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-pressed": selected,
										onClick: () => setAlan(item.id),
										className: cn("min-h-24 rounded-lg border px-3 py-3 text-left transition-[background-color,border-color] duration-quick", selected ? "border-accent bg-accent-soft" : "border-border bg-card hover:bg-subtle"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-base font-medium",
											children: item.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm text-muted",
											children: item.hint
										})]
									}, item.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setStep(0),
									children: "Geri"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "flex-1",
									onClick: () => setStep(2),
									children: "Devam"
								})]
							})
						]
					}) : null,
					step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "Günde ne kadar?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-display text-4xl tabular-nums",
								children: [hours, " saat"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "mt-4 w-full",
								type: "range",
								min: 1,
								max: 6,
								step: .5,
								value: hours,
								"aria-label": "Günlük çalışma saati",
								onChange: (event) => setHours(Number(event.target.value))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm font-medium",
								children: "Zorlandığın dersler"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: SUBJECTS.map((subject) => {
									const selected = focus.includes(subject.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": selected,
										onClick: () => toggleFocus(subject.id),
										className: cn("h-10 rounded-full border px-3 text-sm", selected ? "border-accent bg-accent text-accent-foreground" : "border-border bg-card"),
										children: subject.short
									}, subject.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Tahmini TYT günü",
								hint: "17 Haziran 2028 tahmindir. ÖSYM açıklayınca değiştir.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									className: "mt-2",
									type: "date",
									value: examDate,
									onChange: (event) => setExamDate(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setStep(1),
									children: "Geri"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "flex-1",
									onClick: finish,
									children: "Masaya otur"
								})]
							})
						]
					}) : null
				]
			})]
		})
	});
}
function PlanView() {
	const profile = useCoach((state) => state.profile);
	const mastery = useCoach((state) => state.mastery);
	const done = useCoach((state) => state.done);
	const dayNonce = useCoach((state) => state.dayNonce);
	const completeBlock = useCoach((state) => state.completeBlock);
	const undoBlock = useCoach((state) => state.undoBlock);
	const today = isoDate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6 md:px-8 md:py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Haftalık masa"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-xl text-sm text-muted",
			children: "Hafta içi akşam, hafta sonu sabah. Ağırlık alanına göre. İşlediğin konuyu haritada yükselt, plan zayıf olana döner."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-4",
			children: weekDates().map((date) => {
				const iso = isoDate(date);
				const blocks = buildDay(iso, profile, mastery, dayNonce[iso] ?? 0);
				const current = iso === today;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: cn("rounded-xl border bg-card p-4", current ? "border-accent" : "border-border"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-base font-medium capitalize",
							children: [
								weekdayShort(date),
								" · ",
								formatShort(date)
							]
						}), current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-accent",
							children: "Bugün"
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-2",
						children: blocks.map((block) => {
							const finished = Boolean(done[block.key]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 rounded-md bg-subtle px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [
											block.start,
											" · ",
											block.subject,
											" · ",
											KIND_LABEL[block.kind],
											" · ",
											block.minutes,
											" dk"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: block.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: finished ? "primary" : "quiet",
									"aria-label": finished ? "Geri al" : "Bitti işaretle",
									onClick: () => finished ? undoBlock(block.key, iso, block.topicId) : completeBlock(block.key, iso, block.subjectId, block.topicId, block.minutes),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
								})]
							}, block.key);
						})
					})]
				}, iso);
			})
		})]
	});
}
function SettingsView() {
	const profile = useCoach((state) => state.profile);
	const setProfile = useCoach((state) => state.setProfile);
	const resetProgress = useCoach((state) => state.resetProgress);
	const [name, setName] = (0, import_react.useState)(profile.name);
	const [target, setTarget] = (0, import_react.useState)(profile.target);
	const [alan, setAlan] = (0, import_react.useState)(profile.alan);
	const [hours, setHours] = (0, import_react.useState)(profile.dailyHours);
	const [focus, setFocus] = (0, import_react.useState)(profile.focus);
	const [examDate, setExamDate] = (0, import_react.useState)(profile.examDate);
	const [targetNet, setTargetNet] = (0, import_react.useState)(profile.targetNet ? String(profile.targetNet) : "");
	const [armed, setArmed] = (0, import_react.useState)(false);
	const [saved, setSaved] = (0, import_react.useState)(false);
	function toggle(id) {
		setFocus((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
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
			targetNet: net !== null && Number.isFinite(net) && net > 0 && net <= 120 ? net : null
		});
		setSaved(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6 md:px-8 md:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Ayarlar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Plan değişir, işaretlediğin konular durur."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-4 rounded-xl border border-border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Adın",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: name,
							maxLength: 32,
							onChange: (event) => setName(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hedef",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: target,
							maxLength: 80,
							onChange: (event) => setTarget(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: ALANLAR.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": alan === item.id,
							onClick: () => setAlan(item.id),
							className: cn("h-11 rounded-md border text-sm font-medium", alan === item.id ? "border-accent bg-accent-soft" : "border-border"),
							children: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: `Günlük süre: ${hours} saat`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full",
							type: "range",
							min: 1,
							max: 6,
							step: .5,
							value: hours,
							"aria-label": "Günlük çalışma saati",
							onChange: (event) => setHours(Number(event.target.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tahmini sınav günü",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							type: "date",
							value: examDate,
							onChange: (event) => setExamDate(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hedef net",
						hint: "Boş bırakabilirsin. TYT için 120, AYT için 80 üst sınır sayılır.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							inputMode: "decimal",
							value: targetNet,
							placeholder: "Örnek: 90",
							onChange: (event) => setTargetNet(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm font-medium",
						children: "Zorlandığın dersler"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: SUBJECTS.map((subject) => {
							const selected = focus.includes(subject.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": selected,
								onClick: () => toggle(subject.id),
								className: cn("h-10 rounded-full border px-3 text-sm", selected ? "border-accent bg-accent text-accent-foreground" : "border-border"),
								children: subject.short
							}, subject.id);
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: save,
						children: "Kaydet"
					}),
					saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-accent",
						children: "Kaydedildi."
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-medium",
						children: "İlerlemeyi sil"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Konu işaretleri, denemeler, süre ve koç yazışması gider. Adın kalır."
					}),
					armed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "danger",
							onClick: () => resetProgress(),
							children: "Eminim, sil"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setArmed(false),
							children: "Vazgeç"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3",
						variant: "quiet",
						onClick: () => setArmed(true),
						children: "İlerlemeyi sil"
					})
				]
			})
		]
	});
}
var LINES = [
	"Aynı gün yirmi dakika. Okulda gördüğün konuyu akşama bırakma.",
	"Konu bitmiş sayılmaz. On soru çöz, yanlışın nedenini bir cümle yaz.",
	"TYT Türkçe her hafta masada kalsın. Paragrafı alan dersinin yanına koy.",
	"Uzun gün değil, kesintisiz blok. Telefonu başka odaya bırak.",
	"Zayıf konuyu saklama. Koça nerede koptuğunu yaz, örnek iste.",
	"Denemede önce boş bıraktığın konuya bak, nete sonra.",
	"Pazar tekrar günü. Yeni konu açma; bu haftanın yanlışına dön."
];
function pad(value) {
	return String(value).padStart(2, "0");
}
function TodayView() {
	const profile = useCoach((state) => state.profile);
	const mastery = useCoach((state) => state.mastery);
	const done = useCoach((state) => state.done);
	const sessions = useCoach((state) => state.sessions);
	const dayNonce = useCoach((state) => state.dayNonce);
	const dayNotes = useCoach((state) => state.dayNotes);
	const completeBlock = useCoach((state) => state.completeBlock);
	const undoBlock = useCoach((state) => state.undoBlock);
	const logTimer = useCoach((state) => state.logTimer);
	const bumpDay = useCoach((state) => state.bumpDay);
	const setDayNote = useCoach((state) => state.setDayNote);
	const setView = useCoach((state) => state.setView);
	const setDraft = useCoach((state) => state.setDraft);
	const today = isoDate();
	const blocks = buildDay(today, profile, mastery, dayNonce[today] ?? 0);
	const remaining = daysUntil(profile.examDate);
	const weekMinutes = sessions.filter((session) => daysUntil(session.date) >= -6 && daysUntil(session.date) <= 0).reduce((sum, session) => sum + session.minutes, 0);
	const goal = Math.round(profile.dailyHours * 60 * 7);
	const streak = countStreak(sessions, done, today);
	const line = LINES[dayOfYear(/* @__PURE__ */ new Date()) % LINES.length] ?? LINES[0];
	const [activeKey, setActiveKey] = (0, import_react.useState)(null);
	const active = blocks.find((block) => block.key === activeKey) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6 md:px-8 md:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm capitalize text-muted",
					children: formatLong(/* @__PURE__ */ new Date())
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-1 font-display text-4xl",
					children: [
						"Merhaba, ",
						profile.name,
						"."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "md:hidden",
					onClick: () => setView("settings"),
					children: "Ayarlar"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "sınava",
						value: remaining > 0 ? String(remaining) : remaining === 0 ? "bugün" : "geçti",
						unit: remaining > 0 ? "gün" : ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "seri",
						value: String(streak),
						unit: "gün"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "bu hafta",
						value: formatMinutes(weekMinutes),
						unit: `/ ${formatMinutes(goal)}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1.5 overflow-hidden rounded-full bg-subtle",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-accent transition-[width] duration-fast ease-smooth",
					style: { width: `${Math.min(100, Math.round(weekMinutes / Math.max(goal, 1) * 100))}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Bugünün masası"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							blocks.length,
							" blok · ",
							formatMinutes(blocks.reduce((sum, block) => sum + block.minutes, 0))
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "quiet",
						size: "sm",
						onClick: () => bumpDay(today),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Yenile"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 flex flex-col gap-3",
					children: blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockRow, {
						block,
						finished: Boolean(done[block.key]),
						open: activeKey === block.key,
						onOpen: () => setActiveKey((current) => current === block.key ? null : block.key),
						onDone: () => completeBlock(block.key, today, block.subjectId, block.topicId, block.minutes),
						onUndo: () => undoBlock(block.key, today, block.topicId),
						onAsk: () => {
							setDraft(`${block.title} konusunda 11. sınıf seviyesinde takıldım. Teşhis et, sonra ${block.minutes} dakikalık bir çalışma ver.`);
							setView("coach");
						}
					}, block.key))
				})]
			}),
			active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {
				block: active,
				onFinish: (minutes) => logTimer(today, active.subjectId, active.topicId, minutes, active.key)
			}, active.key) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium",
					children: "Günün notu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					className: "mt-3",
					maxLength: 400,
					placeholder: "Bugün nerede koptun, hangi soru tipi kaçtı?",
					value: dayNotes[today] ?? "",
					onChange: (event) => setDayNote(today, event.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xl text-sm text-muted",
				children: line
			})
		]
	});
}
function Stat({ label, value, unit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 font-display text-2xl tabular-nums leading-none",
			children: [value, unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 font-sans text-xs font-medium text-muted",
				children: unit
			}) : null]
		})]
	});
}
function BlockRow({ block, finished, open, onOpen, onDone, onUndo, onAsk }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: cn("rounded-lg border border-border p-4", finished && "bg-accent-soft"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "min-w-0 text-left",
				onClick: onOpen,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							block.start,
							"–",
							block.end,
							" · ",
							block.subject,
							" · ",
							KIND_LABEL[block.kind]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-base font-medium",
						children: block.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [block.minutes, " dk"]
					})
				]
			}), finished ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "quiet",
				size: "sm",
				onClick: onUndo,
				children: "Geri al"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				onClick: onDone,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), "Bitti"]
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 border-t border-border pt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: block.how
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: onAsk,
					children: "Koça sor"
				})
			})]
		}) : null]
	});
}
function Timer({ block, onFinish }) {
	const length = 1500;
	const [left, setLeft] = (0, import_react.useState)(length);
	const [running, setRunning] = (0, import_react.useState)(false);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const savedRef = (0, import_react.useRef)(false);
	const finishRef = (0, import_react.useRef)(onFinish);
	finishRef.current = onFinish;
	(0, import_react.useEffect)(() => {
		if (!running) return;
		const id = window.setInterval(() => {
			setLeft((value) => value > 0 ? value - 1 : 0);
		}, 1e3);
		return () => window.clearInterval(id);
	}, [running]);
	(0, import_react.useEffect)(() => {
		if (left !== 0 || !running || savedRef.current) return;
		savedRef.current = true;
		setRunning(false);
		setSaved(true);
		finishRef.current(25);
	}, [left, running]);
	const minutes = Math.floor(left / 60);
	const seconds = left % 60;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl bg-accent p-6 text-accent-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-accent-foreground/80",
				children: block.subject
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-2xl",
				children: block.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 font-display text-6xl tabular-nums leading-none",
				children: [
					pad(minutes),
					":",
					pad(seconds)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "quiet",
					onClick: () => setRunning((value) => !value),
					disabled: left === 0,
					children: [running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), running ? "Duraklat" : "Başla"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "quiet",
					onClick: () => {
						setRunning(false);
						setLeft(length);
						setSaved(false);
						savedRef.current = false;
					},
					children: "Sıfırla"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-accent-foreground/80",
				children: saved ? "25 dakika işlendi." : "Yirmi beş dakika. Bitince blok tamamlanır."
			})
		]
	});
}
function dayOfYear(date) {
	const start = new Date(date.getFullYear(), 0, 0);
	return Math.floor((date.getTime() - start.getTime()) / 864e5);
}
function countStreak(sessions, done, today) {
	const dates = new Set(sessions.map((session) => session.date));
	for (const key of Object.keys(done)) {
		const date = key.slice(0, 10);
		if (/^\d{4}-\d{2}-\d{2}$/.test(date)) dates.add(date);
	}
	let cursor = dates.has(today) ? today : previous(today);
	let count = 0;
	while (dates.has(cursor)) {
		count += 1;
		cursor = previous(cursor);
	}
	return count;
}
function previous(iso) {
	const [year, month, day] = iso.split("-").map(Number);
	const date = new Date(year ?? 2026, (month ?? 1) - 1, (day ?? 1) - 1);
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
var LEVELS = [
	{
		level: 0,
		label: "Henüz"
	},
	{
		level: 1,
		label: "Gördüm"
	},
	{
		level: 2,
		label: "Soru"
	},
	{
		level: 3,
		label: "Sağlam"
	}
];
function TopicsView() {
	const mastery = useCoach((state) => state.mastery);
	const setMastery = useCoach((state) => state.setMastery);
	const setDraft = useCoach((state) => state.setDraft);
	const setView = useCoach((state) => state.setView);
	const [track, setTrack] = (0, import_react.useState)("11");
	const [subjectId, setSubjectId] = (0, import_react.useState)("mat");
	const [query, setQuery] = (0, import_react.useState)("");
	const subjects = SUBJECTS.filter((subject) => TOPICS.some((topic) => topic.subjectId === subject.id && topic.track === track));
	const activeSubject = subjects.some((subject) => subject.id === subjectId) ? subjectId : subjects[0]?.id ?? "mat";
	const rows = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLocaleLowerCase("tr");
		return TOPICS.filter((topic) => {
			if (topic.track !== track || topic.subjectId !== activeSubject) return false;
			if (!needle) return true;
			return `${topic.title} ${topic.theme}`.toLocaleLowerCase("tr").includes(needle);
		});
	}, [
		activeSubject,
		query,
		track
	]);
	const themes = [];
	for (const topic of rows) {
		const group = themes.find((item) => item.theme === topic.theme);
		if (group) group.items.push(topic);
		else themes.push({
			theme: topic.theme,
			items: [topic]
		});
	}
	const owned = TOPICS.filter((topic) => topic.subjectId === activeSubject && topic.track === track);
	const solid = owned.filter((topic) => (mastery[topic.id] ?? 0) === 3).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6 md:px-8 md:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Konu haritası"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					solid,
					"/",
					owned.length,
					" sağlam · ",
					SUBJECTS.find((item) => item.id === activeSubject)?.name
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 rounded-lg bg-subtle p-1",
				children: [["11", "11. sınıf"], ["tyt", "TYT omurga"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTrack(id),
					className: cn("h-11 rounded-sm text-sm font-medium", track === id ? "bg-card text-foreground" : "text-muted"),
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll-quiet -mx-4 flex gap-2 overflow-x-auto px-4",
				children: subjects.map((subject) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSubjectId(subject.id),
					className: cn("h-10 shrink-0 rounded-full border px-3 text-sm", activeSubject === subject.id ? "border-accent bg-accent text-accent-foreground" : "border-border bg-card"),
					children: subject.short
				}, subject.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: query,
				placeholder: "Konu ara",
				"aria-label": "Konu ara",
				onChange: (event) => setQuery(event.target.value)
			}),
			themes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Bu süzgeçte konu yok."
			}) : null,
			themes.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium text-muted",
					children: group.theme
				}), group.items.map((topic) => {
					const level = mastery[topic.id] ?? 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-medium",
								children: topic.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: topic.how
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid grid-cols-4 gap-1 rounded-md bg-subtle p-1",
								children: LEVELS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": level === item.level,
									onClick: () => setMastery(topic.id, item.level),
									className: cn("h-11 rounded-sm text-xs font-medium sm:text-sm", level === item.level ? "bg-accent text-accent-foreground" : "text-muted"),
									children: item.label
								}, item.level))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-3 text-sm font-medium text-accent",
								onClick: () => {
									setDraft(`${topic.title} (${topic.theme}) konusunda 11. sınıf Maarif seviyesinde çalışıyorum. Neyi anlamadığımı varsayma; önce bir teşhis sorusu sor, sonra 25 dakikalık plan ver.`);
									setView("coach");
								},
								children: "Koça sor"
							})
						]
					}, topic.id);
				})]
			}, group.theme)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "11. sınıf başlıkları 2026-2027 Türkiye Yüzyılı Maarif Modeli program özetine göre dizildi. TYT omurgası 9 ve 10. sınıf tekrarıdır. 2028 soru dağılımı ÖSYM kılavuzu çıkınca netleşir."
			})
		]
	});
}
var NAV = [
	{
		id: "today",
		label: "Bugün",
		icon: SunMedium
	},
	{
		id: "plan",
		label: "Hafta",
		icon: CalendarDays
	},
	{
		id: "topics",
		label: "Konular",
		icon: BookOpen
	},
	{
		id: "mocks",
		label: "Deneme",
		icon: ChartLine
	},
	{
		id: "coach",
		label: "Koç",
		icon: MessagesSquare
	}
];
function Shell() {
	const hydrated = useCoach((state) => state.hydrated);
	const profile = useCoach((state) => state.profile);
	const view = useCoach((state) => state.view);
	const setView = useCoach((state) => state.setView);
	const setHydrated = useCoach((state) => state.setHydrated);
	(0, import_react.useEffect)(() => {
		if (useCoach.persist.hasHydrated()) setHydrated();
		return useCoach.persist.onFinishHydration(() => setHydrated());
	}, [setHydrated]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-dvh bg-background px-6 pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-4xl",
			children: "Mürekkep"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted",
			children: "Koç defterin açılıyor."
		})]
	});
	if (!profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	const coach = view === "coach";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground md:grid md:grid-cols-[15rem_minmax(0,1fr)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "sticky top-0 hidden h-dvh flex-col border-r border-border bg-card px-3 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3 pt-7 pb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl",
							children: "Mürekkep"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "11. sınıf · 2028 YKS"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col gap-1",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							item,
							active: view === item.id,
							onClick: () => setView(item.id)
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto px-2 pb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView("settings"),
							className: cn("flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-medium", view === "settings" ? "bg-accent-soft" : "text-muted hover:bg-subtle hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" }), "Ayarlar"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 px-3 text-sm text-muted",
							children: profile.name
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("min-w-0", coach ? "h-dvh" : "pb-24 md:pb-10"),
				children: [
					view === "today" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayView, {}) : null,
					view === "plan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanView, {}) : null,
					view === "topics" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicsView, {}) : null,
					view === "mocks" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MocksView, {}) : null,
					view === "coach" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full flex-col pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatView, {})
					}) : null,
					view === "settings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsView, {}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-card pb-[env(safe-area-inset-bottom)] md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-5",
					children: NAV.map((item) => {
						const Icon = item.icon;
						const active = view === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView(item.id),
							className: cn("flex h-16 flex-col items-center justify-center gap-1 text-xs", active ? "text-accent" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), item.label]
						}, item.id);
					})
				})
			})
		]
	});
}
function NavButton({ item, active, onClick }) {
	const Icon = item.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("flex h-11 items-center gap-3 rounded-md px-3 text-left text-sm font-medium", active ? "bg-accent-soft text-foreground" : "text-muted hover:bg-subtle hover:text-foreground"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), item.label]
	});
}
var SplitComponent = Shell;
//#endregion
export { SplitComponent as component };
