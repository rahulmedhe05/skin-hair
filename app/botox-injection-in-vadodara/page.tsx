import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Botox Injection Vadodara ₹8,000 | US FDA Approved | Book",
  description: "✨ Botox injection in Vadodara from ₹8,000 ✓ US FDA approved ✓ Certified injectors ✓ Natural results ✓ Wrinkle-free in 3 days. Expert care. Book now!",
  keywords: "botox injection vadodara, botox doctor vadodara, botox injection cost vadodara, botox near me",
};

export default function BotoxInjectionPage() {
  const content = {
    heroTitle: "Botox Injection in Vadodara",
    heroSubtitle: "Expert Injections, Natural Results",
    
    introContent: `Botox injection requires precision — knowing exactly where to place it, how deep, and how much. The same product in different hands produces very different results. Expertise matters.

We use only US FDA approved botulinum toxin products, ensuring safety and efficacy. Combined with trained injection technique and understanding of facial dynamics, we deliver consistent, natural-looking results.

Whether this is your first Botox or you're looking for better results than you've had elsewhere, our focus on precision and natural appearance means you can trust the outcome.`,

    whyChooseUs: [
      "Certified, trained doctors",
      "US FDA approved products",
      "Precise injection technique",
      "Natural results focus",
      "Safe procedures",
      "Consistent outcomes"
    ],

    services: [
      {
        title: "Anti-Wrinkle Injections",
        description: "Treating expression lines on forehead, eyes, and between brows."
      },
      {
        title: "Preventive Botox",
        description: "Starting early to prevent deep wrinkle formation."
      },
      {
        title: "Facial Contouring",
        description: "Masseter and other areas for facial shaping."
      },
      {
        title: "Hyperhidrosis Treatment",
        description: "Botox for excessive sweating."
      },
      {
        title: "Neck Bands",
        description: "Treating platysmal bands on the neck."
      },
      {
        title: "Gummy Smile Correction",
        description: "Reducing excessive gum show when smiling."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Understanding your goals and assessing your face."
      },
      {
        title: "Planning",
        description: "Determining injection points and doses."
      },
      {
        title: "Injection",
        description: "Quick, precise injections — 10-15 minutes total."
      },
      {
        title: "Follow-up",
        description: "Review at 2 weeks, touch-up if needed."
      }
    ],

    faqItems: [
      {
        question: "How do I know you use genuine Botox?",
        answer: "We use only FDA-approved products from authorized distributors. You can see the product and verify authenticity."
      },
      {
        question: "What if I don't like the result?",
        answer: "Botox wears off in 3-4 months. Also, touch-ups at 2 weeks can refine results if needed."
      },
      {
        question: "Can I go to work after?",
        answer: "Yes — there's virtually no downtime. Small injection marks fade quickly. Avoid rubbing the area."
      },
      {
        question: "At what age should I start Botox?",
        answer: "When wrinkles start bothering you. Some start in late 20s preventively, others wait until 40s. Personal choice."
      },
      {
        question: "Are there side effects?",
        answer: "Possible bruising, mild headache, and rare temporary eyelid heaviness. Serious side effects very rare with proper technique."
      }
    ],

    ctaText: "Get Professional Botox Injections",
    ctaDescription: "Expert technique with FDA-approved products. Safe, effective, natural results. Book your appointment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="botox-injection-in-vadodara"
      content={content}
    />
  );
}
