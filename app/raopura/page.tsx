import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Raopura | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Raopura, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic raopura, dermatologist raopura vadodara, hair clinic raopura, skin doctor near raopura",
};

export default function RaopuraPage() {
  const content = {
    heroTitle: "Raopura's Complete Skin & Hair Solution",
    heroSubtitle: "Expert Dermatology in Vadodara's Historic Commercial Center",
    
    introContent: `Raopura is Vadodara's historic commercial heart — a bustling area where business meets tradition. Jewelers, textile merchants, professionals, and families have called this area home for generations.

Our clinic understands Raopura's unique character. Busy commercial activity, traditional business families, a mix of old and new — this diversity requires flexible, understanding healthcare.

We've earned Raopura's trust through consistent, reliable service. In an area where reputation matters enormously, word-of-mouth has been our best marketing. Satisfied patients recommend us to relatives, friends, and business associates.`,

    whyChooseUs: [
      "Located in Vadodara's commercial heart",
      "Understanding of merchant family needs",
      "Trusted by business community",
      "Efficient service for busy schedules",
      "Traditional values, modern treatment",
      "Reputation built through results"
    ],

    services: [
      {
        title: "Business Professional Care",
        description: "Quick, effective treatment for those who can't afford hours away from work. Results-focused solutions for busy merchants and professionals."
      },
      {
        title: "Wedding & Event Preparation",
        description: "Raopura hosts many weddings and events. We help you look your best for important occasions."
      },
      {
        title: "Hair Confidence",
        description: "In business, appearance matters. We address hair concerns discretely and effectively."
      },
      {
        title: "General Dermatology",
        description: "All skin conditions treated competently. From minor irritations to complex issues."
      },
      {
        title: "Family Care",
        description: "Traditional business families often treat together. We accommodate joint family appointments."
      },
      {
        title: "Aesthetic Enhancement",
        description: "For those who want it — subtle improvements that enhance professional appearance."
      }
    ],

    processSteps: [
      {
        title: "Central Access",
        description: "Located in the heart of Raopura. Accessible from anywhere in central Vadodara."
      },
      {
        title: "Efficient Consultation",
        description: "Respect for your time. Thorough but not wasteful appointments."
      },
      {
        title: "Results-Driven Treatment",
        description: "We focus on solving your problem effectively."
      },
      {
        title: "Business-Friendly Follow-Up",
        description: "Follow-ups scheduled around your business hours."
      }
    ],

    faqItems: [
      {
        question: "Can I visit during shop hours?",
        answer: "We have flexible timing including early morning and lunch hours to accommodate Raopura's business schedules."
      },
      {
        question: "Do you treat wedding prep requirements?",
        answer: "Yes, we offer bridal and groom preparation packages. Start early for best results — ideally 3-6 months before the event."
      },
      {
        question: "How discrete is treatment for appearance issues?",
        answer: "Completely private consultations. In business communities where reputation matters, we understand discretion is essential."
      },
      {
        question: "Are you trusted by established Raopura families?",
        answer: "Many of our patients come from families who've been in Raopura for generations. That trust is earned through consistent results."
      },
      {
        question: "What about group appointments for family?",
        answer: "Yes, we can schedule joint family appointments for convenience. Especially useful for traditional joint families."
      }
    ],

    ctaText: "Raopura's Reputation, Our Expertise",
    ctaDescription: "In Vadodara's commercial heart, reputation is everything. We've earned ours through results. Join the families and businesses that trust us. Book today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="raopura"
      content={content}
    />
  );
}
