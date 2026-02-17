import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Dark Spots Treatment Vadodara | 80% Fading | ₹2,000",
  description: "✅ Dark spots treatment in Vadodara from ₹2,000 ✓ 80% fading guaranteed ✓ Sun spots, age spots ✓ Laser + peels ✓ Even skin tone. Book consultation!",
  keywords: "dark spots treatment vadodara, spot removal vadodara, dark spots cost vadodara, dark spots near me",
};

export default function DarkSpotsTreatmentPage() {
  const content = {
    heroTitle: "Dark Spots Treatment in Vadodara",
    heroSubtitle: "Clear, Spotless Skin is Possible",
    
    introContent: `Dark spots accumulate over time — from sun exposure, old pimples, small injuries, or just aging. Each spot tells a story, but you may not want that story written on your face.

The good news: most dark spots respond well to treatment. Unlike deeper pigmentation issues, isolated spots can often be significantly faded or removed with appropriate care. The key is matching treatment to spot type.

We've treated countless patients with various dark spots — post-acne, sun damage, age spots, injury marks. Our experience lets us identify what each spot needs and apply targeted treatment for visible improvement.`,

    whyChooseUs: [
      "Identification of spot types",
      "Targeted treatment for each spot",
      "Multiple treatment modalities",
      "Safe for Indian skin tones",
      "Visible improvement in most cases",
      "Prevention of new spot formation"
    ],

    services: [
      {
        title: "Spot Assessment",
        description: "Determining what caused each spot — this guides treatment selection."
      },
      {
        title: "Laser Spot Removal",
        description: "Targeted laser treatment for stubborn individual spots."
      },
      {
        title: "Chemical Peels",
        description: "Controlled exfoliation to lift pigment from multiple spots."
      },
      {
        title: "Topical Lightening",
        description: "Prescription products for gradual spot fading."
      },
      {
        title: "Cryotherapy",
        description: "Freezing treatment for certain spot types."
      },
      {
        title: "Sun Protection",
        description: "Preventing new spots while treating existing ones."
      }
    ],

    processSteps: [
      {
        title: "Spot Inventory",
        description: "Documenting all spots, their types, and what caused them."
      },
      {
        title: "Treatment Matching",
        description: "Selecting appropriate treatment for each spot type."
      },
      {
        title: "Active Treatment",
        description: "Treating spots with chosen modalities."
      },
      {
        title: "Prevention Protocol",
        description: "Protecting treated areas and preventing new spots."
      }
    ],

    faqItems: [
      {
        question: "What causes dark spots?",
        answer: "Sun exposure is the biggest cause, followed by post-inflammatory marks from acne or injuries, age-related changes, and hormonal factors."
      },
      {
        question: "Can all dark spots be removed?",
        answer: "Most can be significantly faded. Complete removal depends on spot type and depth. We assess what's realistic for your specific spots."
      },
      {
        question: "Will laser treatment hurt?",
        answer: "Brief discomfort during the pulse, like a rubber band snap. Numbing cream helps. Most patients tolerate it easily."
      },
      {
        question: "How many sessions will I need?",
        answer: "Depends on spot type and number. Single spots may clear in 1-2 sessions. Multiple spots or deeper pigmentation need more."
      },
      {
        question: "Will the spots come back?",
        answer: "Not the same spots, but sun exposure can create new ones. Consistent sunscreen is essential for prevention."
      }
    ],

    ctaText: "Clear Your Dark Spots",
    ctaDescription: "Those spots don't have to be permanent. Professional treatment can fade them significantly. Book your spot treatment consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="dark-spots-treatment-in-vadodara"
      content={content}
    />
  );
}
