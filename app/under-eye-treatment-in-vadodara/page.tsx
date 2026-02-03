import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Under Eye Treatment Vadodara | Dark Circles | ₹3,000",
  description: "✨ Under eye treatment in Vadodara from ₹3,000 ✓ Dark circles gone ✓ Fillers + laser ✓ Hollows filled ✓ Look refreshed instantly. Expert care. Book now!",
  keywords: "under eye treatment vadodara, dark circles treatment vadodara, under eye filler vadodara, eye bags treatment",
};

export default function UnderEyeTreatmentPage() {
  const content = {
    heroTitle: "Under Eye Treatment in Vadodara",
    heroSubtitle: "Brighten Tired, Hollowed Eyes",
    
    introContent: `The under-eye area betrays fatigue, age, and stress like nothing else. Dark circles, hollows, bags, fine wrinkles — they make you look tired even when you're not. People constantly ask if you're sleeping enough.

Multiple factors create under-eye concerns: pigmentation, thin skin revealing vessels, volume loss creating hollows, fluid accumulation, and skin aging. Effective treatment requires identifying the actual cause.

We assess what's creating your under-eye appearance and address it appropriately. Different causes need different treatments — there's no one-size-fits-all solution for this complex area.`,

    whyChooseUs: [
      "Accurate assessment of causes",
      "Multiple treatment approaches",
      "Understanding eye area complexity",
      "Precise technique for delicate area",
      "Natural improvement",
      "Comprehensive solutions"
    ],

    services: [
      {
        title: "Dark Circle Treatment",
        description: "Addressing pigmentation and vascular causes of dark circles."
      },
      {
        title: "Under Eye Fillers",
        description: "Volume restoration for hollow, sunken under-eyes."
      },
      {
        title: "Tear Trough Correction",
        description: "Filling the groove between eye and cheek."
      },
      {
        title: "Eye Bag Treatment",
        description: "Options for puffy under-eyes and bags."
      },
      {
        title: "Fine Line Treatment",
        description: "Addressing creepy, wrinkled under-eye skin."
      },
      {
        title: "Combination Treatment",
        description: "Multiple approaches for comprehensive improvement."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Identifying the actual cause of your under-eye concerns."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate treatment based on the cause."
      },
      {
        title: "Precise Treatment",
        description: "Careful treatment of this delicate, complex area."
      },
      {
        title: "Result Optimization",
        description: "Follow-up and refinement for best outcome."
      }
    ],

    faqItems: [
      {
        question: "What causes dark circles?",
        answer: "Multiple factors — pigmentation, thin skin, visible vessels, volume loss, allergies, genetics. We determine your specific cause."
      },
      {
        question: "Can under-eye filler look natural?",
        answer: "When done properly in appropriate candidates, yes. Technique and patient selection are crucial for this delicate area."
      },
      {
        question: "How long do under-eye treatments last?",
        answer: "Depends on treatment type. Fillers last 12-18 months. Pigmentation treatment may need maintenance. Results vary."
      },
      {
        question: "Are there risks with under-eye filler?",
        answer: "This area needs expertise — risks include lumps, bluish discoloration if placed wrong, and rare vascular issues. We use careful technique."
      },
      {
        question: "What can't be fixed non-surgically?",
        answer: "Significant fat bags and very loose skin may need surgery. We're honest about what non-surgical treatment can and cannot achieve."
      }
    ],

    ctaText: "Refresh Your Tired Eyes",
    ctaDescription: "Stop looking exhausted. Get proper assessment and effective treatment for your under-eye concerns. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="under-eye-treatment-in-vadodara"
      content={content}
    />
  );
}
