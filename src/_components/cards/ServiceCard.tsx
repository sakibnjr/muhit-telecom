import Link from "next/link";
import Image from "next/image";
import type { ServiceItem } from "@/_types";
import { getServiceContent } from "@/_data/serviceContent";
import { formatPrice } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { interactiveCardClassName } from "@/_ui/card-styles";

export function ServiceCard({ service }: { service: ServiceItem }) {
  const content = getServiceContent(service.slug);
  const title = content?.title ?? service.title;
  const href = `/services/${service.slug}`;

  return (
    <Link
      href={href}
      id={service.slug}
      className={`group scroll-mt-28 flex flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${interactiveCardClassName}`}
    >
      <div className="relative block h-48 w-full overflow-hidden bg-muted/60">
        <Image
          src={service.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-7 text-muted-foreground">
          {content?.description ??
            "Discuss your device and confirm the available service after inspection."}
        </p>
        <div className="space-y-1 text-sm leading-6 text-muted-foreground">
          <p>Indicative from {formatPrice(service.startingPrice)}</p>
          <p>Time estimate: {service.estimatedTime}</p>
          <p>
            Confirm price, timing and any warranty terms at inspection or
            product selection; no automatic coverage.
          </p>
        </div>
        <span className="mt-auto inline-flex min-h-11 items-center gap-2 self-start border-t border-border/75 pt-3 text-sm font-bold text-primary transition-colors group-hover:text-blue-800">
          <span>Service details</span>
          <span className="sr-only">: {title}</span>
          <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
