import { Button } from "@/components/ui/button";
import type { Review } from "@/data/vipsta";
import { ScoreBar, ScoreRing, scoreLabel } from "./ScoreRing";

export function Verdict({ review }: { review: Review }) {
  const scored = review.sections.filter((s) => s.rating);
  return (
    <section id="verdict" data-wp-block="Verdict + Overall Rating" className="overflow-hidden rounded-3xl bg-ink text-ink-foreground">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_300px]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Final verdict</span>
          <h2 className="mt-1 text-3xl font-extrabold">My Verdict on {review.name}</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-ink-muted">
            {review.verdict.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
        <div className="rounded-2xl border border-ink-border bg-ink-2 p-5">
          <div className="flex items-center gap-4">
            <ScoreRing score={review.overall} size="md" />
            <div>
              <div className="font-display text-lg font-bold">{scoreLabel(review.overall)}</div>
              <div className="text-xs text-ink-muted">Overall rating</div>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {scored.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="mb-1 flex justify-between text-xs hover:text-primary">
                  <span className="text-ink-muted">{s.rating!.label}</span>
                  <span className="font-bold">{s.rating!.score.toFixed(1)}</span>
                </a>
                <ScoreBar score={s.rating!.score} />
              </li>
            ))}
          </ul>
          <Button variant="cta" size="lg" className="mt-6 w-full" asChild>
            <a href={review.playUrl} target="_blank" rel="nofollow noopener">Play at {review.name}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
