import type { Metadata } from "next";
import { pageMetadata } from "@/_components/seo/metadata";
import { Suspense } from "react";
import { Container } from "@/_components/layout/Container";
import { ShopContent } from "@/_components/sections/ShopContent";

export const metadata: Metadata = pageMetadata({
  title: "Gadgets & Accessories | Muhit Telecom | Hili, Dinajpur",
  description:
    "Browse phones, earbuds, smartwatches, Wi-Fi routers, chargers and computer accessories at Muhit Telecom in Hili. Cash on Delivery across Bangladesh.",
  path: "/shop",
});

interface ShopPageProps {
  searchParams: Promise<{
    category?: string | string[];
    sort?: string;
    filter?: string | string[];
    q?: string;
    brand?: string | string[];
    price?: string | string[];
    availability?: string | string[];
    page?: string;
  }>;
}

async function ShopAsyncContent({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  return (
    <ShopContent
      category={params.category}
      sort={params.sort}
      filter={params.filter}
      q={params.q}
      brand={params.brand}
      price={params.price}
      availability={params.availability}
      page={params.page}
    />
  );
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  return (
    <div className="page-shell">
      <Container>
        <header className="mb-8 w-full">
          <h1 className="page-title">
            All Genuine Gadgets & Accessories
          </h1>
          <p className="page-lede mt-3">
            Handpicked tech gear with authentic warranty in Hakimpur (Hili) and
            across Bangladesh.
          </p>
        </header>

        <Suspense
          fallback={
            <div className="py-12 text-center text-sm text-muted-foreground">
              Loading gadgets...
            </div>
          }
        >
          <ShopAsyncContent searchParams={searchParams} />
        </Suspense>
      </Container>
    </div>
  );
}
