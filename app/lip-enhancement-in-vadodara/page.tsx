import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Lip Enhancement Vadodara ₹15,000 | Fuller Lips | Book",
  description: "💋 Lip enhancement in Vadodara ₹15,000 ✓ Natural-looking fuller lips ✓ Hyaluronic fillers ✓ Lasts 8-12 months ✓ Expert injectors. Book consultation today!",
  keywords: "lip enhancement vadodara, lip fillers vadodara, lip augmentation cost vadodara, fuller lips near me",
};

export default function LipEnhancementPage() {
  const content = {
    heroTitle: "Lip Enhancement in Vadodara",
    heroSubtitle: "Beautiful Lips, Natural Results",
    
    introContent: `Lips are central to facial attractiveness. Thin lips, asymmetry, or lack of definition can affect confidence. Modern lip enhancement offers everything from subtle refinement to more noticeable augmentation.

Hyaluronic acid fillers are the standard for lip enhancement — safe, reversible, and natural-feeling. The key is understanding lip aesthetics and patient preferences. Some want barely noticeable improvement; others want more dramatic change.

We approach lip enhancement artistically, understanding proportions, balance, and what suits each individual face. The goal is lips that look beautiful and natural — not obviously filled.`,

    whyChooseUs: [
      "Artistic approach to lip aesthetics",
      "Natural-looking results",
      "Understanding of proportions",
      "Customized to your face",
      "Range from subtle to dramatic",
      "Safe, reversible products"
    ],

    services: [
      {
        title: "Lip Volume Enhancement",
        description: "Adding fullness to thin lips for a plumper appearance."
      },
      {
        title: "Lip Shape Refinement",
        description: "Improving lip shape, definition, and symmetry."
      },
      {
        title: "Border Definition",
        description: "Enhancing lip borders for more defined, polished look."
      },
      {
        title: "Cupid's Bow Enhancement",
        description: "Defining the cupid's bow for elegant upper lip."
      },
      {
        title: "Asymmetry Correction",
        description: "Balancing uneven lips for symmetry."
      },
      {
        title: "Natural Lip Refresh",
        description: "Subtle enhancement to restore youthful lip appearance."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Understanding your goals and assessing what will suit your face."
      },
      {
        title: "Treatment Planning",
        description: "Deciding on approach — amount, technique, areas to enhance."
      },
      {
        title: "Enhancement Procedure",
        description: "Careful injection for smooth, natural-looking result."
      },
      {
        title: "Result Assessment",
        description: "Evaluating outcome, refinements if needed."
      }
    ],

    faqItems: [
      {
        question: "How long do lip fillers last?",
        answer: "6-12 months typically. Lips move a lot, breaking down filler faster than other areas. Touch-ups maintain results."
      },
      {
        question: "Will it look natural?",
        answer: "When done properly, yes. The key is not overdoing it and respecting your natural lip shape and facial proportions."
      },
      {
        question: "Is it painful?",
        answer: "Lips are sensitive, but we use numbing cream and products with lidocaine. Discomfort is manageable."
      },
      {
        question: "What if I don't like the result?",
        answer: "Hyaluronic acid fillers are reversible — they can be dissolved if needed. This safety feature is why we prefer them."
      },
      {
        question: "How much filler do I need?",
        answer: "Depends on your starting point and goals. Often 0.5-1ml for subtle enhancement, more for dramatic change. We advise conservatively."
      }
    ],

    ctaText: "Enhance Your Lips Beautifully",
    ctaDescription: "Get the lips you've wanted — fuller, shapelier, more defined. Natural results tailored to your face. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="lip-enhancement-in-vadodara"
      content={content}
    />
  );
}
