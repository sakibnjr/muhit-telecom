import type { Metadata } from "next";
import { pageMetadata } from "@/_components/seo/metadata";
import { Suspense } from "react";
import { Container } from "@/_components/layout/Container";
import { OrderTrackingForm } from "@/_components/forms/OrderTrackingForm";

export const metadata: Metadata = pageMetadata({
  title: "Track Your Order | Muhit Telecom",
  description:
    "Check your Muhit Telecom order or contact the shop for delivery and repair updates.",
  path: "/track-order",
  noIndex: true,
});

export default function TrackOrderPage() {
  return (
    <div className="page-shell flex items-center">
      <Container>
        <div className="text-center max-w-xl mx-auto mb-8">
          <h1 className="page-title page-title-compact">
            Track Your Order
          </h1>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Enter your order tracking ID or phone number to view live
            consignment and repair status.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="text-center text-xs text-muted-foreground py-8">
              Loading tracking system...
            </div>
          }
        >
          <OrderTrackingForm />
        </Suspense>
      </Container>
    </div>
  );
}
