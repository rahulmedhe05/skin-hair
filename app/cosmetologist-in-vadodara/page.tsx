import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Cosmetologist Vadodara | Anti-Aging Expert | ₹500",
  description: "✨ Best cosmetologist in Vadodara ✓ Botox, fillers, laser expert ✓ 15+ years experience ✓ Natural results ✓ 4.9★ rated. Consultation ₹500. Book now!",
  keywords: "cosmetologist vadodara, cosmetic dermatologist vadodara, aesthetic doctor vadodara, cosmetologist near me",
};

export default function CosmetologistPage() {
  const content = {
    heroTitle: "Cosmetologist in Vadodara",
    heroSubtitle: "Expert Cosmetic Dermatology",
    
    introContent: `A cosmetologist specializes in enhancing your appearance — combining medical knowledge with aesthetic understanding. It's about looking your best version, naturally refreshed and confident.

Cosmetic dermatology has advanced tremendously. Anti-aging treatments, skin rejuvenation, contouring, enhancement — all can be done with minimal downtime and natural results. The key is choosing an expert who understands both the science and the art.

We offer comprehensive cosmetic services with expertise and artistry. Understanding what each patient wants, what will suit their features, and what's realistically achievable. The goal is enhancement, not alteration.`,

    whyChooseUs: [
      "Medical expertise combined with aesthetic sense",
      "Full range of cosmetic services",
      "Natural-looking enhancement",
      "Individualized approach",
      "Advanced techniques",
      "Honest consultation"
    ],

    services: [
      {
        title: "Anti-Aging Treatments",
        description: "Botox, fillers, and skin tightening for youthful appearance."
      },
      {
        title: "Skin Rejuvenation",
        description: "Facials, peels, lasers to improve skin quality."
      },
      {
        title: "Facial Contouring",
        description: "Enhancing facial shape and features non-surgically."
      },
      {
        title: "Scar & Blemish Treatment",
        description: "Addressing acne scars, marks, and skin imperfections."
      },
      {
        title: "Hair Restoration",
        description: "PRP, GFC, and transplant for hair concerns."
      },
      {
        title: "Body Treatments",
        description: "Aesthetic treatments for body concerns."
      }
    ],

    processSteps: [
      {
        title: "Aesthetic Consultation",
        description: "Understanding your concerns, goals, and what you want to achieve."
      },
      {
        title: "Assessment",
        description: "Evaluating your features and what enhancements would suit you."
      },
      {
        title: "Treatment Planning",
        description: "Creating a comprehensive plan addressing your goals."
      },
      {
        title: "Treatment & Follow-up",
        description: "Performing treatments and ensuring satisfaction."
      }
    ],

    faqItems: [
      {
        question: "What's the difference between a dermatologist and cosmetologist?",
        answer: "Dermatology focuses on skin diseases; cosmetic dermatology focuses on aesthetic improvement. We offer both — treating conditions and enhancing appearance."
      },
      {
        question: "Will cosmetic treatments look obvious?",
        answer: "Good cosmetic work looks natural — people notice you look great, not that you had something done. We aim for enhancement, not transformation."
      },
      {
        question: "At what age should I start cosmetic treatments?",
        answer: "Prevention can start in late 20s. Treatment needs vary by age. We recommend appropriate interventions for your age and concerns."
      },
      {
        question: "Are cosmetic treatments safe?",
        answer: "When performed by qualified professionals using proper products, yes. We use only approved products with established safety profiles."
      },
      {
        question: "How do I know what I need?",
        answer: "That's what consultation is for. We assess, discuss, and recommend what would give you the improvement you're looking for."
      }
    ],

    ctaText: "Enhance Your Appearance with Expert Care",
    ctaDescription: "Look your best version. Expert cosmetic dermatology with natural results. Book your aesthetic consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="cosmetologist-in-vadodara"
      content={content}
    />
  );
}
