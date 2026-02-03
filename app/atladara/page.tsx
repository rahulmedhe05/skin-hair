import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Atladara | Dermatologist",
  description: "🏆 Top skin & hair clinic in Atladara, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic atladara, dermatologist atladara vadodara, hair clinic atladara, skin doctor near atladara",
};

export default function AtladaraPage() {
  const content = {
    heroTitle: "Atladara's Complete Skin & Hair Care",
    heroSubtitle: "Expert Dermatology for Our Growing Neighborhood",
    
    introContent: `Atladara has seen remarkable development in recent years. New residential complexes, improved roads, and a growing community have transformed this area into a sought-after locality.

Our clinic serves this thriving community with the dermatological care it deserves. Families moving into new apartments, young couples setting up homes, professionals relocating for work — all find quality skin and hair treatment right in their neighborhood.

What we love about serving Atladara: the community feels tight-knit despite being new. Neighbors recommend us to each other, families return together, and that trust motivates us to maintain the highest standards.`,

    whyChooseUs: [
      "Serving the growing Atladara community",
      "Modern facility in a developing area",
      "Full range of dermatological services",
      "Convenient for residents of new societies",
      "Competitive pricing for young families",
      "Building long-term patient relationships"
    ],

    services: [
      {
        title: "New Resident Skin Adjustment",
        description: "Moving to a new area often triggers skin changes. Different water, different environment — we help your skin adjust and resolve any issues that arise."
      },
      {
        title: "Young Family Dermatology",
        description: "Parents and children under one roof. From baby rash to mom's hormonal skin changes, from dad's hair fall to kid's allergies — we handle it all."
      },
      {
        title: "Acne Management",
        description: "Acne affects all ages. We offer comprehensive treatment for teenage acne, adult breakouts, and hormonal acne with lasting results."
      },
      {
        title: "Hair Care Solutions",
        description: "Hair fall, thinning, scalp issues — we diagnose the cause and treat accordingly. Multiple options at different price points."
      },
      {
        title: "Cosmetic Treatments",
        description: "Skin brightening, anti-aging, laser hair removal — modern cosmetic treatments for those who want them."
      },
      {
        title: "General Skin Conditions",
        description: "Eczema, allergies, fungal infections, psoriasis — all common and complex skin conditions treated expertly."
      }
    ],

    processSteps: [
      {
        title: "Schedule Conveniently",
        description: "Call or book online. We offer times that suit family schedules."
      },
      {
        title: "Thorough Consultation",
        description: "We examine carefully, ask questions, and understand your concerns fully."
      },
      {
        title: "Family-Friendly Treatment",
        description: "Treatment plans that work for busy families. Practical, effective, affordable."
      },
      {
        title: "Continued Support",
        description: "We're here for the long term. Regular follow-ups and ongoing care."
      }
    ],

    faqItems: [
      {
        question: "We just moved to Atladara. Can changing water quality affect skin?",
        answer: "Absolutely. Different areas have different water hardness and mineral content. This often causes hair fall, dryness, or breakouts initially. We can help your skin adjust."
      },
      {
        question: "Can you treat my whole family?",
        answer: "Yes, we see patients from infants to grandparents. Family appointments can be scheduled together for convenience."
      },
      {
        question: "Are cosmetic treatments available in Atladara?",
        answer: "Yes, we offer the same advanced treatments you'd find in central Vadodara — laser, anti-aging, skin brightening — right here in Atladara."
      },
      {
        question: "What are your timings?",
        answer: "We're open Monday through Saturday with some Sunday availability. Evening hours available for working parents."
      },
      {
        question: "Is parking available?",
        answer: "Yes, parking is convenient. Atladara's newer layout means better facilities."
      }
    ],

    ctaText: "Atladara Families Trust Our Care",
    ctaDescription: "Join your neighbors in choosing local, quality skincare. We're building a community of healthy skin one family at a time. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="atladara"
      content={content}
    />
  );
}
