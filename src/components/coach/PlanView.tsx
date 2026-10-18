import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatShort, isoDate, weekDates, weekdayShort } from "@/lib/dates";
import { buildDay, KIND_LABEL } from "@/lib/plan";
import { cn } from "@/lib/cn";
import { useCoach } from "@/lib/store";

export function PlanView() {
  const profile = useCoach((state) => state.profile)!;
  const mastery = useCoach((state) => state.mastery);
  const done = useCoach((state) => state.done);
  const dayNonce = useCoach((state) => state.dayNonce);
  const completeBlock = useCoach((state) => state.completeBlock);
  const undoBlock = useCoach((state) => state.undoBlock);
  const today = isoDate();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6 md:px-8 md:py-8">
      <header>
        <h1 className="font-display text-4xl">Haftalık masa</h1>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Hafta içi akşam, hafta sonu sabah. Ağırlık alanına göre. İşlediğin konuyu haritada yükselt, plan zayıf olana döner.
        </p>
      </header>
      <div className="flex flex-col gap-4">
        {weekDates().map((date) => {
          const iso = isoDate(date);
          const blocks = buildDay(iso, profile, mastery, dayNonce[iso] ?? 0);
          const current = iso === today;
          return (
            <section key={iso} className={cn("rounded-xl border bg-card p-4", current ? "border-accent" : "border-border")}>
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-base font-medium capitalize">
                  {weekdayShort(date)} · {formatShort(date)}
                </h2>
                {current ? <span className="text-sm text-accent">Bugün</span> : null}
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {blocks.map((block) => {
                  const finished = Boolean(done[block.key]);
                  return (
                    <li key={block.key} className="flex items-center gap-3 rounded-md bg-subtle px-3 py-2">
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted">
                          {block.start} · {block.subject} · {KIND_LABEL[block.kind]} · {block.minutes} dk
                        </p>
                        <p className="truncate text-sm font-medium">{block.title}</p>
                      </div>
                      <Button
                        size="icon"
                        variant={finished ? "primary" : "quiet"}
                        aria-label={finished ? "Geri al" : "Bitti işaretle"}
                        onClick={() =>
                          finished
                            ? undoBlock(block.key, iso, block.topicId)
                            : completeBlock(block.key, iso, block.subjectId, block.topicId, block.minutes)
                        }
                      >
                        <Check className="size-4" />
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
