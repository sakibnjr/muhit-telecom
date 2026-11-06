import type { Metadata } from "next";
import { pageMetadata } from "@/_components/seo/metadata";
import { Container } from "@/_components/layout/Container";
import { ShieldCheck, RotateCcw, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/_data/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "Warranty & Returns | Muhit Telecom | Hili, Dinajpur",
  description:
    "Read gadget replacement conditions, manufacturer warranty information and mobile repair warranty terms at Muhit Telecom in Hakimpur (Hili), Dinajpur.",
  path: "/warranty-policy",
});

export default function WarrantyPolicyPage() {
  return (
    <div className="page-shell">
      <Container>
        <article className="surface-panel w-full space-y-8 p-6 shadow-sm sm:p-10 lg:p-12">
          <header className="border-b border-border/70 pb-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="page-title page-title-compact">
              Warranty & Return Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Muhit Telecom - Customer Satisfaction and Genuine Quality
              Guaranteed
            </p>
          </header>

          <div className="space-y-6 text-sm leading-7 text-foreground/90">
            <div>
              <h2 className="mb-2 flex items-center gap-2 text-base font-semibold text-foreground">
                <RotateCcw className="w-4 h-4 text-primary" />
                <span>1. 7-Day Replacement Guarantee</span>
              </h2>
              <p className="text-muted-foreground">
                If you encounter any manufacturing fault within 7 days of
                receiving your gadget (e.g. charging port failure, audio driver
                defect), we will replace the item with a factory new unit
                immediately without cumbersome delays.
              </p>
            </div>

            <div>
              <h2 className="mb-2 flex items-center gap-2 text-base font-semibold text-foreground">
                <Clock className="w-4 h-4 text-accent" />
                <span>2. Official Manufacturer Brand Warranty</span>
              </h2>
              <p className="text-muted-foreground">
                All branded equipment—including TP-Link routers (1 Year), Baseus
                GaN chargers and power banks (6 Months), and Fantech/Havit
                peripherals—comes with manufacturer warranty. Please preserve
                original packaging and invoice for claims.
              </p>
            </div>

            <div>
              <h2 className="mb-2 flex items-center gap-2 text-base font-semibold text-foreground">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>3. Mobile Repair Lab Warranty</span>
              </h2>
              <p className="text-muted-foreground">
                Every battery installed in our workshop includes a 6-month
                instant replacement guarantee. Premium OLED displays and combo
                assemblies include 90-day comprehensive touch and performance
                coverage.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-muted/40 border border-border text-xs text-muted-foreground space-y-1.5">
              <span className="font-bold text-foreground block">
                Conditions Not Covered by Warranty:
              </span>
              <p>• Liquid or moisture ingress causing short circuits.</p>
              <p>
                • Physical crack, dent, or impact damage caused by accidental
                drops.
              </p>
              <p>
                • Unauthorized attempts to open or disassemble the device by
                unauthorized shops.
              </p>
            </div>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-muted-foreground">
                For warranty claims or support, please call:
              </span>
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-bold text-primary hover:underline"
              >
                Hotline: {siteConfig.phone}
              </a>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
