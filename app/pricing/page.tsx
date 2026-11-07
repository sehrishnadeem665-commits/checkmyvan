'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  Star,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { TiltCard } from '@/components/site/tilt-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';


const pricingPlans = [
  {
    name: 'Basic',
    price: 40,
    period: 'per report',
    description: 'Essential Digital Vehicle Report',
    icon: ShieldCheck,
    badge: 'Best for budget',
    features: [
      'Vehicle identification details',
      'Available vehicle specifications',
      'MOT history information',
      'Mileage records where available',
      'Tax and road status information',
      'Basic Digital PDF Report',
      '1 vehicle per order',
      'Digital report delivery',
    ],
    excluded: [],
    cta: 'Purchase Basic',
    popular: false,
  },
  {
    name: 'Standard',
    price: 50,
    period: 'per report',
    description: 'Detailed Digital Vehicle Report',
    icon: Sparkles,
    badge: 'Most popular',
    features: [
      'Everything in Basic',
      'Available vehicle history records',
      'Outstanding finance information (where available)',
      'Write-off status information (where available)',
      'Stolen vehicle status (where available)',
      'Mileage discrepancy information',
      'MOT history and previous test results',
      'Detailed Digital PDF Report',
      'Digital report delivery',
    ],
    excluded: [],
    cta: 'Purchase Standard',
    popular: true,
  },
  {
    name: 'Premium',
    price: 60,
    period: 'per report',
    description: 'Comprehensive Digital Vehicle Report',
    icon: Award,
    badge: 'Complete package',
    features: [
      'Everything in Standard',
      'Extended vehicle information',
      'Detailed vehicle specification data',
      'Available diagnostic data analysis',
      'Additional vehicle status information',
      'Market value information (where available)',
      'Import and export information (where available)',
      'EV & hybrid vehicle information (where available)',
      'Comprehensive Digital PDF Report',
      'Priority report processing',
    ],
    excluded: [],
    cta: 'Purchase Premium',
    popular: false,
  },
];


const addOns = [
  { name: 'EV Van Battery Health Digital PDF Report', price: '£49' },
  { name: 'Motorhome Habitation Digital PDF Report', price: '£119' },
  { name: 'Pre-Purchase Market Value Report', price: '£29' },
  { name: 'Extended Warranty Information Report', price: '£59' },
];

const comparison = [
  { feature: 'Report Scope', basic: 'Safety topics', standard: '150+ topics', premium: '200+ topics' },
  { feature: 'Safety-topic information', basic: true, standard: true, premium: true },
  { feature: 'Brake and tyre information', basic: true, standard: true, premium: true },
  { feature: 'Lights and signals information', basic: true, standard: true, premium: true },
  { feature: 'OBD-II information', basic: false, standard: true, premium: true },
  { feature: 'Digital PDF Report', basic: 'Basic, within 1 hour', standard: 'Detailed, within 1 hour', premium: 'Within 1 hour' },
  { feature: 'Repair cost information', basic: false, standard: true, premium: true },
  { feature: 'Market value information', basic: false, standard: true, premium: true },
  { feature: 'Vehicles per Order', basic: '1 vehicle', standard: false, premium: false },
  { feature: 'Engine and mechanical information', basic: false, standard: false, premium: true },
  { feature: 'Fluid and filter information', basic: false, standard: false, premium: true },
  { feature: 'Battery and charging-system information', basic: false, standard: false, premium: true },
  { feature: 'Motorhome habitation report', basic: '£119 add-on', standard: '£119 add-on', premium: '£119 add-on' },
  { feature: 'Phone Consultation', basic: false, standard: false, premium: true },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/23153101/pexels-photo-23153101.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&q=90&dpr=2"
            alt="Motorhome in a scenic setting"
            fill
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/60 to-navy/35" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge className="mb-3 sm:mb-4 bg-primary/20 text-primary border-primary/30">
            Transparent Pricing
          </Badge>
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-white mb-3 sm:mb-6 text-balance">
            Simple, Honest Pricing
          </h1>
          <p className="text-sm sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            No hidden fees. Choose the Digital PDF Report that fits your van,
            campervan, or motorhome. Our service is digital only and does not
            include physical inspection or testing.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <TiltCard intensity={5} className="h-full">
                  <div
                    className={cn(
                      'relative h-full rounded-2xl border-2 p-5 sm:p-8 transition-all duration-300',
                      plan.popular
                        ? 'border-primary bg-white shadow-2xl shadow-primary/20 lg:scale-105'
                        : 'border-border bg-white hover:shadow-xl hover:shadow-primary/5'
                    )}
                  >
                    {plan.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-white border-0 shadow-lg px-3 py-1 text-[10px] sm:px-4 sm:py-1.5 sm:text-sm">
                          {plan.popular && <Star className="h-3 w-3 mr-1 fill-current" />}
                          {plan.badge}
                        </Badge>
                      </div>
                    )}

                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                      <div
                        className={cn(
                          'flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl',
                          plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                        )}
                      >
                        <plan.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-navy">{plan.name}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mb-4 sm:mb-6">
                      <span className="text-4xl sm:text-5xl font-bold font-display text-navy">
                        £{plan.price}
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground ml-2">{plan.period}</span>
                    </div>

                    <Link href={`/booking?package=${plan.name.toLowerCase()}`} className="block mb-6 sm:mb-8">
                      <Button
                        className={cn(
                          'h-10 sm:h-11 w-full text-sm',
                          plan.popular
                            ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20'
                            : 'bg-navy hover:bg-navy/90'
                        )}
                      >
                        {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>

                    <div className="space-y-2 sm:space-y-3">
                      <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        What is Included
                      </div>
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-navy">
                          <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0 mt-0.5" />
                          {feature}
                        </div>
                      ))}
                      {plan.excluded.map((feature) => (
                        <div key={feature} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground line-through opacity-60">
                          <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 mt-0.5" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Add-ons */}
          <Reveal>
            <div className="max-w-4xl mx-auto mt-10 sm:mt-16 rounded-2xl bg-navy p-5 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">Optional Add-Ons</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {addOns.map((addon) => (
                  <div
                    key={addon.name}
                    className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                  >
                    <span className="text-xs sm:text-sm text-white/80">{addon.name}</span>
                    <span className="text-xs sm:text-sm font-bold text-primary">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-navy">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-4xl font-bold font-display text-white mb-3 sm:mb-4 text-balance">
            Still Not Sure Which Plan is Right?
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-8">
            Not sure which report fits your vehicle? Our team can help you choose a Digital PDF Report.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-10 sm:h-11 bg-primary hover:bg-primary/90 px-8 sm:px-10 text-sm sm:text-base">
                Talk to Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/booking">
              <Button
                size="lg"
                variant="outline"
                className="h-10 sm:h-11 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 sm:px-10 text-sm sm:text-base"
              >
                Purchase Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CompareCell({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-primary mx-auto" />;
  }
  if (value === false) {
    return <span className="text-muted-foreground/40">—</span>;
  }
  return <span className="font-medium text-navy">{value}</span>;
}
