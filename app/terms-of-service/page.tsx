import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms and conditions for CheckMyVan Digital PDF Reports for vans, campervans, and motorhomes.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <article className="pt-32 pb-24 bg-white">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-display text-navy mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: 16 October 2026</p>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">1. About These Terms</h2>
            <p>
              These terms govern your use of CheckMyVan&apos;s website and Digital PDF
              Report products for vans, campervans, and motorhomes. By ordering or
              using our website, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">2. Our Services</h2>
            <p>
              CheckMyVan provides Digital PDF Reports covering topics for vans,
              campervans, and motorhomes. Our products are digital reports only and
              do not include a physical inspection, technician visit, testing, or
              diagnostic scan of a vehicle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">3. What We Are Not</h2>
            <p>
              CheckMyVan is not a vehicle dealer, repair shop, or warranty provider.
              Our reports are informational and do not assess a vehicle&apos;s actual
              or current condition, performance, or roadworthiness. They are not a
              substitute for an independent physical inspection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">4. Bookings and Payment</h2>
            <p>
              When you order a report, you agree to pay the listed price for the selected
              package and any digital add-ons. Payment is collected during checkout.
              Prices are in GBP and include applicable VAT.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">5. Cancellations and Refunds</h2>
            <p>
              Cancellation and refund requests for Digital PDF Report orders are
              handled in accordance with our Refund Policy and any terms shown at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">6. Vehicle Information</h2>
            <p>
              You are responsible for providing accurate vehicle details required
              for your report order. CheckMyVan does not access, test, or physically
              inspect the vehicle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">7. Digital PDF Reports</h2>
            <p>
              Digital PDF Reports provide information on the topics described for
              the selected product. They are not based on a physical examination of
              the vehicle and do not constitute a guarantee, warranty, or certification
              of its condition.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">8. Liability</h2>
            <p>
              CheckMyVan is not liable for decisions you make based on report
              information, including purchase, negotiation, or repair decisions.
              Nothing in these terms limits liability where it cannot legally be
              excluded. Otherwise, our liability is limited to the fee paid for the
              relevant Digital PDF Report.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">9. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design, is the
              property of CheckMyVan. You may not reproduce or distribute our content without
              written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
