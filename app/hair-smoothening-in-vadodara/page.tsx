import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Professional Hair Smoothening in Vadodara | Prime One Clinic",
  description: "✅ Hair Smoothening by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "hair, smoothening vadodara, hair smoothening near me, best hair smoothening vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/hair-smoothening-in-vadodara",
  },
  openGraph: {
    title: "Professional Hair Smoothening in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Hair Smoothening by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/hair-smoothening-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function HairSmootheningPage() {
  const content = {
    heroTitle: "Professional Hair Smoothening in Vadodara",
    heroSubtitle: "Personalized Hair Smoothening for Lasting Results",
    
    introContent: `Your hair is one of the first things people notice about you, and maintaining healthy, beautiful hair requires more than just good shampoo. Hair Smoothening at Prime One Hair & Skin Clinic addresses your hair concerns at the root level — literally.

Professional hair smoothening treatments use salon-quality and medical-grade formulations that work significantly better than retail products. These treatments can repair damage at the molecular level, restructure hair bonds, infuse deep moisture, and protect against environmental stressors. Our trichologists assess your hair type, damage level, and scalp condition before recommending the right treatment.

We understand that hair care needs vary dramatically between individuals. Your hair texture, density, porosity, and overall health all influence which treatments will benefit you most. That's why we never take a one-size-fits-all approach — every treatment plan is as unique as you are.`,

    whyChooseUs: [
          "Personalized treatment plans — no one-size-fits-all",
          "Transparent pricing with no hidden costs",
          "Clean, modern clinic with latest technology",
          "US FDA-approved equipment and medical-grade products",
          "Evening and weekend appointments available",
          "Board-certified dermatologists with 15+ years experience"
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
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical hair smoothening."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your hair smoothening concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Hair Smoothening Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized hair smoothening protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "What is hair smoothening?",
                "answer": "Hair Smoothening involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of hair smoothening are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for hair smoothening?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does hair smoothening cost in Vadodara?",
                "answer": "Hair Smoothening costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is hair smoothening safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, hair smoothening is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Hair Smoothening Journey?",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-smoothening-in-vadodara"
      content={content}
    />
  );
}
