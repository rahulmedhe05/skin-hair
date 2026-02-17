import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Trusted Rosacea Treatment in Vadodara | Prime One Clinic",
  description: "Get the best rosacea treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "rosacea, treatment vadodara, rosacea treatment near me, best rosacea treatment vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/rosacea-treatment-in-vadodara",
  },
  openGraph: {
    title: "Trusted Rosacea Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best rosacea treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/rosacea-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function RosaceaTreatmentPage() {
  const content = {
    heroTitle: "Trusted Rosacea Treatment in Vadodara",
    heroSubtitle: "Where Science Meets Beauty",
    
    introContent: `Living with a chronic or acute skin condition can be frustrating and isolating. Rosacea Treatment at Prime One Hair & Skin Clinic is delivered by dermatologists who understand both the medical and emotional aspects of skin diseases.

Skin conditions often have complex, multifactorial causes — immune system dysfunction, environmental triggers, genetic predisposition, infections, and allergies can all play a role. Our diagnostic approach investigates all potential factors through clinical examination, patch testing, blood work, and skin biopsies when needed.

We believe in treating the whole patient, not just the visible symptoms. Our treatment plans address the underlying cause, manage current symptoms, prevent flare-ups, and minimize long-term complications. We also educate you about your condition so you can make informed decisions about your care and lifestyle modifications.`,

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
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical rosacea treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your rosacea treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Rosacea Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized rosacea treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
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
                "question": "Why should I choose Prime One for rosacea treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is rosacea treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, rosacea treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of rosacea treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is rosacea treatment?",
                "answer": "Rosacea Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does rosacea treatment cost in Vadodara?",
                "answer": "Rosacea Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Rosacea Treatment Now",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their rosacea treatment. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="rosacea-treatment-in-vadodara"
      content={content}
    />
  );
}
