import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Laser Skin Resurfacing Vadodara | New Skin | ₹5,000",
  description: "✨ Laser skin resurfacing in Vadodara from ₹5,000 ✓ Fractional CO2 laser ✓ Erase scars & wrinkles ✓ New skin in 1 week ✓ Dramatic results. Book now!",
  keywords: "laser skin resurfacing vadodara, fractional laser vadodara, co2 laser vadodara, skin resurfacing cost",
};

export default function LaserSkinResurfacingPage() {
  const content = {
    heroTitle: "Laser Skin Resurfacing in Vadodara",
    heroSubtitle: "Rebuild Your Skin from Within",
    
    introContent: `Laser skin resurfacing creates controlled micro-injuries that trigger your skin's healing response. As your skin rebuilds, it produces new collagen, repairs damage, and regenerates with improved texture and tone.

Fractional technology revolutionized resurfacing. Instead of treating the entire surface, lasers create thousands of microscopic treatment zones. Surrounding healthy skin speeds healing while treated areas rebuild. Better results, faster recovery.

This is one of the most effective treatments for significant skin damage — deep acne scars, pronounced texture issues, advanced photoaging. When surface treatments aren't enough, resurfacing goes deeper.`,

    whyChooseUs: [
      "Advanced fractional laser technology",
      "Expertise in skin resurfacing",
      "Safe protocols for Indian skin",
      "Multiple laser options available",
      "Realistic expectations and timelines",
      "Comprehensive pre and post-care"
    ],

    services: [
      {
        title: "Fractional CO2 Laser",
        description: "The most powerful resurfacing option. For significant scars, wrinkles, and skin damage."
      },
      {
        title: "Erbium Laser Resurfacing",
        description: "Gentler resurfacing option with less downtime but still effective."
      },
      {
        title: "Non-Ablative Fractional",
        description: "Stimulates collagen without surface ablation. Minimal downtime, gradual improvement."
      },
      {
        title: "Acne Scar Resurfacing",
        description: "Targeted resurfacing protocols specifically designed for acne scarring."
      },
      {
        title: "Anti-Aging Resurfacing",
        description: "Addressing fine lines, wrinkles, and photoaged skin."
      },
      {
        title: "Texture Improvement",
        description: "For enlarged pores, rough texture, and uneven skin surface."
      }
    ],

    processSteps: [
      {
        title: "Assessment & Planning",
        description: "Evaluating your skin, concerns, and tolerance for downtime."
      },
      {
        title: "Skin Preparation",
        description: "Pre-treatment protocols to optimize results and minimize complications."
      },
      {
        title: "Resurfacing Treatment",
        description: "Laser application with appropriate numbing and technique."
      },
      {
        title: "Recovery Phase",
        description: "Guided healing with specific aftercare instructions and support."
      }
    ],

    faqItems: [
      {
        question: "What's the downtime for laser resurfacing?",
        answer: "Depends on depth. Light fractional: 3-5 days. Moderate: 5-7 days. Aggressive CO2: 1-2 weeks. We'll match intensity to your available downtime."
      },
      {
        question: "Is laser resurfacing painful?",
        answer: "Numbing cream and sometimes nerve blocks are used. During treatment: manageable. After: mild sunburn sensation for a day or two."
      },
      {
        question: "How many sessions are needed?",
        answer: "Often 3-4 sessions for optimal results, spaced 4-8 weeks apart. Some concerns may need more."
      },
      {
        question: "Is it safe for Indian skin?",
        answer: "With appropriate laser selection, settings, and pre/post care — yes. Risk of pigmentation exists but is managed with proper protocols."
      },
      {
        question: "What results can I expect?",
        answer: "Significant improvement in scars, texture, fine lines. Results continue improving for months after treatment as collagen rebuilds."
      }
    ],

    ctaText: "Resurface Your Skin",
    ctaDescription: "When surface treatments aren't enough, laser resurfacing goes deeper. Expert technology and technique for significant skin transformation. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="laser-skin-resurfacing-in-vadodara"
      content={content}
    />
  );
}
