"use client";

import { useRef, useState, type FormEvent, type RefObject } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

interface NavSearchProps {
  inputRef?: RefObject<HTMLInputElement | null>;
  onSearch?: () => void;
}

export function NavSearch({ inputRef, onSearch }: NavSearchProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const internalInputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = inputRef ?? internalInputRef;

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
      onSearch?.();
    }
  };

  return (
    <form
      role="search"
      aria-label="Product search"
      onSubmit={handleSearch}
      className="relative w-full"
    >
      <div className="relative flex items-center">
        <input
          type="text"
          name="q"
          ref={searchInputRef}
          aria-label="Search products"
          enterKeyHint="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search smartphones, chargers, earbuds, repair parts..."
          className="w-full pl-4 pr-20 py-2 text-base md:text-sm bg-muted/80 hover:bg-muted text-foreground rounded-lg border border-border/80 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card transition-all placeholder:text-muted-foreground"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              searchInputRef.current?.focus();
            }}
            className="absolute right-11 text-muted-foreground hover:text-foreground p-1"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-1 top-1 bottom-1 px-3 bg-primary text-primary-foreground rounded-md flex items-center justify-center hover:bg-primary/90 transition-colors"
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
