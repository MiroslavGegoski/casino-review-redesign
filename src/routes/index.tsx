import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Blocks } from "lucide-react";
import { review } from "@/data/vipsta";
import { SiteHeader } from "@/components/review/SiteHeader";
import { ReviewHero } from "@/components/review/ReviewHero";
import { MetaStrip } from "@/components/review/MetaStrip";
import { ReviewDetails } from "@/components/review/ReviewDetails";
import { MobileToc, TableOfContents, type TocItem } from "@/components/review/TableOfContents";
import { ProsCons } from "@/components/review/ProsCons";
import { Callout } from "@/components/review/Callout";
import { Alternatives } from "@/components/review/Alternatives";
import { ReviewSectionBlock } from "@/components/review/ReviewSectionBlock";
import { Verdict } from "@/components/review/Verdict";
import { Faq } from "@/components/review/Faq";
import { AuthorBox } from "@/components/review/AuthorBox";
import { RelatedPages } from "@/components/review/RelatedPages";
import { SiteFooter } from "@/components/review/SiteFooter";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vipsta Casino Review 2026 – Rating 9.3/10 | NoHouseCasinos" },
      { name: "description", content: "Expert Vipsta Casino review: licence, games, payments, bonuses, support and ratings for every section, plus pros, cons and FAQs." },
      { property: "og:title", content: "Vipsta Casino Review – Rated 9.3/10" },
      { property: "og:description", content: "Licence, games, payments, bonuses and support — rated section by section for Aussie players." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: review.logo },
      { name: "twitter:image", content: review.logo },
    ],
  }),
  component: ReviewPage,
});

function ReviewPage() {
  const [blocks, setBlocks] = useState(false);

  const toc: TocItem[] = [
    { id: "details", label: "Review details", score: review.overall },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "overview", label: "Overview" },
    { id: "alternatives", label: "Alternatives" },
    ...review.sections.map((s) => ({ id: s.id, label: s.title, score: s.rating?.score })),
    { id: "verdict", label: "My verdict", score: review.overall },
    { id: "faq", label: "FAQ" },
    { id: "author", label: "About the author" },
  ];

  return (
    <div data-block-mode={blocks ? "on" : "off"} className="min-h-screen">
      <SiteHeader />
      <ReviewHero review={review} />
      <MetaStrip review={review} />
      <ReviewDetails review={review} />

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24"><TableOfContents items={toc} /></div>
        </aside>

        <main className="min-w-0 space-y-8">
          <MobileToc items={toc} />
          <ProsCons pros={review.pros} cons={review.cons} />

          <section id="overview" data-wp-block="Intro Text" className="prose-review">
            {review.intro.map((p, i) => <p key={i}>{p}</p>)}
          </section>
          <Callout kind="warning">{review.disclaimer}</Callout>

          <Alternatives items={review.alternatives} casino={review.name} />

          {review.sections.map((s, i) => (
            <div key={s.id} className="space-y-8">
              <ReviewSectionBlock section={s} casino={review.name} index={i + 1} />
              {s.id === "support" && <Callout kind="tip">“{review.tip}”</Callout>}
            </div>
          ))}

          <Verdict review={review} />
          <Faq items={review.faq} />
          <AuthorBox review={review} />
        </main>
      </div>

      <RelatedPages items={review.related} />
      <SiteFooter />

      <button
        onClick={() => setBlocks((v) => !v)}
        className={cn(
          "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold shadow-float transition-colors",
          blocks ? "bg-primary text-primary-foreground" : "bg-ink text-ink-foreground",
        )}
      >
        <Blocks className="size-4" /> {blocks ? "Hide WordPress blocks" : "Show WordPress blocks"}
      </button>
    </div>
  );
}
