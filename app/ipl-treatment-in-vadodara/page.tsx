import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Leading Ipl Treatment in Vadodara | Prime One Clinic",
  description: "✅ Ipl Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "ipl, treatment vadodara, ipl treatment near me, best ipl treatment vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/ipl-treatment-in-vadodara",
  },
  openGraph: {
    title: "Leading Ipl Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Ipl Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/ipl-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function IplTreatmentPage() {
  const content = {
    heroTitle: "Leading Ipl Treatment in Vadodara",
    heroSubtitle: "Clinically Proven Results with Ipl Treatment",
    
    introContent: `At Prime One Hair & Skin Clinic in Vadodara, we provide expert ipl treatment backed by years of clinical experience and the latest medical advancements. Our dermatologists take the time to understand your specific concerns and create treatment plans that deliver real, measurable results.

We believe that everyone deserves access to quality dermatological care. That's why we've built our practice around making advanced skin and hair treatments accessible, affordable, and comfortable. From your first consultation to your follow-up appointments, we ensure a seamless, supportive experience.

Our comprehensive approach combines medical expertise with aesthetic sensibility. We don't just treat conditions — we help you achieve the best version of yourself through evidence-based treatments, honest guidance, and genuine care for your well-being.`,

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
                "title": "Ipl Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized ipl treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical ipl treatment."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your ipl treatment concerns by board-certified specialists using advanced diagnostic tools."
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
                "question": "What is ipl treatment?",
                "answer": "Ipl Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of ipl treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for ipl treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does ipl treatment cost in Vadodara?",
                "answer": "Ipl Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is ipl treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, ipl treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Ipl Treatment Journey?",
    ctaDescription: "Professional ipl treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="ipl-treatment-in-vadodara"
      content={content}
    />
  );
}
