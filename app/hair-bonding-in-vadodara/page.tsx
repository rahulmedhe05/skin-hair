import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Bonding Experts in Vadodara | Prime One Clinic",
  description: "Get the best hair bonding at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "hair, bonding vadodara, hair bonding near me, best hair bonding vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/hair-bonding-in-vadodara",
  },
  openGraph: {
    title: "Hair Bonding Experts in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best hair bonding at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/hair-bonding-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function HairBondingPage() {
  const content = {
    heroTitle: "Hair Bonding Experts in Vadodara",
    heroSubtitle: "Transform Your Appearance with Hair Bonding",
    
    introContent: `Your hair is one of the first things people notice about you, and maintaining healthy, beautiful hair requires more than just good shampoo. Hair Bonding at Prime One Hair & Skin Clinic addresses your hair concerns at the root level — literally.

Professional hair bonding treatments use salon-quality and medical-grade formulations that work significantly better than retail products. These treatments can repair damage at the molecular level, restructure hair bonds, infuse deep moisture, and protect against environmental stressors. Our trichologists assess your hair type, damage level, and scalp condition before recommending the right treatment.

We understand that hair care needs vary dramatically between individuals. Your hair texture, density, porosity, and overall health all influence which treatments will benefit you most. That's why we never take a one-size-fits-all approach — every treatment plan is as unique as you are.`,

    whyChooseUs: [
          "Evening and weekend appointments available",
          "Board-certified dermatologists with 15+ years experience",
          "US FDA-approved equipment and medical-grade products",
          "Clean, modern clinic with latest technology",
          "Personalized treatment plans — no one-size-fits-all",
          "Transparent pricing with no hidden costs"
    ],

    services: [
          {
                "title": "Hair Bonding Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized hair bonding protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical hair bonding."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your hair bonding concerns by board-certified specialists using advanced diagnostic tools."
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
                "question": "Why should I choose Prime One for hair bonding?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is hair bonding safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, hair bonding is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of hair bonding are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is hair bonding?",
                "answer": "Hair Bonding involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does hair bonding cost in Vadodara?",
                "answer": "Hair Bonding costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Hair Bonding Now",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-bonding-in-vadodara"
      content={content}
    />
  );
}
