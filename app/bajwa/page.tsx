import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Bajwa | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Bajwa, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic bajwa, dermatologist bajwa vadodara, hair clinic bajwa, skin doctor near bajwa",
};

export default function BajwaPage() {
  const content = {
    heroTitle: "Bajwa's Trusted Skin & Hair Care Center",
    heroSubtitle: "Quality Dermatology for the Growing Community",
    
    introContent: `Bajwa represents Vadodara's expanding footprint — a growing area where new developments meet established communities. Healthcare services need to keep pace with this growth.

Our clinic fills the dermatology gap in Bajwa. Whether you're in one of the newer societies or have called this area home for years, we provide the skin and hair care you need without the hassle of traveling far.

We serve Bajwa's diverse population — from families in apartments to residents in independent houses, from young professionals to retirees. Each finds personalized care that addresses their specific concerns.`,

    whyChooseUs: [
      "Serving Bajwa's growing community",
      "Modern facility in a developing area",
      "Full range of skin and hair treatments",
      "Convenient local access",
      "Experienced, caring medical team",
      "Fair pricing for the local community"
    ],

    services: [
      {
        title: "Comprehensive Skin Care",
        description: "All skin conditions treated — from common issues like acne and allergies to complex conditions requiring expert management."
      },
      {
        title: "Hair Solutions",
        description: "Hair fall, dandruff, thinning — we diagnose the cause and provide effective treatment."
      },
      {
        title: "Family Dermatology",
        description: "Bring the whole family. We treat children, adults, and seniors with age-appropriate care."
      },
      {
        title: "Laser Services",
        description: "Hair removal, pigmentation treatment, skin rejuvenation — advanced technology available locally."
      },
      {
        title: "Cosmetic Options",
        description: "For those interested in enhancement — facials, peels, and anti-aging treatments."
      },
      {
        title: "Skin Health Management",
        description: "Ongoing care for chronic conditions. We partner with you for long-term skin health."
      }
    ],

    processSteps: [
      {
        title: "Local Convenience",
        description: "Right in Bajwa — no long journeys for quality care."
      },
      {
        title: "Personal Attention",
        description: "We take time to understand your concerns fully."
      },
      {
        title: "Tailored Treatment",
        description: "Solutions designed for your specific needs and circumstances."
      },
      {
        title: "Continued Care",
        description: "Ongoing support and easy follow-ups."
      }
    ],

    faqItems: [
      {
        question: "How long have you been in Bajwa?",
        answer: "We've been serving Bajwa residents since the area's development accelerated. Our patient base has grown alongside the community."
      },
      {
        question: "Are all treatments available here or do some require city visits?",
        answer: "Most treatments are available here. Only very specialized procedures might need referral, which is rare."
      },
      {
        question: "What's the best way to reach you?",
        answer: "Call or message to book. We're easy to find in Bajwa — directions provided when you schedule."
      },
      {
        question: "Do you treat new construction-related skin issues?",
        answer: "Yes, new construction areas often have water quality and dust issues that affect skin. We address these regularly."
      },
      {
        question: "Are you open on weekends?",
        answer: "Saturday yes, Sunday limited hours. Book ahead for weekend appointments as they fill quickly."
      }
    ],

    ctaText: "Bajwa's Skin Care Is Here",
    ctaDescription: "No need to leave your neighborhood for expert dermatology. Quality care has come to Bajwa. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="bajwa"
      content={content}
    />
  );
}
