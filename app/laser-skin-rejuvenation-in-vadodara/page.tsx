import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Laser Skin Rejuvenation Vadodara | Look Younger | Book",
  description: "✨ Laser skin rejuvenation in Vadodara ✓ Look 5 years younger ✓ Tighten & brighten ✓ Reduce wrinkles ✓ No surgery. Starting ₹5,000. Book consultation!",
  keywords: "laser skin rejuvenation vadodara, anti aging laser vadodara, skin rejuvenation cost, laser facial rejuvenation",
};

export default function LaserSkinRejuvenationPage() {
  const content = {
    heroTitle: "Laser Skin Rejuvenation in Vadodara",
    heroSubtitle: "Turn Back the Clock with Laser",
    
    introContent: `Aging skin loses collagen, elasticity, and that youthful vitality. Wrinkles form, skin sags, texture becomes uneven. Laser rejuvenation stimulates your skin to rebuild itself, reversing these changes from within.

Laser rejuvenation works by creating controlled thermal injury that triggers healing response. Your skin responds by producing new collagen and remodeling existing structures. The result is tighter, smoother, more youthful skin.

We offer various laser rejuvenation options — from gentle treatments with no downtime to more intensive procedures with dramatic results. The choice depends on how much improvement you want and how much recovery time you can afford.`,

    whyChooseUs: [
      "Range of rejuvenation lasers",
      "Customizable intensity",
      "Collagen stimulation",
      "Anti-aging expertise",
      "Natural results",
      "Treatment planning"
    ],

    services: [
      {
        title: "Non-Ablative Rejuvenation",
        description: "Gentle laser with no downtime for gradual improvement."
      },
      {
        title: "Fractional Resurfacing",
        description: "More intensive treatment for significant rejuvenation."
      },
      {
        title: "Skin Tightening Laser",
        description: "Targeting laxity and sagging."
      },
      {
        title: "Wrinkle Reduction",
        description: "Laser treatment for fine lines and wrinkles."
      },
      {
        title: "Texture Improvement",
        description: "Smoothing rough, uneven skin texture."
      },
      {
        title: "Full Face Rejuvenation",
        description: "Comprehensive laser treatment for overall improvement."
      }
    ],

    processSteps: [
      {
        title: "Aging Assessment",
        description: "Evaluating your skin's aging signs and concerns."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate laser based on goals and downtime tolerance."
      },
      {
        title: "Laser Treatment",
        description: "Performing rejuvenation with proper settings."
      },
      {
        title: "Collagen Building",
        description: "Results continue improving as new collagen forms."
      }
    ],

    faqItems: [
      {
        question: "How much younger will I look?",
        answer: "Improvement varies — expect refreshed, smoother, tighter appearance rather than dramatic age reversal. Results are natural."
      },
      {
        question: "Is there downtime?",
        answer: "Depends on treatment intensity. Non-ablative — none. Ablative fractional — 5-7 days of healing."
      },
      {
        question: "When will I see results?",
        answer: "Some immediate tightening. Full results develop over 3-6 months as collagen builds."
      },
      {
        question: "How long do results last?",
        answer: "1-2 years typically. Aging continues, so maintenance treatments help sustain results."
      },
      {
        question: "Is it better than Botox/fillers?",
        answer: "Different — laser improves skin quality, Botox relaxes muscles, fillers add volume. Often complementary."
      }
    ],

    ctaText: "Rejuvenate Your Skin with Laser",
    ctaDescription: "Restore youthful skin quality. Advanced laser rejuvenation for natural improvement. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="laser-skin-rejuvenation-in-vadodara"
      content={content}
    />
  );
}
