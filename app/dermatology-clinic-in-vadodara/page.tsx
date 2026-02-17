import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Dermatology Clinic Vadodara | Advanced Care | ₹500",
  description: "🏆 Dermatology clinic in Vadodara ✓ US FDA approved tech ✓ MD specialists ✓ All skin & hair problems ✓ 10,000+ patients. Consultation ₹500. Visit today!",
  keywords: "dermatology clinic vadodara, skin clinic vadodara, dermatology center vadodara, dermatology clinic near me",
};

export default function DermatologyClinicPage() {
  const content = {
    heroTitle: "Dermatology Clinic in Vadodara",
    heroSubtitle: "Where Skin Science Meets Care",
    
    introContent: `Dermatology is the medical specialty dealing with skin, hair, and nails. A dermatology clinic brings this specialized expertise to diagnose and treat conditions that general practitioners may not fully understand.

Skin conditions are often complex — what looks like one thing may be another. Accurate diagnosis requires dermatological training and experience. Treatment follows from correct diagnosis, not guesswork.

Our dermatology clinic provides expert care for all skin, hair, and nail conditions. From common problems to rare disorders, medical issues to cosmetic concerns, we offer comprehensive dermatological services.`,

    whyChooseUs: [
      "Specialized dermatology expertise",
      "Accurate diagnosis",
      "Evidence-based treatment",
      "Full spectrum of services",
      "Qualified dermatologists",
      "Modern treatment options"
    ],

    services: [
      {
        title: "Skin Disease Treatment",
        description: "All skin conditions — eczema, psoriasis, infections, allergies."
      },
      {
        title: "Acne & Scar Treatment",
        description: "Comprehensive acne management and scar correction."
      },
      {
        title: "Pigmentation Disorders",
        description: "Melasma, vitiligo, and other pigmentation issues."
      },
      {
        title: "Hair Disorders",
        description: "Hair loss, scalp conditions, and hair restoration."
      },
      {
        title: "Nail Problems",
        description: "Nail infections, deformities, and disorders."
      },
      {
        title: "Cosmetic Dermatology",
        description: "Aesthetic treatments for enhanced appearance."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Meeting with dermatologist to discuss your concerns."
      },
      {
        title: "Examination",
        description: "Thorough examination of your skin condition."
      },
      {
        title: "Diagnosis",
        description: "Accurate identification of your condition."
      },
      {
        title: "Treatment Plan",
        description: "Customized treatment for your specific situation."
      }
    ],

    faqItems: [
      {
        question: "What conditions do dermatologists treat?",
        answer: "All skin diseases, hair disorders, nail problems, and cosmetic skin concerns. From acne to rare skin diseases."
      },
      {
        question: "Do I need a referral?",
        answer: "No — you can consult directly for any skin, hair, or nail concern."
      },
      {
        question: "How is a dermatologist different from a skin specialist?",
        answer: "Same thing — dermatologist is the medical term. Look for MD Dermatology or equivalent qualification."
      },
      {
        question: "What should I bring to my appointment?",
        answer: "List of current medications, previous treatment records if any, and note of how long you've had the problem."
      },
      {
        question: "Do you treat children?",
        answer: "Yes — pediatric skin conditions are part of dermatology. Children can be seen for any skin issue."
      }
    ],

    ctaText: "Consult Expert Dermatologists",
    ctaDescription: "Specialized skin care from qualified dermatologists. Accurate diagnosis, effective treatment. Book your appointment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="dermatology-clinic-in-vadodara"
      content={content}
    />
  );
}
