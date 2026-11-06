import type { Metadata } from "next";
import { pageMetadata } from "@/_components/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/_components/layout/Container";
import { Button } from "@/_ui/button";
import {
  ShieldCheck,
  Users,
  Award,
  Clock,
  ArrowRight,
  Heart,
} from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "About Us | Muhit Telecom | Hili, Dinajpur",
  description:
    "Meet proprietor Masum Hossain and learn about Muhit Telecom, a mobile gadget, accessories and repair shop on Sonarpatti Road in Hakimpur (Hili), Dinajpur.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="page-shell">
      <Container>
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <h1 className="page-title">
              Trusted Tech Gadget Showroom & Certified Repair Lab in Hili
            </h1>
            <p className="text-base leading-7 text-muted-foreground">
              Situated in the prominent Sonarpatti commercial hub of Hakimpur
              (Hili), Dinajpur, Muhit Telecom was established with a
              straightforward mission: delivering 100% authentic gadgets and
              honest hardware repair craftsmanship free of counterfeit parts.
            </p>
            <p className="text-base leading-7 text-muted-foreground">
              Under the direct leadership of proprietor Masum Hossain, our
              showroom maintains an extensive selection of genuine TWS earbuds,
              smartwatches, fast GaN chargers, and networking routers, while our
              electronics lab delivers microscopic diagnostics for complex
              smartphone and motherboard issues.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button variant="primary" size="md">
                <Link href="/shop" className="flex items-center gap-2">
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="md">
                <Link href="/contact">Visit Showroom</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-border/80 bg-muted shadow-lg lg:col-span-6">
            <Image
              src="/images/about/shop-showcase.avif"
              alt="Illustrative mobile accessories showroom interior"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <p className="absolute inset-x-0 bottom-0 bg-secondary/90 px-4 py-3 text-xs text-secondary-foreground">
              Illustrative showroom visual • Visit our store in Hili
            </p>
          </div>
        </div>

        <section className="surface-panel mb-16 grid items-center gap-7 p-6 shadow-sm sm:p-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <div className="relative mx-auto aspect-[9/19] w-full max-w-[190px] overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <Image
              src="/images/about/online-store-preview.avif"
              alt="Preview of the Muhit Telecom online shop and product catalogue"
              fill
              sizes="190px"
              className="object-contain"
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Browse the catalogue before you visit
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Explore phones, accessories, and everyday tech from home, then contact us to confirm the exact model and current availability.
            </p>
            <Link href="/shop" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Explore the shop <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="surface-panel p-6 text-center shadow-sm">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-sm font-bold text-foreground mb-1">
              4.3 ★ Google Rating
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Verified reviews from satisfied local and online clients.
            </p>
          </div>
          <div className="surface-panel p-6 text-center shadow-sm">
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="text-sm font-bold text-foreground mb-1">
              5.1K+ Community
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Engaged Facebook community across North Bengal.
            </p>
          </div>
          <div className="surface-panel p-6 text-center shadow-sm">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-foreground mb-1">
              100% Genuine Gear
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Official brand warranty and instant replacement backup.
            </p>
          </div>
          <div className="surface-panel p-6 text-center shadow-sm">
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-sm font-bold text-foreground mb-1">
              Open 7 Days a Week
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              10:00 AM to 9:30 PM everyday for customer convenience.
            </p>
          </div>
        </div>

        {/* Masum Hossain Note */}
        <div className="rounded-xl bg-muted/40 border border-border p-6 sm:p-10 max-w-3xl mx-auto text-center space-y-4">
          <Heart className="w-8 h-8 text-red-500 mx-auto" />
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            A Personal Message from Masum Hossain
          </h2>
          <p className="text-xs sm:text-sm text-foreground/80 italic leading-relaxed">
            &ldquo;For us, technology retail and repair is built on genuine
            trust and lasting relationships. Whenever your essential smartphone
            encounters a malfunction, or you want authentic gear without getting
            misled by knockoffs, we stand by transparent diagnostics and honest
            prices. You are always welcome in our showroom.&rdquo;
          </p>
          <div className="pt-2">
            <span className="font-bold text-foreground text-sm block">
              Masum Hossain
            </span>
            <span className="text-xs text-muted-foreground">
              Proprietor, Muhit Telecom, Hakimpur (Hili)
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
