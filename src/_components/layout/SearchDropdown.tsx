import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/_types";
import { formatPrice } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface SearchDropdownProps {
  products: Product[];
  query: string;
  onSelect: () => void;
  isOpen: boolean;
}

export function SearchDropdown({
  products,
  query,
  onSelect,
  isOpen,
}: SearchDropdownProps) {
  if (!isOpen || !query) return null;

  if (products.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-1.5 z-50 rounded-xl border border-border bg-card p-4 shadow-xl">
        <p className="text-center text-xs text-muted-foreground">
          No matching products found for &ldquo;<span className="font-semibold text-foreground">{query}</span>&rdquo;
        </p>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-1.5 z-50 rounded-xl border border-border bg-card shadow-2xl overflow-hidden divide-y divide-border/60">
      <div className="px-3.5 py-1.5 bg-muted/40 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="font-semibold uppercase tracking-wider">Matching Products ({products.length})</span>
        <span>Click to view</span>
      </div>

      <ul className="max-h-[55vh] overflow-y-auto divide-y divide-border/40 [scrollbar-width:thin]">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/products/${product.slug}`}
              onClick={onSelect}
              className="group flex items-center gap-3 p-2.5 hover:bg-muted/50 transition-colors"
            >
              <div className="relative size-11 shrink-0 rounded-lg bg-muted border border-border/70 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="44px"
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                  {product.title}
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.regularPrice > product.price && (
                    <span className="text-[10px] text-muted-foreground line-through">
                      {formatPrice(product.regularPrice)}
                    </span>
                  )}
                  <span className="text-[10px] text-muted-foreground">
                    • {product.brand}
                  </span>
                </div>
              </div>

              <ArrowRight className="size-3.5 shrink-0 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="p-2 bg-muted/20 text-center">
        <Link
          href={`/shop?q=${encodeURIComponent(query)}`}
          onClick={onSelect}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          <span>View all results for &ldquo;{query}&rdquo;</span>
          <ArrowRight className="size-3" />
        </Link>
      </div>
    </div>
  );
}

