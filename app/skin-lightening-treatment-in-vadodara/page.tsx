import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Lightening Vadodara | Doctor Supervised | ₹3,000",
  description: "✨ Skin lightening in Vadodara from ₹3,000 ✓ Medical supervision ✓ Safe protocols ✓ Even skin tone ✓ No side effects ✓ Visible results. Book consultation!",
  keywords: "skin lightening vadodara, skin tone treatment vadodara, even skin tone treatment, skin lightening cost",
};

export default function SkinLighteningTreatmentPage() {
  const content = {
    heroTitle: "Medical Skin Lightening in Vadodara",
    heroSubtitle: "Safe Approaches for Even-Toned Skin",
    
    introContent: `Skin lightening has a complicated reputation because of dangerous unregulated products. But medically-supervised lightening — addressing pigmentation irregularities, uneven patches, and localized darkening — is safe and effective when done properly.

The key difference: medical lightening targets problem areas to achieve even tone, not wholesale bleaching. We address the dark patches, the pigmented areas, the uneven zones — bringing them in line with your natural base tone.

Our approach uses approved medical products and procedures, monitored by qualified dermatologists. No mercury, no dangerous compounds, no health risks. Just safe, gradual improvement toward even-toned, healthy-looking skin.`,

    whyChooseUs: [
      "Medically supervised treatment only",
      "Safe, approved products and procedures",
      "Focus on even tone, not bleaching",
      "Qualified dermatologist oversight",
      "No dangerous chemicals",
      "Sustainable, healthy results"
    ],

    services: [
      {
        title: "Skin Assessment",
        description: "Identifying areas of uneven tone and what's causing the pigmentation differences."
      },
      {
        title: "Topical Treatment",
        description: "Prescription lightening agents for targeted application on problem areas."
      },
      {
        title: "Professional Peels",
        description: "Medical-grade peels to improve tone and reduce pigmentation safely."
      },
      {
        title: "Laser Treatment",
        description: "Targeted laser for stubborn pigmented areas that don't respond to topicals."
      },
      {
        title: "Full-Body Protocols",
        description: "Addressing uneven tone on body areas — arms, neck, hands, etc."
      },
      {
        title: "Maintenance Plan",
        description: "Long-term protocol to maintain even tone and prevent new pigmentation."
      }
    ],

    processSteps: [
      {
        title: "Safety First Consultation",
        description: "Assessment to ensure you're a candidate for safe lightening treatment."
      },
      {
        title: "Targeted Protocol",
        description: "Treatment plan focusing on specific areas that need evening out."
      },
      {
        title: "Monitored Treatment",
        description: "Regular review to ensure safety and effectiveness."
      },
      {
        title: "Long-term Care",
        description: "Maintenance approach for sustained even tone."
      }
    ],

    faqItems: [
      {
        question: "Is medical skin lightening safe?",
        answer: "When done with approved products under dermatologist supervision — yes. Unlike dangerous OTC lightening products, medical treatment is monitored and uses safe compounds."
      },
      {
        question: "What's the difference between lightening and bleaching?",
        answer: "Medical lightening addresses specific pigmentation issues to even out tone. Bleaching attempts wholesale color change, often with harmful products. We do the former, not the latter."
      },
      {
        question: "How light can my skin become?",
        answer: "The goal is achieving your natural even tone by treating darker patches. We don't aim to change your baseline complexion."
      },
      {
        question: "Are there any side effects?",
        answer: "With medical supervision, side effects are minimal. We monitor and adjust treatment if any issues arise."
      },
      {
        question: "How long does treatment take?",
        answer: "Gradual improvement over weeks to months. Quick fixes are dangerous — safe lightening takes time."
      }
    ],

    ctaText: "Safe, Medical Skin Lightening",
    ctaDescription: "Even-toned skin through safe, supervised treatment. No dangerous shortcuts. Professional care for the results you want. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-lightening-treatment-in-vadodara"
      content={content}
    />
  );
}
