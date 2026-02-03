import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Specialist Vadodara | Complete Care | ₹500",
  description: "🏆 Skin & hair specialist in Vadodara ✓ MD dermatologist ✓ All skin & hair problems ✓ Latest treatments ✓ 10,000+ patients. Consultation ₹500. Book today!",
  keywords: "skin and hair specialist vadodara, skin hair doctor vadodara, hair skin specialist, dermatologist near me",
};

export default function SkinHairSpecialistPage() {
  const content = {
    heroTitle: "Complete Skin & Hair Specialist in Vadodara",
    heroSubtitle: "Dual Expertise for Connected Problems",
    
    introContent: `Skin and hair are connected — they share biology, respond to similar hormones, and often suffer together. Many patients have both skin issues and hair problems. Seeing separate doctors for each creates fragmented care.

A specialist who handles both understands these connections. Acne treatment that affects hair, scalp conditions that cause skin symptoms elsewhere, hormonal issues that impact both — comprehensive expertise catches what narrow focus misses.

We've built practice around this integrated approach. Whether you come for skin concerns, hair problems, or both, you get care that considers the full picture. This holistic view often reveals solutions that isolated treatment overlooks.`,

    whyChooseUs: [
      "Integrated skin and hair expertise",
      "Understanding of connections between both",
      "Comprehensive evaluation",
      "Coordinated treatment plans",
      "No need for multiple specialists",
      "Complete care from one doctor"
    ],

    services: [
      {
        title: "Combined Assessment",
        description: "Evaluating skin and hair together reveals patterns that separate consultations miss."
      },
      {
        title: "Skin Disease Treatment",
        description: "Acne, pigmentation, allergies, infections, chronic conditions — complete skin care."
      },
      {
        title: "Hair Loss Management",
        description: "All types of hair loss addressed with appropriate medical or procedural treatments."
      },
      {
        title: "Scalp Conditions",
        description: "Where skin and hair concerns overlap — dandruff, psoriasis, dermatitis affecting both."
      },
      {
        title: "Hormonal Issues",
        description: "Hormones affect both skin and hair. Understanding this connection guides effective treatment."
      },
      {
        title: "Cosmetic Enhancement",
        description: "Looking good includes both clear skin and healthy hair. We address both aesthetically."
      }
    ],

    processSteps: [
      {
        title: "Complete History",
        description: "Understanding your skin and hair concerns together."
      },
      {
        title: "Comprehensive Examination",
        description: "Checking both skin and scalp/hair for full picture."
      },
      {
        title: "Integrated Diagnosis",
        description: "Identifying connections and underlying causes."
      },
      {
        title: "Coordinated Treatment",
        description: "Treatment plan that addresses both without conflicts."
      }
    ],

    faqItems: [
      {
        question: "Why see one specialist for both skin and hair?",
        answer: "They're related systems. Treatments for one can affect the other. A combined specialist prevents conflicting treatments and catches connected problems."
      },
      {
        question: "I have both acne and hair fall — are they connected?",
        answer: "Possibly — especially if hormonal. We'll evaluate both and check for common underlying causes."
      },
      {
        question: "My scalp is itchy and I'm losing hair — what's happening?",
        answer: "Scalp conditions can cause hair loss. We'll diagnose the scalp issue and address both problems together."
      },
      {
        question: "Will my acne treatment affect my hair?",
        answer: "Some medications do affect hair. We consider this when planning treatment and monitor for any effects."
      },
      {
        question: "Can you treat my whole family?",
        answer: "Yes, we see patients of all ages for skin and hair concerns. Family appointments can be convenient."
      }
    ],

    ctaText: "One Specialist, Complete Care",
    ctaDescription: "Don't split your care between doctors. Get integrated skin and hair expertise from one qualified specialist. Book your complete consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-and-hair-specialist-in-vadodara"
      content={content}
    />
  );
}
