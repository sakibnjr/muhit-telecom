import type { Metadata } from "next";
import { pageMetadata } from "@/_components/seo/metadata";
import { Container } from "@/_components/layout/Container";
import { Shield } from "lucide-react";
import { siteConfig } from "@/_data/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Muhit Telecom",
  description:
    "How Muhit Telecom handles customer information, phone numbers, and delivery addresses.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <Container>
        <article className="surface-panel w-full space-y-7 p-6 text-sm leading-7 text-foreground/90 shadow-sm sm:p-10 lg:p-12">
          <header className="border-b border-border/70 pb-6 text-center">
            <Shield className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
            <h1 className="page-title page-title-compact">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Muhit Telecom Customer Data Protection
            </p>
          </header>

          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              1. Information Collection
            </h2>
            <p className="text-muted-foreground">
              To process gadget orders, arrange courier dispatch, and follow up
              on repair consultations, we collect strictly necessary details
              such as your name, mobile number, and destination address.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              2. Security & Third-Party Disclosure
            </h2>
            <p className="text-muted-foreground">
              We never sell, rent, or trade your personal information. Your
              contact number and shipping address are provided strictly to
              logistics partners (such as Steadfast Courier or Pathao) solely to
              execute delivery.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              3. Questions & Contact
            </h2>
            <p className="text-muted-foreground">
              For any questions regarding privacy practices, please contact us
              directly at {siteConfig.phone} or visit our physical showroom in
              Sonarpatti Road, Hakimpur 5270, Dinajpur, Bangladesh.
            </p>
          </div>

          <footer className="border-t border-border pt-4 text-sm text-muted-foreground">
            Last Updated: November 2026 • Muhit Telecom.
          </footer>
        </article>
      </Container>
    </div>
  );
}
