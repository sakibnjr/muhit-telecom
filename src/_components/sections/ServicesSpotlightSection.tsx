import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/_data/services';
import { ServiceCard } from '@/_components/cards/ServiceCard';
import { Container } from '@/_components/layout/Container';
import { Button } from '@/_ui/button';
import { Wrench, CheckCircle, ArrowRight } from 'lucide-react';

export function ServicesSpotlightSection() {
  const featuredServices = servicesData.slice(0, 3);

  return (
    <section className="py-14 md:py-20 bg-background relative overflow-hidden">
      <Container>
        {/* Banner callout */}
        <div className="mb-12 rounded-xl bg-secondary text-secondary-foreground p-6 sm:p-8 md:p-10 border border-border/20 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                <Wrench className="w-3.5 h-3.5" />
                <span>Modern Mobile & PC Electronics Lab</span>
              </span>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-snug">
                Facing Smartphone Hardware or Software Issues? <br />
                <span className="text-accent">Get Certified Repair at Hili&apos;s Most Trusted Lab</span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
                Cracked OLED display, battery health drain, SIM carrier lock, or liquid-damaged dead motherboards—our experienced engineers diagnose and fix devices using precision stereo microscopes and thermal cameras.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict No-Fix No-Fee Policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30-Minute On-Spot Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Up to 6 Months Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Authentic Grade Parts</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Button variant="accent" size="md">
                  <Link href="/services#booking-form" className="flex items-center gap-2">
                    <span>Get Repair Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="md" className="border-gray-700 text-white hover:bg-gray-800">
                  <Link href="/services">View All 8 Services</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-4/3 rounded-lg overflow-hidden border border-gray-800 shadow-md">
              <Image
                src="/images/services/technician-repair.avif"
                alt="Muhit Telecom Expert Bangladeshi Mobile Repair Technician"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Featured Service Cards */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Most Requested Repair Services
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Top 3 solutions booked by customers daily.
            </p>
          </div>
          <Link
            href="/services"
            className="text-xs sm:text-sm font-bold text-primary hover:text-primary/80 inline-flex items-center gap-1"
          >
            <span>All Repair Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
