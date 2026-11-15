import { ChevronRight, Gift, ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/hero-casino.jpg";
import { Button } from "@/components/ui/button";
import type { Review } from "@/data/vipsta";
import { ScoreRing, scoreLabel } from "./ScoreRing";

export function ReviewHero({ review }: { review: Review }) {
  return (
    <section data-wp-block="Review Hero" className="relative overflow-hidden bg-ink text-ink-foreground">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={800}
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="bg-hero-fade absolute inset-0" />
      <div className="absolute inset-0 bg-ink/75 lg:hidden" />
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-6 lg:pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-ink-muted">
          <a href="#" className="hover:text-ink-foreground">Home</a>
          <ChevronRight className="size-3" />
          <a href="#" className="hover:text-ink-foreground">Reviews</a>
          <ChevronRight className="size-3" />
          <span className="text-ink-foreground">{review.title}</span>
        </nav>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
          <div className="size-28 overflow-hidden rounded-3xl bg-ink-2 ring-1 ring-ink-border shadow-float sm:size-36">
            <img src={review.logo} alt={`${review.name} logo`} className="h-full w-full object-cover" />
          </div>

          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-primary">
                <ShieldCheck className="size-3.5" /> Expert tested
              </span>
              <span className="rounded-full bg-ink-foreground/10 px-3 py-1 text-ink-muted">Crypto-friendly</span>
              <span className="rounded-full bg-ink-foreground/10 px-3 py-1 text-ink-muted">Est. {review.details.established}</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              {review.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{review.summary}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button variant="cta" size="xl" asChild>
                <a href={review.playUrl} target="_blank" rel="nofollow noopener">Play Now</a>
              </Button>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2.5 text-sm font-bold text-gold">
                <Gift className="size-4" /> {review.bonus}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-3xl border border-ink-border bg-ink/70 p-5 backdrop-blur lg:flex-col lg:p-6">
            <ScoreRing score={review.overall} size="lg" />
            <div className="lg:text-center">
              <div className="font-display text-lg font-bold">{scoreLabel(review.overall)}</div>
              <div className="mt-1 flex gap-0.5 text-gold lg:justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <div className="mt-1 text-xs text-ink-muted">Overall rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
