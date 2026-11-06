import type { Metadata } from "next";
import { pageMetadata } from "@/_components/seo/metadata";
import { Container } from "@/_components/layout/Container";
import { CheckoutForm } from "@/_components/forms/CheckoutForm";

export const metadata: Metadata = pageMetadata({
  title: "Checkout | Muhit Telecom",
  description:
    "Review your order and provide delivery details for your Muhit Telecom purchase.",
  path: "/checkout",
  noIndex: true,
});

export default function CheckoutPage() {
  return (
    <div className="page-shell">
      <Container>
        <div className="mb-8">
          <h1 className="text-lg font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Order & Delivery Details
          </h1>
        </div>

        <CheckoutForm />
      </Container>
    </div>
  );
}
