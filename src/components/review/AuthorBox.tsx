import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Review } from "@/data/vipsta";

export function AuthorBox({ review }: { review: Review }) {
  const a = review.author;
  return (
    <section id="author" data-wp-block="Author Box" className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-card sm:flex-row sm:p-8">
      <img src={a.avatar} alt={a.name} loading="lazy" className="size-24 shrink-0 rounded-2xl object-cover" />
      <div className="flex-1">
        <div className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Written by</div>
        <h2 className="mt-1 text-xl font-extrabold">{a.name}</h2>
        <div className="text-sm font-semibold text-primary">{a.role}</div>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{a.bio}</p>
        <div className="mt-2 text-xs text-muted-foreground">Created on {review.createdOn} · Last updated {review.updatedOn}</div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="soft" size="sm" asChild><a href={a.url}>More about the author</a></Button>
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <a href={a.instagram} target="_blank" rel="noopener"><Instagram /> Instagram</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
