import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic Race Course | Best Dermatologist",
  description: "🏆 Top skin & hair clinic near Race Course, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic race course, dermatologist race course vadodara, hair clinic race course, skin doctor near race course",
};

export default function RaceCoursePage() {
  const content = {
    heroTitle: "Race Course's Premium Skin & Hair Destination",
    heroSubtitle: "Where Vadodara's Elite Trust Their Skin",
    
    introContent: `The Race Course area represents Vadodara's most prestigious address. Wide roads, heritage bungalows, premium clubs, and residents who appreciate the finer things in life. Healthcare in this area should match those standards.

Our clinic delivers exactly that — premium dermatological care that meets the expectations of Race Course residents. Advanced treatments, personalized attention, and the kind of service that understands sophisticated clientele.

We're not just about luxury — we're about results. The same rigorous medical standards apply, just with added comfort and personalization that our patients appreciate.`,

    whyChooseUs: [
      "Premium location near Race Course area",
      "Services tailored for discerning clientele",
      "Advanced technologies not available elsewhere",
      "Experienced doctors with cosmetic specialization",
      "Private, comfortable treatment environment",
      "Unhurried, personalized appointments"
    ],

    services: [
      {
        title: "Advanced Anti-Aging",
        description: "Botox, premium fillers, thread lifts, and combination protocols. We use the same products and techniques trusted in top clinics worldwide."
      },
      {
        title: "Celebrity-Standard Treatments",
        description: "Vampire facials, skin boosters, and exclusive treatments. The same procedures trusted by celebrities, available here."
      },
      {
        title: "Hair Restoration Excellence",
        description: "From PRP to premium hair transplant services. We restore hair with techniques that prioritize natural appearance."
      },
      {
        title: "Full-Body Laser",
        description: "Comprehensive laser hair removal with premium machines. Comfort features that make treatment pleasant."
      },
      {
        title: "Bespoke Skincare Programs",
        description: "Customized maintenance programs designed around your lifestyle, social calendar, and skin goals."
      },
      {
        title: "Problem-Solving Dermatology",
        description: "Stubborn conditions that haven't responded elsewhere. We have the expertise and technology to tackle difficult cases."
      }
    ],

    processSteps: [
      {
        title: "Appointment at Your Convenience",
        description: "Schedule when it suits you. We accommodate busy social and professional calendars."
      },
      {
        title: "Extensive Consultation",
        description: "Unhurried discussion of your concerns, goals, and preferences. We take time to understand."
      },
      {
        title: "Bespoke Treatment Planning",
        description: "Treatment designed specifically for you — your skin, your concerns, your lifestyle."
      },
      {
        title: "Ongoing Relationship",
        description: "Long-term care partnerships. Your doctor knows you, your history, your preferences."
      }
    ],

    faqItems: [
      {
        question: "What makes your clinic 'premium'?",
        answer: "Beyond comfortable facilities, we offer advanced treatments, longer appointment times, personalized protocols, and doctors who truly partner with you on your skin journey."
      },
      {
        question: "Are your products genuine premium brands?",
        answer: "Absolutely. We use authentic, verified products from leading international brands. No substitutes, no compromises."
      },
      {
        question: "Can you work around my social calendar?",
        answer: "Yes, we can time treatments to ensure you're at your best for important events, and schedule procedures during your quieter periods."
      },
      {
        question: "Is privacy assured?",
        answer: "Complete discretion. Private consultations, discrete entrance, confidential records. Many of our patients value anonymity."
      },
      {
        question: "Do you treat celebrities or public figures?",
        answer: "We maintain confidentiality about all patients. But yes, discretion is something we're experienced in providing."
      }
    ],

    ctaText: "Experience Premium Skin Care",
    ctaDescription: "Your skin deserves the best treatment available. Experience the difference that premium care makes. Schedule your private consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="race-course"
      content={content}
    />
  );
}
