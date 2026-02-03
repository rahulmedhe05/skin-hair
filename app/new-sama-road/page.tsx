import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic New Sama Road | Best Dermatologist",
  description: "🏆 Top skin & hair clinic on New Sama Road, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic new sama road, dermatologist new sama road vadodara, hair clinic new sama road, skin doctor near new sama road",
};

export default function NewSamaRoadPage() {
  const content = {
    heroTitle: "New Sama Road's Trusted Skin & Hair Experts",
    heroSubtitle: "Quality Dermatology on Vadodara's Growing Eastern Corridor",
    
    introContent: `New Sama Road has developed into a bustling residential and commercial corridor. Connecting old Sama to newer developments, it's home to a diverse population that needs accessible, quality healthcare.

Our clinic serves this growing community with the same expertise you'd find anywhere in Vadodara. Location shouldn't determine healthcare quality, and we ensure New Sama Road residents have excellent dermatological options nearby.

From young families in new apartments to longtime residents of the area, from businesspeople in nearby commercial complexes to students — we serve the full spectrum of New Sama Road's community.`,

    whyChooseUs: [
      "Conveniently located on New Sama Road",
      "Serving eastern Vadodara's growing population",
      "Full-service dermatology clinic",
      "Experienced doctors, modern equipment",
      "Accessible pricing for diverse demographics",
      "Easy access from Sama, Savli Road & nearby areas"
    ],

    services: [
      {
        title: "Comprehensive Skin Care",
        description: "All skin conditions treated under one roof. From common issues to complex cases, we have the expertise."
      },
      {
        title: "Hair Health",
        description: "Complete hair care from dandruff treatment to hair transplant consultations. We address the full range of hair concerns."
      },
      {
        title: "Acne Expertise",
        description: "Teen acne, adult acne, acne scars — we've treated thousands of cases with consistent success."
      },
      {
        title: "Laser Services",
        description: "Hair removal, pigmentation, skin rejuvenation — our laser treatments serve the area's growing demand."
      },
      {
        title: "Anti-Aging Options",
        description: "Age gracefully with help from modern dermatology. Multiple options at various price points."
      },
      {
        title: "Family Dermatology",
        description: "Bring the whole family. We treat all ages with appropriate care."
      }
    ],

    processSteps: [
      {
        title: "Easy Reach",
        description: "Located on the main road, easy to find and access from anywhere in the area."
      },
      {
        title: "Thorough Consultation",
        description: "We take time to understand your concerns before recommending treatment."
      },
      {
        title: "Customized Treatment",
        description: "Treatment plans designed for your specific needs and practical constraints."
      },
      {
        title: "Accessible Follow-Up",
        description: "Being local means follow-ups are convenient. We're here when you need us."
      }
    ],

    faqItems: [
      {
        question: "Which areas do you serve from New Sama Road?",
        answer: "We serve residents from New Sama Road, Sama, Savli Road, and surrounding areas. Being on the main road makes us accessible from multiple directions."
      },
      {
        question: "How does your pricing compare to city-center clinics?",
        answer: "Competitive, often better. Lower overheads allow us to offer quality care at accessible prices."
      },
      {
        question: "Are all treatments available at this location?",
        answer: "Yes, we offer the complete range of dermatological services — from basic consultations to advanced laser treatments."
      },
      {
        question: "What are your working hours?",
        answer: "We're open Monday through Saturday with extended evening hours. Sunday morning consultations available."
      },
      {
        question: "Is parking convenient?",
        answer: "Yes, adequate parking available. New Sama Road's development includes better facilities than older areas."
      }
    ],

    ctaText: "New Sama Road's Own Skin Specialists",
    ctaDescription: "Quality dermatological care has come to your doorstep. Why travel far when expert treatment is right here? Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="new-sama-road"
      content={content}
    />
  );
}
