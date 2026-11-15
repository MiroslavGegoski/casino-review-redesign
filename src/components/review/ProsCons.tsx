import { Check, Minus, ThumbsDown, ThumbsUp } from "lucide-react";

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <section id="pros-cons" data-wp-block="Pros & Cons" className="grid gap-4 md:grid-cols-2">
      <div className="rounded-3xl border border-primary/30 bg-primary-soft p-6">
        <h2 className="flex items-center gap-2 text-xl font-extrabold">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><ThumbsUp className="size-4" /></span>
          Pros
        </h2>
        <ul className="mt-5 space-y-3">
          {pros.map((p) => (
            <li key={p} className="flex gap-3 text-[15px] font-medium leading-snug">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={3} /> {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-destructive/25 bg-destructive-soft p-6">
        <h2 className="flex items-center gap-2 text-xl font-extrabold">
          <span className="grid size-9 place-items-center rounded-full bg-destructive text-destructive-foreground"><ThumbsDown className="size-4" /></span>
          Cons
        </h2>
        <ul className="mt-5 space-y-3">
          {cons.map((c) => (
            <li key={c} className="flex gap-3 text-[15px] font-medium leading-snug">
              <Minus className="mt-0.5 size-4 shrink-0 text-destructive" strokeWidth={3} /> {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
