import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Cystic Acne Treatment Vadodara | Severe Acne | ₹500",
  description: "✅ Cystic acne treatment in Vadodara ✓ Isotretinoin available ✓ Deep, painful acne cleared ✓ Prevent scarring ✓ Expert dermatologist. Consult ₹500. Book!",
  keywords: "cystic acne treatment vadodara, nodular acne treatment, severe acne doctor vadodara, cystic acne near me",
};

export default function CysticAcneTreatmentPage() {
  const content = {
    heroTitle: "Cystic Acne Treatment in Vadodara",
    heroSubtitle: "Specialized Care for Severe Acne",
    
    introContent: `Cystic acne is different. Those deep, painful, inflamed bumps under the skin don't respond to normal acne treatments. Regular cleansers, spot treatments, and basic antibiotics aren't strong enough. This type needs aggressive intervention.

Cystic acne also scars more than regular pimples. Each cyst damages skin tissue, potentially leaving permanent marks. Fast, effective treatment isn't just about looking better now — it's about preventing lasting damage.

We specialize in treating severe acne that hasn't responded to standard care. Using prescription medications including isotretinoin when appropriate, intralesional injections for individual cysts, and comprehensive protocols that bring even stubborn cases under control.`,

    whyChooseUs: [
      "Expertise in severe acne cases",
      "Access to prescription-strength treatments",
      "Isotretinoin management when needed",
      "Intralesional injections for fast relief",
      "Scar prevention focus",
      "Comprehensive severe acne protocols"
    ],

    services: [
      {
        title: "Severe Acne Assessment",
        description: "Evaluating extent, identifying acne type, assessing scarring risk, reviewing treatment history."
      },
      {
        title: "Isotretinoin Treatment",
        description: "For appropriate candidates — the most effective treatment for severe, resistant acne. Proper monitoring throughout."
      },
      {
        title: "Intralesional Injections",
        description: "Injecting cysts with medication for rapid reduction. Fast relief from painful bumps."
      },
      {
        title: "Combination Therapy",
        description: "Multiple medications and approaches working together for maximum effect."
      },
      {
        title: "Scar Prevention",
        description: "Treating active cysts before they scar, minimizing tissue damage."
      },
      {
        title: "Post-Treatment Care",
        description: "Maintenance protocols after clearing to prevent relapse."
      }
    ],

    processSteps: [
      {
        title: "Severity Assessment",
        description: "Documenting current acne, past treatments, and scarring."
      },
      {
        title: "Treatment Planning",
        description: "Choosing appropriate aggressive treatment based on your situation."
      },
      {
        title: "Active Treatment Phase",
        description: "Intensive treatment period with close monitoring."
      },
      {
        title: "Clearance & Maintenance",
        description: "Achieving control and preventing recurrence."
      }
    ],

    faqItems: [
      {
        question: "Why doesn't regular treatment work on cystic acne?",
        answer: "Cystic acne occurs deep in the skin where topical products can't reach effectively. The inflammation is more intense and requires stronger systemic treatment."
      },
      {
        question: "Is isotretinoin safe?",
        answer: "When properly managed with regular monitoring, yes. It has potential side effects that require attention, but for severe acne, benefits often outweigh risks. We discuss thoroughly before starting."
      },
      {
        question: "How long does treatment take?",
        answer: "Isotretinoin courses typically run 4-6 months. You'll see improvement within weeks, with continued clearing through the course."
      },
      {
        question: "Will my acne come back after treatment?",
        answer: "For most patients, isotretinoin provides long-lasting or permanent improvement. Some need maintenance treatment. We plan for long-term control."
      },
      {
        question: "Can cystic acne scars be treated?",
        answer: "Yes, but it's better to prevent them by treating active acne aggressively. Scar treatment can begin after acne is controlled."
      }
    ],

    ctaText: "Don't Suffer with Severe Acne",
    ctaDescription: "Cystic acne needs specialized treatment. Every day untreated is more scarring risk. Get expert care now. Book your severe acne consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="cystic-acne-treatment-in-vadodara"
      content={content}
    />
  );
}
