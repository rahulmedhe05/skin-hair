import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Leading Frizzy Hair Treatment in Vadodara | Prime One Clinic",
  description: "Get the best frizzy hair treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "frizzy, hair, treatment vadodara, frizzy hair treatment near me, best frizzy hair vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/frizzy-hair-treatment-in-vadodara",
  },
  openGraph: {
    title: "Leading Frizzy Hair Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best frizzy hair treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/frizzy-hair-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function FrizzyHairTreatmentPage() {
  const content = {
    heroTitle: "Leading Frizzy Hair Treatment in Vadodara",
    heroSubtitle: "Clinically Proven Results with Frizzy Hair Treatment",
    
    introContent: `Your hair is one of the first things people notice about you, and maintaining healthy, beautiful hair requires more than just good shampoo. Frizzy Hair Treatment at Prime One Hair & Skin Clinic addresses your hair concerns at the root level — literally.

Professional frizzy hair treatment treatments use salon-quality and medical-grade formulations that work significantly better than retail products. These treatments can repair damage at the molecular level, restructure hair bonds, infuse deep moisture, and protect against environmental stressors. Our trichologists assess your hair type, damage level, and scalp condition before recommending the right treatment.

We understand that hair care needs vary dramatically between individuals. Your hair texture, density, porosity, and overall health all influence which treatments will benefit you most. That's why we never take a one-size-fits-all approach — every treatment plan is as unique as you are.`,

    whyChooseUs: [
          "Clean, modern clinic with latest technology",
          "Convenient location in Vadodara with easy parking",
          "Evening and weekend appointments available",
          "Personalized treatment plans — no one-size-fits-all",
          "US FDA-approved equipment and medical-grade products",
          "10,000+ satisfied patients across Vadodara"
    ],

    services: [
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical frizzy hair treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your frizzy hair treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Frizzy Hair Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized frizzy hair treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "Why should I choose Prime One for frizzy hair treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is frizzy hair treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, frizzy hair treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of frizzy hair treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is frizzy hair treatment?",
                "answer": "Frizzy Hair Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does frizzy hair treatment cost in Vadodara?",
                "answer": "Frizzy Hair Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Frizzy Hair Treatment Now",
    ctaDescription: "Professional frizzy hair treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="frizzy-hair-treatment-in-vadodara"
      content={content}
    />
  );
}
