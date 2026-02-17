import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Allergy Doctor Experts in Vadodara | Prime One Clinic",
  description: "Get the best skin allergy doctor at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "skin, allergy, doctor vadodara, skin allergy doctor near me, best skin allergy vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/skin-allergy-doctor-in-vadodara",
  },
  openGraph: {
    title: "Skin Allergy Doctor Experts in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best skin allergy doctor at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/skin-allergy-doctor-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function SkinAllergyDoctorPage() {
  const content = {
    heroTitle: "Skin Allergy Doctor Experts in Vadodara",
    heroSubtitle: "Transform Your Appearance with Skin Allergy Doctor",
    
    introContent: `Living with a chronic or acute skin condition can be frustrating and isolating. Skin Allergy Doctor at Prime One Hair & Skin Clinic is delivered by dermatologists who understand both the medical and emotional aspects of skin diseases.

Skin conditions often have complex, multifactorial causes — immune system dysfunction, environmental triggers, genetic predisposition, infections, and allergies can all play a role. Our diagnostic approach investigates all potential factors through clinical examination, patch testing, blood work, and skin biopsies when needed.

We believe in treating the whole patient, not just the visible symptoms. Our treatment plans address the underlying cause, manage current symptoms, prevent flare-ups, and minimize long-term complications. We also educate you about your condition so you can make informed decisions about your care and lifestyle modifications.`,

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
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical skin allergy doctor."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your skin allergy doctor concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Skin Allergy Doctor Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized skin allergy doctor protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "Why should I choose Prime One for skin allergy doctor?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is skin allergy doctor safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, skin allergy doctor is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of skin allergy doctor are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is skin allergy doctor?",
                "answer": "Skin Allergy Doctor involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does skin allergy doctor cost in Vadodara?",
                "answer": "Skin Allergy Doctor costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Skin Allergy Doctor Now",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-allergy-doctor-in-vadodara"
      content={content}
    />
  );
}
