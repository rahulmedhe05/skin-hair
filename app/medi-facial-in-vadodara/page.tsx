import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Medi Facial Vadodara ₹2,500 | Clinical Results | Book",
  description: "✨ Medi facial in Vadodara ₹2,500 ✓ Dermatologist-supervised ✓ Medical-grade products ✓ Customized for your skin. Better than salon facials. Book now!",
  keywords: "medi facial vadodara, medical facial vadodara, clinical facial vadodara, medi facial cost",
};

export default function MediFacialPage() {
  const content = {
    heroTitle: "Medical Facial Treatment in Vadodara",
    heroSubtitle: "Clinical-Grade Skin Care for Real Results",
    
    introContent: `A medi facial is a facial treatment performed in a dermatology clinic using medical-grade products and techniques. Unlike spa facials that focus on relaxation, medi facials are designed to produce measurable skin improvements.

The difference matters. Clinical-strength products penetrate deeper. Dermatologist supervision means appropriate treatment selection. Proper technique ensures safety and effectiveness. The relaxation is secondary — results are primary.

We offer medi facials tailored to specific concerns — acne, aging, pigmentation, dullness. Each uses products and protocols selected for your condition. This targeted approach produces changes that regular facials can't achieve.`,

    whyChooseUs: [
      "Dermatologist-supervised treatments",
      "Clinical-grade products",
      "Customized to your skin condition",
      "Results-focused approach",
      "Safe for problematic skin",
      "Combines with other treatments"
    ],

    services: [
      {
        title: "Acne Medi Facial",
        description: "Deep cleansing, professional extraction, antimicrobial treatment, and healing protocols for acne-prone skin."
      },
      {
        title: "Anti-Aging Medi Facial",
        description: "Peptides, retinoids, and clinical anti-aging actives for mature skin concerns."
      },
      {
        title: "Pigmentation Medi Facial",
        description: "Brightening acids, lightening agents, and professional-strength products for uneven tone."
      },
      {
        title: "Hydrating Medi Facial",
        description: "Deep hydration for dry, dehydrated, or damaged skin using clinical moisturizing protocols."
      },
      {
        title: "Sensitive Skin Medi Facial",
        description: "Gentle but effective treatment for reactive, redness-prone, or easily irritated skin."
      },
      {
        title: "Combination Protocols",
        description: "Medi facials combined with peels, LED, or other treatments for enhanced results."
      }
    ],

    processSteps: [
      {
        title: "Skin Assessment",
        description: "Dermatologist evaluates your skin to select appropriate protocols."
      },
      {
        title: "Deep Cleansing",
        description: "Thorough cleansing using clinical products."
      },
      {
        title: "Active Treatment",
        description: "Application of medical-grade actives specific to your concerns."
      },
      {
        title: "Protection & Recovery",
        description: "Post-treatment care to protect and support skin improvement."
      }
    ],

    faqItems: [
      {
        question: "What's the difference between a medi facial and a regular facial?",
        answer: "Medi facials use clinical-grade products under medical supervision. They're designed to treat skin conditions, not just provide relaxation. Results are more significant."
      },
      {
        question: "Is a medi facial suitable for sensitive skin?",
        answer: "Yes — we have specific protocols for sensitive skin. Medical supervision actually makes treatment safer for problematic skin types."
      },
      {
        question: "How often should I get medi facials?",
        answer: "Typically every 3-4 weeks depending on your treatment plan. More intensive protocols may have different schedules."
      },
      {
        question: "Can medi facials replace other treatments?",
        answer: "They complement other treatments — often combined with peels, laser, or home care for comprehensive improvement."
      },
      {
        question: "Is there downtime after medi facial?",
        answer: "Usually minimal. Some redness or mild peeling depending on the protocol. We'll tell you what to expect for your specific treatment."
      }
    ],

    ctaText: "Upgrade to Medical-Grade Facials",
    ctaDescription: "When regular facials aren't enough, medi facials deliver. Clinical strength, dermatologist supervised, results that show. Book your medi facial.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="medi-facial-in-vadodara"
      content={content}
    />
  );
}
