import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Melasma Treatment Vadodara | 70% Fading | Safe | Book",
  description: "✅ Melasma treatment in Vadodara ✓ 70% fading in 3 months ✓ Safe for Indian skin ✓ Laser + peels + creams ✓ Stubborn patches treated. Starting ₹2,000. Call!",
  keywords: "melasma treatment vadodara, dark patches treatment vadodara, chloasma treatment vadodara, melasma cost",
};

export default function MelasmaTreatmentPage() {
  const content = {
    heroTitle: "Melasma Treatment in Vadodara",
    heroSubtitle: "Managing the Most Stubborn Pigmentation",
    
    introContent: `Melasma is frustrating. Those dark patches on forehead, cheeks, and upper lip that darken in summer, lighten in winter, and never quite go away. It's one of the most challenging pigmentation conditions to treat because it has multiple triggers and tends to recur.

Understanding melasma is key to managing it. This isn't a condition you cure once and forget — it's a tendency your skin has that needs ongoing management. But with proper treatment, significant improvement is absolutely possible.

We approach melasma with expertise and honesty. We explain what's realistic, design comprehensive treatment protocols, and partner with you for long-term management. Most patients achieve substantially clearer, more even skin.`,

    whyChooseUs: [
      "Melasma-specific expertise",
      "Understanding of triggers and patterns",
      "Long-term management approach",
      "Combination treatment protocols",
      "Realistic expectations and honesty",
      "Ongoing partnership for maintenance"
    ],

    services: [
      {
        title: "Melasma Assessment",
        description: "Identifying melasma type (epidermal, dermal, or mixed) and understanding your specific triggers."
      },
      {
        title: "Topical Treatment",
        description: "Prescription-strength lightening agents including hydroquinone, retinoids, and combination formulas."
      },
      {
        title: "Chemical Peels",
        description: "Carefully selected peels that improve melasma without triggering rebound."
      },
      {
        title: "Laser Treatment",
        description: "Specific lasers and settings appropriate for melasma — aggressive lasers often worsen it."
      },
      {
        title: "Tranexamic Acid",
        description: "Oral and topical use for stubborn cases — an effective addition to treatment protocols."
      },
      {
        title: "Maintenance Protocol",
        description: "Long-term prevention strategies to keep melasma controlled."
      }
    ],

    processSteps: [
      {
        title: "Complete Evaluation",
        description: "Assessing melasma type, extent, triggers, and past treatment responses."
      },
      {
        title: "Customized Protocol",
        description: "Treatment plan tailored to your specific melasma pattern."
      },
      {
        title: "Active Treatment Phase",
        description: "Intensive treatment to achieve maximum improvement."
      },
      {
        title: "Maintenance Phase",
        description: "Ongoing care to prevent recurrence and maintain results."
      }
    ],

    faqItems: [
      {
        question: "Can melasma be completely cured?",
        answer: "Honestly, no — but it can be significantly improved and controlled. Think of it as management rather than cure. Many patients maintain clear skin with ongoing care."
      },
      {
        question: "Why does my melasma keep coming back?",
        answer: "Melasma is a tendency, not a one-time event. Sun exposure, hormonal changes, and other triggers can reactivate it. Maintenance treatment prevents this."
      },
      {
        question: "Should I avoid the sun completely?",
        answer: "Strict sun protection is essential — daily sunscreen, reapplication, hats, avoiding peak sun. Sun is the biggest trigger."
      },
      {
        question: "Will pregnancy worsen my melasma?",
        answer: "Often yes — hormonal changes during pregnancy commonly trigger or worsen melasma. Treatment options during pregnancy are limited but post-pregnancy improvement is possible."
      },
      {
        question: "How long does treatment take?",
        answer: "Initial improvement in 2-3 months, significant clearing by 6 months for many patients. But maintenance is ongoing."
      }
    ],

    ctaText: "Take Control of Your Melasma",
    ctaDescription: "Melasma is challenging but manageable. Get expert care that sets realistic expectations and delivers real results. Book your melasma consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="melasma-treatment-in-vadodara"
      content={content}
    />
  );
}
