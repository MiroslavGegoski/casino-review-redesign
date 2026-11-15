const orgs = ["BetBlocker", "Gamban", "GambleAware", "GamCare", "Gordon Moody"];

export function SiteFooter() {
  return (
    <footer data-wp-block="Site Footer" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <div className="font-display text-xl font-extrabold">NoHouse<span className="text-primary">Casinos</span></div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              <strong className="text-ink-foreground">NoHouseCasinos.com</strong> does not provide any gambling services directly. Our site offers detailed reviews and information about online casinos and pokies. Some links on our website are affiliate links, and we may earn a commission at no additional cost to you. All content is intended for individuals aged 18 and over. Please gamble responsibly.
            </p>
          </div>
          <div className="flex gap-3 text-sm font-semibold text-ink-muted">
            <a href="#" className="hover:text-ink-foreground">Facebook</a>
            <a href="#" className="hover:text-ink-foreground">Instagram</a>
            <a href="#" className="hover:text-ink-foreground">X</a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-ink-border pt-6">
          <span className="grid size-10 place-items-center rounded-full border-2 border-destructive font-display text-sm font-extrabold">18+</span>
          {orgs.map((o) => (
            <span key={o} className="rounded-full border border-ink-border px-3 py-1.5 text-xs font-semibold text-ink-muted">{o}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
