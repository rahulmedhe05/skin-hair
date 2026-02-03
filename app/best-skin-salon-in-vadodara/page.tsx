import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Skin Salon Vadodara | Premium Facials | ₹1,500",
  description: "✨ Best skin salon in Vadodara ✓ Premium facials ✓ Advanced treatments ✓ Expert aestheticians ✓ Glowing skin guaranteed. Starting ₹1,500. Book now!",
  keywords: "best skin salon vadodara, skin salon vadodara, facial salon vadodara, skin salon near me",
};

export default function BestSkinSalonPage() {
  const content = {
    heroTitle: "Best Skin Salon in Vadodara",
    heroSubtitle: "Premium Skin Care Services",
    
    introContent: `A skin salon should deliver more than relaxation — it should provide visible skin improvement. Professional facials and treatments that make a real difference to how your skin looks and feels.

We combine salon services with skin science. Understanding skin types, conditions, and what treatments actually work means you get results, not just a pleasant experience. Though you get that too.

Our skin services range from regular maintenance facials to advanced treatments. Whatever your skin needs — hydration, brightening, anti-aging, acne control — we have appropriate solutions.`,

    whyChooseUs: [
      "Results-focused treatments",
      "Skin science understanding",
      "Range of service levels",
      "Quality products",
      "Professional aestheticians",
      "Customized care"
    ],

    services: [
      {
        title: "Signature Facials",
        description: "Customized facials based on your skin needs."
      },
      {
        title: "Advanced Facials",
        description: "HydraFacial, medi-facials, and technology-based treatments."
      },
      {
        title: "Skin Brightening",
        description: "Treatments for dull skin, tan removal, and radiance."
      },
      {
        title: "Anti-Aging Services",
        description: "Facials targeting fine lines, firmness, and skin aging."
      },
      {
        title: "Acne Facials",
        description: "Specialized treatments for acne-prone skin."
      },
      {
        title: "Body Skin Care",
        description: "Polishing, treatments for body skin concerns."
      }
    ],

    processSteps: [
      {
        title: "Skin Analysis",
        description: "Assessing your skin type, concerns, and goals."
      },
      {
        title: "Treatment Selection",
        description: "Recommending the right facial or treatment for you."
      },
      {
        title: "Professional Treatment",
        description: "Relaxing treatment with quality products."
      },
      {
        title: "Results & Recommendations",
        description: "Post-treatment care and next steps advice."
      }
    ],

    faqItems: [
      {
        question: "How often should I get a facial?",
        answer: "Monthly for maintenance. More frequently for specific concerns or before events."
      },
      {
        question: "Which facial is right for me?",
        answer: "Depends on your skin type and concerns. We assess and recommend during consultation."
      },
      {
        question: "Are facials just pampering or do they help?",
        answer: "Professional facials provide real skin benefits — deep cleansing, exfoliation, hydration that home care can't match."
      },
      {
        question: "What's the difference between regular and medi-facial?",
        answer: "Medi-facials use clinical-grade products and techniques for enhanced results. More intensive than regular facials."
      },
      {
        question: "Can I get a facial if I have sensitive skin?",
        answer: "Yes — we customize for sensitive skin using appropriate products and techniques."
      }
    ],

    ctaText: "Experience Premium Skin Care",
    ctaDescription: "Skin services that deliver results. Professional care for beautiful skin. Book your facial today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="best-skin-salon-in-vadodara"
      content={content}
    />
  );
}
