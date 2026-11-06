import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { FacebookIcon } from "@/_components/icons/FacebookIcon";
import { siteConfig } from "@/_data/siteConfig";

const contactCards = [
  {
    title: "Visit the showroom",
    icon: MapPin,
    description: siteConfig.address.fullAddress_en,
    href: siteConfig.address.googleMapsUrl,
    label: "Get directions",
  },
  {
    title: "Hotline & orders",
    icon: Phone,
    description: `Speak directly with ${siteConfig.proprietor} about gadgets, repairs, or your order.`,
    href: `tel:${siteConfig.phoneIntl}`,
    label: siteConfig.phone,
  },
  {
    title: "Opening hours",
    icon: Clock,
    description: siteConfig.hours.display,
  },
  {
    title: "Stay connected",
    icon: FacebookIcon,
    description: `${siteConfig.facebookFollowers} followers · Gadgets, offers, and repair updates.`,
    href: siteConfig.facebook,
    label: "Visit our Facebook page",
  },
];

export function ContactCardList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {contactCards.map(({ title, icon: Icon, description, href, label }) => (
        <article key={title} className="surface-panel flex flex-col p-5 shadow-sm sm:p-6">
          <span className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <h3 className="text-base font-semibold text-card-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          {href && (
            <a
              href={href}
              target={href.startsWith("https:") ? "_blank" : undefined}
              rel={href.startsWith("https:") ? "noopener noreferrer" : undefined}
              className="mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded-lg pt-3 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {label}
              {href.startsWith("https:") && (
                <>
                  <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </>
              )}
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

