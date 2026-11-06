import type { CategoryContent } from "@/_data/categoryContent";

export function CategoryGuide({ name, content }: { name: string; content: CategoryContent }) {
  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
      <section aria-labelledby="buying-guide" className="min-w-0">
        <h2 id="buying-guide" className="text-2xl font-bold tracking-tight sm:text-3xl">How to choose {name.toLowerCase()}</h2>
        <div className="mt-6 space-y-7">
          {content.guide.map((section) => (
            <section key={section.title}>
              <h3 className="text-lg font-semibold tracking-tight">{section.title}</h3>
              <p className="mt-2 text-base leading-8 text-muted-foreground">{section.text}</p>
            </section>
          ))}
        </div>
      </section>
      <section aria-labelledby="category-faq" className="surface-panel self-start p-5 shadow-sm sm:p-6">
        <h2 id="category-faq" className="text-xl font-bold tracking-tight">{name} questions</h2>
        <div className="mt-4 divide-y divide-border">
          {content.faqs.map((faq) => (
            <details key={faq.question} className="py-4">
              <summary className="min-h-11 cursor-pointer py-2 font-semibold leading-relaxed marker:text-primary">{faq.question}</summary>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
