import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Lip Fillers Vadodara ₹15,000 | Natural Fuller Lips | Book",
  description: "💋 Lip fillers in Vadodara ₹15,000 ✓ Hyaluronic acid ✓ Natural-looking results ✓ Lasts 8-12 months ✓ Expert injectors. Get plump, beautiful lips. Book now!",
  keywords: "lip fillers vadodara, lip augmentation vadodara, lip filler cost vadodara, lip enhancement near me",
};

export default function LipFillersPage() {
  const content = {
    heroTitle: "Lip Fillers in Vadodara",
    heroSubtitle: "Fuller, Shapelier Lips Naturally",
    
    introContent: `Lips are central to facial beauty, and lip fillers offer a safe, reversible way to enhance them. Whether you want subtle fullness, better definition, or correction of asymmetry, hyaluronic acid fillers provide natural-feeling results.

Good lip enhancement respects your natural proportions. Overfilling creates the "duck lip" look everyone wants to avoid. We focus on enhancement that looks beautiful and natural — lips that suit your face.

We use premium hyaluronic acid fillers for lip enhancement, with technique focused on natural appearance. Your lips will look enhanced but not obviously filled — beautiful, not overdone.`,

    whyChooseUs: [
      "Natural-looking results",
      "Proportional enhancement",
      "Premium HA fillers",
      "Reversible treatment",
      "Artistic approach",
      "Conservative start"
    ],

    services: [
      {
        title: "Lip Volume Enhancement",
        description: "Adding fullness to naturally thin lips."
      },
      {
        title: "Lip Definition",
        description: "Enhancing lip borders and shape."
      },
      {
        title: "Cupid's Bow Enhancement",
        description: "Defining the upper lip's cupid's bow."
      },
      {
        title: "Asymmetry Correction",
        description: "Balancing uneven lips."
      },
      {
        title: "Lip Line Smoothing",
        description: "Treating smoker's lines around lips."
      },
      {
        title: "Natural Lip Refresh",
        description: "Subtle enhancement for aging lips."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Discussing what you want and what will suit you."
      },
      {
        title: "Planning",
        description: "Determining how much and where to inject."
      },
      {
        title: "Treatment",
        description: "Careful injection with numbing for comfort."
      },
      {
        title: "Results",
        description: "Immediate results with mild swelling settling in days."
      }
    ],

    faqItems: [
      {
        question: "Will lip fillers look natural?",
        answer: "With proper technique and conservative amounts, yes. Overfilling looks unnatural — we avoid that."
      },
      {
        question: "How much filler do I need?",
        answer: "Usually 0.5-1ml for natural enhancement. We recommend starting conservative — you can add more later."
      },
      {
        question: "How long do lip fillers last?",
        answer: "6-12 months. Lips move a lot, so filler breaks down faster here than other areas."
      },
      {
        question: "Is it painful?",
        answer: "We use numbing cream and fillers with built-in anesthetic. Tolerable discomfort."
      },
      {
        question: "What if I don't like the result?",
        answer: "HA fillers are reversible — they can be dissolved if needed. This safety feature is valuable."
      }
    ],

    ctaText: "Enhance Your Lips Beautifully",
    ctaDescription: "Natural lip enhancement from expert hands. Fuller, shapelier lips that look like you. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="lip-fillers-in-vadodara"
      content={content}
    />
  );
}
