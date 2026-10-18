import { BookOpen, CalendarDays, LineChart, MessagesSquare, Settings, SunMedium } from "lucide-react";
import { ChatView } from "@/components/coach/ChatView";
import { MocksView } from "@/components/coach/MocksView";
import { Onboarding } from "@/components/coach/Onboarding";
import { PlanView } from "@/components/coach/PlanView";
import { SettingsView } from "@/components/coach/SettingsView";
import { TodayView } from "@/components/coach/TodayView";
import { TopicsView } from "@/components/coach/TopicsView";
import { cn } from "@/lib/cn";
import { useCoach } from "@/lib/store";
import type { ViewId } from "@/lib/types";

const NAV: { id: ViewId; label: string; icon: typeof SunMedium }[] = [
  { id: "today", label: "Bugün", icon: SunMedium },
  { id: "plan", label: "Hafta", icon: CalendarDays },
  { id: "topics", label: "Konular", icon: BookOpen },
  { id: "mocks", label: "Deneme", icon: LineChart },
  { id: "coach", label: "Koç", icon: MessagesSquare },
];

export function Shell() {
  const profile = useCoach((state) => state.profile);
  const view = useCoach((state) => state.view);
  const setView = useCoach((state) => state.setView);

  if (!profile) return <Onboarding />;

  const coach = view === "coach";

  return (
    <div className="min-h-dvh bg-background text-foreground md:grid md:grid-cols-[15rem_minmax(0,1fr)]">
      <aside className="sticky top-0 hidden h-dvh flex-col border-r border-border bg-card px-3 md:flex">
        <div className="px-3 pt-7 pb-8">
          <p className="font-display text-3xl">Mürekkep</p>
          <p className="mt-1 text-sm text-muted">11. sınıf · 2028 YKS</p>
        </div>
        <nav className="flex flex-col gap-1">
          {NAV.map((item) => (
            <NavButton key={item.id} item={item} active={view === item.id} onClick={() => setView(item.id)} />
          ))}
        </nav>
        <div className="mt-auto px-2 pb-6">
          <button
            type="button"
            onClick={() => setView("settings")}
            className={cn(
              "flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-medium",
              view === "settings" ? "bg-accent-soft" : "text-muted hover:bg-subtle hover:text-foreground",
            )}
          >
            <Settings className="size-5" />
            Ayarlar
          </button>
          <p className="mt-4 px-3 text-sm text-muted">{profile.name}</p>
        </div>
      </aside>

      <div className={cn("min-w-0", coach ? "h-dvh" : "pb-24 md:pb-10")}>
        {view === "today" ? <TodayView /> : null}
        {view === "plan" ? <PlanView /> : null}
        {view === "topics" ? <TopicsView /> : null}
        {view === "mocks" ? <MocksView /> : null}
        {view === "coach" ? (
          <div className="flex h-full flex-col pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
            <ChatView />
          </div>
        ) : null}
        {view === "settings" ? <SettingsView /> : null}
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-card pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="grid grid-cols-5">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = view === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className={cn(
                  "flex h-16 flex-col items-center justify-center gap-1 text-xs",
                  active ? "text-accent" : "text-muted",
                )}
              >
                <Icon className="size-5" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function NavButton({
  item,
  active,
  onClick,
}: {
  item: (typeof NAV)[number];
  active: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-11 items-center gap-3 rounded-md px-3 text-left text-sm font-medium",
        active ? "bg-accent-soft text-foreground" : "text-muted hover:bg-subtle hover:text-foreground",
      )}
    >
      <Icon className="size-5" />
      {item.label}
    </button>
  );
}
