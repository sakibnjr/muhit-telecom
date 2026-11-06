import type { Metadata } from "next";
import { Suspense } from "react";
import { pageMetadata } from "@/_components/seo/metadata";
import { Container } from "@/_components/layout/Container";
import { ShopContent } from "@/_components/sections/ShopContent";
import { ShopHeader } from "@/_components/sections/ShopHeader";

export const metadata: Metadata = pageMetadata({
  title: "Gadgets & Accessories | Muhit Telecom",
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
  const isDeals = Array.isArray(params.filter)
    ? params.filter.includes("deals")
    : params.filter === "deals";

  return (
    <>
      <ShopHeader isDeals={isDeals} />
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
    </>
  );
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  return (
    <div className="page-shell">
      <Container>
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
