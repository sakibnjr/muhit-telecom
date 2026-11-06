import Link from "next/link";
import { Logo } from "@/_components/layout/Logo";
import { NavSearch } from "@/_components/layout/NavSearch";
import { CartNavButton } from "@/_components/layout/CartNavButton";
import { MobileNav } from "@/_components/layout/MobileNav";
import { Flame, Home, PackageSearch } from "lucide-react";
import { categories } from "@/_data/categories";
import { servicesData } from "@/_data/services";
import { CatalogNavigation } from "@/_components/layout/CatalogNavigation";

export function Navbar() {
  const navigationGroups = [
    {
      title: "Categories",
      href: "/categories",
      links: categories.map(({ name, slug }) => ({
        label: name,
        href: `/categories/${slug}`,
      })),
    },
    {
      title: "Services",
      href: "/services",
      links: servicesData.map(({ title, slug }) => ({
        label: title,
        href: `/services/${slug}`,
      })),
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-secondary text-secondary-foreground shadow-xs backdrop-blur-md">
      {/* Main Header Row - Aligned with page width */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative flex h-14 items-center justify-between gap-1 md:h-20 md:gap-8">
          <MobileNav groups={navigationGroups} />
          <Logo className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" />

          <div className="hidden md:flex flex-1 max-w-2xl mx-2">
            <NavSearch />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Order Tracking Icon & Label */}
            <Link
              href="/track-order"
              className="group hidden sm:flex flex-col items-center justify-center px-2 py-1 text-secondary-foreground/85 transition-colors hover:text-white select-none"
              title="Track Order"
              aria-label="Track Order"
            >
              <PackageSearch className="w-6 h-6 stroke-[1.75] group-hover:scale-105 transition-transform" />
              <span className="mt-1 text-xs font-medium leading-none text-secondary-foreground/85 transition-colors group-hover:text-white">
                Track Order
              </span>
            </Link>

            {/* Vertical Divider Line */}
            <div className="mx-1 hidden h-8 w-px bg-white/20 sm:block" />

            {/* Cart Icon & Label with Badge */}
            <CartNavButton />
          </div>
        </div>
      </div>

      {/* Subnav row with aligned content */}
      <div className="w-full bg-secondary">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <nav
            aria-label="Main navigation"
            className="relative hidden md:flex flex-wrap items-center gap-1 py-2.5 text-xs font-medium xl:justify-between"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold shrink-0 shadow-xs hover:bg-primary/95 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>

            <Link
              href="/shop"
              className="rounded-lg px-3 py-2.5 text-secondary-foreground/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              Shop
            </Link>
            <Link
              href="/shop?filter=deals"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-semibold text-amber-100 transition-colors hover:bg-amber-300/10 hover:text-amber-50"
            >
              <Flame
                className="size-4 fill-orange-500 text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.65)] motion-safe:animate-bounce"
                aria-hidden="true"
              />
              Hot Deals
            </Link>
            <Link
              href="/#new-arrivals"
              className="rounded-lg px-3 py-2.5 text-secondary-foreground/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              New Arrivals
            </Link>
            <CatalogNavigation groups={navigationGroups} dark />
            <Link
              href="/about"
              className="rounded-lg px-3 py-2.5 text-secondary-foreground/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="/warranty-policy"
              className="rounded-lg px-3 py-2.5 text-secondary-foreground/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              Warranty
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2.5 text-secondary-foreground/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
