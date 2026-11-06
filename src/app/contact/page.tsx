import { pageMetadata } from "@/_components/seo/metadata";
import {
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/_components/layout/Container";
import { ContactForm } from "@/_components/forms/ContactForm";
import { FacebookIcon } from "@/_components/icons/FacebookIcon";
import { StoreMap } from "@/_components/StoreMap";
import { siteConfig } from "@/_data/siteConfig";
import Image from "next/image";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact & Showroom Location | Muhit Telecom | Hili, Dinajpur",
  description:
    "Contact Muhit Telecom in Sonarpatti Road, Hakimpur (Hili), Dinajpur. Phone: 01910-755835. Open daily 10:00 AM - 9:30 PM with live Google Maps directions.",
});

const contactCards = [
  {
    title: "Visit the showroom",
    icon: MapPin,
    description: siteConfig.address.fullAddress_en,
    href: siteConfig.address.googleMapsUrl,
    label: "Get directions",
  },
  {
    title: "Hotline & orders",
    icon: Phone,
    description: `Speak directly with ${siteConfig.proprietor} about gadgets, repairs, or your order.`,
    href: `tel:${siteConfig.phoneIntl}`,
    label: siteConfig.phone,
  },
  {
    title: "Opening hours",
    icon: Clock,
    description: siteConfig.hours.display,
  },
  {
    title: "Stay connected",
    icon: FacebookIcon,
    description: `${siteConfig.facebookFollowers} followers · Gadgets, offers, and repair updates.`,
    href: siteConfig.facebook,
    label: "Visit our Facebook page",
  },
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Container>
        <header className="mb-8 rounded-xl border border-border/80 bg-light-section p-6 text-light-section-text shadow-sm sm:p-10 lg:mb-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h1 className="page-title">
                Let’s talk tech.
              </h1>
              <p className="page-lede mt-4">
                Need a gadget, a repair, or a little advice? Chat with{" "}
                {siteConfig.proprietor} or drop by {siteConfig.name} in{" "}
                {siteConfig.address.upazila}.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phoneIntl}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call the store
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          <section
            aria-labelledby="visit-heading"
            className="min-w-0 space-y-5 lg:col-span-7"
          >
            <div>
              <h2
                id="visit-heading"
                className="text-xl font-bold tracking-tight text-foreground"
              >
                Plan your visit
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Find us, check our hours, and choose how to connect.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map(
                ({ title, icon: Icon, description, href, label }) => (
                  <article
                    key={title}
                    className="surface-panel flex flex-col p-5 shadow-sm sm:p-6"
                  >
                    <span className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-card-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                    {href && (
                      <a
                        href={href}
                        target={
                          href.startsWith("https:") ? "_blank" : undefined
                        }
                        rel={
                          href.startsWith("https:")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded-lg pt-3 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        {label}
                        {href.startsWith("https:") && (
                          <>
                            <ExternalLink
                              className="size-3.5 shrink-0"
                              aria-hidden="true"
                            />
                            <span className="sr-only">
                              {" "}
                              (opens in a new tab)
                            </span>
                          </>
                        )}
                      </a>
                    )}
                  </article>
                ),
              )}
            </div>
            <StoreMap />
          </section>

          <section
            aria-labelledby="message-heading"
            className="min-w-0 space-y-5 lg:col-span-5"
          >
            <div>
              <h2
                id="message-heading"
                className="text-xl font-bold tracking-tight text-foreground"
              >
                How can we help?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Share your question and continue the conversation on WhatsApp.
              </p>
            </div>
            <ContactForm />
            <article className="surface-panel p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-bold">Our listed services</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                View the service information on our Google business listing.
              </p>
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 block"
              >
                <div className="relative mx-auto aspect-[9/20] w-full max-w-[190px] overflow-hidden rounded-lg border border-border bg-white shadow-sm">
                  <Image
                    src="/images/contact/google-profile-services.avif"
                    alt="Muhit Telecom services page from its Google Business Profile"
                    fill
                    sizes="190px"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:underline">
                  Open Google listing <ExternalLink className="ml-2 size-3.5" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </article>
          </section>
        </div>
      </Container>
    </div>
  );
}
