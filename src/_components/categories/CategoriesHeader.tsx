"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

export function CategoriesHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mb-6 w-full sm:mb-8">
      <div className="flex items-center justify-between gap-3">
        <h1 className="truncate text-lg font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Shop categories &amp; buying guides
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
        } mt-3 md:block animate-in fade-in duration-150`}
      >
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-base sm:leading-7">
          Explore all 12 categories to compare device compatibility, useful
          features and safe everyday use. Each guide links to the products
          listed in that category. A category without listings is an invitation
          to enquire about options, not a claim of available stock.
        </p>
        <Link
          href="/shop"
          className="mt-2.5 inline-flex items-center text-xs font-semibold text-primary hover:underline sm:text-sm"
        >
          Prefer to browse products? Visit the shop →
        </Link>
      </div>
    </header>
  );
}

