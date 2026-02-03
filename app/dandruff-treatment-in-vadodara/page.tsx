import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Dandruff Treatment Vadodara | Permanent Cure | ₹500",
  description: "✅ Dandruff treatment in Vadodara ✓ 90% see results in 2 weeks ✓ Stubborn dandruff cured ✓ Scalp treatment ✓ Stop itching. Consultation ₹500. Book now!",
  keywords: "dandruff treatment vadodara, scalp treatment vadodara, dandruff cure vadodara, dandruff doctor near me",
};

export default function DandruffTreatmentPage() {
  const content = {
    heroTitle: "Dandruff Treatment in Vadodara",
    heroSubtitle: "End the Flake Problem Permanently",
    
    introContent: `Dandruff seems simple but can be surprisingly stubborn. That white flaking is usually caused by a yeast overgrowth on the scalp, but severity varies and standard shampoos often aren't enough.

Persistent dandruff suggests underlying scalp conditions — seborrheic dermatitis, scalp psoriasis, or fungal overgrowth that needs medical treatment. When over-the-counter solutions fail, it's time for professional intervention.

We diagnose what's actually causing your dandruff and treat accordingly. Medical-strength antifungal treatments, scalp therapies, and maintenance protocols that actually work. No more embarrassing flakes on your shoulders.`,

    whyChooseUs: [
      "Proper diagnosis of dandruff cause",
      "Medical-strength treatments",
      "Treatment for underlying conditions",
      "Long-term control strategies",
      "Scalp health optimization",
      "Solutions when OTC products fail"
    ],

    services: [
      {
        title: "Dandruff Diagnosis",
        description: "Identifying what's causing your dandruff — simple overgrowth, seborrheic dermatitis, psoriasis, or other conditions."
      },
      {
        title: "Medical Antifungal Treatment",
        description: "Prescription-strength antifungal medications for stubborn dandruff."
      },
      {
        title: "Scalp Treatments",
        description: "In-clinic treatments to reduce flaking and improve scalp health."
      },
      {
        title: "Seborrheic Dermatitis Management",
        description: "Comprehensive treatment for this common cause of severe dandruff."
      },
      {
        title: "Maintenance Protocols",
        description: "Ongoing care to prevent dandruff recurrence."
      },
      {
        title: "Scalp Psoriasis Treatment",
        description: "When dandruff is actually scalp psoriasis — proper diagnosis and treatment."
      }
    ],

    processSteps: [
      {
        title: "Scalp Examination",
        description: "Looking at your scalp to identify the type and severity of dandruff."
      },
      {
        title: "Cause Identification",
        description: "Determining whether it's simple dandruff or an underlying condition."
      },
      {
        title: "Targeted Treatment",
        description: "Prescription treatments matched to your specific condition."
      },
      {
        title: "Long-term Control",
        description: "Maintenance strategy to keep dandruff from returning."
      }
    ],

    faqItems: [
      {
        question: "Why doesn't my dandruff shampoo work?",
        answer: "OTC products aren't strong enough for some cases. You may have seborrheic dermatitis or another condition that needs medical treatment."
      },
      {
        question: "Is dandruff caused by poor hygiene?",
        answer: "No — it's caused by yeast overgrowth, not lack of washing. In fact, over-washing can worsen some scalp conditions."
      },
      {
        question: "Can dandruff cause hair loss?",
        answer: "Severe dandruff and scalp inflammation can affect hair health. Treating the underlying condition helps maintain healthy hair."
      },
      {
        question: "Is dandruff curable?",
        answer: "Controllable, yes. Complete permanent cure depends on the underlying cause. Most patients achieve excellent control with proper treatment."
      },
      {
        question: "How long before dandruff improves?",
        answer: "Noticeable improvement often within 2-4 weeks of proper treatment. Complete control may take 6-8 weeks."
      }
    ],

    ctaText: "End Your Dandruff Problem",
    ctaDescription: "Stubborn dandruff needs professional treatment. Stop living with embarrassing flakes. Book your scalp consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="dandruff-treatment-in-vadodara"
      content={content}
    />
  );
}
