import Link from "next/link";

import type { Category } from "@/_types";
import { CategoryImage } from "@/_components/categories/CategoryImage";
import { interactiveCardClassName } from "@/_ui/card-styles";

export function CategoryCard({ category }: { category: Category }) {
  const targetHref = `/categories/${category.slug}`;

  return (
    <Link
      href={targetHref}
      className={`group flex h-full flex-col items-center p-3 text-center sm:p-4 ${interactiveCardClassName}`}
    >
      <div className="mb-3 w-full overflow-hidden rounded-lg">
        <CategoryImage category={category} />
      </div>

      <h3 className="flex min-h-10 items-center justify-center text-sm font-semibold text-foreground transition-colors group-hover:text-primary sm:min-h-12 sm:text-base">
        {category.name}
      </h3>
    </Link>
  );
}
