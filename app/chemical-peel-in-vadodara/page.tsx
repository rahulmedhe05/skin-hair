import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Chemical Peel Vadodara ₹2,000 | Instant Glow | Book",
  description: "✨ Chemical peel in Vadodara ₹2,000 onwards ✓ Glycolic, salicylic, TCA ✓ Instant brightening ✓ Treats acne & pigmentation. Safe peels by experts. Book!",
  keywords: "chemical peel vadodara, skin peel vadodara, glycolic peel vadodara, chemical peel cost",
};

export default function ChemicalPeelPage() {
  const content = {
    heroTitle: "Chemical Peel Treatment in Vadodara",
    heroSubtitle: "Controlled Renewal for Better Skin",
    
    introContent: `A chemical peel is a controlled skin injury — we apply acids that remove damaged outer layers, stimulating your skin to rebuild with fresher, healthier tissue. The concept is ancient; the science is modern.

Different peels address different concerns. Light peels for brightness and mild texture issues. Medium peels for pigmentation, acne scars, and deeper texture problems. The peel depth and type must match your concern and skin type.

This is precisely where expertise matters. In Indian skin, wrong peel selection or technique can cause more pigmentation rather than less. We choose peels appropriate for your skin type and concern, applied correctly for safe, effective improvement.`,

    whyChooseUs: [
      "Expertise in peels for Indian skin",
      "Multiple peel types available",
      "Safe protocols preventing complications",
      "Matched to your specific concerns",
      "Progressive peel programs",
      "Pre and post-peel care guidance"
    ],

    services: [
      {
        title: "Glycolic Peels",
        description: "AHA peels for brightness, mild pigmentation, and general skin renewal. Good starting point."
      },
      {
        title: "Salicylic Peels",
        description: "BHA peels for acne, oily skin, and pore-related issues. Excellent for acne-prone skin."
      },
      {
        title: "Lactic Peels",
        description: "Gentle peels suitable for sensitive skin and beginners. Hydrating while exfoliating."
      },
      {
        title: "Combination Peels",
        description: "Multiple acids for addressing several concerns simultaneously."
      },
      {
        title: "TCA Peels",
        description: "Medium-depth peels for significant pigmentation, scars, and texture issues."
      },
      {
        title: "Jessner Peels",
        description: "Classic combination peel for acne, pigmentation, and rejuvenation."
      }
    ],

    processSteps: [
      {
        title: "Skin Assessment",
        description: "Evaluating your concerns, skin type, and sensitivity to select appropriate peel."
      },
      {
        title: "Pre-Peel Preparation",
        description: "Skin prep protocol if needed to optimize peel results."
      },
      {
        title: "Peel Application",
        description: "Controlled application with monitoring for appropriate depth."
      },
      {
        title: "Post-Peel Care",
        description: "Detailed aftercare instructions for optimal healing and results."
      }
    ],

    faqItems: [
      {
        question: "Are chemical peels safe for Indian skin?",
        answer: "When done correctly by experienced professionals, yes. The key is choosing appropriate peel types and depths for your skin tone to avoid pigmentation issues."
      },
      {
        question: "Will my skin actually peel?",
        answer: "Light peels may not visibly peel — just slight flaking. Medium peels have more noticeable peeling. We'll tell you what to expect for your specific treatment."
      },
      {
        question: "How much downtime is needed?",
        answer: "Light peels: 1-3 days of mild flaking. Medium peels: 5-7 days of peeling. We schedule according to your needs."
      },
      {
        question: "How many sessions will I need?",
        answer: "Depends on your concern. Often 4-6 sessions for significant improvement, spaced 2-4 weeks apart."
      },
      {
        question: "Can I do a peel before an event?",
        answer: "Light peels: yes, with appropriate timing. Deeper peels need more healing time. We'll advise based on your event date."
      }
    ],

    ctaText: "Peel Away Skin Problems",
    ctaDescription: "Controlled peeling reveals fresher, healthier skin beneath. Expert peel selection and application for safe, effective results. Book your chemical peel consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="chemical-peel-in-vadodara"
      content={content}
    />
  );
}
