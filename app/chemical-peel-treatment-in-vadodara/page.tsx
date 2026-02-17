import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Chemical Peel Treatment Vadodara ₹2,000 | Rejuvenate",
  description: "✨ Chemical peel treatment in Vadodara from ₹2,000 ✓ Skin rejuvenation ✓ Pigmentation & anti-aging ✓ Multiple peel options ✓ Expert care. Book now!",
  keywords: "chemical peel treatment vadodara, skin peel vadodara, chemical peel cost vadodara, skin peel near me",
};

export default function ChemicalPeelTreatmentPage() {
  const content = {
    heroTitle: "Chemical Peel Treatment in Vadodara",
    heroSubtitle: "Resurface and Renew Your Skin",
    
    introContent: `Chemical peels remove damaged outer skin layers to reveal fresher, healthier skin beneath. They're one of the most effective treatments for pigmentation, acne marks, dullness, and early aging signs.

Different peels work at different depths — superficial for mild concerns, medium for moderate issues, and deep for significant problems. The right peel depends on what you're treating and your skin type.

We offer various peel options tailored to your specific concerns. From light lunch-time peels to more intensive treatments, we select the appropriate type and strength for your goals.`,

    whyChooseUs: [
      "Range of peel options",
      "Appropriate strength selection",
      "Safe application technique",
      "Experience with all skin types",
      "Post-peel care guidance",
      "Results-focused approach"
    ],

    services: [
      {
        title: "Glycolic Acid Peel",
        description: "AHA peel for mild exfoliation and brightening."
      },
      {
        title: "Salicylic Acid Peel",
        description: "BHA peel excellent for acne and oily skin."
      },
      {
        title: "TCA Peel",
        description: "Medium-depth peel for pigmentation and aging."
      },
      {
        title: "Jessner's Peel",
        description: "Combination peel for multiple concerns."
      },
      {
        title: "Lactic Acid Peel",
        description: "Gentle peel suitable for sensitive skin."
      },
      {
        title: "Combination Peels",
        description: "Customized peel protocols for specific concerns."
      }
    ],

    processSteps: [
      {
        title: "Skin Assessment",
        description: "Evaluating skin and determining appropriate peel type."
      },
      {
        title: "Pre-Peel Preparation",
        description: "Preparing skin for better peel results if needed."
      },
      {
        title: "Peel Application",
        description: "Careful application with appropriate timing."
      },
      {
        title: "Post-Peel Care",
        description: "Instructions for healing and maximizing results."
      }
    ],

    faqItems: [
      {
        question: "Does chemical peel hurt?",
        answer: "Mild tingling and warmth during application. Discomfort depends on peel depth — superficial peels are quite comfortable."
      },
      {
        question: "Will my face peel visibly?",
        answer: "Superficial peels may have minimal peeling. Medium peels have visible peeling for several days. We advise on what to expect."
      },
      {
        question: "How many sessions needed?",
        answer: "Depends on concerns and peel depth. Often 4-6 sessions of lighter peels, fewer of deeper peels."
      },
      {
        question: "When can I resume normal activities?",
        answer: "Superficial peels — same day. Medium peels — 5-7 days of peeling. We provide specific guidance."
      },
      {
        question: "Are peels safe for Indian skin?",
        answer: "Yes, with proper selection and technique. We use appropriate peels for darker skin tones."
      }
    ],

    ctaText: "Reveal Fresher, Clearer Skin",
    ctaDescription: "Chemical peels for real skin improvement. Professional application for safe, effective results. Book your peel consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="chemical-peel-treatment-in-vadodara"
      content={content}
    />
  );
}
