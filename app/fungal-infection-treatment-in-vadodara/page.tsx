import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Fungal Infection Treatment Vadodara | Fast Cure | ₹500",
  description: "✅ Fungal infection treatment in Vadodara ✓ 95% cure rate ✓ Fast relief ✓ Ringworm, athlete's foot ✓ Stop recurrence. Consultation ₹500. Walk-in welcome!",
  keywords: "fungal infection treatment vadodara, ringworm treatment vadodara, skin fungus treatment, fungal infection doctor near me",
};

export default function FungalInfectionTreatmentPage() {
  const content = {
    heroTitle: "Fungal Infection Treatment in Vadodara",
    heroSubtitle: "Effective Treatment for All Fungal Conditions",
    
    introContent: `Fungal infections are extremely common in India's humid climate. Ringworm, athlete's foot, jock itch, nail fungus — these organisms thrive in warm, moist conditions. They're uncomfortable, contagious, and stubborn if not treated properly.

Over-the-counter antifungals often fail because people stop treatment too early or the infection is deeper than surface products can reach. Stubborn or widespread fungal infections need prescription-strength treatment and sometimes oral medications.

We diagnose fungal infections properly and treat them completely. That means adequate duration, appropriate strength, and addressing factors that made you susceptible. Complete cure is the goal, not just temporary improvement.`,

    whyChooseUs: [
      "Proper fungal infection diagnosis",
      "Prescription-strength treatments",
      "Complete cure approach",
      "Addressing recurrence risk",
      "Treatment for resistant infections",
      "Nail fungus expertise"
    ],

    services: [
      {
        title: "Fungal Diagnosis",
        description: "Confirming fungal infection and identifying the specific organism when needed."
      },
      {
        title: "Skin Fungal Treatment",
        description: "Ringworm, tinea corporis, and other skin fungal infections."
      },
      {
        title: "Nail Fungus Treatment",
        description: "Stubborn nail infections requiring prolonged treatment."
      },
      {
        title: "Groin/Foot Fungus",
        description: "Jock itch, athlete's foot — common infections in covered, moist areas."
      },
      {
        title: "Oral Antifungal Therapy",
        description: "For widespread or resistant infections needing systemic treatment."
      },
      {
        title: "Recurrence Prevention",
        description: "Addressing factors that led to infection to prevent return."
      }
    ],

    processSteps: [
      {
        title: "Diagnosis",
        description: "Confirming fungal infection, sometimes with microscopy or culture."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate antifungal based on infection type and extent."
      },
      {
        title: "Complete Treatment",
        description: "Adequate duration to fully eliminate the fungus."
      },
      {
        title: "Prevention Guidance",
        description: "Advice to prevent recurrence."
      }
    ],

    faqItems: [
      {
        question: "Why does my fungal infection keep coming back?",
        answer: "Common reasons: incomplete treatment, reinfection from sources (shoes, towels), or conditions favoring fungal growth. We address all these factors."
      },
      {
        question: "How long does treatment take?",
        answer: "Skin fungus: 2-4 weeks. Nail fungus: 3-6 months. Stopping early guarantees recurrence."
      },
      {
        question: "Is fungal infection contagious?",
        answer: "Yes — can spread to others through direct contact or shared items. Treatment reduces contagiousness."
      },
      {
        question: "Why doesn't pharmacy cream work?",
        answer: "OTC products may be too weak, or infection may need oral treatment. Also, people often stop too early."
      },
      {
        question: "Can nail fungus be cured?",
        answer: "Yes, but it requires patience. Several months of oral antifungal therapy with good compliance."
      }
    ],

    ctaText: "Cure Your Fungal Infection Completely",
    ctaDescription: "Don't let fungal infections persist or recur. Complete treatment from a specialist. Book your consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="fungal-infection-treatment-in-vadodara"
      content={content}
    />
  );
}
