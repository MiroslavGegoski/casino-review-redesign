import { Button } from "@/components/ui/button";
import type { Review } from "@/data/vipsta";

export function Alternatives({ items, casino }: { items: Review["alternatives"]; casino: string }) {
  return (
    <section id="alternatives" data-wp-block="Casino Alternatives" className="rounded-3xl bg-ink p-6 text-ink-foreground sm:p-8">
      <h2 className="text-2xl font-extrabold">{casino.replace(" Casino", "")} Alternatives for Aussies</h2>
      <p className="mt-1 text-sm text-ink-muted">Similar casinos our experts rate highly.</p>
      <ol className="mt-6 space-y-3">
        {items.map((a, i) => (
          <li key={a.slug} className="flex flex-wrap items-center gap-4 rounded-2xl border border-ink-border bg-ink-2 p-3 sm:flex-nowrap">
            <span className="w-6 text-center font-display text-lg font-extrabold text-ink-muted">{i + 1}</span>
            <img src={a.logo} alt={a.name} loading="lazy" className="size-14 rounded-xl object-cover" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold">{a.name}</span>
                <span className="rounded-md bg-gold px-1.5 text-xs font-extrabold text-foreground">{a.score.toFixed(1)}</span>
              </div>
              <div className="mt-0.5 text-sm font-semibold text-gold">{a.bonus}</div>
            </div>
            <div className="flex w-full gap-2 sm:w-auto">
              <Button variant="ghostInk" size="sm" className="flex-1 sm:flex-none" asChild>
                <a href={`https://nohousecasinos.com/reviews/${a.slug}/`}>Read Review</a>
              </Button>
              <Button variant="cta" size="sm" className="flex-1 sm:flex-none" asChild>
                <a href={`https://nohousecasinos.com/visit/${a.slug}/`} rel="nofollow noopener" target="_blank">Play Now</a>
              </Button>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
