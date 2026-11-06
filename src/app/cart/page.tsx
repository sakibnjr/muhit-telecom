import type { Metadata } from "next";
import { pageMetadata } from "@/_components/seo/metadata";
import { Container } from "@/_components/layout/Container";
import { CartView } from "@/_components/forms/CartView";

export const metadata: Metadata = pageMetadata({
  title: "Shopping Cart | Muhit Telecom",
  description:
    "Review your selected gadgets and accessories before checkout at Muhit Telecom.",
  path: "/cart",
  noIndex: true,
});

export default function CartPage() {
  return (
    <div className="page-shell">
      <Container>
        <div className="mb-5 sm:mb-8">
          <h1 className="text-lg font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Your Shopping Cart
          </h1>
        </div>

        <CartView />
      </Container>
    </div>
  );
}
