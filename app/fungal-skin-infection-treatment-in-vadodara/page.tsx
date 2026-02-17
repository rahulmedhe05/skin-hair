import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Fungal Skin Infection Treatment Vadodara | Fast Cure",
  description: "✅ Fungal skin infection treatment in Vadodara ✓ 95% cure rate ✓ Fast relief ✓ Ringworm, jock itch ✓ Stop recurrence. Consultation ₹500. Call now!",
  keywords: "fungal skin infection treatment vadodara, ringworm treatment vadodara, fungal infection cost, fungal infection near me",
};

export default function FungalSkinInfectionTreatmentPage() {
  const content = {
    heroTitle: "Fungal Skin Infection Treatment in Vadodara",
    heroSubtitle: "Clear Fungal Infections Completely",
    
    introContent: `Fungal skin infections are everywhere in Vadodara's humid climate — ringworm, athlete's foot, jock itch, candida skin infections. They're itchy, embarrassing, and frustratingly recurring. Proper treatment clears them; improper treatment just suppresses them temporarily.

The key to curing fungal infections is correct diagnosis and complete treatment. Many people use over-the-counter antifungals briefly, then stop when symptoms improve. The fungus survives and returns. We ensure complete eradication.

Different fungi need different treatments. Proper identification allows targeted therapy that actually clears the infection rather than just managing symptoms.`,

    whyChooseUs: [
      "Correct diagnosis",
      "Complete treatment courses",
      "Prevent recurrence",
      "All fungal types treated",
      "Oral and topical options",
      "Long-term prevention"
    ],

    services: [
      {
        title: "Ringworm Treatment",
        description: "Clearing circular fungal patches on skin."
      },
      {
        title: "Athlete's Foot Treatment",
        description: "Treating fungal infection of feet."
      },
      {
        title: "Jock Itch Treatment",
        description: "Clearing groin area fungal infections."
      },
      {
        title: "Nail Fungus Treatment",
        description: "Treating fungal nail infections."
      },
      {
        title: "Candida Skin Treatment",
        description: "Managing yeast infections of skin folds."
      },
      {
        title: "Recurrent Infection Management",
        description: "Preventing repeat fungal infections."
      }
    ],

    processSteps: [
      {
        title: "Diagnosis",
        description: "Confirming fungal infection and identifying type."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate antifungal therapy."
      },
      {
        title: "Complete Treatment",
        description: "Full course to ensure complete clearance."
      },
      {
        title: "Prevention",
        description: "Strategies to prevent recurrence."
      }
    ],

    faqItems: [
      {
        question: "Why does my fungal infection keep coming back?",
        answer: "Usually incomplete treatment, reinfection from the environment, or not addressing underlying factors like moisture."
      },
      {
        question: "Do I need oral medication?",
        answer: "Depends on infection type and severity. Some clear with topicals, others (like nail fungus) need oral medication."
      },
      {
        question: "How long does treatment take?",
        answer: "Skin infections: 2-4 weeks. Nail infections: 3-6 months. Complete the full course even if symptoms resolve."
      },
      {
        question: "Is fungal infection contagious?",
        answer: "Yes — avoid sharing towels, clothes. Treat promptly to reduce spread to family members."
      },
      {
        question: "How can I prevent fungal infections?",
        answer: "Keep skin dry, wear breathable fabrics, don't share personal items, use antifungal powder in humid weather."
      }
    ],

    ctaText: "Clear Your Fungal Infection Completely",
    ctaDescription: "Don't live with recurring fungal infections. Complete treatment for lasting clearance. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="fungal-skin-infection-treatment-in-vadodara"
      content={content}
    />
  );
}
