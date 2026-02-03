import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Allergy Treatment Vadodara | Fast Relief | ₹500",
  description: "✅ Skin allergy treatment in Vadodara ✓ Fast relief from itching ✓ Hives & rashes treated ✓ Find your triggers ✓ Long-term prevention. Consult ₹500. Call!",
  keywords: "skin allergy treatment vadodara, hives treatment vadodara, allergic rash treatment, skin allergy doctor near me",
};

export default function SkinAllergyTreatmentPage() {
  const content = {
    heroTitle: "Skin Allergy Treatment in Vadodara",
    heroSubtitle: "Stop the Itch, Find the Cause",
    
    introContent: `Skin allergies manifest as hives, rashes, itching, and swelling — your immune system overreacting to something it perceives as threat. Finding what triggers your reaction and controlling the response are both important.

Allergic skin conditions include urticaria (hives), contact dermatitis, and various other reactive conditions. Treatment involves both relief of symptoms and, when possible, identification and avoidance of triggers.

We diagnose allergic skin conditions, provide effective symptom relief, and help identify what's causing your reactions. For many patients, understanding their triggers transforms repeated miserable episodes into manageable, avoidable situations.`,

    whyChooseUs: [
      "Expert diagnosis of allergic skin conditions",
      "Effective symptom relief",
      "Trigger identification",
      "Prevention strategies",
      "Treatment for chronic hives",
      "Comprehensive allergy workup when needed"
    ],

    services: [
      {
        title: "Allergy Diagnosis",
        description: "Identifying the type of allergic skin condition you have."
      },
      {
        title: "Acute Allergy Treatment",
        description: "Quick relief for current allergic reactions."
      },
      {
        title: "Chronic Hives Management",
        description: "Long-term control for persistent urticaria."
      },
      {
        title: "Contact Dermatitis",
        description: "Identifying contact allergens and treating reactions."
      },
      {
        title: "Patch Testing",
        description: "Testing to identify specific contact allergens."
      },
      {
        title: "Prevention Counseling",
        description: "Guidance on avoiding identified triggers."
      }
    ],

    processSteps: [
      {
        title: "Reaction Assessment",
        description: "Evaluating your allergic reaction and gathering history."
      },
      {
        title: "Symptom Relief",
        description: "Immediate treatment to control current symptoms."
      },
      {
        title: "Trigger Investigation",
        description: "Working to identify what's causing your reactions."
      },
      {
        title: "Prevention Planning",
        description: "Strategy to avoid triggers and manage future reactions."
      }
    ],

    faqItems: [
      {
        question: "What's causing my skin allergy?",
        answer: "Common triggers: foods, medications, contact allergens, environmental factors. Sometimes the cause is clear; sometimes investigation is needed."
      },
      {
        question: "Why do I get hives repeatedly?",
        answer: "Chronic urticaria often has no identifiable trigger. It may be autoimmune. Treatment focuses on control rather than cause identification."
      },
      {
        question: "Should I get allergy testing?",
        answer: "Depends on your situation. For contact allergies, patch testing helps. For other allergies, testing may or may not be useful. We advise based on your case."
      },
      {
        question: "Are antihistamines safe long-term?",
        answer: "Modern non-sedating antihistamines are very safe for long-term use when needed for chronic conditions."
      },
      {
        question: "Can skin allergies be cured?",
        answer: "If trigger can be identified and avoided, yes. Some allergic conditions resolve on their own. Chronic urticaria often improves over time."
      }
    ],

    ctaText: "Get Relief from Skin Allergies",
    ctaDescription: "Stop suffering from allergic reactions. Get effective treatment and help identifying triggers. Book your allergy consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-allergy-treatment-in-vadodara"
      content={content}
    />
  );
}
