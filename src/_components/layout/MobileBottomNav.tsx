"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgePercent,
  House,
  LayoutGrid,
  Search,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "@/_context/CartContext";
import { MobileSearchModal } from "@/_components/layout/MobileSearchModal";

const tabs = [
  {
    label: "Home",
    href: "/",
    icon: House,
    match: (path: string) => path === "/",
  },
  {
    label: "Categories",
    href: "/categories",
    icon: LayoutGrid,
    match: (path: string) => path.startsWith("/categories"),
  },
  {
    label: "Offers",
    href: "/shop?filter=deals",
    icon: BadgePercent,
    match: (path: string) => path === "/shop",
  },
  {
    label: "Cart",
    href: "/cart",
    icon: ShoppingCart,
    match: (path: string) => path === "/cart" || path === "/checkout",
  },
];

export function MobileBottomNav() {
  const pathname = usePathname() ?? "/";
  const { totalCount } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Mobile bottom navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-card/95 px-2 pt-1.5 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur-lg pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <ul className="mx-auto grid h-14 max-w-lg grid-cols-5">
          {tabs.slice(0, 2).map(({ label, href, icon: Icon, match }) => {
            const active = match(pathname);
            return (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-full flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon
                    className="size-5"
                    strokeWidth={active ? 2.5 : 2}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-2 top-0 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              </li>
            );
          })}

          <li>
            <button
              type="button"
              aria-label="Search products"
              aria-haspopup="dialog"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(true)}
              className={`relative flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset ${
                searchOpen
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Search
                className="size-5"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <span>Search</span>
              {searchOpen && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-2 top-0 h-0.5 rounded-full bg-primary"
                />
              )}
            </button>
          </li>

          {tabs.slice(2).map(({ label, href, icon: Icon, match }) => {
            const active = match(pathname);
            return (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-full flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative">
                    <Icon
                      className="size-5"
                      strokeWidth={active ? 2.5 : 2}
                      aria-hidden="true"
                    />
                    {label === "Cart" && (
                      <span className="absolute -right-2 -top-1.5 flex min-h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold leading-none text-primary-foreground">
                        {totalCount}
                      </span>
                    )}
                  </span>
                  <span>{label}</span>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <MobileSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
