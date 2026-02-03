import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Tandalja | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Tandalja, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic tandalja, dermatologist tandalja vadodara, hair clinic tandalja, skin doctor near tandalja",
};

export default function TandaljaPage() {
  const content = {
    heroTitle: "Tandalja's Dedicated Skin & Hair Center",
    heroSubtitle: "Quality Dermatology for a Growing Neighborhood",
    
    introContent: `Tandalja has grown steadily into a well-established residential area that's home to families, professionals, and businesses. With that growth comes the need for quality healthcare services — including specialized skin and hair care.

We serve the Tandalja community with commitment to excellence. Our patients range from young families in apartments to elderly residents in independent houses, from working professionals to homemakers. Each receives the same quality of attention.

What makes us click with Tandalja residents is our straightforward approach. No overselling, no unnecessary treatments, no confusing medical speak. Just honest diagnosis, effective treatment, and fair pricing.`,

    whyChooseUs: [
      "Dedicated to serving Tandalja community",
      "Straightforward, honest approach",
      "Full range of dermatological services",
      "Reasonable, transparent pricing",
      "Experienced, caring medical team",
      "Convenient location within the area"
    ],

    services: [
      {
        title: "Complete Skin Solutions",
        description: "Whatever your skin concern — acne, allergies, infections, aging, pigmentation — we diagnose accurately and treat effectively."
      },
      {
        title: "Hair Care Expertise",
        description: "Hair fall, dandruff, scalp issues, thinning — we investigate the cause and provide targeted treatment."
      },
      {
        title: "Laser Services",
        description: "Hair removal, pigmentation treatment, and skin rejuvenation using safe, effective laser technology."
      },
      {
        title: "Cosmetic Treatments",
        description: "For those who want to enhance their appearance — chemical peels, facials, anti-aging treatments."
      },
      {
        title: "Children's Skin Care",
        description: "Kids have delicate skin that needs gentle handling. We're experienced with pediatric dermatology."
      },
      {
        title: "Chronic Condition Management",
        description: "Long-term conditions like eczema, psoriasis, and vitiligo need ongoing management. We partner with you for the journey."
      }
    ],

    processSteps: [
      {
        title: "Simple Booking",
        description: "Call or walk in. We make scheduling easy and convenient."
      },
      {
        title: "Honest Assessment",
        description: "We tell you what we see and what we think. No exaggeration, no minimization."
      },
      {
        title: "Clear Options",
        description: "Treatment options explained with costs, timelines, and realistic expectations."
      },
      {
        title: "Reliable Results",
        description: "We track progress and adjust treatment until we achieve the outcome you came for."
      }
    ],

    faqItems: [
      {
        question: "Is your clinic easy to find in Tandalja?",
        answer: "Yes, we're located at a prominent spot within Tandalja. Directions provided when you book."
      },
      {
        question: "Do you really not push unnecessary treatments?",
        answer: "That's correct. If a simple cream will solve your problem, we won't recommend expensive procedures. Our reputation depends on trust, not transactions."
      },
      {
        question: "What if I'm not sure what treatment I need?",
        answer: "That's what consultations are for. Come with your concern, we'll figure out the solution together."
      },
      {
        question: "Can I get a second opinion from you?",
        answer: "Absolutely. If you've been diagnosed elsewhere and want our assessment, we welcome that. Fresh perspective often helps."
      },
      {
        question: "How do I pay?",
        answer: "Cash, cards, UPI — whatever works for you. Receipts provided for all payments."
      }
    ],

    ctaText: "Tandalja's Skin & Hair Experts",
    ctaDescription: "Stop worrying, start treating. Your neighborhood dermatologists are ready to help with whatever skin or hair concern you have. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="tandalja"
      content={content}
    />
  );
}
