import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Chemical Face Peel Vadodara ₹2,000 | Bright Skin | Book",
  description: "✨ Chemical face peel in Vadodara ₹2,000 ✓ Safe skin peeling ✓ Brighter complexion ✓ Treats pigmentation & acne ✓ Expert dermatologist. Book now!",
  keywords: "chemical face peel vadodara, facial peel vadodara, face peel cost vadodara, chemical peel near me",
};

export default function ChemicalFacePeelPage() {
  const content = {
    heroTitle: "Chemical Face Peel in Vadodara",
    heroSubtitle: "Reveal Your Best Skin",
    
    introContent: `Chemical face peels accelerate your skin's natural renewal process. By removing damaged outer layers, they reveal the fresher, healthier skin underneath — addressing pigmentation, texture, acne marks, and dullness.

Face peels come in different strengths for different concerns. Light peels offer gentle renewal with no downtime. Medium peels provide more dramatic improvement with some peeling. We match peel strength to your goals and tolerance.

We specialize in facial peels, selecting the right acid and concentration for your specific concerns. With proper application and post-peel care, peels are one of the most effective skin improvement treatments available.`,

    whyChooseUs: [
      "Variety of peel options",
      "Appropriate strength matching",
      "Safe application",
      "All skin types",
      "Post-peel guidance",
      "Progressive improvement"
    ],

    services: [
      {
        title: "Light Peels",
        description: "Gentle exfoliation with no downtime — lunch-time peels."
      },
      {
        title: "Medium Peels",
        description: "More intensive for pigmentation, acne marks, aging."
      },
      {
        title: "Acne Peels",
        description: "Salicylic-based peels targeting acne and oil."
      },
      {
        title: "Brightening Peels",
        description: "Targeting pigmentation and dullness."
      },
      {
        title: "Anti-Aging Peels",
        description: "Addressing fine lines and texture."
      },
      {
        title: "Combination Peels",
        description: "Multi-acid peels for comprehensive improvement."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating skin and selecting appropriate peel."
      },
      {
        title: "Preparation",
        description: "Pre-peel skin preparation if needed."
      },
      {
        title: "Application",
        description: "Careful peel application with monitoring."
      },
      {
        title: "Aftercare",
        description: "Post-peel instructions for optimal healing."
      }
    ],

    faqItems: [
      {
        question: "Will my face actually peel?",
        answer: "Light peels — minimal to no visible peeling. Medium peels — yes, visible peeling for 5-7 days. Results are worth it."
      },
      {
        question: "Is it painful?",
        answer: "Tingling and warmth during application. Some peels have more sensation than others. Generally well-tolerated."
      },
      {
        question: "How many peels do I need?",
        answer: "Series of 4-6 for best results with light peels. Fewer sessions needed with medium peels."
      },
      {
        question: "When will I see improvement?",
        answer: "Glow after first session. Significant improvement after completing the series."
      },
      {
        question: "Can I do peels if I have dark skin?",
        answer: "Yes — we select appropriate peels for Indian skin tones to minimize any pigmentation risk."
      }
    ],

    ctaText: "Refresh Your Facial Skin",
    ctaDescription: "Chemical peels for real improvement. Safe, effective, visible results. Book your peel consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="chemical-face-peel-in-vadodara"
      content={content}
    />
  );
}
