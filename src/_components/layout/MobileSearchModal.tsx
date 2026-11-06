"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search, X } from "lucide-react";
import { productsData } from "@/_data/products";
import { MobileSearchResults } from "@/_components/layout/MobileSearchResults";
import { useHistoryClose } from "@/lib/useHistoryClose";

interface MobileSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSearchModal({ isOpen, onClose }: MobileSearchModalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 200);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => inputRef.current?.focus(), 60);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  const matchingProducts = useMemo(() => {
    if (!debouncedQuery) return [];
    const q = debouncedQuery.toLowerCase();
    return productsData
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.title_bn && p.title_bn.toLowerCase().includes(q)) ||
          p.brand.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      )
      .slice(0, 8);
  }, [debouncedQuery]);

  const { goBack, markNavigating } = useHistoryClose(isOpen, onClose);

  if (!isOpen) return null;

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      markNavigating();
      onClose();
      router.replace(`/shop?q=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleSelect = (href: string) => {
    markNavigating();
    onClose();
    router.replace(href);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
      className="fixed inset-0 z-[70] flex flex-col bg-card text-foreground md:hidden animate-in fade-in duration-150"
    >
      {/* Top Search Header */}
      <header className="sticky top-0 z-10 flex items-center gap-2 border-b border-border/80 bg-card px-3 py-2.5 pt-[calc(0.625rem+env(safe-area-inset-top))]">
        <button
          type="button"
          onClick={goBack}
          aria-label="Back"
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft className="size-5" />
        </button>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-1 items-center gap-2"
        >
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="search"
              name="search"
              value={query}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search phones, earbuds, chargers..."
              enterKeyHint="search"
              className="w-full rounded-xl border border-border/80 bg-muted/70 py-2 pl-3.5 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:bg-card focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setDebouncedQuery("");
                  inputRef.current?.focus();
                }}
                aria-label="Clear query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>

          <button
            type="submit"
            aria-label="Search"
            className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
          >
            <Search className="size-4" aria-hidden="true" />
          </button>
        </form>
      </header>

      {/* Results / Suggestions View directly below top search bar */}
      <div className="flex-1 overflow-y-auto px-4 py-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <MobileSearchResults
          query={debouncedQuery}
          products={matchingProducts}
          onSelect={handleSelect}
          onSubmit={() => handleSubmit()}
          onTagClick={(tag) => setQuery(tag)}
        />
      </div>
    </div>
  );
}
