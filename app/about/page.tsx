'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  Eye,
  HeartHandshake,
  Lightbulb,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Camera,
  FileText,
  Search,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { TiltCard } from '@/components/site/tilt-card';
import { Counter } from '@/components/site/counter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Digital Reports, Not Inspections',
    description:
      'CheckMyVan provides Digital PDF Reports only. No technician visit, physical inspection, or vehicle testing is included.',
  },
  {
    icon: Search,
    title: 'Vehicle-Specific Report Topics',
    description:
      'Choose report topics for vans, campervans, and motorhomes, including mechanical, safety, diagnostic, and habitation information.',
  },
  {
    icon: Camera,
    title: 'Clear Digital Information',
    description:
      'Reports present the information covered by your selected package in a clear, easy-to-read digital format.',
  },
  {
    icon: Clock,
    title: 'Clear Digital Reports',
    description:
      'Your selected Digital PDF Report is sent by email, so you can access and share it digitally.',
  },
  {
    icon: Award,
    title: 'Report Options',
    description:
      'Choose a pre-purchase, road-safety, diagnostics, or motorhome habitation report.',
  },
  {
    icon: FileText,
    title: 'Decision Support',
    description:
      'Use the report information to support your own research and decision-making. It is not a physical assessment of a vehicle.',
  },
];

const values = [
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'We make it clear what each Digital PDF Report covers and that no physical vehicle inspection is included.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We organise report topics around the different information needs of vans, campervans, and motorhomes.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer First',
    description:
      'Our Digital PDF Reports provide information you can review at your convenience. They do not replace an independent physical vehicle inspection.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We keep our digital report options relevant to changing vehicle technology and customer needs.',
  },
];

const milestones = [
  { year: 'Vans', title: 'Van Digital Reports', description: 'Digital report topics include pre-purchase, road-safety, diagnostics, and MOT or emissions information.' },
  { year: 'Campervans', title: 'Campervan Digital Reports', description: 'Choose report topics for the base vehicle and relevant fitted living-area information.' },
  { year: 'Motorhomes', title: 'Motorhome Digital Reports', description: 'Digital report options cover vehicle topics and a separate habitation report for the living area.' },
];

const mobileSectionHeading =
  '[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm [&>p]:!mt-2 sm:[&>p]:!mt-4';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/7476268/pexels-photo-7476268.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&q=90&dpr=2"
            alt="Campervan on a scenic journey"
            fill
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/60 to-navy/35" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-3 sm:mb-4 bg-primary/20 text-primary border-primary/30">
              About Us
            </Badge>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-white mb-3 sm:mb-6 text-balance">
              Driven by Transparency, Built on Trust
            </h1>
            <p className="text-sm sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              CheckMyVan provides Digital PDF Reports for vans, campervans, and
              motorhomes. Orders are digital only: we do not physically inspect,
              test, or visit vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <Reveal direction="left">
              <div className="relative">
                <TiltCard intensity={8} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/7476268/pexels-photo-7476268.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1"
                    alt="Campervan on a scenic coastline"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </TiltCard>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-2xl shadow-primary/30 hidden sm:block">
                  <div className="text-4xl font-bold font-display">
                    <Counter end={3} />
                  </div>
                  <div className="text-sm text-white/80">Vehicle Types</div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
                  Our Story
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-display leading-tight text-navy mb-3 sm:mb-6 text-balance">
                  Clear Vehicle Information, Delivered Digitally
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    CheckMyVan provides digital reports for vans, campervans, and
                    motorhomes. Choose a report based on the vehicle type and the
                    information you need.
                  </p>
                  <p>
                    Report options cover pre-purchase, safety, diagnostics, and
                    eligible MOT or emissions information.
                  </p>
                  <p>
                    Motorhome habitation reports cover information about living-area
                    systems. Reports are digital products and do not include an in-person
                    assessment or testing.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                  {[
                    { icon: ShieldCheck, label: 'Digital PDF Reports' },
                    { icon: Award, label: 'No Physical Inspection' },
                    { icon: Users, label: 'Three Vehicle Types' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-navy">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 sm:py-20 bg-navy">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-7 sm:gap-8">
            {[
              { icon: Users, value: 3, suffix: '', label: 'Vehicle Types' },
              { icon: ShieldCheck, value: 4, suffix: '', label: 'Report Categories' },
              { icon: Award, value: 200, suffix: '+', label: 'Topics in Full Reports' },
              { icon: Star, value: 1, suffix: '', label: 'Digital Report per Order' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 mb-4">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white mb-1">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[0.65rem] sm:text-xs text-white/60 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="The principles behind our Digital PDF Reports and customer support."
            className={mobileSectionHeading}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white border border-border p-6 sm:p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 mb-4 sm:mb-5">
                    <value.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-navy mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Report Options for Each Vehicle"
            description="Our digital report topics vary by vehicle type, from vehicle systems to motorhome living areas."
            className={mobileSectionHeading}
          />
          <div className="relative mt-10 sm:mt-16">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />
            <div className="space-y-6 sm:space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`relative flex items-center gap-3 sm:gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg z-10 ring-4 ring-white">
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>
                    <div className={`flex-1 pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:pl-12'}`}>
                      <div className="rounded-2xl bg-white border border-border p-3 sm:p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                        <Badge className="mb-1.5 bg-primary/10 px-2 py-0.5 text-[10px] text-primary border-0 sm:mb-2 sm:text-sm">
                          {m.year}
                        </Badge>
                        <h3 className="mb-1.5 text-sm font-bold font-display leading-snug text-navy sm:mb-2 sm:text-lg">{m.title}</h3>
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{m.description}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block flex-1" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 sm:py-24 bg-navy">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why CheckMyVan"
            title="Why Customers Choose Us"
            description="Clear Digital PDF Reports for your vehicle. We do not provide physical inspections or testing."
            light
            className={mobileSectionHeading}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-navy-light border border-white/10 p-6 sm:p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary/20 mb-4 sm:mb-5">
                    <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-primary">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-4xl font-bold font-display leading-tight text-white mb-3 sm:mb-4 text-balance">
            Experience the CheckMyVan Difference
          </h2>
          <p className="text-sm sm:text-lg text-white/80 mb-5 sm:mb-8">
            Get a clearer picture of your van, campervan, or motorhome before making your next decision.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl px-10">
              Book Your Check <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
