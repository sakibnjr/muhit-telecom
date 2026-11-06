import { pageMetadata } from "@/_components/seo/metadata";
import { MessageCircle, Phone } from "lucide-react";
import { Container } from "@/_components/layout/Container";
import { ContactForm } from "@/_components/forms/ContactForm";
import { ContactCardList } from "@/_components/contact/ContactCardList";
import { StoreMap } from "@/_components/StoreMap";
import { siteConfig } from "@/_data/siteConfig";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact & Showroom Location | Muhit Telecom",
  description:
    "Contact Muhit Telecom in Sonarpatti Road, Hakimpur (Hili), Dinajpur. Phone: 01910-755835. Open daily 10:00 AM - 9:30 PM with live Google Maps directions.",
});

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Container>
        <header className="mb-8 rounded-xl border border-border/80 bg-light-section p-6 text-light-section-text shadow-sm sm:p-10 lg:mb-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="w-full">
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
            <ContactCardList />
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
          </section>
        </div>
      </Container>
    </div>
  );
}
