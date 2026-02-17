import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Leading Atopic Dermatitis Treatment in Vadodara | Prime One Clinic",
  description: "Looking for atopic dermatitis treatment? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "atopic, dermatitis, treatment vadodara, atopic dermatitis treatment near me, best atopic dermatitis vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/atopic-dermatitis-treatment-in-vadodara",
  },
  openGraph: {
    title: "Leading Atopic Dermatitis Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for atopic dermatitis treatment? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/atopic-dermatitis-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function AtopicDermatitisTreatmentPage() {
  const content = {
    heroTitle: "Leading Atopic Dermatitis Treatment in Vadodara",
    heroSubtitle: "Clinically Proven Results with Atopic Dermatitis Treatment",
    
    introContent: `Living with a chronic or acute skin condition can be frustrating and isolating. Atopic Dermatitis Treatment at Prime One Hair & Skin Clinic is delivered by dermatologists who understand both the medical and emotional aspects of skin diseases.

Skin conditions often have complex, multifactorial causes — immune system dysfunction, environmental triggers, genetic predisposition, infections, and allergies can all play a role. Our diagnostic approach investigates all potential factors through clinical examination, patch testing, blood work, and skin biopsies when needed.

We believe in treating the whole patient, not just the visible symptoms. Our treatment plans address the underlying cause, manage current symptoms, prevent flare-ups, and minimize long-term complications. We also educate you about your condition so you can make informed decisions about your care and lifestyle modifications.`,

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
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Atopic Dermatitis Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your atopic dermatitis treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized atopic dermatitis treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical atopic dermatitis treatment."
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
                "question": "How many sessions of atopic dermatitis treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does atopic dermatitis treatment cost in Vadodara?",
                "answer": "Atopic Dermatitis Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is atopic dermatitis treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, atopic dermatitis treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for atopic dermatitis treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is atopic dermatitis treatment?",
                "answer": "Atopic Dermatitis Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Atopic Dermatitis Treatment Consultation Awaits",
    ctaDescription: "Professional atopic dermatitis treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="atopic-dermatitis-treatment-in-vadodara"
      content={content}
    />
  );
}
