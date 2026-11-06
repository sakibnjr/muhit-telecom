import { Container } from '@/_components/layout/Container';
import { ShieldCheck, Users, MapPin, Wrench, ThumbsUp, Truck } from 'lucide-react';

export function WhyChooseUsSection() {
  const points = [
    {
      icon: MapPin,
      title: 'Physical Showroom in Hili',
      desc: 'Permanent store situated right on Sonarpatti Road, Hakimpur. Visit us in person and inspect any device before buying.',
    },
    {
      icon: ShieldCheck,
      title: '100% Genuine Branded Gear',
      desc: 'We source exclusively from authorized channels and verified importers. Backed by our 7-day replacement guarantee.',
    },
    {
      icon: Wrench,
      title: 'Modern Electronics Lab',
      desc: 'Equipped with precision microscopes, hot air rework stations, and authentic grade screens & high-health batteries.',
    },
    {
      icon: Truck,
      title: 'Nationwide Cash on Delivery',
      desc: 'Partnered with Steadfast and Pathao Courier for fast home delivery across all 64 districts in Bangladesh.',
    },
    {
      icon: Users,
      title: '5.1K+ Active Followers',
      desc: 'A thriving community of satisfied tech enthusiasts across North Bengal trusting our genuine recommendations.',
    },
    {
      icon: ThumbsUp,
      title: "Masum Hossain's Guarantee",
      desc: 'Proprietor Masum Hossain is directly accessible to ensure every customer receives top-tier support and honest pricing.',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-background border-t border-border/80">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-0">
            Built on Trust, Authenticity & Craftsmanship
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
            Whether shopping online or seeking dependable hardware repairs, we guarantee peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="bg-card border border-border/70 rounded-lg p-6 hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{pt.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
