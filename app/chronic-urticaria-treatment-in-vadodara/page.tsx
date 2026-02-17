import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Professional Chronic Urticaria Treatment in Vadodara | Prime One Clinic",
  description: "🏆 Best chronic urticaria treatment at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
  keywords: "chronic, urticaria, treatment vadodara, chronic urticaria treatment near me, best chronic urticaria vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/chronic-urticaria-treatment-in-vadodara",
  },
  openGraph: {
    title: "Professional Chronic Urticaria Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "🏆 Best chronic urticaria treatment at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
    url: "https://skinhairvadodara.in/chronic-urticaria-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function ChronicUrticariaTreatmentPage() {
  const content = {
    heroTitle: "Professional Chronic Urticaria Treatment in Vadodara",
    heroSubtitle: "Personalized Chronic Urticaria Treatment for Lasting Results",
    
    introContent: `Living with a chronic or acute skin condition can be frustrating and isolating. Chronic Urticaria Treatment at Prime One Hair & Skin Clinic is delivered by dermatologists who understand both the medical and emotional aspects of skin diseases.

Skin conditions often have complex, multifactorial causes — immune system dysfunction, environmental triggers, genetic predisposition, infections, and allergies can all play a role. Our diagnostic approach investigates all potential factors through clinical examination, patch testing, blood work, and skin biopsies when needed.

We believe in treating the whole patient, not just the visible symptoms. Our treatment plans address the underlying cause, manage current symptoms, prevent flare-ups, and minimize long-term complications. We also educate you about your condition so you can make informed decisions about your care and lifestyle modifications.`,

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
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Chronic Urticaria Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your chronic urticaria treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized chronic urticaria treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical chronic urticaria treatment."
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
                "question": "How much does chronic urticaria treatment cost in Vadodara?",
                "answer": "Chronic Urticaria Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Why should I choose Prime One for chronic urticaria treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is chronic urticaria treatment?",
                "answer": "Chronic Urticaria Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "Is chronic urticaria treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, chronic urticaria treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of chronic urticaria treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          }
    ],

    ctaText: "Take the First Step Toward Chronic Urticaria Treatment",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="chronic-urticaria-treatment-in-vadodara"
      content={content}
    />
  );
}
