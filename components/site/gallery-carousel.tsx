'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/8985452/pexels-photo-8985452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    title: 'Van Engine Bay Check',
  },
  {
    src: 'https://images.pexels.com/photos/594384/van-vw-travel-trip-594384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    title: 'Campervan Exterior Check',
  },
  {
    src: 'https://images.pexels.com/photos/9354626/pexels-photo-9354626.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    title: 'Motorhome Habitation Check',
  },
  {
    src: 'https://images.pexels.com/photos/8986177/pexels-photo-8986177.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    title: 'Van Bodywork Check',
  },
  {
    src: 'https://images.pexels.com/photos/6870309/pexels-photo-6870309.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    title: 'Van Diagnostics',
  },
  {
    src: 'https://images.pexels.com/photos/4620555/pexels-photo-4620555.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    title: 'Commercial Van Fleet Check',
  },
];

export function GalleryCarousel() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCount = 3;

  const scrollNext = () => {
    setScrollIndex((prev) =>
      Math.min(prev + 1, galleryImages.length - visibleCount)
    );
  };

  const scrollPrev = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-14 sm:py-24 bg-navy overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <SectionHeading
            eyebrow="Gallery"
            title="Inside Our Inspection Process"
            description="A look at inspection areas across vans, campervans, and motorhomes."
            align="left"
            light
            className="[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-2xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm [&>p]:!mt-2 sm:[&>p]:!mt-4"
          />
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={scrollIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors disabled:opacity-30"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={scrollIndex >= galleryImages.length - visibleCount}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors disabled:opacity-30"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out px-4 sm:px-6 lg:px-8"
          style={{
            transform: `translateX(-${scrollIndex * (100 / visibleCount)}%)`,
          }}
        >
          {galleryImages.map((img) => (
            <div
              key={img.title}
              className="relative shrink-0 w-[88%] sm:w-1/2 lg:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-medium">
                  <Camera className="h-4 w-4 text-primary" />
                  {img.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
