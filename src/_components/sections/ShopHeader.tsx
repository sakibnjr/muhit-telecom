"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface ShopHeaderProps {
  isDeals?: boolean;
}

export function ShopHeader({ isDeals }: ShopHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mb-5 w-full sm:mb-8">
      <div className="flex items-center justify-between gap-3">
        <h1 className="truncate text-lg font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {isDeals
            ? "Special Offers & Hot Deals"
            : "All Genuine Gadgets & Accessories"}
        </h1>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse description" : "Expand description"}
          className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-card text-muted-foreground shadow-xs transition-colors hover:bg-muted hover:text-foreground md:hidden"
        >
          {isOpen ? (
            <Minus className="size-4 text-primary" aria-hidden="true" />
          ) : (
            <Plus className="size-4" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } mt-2.5 md:block animate-in fade-in duration-150`}
      >
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-base sm:leading-7">
          {isDeals
            ? "Grab handpicked discount offers and special deals on authentic tech gear in Hakimpur (Hili) and across Bangladesh."
            : "Handpicked tech gear with authentic warranty in Hakimpur (Hili) and across Bangladesh."}
        </p>
      </div>
    </header>
  );
}

