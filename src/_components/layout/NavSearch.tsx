"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type RefObject,
} from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { productsData } from "@/_data/products";
import { SearchDropdown } from "@/_components/layout/SearchDropdown";

interface NavSearchProps {
  inputRef?: RefObject<HTMLInputElement | null>;
  onSearch?: () => void;
}

export function NavSearch({ inputRef, onSearch }: NavSearchProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const internalInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = inputRef ?? internalInputRef;

  // 250ms debouncing for fast & smooth matching
  useEffect(() => {
    const timer = setTimeout(() => {
      const trimmed = query.trim();
      setDebouncedQuery(trimmed);
      if (trimmed.length > 0) {
        setIsOpen(true);
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [query]);

  // Dismiss dropdown on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
      .slice(0, 6);
  }, [debouncedQuery]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
      onSearch?.();
    }
  };

  const handleSelectProduct = () => {
    setIsOpen(false);
    onSearch?.();
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <form
        role="search"
        aria-label="Product search"
        onSubmit={handleSearch}
        autoComplete="off"
        className="relative w-full"
      >
        <div className="relative flex items-center">
          <input
            type="search"
            name="search"
            ref={searchInputRef}
            aria-label="Search products"
            enterKeyHint="search"
            value={query}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            onFocus={() => {
              if (debouncedQuery.length > 0) setIsOpen(true);
            }}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search smartphones, chargers, earbuds, repair parts..."
            className="w-full pl-4 pr-20 py-2 text-base md:text-sm bg-muted/80 hover:bg-muted text-foreground rounded-lg border border-border/80 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card transition-all placeholder:text-muted-foreground"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setDebouncedQuery("");
                setIsOpen(false);
                searchInputRef.current?.focus();
              }}
              className="absolute right-11 text-muted-foreground hover:text-foreground p-1 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 px-3 bg-primary text-primary-foreground rounded-md flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </form>

      <SearchDropdown
        isOpen={isOpen}
        query={debouncedQuery}
        products={matchingProducts}
        onSelect={handleSelectProduct}
      />
    </div>
  );
}
