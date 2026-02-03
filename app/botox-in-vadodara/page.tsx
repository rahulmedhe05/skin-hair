import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Botox Vadodara ₹8,000 | US FDA Approved | Book Now",
  description: "✨ Botox in Vadodara from ₹8,000/area ✓ US FDA approved ✓ Look 10 years younger ✓ No downtime ✓ Natural results by experts. Results in 3 days. Call!",
  keywords: "botox vadodara, botox treatment vadodara, wrinkle reduction botox, botox cost vadodara",
};

export default function BotoxPage() {
  const content = {
    heroTitle: "Botox in Vadodara",
    heroSubtitle: "Smooth Wrinkles, Look Refreshed",
    
    introContent: `Botox remains the gold standard for dynamic wrinkles — those lines that form from repeated facial movements. Forehead lines, crow's feet, frown lines — Botox relaxes the muscles creating them, smoothing the skin above.

The key to good Botox is subtlety. You should look refreshed, not frozen. Natural facial expressions should remain while wrinkles soften. This requires understanding facial anatomy and using appropriate doses.

We perform Botox with precision and restraint. Our approach focuses on natural results — you'll look like yourself, just more rested. The "worked on" look is not our goal.`,

    whyChooseUs: [
      "Natural-looking results",
      "Precise injection technique",
      "Appropriate dosing",
      "US FDA approved products",
      "Understanding of facial anatomy",
      "Conservative approach"
    ],

    services: [
      {
        title: "Forehead Lines",
        description: "Smoothing horizontal forehead wrinkles."
      },
      {
        title: "Frown Lines (11 Lines)",
        description: "Treating vertical lines between eyebrows."
      },
      {
        title: "Crow's Feet",
        description: "Softening lines around the eyes."
      },
      {
        title: "Bunny Lines",
        description: "Treating lines on the nose."
      },
      {
        title: "Brow Lift",
        description: "Subtle brow elevation with strategic Botox."
      },
      {
        title: "Jawline Slimming",
        description: "Masseter Botox for a softer jawline."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Discussing your concerns and goals."
      },
      {
        title: "Assessment",
        description: "Evaluating your facial muscles and expressions."
      },
      {
        title: "Injection",
        description: "Precise placement with fine needles — quick procedure."
      },
      {
        title: "Results",
        description: "Effect develops over 3-7 days, lasts 3-4 months."
      }
    ],

    faqItems: [
      {
        question: "Will I look frozen?",
        answer: "Not with proper technique and dosing. We aim for natural — softened wrinkles with preserved expression."
      },
      {
        question: "How long does Botox last?",
        answer: "3-4 months typically. With regular treatment, some find it lasts longer over time."
      },
      {
        question: "Is it painful?",
        answer: "Minimal — fine needles make it quite tolerable. Most describe it as slight pinching."
      },
      {
        question: "When will I see results?",
        answer: "Starts working in 2-3 days, full effect by 2 weeks. Not instant."
      },
      {
        question: "Is Botox safe?",
        answer: "Very safe when performed properly with approved products. Used medically for decades."
      }
    ],

    ctaText: "Smooth Your Wrinkles with Botox",
    ctaDescription: "Natural-looking wrinkle reduction from expert hands. Look refreshed, not overdone. Book your Botox consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="botox-in-vadodara"
      content={content}
    />
  );
}
