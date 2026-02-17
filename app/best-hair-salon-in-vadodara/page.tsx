import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Hair Salon Vadodara | Premium Hair Care | ₹500",
  description: "💇 Best hair salon in Vadodara ✓ Premium treatments ✓ Expert stylists ✓ Hair botox, keratin, spa ✓ Transform your hair. Starting ₹500. Book your slot!",
  keywords: "best hair salon vadodara, hair salon vadodara, professional hair salon, hair salon near me",
};

export default function BestHairSalonPage() {
  const content = {
    heroTitle: "Best Hair Salon in Vadodara",
    heroSubtitle: "Professional Hair Care and Styling",
    
    introContent: `A great hair salon combines skilled stylists with understanding of hair health. It's not just about cutting and coloring — it's about maintaining beautiful, healthy hair while achieving the look you want.

We offer professional hair services with a health-first approach. Our stylists understand hair science, not just styling techniques. This means treatments that enhance your hair rather than damage it over time.

Whether you need a fresh style, treatment for damaged hair, or regular maintenance, we provide services that leave your hair looking great and feeling healthy.`,

    whyChooseUs: [
      "Health-conscious hair care",
      "Skilled professional stylists",
      "Quality products",
      "Understanding of hair science",
      "Range of services",
      "Personalized approach"
    ],

    services: [
      {
        title: "Hair Cutting & Styling",
        description: "Expert cuts and styling for all hair types and face shapes."
      },
      {
        title: "Hair Coloring",
        description: "Safe coloring with quality products to minimize damage."
      },
      {
        title: "Hair Treatments",
        description: "Keratin, smoothening, and conditioning treatments."
      },
      {
        title: "Scalp Treatments",
        description: "Professional scalp care for dandruff and hair health."
      },
      {
        title: "Bridal Hair",
        description: "Wedding styling and pre-wedding hair preparation."
      },
      {
        title: "Hair Spa",
        description: "Deep conditioning and relaxation treatments."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Understanding what you want and assessing your hair."
      },
      {
        title: "Recommendation",
        description: "Suggesting styles and treatments appropriate for your hair."
      },
      {
        title: "Service",
        description: "Professional execution with quality products."
      },
      {
        title: "Home Care Advice",
        description: "Tips to maintain your style and hair health at home."
      }
    ],

    faqItems: [
      {
        question: "How often should I visit a hair salon?",
        answer: "For cuts, every 6-8 weeks. For treatments, depends on your hair needs. Regular maintenance keeps hair healthy."
      },
      {
        question: "Is coloring damaging?",
        answer: "Can be, but using quality products and proper technique minimizes damage. We prioritize hair health in all services."
      },
      {
        question: "What's the best treatment for damaged hair?",
        answer: "Depends on damage type. We assess and recommend — could be protein treatment, deep conditioning, or other options."
      },
      {
        question: "Do you do hair straightening/smoothening?",
        answer: "Yes — keratin and other smoothening treatments with quality products for lasting results."
      },
      {
        question: "How do I maintain my style at home?",
        answer: "We provide specific advice based on your hair type and style. Proper products and techniques make a difference."
      }
    ],

    ctaText: "Experience Professional Hair Care",
    ctaDescription: "Beautiful, healthy hair from expert stylists. Quality services with a health-first approach. Book your appointment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="best-hair-salon-in-vadodara"
      content={content}
    />
  );
}
