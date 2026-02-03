import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic Near Me Vadodara | Walk-In Welcome | ₹500",
  description: "✅ Find skin clinic near you in Vadodara ✓ Convenient location ✓ Expert care ✓ All skin & hair needs ✓ Walk-in available. Consultation ₹500. Visit now!",
  keywords: "skin clinic near me vadodara, dermatology clinic vadodara, skin doctor near me, skin clinic near me",
};

export default function SkinClinicNearMePage() {
  const content = {
    heroTitle: "Skin Clinic Near Me in Vadodara",
    heroSubtitle: "Expert Skin Care, Conveniently Located",
    
    introContent: `Looking for a skin clinic nearby? Convenient access to quality dermatology care matters — whether for urgent skin issues or ongoing treatment that requires multiple visits.

A good skin clinic combines expertise with accessibility. Qualified doctors, proper equipment, range of services — all in a location that's easy for you to reach. Regular visits become manageable, not a burden.

We offer comprehensive skin, hair, and cosmetic services in Vadodara. If you're searching for a skin clinic near you that delivers both convenience and quality care, we're here to help.`,

    whyChooseUs: [
      "Convenient Vadodara location",
      "Comprehensive services",
      "Qualified specialists",
      "Modern equipment",
      "Efficient appointments",
      "Full range of treatments"
    ],

    services: [
      {
        title: "Skin Disease Treatment",
        description: "All skin conditions — acne, eczema, psoriasis, infections, and more."
      },
      {
        title: "Hair Treatments",
        description: "Hair loss, dandruff, scalp problems, and hair restoration."
      },
      {
        title: "Cosmetic Procedures",
        description: "Anti-aging, skin rejuvenation, and aesthetic enhancement."
      },
      {
        title: "Laser Treatments",
        description: "Hair removal, pigmentation, scars, and skin resurfacing."
      },
      {
        title: "Minor Procedures",
        description: "Mole removal, warts, skin tags, and other small procedures."
      },
      {
        title: "Regular Skin Care",
        description: "Facials, peels, and maintenance treatments."
      }
    ],

    processSteps: [
      {
        title: "Easy Booking",
        description: "Schedule your appointment at a convenient time."
      },
      {
        title: "Consultation",
        description: "Meet with our specialist to discuss your concerns."
      },
      {
        title: "Treatment",
        description: "Receive appropriate treatment for your condition."
      },
      {
        title: "Follow-up",
        description: "Easy access for follow-up visits as needed."
      }
    ],

    faqItems: [
      {
        question: "What services do you offer?",
        answer: "Full range — medical dermatology, hair treatments, cosmetic procedures, laser treatments, and minor skin surgeries."
      },
      {
        question: "Do I need an appointment?",
        answer: "Appointments preferred for your convenience, but we accommodate urgent cases."
      },
      {
        question: "Is parking available?",
        answer: "Yes, we have accessible parking for patients."
      },
      {
        question: "What are your hours?",
        answer: "We have extended hours including evenings and weekends to accommodate working patients."
      },
      {
        question: "Do you accept insurance?",
        answer: "We work with various insurance providers. Check with us about your specific plan."
      }
    ],

    ctaText: "Visit Your Nearby Skin Clinic",
    ctaDescription: "Quality skin care doesn't have to be inconvenient. Expert dermatology services close to you. Book your appointment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-clinic-near-me-in-vadodara"
      content={content}
    />
  );
}
