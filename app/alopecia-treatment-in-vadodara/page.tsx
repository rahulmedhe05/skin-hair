import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Alopecia Treatment Vadodara | Patchy Hair Loss | ₹500",
  description: "💇 Alopecia treatment in Vadodara ✓ 80% regrowth success ✓ Alopecia areata expert ✓ Steroid + PRP combo ✓ Autoimmune hair loss. Consult ₹500. Book now!",
  keywords: "alopecia treatment vadodara, alopecia areata treatment vadodara, patchy hair loss treatment, alopecia doctor near me",
};

export default function AlopeciaTreatmentPage() {
  const content = {
    heroTitle: "Alopecia Treatment in Vadodara",
    heroSubtitle: "Specialized Care for Autoimmune Hair Loss",
    
    introContent: `Alopecia areata is different from common hair loss — it's an autoimmune condition where your immune system mistakenly attacks hair follicles, causing patchy hair loss. It can be distressing, but treatments exist.

The condition is unpredictable. Hair may regrow spontaneously, or patches may expand. Some patients have a single episode; others experience recurring cycles. Treatment aims to stop immune attack and stimulate regrowth.

We have experience managing alopecia areata with various treatment approaches. While no cure exists, many patients achieve significant regrowth with appropriate treatment. Understanding the condition and setting realistic expectations are key.`,

    whyChooseUs: [
      "Alopecia areata expertise",
      "Understanding of autoimmune nature",
      "Multiple treatment options",
      "Realistic expectations setting",
      "Support through unpredictable course",
      "Access to advanced treatments"
    ],

    services: [
      {
        title: "Alopecia Diagnosis",
        description: "Confirming alopecia areata and ruling out other causes of patchy hair loss."
      },
      {
        title: "Intralesional Injections",
        description: "Steroid injections into patches to suppress local immune attack and stimulate regrowth."
      },
      {
        title: "Topical Treatments",
        description: "Immunomodulatory topicals to suppress immune activity at follicles."
      },
      {
        title: "Systemic Treatments",
        description: "For extensive alopecia — oral medications that modulate immune response."
      },
      {
        title: "JAK Inhibitors",
        description: "Newer treatments showing promise for severe alopecia areata."
      },
      {
        title: "Combination Therapy",
        description: "Multiple approaches together for enhanced efficacy."
      }
    ],

    processSteps: [
      {
        title: "Diagnosis Confirmation",
        description: "Ensuring the diagnosis is alopecia areata, not another condition."
      },
      {
        title: "Extent Assessment",
        description: "Evaluating how much hair loss and predicting likely course."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate treatment based on extent and pattern."
      },
      {
        title: "Ongoing Management",
        description: "Monitoring response and adjusting treatment as needed."
      }
    ],

    faqItems: [
      {
        question: "Will my hair grow back?",
        answer: "Many patients experience regrowth, especially with treatment. However, alopecia areata is unpredictable. We work toward regrowth while being honest about uncertainty."
      },
      {
        question: "What causes alopecia areata?",
        answer: "Your immune system mistakenly attacks hair follicles. Triggers can include stress, illness, or family history, but often the cause is unclear."
      },
      {
        question: "Is alopecia areata permanent?",
        answer: "Not necessarily. Many patients regrow hair. Some experience cycles of loss and regrowth. A minority have persistent loss."
      },
      {
        question: "Can it spread to other areas?",
        answer: "Yes, patches can expand or new patches can appear. Rarely, it can progress to total scalp loss (alopecia totalis) or body-wide (alopecia universalis)."
      },
      {
        question: "Is there a cure?",
        answer: "No permanent cure, but effective treatments exist. For many patients, treatment induces lasting remission."
      }
    ],

    ctaText: "Get Expert Alopecia Care",
    ctaDescription: "Alopecia areata needs specialized treatment. Don't face this condition alone. Book your consultation with our alopecia specialist.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="alopecia-treatment-in-vadodara"
      content={content}
    />
  );
}
