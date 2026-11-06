import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { pageMetadata } from "@/_components/seo/metadata";
import { servicesData } from "@/_data/services";
import { ServiceCard } from "@/_components/cards/ServiceCard";
import { ServiceBookingForm } from "@/_components/forms/ServiceBookingForm";
import { ServiceBookingQuery } from "@/_components/services/ServiceBookingQuery";
import { Container } from "@/_components/layout/Container";

export const metadata: Metadata = pageMetadata({
  title: "Mobile & PC Repair Services | Muhit Telecom | Hili, Dinajpur",
  description:
    "Explore eight device services in Hili: battery and screen replacement, motherboard diagnosis, permitted software support, multimedia transfer and accessories advice.",
  path: "/services",
});

const steps = [
  {
    title: "Describe the problem",
    text: "Share the exact model, symptoms and any previous damage or repair. Back up important data before service.",
  },
  {
    title: "Inspect and agree",
    text: "Confirm feasibility, parts choices, any diagnostic fee, total estimate, expected timing and applicable warranty terms before approving work.",
  },
  {
    title: "Check at collection",
    text: "Review the agreed work and test relevant functions. Keep the receipt and the confirmed service or product terms.",
  },
];

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <Container>
        <header className="w-full mb-10">
          <h1 className="page-title">
            Mobile, computer & accessory services
          </h1>
          <p className="page-lede mt-4">
            Compare all eight services below, then open a dedicated guide for
            diagnosis, repair scope, parts choices, preparation and frequently
            asked questions. Visit us on Sonarpatti Road, Bazar Road, or request
            an estimate before bringing your device. Listed prices and times are
            indicative; parts availability, device condition and inspection
            determine the final quote.
          </p>
        </header>
        <section
          aria-label="All eight services"
          className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4"
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>
        <section
          className="surface-panel mb-14 p-6 shadow-sm sm:p-8"
          aria-labelledby="service-process"
        >
          <h2 id="service-process" className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
            How to arrange a service
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title}>
                <h3 className="font-bold mb-2">
                  <span className="text-primary">0{index + 1}.</span>{" "}
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </section>
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <Suspense fallback={<ServiceBookingForm />}>
            <ServiceBookingQuery />
          </Suspense>
          <section aria-labelledby="hub-faq" className="space-y-5">
              <h2 id="hub-faq" className="text-2xl font-bold tracking-tight">
              Before you book
            </h2>
            <div>
              <h3 className="font-semibold">
                Is the starting price my final bill?
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                No. The model, fault, selected part and availability affect
                cost. Confirm any assessment fee and approve the quote before
                work. No automatic no-fix-no-fee arrangement or repair guarantee
                is implied.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Are all parts and warranty periods the same?
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                No. Ask whether the proposed part is manufacturer supplied,
                refurbished or compatible. Confirm its limitations, coverage and
                exclusions rather than relying on catalog reference periods.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Can any locked phone be unlocked?
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                No. Ownership verification and carrier or manufacturer-permitted
                support are required. Eligibility is checked individually;
                anti-theft, financing, enterprise and account protections are
                not bypassed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What should I bring?</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                Bring the device, exact model details and relevant charger or
                accessory. Back up files first. For multimedia transfer, bring
                only content you own or are authorised to copy. Contact us
                before arranging any courier delivery.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center text-primary font-semibold underline underline-offset-4"
            >
              Contact the Hili shop
            </Link>
          </section>
        </div>
      </Container>
    </div>
  );
}
