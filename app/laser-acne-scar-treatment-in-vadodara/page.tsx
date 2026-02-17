import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Laser Acne Scar Treatment Vadodara | 70% Improvement",
  description: "✨ Laser acne scar treatment in Vadodara ✓ 70% scar improvement ✓ Fractional CO2 ✓ Deep scars treated ✓ Smooth skin. Starting ₹5,000. Book consultation!",
  keywords: "laser acne scar treatment vadodara, acne scar laser vadodara, fractional laser cost, acne scar removal laser",
};

export default function LaserAcneScarTreatmentPage() {
  const content = {
    heroTitle: "Laser Acne Scar Treatment in Vadodara",
    heroSubtitle: "Resurface Scarred Skin",
    
    introContent: `Acne scars — especially deep ice-pick and boxcar scars — are notoriously difficult to treat. Creams can't reach deep enough, and surface treatments barely make a dent. Laser treatment changed this reality.

Fractional laser creates thousands of microscopic treatment zones deep in the skin, triggering intense collagen remodeling. The skin repairs itself, filling in scars from below. Multiple sessions progressively smooth even significant scarring.

We use fractional laser technology for acne scar treatment, adjusting depth and intensity based on your scar severity. While complete elimination of deep scars isn't always possible, significant improvement is achievable for most patients.`,

    whyChooseUs: [
      "Fractional laser technology",
      "Deep scar treatment capability",
      "Adjustable treatment intensity",
      "Progressive improvement",
      "Experience with severe scarring",
      "Realistic expectation setting"
    ],

    services: [
      {
        title: "Fractional CO2 Laser",
        description: "Ablative laser for significant scar improvement."
      },
      {
        title: "Fractional Erbium Laser",
        description: "Less aggressive option with shorter downtime."
      },
      {
        title: "Non-Ablative Laser",
        description: "Minimal downtime option for milder scarring."
      },
      {
        title: "Combined Scar Protocol",
        description: "Laser with other treatments for enhanced results."
      },
      {
        title: "Ice-Pick Scar Treatment",
        description: "Targeting the deepest, most stubborn scars."
      },
      {
        title: "Rolling Scar Treatment",
        description: "Addressing wave-like scar patterns."
      }
    ],

    processSteps: [
      {
        title: "Scar Assessment",
        description: "Evaluating scar types, depth, and extent."
      },
      {
        title: "Treatment Planning",
        description: "Creating laser protocol based on your scars."
      },
      {
        title: "Laser Sessions",
        description: "Multiple sessions for progressive improvement."
      },
      {
        title: "Collagen Remodeling",
        description: "Skin continues improving between sessions."
      }
    ],

    faqItems: [
      {
        question: "Can laser remove acne scars completely?",
        answer: "Significant improvement yes, complete removal of deep scars not always. 50-70% improvement is realistic for most."
      },
      {
        question: "How many sessions needed?",
        answer: "Typically 3-5 sessions spaced 4-6 weeks apart. Severe scarring may need more."
      },
      {
        question: "What's the recovery like?",
        answer: "Red, swollen skin for 3-7 days. Peeling follows. Complete healing 1-2 weeks. Worth it for the results."
      },
      {
        question: "Is it painful?",
        answer: "We use numbing cream and sometimes local anesthesia. Discomfort is manageable. Post-treatment feels like sunburn."
      },
      {
        question: "When will I see improvement?",
        answer: "Initial results visible after first session heals. Progressive improvement with each session and for months after."
      }
    ],

    ctaText: "Treat Your Acne Scars Effectively",
    ctaDescription: "Don't let acne scars define your skin. Laser treatment for real improvement. Book your scar consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="laser-acne-scar-treatment-in-vadodara"
      content={content}
    />
  );
}
