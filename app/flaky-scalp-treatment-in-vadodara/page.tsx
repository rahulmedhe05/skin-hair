import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Expert Flaky Scalp Treatment Solutions in Vadodara | Prime One Clinic",
  description: "Flaky Scalp Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "flaky, scalp, treatment vadodara, flaky scalp treatment near me, best flaky scalp vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/flaky-scalp-treatment-in-vadodara",
  },
  openGraph: {
    title: "Expert Flaky Scalp Treatment Solutions in Vadodara | Prime One Hair & Skin Clinic",
    description: "Flaky Scalp Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/flaky-scalp-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function FlakyScalpTreatmentPage() {
  const content = {
    heroTitle: "Expert Flaky Scalp Treatment Solutions in Vadodara",
    heroSubtitle: "Your Journey to Better Skin & Hair Starts Here",
    
    introContent: `Healthy hair starts with a healthy scalp. Flaky Scalp Treatment is often overlooked, but scalp conditions directly impact hair growth, texture, and overall hair health. Think of it this way — you can't grow a beautiful garden in poor soil.

Our trichology team at Prime One Hair & Skin Clinic uses advanced diagnostics including trichoscopy to examine your scalp at high magnification. This reveals conditions that aren't visible to the naked eye — microscopic inflammation, blocked follicles, fungal colonies, and changes in scalp vascularity. Proper diagnosis leads to proper treatment.

Common scalp issues we treat include persistent dandruff, seborrheic dermatitis, scalp psoriasis, folliculitis, and contact allergies. Each condition has specific triggers and treatment requirements. Our approach combines medicated treatments, therapeutic procedures, and maintenance protocols to resolve your scalp condition and prevent recurrence.`,

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
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical flaky scalp treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your flaky scalp treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Flaky Scalp Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized flaky scalp treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "Is flaky scalp treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, flaky scalp treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is flaky scalp treatment?",
                "answer": "Flaky Scalp Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does flaky scalp treatment cost in Vadodara?",
                "answer": "Flaky Scalp Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of flaky scalp treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for flaky scalp treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Flaky Scalp Treatment Today",
    ctaDescription: "Professional flaky scalp treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="flaky-scalp-treatment-in-vadodara"
      content={content}
    />
  );
}
