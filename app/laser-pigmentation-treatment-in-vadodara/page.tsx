import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Laser Pigmentation Treatment Vadodara | 80% Fading | Book",
  description: "✨ Laser pigmentation treatment in Vadodara ✓ 80% fading in 4 sessions ✓ Q-switched laser ✓ Melasma & dark spots ✓ Safe for Indian skin. Book now!",
  keywords: "laser pigmentation treatment vadodara, laser for pigmentation vadodara, q-switched laser cost, pigmentation laser near me",
};

export default function LaserPigmentationTreatmentPage() {
  const content = {
    heroTitle: "Laser Pigmentation Treatment in Vadodara",
    heroSubtitle: "Target and Clear Pigmentation",
    
    introContent: `Pigmentation disorders — dark patches, spots, uneven tone — can be incredibly stubborn. Creams take months and often disappoint. Laser technology offers a more direct solution, targeting pigment precisely.

Q-switched lasers deliver high-energy pulses that shatter melanin particles without damaging surrounding tissue. The body then clears these fragments, lightening the pigmented area. Multiple sessions progressively clear even stubborn pigmentation.

We use laser pigmentation treatment for dark spots, sun damage, and certain types of melasma. Understanding which pigmentation responds to laser and which needs other approaches is crucial for success.`,

    whyChooseUs: [
      "Q-switched laser technology",
      "Precise pigment targeting",
      "Safe for Indian skin",
      "Multiple pigmentation types",
      "Experienced application",
      "Combination protocols when needed"
    ],

    services: [
      {
        title: "Q-Switched ND:YAG Laser",
        description: "Primary laser for pigmentation in darker skin tones."
      },
      {
        title: "Dark Spot Removal",
        description: "Targeting individual dark spots and age spots."
      },
      {
        title: "Sun Damage Treatment",
        description: "Clearing pigmentation from sun exposure."
      },
      {
        title: "Post-Inflammatory Hyperpigmentation",
        description: "Treating marks left by acne or injury."
      },
      {
        title: "Freckle Removal",
        description: "Lightening unwanted freckles."
      },
      {
        title: "Laser Toning",
        description: "Low-fluence laser for overall tone improvement."
      }
    ],

    processSteps: [
      {
        title: "Pigmentation Assessment",
        description: "Determining pigmentation type and depth."
      },
      {
        title: "Suitability Check",
        description: "Confirming laser is appropriate for your pigmentation."
      },
      {
        title: "Laser Sessions",
        description: "Treatment with appropriate settings for your skin."
      },
      {
        title: "Progressive Clearing",
        description: "Pigmentation lightens over treatment course."
      }
    ],

    faqItems: [
      {
        question: "Can laser treat all types of pigmentation?",
        answer: "Not all — some respond well, others need different approaches. Melasma, for example, needs careful assessment. We advise honestly."
      },
      {
        question: "How many sessions for pigmentation?",
        answer: "Typically 4-8 sessions depending on pigmentation type and extent. Some spots clear faster than diffuse pigmentation."
      },
      {
        question: "Will pigmentation come back?",
        answer: "Can recur without sun protection and trigger management. We provide prevention guidance."
      },
      {
        question: "Is laser safe for dark skin?",
        answer: "Yes, with appropriate laser and settings. ND:YAG laser is safer for darker skin tones."
      },
      {
        question: "What's the immediate effect?",
        answer: "Treated spots may darken initially (crusting), then gradually lighten as they heal over 1-2 weeks."
      }
    ],

    ctaText: "Clear Your Pigmentation with Laser",
    ctaDescription: "Targeted treatment for stubborn pigmentation. Professional laser therapy for visible results. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="laser-pigmentation-treatment-in-vadodara"
      content={content}
    />
  );
}
