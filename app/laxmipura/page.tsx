import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Laxmipura | Dermatologist",
  description: "🏆 Top skin & hair clinic in Laxmipura, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic laxmipura, dermatologist laxmipura vadodara, hair clinic laxmipura, skin doctor near laxmipura",
};

export default function LaxmipuraPage() {
  const content = {
    heroTitle: "Laxmipura's Trusted Skin & Hair Clinic",
    heroSubtitle: "Quality Dermatology for Our Local Community",
    
    introContent: `Laxmipura represents traditional Vadodara — a neighborhood with history, community bonds, and values that have stood the test of time. Healthcare here should respect those values while providing modern medical expertise.

Our clinic serves Laxmipura with a combination of traditional care values and contemporary treatment. We listen like doctors used to listen. We examine thoroughly. We explain clearly. And we use the most effective treatments available.

The Laxmipura community has rewarded our approach with trust. Word-of-mouth recommendations bring new patients. Satisfied patients return for continued care. That cycle of trust is something we protect fiercely.`,

    whyChooseUs: [
      "Trusted by Laxmipura families for years",
      "Traditional values, modern treatment",
      "Community-focused healthcare approach",
      "Affordable, accessible care",
      "Doctors who respect local values",
      "Building relationships, not just treating conditions"
    ],

    services: [
      {
        title: "Community Dermatology",
        description: "Skin care rooted in community values. Respectful, thorough, effective treatment for everyone."
      },
      {
        title: "Traditional Hair Care",
        description: "We understand hair care concerns that have been in families for generations. Modern solutions for timeless problems."
      },
      {
        title: "Family Skin Health",
        description: "All ages treated with appropriate care. Children, adults, seniors — each gets what they need."
      },
      {
        title: "General Dermatology",
        description: "All skin conditions competently managed. From simple allergies to complex chronic issues."
      },
      {
        title: "Gentle Cosmetics",
        description: "For those interested — subtle improvements that enhance without changing who you are."
      },
      {
        title: "Senior Skin Care",
        description: "Elderly patients receive patient, respectful, thorough care."
      }
    ],

    processSteps: [
      {
        title: "Warm Welcome",
        description: "Enter a clinic that feels welcoming, not intimidating."
      },
      {
        title: "Respectful Consultation",
        description: "We listen completely before offering opinions. Your concerns matter."
      },
      {
        title: "Clear Treatment",
        description: "Recommendations in plain language. No confusing jargon, no pressure."
      },
      {
        title: "Continued Care",
        description: "We're here for the long term. Regular patients become almost like family."
      }
    ],

    faqItems: [
      {
        question: "Do you respect traditional values?",
        answer: "Absolutely. We understand conservative sensibilities and treat all patients with appropriate respect and discretion."
      },
      {
        question: "Can you explain things in Gujarati?",
        answer: "Yes, Gujarati, Hindi, and English. We communicate in whatever makes you most comfortable."
      },
      {
        question: "Is it expensive for middle-class families?",
        answer: "We price consciously. Quality care at reasonable rates. We never push unnecessary expensive treatments."
      },
      {
        question: "Do you treat elderly patients with patience?",
        answer: "Yes, we take extra time with senior patients. Clear explanations, gentle approach, respectful treatment."
      },
      {
        question: "How do most people find out about you?",
        answer: "Word-of-mouth, mostly. Neighbors recommending to neighbors. That's how community clinics grow."
      }
    ],

    ctaText: "Laxmipura Trusts Our Care",
    ctaDescription: "Join the families who've chosen us. Traditional values, modern treatment, lasting relationships. Book your visit today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="laxmipura"
      content={content}
    />
  );
}
