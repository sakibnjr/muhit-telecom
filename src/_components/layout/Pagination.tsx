'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  basePath?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  basePath = '/shop',
}: PaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page <= 1) params.delete('page');
    else params.set('page', page.toString());
    const q = params.toString();
    return q ? `${basePath}?${q}` : basePath;
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      aria-label="Pagination"
      className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row"
    >
      <p className="text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">{startItem}</span> to{' '}
        <span className="font-semibold text-foreground">{endItem}</span> of{' '}
        <span className="font-semibold text-foreground">{totalItems}</span> products
      </p>

      <div className="flex items-center gap-1.5">
        {currentPage > 1 ? (
          <Link
            href={getPageUrl(currentPage - 1)}
            aria-label="Go to previous page"
            scroll={false}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex size-9 cursor-not-allowed items-center justify-center rounded-lg border border-border/50 bg-muted/40 text-muted-foreground/40"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </span>
        )}

        <div className="flex items-center gap-1">
          {pages.map((p, idx) => {
            if (typeof p === 'string') {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="flex size-9 items-center justify-center text-sm text-muted-foreground"
                >
                  &hellip;
                </span>
              );
            }
            const isActive = p === currentPage;
            return (
              <Link
                key={p}
                href={getPageUrl(p)}
                scroll={false}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex size-9 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'border border-border bg-card text-foreground hover:bg-muted'
                }`}
              >
                {p}
              </Link>
            );
          })}
        </div>

        {currentPage < totalPages ? (
          <Link
            href={getPageUrl(currentPage + 1)}
            aria-label="Go to next page"
            scroll={false}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex size-9 cursor-not-allowed items-center justify-center rounded-lg border border-border/50 bg-muted/40 text-muted-foreground/40"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </span>
        )}
      </div>
    </nav>
  );
}
