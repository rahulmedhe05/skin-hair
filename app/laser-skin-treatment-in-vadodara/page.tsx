import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Laser Skin Treatment Vadodara | US FDA Approved | Book",
  description: "✨ Laser skin treatment in Vadodara ✓ US FDA approved lasers ✓ Pigmentation, scars, rejuvenation ✓ Safe for Indian skin ✓ Expert dermatologists. Book now!",
  keywords: "laser skin treatment vadodara, laser therapy vadodara, skin laser treatment cost, laser treatment near me",
};

export default function LaserSkinTreatmentPage() {
  const content = {
    heroTitle: "Laser Skin Treatment in Vadodara",
    heroSubtitle: "Precision Technology for Better Skin",
    
    introContent: `Laser technology has transformed dermatology — allowing us to target specific skin concerns with precision impossible through other methods. From pigmentation to scars to hair removal, lasers provide solutions that were previously unachievable.

Different lasers work differently. Some target pigment, others target water in tissue, some focus on hair follicles. Understanding which laser for which concern, and using appropriate settings for your skin type, determines results.

We offer multiple laser systems for various skin concerns. Our expertise lies in selecting the right laser, using proper parameters for Indian skin, and achieving results safely and effectively.`,

    whyChooseUs: [
      "Multiple laser systems",
      "FDA-approved technology",
      "Experience with Indian skin",
      "Proper parameter selection",
      "Range of skin concerns",
      "Safety focus"
    ],

    services: [
      {
        title: "Laser Hair Removal",
        description: "Permanent reduction of unwanted body and facial hair."
      },
      {
        title: "Laser Pigmentation Treatment",
        description: "Q-switched laser for pigmentation and dark spots."
      },
      {
        title: "Laser Scar Treatment",
        description: "Fractional laser for acne scars and other scarring."
      },
      {
        title: "Laser Skin Rejuvenation",
        description: "Laser resurfacing for aging and texture."
      },
      {
        title: "Laser Tattoo Removal",
        description: "Removing unwanted tattoos with laser."
      },
      {
        title: "Carbon Laser Peel",
        description: "Laser treatment for pores, oiliness, and glow."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Assessing your concern and determining if laser is appropriate."
      },
      {
        title: "Laser Selection",
        description: "Choosing the right laser and parameters for your skin."
      },
      {
        title: "Treatment Sessions",
        description: "Performing laser treatment with proper safety."
      },
      {
        title: "Results",
        description: "Progressive improvement over treatment course."
      }
    ],

    faqItems: [
      {
        question: "Are laser treatments safe for dark skin?",
        answer: "Yes, with proper laser selection and settings. We're experienced with Indian skin tones and adjust accordingly."
      },
      {
        question: "How many sessions are needed?",
        answer: "Varies by treatment — hair removal needs 6-8, pigmentation 3-6, scars 3-5. We advise during consultation."
      },
      {
        question: "Is laser treatment painful?",
        answer: "Discomfort varies by laser type. We use cooling and numbing when appropriate. Generally well-tolerated."
      },
      {
        question: "What's the downtime?",
        answer: "Depends on treatment — some have none, others have a few days of redness. We explain expectations."
      },
      {
        question: "Can laser damage skin?",
        answer: "With improper use, yes. That's why expertise matters. We use appropriate settings and protocols for safety."
      }
    ],

    ctaText: "Explore Laser Solutions for Your Skin",
    ctaDescription: "Advanced laser technology for real results. Safe, effective treatments for various skin concerns. Book your laser consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="laser-skin-treatment-in-vadodara"
      content={content}
    />
  );
}
