import Link from "next/link";
import { Logo } from "@/_components/layout/Logo";
import { NavSearch } from "@/_components/layout/NavSearch";
import { CartNavButton } from "@/_components/layout/CartNavButton";
import { MobileNav } from "@/_components/layout/MobileNav";
import { NavbarNav } from "@/_components/layout/NavbarNav";
import { PackageSearch } from "lucide-react";
import { categories } from "@/_data/categories";
import { servicesData } from "@/_data/services";

export function Navbar() {
  const navigationGroups = [
    {
      title: "Categories",
      href: "/categories",
      links: categories.map(({ name, slug, icon }) => ({
        label: name,
        href: `/categories/${slug}`,
        icon,
      })),
    },
    {
      title: "Services",
      href: "/services",
      links: servicesData.map(({ title, slug, iconName }) => ({
        label: title,
        href: `/services/${slug}`,
        icon: iconName,
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
      <div className="hidden md:block w-full bg-secondary-subnav border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <NavbarNav groups={navigationGroups} />
        </div>
      </div>
    </header>
  );
}
