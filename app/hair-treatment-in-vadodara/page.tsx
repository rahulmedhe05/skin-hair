import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Treatment Vadodara | All Hair Solutions | ₹500",
  description: "💇 Complete hair treatment in Vadodara ✓ Hair fall, dandruff, damage ✓ PRP, GFC, keratin ✓ All hair problems solved ✓ 8,000+ patients. Consult ₹500!",
  keywords: "hair treatment vadodara, hair care treatment vadodara, best hair treatment, hair treatment near me",
};

export default function HairTreatmentPage() {
  const content = {
    heroTitle: "Hair Treatment in Vadodara",
    heroSubtitle: "Complete Solutions for All Hair Problems",
    
    introContent: `Hair problems come in many forms — loss, thinning, damage, scalp issues, premature graying, dryness. Each needs specific treatment. We provide comprehensive hair treatment addressing whatever issue is affecting your hair.

Healthy hair starts with a healthy scalp and healthy follicles. Our approach looks at both, treating not just symptoms but underlying causes for lasting results.

From simple conditioning treatments to advanced medical procedures, we offer the full spectrum of hair care. Whatever your hair needs, we have solutions to help.`,

    whyChooseUs: [
      "Comprehensive hair care",
      "All hair problems treated",
      "Diagnosis-based approach",
      "Medical and cosmetic options",
      "Latest technologies",
      "Visible improvement"
    ],

    services: [
      {
        title: "Hair Loss Treatment",
        description: "Stopping hair fall and promoting regrowth."
      },
      {
        title: "Scalp Treatment",
        description: "Treating dandruff, itching, and scalp conditions."
      },
      {
        title: "Hair Damage Repair",
        description: "Restoring damaged, brittle, or chemically treated hair."
      },
      {
        title: "PRP/GFC Therapy",
        description: "Growth factor treatments for hair regeneration."
      },
      {
        title: "Hair Conditioning",
        description: "Deep conditioning and nourishment treatments."
      },
      {
        title: "Hair Transplant",
        description: "Surgical restoration for permanent hair loss."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Understanding your specific hair concern."
      },
      {
        title: "Diagnosis",
        description: "Identifying the cause of your hair problem."
      },
      {
        title: "Treatment",
        description: "Applying appropriate treatment for your condition."
      },
      {
        title: "Maintenance",
        description: "Ongoing care for lasting hair health."
      }
    ],

    faqItems: [
      {
        question: "What hair problems do you treat?",
        answer: "All hair issues: loss, thinning, damage, scalp conditions, dandruff, premature graying, dryness, and more."
      },
      {
        question: "Do I need medical hair treatment or salon treatment?",
        answer: "Depends on the issue. Hair loss and scalp conditions need medical treatment. Damage and styling issues may be cosmetic."
      },
      {
        question: "How long does hair treatment take?",
        answer: "Varies by problem. Some issues resolve in weeks, others need months of treatment. We'll discuss your timeline."
      },
      {
        question: "Is hair treatment expensive?",
        answer: "Range of options available. From affordable salon treatments to advanced medical procedures. We work with your budget."
      },
      {
        question: "Can all hair problems be fixed?",
        answer: "Most can be significantly improved. Some permanent damage or loss may need management rather than cure."
      }
    ],

    ctaText: "Get the Hair Treatment You Need",
    ctaDescription: "Expert care for all hair problems. Diagnosis, treatment, and results. Book your hair consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-treatment-in-vadodara"
      content={content}
    />
  );
}
