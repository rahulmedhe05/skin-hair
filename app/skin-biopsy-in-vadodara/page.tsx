import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Professional Skin Biopsy in Vadodara | Prime One Clinic",
  description: "Looking for skin biopsy? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "skin, biopsy vadodara, skin biopsy near me, best skin biopsy vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/skin-biopsy-in-vadodara",
  },
  openGraph: {
    title: "Professional Skin Biopsy in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for skin biopsy? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/skin-biopsy-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function SkinBiopsyPage() {
  const content = {
    heroTitle: "Professional Skin Biopsy in Vadodara",
    heroSubtitle: "Personalized Skin Biopsy for Lasting Results",
    
    introContent: `Skin Biopsy represents our commitment to using the most advanced diagnostic and treatment technologies available in dermatology. At Prime One Hair & Skin Clinic, we invest in technology that delivers measurable, evidence-based results.

Accurate diagnosis is the foundation of effective treatment. Our diagnostic capabilities include high-resolution dermatoscopy, computerized skin analysis, and specialized testing that reveals conditions invisible to the naked eye. This technology helps us detect problems early and monitor treatment progress objectively.

We regularly upgrade our equipment and training to stay at the forefront of dermatological technology. Every device in our clinic is selected based on its clinical evidence, safety profile, and suitability for Indian skin types. Our practitioners are certified and trained on each technology they use.`,

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
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical skin biopsy."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your skin biopsy concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Skin Biopsy Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized skin biopsy protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "How many sessions of skin biopsy are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does skin biopsy cost in Vadodara?",
                "answer": "Skin Biopsy costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is skin biopsy safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, skin biopsy is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for skin biopsy?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is skin biopsy?",
                "answer": "Skin Biopsy involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Skin Biopsy Consultation Awaits",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-biopsy-in-vadodara"
      content={content}
    />
  );
}
