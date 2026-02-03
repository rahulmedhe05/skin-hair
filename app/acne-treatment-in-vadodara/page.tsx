import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Acne Treatment in Vadodara | Clear Skin ₹500 | Book Now",
  description: "✅ Acne treatment in Vadodara by MD dermatologists ✓ 90% see results in 4 weeks ✓ All acne types treated ✓ 10,000+ happy patients. Consult ₹500. Call now!",
  keywords: "acne treatment vadodara, acne specialist vadodara, pimple treatment vadodara, acne doctor vadodara, best acne treatment near me",
};

export default function AcneTreatmentPage() {
  const content = {
    heroTitle: "Effective Acne Treatment in Vadodara",
    heroSubtitle: "Clear Skin Through Proper Medical Care",
    
    introContent: `Acne isn't just about appearances — it's a medical condition with real causes that require proper treatment. Random home remedies, aggressive products, and unqualified advice often make things worse.

Effective acne treatment starts with understanding what type of acne you have and what's driving it. Is it hormonal? Bacterial? Related to your skin's oil production? The answer determines the treatment.

We've treated thousands of acne cases — teenage, adult, mild, severe, persistent. Each patient gets an individualized approach based on their specific situation. That personalization is why treatment works when other approaches have failed.`,

    whyChooseUs: [
      "Proper diagnosis of acne type and cause",
      "Customized treatment protocols",
      "Medical-grade interventions",
      "Both clearing active acne and preventing new breakouts",
      "Addressing scarring alongside active treatment",
      "Long-term clear skin, not temporary fixes"
    ],

    services: [
      {
        title: "Acne Assessment",
        description: "Understanding your acne type, severity, triggers, and what treatments you've tried before."
      },
      {
        title: "Topical Treatment",
        description: "Prescription-strength products that work — retinoids, antibiotics, specialized formulations."
      },
      {
        title: "Oral Medications",
        description: "When topical treatment isn't enough — antibiotics, hormonal treatments, or isotretinoin for severe cases."
      },
      {
        title: "Clinical Procedures",
        description: "Extractions, chemical peels, LED therapy — clinic-based treatments that accelerate improvement."
      },
      {
        title: "Hormonal Acne Management",
        description: "For women with cycle-related breakouts — addressing the hormonal component."
      },
      {
        title: "Acne Scar Treatment",
        description: "Once acne is controlled — treating the marks and scars it left behind."
      }
    ],

    processSteps: [
      {
        title: "Detailed Assessment",
        description: "Examining your acne, discussing history, identifying contributing factors."
      },
      {
        title: "Personalized Plan",
        description: "Treatment protocol designed for your specific acne type and lifestyle."
      },
      {
        title: "Active Treatment Phase",
        description: "Bringing acne under control with appropriate interventions."
      },
      {
        title: "Maintenance & Prevention",
        description: "Keeping skin clear long-term with maintenance routines."
      }
    ],

    faqItems: [
      {
        question: "Why hasn't my acne responded to treatment before?",
        answer: "Common reasons: wrong diagnosis, inadequate treatment strength, inconsistent use, or underlying causes not addressed. We investigate why previous treatments failed."
      },
      {
        question: "Is adult acne different from teenage acne?",
        answer: "Often, yes — adult acne frequently has hormonal components and may need different treatment approaches than teenage acne."
      },
      {
        question: "How long until I see results?",
        answer: "Most patients see improvement in 4-6 weeks, significant clearing by 3 months. Severe cases may take longer. We set realistic timelines."
      },
      {
        question: "Will acne leave permanent scars?",
        answer: "Untreated or improperly treated acne is more likely to scar. Proper treatment minimizes scarring. Existing scars can be treated once acne is controlled."
      },
      {
        question: "What about diet and acne?",
        answer: "Diet can influence acne in some people. We'll discuss which dietary factors might be relevant for you."
      }
    ],

    ctaText: "Ready for Actually Clear Skin?",
    ctaDescription: "Stop cycling through failed treatments. Get proper acne care from a dermatologist who understands the condition. Book your acne consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="acne-treatment-in-vadodara"
      content={content}
    />
  );
}
