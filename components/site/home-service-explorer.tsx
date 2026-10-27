'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Battery,
  Car,
  Cpu,
  Disc,
  Gauge,
  Home,
  ArrowRight,
  Wrench,
} from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const inspectionAreas = [
  {
    icon: Wrench,
    label: 'Engine & Drivetrain',
    count: 45,
    image:
      'https://images.pexels.com/photos/8985452/pexels-photo-8985452.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Engine and drivetrain components being checked during a van inspection',
    title: 'Engine & Drivetrain Check',
    description:
      'We examine the engine compression, timing belt, transmission operation, differential, driveshaft, mounts, and all visible seals and gaskets for leaks or wear.',
  },
  {
    icon: Disc,
    label: 'Brakes & Suspension',
    count: 38,
    image:
      'https://images.pexels.com/photos/8986177/pexels-photo-8986177.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Brake pads and suspension parts examined during a safety check',
    title: 'Brakes & Suspension Check',
    description:
      'Brake pad thickness, disc condition, caliper operation, brake lines, shock absorbers, struts, springs, bushings, ball joints, tie rods, and wheel bearings are all checked.',
  },
  {
    icon: Cpu,
    label: 'Electrical & Electronics',
    count: 32,
    image:
      'https://images.pexels.com/photos/6870309/pexels-photo-6870309.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Diagnostic scanner reading van computer modules',
    title: 'Electrical & Electronics Check',
    description:
      'Full OBD-II scan, alternator output, starter function, wiring harness, fuse box, all sensors, infotainment system, and dashboard warning lights are diagnosed.',
  },
  {
    icon: Car,
    label: 'Exterior & Body',
    count: 35,
    image:
      'https://images.pexels.com/photos/594384/van-vw-travel-trip-594384.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Van exterior and bodywork condition assessed visually',
    title: 'Exterior & Body Check',
    description:
      'Body panels, paint condition, rust check, glass integrity, door operation, trim, seals, undercarriage, frame integrity, and accident damage indicators are inspected.',
  },
  {
    icon: Gauge,
    label: 'Fluids & Filters',
    count: 25,
    image:
      'https://images.pexels.com/photos/4116207/pexels-photo-4116207.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Engine oil and fluid levels being checked in a van',
    title: 'Fluids & Filters Check',
    description:
      'Engine oil, transmission fluid, coolant, brake fluid, power steering fluid, differential fluid, air filter, cabin filter, and fuel filter condition are assessed.',
  },
  {
    icon: Battery,
    label: 'Battery & Charging',
    count: 15,
    image:
      'https://images.pexels.com/photos/38869179/pexels-photo-38869179.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Battery and charging system being tested on an electric van',
    title: 'Battery & Charging Check',
    description:
      'Battery voltage, cold cranking amps, charging rate, parasitic draw, terminals, cables, and alternator health are tested with professional equipment.',
  },
  {
    icon: Home,
    label: 'Habitation & Living Area',
    count: 30,
    image:
      'https://images.pexels.com/photos/9354626/pexels-photo-9354626.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Motorhome habitation area being inspected for safety',
    title: 'Habitation & Living Area Check',
    description:
      'For motorhomes: gas systems, leisure electrics, water systems, fire safety, ventilation, damp detection, and structural integrity of the living area.',
  },
];

export function HomeServiceExplorer() {
  const [activeService, setActiveService] = useState(0);
  const activeArea = inspectionAreas[activeService];

  return (
    <section className="py-14 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Check"
          title="Explore Our 200+ Point Check"
          description="Explore inspection areas for motorised vehicles, plus the habitation systems checked in motorhomes."
          className="[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-2xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm [&>p]:!mt-2 sm:[&>p]:!mt-4"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 mt-10 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 sm:gap-2">
            {inspectionAreas.map((area, index) => {
              const AreaIcon = area.icon;

              return (
                <button
                  key={area.label}
                  onClick={() => setActiveService(index)}
                  className={cn(
                    'w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl text-left transition-all duration-300',
                    activeService === index
                      ? 'bg-white shadow-lg shadow-primary/10 border-l-4 border-primary'
                      : 'hover:bg-white/60'
                  )}
                >
                  <div
                    className={cn(
                      'flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg transition-colors',
                      activeService === index
                        ? 'bg-primary text-white'
                        : 'bg-primary/10 text-primary'
                    )}
                  >
                    <AreaIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-navy text-xs sm:text-sm">
                      {area.label}
                    </div>
                  </div>
                  <Badge
                    className="px-2 py-0.5 text-[10px] sm:px-2.5 sm:py-0.5 sm:text-xs"
                    variant={activeService === index ? 'default' : 'secondary'}
                  >
                    {area.count} pts
                  </Badge>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[320px] sm:min-h-[400px] bg-navy">
                <Image
                  src={activeArea.image}
                  alt={activeArea.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
                <div className="relative z-10 p-5 sm:p-8 lg:p-10 flex flex-col justify-end h-full">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white mb-3 sm:mb-4">
                    {activeArea.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6">
                    {activeArea.description}
                  </p>
                  <Link href="/booking">
                    <Button className="w-fit bg-primary hover:bg-primary/90">
                      Book This Check <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
