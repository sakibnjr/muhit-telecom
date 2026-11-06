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
        <div className="mb-8">
          <h1 className="page-title page-title-compact">
            Your Shopping Cart
          </h1>
        </div>

        <CartView />
      </Container>
    </div>
  );
}
