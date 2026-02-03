import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Nizampura | Dermatologist",
  description: "🏆 Top skin & hair clinic in Nizampura, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic nizampura, dermatologist nizampura vadodara, hair clinic nizampura, skin doctor near nizampura",
};

export default function NizampuraPage() {
  const content = {
    heroTitle: "Nizampura's Neighborhood Skin & Hair Clinic",
    heroSubtitle: "Trusted Care for a Trusted Community",
    
    introContent: `Nizampura is one of Vadodara's well-established residential neighborhoods — a place where families have roots, where community bonds are strong, and where word-of-mouth matters more than advertising.

Our clinic has become part of Nizampura's healthcare landscape through patient-by-patient trust-building. We don't rely on flashy marketing — we rely on results that people tell their neighbors about.

The Nizampura community includes working families, retired seniors, young students, and everyone in between. We serve each with appropriate care, respecting both their medical needs and practical constraints.`,

    whyChooseUs: [
      "Part of Nizampura's community for years",
      "Reputation built on results and referrals",
      "Understanding of family-oriented neighborhood values",
      "All-ages care under one roof",
      "Fair pricing that respects household budgets",
      "Doctors who know their patients"
    ],

    services: [
      {
        title: "Community Dermatology",
        description: "We've treated generations of some Nizampura families. That continuity means we understand your skin history and family patterns."
      },
      {
        title: "All-Ages Skin Care",
        description: "From grandchildren to grandparents — we handle skin issues at every life stage with appropriate care."
      },
      {
        title: "Hair Family Care",
        description: "Hair problems often run in families. We treat parents and children, understanding hereditary patterns."
      },
      {
        title: "School Student Skin",
        description: "Nizampura's students trust us for acne, skin allergies, and other young-skin issues."
      },
      {
        title: "Senior Skin Health",
        description: "Older residents have specific needs. We treat age-related skin conditions with patience and expertise."
      },
      {
        title: "Gentle Cosmetics",
        description: "Cosmetic options that enhance without dramatically changing. Appropriate for conservative community values."
      }
    ],

    processSteps: [
      {
        title: "Familiar Welcome",
        description: "New patients become familiar faces quickly. Returning patients see people who know them."
      },
      {
        title: "Unhurried Care",
        description: "We don't rush through appointments. Your concerns get proper attention."
      },
      {
        title: "Family-Friendly Solutions",
        description: "Treatment that fits family life — schedules, budgets, practical constraints."
      },
      {
        title: "Lasting Relationships",
        description: "We're not just treating conditions — we're building ongoing care relationships."
      }
    ],

    faqItems: [
      {
        question: "How long have you been serving Nizampura?",
        answer: "Many years — long enough to have treated multiple generations of families and built deep community roots."
      },
      {
        question: "Can you treat my elderly parents?",
        answer: "Yes, we're experienced with senior patients. Patient approach, clear communication, and gentle treatment."
      },
      {
        question: "Do you offer family discounts?",
        answer: "We offer practical family conveniences — combined appointments, family-friendly pricing structures for ongoing care."
      },
      {
        question: "What languages do your staff speak?",
        answer: "Gujarati, Hindi, and English. We communicate in whatever language you're most comfortable with."
      },
      {
        question: "Are you the clinic Mrs. Shah recommended?",
        answer: "We might be! Many of our patients come through recommendations from neighbors. That's how community clinics grow."
      }
    ],

    ctaText: "Join the Families Who Trust Us",
    ctaDescription: "Nizampura's community has made us their choice. Become part of a patient family that values lasting relationships. Book your visit today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="nizampura"
      content={content}
    />
  );
}
