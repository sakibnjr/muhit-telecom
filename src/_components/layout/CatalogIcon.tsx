import {
  Smartphone,
  Zap,
  Headphones,
  Sparkles,
  Shield,
  BatteryCharging,
  Fan,
  Watch,
  Speaker,
  Cable,
  Globe,
  Cpu,
  Microchip,
  Layers,
  DownloadCloud,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Zap,
  Headphones,
  Sparkles,
  Shield,
  BatteryCharging,
  Fan,
  Watch,
  Speaker,
  Cable,
  Ear: Headphones,
  Globe,
  Cpu,
  Microchip,
  Layers,
  DownloadCloud,
  ShoppingBag,
};

export function CatalogIcon({
  name,
  label,
}: {
  name?: string;
  label?: string;
}) {
  const IconComponent = (name && ICON_MAP[name]) || Layers;

  return (
    <span
      className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-xs transition-all duration-200 group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:scale-105"
      aria-hidden="true"
      title={label}
    >
      <IconComponent className="size-3.5 fill-current/30" />
    </span>
  );
}

