import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Trusted Cryolipolysis in Vadodara | Prime One Clinic",
  description: "✅ Cryolipolysis by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "cryolipolysis vadodara, cryolipolysis near me, best cryolipolysis vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/cryolipolysis-in-vadodara",
  },
  openGraph: {
    title: "Trusted Cryolipolysis in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Cryolipolysis by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/cryolipolysis-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function CryolipolysisPage() {
  const content = {
    heroTitle: "Trusted Cryolipolysis in Vadodara",
    heroSubtitle: "Where Science Meets Beauty",
    
    introContent: `Body concerns are deeply personal, and seeking cryolipolysis takes courage. At Prime One Hair & Skin Clinic, we provide judgment-free consultations where we listen to your goals and create realistic treatment plans.

Modern body treatments have moved far beyond invasive surgical options. Today's non-invasive and minimally invasive technologies can reduce fat, tighten skin, smooth cellulite, and contour the body with minimal downtime. Our clinic offers the latest evidence-based body treatments selected for their proven track record.

Every body treatment begins with a thorough assessment of your concerns, body composition, and expectations. We're honest about what each treatment can and cannot achieve — because unrealistic expectations lead to disappointment regardless of how good the treatment is. Our goal is visible improvement that makes YOU feel confident.`,

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
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your cryolipolysis concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized cryolipolysis protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Cryolipolysis Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical cryolipolysis."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
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
                "question": "What is cryolipolysis?",
                "answer": "Cryolipolysis involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of cryolipolysis are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for cryolipolysis?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does cryolipolysis cost in Vadodara?",
                "answer": "Cryolipolysis costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is cryolipolysis safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, cryolipolysis is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Cryolipolysis Journey?",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their cryolipolysis. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="cryolipolysis-in-vadodara"
      content={content}
    />
  );
}
