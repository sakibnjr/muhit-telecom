"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Star, ShoppingCart } from "lucide-react";
import type { Product } from "@/_types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/_context/CartContext";
import { Button } from "@/_ui/button";
import { catalogMediaClassName, interactiveCardClassName } from "@/_ui/card-styles";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const addedFeedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (addedFeedbackTimer.current) clearTimeout(addedFeedbackTimer.current);
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    if (addedFeedbackTimer.current) clearTimeout(addedFeedbackTimer.current);
    addedFeedbackTimer.current = setTimeout(() => setIsAdded(false), 1600);
  };

  return (
    <article className={`group relative flex h-full flex-col overflow-hidden ${interactiveCardClassName}`}>
      {/* Top Image Container - Transparent product floats cleanly */}
      <div className={`${catalogMediaClassName} relative aspect-[5/4] overflow-hidden`}>
        <Link
          href={`/products/${product.slug}`}
          aria-label={`View ${product.title}`}
          className="absolute inset-0"
        >
          <Image
            src={product.image}
            alt={`${product.title} - Muhit Telecom Hili`}
            fill
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, 17vw"
            className="object-contain p-2 sm:p-4"
          />
        </Link>

        {product.regularPrice > product.price && (
          <span className="absolute right-2 top-2 z-10 rounded-md border border-emerald-200 bg-emerald-50/95 px-1.5 py-1 text-[9px] font-bold leading-none text-emerald-800 shadow-sm backdrop-blur-sm sm:right-3 sm:top-3 sm:px-2 sm:text-[11px]">
            Save {formatPrice(product.regularPrice - product.price)}
          </span>
        )}

      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between gap-2 p-2.5 sm:p-3">
        <div>
          {/* Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="min-h-10 line-clamp-2 text-sm font-normal leading-5 text-foreground transition-colors group-hover:text-primary sm:text-base xl:text-sm">
              {product.title}
            </h3>
          </Link>

          {/* Rating and review count */}
          <div className="mt-1 flex min-w-0 items-center justify-between gap-1 text-[10px] sm:text-xs">
            {product.reviewsCount > 0 ? (
              <span
                className="flex min-w-0 items-center gap-1.5"
                aria-label={`${product.rating} out of 5 from ${product.reviewsCount} reviews`}
              >
                <Star className="size-3.5 shrink-0 fill-current text-amber-500" aria-hidden="true" />
                <span className="font-bold text-foreground">{product.rating}</span>
                <span className="truncate text-muted-foreground">({product.reviewsCount})</span>
              </span>
            ) : (
              <span className="font-semibold text-primary">New</span>
            )}
            <span className={`flex shrink-0 items-center gap-1 ${product.stock > 0 ? "text-emerald-700" : "text-muted-foreground"}`}>
              <span aria-hidden="true" className={`size-1.5 rounded-full ${product.stock > 0 ? "bg-emerald-500" : "bg-muted-foreground/50"}`} />
              {product.stock > 0 ? "In stock" : "Sold out"}
            </span>
          </div>
        </div>

        <div>
          {/* Price */}
          <div className="mb-2">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                {formatPrice(product.price)}
              </span>
              {product.regularPrice > product.price && (
                <span className="text-[10px] text-muted-foreground line-through sm:text-[11px]">
                  {formatPrice(product.regularPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Primary Add to Cart action */}
          <div className="flex">
            <Button
              type="button"
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              size="sm"
              aria-label={product.stock <= 0 ? `${product.title} is sold out` : isAdded ? `${product.title} added to cart` : `Add ${product.title} to cart`}
              aria-live="polite"
              className={`min-h-11 min-w-0 flex-1 gap-1.5 px-2.5 text-xs sm:px-3 sm:text-sm xl:gap-1 xl:px-1 xl:text-[11px] ${isAdded ? "from-emerald-700 to-emerald-800 shadow-emerald-700/20 hover:brightness-105" : ""}`}
            >
              {isAdded && product.stock > 0 ? (
                <Check className="size-4 shrink-0 xl:size-3.5" aria-hidden="true" />
              ) : (
                <ShoppingCart className="size-4 shrink-0 xl:size-3.5" aria-hidden="true" />
              )}
              <span className="truncate">{product.stock <= 0 ? "Sold out" : isAdded ? "Added" : "Add to cart"}</span>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
