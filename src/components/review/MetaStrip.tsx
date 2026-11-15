import { BadgeCheck, CalendarPlus, Clock, RefreshCw } from "lucide-react";
import type { Review } from "@/data/vipsta";

export function MetaStrip({ review }: { review: Review }) {
  return (
    <div data-wp-block="Meta Strip" className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4 text-sm">
        <a href="#author" className="flex items-center gap-3">
          <img src={review.author.avatar} alt={review.author.name} className="size-9 rounded-full object-cover ring-2 ring-primary/40" />
          <span className="leading-tight">
            <span className="block text-xs text-muted-foreground">Written by</span>
            <span className="font-bold hover:text-primary">{review.author.name}</span>
          </span>
        </a>
        <Item icon={<CalendarPlus className="size-4" />} label="Created on" value={review.createdOn} />
        <Item icon={<RefreshCw className="size-4" />} label="Updated on" value={review.updatedOn} />
        <Item icon={<Clock className="size-4" />} label="Reading time" value={review.readTime} />
        {review.factChecked && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-accent-foreground sm:ml-auto">
            <BadgeCheck className="size-4" /> Fact-checked
          </span>
        )}
      </div>
    </div>
  );
}

function Item({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-full bg-muted text-muted-foreground">{icon}</span>
      <span className="leading-tight">
        <span className="block text-xs text-muted-foreground">{label}</span>
        <span className="font-bold">{value}</span>
      </span>
    </div>
  );
}
