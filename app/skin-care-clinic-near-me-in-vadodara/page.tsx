import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic Near Me Vadodara | Convenient Location | ₹500",
  description: "✅ Skin care clinic near you in Vadodara ✓ Easy access ✓ Expert dermatologist ✓ All skin problems ✓ Walk-in welcome. Consultation ₹500. Visit today!",
  keywords: "skin clinic near me vadodara, dermatologist near me, skin care near me, skin doctor near me",
};

export default function SkinClinicNearMePage() {
  const content = {
    heroTitle: "Quality Skin Care Close to You in Vadodara",
    heroSubtitle: "Expert Dermatology Within Reach",
    
    introContent: `Location matters when choosing a skin clinic. Regular visits are often necessary — follow-ups, ongoing treatments, maintenance sessions. A clinic that's convenient to reach makes sticking with treatment easier.

But proximity shouldn't mean compromising on quality. You deserve both — expert care AND convenient access. That combination exists, and finding it makes a real difference to your skin health journey.

We've served patients from across Vadodara who appreciate having quality dermatological care accessible to their neighborhood. Less travel time means more consistency in treatment, and consistency is what produces results.`,

    whyChooseUs: [
      "Accessible location in Vadodara",
      "Easy to reach from multiple areas",
      "Convenient appointment times",
      "Quality care close to home",
      "No need to travel far for expertise",
      "Regular visits made practical"
    ],

    services: [
      {
        title: "Local Skin Consultations",
        description: "Expert dermatology assessment without long commutes. Same expertise, closer to you."
      },
      {
        title: "Convenient Treatments",
        description: "Procedures and treatments available locally. No need to travel across the city for good care."
      },
      {
        title: "Regular Follow-ups",
        description: "Easy access encourages proper follow-through with treatment plans."
      },
      {
        title: "Maintenance Sessions",
        description: "Ongoing treatments like laser sessions or cosmetic touch-ups made practical by location."
      },
      {
        title: "Emergency Skin Issues",
        description: "Sudden rashes, reactions, or infections — quick access to care when you need it."
      },
      {
        title: "Complete Services",
        description: "Full dermatological services without compromise — all available locally."
      }
    ],

    processSteps: [
      {
        title: "Check Our Location",
        description: "See how close we are to your home or workplace."
      },
      {
        title: "Easy Booking",
        description: "Schedule at a time that works with your daily routine."
      },
      {
        title: "Quick Visit",
        description: "Efficient appointments respect your time without rushing your care."
      },
      {
        title: "Simple Follow-ups",
        description: "Return visits are easy when the clinic is convenient."
      }
    ],

    faqItems: [
      {
        question: "Where exactly is your clinic?",
        answer: "We're centrally located in Vadodara with easy access from multiple neighborhoods. Contact us for specific directions from your area."
      },
      {
        question: "Is parking available?",
        answer: "Yes, we have parking facilities. Accessibility is part of being convenient."
      },
      {
        question: "What are your hours?",
        answer: "We offer flexible hours including some early morning and late evening slots to accommodate different schedules."
      },
      {
        question: "Do you do home visits?",
        answer: "In special circumstances for patients with mobility issues. Generally, clinic visits allow better care with proper equipment."
      },
      {
        question: "Can I get same-day appointments for urgent issues?",
        answer: "We try to accommodate urgent cases. Call early and we'll do our best to fit you in."
      }
    ],

    ctaText: "Quality Care, Close to Home",
    ctaDescription: "Stop traveling far for good skin care. Expert dermatology is available near you. Find us and start your treatment journey. Book your nearby consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-care-clinic-near-me-in-vadodara"
      content={content}
    />
  );
}
