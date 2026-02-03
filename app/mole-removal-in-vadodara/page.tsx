import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Mole Removal Vadodara ₹1,500 | Safe & Scarless | Book",
  description: "✅ Mole removal in Vadodara ₹1,500 onwards ✓ Laser & surgical options ✓ Minimal scarring ✓ Same-day procedure ✓ Expert dermatologist. Book consultation!",
  keywords: "mole removal vadodara, mole removal cost vadodara, laser mole removal, mole removal near me",
};

export default function MoleRemovalPage() {
  const content = {
    heroTitle: "Mole Removal in Vadodara",
    heroSubtitle: "Safe, Precise Mole Removal",
    
    introContent: `Moles can be removed for cosmetic reasons or medical necessity. That prominent facial mole you've always disliked. The mole that catches on clothing. Or the mole that's changed and needs evaluation.

Safe mole removal requires proper technique to minimize scarring and, importantly, the ability to recognize if a mole needs pathological examination. Not all moles should be destroyed without being checked.

We remove moles using appropriate techniques with cosmetic consideration. Suspicious moles are sent for pathology. The goal is clean removal with minimal scarring while ensuring nothing concerning is missed.`,

    whyChooseUs: [
      "Expert mole evaluation",
      "Minimal scarring techniques",
      "Cosmetic consideration",
      "Suspicious mole assessment",
      "Multiple removal methods",
      "Pathology when indicated"
    ],

    services: [
      {
        title: "Cosmetic Mole Removal",
        description: "Removing moles you don't like — face, neck, body."
      },
      {
        title: "Suspicious Mole Evaluation",
        description: "Assessing moles that have changed or look concerning."
      },
      {
        title: "Surgical Excision",
        description: "Complete mole removal with suturing for larger moles."
      },
      {
        title: "Shave Excision",
        description: "Superficial removal for appropriate raised moles."
      },
      {
        title: "Laser Mole Removal",
        description: "For suitable superficial moles with cosmetic priority."
      },
      {
        title: "Pathology Services",
        description: "Laboratory examination of concerning moles."
      }
    ],

    processSteps: [
      {
        title: "Mole Evaluation",
        description: "Examining the mole to determine best approach and if biopsy is needed."
      },
      {
        title: "Method Selection",
        description: "Choosing the appropriate removal technique based on mole characteristics."
      },
      {
        title: "Removal Procedure",
        description: "Removing the mole with attention to cosmetic outcome."
      },
      {
        title: "Pathology & Healing",
        description: "Sending for pathology if indicated, ensuring proper healing."
      }
    ],

    faqItems: [
      {
        question: "Will mole removal leave a scar?",
        answer: "Some mark is usually present, but minimized with proper technique. Location and removal method affect final appearance. Face heals well."
      },
      {
        question: "How do I know if a mole needs removal?",
        answer: "Medical removal needed if mole is changing, asymmetric, has irregular borders, multiple colors, or is large. Cosmetic removal is personal choice."
      },
      {
        question: "Can moles grow back after removal?",
        answer: "Complete excision removes the mole permanently. Shave removal has small recurrence risk. New moles can form in other areas."
      },
      {
        question: "Is mole removal painful?",
        answer: "Local anesthesia makes the procedure painless. Mild discomfort during healing is normal."
      },
      {
        question: "How long does healing take?",
        answer: "Initial healing 1-2 weeks. Final cosmetic result continues improving for several months."
      }
    ],

    ctaText: "Remove Unwanted Moles Safely",
    ctaDescription: "Whether for appearance or medical concern, get moles removed properly. Minimal scarring, proper evaluation. Book your mole consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="mole-removal-in-vadodara"
      content={content}
    />
  );
}
