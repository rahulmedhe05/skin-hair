import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Carbon Peel Vadodara ₹2,500 | Hollywood Glow | Book Now",
  description: "✨ Carbon peel in Vadodara ₹2,500 ✓ Hollywood peel ✓ Instant glow ✓ Pore minimizing ✓ No downtime ✓ Perfect for events. Celebrity favorite. Book now!",
  keywords: "carbon peel vadodara, carbon laser facial vadodara, hollywood peel vadodara, carbon peel cost",
};

export default function CarbonPeelPage() {
  const content = {
    heroTitle: "Carbon Peel in Vadodara",
    heroSubtitle: "The Hollywood Glow Treatment",
    
    introContent: `Carbon peel — also called the Hollywood Peel or Charcoal Laser — delivers instant radiance with virtually no downtime. It's why celebrities get it before red carpet events. Walk in dull, walk out glowing.

The treatment involves applying liquid carbon to your face, letting it penetrate pores, then using laser to blast it away. The laser vaporizes the carbon along with dead skin, debris, and impurities, while stimulating collagen production.

We offer carbon peel as a standalone treatment or combined with other procedures. It's perfect before events, as ongoing skin maintenance, or as part of comprehensive skin improvement programs.`,

    whyChooseUs: [
      "Quality carbon application",
      "Precise laser technique",
      "No downtime treatment",
      "Immediate results",
      "Suitable for most skin types",
      "Combination with other treatments"
    ],

    services: [
      {
        title: "Classic Carbon Peel",
        description: "Full face carbon laser treatment for instant glow."
      },
      {
        title: "Pore Minimization Focus",
        description: "Targeting enlarged pores with carbon peel technique."
      },
      {
        title: "Oily Skin Treatment",
        description: "Carbon peel particularly effective for oily, congested skin."
      },
      {
        title: "Pre-Event Glow",
        description: "Timing treatment before special occasions for maximum radiance."
      },
      {
        title: "Combination Protocols",
        description: "Carbon peel combined with other treatments for enhanced results."
      },
      {
        title: "Maintenance Program",
        description: "Regular carbon peel sessions for ongoing skin quality."
      }
    ],

    processSteps: [
      {
        title: "Cleansing",
        description: "Thoroughly cleaning face before treatment."
      },
      {
        title: "Carbon Application",
        description: "Applying liquid carbon, allowing it to penetrate pores."
      },
      {
        title: "Laser Treatment",
        description: "Q-switched laser passes to vaporize carbon and treat skin."
      },
      {
        title: "Immediate Glow",
        description: "Post-treatment — visibly smoother, brighter skin immediately."
      }
    ],

    faqItems: [
      {
        question: "When will I see results?",
        answer: "Immediately — you'll notice brighter, smoother skin right after treatment. It's why it's perfect before events."
      },
      {
        question: "Is there any downtime?",
        answer: "Virtually none. Mild redness for an hour or two. You can apply makeup and continue your day."
      },
      {
        question: "How often should I get carbon peel?",
        answer: "For maintenance, monthly treatments are ideal. As preparation for events, 1-2 days before."
      },
      {
        question: "Is it suitable for all skin types?",
        answer: "Yes — carbon peel is safe for most skin types and tones when performed correctly."
      },
      {
        question: "What does carbon peel treat?",
        answer: "Dullness, large pores, oily skin, mild acne, uneven texture, and early signs of aging."
      }
    ],

    ctaText: "Get the Hollywood Glow",
    ctaDescription: "Instant radiance with no downtime. Perfect before events or as regular maintenance. Book your carbon peel today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="carbon-peel-in-vadodara"
      content={content}
    />
  );
}
