import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Pimple Marks Removal Vadodara | 70% Fading | Book Now",
  description: "✅ Pimple marks removal in Vadodara ✓ 70% fading in 4 sessions ✓ Laser + peels combo ✓ Dark spots gone ✓ Even skin tone. Starting ₹2,000. Book now!",
  keywords: "pimple marks removal vadodara, dark spot treatment vadodara, post acne marks, pimple marks cost",
};

export default function PimpleMarksRemovalPage() {
  const content = {
    heroTitle: "Pimple Marks Removal in Vadodara",
    heroSubtitle: "Erase the Evidence of Past Breakouts",
    
    introContent: `Every pimple leaves behind a mark — red, brown, or purple spots that linger long after the pimple heals. These marks can take months or even years to fade on their own, keeping your skin looking uneven.

Good news: these post-inflammatory marks respond well to treatment. Unlike deep scars, marks are color changes in the skin that can be significantly improved with proper care. The key is using the right treatment for your skin type and mark color.

We specialize in identifying mark types and applying targeted treatments. Whether your marks are red (recent) or brown (older), we have protocols that accelerate fading and restore even skin tone.`,

    whyChooseUs: [
      "Expert assessment of mark types",
      "Targeted treatment for each mark color",
      "Safe protocols for Indian skin tones",
      "Accelerated fading vs. waiting naturally",
      "Prevention of future marks",
      "Even-toned skin restoration"
    ],

    services: [
      {
        title: "Mark Assessment",
        description: "Identifying mark types — red post-inflammatory erythema vs. brown post-inflammatory hyperpigmentation. Treatment differs for each."
      },
      {
        title: "Chemical Peels",
        description: "Controlled exfoliation to lift pigment and promote even skin turnover."
      },
      {
        title: "Laser Treatment",
        description: "Targeted laser for stubborn marks that don't respond to topical treatment."
      },
      {
        title: "Topical Protocols",
        description: "Prescription lightening agents, retinoids, and antioxidants for gradual improvement."
      },
      {
        title: "Combination Therapy",
        description: "Multiple approaches together for faster, better results."
      },
      {
        title: "Prevention Strategy",
        description: "Stopping new marks while treating existing ones."
      }
    ],

    processSteps: [
      {
        title: "Mark Mapping",
        description: "Documenting all marks, their colors, and how long they've been present."
      },
      {
        title: "Protocol Selection",
        description: "Choosing treatments based on your skin type and mark characteristics."
      },
      {
        title: "Progressive Treatment",
        description: "Regular sessions gradually fading marks over time."
      },
      {
        title: "Maintenance Phase",
        description: "Protecting results and preventing new marks."
      }
    ],

    faqItems: [
      {
        question: "What's the difference between marks and scars?",
        answer: "Marks are flat color changes — the skin texture is normal. Scars involve texture changes like depressions or raised areas. Marks are easier to treat."
      },
      {
        question: "Why are some marks red and others brown?",
        answer: "Red marks (erythema) are recent and involve blood vessels. Brown marks (hyperpigmentation) develop later from melanin. Treatment approaches differ."
      },
      {
        question: "How long does treatment take?",
        answer: "Depends on mark age and depth. Fresh marks may fade in weeks. Older, deeper marks may need months. We accelerate what would take years naturally."
      },
      {
        question: "Is treatment safe for darker skin tones?",
        answer: "Yes, but requires careful protocol selection. Some treatments can worsen pigmentation in darker skin. We choose appropriate options for your skin type."
      },
      {
        question: "Can I prevent marks from forming?",
        answer: "Partially. Don't pick pimples, treat acne properly, use sunscreen. Even with prevention, some marks may form, but they'll be milder."
      }
    ],

    ctaText: "Clear Your Pimple Marks Faster",
    ctaDescription: "Don't wait years for marks to fade on their own. Professional treatment accelerates the process dramatically. Book your mark removal consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="pimple-marks-removal-in-vadodara"
      content={content}
    />
  );
}
