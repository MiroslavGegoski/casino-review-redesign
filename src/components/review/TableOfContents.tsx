import { useEffect, useState } from "react";
import { ChevronDown, ListOrdered } from "lucide-react";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; label: string; score?: number | undefined };

function useActive(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-90px 0px -65% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function List({ items, active, onPick }: { items: TocItem[]; active?: string; onPick?: () => void }) {
  return (
    <ol className="space-y-0.5">
      {items.map((item, i) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={onPick}
            className={cn(
              "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
              active === item.id ? "bg-primary-soft text-accent-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <span className="w-5 text-xs tabular-nums opacity-60">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1 leading-snug">{item.label}</span>
            {item.score !== undefined && (
              <span className="rounded-md bg-gold-soft px-1.5 py-0.5 text-[11px] font-bold tabular-nums text-foreground">
                {item.score.toFixed(1)}
              </span>
            )}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const active = useActive(items.map((i) => i.id));
  return (
    <nav data-wp-block="Table of Contents" aria-label="Table of contents" className="rounded-3xl border border-border bg-card p-4 shadow-card">
      <div className="mb-3 flex items-center gap-2 px-3 pt-1 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
        <ListOrdered className="size-4" /> Table of contents
      </div>
      <List items={items} active={active} />
    </nav>
  );
}

export function MobileToc({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-wp-block="Table of Contents (mobile)" className="rounded-2xl border border-border bg-card shadow-card lg:hidden">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-5 py-4 text-sm font-bold">
        <span className="flex items-center gap-2"><ListOrdered className="size-4" /> Table of contents</span>
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && <div className="px-2 pb-3"><List items={items} onPick={() => setOpen(false)} /></div>}
    </div>
  );
}
