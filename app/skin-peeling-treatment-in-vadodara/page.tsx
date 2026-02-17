import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Peeling Treatment Vadodara ₹2,000 | Fresh Skin | Book",
  description: "✨ Skin peeling in Vadodara from ₹2,000 ✓ Remove dead skin layers ✓ Reveal fresh skin ✓ Brighter complexion ✓ Safe chemical peels. Book your session!",
  keywords: "skin peeling treatment vadodara, skin exfoliation vadodara, peeling treatment cost, skin peeling near me",
};

export default function SkinPeelingTreatmentPage() {
  const content = {
    heroTitle: "Skin Peeling Treatment in Vadodara",
    heroSubtitle: "Shed the Old, Reveal the New",
    
    introContent: `Your skin constantly renews itself, but as you age, this process slows. Dead cells accumulate, making skin look dull, feel rough, and preventing products from penetrating properly. Professional peeling accelerates this renewal.

Skin peeling treatments range from gentle exfoliation to more intensive chemical peels. The right choice depends on your skin condition and what you're trying to achieve. Light peeling for maintenance, deeper for significant improvement.

We offer various peeling options — from enzyme peels to chemical peels of different strengths. Understanding your skin and goals, we recommend the appropriate treatment for visible results.`,

    whyChooseUs: [
      "Range of peeling options",
      "Customized treatment selection",
      "Safe for all skin types",
      "Visible results",
      "Progressive protocols",
      "Expert application"
    ],

    services: [
      {
        title: "Enzyme Peels",
        description: "Gentle biological exfoliation with no downtime."
      },
      {
        title: "Alpha Hydroxy Acid Peels",
        description: "Glycolic, lactic acid peels for surface renewal."
      },
      {
        title: "Beta Hydroxy Acid Peels",
        description: "Salicylic peels for oily, acne-prone skin."
      },
      {
        title: "TCA Peels",
        description: "Medium-depth peels for significant concerns."
      },
      {
        title: "Combination Peels",
        description: "Multi-acid protocols for comprehensive treatment."
      },
      {
        title: "Body Peeling",
        description: "Exfoliation treatments for body skin."
      }
    ],

    processSteps: [
      {
        title: "Skin Assessment",
        description: "Evaluating your skin and treatment needs."
      },
      {
        title: "Peel Selection",
        description: "Choosing appropriate peeling treatment."
      },
      {
        title: "Treatment",
        description: "Professional application with proper timing."
      },
      {
        title: "Renewal",
        description: "Post-treatment care as skin renews."
      }
    ],

    faqItems: [
      {
        question: "What does peeling treatment do?",
        answer: "Removes dead skin layers, revealing fresher skin underneath. Improves texture, tone, and clarity."
      },
      {
        question: "Is visible peeling necessary for results?",
        answer: "Not always — light peels work without visible peeling. Deeper peels have visible shedding but more dramatic results."
      },
      {
        question: "How often should I get peeling treatment?",
        answer: "Light peels — every 2-4 weeks. Medium peels — every 4-6 weeks. Series treatment for best results."
      },
      {
        question: "Can I do it at home?",
        answer: "Professional peels are stronger and more effective than home products. They need proper application and monitoring."
      },
      {
        question: "What's the recovery like?",
        answer: "Light peels — none. Medium peels — few days of peeling. We guide you through the process."
      }
    ],

    ctaText: "Refresh Your Skin",
    ctaDescription: "Let go of dull, tired skin. Professional peeling for visible renewal. Book your treatment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-peeling-treatment-in-vadodara"
      content={content}
    />
  );
}
