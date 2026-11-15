import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section id="faq" data-wp-block="FAQ" className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-extrabold">Frequently asked questions</h2>
      <Accordion type="single" collapsible defaultValue="0" className="mt-4">
        {items.map((f, i) => (
          <AccordionItem key={f.q} value={String(i)}>
            <AccordionTrigger className="text-left font-display text-base font-bold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
