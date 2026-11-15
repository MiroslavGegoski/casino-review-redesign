import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

type Props = {
  score: number;
  size?: "sm" | "md" | "lg";
  tone?: "dark" | "light";
  className?: string;
};

const sizes = {
  sm: { box: "size-11", inner: "inset-[3px]", text: "text-sm" },
  md: { box: "size-16", inner: "inset-[4px]", text: "text-lg" },
  lg: { box: "size-32", inner: "inset-[7px]", text: "text-4xl" },
};

export function ScoreRing({ score, size = "md", tone = "dark", className }: Props) {
  const s = sizes[size];
  return (
    <div
      className={cn(
        "relative shrink-0 rounded-full",
        tone === "dark" ? "rating-ring" : "rating-ring-light",
        s.box,
        className,
      )}
      style={{ "--score": score * 10 } as CSSProperties}
      aria-label={`Rated ${score.toFixed(1)} out of 10`}
    >
      <div
        className={cn(
          "absolute flex flex-col items-center justify-center rounded-full",
          tone === "dark" ? "bg-ink text-ink-foreground" : "bg-card text-foreground",
          s.inner,
        )}
      >
        <span className={cn("font-display font-extrabold leading-none", s.text)}>
          {score.toFixed(1)}
        </span>
        {size === "lg" && (
          <span className="mt-1 text-xs font-semibold opacity-60">out of 10</span>
        )}
      </div>
    </div>
  );
}

export function ScoreBar({ score, tone = "dark" }: { score: number; tone?: "dark" | "light" }) {
  return (
    <div
      className={cn(
        "h-1.5 w-full overflow-hidden rounded-full",
        tone === "dark" ? "bg-ink-foreground/10" : "bg-muted",
      )}
    >
      <div className="bg-gold-grad h-full rounded-full" style={{ width: `${score * 10}%` }} />
    </div>
  );
}

export function scoreLabel(score: number) {
  if (score >= 9.5) return "Outstanding";
  if (score >= 9) return "Excellent";
  if (score >= 8) return "Very good";
  if (score >= 7) return "Good";
  return "Average";
}
