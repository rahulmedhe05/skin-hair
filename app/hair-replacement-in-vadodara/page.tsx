import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Trusted Hair Replacement in Vadodara | Prime One Clinic",
  description: "Hair Replacement - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "hair, replacement vadodara, hair replacement near me, best hair replacement vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/hair-replacement-in-vadodara",
  },
  openGraph: {
    title: "Trusted Hair Replacement in Vadodara | Prime One Hair & Skin Clinic",
    description: "Hair Replacement - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/hair-replacement-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function HairReplacementPage() {
  const content = {
    heroTitle: "Trusted Hair Replacement in Vadodara",
    heroSubtitle: "Where Science Meets Beauty",
    
    introContent: `Your hair is one of the first things people notice about you, and maintaining healthy, beautiful hair requires more than just good shampoo. Hair Replacement at Prime One Hair & Skin Clinic addresses your hair concerns at the root level — literally.

Professional hair replacement treatments use salon-quality and medical-grade formulations that work significantly better than retail products. These treatments can repair damage at the molecular level, restructure hair bonds, infuse deep moisture, and protect against environmental stressors. Our trichologists assess your hair type, damage level, and scalp condition before recommending the right treatment.

We understand that hair care needs vary dramatically between individuals. Your hair texture, density, porosity, and overall health all influence which treatments will benefit you most. That's why we never take a one-size-fits-all approach — every treatment plan is as unique as you are.`,

    whyChooseUs: [
          "Transparent pricing with no hidden costs",
          "Clean, modern clinic with latest technology",
          "Convenient location in Vadodara with easy parking",
          "10,000+ satisfied patients across Vadodara",
          "Board-certified dermatologists with 15+ years experience",
          "US FDA-approved equipment and medical-grade products"
    ],

    services: [
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your hair replacement concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized hair replacement protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Hair Replacement Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical hair replacement."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          }
    ],

    processSteps: [
          {
                "title": "Consultation",
                "description": "Thorough assessment of your concerns by our specialist with advanced diagnostics."
          },
          {
                "title": "Treatment Plan",
                "description": "Personalized treatment protocol explained clearly with realistic expectations."
          },
          {
                "title": "Treatment Sessions",
                "description": "Professional procedures performed with the latest technology in a comfortable setting."
          },
          {
                "title": "Follow-Up Care",
                "description": "Regular monitoring, progress tracking, and plan adjustments for optimal results."
          }
    ],

    faqItems: [
          {
                "question": "Is hair replacement safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, hair replacement is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is hair replacement?",
                "answer": "Hair Replacement involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does hair replacement cost in Vadodara?",
                "answer": "Hair Replacement costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of hair replacement are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for hair replacement?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Hair Replacement Today",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their hair replacement. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-replacement-in-vadodara"
      content={content}
    />
  );
}
