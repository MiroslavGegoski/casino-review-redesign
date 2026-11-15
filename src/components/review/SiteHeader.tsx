import { Menu, Search } from "lucide-react";

const nav = ["Online Casinos", "Reviews", "Bonuses", "Payments", "Games", "Providers"];

export function SiteHeader() {
  return (
    <header
      data-wp-block="Site Header"
      className="sticky top-0 z-50 border-b border-ink-border bg-ink/95 text-ink-foreground backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#" className="font-display text-xl font-extrabold tracking-tight">
          NoHouse<span className="text-primary">Casinos</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {nav.map((n) => (
            <a key={n} href="#" className="text-ink-muted transition-colors hover:text-ink-foreground">
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 text-ink-muted hover:text-ink-foreground" aria-label="Search">
            <Search className="size-5" />
          </button>
          <button className="rounded-full p-2 text-ink-muted hover:text-ink-foreground lg:hidden" aria-label="Menu">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
