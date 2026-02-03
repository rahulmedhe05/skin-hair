import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Beauty Salon Vadodara | Premium Services | ₹500",
  description: "✨ Premium beauty salon in Vadodara ✓ Skin & hair experts ✓ Advanced treatments ✓ Bridal packages ✓ Glow like never before. Starting ₹500. Book now!",
  keywords: "beauty salon vadodara, beauty parlour vadodara, beauty salon near me, best beauty salon",
};

export default function BeautySalonPage() {
  const content = {
    heroTitle: "Beauty Salon in Vadodara",
    heroSubtitle: "Where Beauty Meets Expertise",
    
    introContent: `A beauty salon should be more than a place for basic services. It should combine aesthetic understanding with professional expertise — giving you results that look natural and last, not just temporary improvements.

We bridge the gap between clinical dermatology and beauty services. Scientific knowledge applied to beauty treatments means better, safer results. Whether you're preparing for an event or maintaining your look, we deliver.

Experience beauty services backed by dermatological expertise. From facials to hair treatments, every service is performed with understanding of skin and hair science for optimal results.`,

    whyChooseUs: [
      "Medical expertise meets beauty care",
      "Scientifically-backed treatments",
      "Premium products and equipment",
      "Trained beauty professionals",
      "Hygienic environment",
      "Results that last"
    ],

    services: [
      {
        title: "Advanced Facials",
        description: "HydraFacial, medi-facials, and customized treatments for your skin type."
      },
      {
        title: "Hair Care Services",
        description: "Professional hair treatments, keratin, and scalp therapies."
      },
      {
        title: "Skin Treatments",
        description: "Peels, polishing, and skin rejuvenation services."
      },
      {
        title: "Pre-Event Preparation",
        description: "Bridal and event packages for special occasions."
      },
      {
        title: "Body Treatments",
        description: "Body polishing, wraps, and skin care beyond face."
      },
      {
        title: "Regular Maintenance",
        description: "Monthly care packages for ongoing skin and hair health."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Understanding your beauty goals and assessing your needs."
      },
      {
        title: "Service Selection",
        description: "Recommending appropriate treatments for your skin and hair."
      },
      {
        title: "Treatment",
        description: "Professional service delivery in hygienic environment."
      },
      {
        title: "Aftercare",
        description: "Guidance on maintaining results at home."
      }
    ],

    faqItems: [
      {
        question: "What makes your salon different?",
        answer: "We combine beauty services with dermatological expertise. Our treatments are science-backed, not just trend-following."
      },
      {
        question: "Do you offer bridal packages?",
        answer: "Yes — comprehensive pre-wedding skin and hair preparation packages for brides."
      },
      {
        question: "Are your products safe?",
        answer: "We use only dermatologist-approved, quality products suitable for your skin type."
      },
      {
        question: "How often should I visit?",
        answer: "Depends on your goals — typically monthly for maintenance, more frequently before events."
      },
      {
        question: "Do you do patch tests?",
        answer: "Yes, for treatments and products that require it. Your safety is priority."
      }
    ],

    ctaText: "Experience Premium Beauty Care",
    ctaDescription: "Beauty services backed by expertise. Look your best with professional care. Book your appointment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="beauty-salon-in-vadodara"
      content={content}
    />
  );
}
