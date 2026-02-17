import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Dermatologist in Vadodara | Top Rated | ₹500",
  description: "🏆 Best dermatologist in Vadodara ✓ MD certified ✓ 15+ years experience ✓ 10,000+ patients treated ✓ 4.9★ rating. Consultation ₹500. Book today!",
  keywords: "best dermatologist vadodara, top skin doctor vadodara, best skin specialist vadodara, dermatologist near me",
};

export default function BestDermatologistPage() {
  const content = {
    heroTitle: "Best Dermatologist in Vadodara",
    heroSubtitle: "Expert Skin Care You Can Trust",
    
    introContent: `Finding the right dermatologist matters. Your skin is visible to the world — any treatment affects how you look and feel. You need someone with genuine expertise, accurate diagnosis, and effective treatment.

A good dermatologist combines medical knowledge with clinical experience. Recognizing conditions correctly, understanding nuances, staying updated with advances, and most importantly — getting results for patients.

We pride ourselves on diagnostic accuracy and treatment effectiveness. Whether your concern is medical or cosmetic, common or complex, we approach it with expertise and commitment to your satisfaction.`,

    whyChooseUs: [
      "Accurate diagnosis",
      "Effective treatment",
      "Both medical and cosmetic expertise",
      "Updated with latest advances",
      "Patient satisfaction focus",
      "Comprehensive care"
    ],

    services: [
      {
        title: "Medical Dermatology",
        description: "Treating all skin diseases and conditions."
      },
      {
        title: "Cosmetic Dermatology",
        description: "Aesthetic treatments for enhanced appearance."
      },
      {
        title: "Hair Disorders",
        description: "Complete care for hair loss and scalp conditions."
      },
      {
        title: "Nail Problems",
        description: "Treatment for nail infections and disorders."
      },
      {
        title: "Laser Treatments",
        description: "Advanced laser therapies for various conditions."
      },
      {
        title: "Skin Surgery",
        description: "Minor skin procedures and excisions."
      }
    ],

    processSteps: [
      {
        title: "Thorough Consultation",
        description: "Understanding your concerns and examining carefully."
      },
      {
        title: "Accurate Diagnosis",
        description: "Identifying your condition correctly — the foundation of effective treatment."
      },
      {
        title: "Effective Treatment",
        description: "Providing treatment that works for your specific situation."
      },
      {
        title: "Follow-up Care",
        description: "Ensuring results and addressing any ongoing needs."
      }
    ],

    faqItems: [
      {
        question: "What makes a dermatologist 'the best'?",
        answer: "Accurate diagnosis, effective treatment, good communication, and patient satisfaction. We focus on these fundamentals."
      },
      {
        question: "What conditions do you treat?",
        answer: "All skin, hair, and nail conditions — from common problems like acne and eczema to complex disorders to cosmetic concerns."
      },
      {
        question: "Do I need a referral to see a dermatologist?",
        answer: "No referral needed. You can book directly for any skin, hair, or nail concern."
      },
      {
        question: "How is consultation conducted?",
        answer: "We listen to your concerns, examine thoroughly, explain the diagnosis clearly, and discuss treatment options."
      },
      {
        question: "What if my condition is complex?",
        answer: "We have expertise in complex dermatological conditions. If needed, we coordinate with other specialists."
      }
    ],

    ctaText: "Consult Vadodara's Trusted Dermatologist",
    ctaDescription: "Expert care for all skin concerns. Accurate diagnosis, effective treatment. Book your consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="best-dermatologist-in-vadodara"
      content={content}
    />
  );
}
