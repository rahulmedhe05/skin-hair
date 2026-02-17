import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Kalali | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Kalali, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic kalali, dermatologist kalali vadodara, hair clinic kalali, skin doctor near kalali",
};

export default function KalaliPage() {
  const content = {
    heroTitle: "Kalali's Trusted Skin & Hair Care",
    heroSubtitle: "Quality Dermatology for the Growing Community",
    
    introContent: `Kalali sits at the edge of Vadodara's expanding boundaries. What was once a village is now a growing suburb, with new residents joining long-time locals. Healthcare services are catching up, and we're part of that progress.

Our clinic serves Kalali residents who previously had to travel significant distances for skin and hair treatment. Now, quality dermatological care is available locally — same expertise, much less travel.

We see a unique mix of patients here: farmers dealing with sun damage, new residents from urban transfers, young families in developing societies, and elderly villagers with age-related skin concerns. Each gets appropriate, personalized care.`,

    whyChooseUs: [
      "Local clinic serving Kalali & nearby village areas",
      "Understanding of rural and semi-urban skin concerns",
      "Affordable pricing for all economic backgrounds",
      "Experienced doctors, modern treatments",
      "No need to travel to city center anymore",
      "Warm, welcoming environment for village residents"
    ],

    services: [
      {
        title: "Agricultural Skin Care",
        description: "Sun damage, pesticide exposure, hard water effects — we understand the skin challenges faced by farming families and treat them effectively."
      },
      {
        title: "General Dermatology",
        description: "All common skin conditions treated expertly. Allergies, infections, rashes, eczema — proper diagnosis and effective treatment."
      },
      {
        title: "Affordable Hair Fall Solutions",
        description: "Hair loss treatment that doesn't require big budgets. We offer effective options at various price points."
      },
      {
        title: "Skin Infections",
        description: "Fungal infections thrive in humid conditions. We provide quick, effective treatment for all types of skin infections."
      },
      {
        title: "Basic Cosmetic Treatments",
        description: "Looking good isn't just for city people. We offer skin brightening, acne treatment, and simple cosmetic procedures."
      },
      {
        title: "Senior Skin Care",
        description: "Elderly residents have specific skin needs. We treat age-related conditions with patience and understanding."
      }
    ],

    processSteps: [
      {
        title: "Visit Us",
        description: "Walk in or call ahead. We're accessible and welcoming to everyone."
      },
      {
        title: "Comfortable Consultation",
        description: "We speak your language (literally and figuratively). No intimidating medical jargon."
      },
      {
        title: "Practical Treatment",
        description: "Treatments that fit your life and budget. Real solutions for real people."
      },
      {
        title: "Local Follow-Up",
        description: "Easy access for follow-ups. We're part of your community."
      }
    ],

    faqItems: [
      {
        question: "Do you understand problems faced by farmers?",
        answer: "Yes, sun exposure, pesticide contact, hard well water — these affect skin differently than urban environments. We factor these into our diagnosis and treatment."
      },
      {
        question: "Can elderly patients from the village be treated?",
        answer: "Absolutely. We welcome patients of all ages. Our staff is patient and respectful with elderly patients, explaining things clearly and simply."
      },
      {
        question: "Is your clinic accessible from nearby villages?",
        answer: "Yes, we serve not just Kalali but surrounding areas too. If you can get here, we'll take care of you."
      },
      {
        question: "What languages do you speak?",
        answer: "Gujarati (including local dialect), Hindi, and English. Clear communication is essential for good treatment."
      },
      {
        question: "Are advanced treatments available here?",
        answer: "Yes, we offer laser treatments, hair restoration options, and cosmetic procedures. You don't need to go to the city for modern dermatology."
      }
    ],

    ctaText: "Quality Skincare Comes to Kalali",
    ctaDescription: "No more long trips for skin and hair problems. We're here in Kalali, ready to help. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="kalali"
      content={content}
    />
  );
}
