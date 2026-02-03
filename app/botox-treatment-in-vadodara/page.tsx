import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Botox in Vadodara ₹8,000 | US FDA Approved | Book Now",
  description: "✨ Botox treatment in Vadodara from ₹8,000/area ✓ US FDA approved ✓ Natural results ✓ No downtime ✓ Expert injectors. Look 10 years younger. Call now!",
  keywords: "botox vadodara, botox treatment vadodara, botox for wrinkles vadodara, botox cost vadodara",
};

export default function BotoxTreatmentPage() {
  const content = {
    heroTitle: "Botox Treatment in Vadodara",
    heroSubtitle: "Natural-Looking Wrinkle Reduction",
    
    introContent: `Botox is one of the most studied and proven cosmetic treatments worldwide. When injected correctly, it relaxes the muscles that cause dynamic wrinkles — the lines that form when you frown, squint, or raise your eyebrows.

The key to good Botox is natural-looking results. You want to look refreshed, not frozen. This requires understanding facial anatomy, appropriate dosing, and precise injection technique. Overdone Botox is obvious; well-done Botox just makes you look rested.

We've performed hundreds of Botox treatments with a focus on subtle, natural results. Our patients look better but people can't quite figure out why. That's the goal — enhancement that doesn't announce itself.`,

    whyChooseUs: [
      "Natural-looking results priority",
      "Experienced injection technique",
      "Understanding of facial anatomy",
      "Appropriate conservative dosing",
      "Genuine branded products only",
      "Patient-centered approach"
    ],

    services: [
      {
        title: "Forehead Lines",
        description: "Smoothing horizontal forehead wrinkles while maintaining natural movement."
      },
      {
        title: "Frown Lines (11 Lines)",
        description: "The vertical lines between your eyebrows. Common first-time treatment area."
      },
      {
        title: "Crow's Feet",
        description: "Lines around the eyes that deepen when you smile."
      },
      {
        title: "Brow Lift",
        description: "Strategic placement to subtly lift and open the eye area."
      },
      {
        title: "Bunny Lines",
        description: "Lines on the nose that appear when scrunching."
      },
      {
        title: "Preventive Botox",
        description: "Starting early to prevent deep wrinkles from forming."
      }
    ],

    processSteps: [
      {
        title: "Facial Analysis",
        description: "Assessing your muscle movement patterns and discussing goals."
      },
      {
        title: "Treatment Planning",
        description: "Determining appropriate areas and conservative dosing."
      },
      {
        title: "Precise Injection",
        description: "Strategic placement for natural results. Quick procedure, minimal discomfort."
      },
      {
        title: "Follow-up",
        description: "Two-week check to assess results and touch-up if needed."
      }
    ],

    faqItems: [
      {
        question: "Will I look frozen?",
        answer: "Not with our approach. We prioritize natural movement over complete immobility. You should look refreshed, not expressionless."
      },
      {
        question: "How long does Botox last?",
        answer: "Typically 3-4 months. With regular treatments, some patients find it lasts longer over time."
      },
      {
        question: "Is Botox safe?",
        answer: "Extremely well-studied with decades of use. Temporary side effects like mild bruising are possible. Serious complications are very rare with proper technique."
      },
      {
        question: "When will I see results?",
        answer: "Effects appear gradually over 3-7 days, with full results at 2 weeks."
      },
      {
        question: "What's the ideal age to start Botox?",
        answer: "No fixed age. When you start seeing lines that bother you, that's when to consider it. Preventive Botox in late 20s-early 30s is increasingly popular."
      }
    ],

    ctaText: "Natural-Looking Botox Results",
    ctaDescription: "Look refreshed, not frozen. Expert Botox injection for subtle, natural wrinkle reduction. Book your Botox consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="botox-treatment-in-vadodara"
      content={content}
    />
  );
}
