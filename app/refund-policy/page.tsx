import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'Cancellation and refund information for CheckMyVan Digital PDF Report orders.',
  alternates: { canonical: '/refund-policy' },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <article className="pt-32 pb-24 bg-white">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-display text-navy mb-4">Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: 16 October 2026</p>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">1. Cancellation by You</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us as soon as possible if you want to cancel an order before your report is delivered.</li>
              <li>If your Digital PDF Report has already been delivered, the service is considered fulfilled. This does not affect any rights you have under applicable consumer law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">2. Cancellation by Us</h2>
            <p>
              If we are unable to deliver your Digital PDF Report, contact us at
              info@checkmyvan.com so we can resolve the order with you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">3. Delivered Reports</h2>
            <p>
              Once the Digital PDF Report has been delivered, the service is considered
              fulfilled, subject to your statutory consumer rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">4. How to Request a Refund</h2>
            <p>
              To request a refund, contact us at info@checkmyvan.com or call
              020 7946 0958 during business hours. Approved refunds are processed within 5–7
              working days to the original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-navy mb-3">5. Add-On Services</h2>
            <p>
              Digital PDF Report add-ons follow the same cancellation terms as the
              main report order.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
