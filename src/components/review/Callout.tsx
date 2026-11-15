import { AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export function Callout({ kind, children }: { kind: "tip" | "warning"; children: React.ReactNode }) {
  const tip = kind === "tip";
  return (
    <aside
      data-wp-block={tip ? "Tip Callout" : "Disclaimer"}
      className={cn(
        "flex gap-4 rounded-2xl border p-5 text-[15px] leading-relaxed",
        tip ? "border-gold/40 bg-gold-soft" : "border-border bg-muted text-muted-foreground",
      )}
    >
      <span className={cn("grid size-9 shrink-0 place-items-center rounded-full", tip ? "bg-gold-grad text-foreground" : "bg-card")}>
        {tip ? <Lightbulb className="size-4" /> : <AlertTriangle className="size-4" />}
      </span>
      <div>
        <strong className="block font-display text-foreground">{tip ? "Expert tip" : "Disclaimer"}</strong>
        {children}
      </div>
    </aside>
  );
}
