import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Fall Treatment Vadodara | 70% Reduction | Book",
  description: "💇 Hair fall treatment in Vadodara ✓ 70% reduction in 3 months ✓ PRP + medicines combo ✓ Root cause treatment ✓ 10,000+ patients. Starting ₹500. Call!",
  keywords: "hair fall treatment vadodara, hair loss treatment vadodara, stop hair fall vadodara, hair fall doctor near me",
};

export default function HairFallTreatmentPage() {
  const content = {
    heroTitle: "Hair Fall Treatment in Vadodara",
    heroSubtitle: "Stop the Loss, Start the Regrowth",
    
    introContent: `Hair fall that exceeds normal shedding is a signal — something is affecting your hair growth cycle. The first step is understanding what. Is it pattern baldness? Stress-induced? Nutritional? Hormonal? Scalp condition? Each cause has different treatment.

Effective hair fall treatment starts with proper diagnosis. Without knowing why hair is falling, treatment is guesswork. We investigate the cause before prescribing solutions, which is why our treatments actually work.

For most types of hair loss, treatment can slow or stop further loss, and often regrow some hair. The earlier you start, the better the outcome. Don't wait until hair loss is advanced — act when you first notice a problem.`,

    whyChooseUs: [
      "Proper diagnosis before treatment",
      "Understanding of all hair loss types",
      "Multiple treatment modalities",
      "Both medical and procedural options",
      "Realistic expectations set upfront",
      "Tracking progress with photography"
    ],

    services: [
      {
        title: "Hair Loss Diagnosis",
        description: "Thorough investigation of why you're losing hair — pattern baldness, telogen effluvium, alopecia areata, or other causes."
      },
      {
        title: "Medical Treatment",
        description: "Prescription medications that address the underlying cause of hair loss."
      },
      {
        title: "PRP Hair Treatment",
        description: "Platelet-rich plasma therapy to stimulate dormant follicles."
      },
      {
        title: "GFC Therapy",
        description: "Growth Factor Concentrate — advanced platelet-derived treatment."
      },
      {
        title: "Mesotherapy",
        description: "Micro-injections of vitamins and growth factors into the scalp."
      },
      {
        title: "Combination Protocols",
        description: "Multiple treatments working together for maximum effect."
      }
    ],

    processSteps: [
      {
        title: "Detailed Assessment",
        description: "History, examination, and possibly tests to determine cause."
      },
      {
        title: "Diagnosis Discussion",
        description: "Explaining what's causing your hair fall and what can be done."
      },
      {
        title: "Treatment Initiation",
        description: "Starting appropriate treatment for your specific type of loss."
      },
      {
        title: "Progress Monitoring",
        description: "Regular follow-ups with standardized photography to track improvement."
      }
    ],

    faqItems: [
      {
        question: "Why am I losing hair?",
        answer: "Common causes: genetic pattern baldness, stress, hormonal changes, nutritional deficiencies, scalp conditions, medications. Proper diagnosis identifies your specific cause."
      },
      {
        question: "Can lost hair grow back?",
        answer: "Depends on the cause and how long hair has been gone. Recent loss from treatable causes often regrows. Longstanding pattern baldness may need transplant for restoration."
      },
      {
        question: "How long before treatment shows results?",
        answer: "Hair grows slowly — expect 3-6 months before visible improvement. We track with photographs to measure progress objectively."
      },
      {
        question: "Do I need to take medicines forever?",
        answer: "For genetic hair loss, ongoing treatment maintains results. Stop treatment and hair loss may resume. We discuss long-term management during consultation."
      },
      {
        question: "When should I consider hair transplant?",
        answer: "When medical treatment alone can't restore density in areas that are already significantly bald. We assess if you're a candidate."
      }
    ],

    ctaText: "Stop Your Hair Fall Now",
    ctaDescription: "Every day of untreated hair loss is potentially more permanent loss. Start treatment early for best results. Book your hair consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-fall-treatment-in-vadodara"
      content={content}
    />
  );
}
