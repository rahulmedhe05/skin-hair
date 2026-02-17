import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Glutathione Treatment Vadodara ₹3,000 | Skin Glow | Book",
  description: "✨ Glutathione treatment in Vadodara from ₹3,000 ✓ IV & oral options ✓ Skin brightening ✓ Antioxidant boost ✓ Full body glow. Medically supervised. Book!",
  keywords: "glutathione treatment vadodara, glutathione injection vadodara, glutathione cost vadodara, skin glow treatment",
};

export default function GlutathioneTreatmentPage() {
  const content = {
    heroTitle: "Glutathione Treatment in Vadodara",
    heroSubtitle: "The Body's Master Antioxidant for Skin",
    
    introContent: `Glutathione is your body's most important antioxidant — produced naturally, it protects cells from damage and plays a role in skin pigmentation. Supplementing glutathione has become popular for its skin brightening effects.

The science: glutathione inhibits tyrosinase, the enzyme that produces melanin. Higher glutathione levels can result in lighter, more even skin tone. It also provides general antioxidant benefits for overall health.

We offer medical-grade glutathione treatment under proper supervision. IV administration, quality-assured products, and monitoring to ensure safe, effective treatment. This is different from unregulated clinics using questionable products.`,

    whyChooseUs: [
      "Medical-grade glutathione only",
      "Proper IV administration protocols",
      "Doctor-supervised treatment",
      "Quality-verified products",
      "Appropriate patient selection",
      "Safety monitoring throughout"
    ],

    services: [
      {
        title: "IV Glutathione",
        description: "Intravenous administration for maximum absorption and effectiveness. Proper medical protocols."
      },
      {
        title: "Glutathione Drips",
        description: "Combined with vitamin C and other synergistic nutrients for enhanced effect."
      },
      {
        title: "Oral Supplementation",
        description: "For maintenance between IV sessions or for those preferring non-IV options."
      },
      {
        title: "Combination Protocols",
        description: "Glutathione alongside other brightening treatments for comprehensive improvement."
      },
      {
        title: "Maintenance Programs",
        description: "Long-term protocols for sustained results."
      },
      {
        title: "Wellness Benefits",
        description: "Beyond skin — glutathione's antioxidant benefits for general health."
      }
    ],

    processSteps: [
      {
        title: "Candidate Assessment",
        description: "Medical evaluation to ensure you're suitable for glutathione treatment."
      },
      {
        title: "Protocol Design",
        description: "Determining appropriate dose, frequency, and duration."
      },
      {
        title: "Supervised Treatment",
        description: "Medical administration with proper technique and monitoring."
      },
      {
        title: "Progress Evaluation",
        description: "Tracking response and adjusting protocol as needed."
      }
    ],

    faqItems: [
      {
        question: "Does glutathione actually work for skin lightening?",
        answer: "Evidence supports modest improvement in skin tone for many people. Results vary. We assess your likelihood of response before starting."
      },
      {
        question: "Is IV glutathione safe?",
        answer: "When administered properly with medical-grade products under supervision — yes. The key is medical-grade products and proper protocols, not random clinics."
      },
      {
        question: "How many sessions are needed?",
        answer: "Typically 10-20 sessions for visible brightening, then maintenance. Response varies by individual."
      },
      {
        question: "How long do results last?",
        answer: "Without maintenance, results gradually fade over months. Maintenance sessions or oral supplementation help sustain effects."
      },
      {
        question: "Are there any side effects?",
        answer: "Generally well-tolerated. Minor side effects like mild stomach upset occasionally. Serious reactions are rare with proper protocols."
      }
    ],

    ctaText: "Medical-Grade Glutathione Treatment",
    ctaDescription: "Glutathione for skin brightening — done properly with quality products and medical supervision. Not all glutathione treatments are equal. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="glutathione-treatment-in-vadodara"
      content={content}
    />
  );
}
