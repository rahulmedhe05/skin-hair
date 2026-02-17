import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "PRP Hair Treatment Vadodara ₹5,000 | Stop Hair Fall",
  description: "💇 PRP hair treatment in Vadodara from ₹5,000 ✓ 70% see new growth in 3 months ✓ 100% natural ✓ Painless procedure ✓ 8,000+ happy patients. Book now!",
  keywords: "prp hair treatment vadodara, prp for hair loss vadodara, prp cost vadodara, prp therapy near me",
};

export default function PRPHairTreatmentPage() {
  const content = {
    heroTitle: "PRP Hair Treatment in Vadodara",
    heroSubtitle: "Your Own Growth Factors for Hair Restoration",
    
    introContent: `PRP — Platelet Rich Plasma — concentrates your blood's natural growth factors and delivers them directly to hair follicles. Your body already uses these factors for healing and regeneration. PRP amplifies that natural process.

The science: we draw your blood, spin it to concentrate platelets and growth factors, then inject this concentrate into your scalp. The growth factors signal follicles to enter active growth phase and produce stronger hair.

PRP isn't a miracle cure — nothing is. But research shows it can improve hair density for appropriate patients, especially when combined with other treatments. We use it as part of comprehensive hair restoration approaches.`,

    whyChooseUs: [
      "Proper PRP preparation technique",
      "Quality-controlled processing",
      "Appropriate patient selection",
      "Realistic expectations communicated",
      "Combined with complementary treatments",
      "Systematic progress tracking"
    ],

    services: [
      {
        title: "Standard PRP Treatment",
        description: "Traditional PRP preparation and injection for hair growth stimulation."
      },
      {
        title: "Advanced PRP",
        description: "Enhanced preparation techniques for higher growth factor concentration."
      },
      {
        title: "PRP + Microneedling",
        description: "Combining PRP with microneedling for improved penetration and results."
      },
      {
        title: "PRP + Mesotherapy",
        description: "PRP combined with vitamin cocktails for comprehensive follicle nourishment."
      },
      {
        title: "Maintenance PRP",
        description: "Periodic treatments to sustain improvement after initial course."
      },
      {
        title: "Post-Transplant PRP",
        description: "Supporting transplanted grafts and improving density in native hair."
      }
    ],

    processSteps: [
      {
        title: "Blood Draw",
        description: "Small blood sample collected similar to routine blood test."
      },
      {
        title: "PRP Preparation",
        description: "Centrifugation to separate and concentrate platelets."
      },
      {
        title: "Scalp Injection",
        description: "Concentrated PRP injected across the scalp in treatment areas."
      },
      {
        title: "Recovery",
        description: "Mild tenderness for a day. Return to normal activities immediately."
      }
    ],

    faqItems: [
      {
        question: "Does PRP actually work for hair?",
        answer: "Research supports modest improvement in hair density for appropriate candidates. Results vary. We assess likelihood of response and set realistic expectations."
      },
      {
        question: "How many PRP sessions are needed?",
        answer: "Typically 3-4 sessions initially, spaced 4-6 weeks apart. Then maintenance sessions every 4-6 months."
      },
      {
        question: "Is PRP painful?",
        answer: "Discomfort during injection is manageable. We use numbing techniques. Most patients tolerate it well."
      },
      {
        question: "When will I see results?",
        answer: "Improvement becomes visible around 3-4 months after starting treatment. Full results develop over 6-12 months."
      },
      {
        question: "Is PRP better than minoxidil?",
        answer: "They work differently and complement each other. We often recommend both together for better results than either alone."
      }
    ],

    ctaText: "Harness Your Own Growth Factors",
    ctaDescription: "PRP uses your body's natural healing power for hair restoration. Safe, natural, scientifically supported. Book your PRP consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="prp-hair-treatment-in-vadodara"
      content={content}
    />
  );
}
