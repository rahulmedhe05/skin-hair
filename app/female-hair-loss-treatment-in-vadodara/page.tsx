import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Female Hair Loss Treatment Vadodara | Women's Hair | ₹500",
  description: "👩 Female hair loss treatment in Vadodara ✓ Women's hair specialist ✓ Hormonal & diffuse hair loss ✓ Gentle treatments ✓ 8,000+ women helped. Consult ₹500!",
  keywords: "female hair loss treatment vadodara, women hair loss vadodara, female pattern hair loss, women hair doctor",
};

export default function FemaleHairLossPage() {
  const content = {
    heroTitle: "Female Hair Loss Treatment in Vadodara",
    heroSubtitle: "Specialized Care for Women's Hair Loss",
    
    introContent: `Hair loss in women is different — the pattern, the causes, the emotional impact, and the treatment approach. What works for men often isn't appropriate for women. Female hair loss needs specialized understanding.

Women experience hair thinning, not typically the balding that men have. Causes include hormonal changes, thyroid issues, nutritional deficiencies, stress, and genetic factors. Treatment addresses underlying causes while stimulating regrowth.

We specialize in female hair loss, understanding its unique characteristics. From comprehensive evaluation to appropriate treatment, we help women regain not just hair but confidence.`,

    whyChooseUs: [
      "Specialization in female hair loss",
      "Understanding hormonal factors",
      "Comprehensive cause evaluation",
      "Women-appropriate treatments",
      "Sensitivity to emotional impact",
      "Holistic approach"
    ],

    services: [
      {
        title: "Comprehensive Evaluation",
        description: "Thorough assessment including blood work, scalp evaluation, and history."
      },
      {
        title: "Hormonal Hair Loss Treatment",
        description: "Addressing hair loss related to hormonal changes, PCOS, menopause."
      },
      {
        title: "PRP for Women",
        description: "Platelet-rich plasma therapy — safe and effective for women."
      },
      {
        title: "GFC Treatment",
        description: "Growth factor concentrate for hair regeneration."
      },
      {
        title: "Medical Therapy",
        description: "Appropriate medications for women — not all male treatments are suitable."
      },
      {
        title: "Nutritional Optimization",
        description: "Addressing deficiencies that contribute to hair loss."
      }
    ],

    processSteps: [
      {
        title: "Detailed Consultation",
        description: "Understanding your hair loss pattern, history, and potential triggers."
      },
      {
        title: "Investigation",
        description: "Blood tests and evaluations to identify underlying causes."
      },
      {
        title: "Treatment Planning",
        description: "Creating a comprehensive approach addressing all factors."
      },
      {
        title: "Ongoing Care",
        description: "Long-term management for sustained hair health."
      }
    ],

    faqItems: [
      {
        question: "Why do women lose hair differently than men?",
        answer: "Women typically experience diffuse thinning throughout, not the receding hairline or bald spot men get. The causes and treatments differ too."
      },
      {
        question: "Can hormonal issues cause hair loss?",
        answer: "Yes — thyroid problems, PCOS, menopause, postpartum changes all affect hair. We evaluate and address hormonal factors."
      },
      {
        question: "Is PRP safe for women?",
        answer: "Absolutely — PRP is one of the best treatments for women as it's natural and has no hormonal effects."
      },
      {
        question: "Will my hair grow back?",
        answer: "Often yes, especially when underlying causes are addressed. Results depend on the cause and duration of hair loss."
      },
      {
        question: "Should I take the same medications as men?",
        answer: "No — some medications used for male hair loss are not safe for women, especially of childbearing age. We use appropriate treatments."
      }
    ],

    ctaText: "Address Your Hair Loss with Expert Care",
    ctaDescription: "Women's hair loss needs specialized understanding. Get comprehensive evaluation and appropriate treatment. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="female-hair-loss-treatment-in-vadodara"
      content={content}
    />
  );
}
