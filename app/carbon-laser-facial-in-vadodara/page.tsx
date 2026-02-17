import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Carbon Laser Facial Vadodara ₹2,500 | Party Glow | Book",
  description: "✨ Carbon laser facial in Vadodara ₹2,500 ✓ Instant radiance ✓ Hollywood peel ✓ Shrinks pores ✓ Zero downtime. Perfect before parties. Book your session!",
  keywords: "carbon laser facial vadodara, hollywood peel vadodara, carbon facial cost vadodara, laser carbon peel",
};

export default function CarbonLaserFacialPage() {
  const content = {
    heroTitle: "Carbon Laser Facial in Vadodara",
    heroSubtitle: "The Instant Glow Treatment",
    
    introContent: `The carbon laser facial — famous as the Hollywood Peel — delivers instant radiance that's made it a celebrity favorite before red carpet events. Apply carbon, laser it off, and your skin transforms before your eyes.

Liquid carbon penetrates pores, absorbing oil and impurities. When laser passes over, it vaporizes the carbon along with everything it's absorbed, while simultaneously stimulating collagen. The result: immediately cleaner, tighter, glowing skin.

We perform carbon laser facials for instant glow, ongoing skin improvement, or both. It's particularly effective for oily, congested skin with large pores, but benefits most skin types.`,

    whyChooseUs: [
      "Quality laser equipment",
      "Proper technique",
      "Immediate visible results",
      "Virtually no downtime",
      "Effective for multiple concerns",
      "Safe for most skin types"
    ],

    services: [
      {
        title: "Classic Carbon Peel",
        description: "Full face carbon laser treatment for overall rejuvenation."
      },
      {
        title: "Pore-Focused Treatment",
        description: "Targeting enlarged pores and oily zones."
      },
      {
        title: "Pre-Event Glow",
        description: "Carbon peel timed perfectly before special occasions."
      },
      {
        title: "Acne Skin Carbon Peel",
        description: "For oily, acne-prone skin — kills bacteria, reduces oil."
      },
      {
        title: "Series Treatment",
        description: "Multiple sessions for cumulative improvement."
      },
      {
        title: "Combination Protocols",
        description: "Carbon peel with other treatments for enhanced results."
      }
    ],

    processSteps: [
      {
        title: "Cleansing",
        description: "Thorough facial cleansing before treatment."
      },
      {
        title: "Carbon Application",
        description: "Applying liquid carbon, letting it settle into pores."
      },
      {
        title: "Laser Treatment",
        description: "Laser passes to vaporize carbon and treat skin."
      },
      {
        title: "Instant Glow",
        description: "See immediately smoother, brighter skin."
      }
    ],

    faqItems: [
      {
        question: "When will I see results?",
        answer: "Immediately — skin looks brighter and smoother right after treatment. That's why it's called the instant glow treatment."
      },
      {
        question: "Is there any downtime?",
        answer: "Virtually none. Mild redness for an hour or so. You can go out immediately."
      },
      {
        question: "How often can I do carbon peel?",
        answer: "Monthly for maintenance. Can be done more frequently for active concerns."
      },
      {
        question: "Does it hurt?",
        answer: "Minimal discomfort — mild warmth and some snapping sensation. Very tolerable."
      },
      {
        question: "What does it treat?",
        answer: "Dullness, large pores, oily skin, mild acne, uneven texture, early aging. Versatile treatment."
      }
    ],

    ctaText: "Get Instant Hollywood Glow",
    ctaDescription: "See the difference immediately. Carbon laser facial for radiant, refined skin. Book your appointment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="carbon-laser-facial-in-vadodara"
      content={content}
    />
  );
}
