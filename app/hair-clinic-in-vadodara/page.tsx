import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Hair Clinic Vadodara | PRP, GFC, Transplant | ₹500",
  description: "💇 Best hair clinic in Vadodara ✓ PRP, GFC, transplant available ✓ Advanced diagnosis ✓ 8,000+ patients treated ✓ 4.9★ rated. Consult ₹500. Visit today!",
  keywords: "hair clinic vadodara, best hair clinic vadodara, hair loss clinic vadodara, hair clinic near me",
};

export default function HairClinicPage() {
  const content = {
    heroTitle: "Vadodara's Dedicated Hair Clinic",
    heroSubtitle: "Specialized Expertise for Hair Health",
    
    introContent: `Hair problems deserve specialized attention. Generic skin clinics that treat hair as an afterthought often miss the nuances that make treatment effective. A dedicated hair clinic changes that equation.

We've built expertise specifically in hair medicine — understanding the hair cycle, the different types of hair loss, the treatments that work for each situation. This focus translates into better outcomes.

Whether it's gradual thinning, sudden shedding, pattern baldness, or scalp conditions affecting hair, we approach each case with the specialized knowledge that hair problems require. The difference shows in results.`,

    whyChooseUs: [
      "Dedicated hair medicine focus",
      "Understanding of hair biology",
      "Multiple treatment modalities",
      "Both medical and surgical options",
      "Experience with all hair loss types",
      "Results-oriented approach"
    ],

    services: [
      {
        title: "Hair Loss Diagnosis",
        description: "Proper identification of hair loss type — pattern baldness, telogen effluvium, alopecia areata, or others. Treatment depends on accurate diagnosis."
      },
      {
        title: "Medical Hair Treatment",
        description: "Medications, topicals, and non-surgical interventions that can slow loss and promote regrowth in appropriate cases."
      },
      {
        title: "PRP for Hair",
        description: "Platelet-rich plasma therapy to stimulate hair follicles. Evidence-based approach with realistic expectations."
      },
      {
        title: "GFC Treatment",
        description: "Growth Factor Concentrate therapy — advanced platelet-derived treatment for hair restoration."
      },
      {
        title: "Hair Transplant",
        description: "Surgical restoration when appropriate. FUE technique with natural-looking results."
      },
      {
        title: "Scalp Treatment",
        description: "Dandruff, seborrheic dermatitis, psoriasis, folliculitis — scalp conditions that affect hair health."
      }
    ],

    processSteps: [
      {
        title: "Hair Analysis",
        description: "Detailed assessment of hair loss pattern, scalp condition, and potential causes."
      },
      {
        title: "Type Identification",
        description: "Accurate diagnosis of hair loss type — this determines what treatment can achieve."
      },
      {
        title: "Treatment Matching",
        description: "Selecting appropriate interventions from our range based on your specific situation."
      },
      {
        title: "Progress Tracking",
        description: "Monitoring response and adjusting approach as needed for optimal outcomes."
      }
    ],

    faqItems: [
      {
        question: "Can all hair loss be treated?",
        answer: "Treatment options exist for most types, but outcomes vary. Pattern baldness can be slowed and sometimes reversed. Some types respond better than others. We'll give you realistic expectations."
      },
      {
        question: "What's causing my hair loss?",
        answer: "Possibilities include genetics, hormones, stress, nutrition, medications, scalp conditions, or medical issues. Proper diagnosis identifies the cause for your case."
      },
      {
        question: "Does PRP actually work?",
        answer: "For appropriate candidates, yes — evidence supports modest improvement in hair density. Results vary. We'll tell you honestly what to expect in your situation."
      },
      {
        question: "When should I consider transplant?",
        answer: "When pattern baldness has stabilized and you want to restore areas that won't regrow with medical treatment alone. We assess whether you're a good candidate."
      },
      {
        question: "How long before I see results?",
        answer: "Hair grows slowly. Most treatments take 3-6 months to show visible improvement. Patience is essential — we track progress with photography to measure objectively."
      }
    ],

    ctaText: "Get Specialized Hair Care",
    ctaDescription: "Hair problems need hair expertise. Stop losing time with generic treatments. Visit a dedicated hair clinic with proven results. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-clinic-in-vadodara"
      content={content}
    />
  );
}
