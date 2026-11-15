import type { ReviewSection } from "@/data/vipsta";
import { ScoreBar, ScoreRing, scoreLabel } from "./ScoreRing";

export function ReviewSectionBlock({ section, casino, index }: { section: ReviewSection; casino: string; index: number }) {
  const before = section.listAfter ? section.paragraphs.slice(0, section.listAfter) : section.paragraphs;
  const after = section.listAfter ? section.paragraphs.slice(section.listAfter) : [];
  return (
    <section id={section.id} data-wp-block="Review Section + Rating" className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
      <header className="flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Section {String(index).padStart(2, "0")}</span>
          <h2 className="mt-1 text-2xl font-extrabold leading-tight sm:text-3xl">
            {casino} {section.title}
          </h2>
        </div>
        {section.rating && (
          <div data-wp-block="Section Rating" className="flex items-center gap-3 rounded-2xl bg-muted px-4 py-3 sm:min-w-56">
            <ScoreRing score={section.rating.score} size="sm" tone="light" />
            <div className="flex-1">
              <div className="text-xs font-medium text-muted-foreground">{section.rating.label}</div>
              <div className="text-sm font-bold">{scoreLabel(section.rating.score)}</div>
              <div className="mt-1.5"><ScoreBar score={section.rating.score} tone="light" /></div>
            </div>
          </div>
        )}
      </header>

      <div className="prose-review mt-6">
        {before.map((p, i) => <p key={i}>{p}</p>)}
        {section.list && (
          <ul className="sm:grid-cols-2">
            {section.list.map((l) => (
              <li key={l} className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2 text-[15px] font-semibold">
                <span className="size-1.5 rounded-full bg-primary" /> {l}
              </li>
            ))}
          </ul>
        )}
        {after.map((p, i) => <p key={`a${i}`}>{p}</p>)}
        {section.subsections?.map((s) => (
          <div key={s.title}>
            <h3>{s.title}</h3>
            {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        ))}
      </div>

      {section.image && (
        <figure className="mt-8 overflow-hidden rounded-2xl border border-border">
          <img src={section.image.src} alt={section.image.alt} loading="lazy" className="w-full" />
          <figcaption className="bg-muted px-4 py-2 text-xs font-medium text-muted-foreground">{section.image.alt}</figcaption>
        </figure>
      )}
    </section>
  );
}
