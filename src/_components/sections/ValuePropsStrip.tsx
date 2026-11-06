import {
  Banknote,
  PackageCheck,
  Store,
  Truck,
  Wrench,
} from "lucide-react";

const props = [
  {
    icon: PackageCheck,
    title: "Genuine gadgets",
    desc: "100% authentic tech items",
    mobileDesc: "100% authentic",
  },
  {
    icon: Truck,
    title: "Fast local delivery",
    desc: "Hili & Hakimpur express service",
    mobileDesc: "Hili & Hakimpur",
  },
  {
    icon: Banknote,
    title: "Cash on delivery",
    desc: "Pay after device inspection",
    mobileDesc: "Pay after inspection",
  },
  {
    icon: Wrench,
    title: "Trusted repair",
    desc: "Certified hardware technicians",
    mobileDesc: "Certified repairs",
  },
  {
    icon: Store,
    title: "Free store pickup",
    desc: "Collect your order in Hili",
    mobileDesc: "Collect in Hili",
  },
];

function BenefitCard({ item }: { item: (typeof props)[number] }) {
  const IconComponent = item.icon;

  return (
    <div className="flex h-[60px] w-[184px] shrink-0 items-center gap-2 rounded-lg border border-border/70 bg-card px-3 py-0 shadow-sm sm:h-auto sm:w-auto sm:min-h-[76px] sm:gap-3.5 sm:p-4">
      <div className="flex size-10 shrink-0 items-center justify-center sm:size-11">
        <IconComponent
          aria-hidden="true"
          className="size-7 text-primary"
          fill="currentColor"
          stroke="white"
          strokeWidth={1.75}
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-xs font-semibold leading-snug text-foreground sm:text-sm">
          {item.title}
        </h3>
        <p className="truncate text-[11px] leading-4 text-muted-foreground sm:hidden">
          {item.mobileDesc}
        </p>
        <p className="hidden truncate text-sm leading-5 text-muted-foreground sm:block">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export function ValuePropsStrip() {
  return (
    <section className="py-0 sm:py-6" aria-label="Store benefits">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div
          className="feature-marquee min-w-0 overflow-hidden sm:hidden"
          role="region"
          aria-label="Store benefits. Scroll to explore all five."
          tabIndex={0}
        >
          <div className="feature-marquee-track">
            {[0, 1].map((sequence) => (
              <div
                key={sequence}
                className="feature-marquee-group flex shrink-0 gap-2 pr-2"
                aria-hidden={sequence === 1}
              >
                {props.map((item) => <BenefitCard key={`${sequence}-${item.title}`} item={item} />)}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden gap-3 sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {props.map((item) => <BenefitCard key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  );
}

