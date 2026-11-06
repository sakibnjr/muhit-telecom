"use client";

import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import type { Product } from "@/_types";
import { formatPrice } from "@/lib/utils";

const POPULAR_SEARCHES = [
  "Samsung",
  "Earbuds",
  "Smartwatch",
  "Fast Charger",
  "Power Bank",
  "Display Repair",
  "Anker",
];

interface MobileSearchResultsProps {
  query: string;
  products: Product[];
  onSelect: (href: string) => void;
  onSubmit: () => void;
  onTagClick: (tag: string) => void;
}

export function MobileSearchResults({
  query,
  products,
  onSelect,
  onSubmit,
  onTagClick,
}: MobileSearchResultsProps) {
  if (query.length === 0) {
    return (
      <div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <TrendingUp className="size-3.5 text-primary" />
          <span>POPULAR SEARCHES</span>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {POPULAR_SEARCHES.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onTagClick(tag)}
              className="rounded-full border border-border/80 bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-sm font-medium text-foreground">
          No products found for &ldquo;{query}&rdquo;
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Try checking spelling or search for brands like Samsung or Anker.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        <span>Matching Products ({products.length})</span>
        <span>Tap to open</span>
      </div>
      <ul className="divide-y divide-border/60 rounded-xl border border-border/80 bg-card overflow-hidden shadow-xs">
        {products.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => onSelect(`/products/${p.slug}`)}
              className="flex w-full items-center gap-3 p-3 text-left transition-colors hover:bg-muted/50 active:bg-muted"
            >
              <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-border/70 bg-muted">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-xs font-semibold text-foreground">
                  {p.title}
                </h4>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs font-bold text-primary">
                    {formatPrice(p.price)}
                  </span>
                  {p.regularPrice > p.price && (
                    <span className="text-[10px] text-muted-foreground line-through">
                      {formatPrice(p.regularPrice)}
                    </span>
                  )}
                  <span className="text-[10px] text-muted-foreground">
                    • {p.brand}
                  </span>
                </div>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground/50" />
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onSubmit}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
      >
        <span>View all results for &ldquo;{query}&rdquo;</span>
        <ArrowRight className="size-3.5" />
      </button>
    </div>
  );
}

