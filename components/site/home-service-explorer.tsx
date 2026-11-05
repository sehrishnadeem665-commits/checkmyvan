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

const reportTopics = [
  {
    icon: Wrench,
    label: 'Engine & Drivetrain',
    count: 45,
    image:
      'https://images.pexels.com/photos/7476268/pexels-photo-7476268.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Campervan on a scenic road',
    title: 'Engine & Drivetrain Report',
    description:
      'Digital report topics include engine, transmission, drivetrain, and common wear information.',
  },
  {
    icon: Disc,
    label: 'Brakes & Suspension',
    count: 38,
    image:
      'https://images.pexels.com/photos/594384/van-vw-travel-trip.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Van travelling on a road',
    title: 'Brakes & Suspension Report',
    description:
      'Review information about brakes, tyres, suspension, and other road-safety topics.',
  },
  {
    icon: Cpu,
    label: 'Electrical & Electronics',
    count: 32,
    image:
      'https://images.pexels.com/photos/2580312/pexels-photo-2580312.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Campervan parked outdoors',
    title: 'Electrical & Electronics Report',
    description:
      'Explore digital information about vehicle electronics, diagnostic codes, and common system concerns.',
  },
  {
    icon: Car,
    label: 'Exterior & Body',
    count: 35,
    image:
      'https://images.pexels.com/photos/23153101/pexels-photo-23153101.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Van parked beside a scenic landscape',
    title: 'Exterior & Body Report',
    description:
      'The report covers exterior and bodywork topics to help you know what to look for.',
  },
  {
    icon: Gauge,
    label: 'Fluids & Filters',
    count: 25,
    image:
      'https://images.pexels.com/photos/2580312/pexels-photo-2580312.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Campervan parked for a journey',
    title: 'Fluids & Filters Report',
    description:
      'Review information about common vehicle fluids, filters, and related maintenance topics.',
  },
  {
    icon: Battery,
    label: 'Battery & Charging',
    count: 15,
    image:
      'https://images.pexels.com/photos/594384/van-vw-travel-trip.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Van on the road',
    title: 'Battery & Charging Report',
    description:
      'Digital report topics cover battery health, charging systems, and related vehicle information.',
  },
  {
    icon: Home,
    label: 'Habitation & Living Area',
    count: 30,
    image:
      'https://images.pexels.com/photos/23153101/pexels-photo-23153101.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
    alt: 'Motorhome parked in a scenic setting',
    title: 'Habitation & Living Area Report',
    description:
      'For motorhomes, explore information about gas, electrics, water, damp, and living-area safety topics.',
  },
];

export function HomeServiceExplorer() {
  const [activeService, setActiveService] = useState(0);
  const activeArea = reportTopics[activeService];

  return (
    <section className="py-14 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Digital Report Topics"
          title="Explore What Our Reports Cover"
          description="Our Digital PDF Reports cover common vehicle and habitation topics. They do not include an in-person inspection or testing."
          className="[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-2xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm [&>p]:!mt-2 sm:[&>p]:!mt-4"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 mt-10 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 sm:gap-2">
            {reportTopics.map((area, index) => {
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
                    {area.count} topics
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
                      View Report Options <ArrowRight className="ml-2 h-4 w-4" />
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
