import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Vemali | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Vemali, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic vemali, dermatologist vemali vadodara, hair clinic vemali, skin doctor near vemali",
};

export default function VemaliPage() {
  const content = {
    heroTitle: "Vemali's Reliable Skin & Hair Clinic",
    heroSubtitle: "Quality Healthcare for Our Local Community",
    
    introContent: `Vemali is one of those Vadodara localities where community ties run deep. Neighbors know each other, recommendations carry weight, and trust is earned over time.

Our clinic has become a trusted part of Vemali's healthcare landscape by delivering consistent results. We don't rely on flashy advertising — we rely on satisfied patients who tell their friends and family.

The Vemali community includes long-established families, working professionals, and young households. We serve each with the same dedication, adapting our approach to their specific needs while maintaining consistent quality.`,

    whyChooseUs: [
      "Trusted by Vemali families for years",
      "Reputation built through results, not advertising",
      "Understanding of local community values",
      "Full dermatological services locally",
      "Reasonable pricing for working families",
      "Doctors who know their patients"
    ],

    services: [
      {
        title: "Family Skin Care",
        description: "We treat families across generations. That continuity helps us understand patterns and provide better care."
      },
      {
        title: "Dependable Hair Treatment",
        description: "Hair fall solutions that actually work. We investigate causes thoroughly before recommending treatment."
      },
      {
        title: "General Dermatology",
        description: "All skin conditions treated competently — from simple allergies to complex chronic issues."
      },
      {
        title: "Acne Expertise",
        description: "Clear skin through proper treatment. Popular with Vemali's younger residents."
      },
      {
        title: "Senior Care",
        description: "Elderly patients need special attention. We provide gentle, patient, respectful care."
      },
      {
        title: "Cosmetic Options",
        description: "For those interested — tasteful enhancements that improve without dramatically changing."
      }
    ],

    processSteps: [
      {
        title: "Familiar Environment",
        description: "Walking into our clinic feels comfortable, not clinical."
      },
      {
        title: "Unhurried Care",
        description: "We take time with each patient. No assembly-line treatment."
      },
      {
        title: "Sensible Solutions",
        description: "Recommendations that fit your life, not just your condition."
      },
      {
        title: "Long-Term Relationship",
        description: "We're here for ongoing care, not just single visits."
      }
    ],

    faqItems: [
      {
        question: "How did you become trusted in Vemali?",
        answer: "Patient by patient, treatment by treatment. Word-of-mouth built our reputation over years. That's the only way to earn trust."
      },
      {
        question: "Do you remember your patients?",
        answer: "Regular patients, yes. We maintain good records too. That continuity of care makes a difference."
      },
      {
        question: "Can you treat my parents/grandparents?",
        answer: "Yes, we're experienced with elderly patients. Patient approach, clear communication, gentle treatment."
      },
      {
        question: "What about complex skin conditions?",
        answer: "We handle most conditions competently. For rare, highly specialized cases, we refer appropriately while providing ongoing support."
      },
      {
        question: "Is payment flexible?",
        answer: "Cash, cards, UPI — whatever works. For larger treatments, we can discuss options."
      }
    ],

    ctaText: "Join the Families Who Trust Us",
    ctaDescription: "Vemali's community has chosen us. Become part of a patient family that values genuine care. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="vemali"
      content={content}
    />
  );
}
