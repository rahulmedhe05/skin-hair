import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Tag Removal Vadodara ₹500 | Same Day | Walk-In",
  description: "✅ Skin tag removal in Vadodara ₹500 onwards ✓ Same-day removal ✓ RF cautery ✓ Painless ✓ No scars. Neck, underarms, face. Walk-in welcome. Call now!",
  keywords: "skin tag removal vadodara, skin tags treatment cost vadodara, remove skin tags, skin tag near me",
};

export default function SkinTagRemovalPage() {
  const content = {
    heroTitle: "Skin Tag Removal in Vadodara",
    heroSubtitle: "Quick, Painless Skin Tag Elimination",
    
    introContent: `Skin tags — those small, soft, hanging skin growths — are harmless but annoying. They catch on jewelry and clothing, look unsightly, and seem to multiply over time, especially around neck, underarms, and eyelids.

While harmless, many people want them removed for appearance and comfort. Professional removal is quick, clean, and prevents the irritation and potential infection from DIY attempts.

We remove skin tags quickly and safely using appropriate methods. Whether you have a few bothersome tags or numerous ones accumulated over years, we can clear them efficiently with minimal discomfort.`,

    whyChooseUs: [
      "Quick, efficient removal",
      "Multiple removal methods",
      "Minimal to no discomfort",
      "Treatment for numerous tags",
      "Safe removal from sensitive areas",
      "No scarring with proper technique"
    ],

    services: [
      {
        title: "Snip Excision",
        description: "Quick surgical snipping for simple skin tags."
      },
      {
        title: "Electrocautery",
        description: "Electrical removal — efficient for multiple tags."
      },
      {
        title: "Cryotherapy",
        description: "Freezing skin tags for removal."
      },
      {
        title: "Neck Tag Removal",
        description: "Clearing common neck area skin tags."
      },
      {
        title: "Underarm Tag Removal",
        description: "Removing tags from friction-prone underarm area."
      },
      {
        title: "Eyelid Tag Removal",
        description: "Careful removal from delicate eye area."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating skin tags and choosing appropriate removal method."
      },
      {
        title: "Preparation",
        description: "Local anesthesia if needed, depending on method and number."
      },
      {
        title: "Removal",
        description: "Quick removal of all skin tags in single session when possible."
      },
      {
        title: "Aftercare",
        description: "Simple wound care instructions for quick healing."
      }
    ],

    faqItems: [
      {
        question: "Is skin tag removal painful?",
        answer: "Minimal discomfort. Small tags removed quickly with little sensation. Larger ones or numerous tags may need local anesthesia."
      },
      {
        question: "Will skin tags grow back?",
        answer: "Removed tags don't regrow, but new ones can form in other areas over time — that's the nature of having this tendency."
      },
      {
        question: "Can I remove skin tags myself?",
        answer: "Not recommended — risk of bleeding, infection, and scarring. Professional removal is safer and cleaner."
      },
      {
        question: "Why do I get so many skin tags?",
        answer: "Genetics, friction, age, weight, and possibly insulin resistance contribute. They're extremely common and harmless."
      },
      {
        question: "How many can be removed at once?",
        answer: "Typically all can be removed in one session unless you have very numerous tags, in which case we may stage treatment."
      }
    ],

    ctaText: "Clear Your Skin Tags Today",
    ctaDescription: "Stop living with annoying skin tags. Quick, painless removal for smoother skin. Book your skin tag removal appointment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-tag-removal-in-vadodara"
      content={content}
    />
  );
}
