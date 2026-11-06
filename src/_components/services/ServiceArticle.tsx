import Link from 'next/link';
import type { ServiceContent } from '@/_data/serviceContent';

export function ServiceArticle({ content }: { content: ServiceContent }) {
  return (
    <article className="space-y-8">
      <p className="text-base leading-8 text-muted-foreground">{content.intro}</p>
      {content.sections.map((section) => (
        <section key={section.title}>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">{section.title}</h2>
          <p className="text-base leading-8 text-muted-foreground">{section.text}</p>
        </section>
      ))}
      <section aria-labelledby="service-faq">
        <h2 id="service-faq" className="mb-4 text-2xl font-bold tracking-tight">Frequently asked questions</h2>
        <div className="space-y-5">
          {content.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="mb-2 text-base font-semibold">{faq.question}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <section aria-labelledby="service-shopping">
        <h2 id="service-shopping" className="mb-4 text-2xl font-bold tracking-tight">Useful product categories</h2>
        <ul className="space-y-3">
          {content.categories.map((category) => (
            <li key={category.slug} className="text-base leading-7 text-muted-foreground">
              <Link href={`/categories/${category.slug}`} className="text-primary font-semibold underline underline-offset-4">
                {category.label}
              </Link>
              {' - '}{category.reason}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
