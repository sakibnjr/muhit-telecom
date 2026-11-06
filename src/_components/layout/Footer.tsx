import Link from "next/link";
import { Logo } from "@/_components/layout/Logo";
import { FooterCatalogLinks } from "@/_components/layout/FooterCatalogLinks";
import { FacebookIcon } from "@/_components/icons/FacebookIcon";
import { Container } from "@/_components/layout/Container";
import { categories } from "@/_data/categories";
import { servicesData } from "@/_data/services";
import { siteConfig } from "@/_data/siteConfig";
import { Clock3, Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from "lucide-react";

const supportLinks = [
  { label: "Track Order", href: "/track-order" },
  { label: "About Us", href: "/about" },
  { label: "Contact & Store Location", href: "/contact" },
  { label: "Warranty & Return Policy", href: "/warranty-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const headingClass =
  "flex items-center gap-2 border-b border-white/10 pb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300";
const rowClass = "flex flex-1 items-center gap-3 px-4 py-3 text-sm text-slate-300";

export function Footer() {
  return (
    <footer className="relative mt-6 overflow-hidden border-t border-white/10 bg-secondary text-secondary-foreground sm:mt-16">
      <div aria-hidden="true" className="pointer-events-none absolute -top-36 left-1/3 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-0 size-72 rounded-full bg-sky-500/5 blur-3xl" />
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

      <Container className="relative py-9 sm:py-12">
        <section aria-labelledby="footer-contact-heading" className="mb-10 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/20 via-white/[0.04] to-white/[0.02] p-5 shadow-xl shadow-black/10 sm:mb-12 sm:p-7 lg:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="w-full">
              <h2 id="footer-contact-heading" className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Need help choosing a gadget or repair?
              </h2>
              <p className="mt-2 w-full text-sm leading-6 text-slate-300">
                Talk directly with Muhit Telecom in Hili. We can help with product questions, delivery, and repair enquiries.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp us
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneIntl}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
              >
                <Phone className="size-4 text-sky-300" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        <div className="grid items-stretch gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-10">
          <div className="flex min-w-0 flex-col lg:col-span-3">
            <Logo />
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Your trusted destination for 100% genuine smartphones, trending gadgets, authentic accessories, and certified device repair in Hakimpur (Hili), Dinajpur.
            </p>
            <div className="mt-5 flex flex-1 flex-col divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035]">
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${rowClass} items-start transition-colors hover:text-white`}
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden="true" />
                <span className="leading-snug">{siteConfig.address.fullAddress_en}</span>
                <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-sky-300" aria-hidden="true" />
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
              <div className={rowClass}>
                <Clock3 className="size-4 shrink-0 text-sky-300" aria-hidden="true" />
                <span>{siteConfig.hours.display}</span>
              </div>
              <a href={`mailto:${siteConfig.email}`} className={`${rowClass} transition-colors hover:text-white`}>
                <Mail className="size-4 shrink-0 text-sky-300" aria-hidden="true" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <FooterCatalogLinks
              title="Categories"
              href="/categories"
              columns={2}
              shopLink
              links={categories.map(({ slug, name }) => ({
                label: name,
                href: `/categories/${slug}`,
              }))}
            />
          </div>

          <div className="min-w-0 lg:col-span-3">
            <FooterCatalogLinks
              title="Services"
              href="/services"
              links={servicesData.map(({ slug, title }) => ({
                label: title,
                href: `/services/${slug}`,
              }))}
            />
          </div>

          <div className="flex min-w-0 flex-col lg:col-span-3">
            <h3 className={headingClass}>
              <span aria-hidden="true" className="h-3 w-0.5 rounded-full bg-primary" />
              Help &amp; follow
            </h3>
            <ul className="mt-3 flex flex-1 flex-col text-sm text-slate-300">
              {supportLinks.map(({ label, href }) => (
                <li key={href} className="flex flex-1 items-center">
                  <Link href={href} className="inline-flex min-h-9 items-center transition-colors hover:text-white hover:translate-x-0.5">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex min-h-12 items-center justify-between rounded-xl border border-blue-300/15 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-200 transition-colors hover:border-blue-300/30 hover:bg-blue-500/15"
            >
              <span className="flex items-center gap-2.5">
                <FacebookIcon className="size-4" />
                Follow on Facebook
              </span>
              <span className="flex items-center gap-1.5 text-xs text-blue-200/70">
                {siteConfig.facebookFollowers}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© Muhit Telecom. All rights reserved.</p>
          <p>Hakimpur (Hili), Dinajpur, Bangladesh</p>
        </div>
      </Container>
    </footer>
  );
}
