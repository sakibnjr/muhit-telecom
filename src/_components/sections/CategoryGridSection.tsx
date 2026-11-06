import { categories } from "@/_data/categories";
import { CategoryCard } from "@/_components/cards/CategoryCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CategoryGridSection() {
  return (
    <section className="bg-background py-5 sm:py-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 sm:mb-6 sm:gap-3">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-3xl">
            Shop by category
          </h2>
          <Link
            href="/categories"
            className="inline-flex min-h-9 items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80 sm:min-h-11 sm:gap-1.5 sm:text-sm"
          >
            <span>View all categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3 pb-2 sm:grid-cols-3 sm:gap-5 sm:pb-0 lg:grid-cols-4 xl:grid-cols-6">
          {categories.map((category) => (
            <div key={category.id} className="h-full min-h-[156px] sm:min-h-0">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
