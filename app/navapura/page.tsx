import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Navapura, Vadodara | Expert Skin Doctor",
  description: "Trusted skin and hair clinic in Navapura, Vadodara. Treatment for acne, hair fall, skin allergies & all skin conditions. Serving Navapura & old city area.",
  keywords: "skin clinic navapura, dermatologist navapura vadodara, hair specialist navapura, skin doctor navapura",
};

export default function NavapuraPage() {
  const content = {
    heroTitle: "Navapura's Dedicated Skin & Hair Clinic",
    heroSubtitle: "Quality Care for Vadodara's Historic Heart",
    
    introContent: `Navapura lies in the historic heart of Vadodara — where the city's traditions run deepest and community connections are strongest. Our clinic serves this vibrant area with healthcare that respects its character.

The old city has unique characteristics — denser living, older buildings, traditional lifestyles. These affect skin and hair in specific ways. We understand these nuances and address them in our treatment approach.

Our patients here value authenticity over flash. They want doctors who know what they're doing, charge fairly, and treat people with respect. That's exactly what we deliver.`,

    whyChooseUs: [
      "Serving Navapura and old city areas",
      "Understanding of old city lifestyle factors",
      "Authentic care without pretension",
      "Fair pricing for all families",
      "Respect for local customs and values",
      "Building trust through results"
    ],

    services: [
      {
        title: "Old City Skin Care",
        description: "Dense neighborhoods, older buildings, specific environmental factors — we understand how old city living affects skin and treat accordingly."
      },
      {
        title: "Traditional Hair Care",
        description: "Hair care solutions that respect traditional approaches while incorporating effective modern treatments."
      },
      {
        title: "General Dermatology",
        description: "Comprehensive skin care — allergies, infections, chronic conditions, and common issues — all handled expertly."
      },
      {
        title: "Family Treatment",
        description: "Whole families treated together. Joint households mean we often see multiple generations."
      },
      {
        title: "Accessible Cosmetics",
        description: "For those interested — simple cosmetic improvements at accessible prices."
      },
      {
        title: "Senior Care",
        description: "Older patients treated with patience and respect. Clear communication, gentle approach."
      }
    ],

    processSteps: [
      {
        title: "Easy Access",
        description: "Local clinic in the heart of old city. No long journeys needed."
      },
      {
        title: "Personal Attention",
        description: "We take time to understand each patient's specific situation."
      },
      {
        title: "Practical Solutions",
        description: "Treatment that fits your life in the old city — realistic, affordable, effective."
      },
      {
        title: "Ongoing Support",
        description: "We're part of the community. Here when you need us."
      }
    ],

    faqItems: [
      {
        question: "Do you understand old city skin challenges?",
        answer: "Yes — older buildings, dense neighborhoods, traditional cooking, specific water sources — we factor these into our approach."
      },
      {
        question: "Can you treat the whole family including elderly members?",
        answer: "Yes, we regularly treat joint families. From children to grandparents, appropriate care for each."
      },
      {
        question: "Is your pricing affordable?",
        answer: "We keep prices fair. Basic treatments are very accessible. We don't push unnecessary expensive procedures."
      },
      {
        question: "Do you speak Gujarati?",
        answer: "Of course. Gujarati, Hindi, English — whatever you're comfortable with."
      },
      {
        question: "What about reaching your clinic in narrow lanes?",
        answer: "We're located for accessibility. Specific directions provided when you book."
      }
    ],

    ctaText: "Old City Values, Modern Treatment",
    ctaDescription: "Authentic care from doctors who understand the old city. Quality treatment, fair pricing, genuine respect. Visit us today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="navapura"
      content={content}
    />
  );
}
