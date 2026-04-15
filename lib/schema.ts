import { BUSINESS, SITE_URL } from "@/lib/constants";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Laundromat",
    name: BUSINESS.name,
    description:
      "Ypsilanti's newest, cleanest laundromat offering self-service laundry, wash & fold, pick-up, drop-off, and delivery services. Brand-new high-efficiency machines, free WiFi, open until 2 AM daily.",
    url: SITE_URL,
    telephone: BUSINESS.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1510 Washtenaw Ave, Suite D",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.2462,
      longitude: -83.613,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "02:00",
      },
    ],
    priceRange: "$",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Conditioning",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Laundry Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Self-Service Laundry",
            description:
              "Brand-new high-efficiency washers and dryers for self-service use.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wash & Fold",
            description: "Professional wash, dry, and fold service.",
          },
          price: "1.50",
          priceCurrency: "USD",
          unitText: "per pound",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pick-Up Service",
            description: "Laundry pick-up from your location.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Delivery Service",
            description: "Clean laundry delivered to your door.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Comforter Cleaning",
            description: "Oversized machines for comforters and bulky items.",
          },
        },
      ],
    },
    sameAs: [BUSINESS.instagram, BUSINESS.facebook, BUSINESS.yelp],
  };
}

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "What are Laundry Pro's hours?",
    answer: "We're open 6:00 AM to 2:00 AM, 7 days a week.",
  },
  {
    question: "Where is Laundry Pro located?",
    answer:
      "1510 Washtenaw Ave, Suite D, Ypsilanti, MI 48197 — right next to Toarmina's Pizza, near the EMU campus.",
  },
  {
    question: "Does Laundry Pro offer pick-up and delivery?",
    answer:
      "Yes! We offer pick-up, drop-off, and delivery. Schedule online or call (734) 883-6714.",
  },
  {
    question: "How much does wash and fold cost?",
    answer: "Our wash and fold service is $1.50 per pound.",
  },
  {
    question: "How much do dryers cost?",
    answer:
      "Dryers start at just 25¢ per cycle — the lowest in Ypsilanti.",
  },
  {
    question: "Is there WiFi at Laundry Pro?",
    answer: "Yes, free WiFi throughout the facility.",
  },
  {
    question: "Is Laundry Pro near EMU?",
    answer:
      "Yes, we're on Washtenaw Ave, just minutes from the EMU campus.",
  },
];

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbListJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${input.slug}`,
    },
  };
}
