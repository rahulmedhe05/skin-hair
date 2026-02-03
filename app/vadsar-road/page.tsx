import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic Vadsar Road | Dermatologist",
  description: "🏆 Top skin & hair clinic on Vadsar Road, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic vadsar road, dermatologist vadsar road vadodara, hair clinic vadsar road, skin doctor near vadsar road",
};

export default function VadsarRoadPage() {
  const content = {
    heroTitle: "Vadsar Road's Skin & Hair Experts",
    heroSubtitle: "Professional Dermatology for East Vadodara",
    
    introContent: `Vadsar Road connects Vadodara to the eastern areas and beyond. Along this stretch, a growing community of residents deserves quality healthcare that doesn't require long trips into the city center.

Our clinic fills that need for skin and hair care. Whether you live on Vadsar Road itself, in the nearby residential areas, or in villages further east — we provide the same expert treatment you'd expect from central Vadodara clinics.

We've built our reputation patient by patient, treatment by treatment. In an area where word-of-mouth matters, our growth has come from results that speak for themselves.`,

    whyChooseUs: [
      "Convenient location on Vadsar Road",
      "Serving residents from eastern Vadodara and beyond",
      "Full range of dermatological services",
      "Experienced doctors who deliver results",
      "Affordable for the local community",
      "Trusted reputation built over years"
    ],

    services: [
      {
        title: "Comprehensive Skin Care",
        description: "All skin conditions treated — allergies, infections, chronic conditions, cosmetic concerns. Whatever your skin needs, we can help."
      },
      {
        title: "Hair Fall Treatment",
        description: "Hair loss has many causes. We investigate properly before recommending treatment, ensuring you get solutions that actually work."
      },
      {
        title: "Acne Solutions",
        description: "From mild to severe, teenage to adult — we treat all types of acne with customized protocols that deliver clear skin."
      },
      {
        title: "Laser Treatments",
        description: "Hair removal, pigmentation, skin rejuvenation — our laser services bring advanced treatment to Vadsar Road."
      },
      {
        title: "Anti-Aging Care",
        description: "Age gracefully with help from modern dermatology. We offer various anti-aging options from topical treatments to injectables."
      },
      {
        title: "Skin Infections",
        description: "Quick, effective treatment for fungal, bacterial, and viral skin infections. Relief when you need it."
      }
    ],

    processSteps: [
      {
        title: "Easy Access",
        description: "Located conveniently on Vadsar Road. Easy to find, easy to reach."
      },
      {
        title: "Proper Assessment",
        description: "We don't guess. Proper examination leads to accurate diagnosis."
      },
      {
        title: "Effective Treatment",
        description: "Treatment that works, priced fairly. No unnecessary procedures."
      },
      {
        title: "Follow-Through",
        description: "We track your progress and adjust as needed until you're satisfied."
      }
    ],

    faqItems: [
      {
        question: "How far do patients travel to see you?",
        answer: "We have patients from along Vadsar Road, nearby localities, and even villages in the eastern direction. If skin or hair issues are bothering you, the journey to us is worth it."
      },
      {
        question: "Are your treatments similar to city-center clinics?",
        answer: "Yes, we offer the same quality of care and range of treatments you'd find in central Vadodara. Location doesn't compromise our standards."
      },
      {
        question: "What about follow-up visits?",
        answer: "Follow-ups are essential for many treatments. Being local means follow-ups are convenient, not a burden."
      },
      {
        question: "Do you treat severe skin conditions?",
        answer: "Yes, we handle complex conditions like psoriasis, vitiligo, and severe acne. For rare conditions requiring super-specialized care, we refer appropriately."
      },
      {
        question: "Is payment flexible?",
        answer: "We accept cash, cards, and UPI. For larger treatments, EMI options may be available."
      }
    ],

    ctaText: "Vadsar Road's Own Skin Specialists",
    ctaDescription: "Quality dermatological care has come to your neighborhood. Why travel far when expert treatment is right here? Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="vadsar-road"
      content={content}
    />
  );
}
