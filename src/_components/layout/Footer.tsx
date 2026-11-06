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

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/10 bg-secondary text-secondary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute -top-36 left-1/3 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

      <Container className="relative py-9 sm:py-12">
        <section aria-labelledby="footer-contact-heading" className="mb-10 rounded-xl border border-white/10 bg-gradient-to-br from-primary/15 via-white/[0.04] to-white/[0.02] p-5 shadow-xl shadow-black/10 sm:mb-12 sm:p-7 lg:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 id="footer-contact-heading" className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Need help choosing a gadget or repair?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Talk directly with Muhit Telecom in Hili. We can help with product questions, delivery, and repair enquiries.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp us
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneIntl}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
              >
                <Phone className="size-4 text-sky-300" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        <div className="grid gap-x-8 gap-y-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-7">
          <div className="min-w-0 md:pr-5 lg:col-span-3">
            <Logo />
            <p className="mt-2 text-xs font-medium tracking-wide text-sky-200/90">
              {siteConfig.businessLabel} <span className="px-1 text-white/30">·</span> Proprietor: {siteConfig.proprietor}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Genuine phones, everyday tech and device repair—with friendly local help in Hakimpur (Hili), Dinajpur.
            </p>
            <div className="mt-5 space-y-2.5">
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-lg border border-white/8 bg-white/[0.035] p-3 text-sm leading-5 text-slate-300 transition-colors hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden="true" />
                <span>{siteConfig.address.fullAddress_en}</span>
                <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-sky-300" aria-hidden="true" />
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.035] p-3 text-sm text-slate-300 transition-colors hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-sky-300" aria-hidden="true" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <div className="flex items-start gap-3 rounded-lg border border-white/8 bg-white/[0.035] p-3 text-sm leading-5 text-slate-300">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden="true" />
                <span>{siteConfig.hours.display}</span>
              </div>
            </div>
          </div>

          <div className="min-w-0 md:col-span-1 lg:col-span-4">
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

          <div className="min-w-0 md:col-span-1 lg:col-span-2">
            <FooterCatalogLinks
              title="Services"
              href="/services"
              links={servicesData.map(({ slug, title }) => ({
                label: title,
                href: `/services/${slug}`,
              }))}
            />
          </div>

          <div className="min-w-0 md:col-span-1 lg:col-span-3">
            <h3 className="border-b border-white/10 pb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Help &amp; follow
            </h3>
            <ul className="mt-3 space-y-0.5 text-sm text-slate-300">
              {supportLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="inline-flex min-h-9 items-center transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-xl border border-blue-300/15 bg-blue-500/10 px-3.5 py-2 text-xs font-semibold text-blue-200 transition-colors hover:border-blue-300/25 hover:bg-blue-500/15"
            >
              <FacebookIcon className="size-4" />
              Facebook <span className="text-blue-200/70">{siteConfig.facebookFollowers}</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© Muhit Telecom. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Cash on Delivery Nationwide</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
