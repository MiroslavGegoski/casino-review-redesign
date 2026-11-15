import { ArrowUpRight } from "lucide-react";
import type { Review } from "@/data/vipsta";

export function RelatedPages({ items }: { items: Review["related"] }) {
  return (
    <section id="related" data-wp-block="Related Pages" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Keep reading</span>
            <h2 className="mt-1 text-3xl font-extrabold">Related pages</h2>
          </div>
          <a href="#" className="hidden text-sm font-bold text-accent-foreground hover:underline sm:block">View all guides</a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <a key={r.title} href={r.url} className="group rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-card">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-accent-foreground">{r.tag}</span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-extrabold leading-snug">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
