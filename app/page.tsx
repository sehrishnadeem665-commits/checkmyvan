import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Gauge,
  Cpu,
  CheckCircle2,
  Clock,
  Award,
  Users,
  Star,
  ArrowRight,
  Search,
  Zap,
  Home as HomeIcon,
  FileText,
} from 'lucide-react';
import { HeroCarousel } from '@/components/site/hero-carousel';
import { GalleryCarousel } from '@/components/site/gallery-carousel';
import { ProcessCarousel } from '@/components/site/process-carousel';
import { SectionHeading } from '@/components/site/section-heading';
import { Counter } from '@/components/site/counter';
import { Reveal } from '@/components/site/reveal';
import { TiltCard } from '@/components/site/tilt-card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { StructuredData } from '@/components/site/structured-data';

const services = [
  {
    icon: Search,
    title: 'Purchase PDF Report',
    description:
      'A digital report to help you review key vehicle information before buying a van, campervan, or motorhome.',
    features: ['200+ report topics', 'Clear digital format', 'Market value information'],
    image:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: ShieldCheck,
    title: 'Road Safety PDF Report',
    description:
      'A digital report covering important road-safety topics for vans, campervans, and motorhomes.',
    features: ['Brake and tyre topics', 'Lights and signals', 'Safety information'],
    image:
      'https://images.pexels.com/photos/594384/van-vw-travel-trip-594384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    icon: Cpu,
    title: 'Vehicle Diagnostics PDF Report',
    description:
      'A digital report explaining diagnostic topics and common fault-code information for motorised vehicles.',
    features: ['Fault-code information', 'System overview', 'Clear explanations'],
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Gauge,
    title: 'MOT & Emissions PDF Report',
    description:
      'A digital report covering MOT and emissions information for eligible motor vehicles.',
    features: ['MOT information', 'Emissions topics', 'Digital PDF format'],
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: HomeIcon,
    title: 'Habitation PDF Report',
    description:
      'A digital report covering motorhome living-area topics such as gas, electrics, water, and damp.',
    features: ['Gas and electrics', 'Damp information', 'Water systems'],
    image:
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Zap,
    title: 'EV & Hybrid PDF Report',
    description:
      'A digital report covering battery-health and charging-system information for electric and hybrid vehicles.',
    features: ['Battery information', 'Charging systems', 'Inverter overview'],
    image:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
  },
];

const stats = [
  { icon: Users, value: 3, suffix: '', label: 'Vehicle Types' },
  { icon: Award, value: 4, suffix: '', label: 'Report Categories' },
  { icon: Star, value: 6, suffix: '', label: 'Digital Report Types' },
  { icon: ShieldCheck, value: 200, suffix: '+', label: 'Report Topics' },
];

const reportBenefits = [
  {
    icon: Clock,
    title: 'Delivered by Email',
    description: 'Your Digital PDF Report is sent within 1 hour of placing your order.',
  },
  {
    icon: FileText,
    title: 'Easy to Access',
    description: 'Keep your report in digital format and review it when convenient.',
  },
  {
    icon: ShieldCheck,
    title: 'Digital Report Only',
    description: 'No physical inspection, vehicle testing, or technician visit is included.',
  },
];

const faqs = [
  {
    question: 'What types of vehicles are covered by your reports?',
    answer:
      'Our Digital PDF Reports cover vans, campervans, and motorhomes, with report topics tailored to each vehicle type.',
  },
  {
    question: 'What is included in a Digital PDF Report?',
    answer:
      'Report topics vary by package and vehicle type. Each order is for a digital report only; it does not include a physical inspection or technician visit.',
  },
  {
    question: 'Do you physically inspect vehicles?',
    answer:
      'No. CheckMyVan provides Digital PDF Reports only. We do not visit, test, or physically inspect vehicles.',
  },
  {
    question: 'How do I order a report?',
    answer:
      'Choose a report package, enter your contact and vehicle details, and complete your order online. You will receive an order confirmation.',
  },
  {
    question: 'Will I receive an order confirmation?',
    answer:
      'Yes. Once you have placed your order, you will receive a confirmation message confirming that your order has been received.',
  },
  {
    question: 'How soon will I receive my Digital PDF Report?',
    answer:
      'Your Digital PDF Report is sent within 1 hour of placing your order.',
  },
  {
    question: 'What is included in the Digital PDF Report?',
    answer:
      'The report contains digital information for the package and vehicle type you select. It is not a physical assessment of the vehicle or a guarantee of its current condition.',
  },
  {
    question: 'Can I use the Digital PDF Report when making a decision?',
    answer:
      'The report can provide information to consider during your decision-making. It is not a substitute for an independent physical inspection before purchase.',
  },
  {
    question: 'Which report is right for my vehicle?',
    answer:
      'Choose the report package that best matches your vehicle type and the information you need.',
  },
  {
    question: 'Is a habitation report a physical check?',
    answer:
      'No. The motorhome habitation option is a Digital PDF Report about living-area topics. It does not include testing or an in-person assessment.',
  },
];

const homeSectionHeading =
  '[&>span]:!text-xs [&>span]:!mb-2 [&>h2]:!text-2xl sm:[&>h2]:!text-4xl lg:[&>h2]:!text-5xl [&>p]:!text-sm sm:[&>p]:!text-lg [&>p]:!mt-2 sm:[&>p]:!mt-4';

export default function Home() {
  return (
    <>
      <StructuredData />
      <HeroCarousel />

      {/* Trust Bar */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 sm:gap-8">
            {[
              { icon: ShieldCheck, title: 'Digital Report Types', subtitle: 'Four report categories' },
              { icon: Clock, title: 'Digital PDF Report', subtitle: 'Delivered by email' },
              { icon: ShieldCheck, title: '200+ Topics', subtitle: 'Detailed report coverage' },
              { icon: Search, title: 'Three Vehicle Types', subtitle: 'Vans to motorhomes' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-xs sm:text-sm">{item.title}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">{item.subtitle}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 sm:py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Digital PDF Reports for Vans, Campervans & Motorhomes"
            description="Choose a digital report covering pre-purchase, safety, diagnostics, or habitation topics."
            className={homeSectionHeading}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 100}>
                <TiltCard className="h-full" intensity={6}>
                  <div className="group relative h-full rounded-2xl bg-white border border-border overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300">
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary text-white shadow-lg">
                        <service.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold font-display text-navy mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-navy">
                            <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/pricing"
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary hover:gap-2 transition-all"
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="relative py-14 sm:py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
          style={{ transform: 'translate(30%, -30%)' }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="By The Numbers"
            title="The Right Digital Report for Your Vehicle"
            description="Choose a Digital PDF Report tailored to your van, campervan, or motorhome. No physical inspection is included."
            light
            className={homeSectionHeading}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-7 sm:gap-8 mt-10 sm:mt-16">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-sm mb-3 sm:mb-4">
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-1 sm:mb-2">
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-[10px] sm:text-sm text-white/60 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessCarousel />

      <GalleryCarousel />

      {/* Digital Report Benefits */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Digital by Design"
            title="A Report You Can Access Anywhere"
            description="Order online and receive a Digital PDF Report by email. No site visit is required."
            className={homeSectionHeading}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {reportBenefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-gradient-to-b from-secondary/40 to-white border border-border p-5 sm:p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 sm:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers about our Digital PDF Reports, how to order, and what is not included."
            className={homeSectionHeading}
          />

          <div className="mt-8 sm:mt-12">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-white px-4 sm:px-6 shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-navy hover:no-underline py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4 sm:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 sm:py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/7476268/pexels-photo-7476268.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt="Campervan parked in a scenic landscape under a blue sky"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge className="mb-4 sm:mb-6 bg-primary/20 text-primary border-primary/30">
            Ready When You Are
          </Badge>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-3 sm:mb-6 text-balance">
            Order a Digital PDF Vehicle Report
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Choose a report for your vehicle and receive it by email within 1 hour.
            Our service is digital only; it does not include a physical inspection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/booking">
              <Button size="lg" className="h-10 sm:h-11 bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 px-8 sm:px-10 text-sm sm:text-base">
                Purchase Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
