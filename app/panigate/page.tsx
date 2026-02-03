import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Panigate, Vadodara | Best Dermatologist",
  description: "Expert skin and hair clinic in Panigate, Vadodara. Treatment for acne, hair fall, skin problems & dermatological conditions. Serving Panigate & walled city.",
  keywords: "skin clinic panigate, dermatologist panigate vadodara, hair specialist panigate, skin doctor panigate",
};

export default function PanigatePage() {
  const content = {
    heroTitle: "Panigate's Trusted Skin & Hair Care",
    heroSubtitle: "Quality Dermatology for the Walled City Community",
    
    introContent: `Panigate is one of the gateways to Vadodara's historic walled city — an area steeped in tradition, known for its close-knit community and bustling commerce. Our clinic serves this vibrant area with healthcare that matches its energy.

The Panigate community includes traders, artisans, traditional families, and many others who make this area unique. We understand their lifestyles, their time constraints, and their healthcare expectations.

What works here is straightforward competence. People are busy, they're practical, they want results without drama. We provide exactly that — efficient, effective treatment from skilled doctors.`,

    whyChooseUs: [
      "Serving Panigate and walled city residents",
      "Understanding of merchant community needs",
      "Efficient care for busy lifestyles",
      "Fair, transparent pricing",
      "Results-focused treatment",
      "No-nonsense approach that Panigate appreciates"
    ],

    services: [
      {
        title: "Efficient Skin Care",
        description: "Quick, effective treatment for busy people. We solve skin problems without wasting your time."
      },
      {
        title: "Practical Hair Solutions",
        description: "Hair fall treatment that fits into merchant life. Effective, not elaborate."
      },
      {
        title: "Common Skin Issues",
        description: "Allergies, infections, rashes, heat-related problems — common in busy commercial areas. Quick diagnosis, fast treatment."
      },
      {
        title: "Occupational Skin Care",
        description: "Different trades have different skin challenges. We understand and treat them."
      },
      {
        title: "Family Dermatology",
        description: "Treat the whole family. Joint family appointments available for convenience."
      },
      {
        title: "Basic Cosmetics",
        description: "For those interested — simple improvements without elaborate procedures."
      }
    ],

    processSteps: [
      {
        title: "Quick Access",
        description: "Located for Panigate convenience. Easy to find, easy to visit."
      },
      {
        title: "Efficient Consultation",
        description: "We don't waste time. Thorough but quick assessment."
      },
      {
        title: "Practical Treatment",
        description: "Solutions that fit your busy life and realistic budget."
      },
      {
        title: "Results That Matter",
        description: "We focus on outcomes. Your problem solved is our goal."
      }
    ],

    faqItems: [
      {
        question: "Can I come between shop hours?",
        answer: "Yes, we have flexible timing. Let us know your constraints when booking."
      },
      {
        question: "Do you understand trader skin problems?",
        answer: "Yes — long sitting hours, specific environmental exposures, stress — we see these regularly from Panigate patients."
      },
      {
        question: "Are you open during traditional market hours?",
        answer: "We've designed our hours around local lifestyles. Check our timing when booking."
      },
      {
        question: "Is pricing negotiable?",
        answer: "Our pricing is already fair and fixed. What we quote is honest — no room for negotiation but no need for it either."
      },
      {
        question: "What about cash payment?",
        answer: "Cash, cards, UPI — whatever works for you. We keep payment simple."
      }
    ],

    ctaText: "Panigate Respects Results — We Deliver",
    ctaDescription: "No-nonsense skin care from competent doctors. Efficient treatment, fair pricing, genuine results. Book your appointment today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="panigate"
      content={content}
    />
  );
}
