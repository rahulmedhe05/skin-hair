import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Pigmentation Treatment Vadodara | 80% Fading | Book",
  description: "✅ Pigmentation treatment in Vadodara ✓ 80% fading in 6 sessions ✓ Laser + peels combo ✓ Safe for Indian skin ✓ No side effects. Starting ₹2,000. Call!",
  keywords: "pigmentation treatment vadodara, dark spots treatment vadodara, melasma treatment vadodara, pigmentation removal cost",
};

export default function PigmentationTreatmentPage() {
  const content = {
    heroTitle: "Pigmentation Treatment in Vadodara",
    heroSubtitle: "Restore Your Skin's Natural Even Tone",
    
    introContent: `Pigmentation problems are the most common skin concern in India — dark patches, spots, uneven tone affecting confidence and how you present to the world. Indian skin is particularly prone to developing pigmentation because we have more melanin.

The challenge is that treatments for lighter skin can actually worsen pigmentation in Indian skin. Aggressive approaches that work elsewhere can trigger more melanin production here. Treatment needs to be calibrated for our skin type.

We specialize in pigmentation treatment for Indian skin. Understanding which types respond to which treatments, how aggressive to be, and how to avoid making things worse. This expertise produces better results with fewer setbacks.`,

    whyChooseUs: [
      "Expertise in Indian skin pigmentation",
      "Safe, calibrated treatment protocols",
      "Understanding of different pigmentation types",
      "Melasma specialization",
      "Treatments that don't worsen pigmentation",
      "Realistic expectations and timelines"
    ],

    services: [
      {
        title: "Pigmentation Assessment",
        description: "Identifying type — melasma, sun damage, post-inflammatory, or others. Each needs different treatment."
      },
      {
        title: "Melasma Management",
        description: "Specialized protocols for this stubborn, recurring condition. Control rather than cure, but significant improvement possible."
      },
      {
        title: "Chemical Peels",
        description: "Carefully selected peels appropriate for Indian skin to lighten pigmentation safely."
      },
      {
        title: "Laser Treatment",
        description: "Specific lasers that work on pigmentation without triggering rebound darkening."
      },
      {
        title: "Topical Protocols",
        description: "Prescription lightening agents, retinoids, and sun protection in comprehensive routines."
      },
      {
        title: "Combination Therapy",
        description: "Multiple approaches together for enhanced results."
      }
    ],

    processSteps: [
      {
        title: "Pigmentation Typing",
        description: "Determining what type of pigmentation you have and what's causing it."
      },
      {
        title: "Protocol Design",
        description: "Selecting safe, effective treatments for your skin type."
      },
      {
        title: "Progressive Treatment",
        description: "Gradual improvement through regular treatment sessions."
      },
      {
        title: "Maintenance Phase",
        description: "Preventing recurrence and protecting results."
      }
    ],

    faqItems: [
      {
        question: "Why is pigmentation so common in Indian skin?",
        answer: "More melanin means more active pigment-producing cells. They respond readily to inflammation, sun, hormones, and other triggers by producing more pigment."
      },
      {
        question: "Can pigmentation be completely removed?",
        answer: "Depends on type. Some pigmentation can be significantly cleared. Melasma can be controlled but tends to recur. We set realistic expectations for your specific situation."
      },
      {
        question: "Why do some treatments make pigmentation worse?",
        answer: "Aggressive treatments can trigger inflammation, which in Indian skin leads to more pigment production. We use calibrated approaches that avoid this rebound effect."
      },
      {
        question: "How important is sunscreen?",
        answer: "Critical. Without consistent sun protection, treatment effects won't last. Sunscreen is the foundation of any pigmentation treatment."
      },
      {
        question: "How long before I see results?",
        answer: "Visible improvement usually takes 2-3 months of consistent treatment. Full results may take 6-12 months. Pigmentation treatment requires patience."
      }
    ],

    ctaText: "Restore Your Skin's Even Tone",
    ctaDescription: "Pigmentation is treatable with the right approach. Get expert care calibrated for Indian skin. Book your pigmentation consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="pigmentation-treatment-in-vadodara"
      content={content}
    />
  );
}
