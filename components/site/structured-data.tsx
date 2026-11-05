export function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CheckMyVan',
    description:
      'Digital PDF Reports for vans, campervans, and motorhomes. No physical vehicle inspection or testing is included.',
    url: 'https://checkmyvan.com',
    email: 'info@checkmyvan.com',
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of vehicles are covered by your reports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our Digital PDF Reports cover vans, campervans, and motorhomes, with report topics tailored to each vehicle type.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a Digital PDF Report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Report topics vary by package and vehicle type. Each order is for a digital report only; it does not include a physical inspection or technician visit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you physically inspect vehicles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. CheckMyVan provides Digital PDF Reports only. We do not visit, test, or physically inspect vehicles.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I order a report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose a report package, enter your contact and vehicle details, and complete your order online. You will receive an order confirmation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I receive an order confirmation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Once you have placed your order, you will receive a confirmation message confirming that your order has been received.',
        },
      },
      {
        '@type': 'Question',
        name: 'How soon will I receive my Digital PDF Report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your Digital PDF Report is sent within 1 hour of placing your order.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the Digital PDF Report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The report contains digital information for the package and vehicle type you select. It is not a physical assessment of the vehicle or a guarantee of its current condition.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the Digital PDF Report when making a decision?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The report can provide information to consider during your decision-making. It is not a substitute for an independent physical inspection before purchase.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which report is right for my vehicle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose the report package that best matches your vehicle type and the information you need.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a habitation report a physical check?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The motorhome habitation option is a Digital PDF Report about living-area topics. It does not include testing or an in-person assessment.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
