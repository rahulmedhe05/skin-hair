import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Wart Removal Vadodara ₹800 | Same Day | Book Now",
  description: "✅ Wart removal in Vadodara ₹800 onwards ✓ Instant removal ✓ RF cautery & cryo ✓ All wart types ✓ No recurrence guarantee. Walk-in available. Call!",
  keywords: "wart removal vadodara, warts treatment vadodara, wart removal cost, wart removal near me",
};

export default function WartRemovalPage() {
  const content = {
    heroTitle: "Wart Removal in Vadodara",
    heroSubtitle: "Eliminate Stubborn Warts",
    
    introContent: `Warts are viral growths caused by HPV. They're harmless but annoying, sometimes embarrassing, and can spread to other areas or other people. Home remedies and OTC treatments often frustrate because warts are stubborn.

Professional removal is faster and more effective. Multiple methods exist — cryotherapy, electrosurgery, laser, chemical treatments — and the right choice depends on wart type, location, and number.

We remove warts using proven techniques with minimal scarring. Whether it's a single plantar wart, multiple common warts, or more sensitive areas, we have appropriate treatment options.`,

    whyChooseUs: [
      "Multiple removal techniques",
      "Treatment for all wart types",
      "Minimal scarring approach",
      "High success rates",
      "Treatment for stubborn warts",
      "Recurrence prevention"
    ],

    services: [
      {
        title: "Cryotherapy",
        description: "Freezing warts with liquid nitrogen — effective for most common warts."
      },
      {
        title: "Electrosurgery",
        description: "Electrical removal for appropriate warts."
      },
      {
        title: "Laser Treatment",
        description: "For resistant warts or when other methods aren't suitable."
      },
      {
        title: "Chemical Treatment",
        description: "Topical acids and other chemicals for gradual wart removal."
      },
      {
        title: "Plantar Wart Treatment",
        description: "Specialized treatment for painful foot warts."
      },
      {
        title: "Multiple Wart Treatment",
        description: "Efficient removal of numerous warts."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating wart type, number, and location to choose best treatment."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate removal method for your situation."
      },
      {
        title: "Removal Procedure",
        description: "Performing the wart removal treatment."
      },
      {
        title: "Follow-up",
        description: "Ensuring complete removal and treating any recurrence."
      }
    ],

    faqItems: [
      {
        question: "Do warts come back after removal?",
        answer: "Sometimes — the virus may still be present. We monitor and treat any recurrence promptly. Recurrence rates are lower with professional treatment than home remedies."
      },
      {
        question: "Is wart removal painful?",
        answer: "Mild discomfort during and after treatment. We use anesthesia when needed. Pain is temporary and manageable."
      },
      {
        question: "How many sessions needed?",
        answer: "Varies by wart type and size. Some clear in one session, others need 2-3 treatments. Plantar warts often need multiple sessions."
      },
      {
        question: "Will removal leave scars?",
        answer: "Professional removal minimizes scarring. Some methods leave less mark than others — we choose based on wart location."
      },
      {
        question: "Should I remove warts that don't bother me?",
        answer: "Consider removal because warts can spread to other areas and to other people. Also, some grow larger over time."
      }
    ],

    ctaText: "Remove Your Warts Safely",
    ctaDescription: "Don't struggle with stubborn warts. Professional removal is faster and more effective. Book your wart removal appointment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="wart-removal-in-vadodara"
      content={content}
    />
  );
}
