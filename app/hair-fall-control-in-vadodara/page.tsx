import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Fall Control Vadodara | 70% Reduction | ₹500",
  description: "💇 Hair fall control in Vadodara ✓ 70% reduction in 3 months ✓ Root cause treatment ✓ PRP available ✓ Stop hair fall permanently. Consult ₹500. Book now!",
  keywords: "hair fall control vadodara, stop hair fall vadodara, control hair loss, hair fall near me",
};

export default function HairFallControlPage() {
  const content = {
    heroTitle: "Hair Fall Control in Vadodara",
    heroSubtitle: "Stop the Fall, Save Your Hair",
    
    introContent: `When you're losing more hair than normal, anxiety sets in. Clumps in the shower, hair on your pillow, visible thinning — the urgency to stop it is real. Effective hair fall control starts with understanding why it's happening.

Hair falls for many reasons — hormonal changes, nutritional deficiencies, stress, scalp conditions, genetic factors, medications. Identifying your specific cause allows targeted treatment rather than generic approaches that may not help.

We focus on stopping hair fall first, then regrowing what's lost. Comprehensive evaluation leads to effective treatment, bringing your hair fall back to normal levels.`,

    whyChooseUs: [
      "Cause identification",
      "Targeted treatment",
      "Multiple control methods",
      "Effective results",
      "Long-term management",
      "Preventing further loss"
    ],

    services: [
      {
        title: "Hair Fall Diagnosis",
        description: "Finding out why you're losing hair."
      },
      {
        title: "Medical Treatment",
        description: "Medications to stop hair fall."
      },
      {
        title: "Nutritional Correction",
        description: "Addressing deficiencies contributing to hair fall."
      },
      {
        title: "Scalp Treatment",
        description: "Treating scalp conditions causing hair loss."
      },
      {
        title: "PRP Therapy",
        description: "Strengthening hair follicles to reduce fall."
      },
      {
        title: "Maintenance Protocol",
        description: "Long-term strategy to keep hair fall controlled."
      }
    ],

    processSteps: [
      {
        title: "Evaluation",
        description: "Assessing hair fall pattern and possible causes."
      },
      {
        title: "Investigation",
        description: "Blood tests and examination to identify cause."
      },
      {
        title: "Treatment",
        description: "Targeted treatment based on diagnosis."
      },
      {
        title: "Monitoring",
        description: "Tracking improvement and adjusting treatment."
      }
    ],

    faqItems: [
      {
        question: "How much hair fall is normal?",
        answer: "50-100 hairs daily is normal. If you're losing significantly more, or noticing thinning, it's worth investigating."
      },
      {
        question: "How quickly can hair fall be stopped?",
        answer: "With proper treatment, reduction often seen within 4-8 weeks. Complete control may take longer."
      },
      {
        question: "Will the fallen hair grow back?",
        answer: "Often yes, if follicles aren't permanently damaged. We focus on stopping fall first, then promoting regrowth."
      },
      {
        question: "What tests are needed?",
        answer: "Common tests: blood count, thyroid, iron, vitamin D, hormones. Specific tests based on your presentation."
      },
      {
        question: "Is hair fall from stress reversible?",
        answer: "Usually yes — stress-related hair fall (telogen effluvium) typically recovers once the stressor resolves."
      }
    ],

    ctaText: "Take Control of Hair Fall",
    ctaDescription: "Don't watch your hair disappear. Effective treatment to stop hair fall. Book your consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-fall-control-in-vadodara"
      content={content}
    />
  );
}
