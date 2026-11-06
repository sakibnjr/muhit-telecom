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

  const soldOut = product.stock <= 0;
  const hasDiscount = product.regularPrice > product.price;
  const cartLabel = soldOut
    ? `${product.title} is sold out`
    : isAdded
      ? `${product.title} added to cart`
      : `Add ${product.title} to cart`;

  return (
    <article className={`group relative flex h-full flex-col overflow-hidden active:scale-[0.99] ${interactiveCardClassName}`}>
      {/* Top Image Container - fixed ratio keeps every card in the grid aligned */}
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
            className="object-contain p-3 transition-transform duration-300 ease-out group-hover:scale-105 sm:p-4"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between gap-2 p-2.5 sm:p-3">
        <div>
          {/* Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="min-h-10 line-clamp-2 text-sm font-medium leading-5 text-foreground transition-colors group-hover:text-primary sm:text-base xl:text-sm">
              {product.title}
            </h3>
          </Link>

          {/* Rating and stock, kept light so price stays the focus */}
          <div className="mt-1.5 flex min-w-0 items-center justify-between gap-1 text-[10px] sm:text-xs">
            {product.reviewsCount > 0 ? (
              <span
                className="flex min-w-0 items-center gap-1"
                aria-label={`${product.rating} out of 5 from ${product.reviewsCount} reviews`}
              >
                <Star className="size-3.5 shrink-0 fill-current text-amber-500" aria-hidden="true" />
                <span className="font-semibold text-foreground">{product.rating}</span>
                <span className="truncate text-muted-foreground/70">({product.reviewsCount})</span>
              </span>
            ) : (
              <span className="font-semibold text-primary">New</span>
            )}
            <span className={`flex shrink-0 items-center gap-1 font-medium ${product.stock > 0 ? "text-emerald-700/90" : "text-muted-foreground"}`}>
              <span aria-hidden="true" className={`size-1.5 rounded-full ${product.stock > 0 ? "bg-emerald-500" : "bg-muted-foreground/50"}`} />
              {product.stock > 0 ? "In stock" : "Sold out"}
            </span>
          </div>
        </div>


        <div>
          {/* Price row: price + saving pill, with a round cart button on mobile */}
          <div className="mb-2 flex items-end justify-between gap-2 sm:mb-2.5">
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
                  {formatPrice(product.price)}
                </span>
                {hasDiscount && (
                  <span className="text-[11px] text-muted-foreground/80 line-through sm:text-xs">
                    {formatPrice(product.regularPrice)}
                  </span>
                )}
              </div>
              {hasDiscount && (
                <span className="mt-1 inline-block rounded-md border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold leading-none text-emerald-800 sm:text-[11px]">
                  Save {formatPrice(product.regularPrice - product.price)}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={soldOut}
              aria-label={cartLabel}
              className={`flex size-11 shrink-0 items-center justify-center rounded-full text-primary-foreground shadow-md transition-all active:scale-90 disabled:cursor-not-allowed disabled:opacity-50 sm:hidden ${isAdded ? "bg-emerald-700 shadow-emerald-700/20" : "bg-primary shadow-primary/25"}`}
            >
              {isAdded && !soldOut ? <Check className="size-5" aria-hidden="true" /> : <ShoppingCart className="size-5" aria-hidden="true" />}
            </button>
          </div>

          {/* Desktop and tablet: full-width Add to Cart action */}
          <div className="hidden sm:flex">
            <Button
              type="button"
              onClick={handleAddToCart}
              disabled={soldOut}
              size="sm"
              aria-label={cartLabel}
              aria-live="polite"
              className={`min-h-11 min-w-0 flex-1 gap-1.5 px-2.5 text-xs sm:px-3 sm:text-sm xl:gap-1 xl:px-1 xl:text-[11px] ${isAdded ? "from-emerald-700 to-emerald-800 shadow-emerald-700/20 hover:brightness-105" : ""}`}
            >
              {isAdded && !soldOut ? (
                <Check className="size-4 shrink-0 xl:size-3.5" aria-hidden="true" />
              ) : (
                <ShoppingCart className="size-4 shrink-0 xl:size-3.5" aria-hidden="true" />
              )}
              <span className="truncate">{soldOut ? "Sold out" : isAdded ? "Added" : "Add to cart"}</span>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
