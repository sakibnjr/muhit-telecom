import type { Metadata } from "next";
import { pageMetadata } from "@/_components/seo/metadata";
import { Container } from "@/_components/layout/Container";
import { FileText } from "lucide-react";
import { siteConfig } from "@/_data/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions | Muhit Telecom",
  description:
    "Terms of service, gadget ordering policies, and delivery rules for Muhit Telecom customers.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="page-shell">
      <Container>
        <article className="surface-panel w-full space-y-7 p-6 text-sm leading-7 text-foreground/90 shadow-sm sm:p-10 lg:p-12">
          <header className="border-b border-border/70 pb-6 text-center">
            <FileText className="w-10 h-10 text-primary mx-auto mb-2" />
            <h1 className="page-title page-title-compact">
              Terms & Conditions
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Muhit Telecom Electronic Services & Store Guidelines
            </p>
          </header>

          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              1. Orders & Pricing
            </h2>
            <p className="text-muted-foreground">
              All prices shown on the website are listed in Bangladeshi Taka
              (BDT ৳). In the rare event of inventory stock discrepancies, our
              support team will contact you promptly to arrange a suitable
              substitute or full cancellation.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              2. Cash on Delivery & Courier Handover
            </h2>
            <p className="text-muted-foreground">
              Cash on Delivery is available across all 64 districts in
              Bangladesh. We encourage buyers to open the external transit
              package in the presence of the courier delivery executive to
              verify physical integrity.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              3. Servicing & Device Data Responsibility
            </h2>
            <p className="text-muted-foreground">
              While our technicians exercise utmost diligence to protect
              customer privacy and data integrity during repairs, we recommend
              backing up essential data prior to submitting devices for firmware
              flashing or dead-boot recovery.
            </p>
          </div>

          <footer className="border-t border-border pt-4 text-sm text-muted-foreground">
            Last Updated: November 2026 • Proprietor: {siteConfig.proprietor},
            Muhit Telecom.
          </footer>
        </article>
      </Container>
    </div>
  );
}
