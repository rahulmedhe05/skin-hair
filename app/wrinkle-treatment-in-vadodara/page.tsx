import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Wrinkle Treatment Vadodara | Look 10 Years Younger | Book",
  description: "✨ Wrinkle treatment in Vadodara ✓ Botox + fillers + laser ✓ Look 10 years younger ✓ Natural results ✓ No surgery. Starting ₹8,000. Book consultation!",
  keywords: "wrinkle treatment vadodara, anti wrinkle treatment vadodara, wrinkle removal cost, wrinkle treatment near me",
};

export default function WrinkleTreatmentPage() {
  const content = {
    heroTitle: "Wrinkle Treatment in Vadodara",
    heroSubtitle: "Smooth Away the Years",
    
    introContent: `Wrinkles tell stories, but you don't have to broadcast every chapter. Modern wrinkle treatments can smooth and soften lines while maintaining natural expression — looking refreshed rather than "done."

Different wrinkles need different approaches. Dynamic wrinkles from muscle movement respond to Botox. Static wrinkles from volume loss and skin aging respond to fillers, lasers, and skin treatments. Often, combination approaches work best.

We assess your wrinkle types and recommend appropriate treatments. The goal is improvement that looks natural — you'll look like yourself, just more rested and youthful.`,

    whyChooseUs: [
      "Multiple treatment options",
      "Understanding different wrinkle types",
      "Natural-looking results",
      "Combination approaches",
      "Progressive improvement",
      "Maintenance planning"
    ],

    services: [
      {
        title: "Botox for Dynamic Wrinkles",
        description: "Relaxing muscles that create expression lines."
      },
      {
        title: "Fillers for Deep Lines",
        description: "Plumping static wrinkles and folds."
      },
      {
        title: "Laser Resurfacing",
        description: "Stimulating collagen to smooth skin texture."
      },
      {
        title: "Microneedling",
        description: "Collagen induction for fine lines."
      },
      {
        title: "Chemical Peels",
        description: "Skin renewal for surface wrinkles."
      },
      {
        title: "Combination Protocols",
        description: "Multiple treatments for comprehensive improvement."
      }
    ],

    processSteps: [
      {
        title: "Wrinkle Assessment",
        description: "Evaluating types and depth of your wrinkles."
      },
      {
        title: "Treatment Planning",
        description: "Recommending appropriate treatments for your concerns."
      },
      {
        title: "Treatment",
        description: "Performing chosen wrinkle treatments."
      },
      {
        title: "Maintenance",
        description: "Long-term plan to maintain improvement."
      }
    ],

    faqItems: [
      {
        question: "What's the best treatment for wrinkles?",
        answer: "Depends on wrinkle type. Expression lines — Botox. Deep folds — fillers. Overall texture — lasers. Often combination is best."
      },
      {
        question: "Can wrinkles be completely removed?",
        answer: "Significantly improved, yes. Completely gone like they never existed, often not. We set realistic expectations."
      },
      {
        question: "At what age should I start treating wrinkles?",
        answer: "When they start bothering you. Some start preventively in late 20s, others wait until 40s+. Personal choice."
      },
      {
        question: "Are anti-wrinkle treatments safe?",
        answer: "When performed properly with appropriate products, yes. We use only safe, approved treatments."
      },
      {
        question: "How long do results last?",
        answer: "Varies by treatment — Botox 3-4 months, fillers 6-18 months, laser results longer. Maintenance keeps you looking good."
      }
    ],

    ctaText: "Smooth Your Wrinkles Effectively",
    ctaDescription: "Look younger, naturally. Expert wrinkle treatment tailored to your needs. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="wrinkle-treatment-in-vadodara"
      content={content}
    />
  );
}
