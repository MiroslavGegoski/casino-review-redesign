import { useState } from "react";
import {
  ArrowDownToLine, ArrowUpFromLine, Building2, CalendarDays, Coins, Cpu, Globe2,
  Landmark, MonitorSmartphone, Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Review } from "@/data/vipsta";
import { ScoreBar, ScoreRing, scoreLabel } from "./ScoreRing";

export function ReviewDetails({ review }: { review: Review }) {
  const d = review.details;
  return (
    <section id="details" data-wp-block="Review Details" className="mx-auto max-w-7xl px-5 pt-10">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid lg:grid-cols-[340px_1fr]">
        {/* Rating panel */}
        <div className="bg-ink p-6 text-ink-foreground sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Review details</p>
          <h2 className="mt-2 text-2xl font-extrabold">{review.name} at a glance</h2>

          <div className="mt-6 flex items-center gap-4">
            <ScoreRing score={review.overall} size="md" />
            <div>
              <div className="font-display text-lg font-bold">{scoreLabel(review.overall)}</div>
              <div className="text-xs text-ink-muted">Overall rating</div>
            </div>
          </div>

          <ul className="mt-6 space-y-4">
            {review.ratings.map((r) => (
              <li key={r.label}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-ink-muted">{r.label}</span>
                  <span className="font-bold">{r.score.toFixed(1)}</span>
                </div>
                <ScoreBar score={r.score} />
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/10 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-gold">Welcome bonus</div>
            <div className="mt-1 font-display text-lg font-bold leading-snug">{review.bonus}</div>
          </div>
          <Button variant="cta" size="xl" className="mt-4 w-full" asChild>
            <a href={review.playUrl} target="_blank" rel="nofollow noopener">Play Now</a>
          </Button>
          <p className="mt-3 text-center text-[11px] text-ink-muted">18+ · T&Cs apply · Gamble responsibly</p>
        </div>

        {/* Facts */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
            <Fact icon={<Wallet />} label="Min deposit" value={d.minDeposit} />
            <Fact icon={<CalendarDays />} label="Established" value={d.established} />
            <Fact icon={<Landmark />} label="Licence" value={d.licences.join(", ")} />
            <Fact icon={<MonitorSmartphone />} label="Devices" value={d.devices.join(" & ")} />
            <Fact icon={<Building2 />} label="Owner" value={d.owner} className="col-span-2 sm:col-span-2 xl:col-span-1" />
          </div>

          <div className="mt-6 divide-y divide-border">
            <ChipRow icon={<Cpu />} label="Software" items={d.software} limit={12} />
            <ChipRow icon={<ArrowDownToLine />} label="Deposit methods" items={d.deposit} limit={10} />
            <ChipRow icon={<ArrowUpFromLine />} label="Withdrawal methods" items={d.withdrawal} limit={10} />
            <ChipRow icon={<Globe2 />} label="Languages" items={d.languages} limit={10} />
            <ChipRow icon={<Coins />} label="Currencies" items={d.currencies} limit={10} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ icon, label, value, className = "" }: { icon: React.ReactNode; label: string; value: string; className?: string }) {
  return (
    <div className={`rounded-2xl bg-muted p-4 ${className}`}>
      <div className="text-primary [&_svg]:size-5">{icon}</div>
      <div className="mt-3 text-xs font-medium text-muted-foreground">{label}</div>
      <div className="mt-0.5 font-display text-base font-bold leading-tight">{value}</div>
    </div>
  );
}

function ChipRow({ icon, label, items, limit }: { icon: React.ReactNode; label: string; items: string[]; limit: number }) {
  const [open, setOpen] = useState(false);
  const shown = open ? items : items.slice(0, limit);
  const hidden = items.length - limit;
  return (
    <div className="grid gap-3 py-4 sm:grid-cols-[180px_1fr]">
      <div className="flex items-center gap-2 text-sm font-bold">
        <span className="text-muted-foreground [&_svg]:size-4">{icon}</span>
        {label}
        <span className="rounded-full bg-muted px-2 text-xs font-semibold text-muted-foreground">{items.length}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {shown.map((i) => (
          <a
            key={i}
            href="#"
            className="rounded-lg border border-border bg-card px-2.5 py-1 text-xs font-semibold transition-colors hover:border-primary hover:text-accent-foreground"
          >
            {i}
          </a>
        ))}
        {hidden > 0 && (
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg bg-primary-soft px-2.5 py-1 text-xs font-bold text-accent-foreground hover:bg-accent"
          >
            {open ? "Show less" : `+${hidden} more`}
          </button>
        )}
      </div>
    </div>
  );
}
