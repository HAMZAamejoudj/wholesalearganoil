import {
  DEFAULT_OG_IMAGE,
  EMAIL,
  LOGO_URL,
  ORGANIZATION_ID,
  PHONE_E164,
  SITE_ADDRESS,
  SITE_GEO,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "./site";

type SchemaObject = Record<string, unknown>;

export function organizationSchema(): SchemaObject {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      caption: SITE_NAME,
    },
    image: DEFAULT_OG_IMAGE,
    email: EMAIL,
    telephone: PHONE_E164,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_ADDRESS.addressLocality,
      addressRegion: SITE_ADDRESS.addressRegion,
      addressCountry: SITE_ADDRESS.addressCountry,
    },
    sameAs: [
      "https://www.tiktok.com/@moroccanbeauty_shop",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        email: EMAIL,
        contactType: "sales",
        areaServed: "Worldwide",
        availableLanguage: ["English", "French", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        contactType: "customer support",
        areaServed: "Worldwide",
        availableLanguage: ["English", "French", "Arabic"],
      },
    ],
  };
}

export function websiteSchema(): SchemaObject {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Argan oil wholesale from Morocco. Bulk cosmetic and food-grade oil, private label, ECOCERT and USDA Organic, shipped worldwide from Agadir.",
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/faq?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema(): SchemaObject {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: LOGO_URL,
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_ADDRESS.addressLocality,
      addressRegion: SITE_ADDRESS.addressRegion,
      addressCountry: SITE_ADDRESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    parentOrganization: { "@id": ORGANIZATION_ID },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): SchemaObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
  inLanguage = "en-US",
}: {
  name: string;
  description: string;
  path: string;
  inLanguage?: string;
}): SchemaObject {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage,
  };
}

export function productSchema(product?: {
  name: string;
  description: string;
  path: string;
  image: string;
}): SchemaObject {
  if (product) {
    return {
      "@type": "Product",
      "@id": `${SITE_URL}${product.path}#product`,
      name: product.name,
      image: [`${SITE_URL}${product.image}`],
      description: product.description,
      brand: {
        "@type": "Brand",
        name: SITE_NAME,
      },
      manufacturer: { "@id": ORGANIZATION_ID },
      category: "Organic Argan Oil",
      offers: {
        "@type": "Offer",
        url: `${SITE_URL}${product.path}`,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: { "@id": ORGANIZATION_ID },
      },
    };
  }

  return {
    "@type": "Product",
    "@id": `${SITE_URL}/#product`,
    name: "Argan Oil Wholesale – Bulk & Private Label from Morocco",
    image: [
      `${SITE_URL}/assets/img/cosmetic-argan-bottles.jpg`,
      `${SITE_URL}/assets/img/argan-oil-bulk-supply.jpg`,
      `${SITE_URL}/assets/img/bulk-drums-morocco.jpg`,
    ],
    description:
      "100% pure cold-pressed Moroccan argan oil wholesale. Cosmetic and food grade, ECOCERT and USDA Organic, bulk drums and private label from Agadir.",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    manufacturer: { "@id": ORGANIZATION_ID },
    category: "Organic Argan Oil",
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/contact`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: { "@id": ORGANIZATION_ID },
    },
  };
}

export function productListSchema(
  products: { name: string; path: string }[]
): SchemaObject {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/products#itemlist`,
    name: "Bulk Argan Oil Wholesale Products",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${SITE_URL}${product.path}`,
    })),
  };
}

export function wholesaleServiceSchema(): SchemaObject {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/#wholesale-service`,
    name: "Argan Oil Wholesale Export from Morocco",
    serviceType: "Bulk argan oil wholesale, private label, and global export",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "Worldwide",
    description:
      "Argan oil wholesale from Agadir: bulk drums, private label, ECOCERT, USDA Organic, COA, SDS/MSDS, and worldwide shipping.",
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/contact`,
      availability: "https://schema.org/InStock",
    },
  };
}

export function privateLabelServiceSchema(): SchemaObject {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/private-label#service`,
    name: "Private Label Argan Oil Wholesale Manufacturing",
    serviceType: "White label and private label argan oil production",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "Worldwide",
    description:
      "Launch your argan oil brand with custom labels, bottles, formulations, and export-ready documentation from Morocco.",
    url: `${SITE_URL}/private-label`,
  };
}

export function contactPageSchema(): SchemaObject {
  return {
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#contactpage`,
    url: `${SITE_URL}/contact`,
    name: "Buy Argan Oil Wholesale | Request a Quote",
    description:
      "Request argan oil wholesale pricing, bulk drums, private label catalogs, samples, COA and SDS from Agadir, Morocco.",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": ORGANIZATION_ID },
  };
}

export function faqPageSchema(
  entities: { question: string; answer: string }[],
  path = "/faq"
): SchemaObject {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faqpage`,
    url: `${SITE_URL}${path}`,
    mainEntity: entities.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): SchemaObject {
  return {
    "@type": "Article",
    "@id": `${SITE_URL}${path}#article`,
    headline: title,
    description,
    image: image ?? DEFAULT_OG_IMAGE,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: `${SITE_URL}${path}`,
    inLanguage: "en-US",
  };
}

export function buildSchemaGraph(items: SchemaObject[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@graph": items,
  };
}

export const FAQ_SCHEMA_ENTITIES = [
  {
    question: "Is your Moroccan argan oil 100% pure and unblended?",
    answer:
      "Yes. Every drop of argan oil we supply is 100% pure, single-origin, and unblended. We do not dilute our products with cheaper seed or vegetable oils. Our argan oil is cold-pressed directly from argan kernels in southwestern Morocco.",
  },
  {
    question: "Is your argan oil certified organic (USDA, ECOCERT)?",
    answer:
      "Yes. Our argan oil is certified organic by ECOCERT and meets USDA Organic and European organic regulations. We provide batch-specific organic certificates and certificates of analysis with every wholesale shipment.",
  },
  {
    question: "What is the difference between cosmetic and culinary argan oil?",
    answer:
      "Cosmetic argan oil is pressed from raw, unroasted kernels for hair, skin, and nail products. Culinary argan oil is pressed from lightly roasted kernels for cooking, salads, and dipping, with a richer nutty flavor.",
  },
  {
    question: "How is your bulk argan oil extracted and processed?",
    answer:
      "Our argan oil is mechanically cold-pressed without chemicals or excessive heat. After pressing, the oil is naturally settled and filtered to preserve antioxidants, vitamin E, and natural fatty acids.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for private label argan oil?",
    answer:
      "Private label MOQs start as low as 50 to 100 units depending on bottle size and formula selection. We support startups and established brands with flexible production runs.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for raw bulk argan oil?",
    answer:
      "Wholesale bulk argan oil MOQ starts at 5 liters for pure argan oil shipments. Larger volumes are available in drums and IBC containers for distributors and manufacturers.",
  },
  {
    question: "What compliance documents and lab certificates do you provide?",
    answer:
      "We provide Certificate of Analysis (COA), Safety Data Sheet (SDS), product specification sheets, organic certificates, and certificate of origin with wholesale shipments.",
  },
  {
    question: "How do you ship wholesale argan oil worldwide from Morocco?",
    answer:
      "We ship worldwide from Agadir and Casablanca via DHL, FedEx, Chronopost for express delivery, air freight for medium orders, and ocean cargo (LCL/FCL) for high-volume bulk shipments.",
  },
  {
    question: "What payment terms do you support for wholesale transactions?",
    answer:
      "We support bank transfer (T/T), PayPal for approved accounts, and staged payment terms for repeat B2B clients depending on order volume and shipping destination.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for wholesale argan oil?",
    answer:
      "Our wholesale argan oil minimum order quantity starts at 5 liters for pure bulk shipments. Private label MOQs are flexible, starting at 50 to 100 units depending on packaging.",
  },
];
