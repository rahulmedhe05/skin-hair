import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "HydraFacial Vadodara ₹3,500 | Instant Glow | Book Now",
  description: "✨ HydraFacial in Vadodara ₹3,500 ✓ Instant glow ✓ Deep cleansing ✓ Zero downtime ✓ Celebrity favorite facial. Perfect for parties & events. Book today!",
  keywords: "hydrafacial vadodara, hydrafacial treatment vadodara, hydrafacial cost vadodara, hydrafacial near me",
};

export default function HydraFacialPage() {
  const content = {
    heroTitle: "HydraFacial Treatment in Vadodara",
    heroSubtitle: "The World's Favorite Facial Experience",
    
    introContent: `HydraFacial has become the most popular facial treatment worldwide for good reason — it delivers immediate visible results with zero downtime. You walk out with genuinely glowing skin, not just temporary improvement.

The treatment combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one session. Patented vortex technology deeply cleans pores while infusing nourishing serums. It's satisfying to do and satisfying to see.

We offer authentic HydraFacial treatment using genuine equipment and products. The experience and results depend on using the real thing, not imitations. Our trained technicians know how to customize treatment for maximum benefit.`,

    whyChooseUs: [
      "Genuine HydraFacial equipment and products",
      "Trained, experienced technicians",
      "Customized treatment protocols",
      "Immediate visible results",
      "No downtime whatsoever",
      "Suitable for all skin types"
    ],

    services: [
      {
        title: "Signature HydraFacial",
        description: "The classic treatment — cleanse, peel, extract, hydrate, protect. Immediate glow."
      },
      {
        title: "HydraFacial Deluxe",
        description: "Extended treatment with additional boosters targeted to your specific concerns."
      },
      {
        title: "HydraFacial for Acne",
        description: "Modified protocol focusing on clearing and preventing breakouts."
      },
      {
        title: "HydraFacial for Aging",
        description: "Enhanced with anti-aging boosters and peptides for mature skin."
      },
      {
        title: "HydraFacial for Pigmentation",
        description: "Brightening focus to address uneven tone and discoloration."
      },
      {
        title: "Regular Maintenance",
        description: "Monthly HydraFacials for consistently healthy, glowing skin."
      }
    ],

    processSteps: [
      {
        title: "Skin Analysis",
        description: "Assessing your skin to customize the treatment protocol."
      },
      {
        title: "Deep Cleansing",
        description: "Vortex technology gently removes debris and dead skin."
      },
      {
        title: "Extraction & Hydration",
        description: "Painless extraction combined with nourishing serum infusion."
      },
      {
        title: "Protection & Glow",
        description: "Antioxidant and peptide protection. Walk out glowing."
      }
    ],

    faqItems: [
      {
        question: "What makes HydraFacial different from regular facials?",
        answer: "Patented technology that combines multiple steps with consistent, controlled delivery. Better cleansing, better extraction, better infusion than manual techniques."
      },
      {
        question: "How soon will I see results?",
        answer: "Immediately. Your skin will look visibly better the moment treatment ends. Great for before events."
      },
      {
        question: "Is there any downtime?",
        answer: "None. Some mild redness fades within an hour. You can apply makeup and continue your day immediately."
      },
      {
        question: "How often should I get HydraFacial?",
        answer: "Monthly for optimal ongoing results. Every 4-6 weeks maintains that healthy glow."
      },
      {
        question: "Is it suitable for sensitive skin?",
        answer: "Yes, actually excellent for sensitive skin. The gentle vacuum technology is less irritating than manual extraction."
      }
    ],

    ctaText: "Experience the HydraFacial Difference",
    ctaDescription: "See why millions love HydraFacial. Immediate results, no downtime, genuine glow. Book your authentic HydraFacial treatment today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hydrafacial-in-vadodara"
      content={content}
    />
  );
}
