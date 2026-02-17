"use client";

interface FAQItem {
  question: string;
  answer: string;
}

interface SchemaMarkupProps {
  type: "keyword" | "area";
  keyword?: string;
  area?: string;
  title: string;
  description: string;
  faqItems?: FAQItem[];
}

export function SchemaMarkup({ type, keyword, area, title, description, faqItems }: SchemaMarkupProps) {
  const baseUrl = "https://skinhairvadodara.in";

  // LocalBusiness / MedicalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Prime One Hair & Skin Clinic",
    image: `${baseUrl}/gallery/dermatology/03.webp`,
    url: baseUrl,
    telephone: "+916353583148",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vadodara",
      addressLocality: area ? area.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) : "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.3072,
      longitude: 73.1812,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "5000",
      bestRating: "5",
    },
    medicalSpecialty: "Dermatology",
    availableService: keyword
      ? {
          "@type": "MedicalProcedure",
          name: keyword.replace(/-in-vadodara$/, "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
          description: description,
        }
      : undefined,
  };

  // MedicalWebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": type === "keyword" ? "MedicalWebPage" : "WebPage",
    name: title,
    description: description,
    url: `${baseUrl}/${keyword || area}`,
    publisher: {
      "@type": "Organization",
      name: "Prime One Hair & Skin Clinic",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/icon.svg`,
      },
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  // FAQ Schema
  const faqSchema = faqItems && faqItems.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
