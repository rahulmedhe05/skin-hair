import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Expert Contact Dermatitis Treatment Solutions in Vadodara | Prime One Clinic",
  description: "✅ Contact Dermatitis Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "contact, dermatitis, treatment vadodara, contact dermatitis treatment near me, best contact dermatitis vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/contact-dermatitis-treatment-in-vadodara",
  },
  openGraph: {
    title: "Expert Contact Dermatitis Treatment Solutions in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Contact Dermatitis Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/contact-dermatitis-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactDermatitisTreatmentPage() {
  const content = {
    heroTitle: "Expert Contact Dermatitis Treatment Solutions in Vadodara",
    heroSubtitle: "Your Journey to Better Skin & Hair Starts Here",
    
    introContent: `Living with a chronic or acute skin condition can be frustrating and isolating. Contact Dermatitis Treatment at Prime One Hair & Skin Clinic is delivered by dermatologists who understand both the medical and emotional aspects of skin diseases.

Skin conditions often have complex, multifactorial causes — immune system dysfunction, environmental triggers, genetic predisposition, infections, and allergies can all play a role. Our diagnostic approach investigates all potential factors through clinical examination, patch testing, blood work, and skin biopsies when needed.

We believe in treating the whole patient, not just the visible symptoms. Our treatment plans address the underlying cause, manage current symptoms, prevent flare-ups, and minimize long-term complications. We also educate you about your condition so you can make informed decisions about your care and lifestyle modifications.`,

    whyChooseUs: [
          "US FDA-approved equipment and medical-grade products",
          "10,000+ satisfied patients across Vadodara",
          "Personalized treatment plans — no one-size-fits-all",
          "Evening and weekend appointments available",
          "Clean, modern clinic with latest technology",
          "Convenient location in Vadodara with easy parking"
    ],

    services: [
          {
                "title": "Contact Dermatitis Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized contact dermatitis treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical contact dermatitis treatment."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your contact dermatitis treatment concerns by board-certified specialists using advanced diagnostic tools."
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
                "question": "What is contact dermatitis treatment?",
                "answer": "Contact Dermatitis Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of contact dermatitis treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for contact dermatitis treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does contact dermatitis treatment cost in Vadodara?",
                "answer": "Contact Dermatitis Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is contact dermatitis treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, contact dermatitis treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Contact Dermatitis Treatment Journey?",
    ctaDescription: "Professional contact dermatitis treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="contact-dermatitis-treatment-in-vadodara"
      content={content}
    />
  );
}
