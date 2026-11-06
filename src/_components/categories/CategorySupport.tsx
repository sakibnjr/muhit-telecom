import Link from "next/link";
import { categories } from "@/_data/categories";
import type { CategoryContent } from "@/_data/categoryContent";
import { servicesData } from "@/_data/services";
import { siteConfig } from "@/_data/siteConfig";

export function CategorySupport({ content }: { content?: CategoryContent }) {
  const related = categories.filter((category) => content?.related.includes(category.slug));
  const services = servicesData.filter((service) => content?.serviceSlugs.includes(service.slug));
  const enquiryUrl = content
    ? `${siteConfig.whatsappUrl}?text=${encodeURIComponent(`Hello ${siteConfig.name}, ${content.enquiryHint}`)}`
    : siteConfig.whatsappUrl;

  return (
    <div className="mt-14 space-y-8">
      {content && (
        <div className="grid gap-8 sm:grid-cols-2">
          <section aria-labelledby="related-categories">
            <h2 id="related-categories" className="text-xl font-bold">Related categories</h2>
            <ul className="mt-4 space-y-3">
              {related.map((category) => (
                <li key={category.slug}><Link href={`/categories/${category.slug}`} className="font-medium text-primary hover:underline">{category.name} →</Link></li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="relevant-services">
            <h2 id="relevant-services" className="text-xl font-bold">Relevant services & advice</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">If the issue is with your existing device, ask about assessment before replacing accessories.</p>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.slug}><Link href={`/services/${service.slug}`} className="font-medium text-primary hover:underline">{service.title} →</Link></li>
              ))}
            </ul>
          </section>
        </div>
      )}
      <section aria-labelledby="category-visit" className="rounded-xl border border-border bg-light-section p-6 sm:p-8">
        <h2 id="category-visit" className="text-2xl font-bold tracking-tight text-light-section-text sm:text-3xl">Ask a question or visit {siteConfig.name} in Hili</h2>
        <p className="mt-3 w-full text-base leading-7 text-light-section-text">{siteConfig.address.fullAddress_en}. {siteConfig.hours.display}.</p>
        <p className="mt-3 w-full text-sm leading-7 text-muted-foreground">
          {content?.enquiryHint ?? "Tell us which device or category you are comparing so we can discuss suitable options."} Confirm the exact item, availability and applicable warranty terms before making a purchase.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={enquiryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">Ask on WhatsApp</a>
          <a href={siteConfig.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:text-primary">Get directions</a>
          <a href={`tel:${siteConfig.phoneIntl}`} className="inline-flex min-h-11 items-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:text-primary">Call {siteConfig.phone}</a>
        </div>
        <nav aria-label="Shopping support" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary">
          <Link href="/contact" className="hover:underline">Contact & store information</Link>
          <Link href="/warranty-policy" className="hover:underline">Read warranty policy</Link>
          <Link href="/shop" className="hover:underline">Browse the shop</Link>
          <Link href="/categories" className="hover:underline">All categories</Link>
        </nav>
      </section>
    </div>
  );
}
