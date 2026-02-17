import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Psoriasis Treatment Vadodara | 80% Control | ₹500",
  description: "✅ Psoriasis treatment in Vadodara ✓ 80% achieve remission ✓ Biologics available ✓ Scalp psoriasis expert ✓ Long-term control. Consultation ₹500. Book now!",
  keywords: "psoriasis treatment vadodara, psoriasis specialist vadodara, plaque psoriasis treatment, psoriasis doctor near me",
};

export default function PsoriasisTreatmentPage() {
  const content = {
    heroTitle: "Psoriasis Treatment in Vadodara",
    heroSubtitle: "Control the Chronic Skin Condition",
    
    introContent: `Psoriasis is more than skin deep — it's an immune-mediated condition that speeds up skin cell turnover, causing thick, scaly patches. It's chronic, can affect joints, and significantly impacts quality of life if not managed well.

Treatment has transformed in recent years. Beyond traditional creams and light therapy, biologic medications now offer near-complete clearance for many patients. What was once considered untreatable can now often be controlled remarkably well.

We offer the full spectrum of psoriasis treatment — from topical management for mild cases to biologics for moderate-to-severe disease. The goal is clear or nearly clear skin with minimal impact on your life.`,

    whyChooseUs: [
      "Full psoriasis treatment spectrum",
      "Access to biologic therapies",
      "Understanding of psoriasis complexity",
      "Joint involvement awareness",
      "Long-term management expertise",
      "Quality of life focus"
    ],

    services: [
      {
        title: "Psoriasis Assessment",
        description: "Evaluating extent, type, joint involvement, and impact on life."
      },
      {
        title: "Topical Treatment",
        description: "Creams and ointments for mild psoriasis or adjunct to systemic therapy."
      },
      {
        title: "Phototherapy",
        description: "Light therapy for moderate psoriasis — effective and well-tolerated."
      },
      {
        title: "Systemic Medications",
        description: "Oral medications for widespread psoriasis."
      },
      {
        title: "Biologic Therapy",
        description: "Targeted biologics for moderate-to-severe psoriasis — often achieving near-complete clearance."
      },
      {
        title: "Psoriatic Arthritis Management",
        description: "Coordinating care when joints are involved."
      }
    ],

    processSteps: [
      {
        title: "Comprehensive Evaluation",
        description: "Assessing psoriasis extent, pattern, and any joint symptoms."
      },
      {
        title: "Severity Classification",
        description: "Determining if mild, moderate, or severe to guide treatment selection."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate treatment matching severity and your preferences."
      },
      {
        title: "Ongoing Management",
        description: "Long-term monitoring and adjustment for sustained control."
      }
    ],

    faqItems: [
      {
        question: "Can psoriasis be cured?",
        answer: "Not cured, but controlled — often very well. Modern treatments can achieve clear or almost-clear skin for extended periods."
      },
      {
        question: "Is psoriasis contagious?",
        answer: "Absolutely not. It's an immune condition, not an infection. You cannot catch or spread psoriasis."
      },
      {
        question: "What are biologics?",
        answer: "Targeted medications that block specific immune pathways involved in psoriasis. Highly effective for moderate-to-severe disease."
      },
      {
        question: "Will psoriasis affect my joints?",
        answer: "About 30% of psoriasis patients develop psoriatic arthritis. We screen for joint involvement and manage accordingly."
      },
      {
        question: "Is phototherapy safe?",
        answer: "When properly administered, yes. We use appropriate doses and monitor carefully."
      }
    ],

    ctaText: "Take Control of Your Psoriasis",
    ctaDescription: "Psoriasis treatment has advanced dramatically. Near-clear skin is achievable for most patients. Book your psoriasis consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="psoriasis-treatment-in-vadodara"
      content={content}
    />
  );
}
