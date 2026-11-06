import Image from "next/image";
import {
  BatteryCharging, Cable, Ear, Fan, Headphones, House,
  Package, Shield, Smartphone, Sparkles, Speaker, Watch, Zap,
} from "lucide-react";
import type { Category } from "@/_types";
import { catalogMediaClassName } from "@/_ui/card-styles";

const icons = {
  BatteryCharging, Cable, Ear, Fan, Headphones, House,
  Shield, Smartphone, Sparkles, Speaker, Watch, Zap,
};

export function CategoryImage({ category }: { category: Category }) {
  const Icon = icons[category.icon as keyof typeof icons] ?? Package;

  return (
    <div className={`${catalogMediaClassName} relative flex aspect-square items-center justify-center overflow-hidden rounded-lg`}>
      {category.image ? (
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 280px"
          className="object-contain p-3 sm:p-8"
        />
      ) : (
        <Icon className="size-16 text-primary/80" aria-hidden="true" strokeWidth={1.35} />
      )}
    </div>
  );
}
