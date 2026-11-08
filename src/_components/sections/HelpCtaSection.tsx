import { MessageCircle, Phone, Headphones } from "lucide-react";
import { Container } from "@/_components/layout/Container";
import { siteConfig } from "@/_data/siteConfig";

export function HelpCtaSection() {
  return (
    <section aria-labelledby="help-cta-heading" className="py-6 sm:py-10">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-secondary via-secondary to-slate-950 p-6 sm:p-10 text-white shadow-xl">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/20 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-20 -bottom-20 size-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex lg:hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-sky-300 backdrop-blur-xs mb-3">
                <Headphones className="size-3.5" />
                <span>Expert Support</span>
              </div>
              <h2 id="help-cta-heading" className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Need help choosing a gadget or repair?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                Talk directly with Muhit Telecom in Hili. We can help with product questions, stock availability, delivery, and device repair enquiries.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="size-4.5" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneIntl}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="size-4.5 text-sky-300" aria-hidden="true" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

