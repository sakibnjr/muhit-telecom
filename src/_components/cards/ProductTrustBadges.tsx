import { RefreshCw, ShieldCheck, Truck } from "lucide-react";
import type { Product } from "@/_types";

export function ProductTrustBadges({
  warranty,
}: Pick<Product, "warranty">) {
  return (
    <div className="grid grid-cols-1 gap-3 border-t border-border pt-4 text-center text-sm sm:grid-cols-3">
      <div className="rounded-lg bg-muted/40 p-3">
        <Truck className="mx-auto mb-2 size-5 text-primary" />
        <span className="block font-semibold">
          Cash on Delivery
        </span>
        <span className="text-xs text-muted-foreground">
          All Bangladesh
        </span>
      </div>
      <div className="rounded-lg bg-muted/40 p-3">
        <RefreshCw className="mx-auto mb-2 size-5 text-emerald-700" />
        <span className="block font-semibold">
          7-Day Replacement
        </span>
        <span className="text-xs text-muted-foreground">
          Defect Guarantee
        </span>
      </div>
      <div className="rounded-lg bg-muted/40 p-3">
        <ShieldCheck className="mx-auto mb-2 size-5 text-accent" />
        <span className="block font-semibold">{warranty}</span>
        <span className="text-xs text-muted-foreground">
          Official Support
        </span>
      </div>
    </div>
  );
}
