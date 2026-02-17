import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Body Sculpting Experts in Vadodara | Prime One Clinic",
  description: "Looking for body sculpting? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "body, sculpting vadodara, body sculpting near me, best body sculpting vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/body-sculpting-in-vadodara",
  },
  openGraph: {
    title: "Body Sculpting Experts in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for body sculpting? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/body-sculpting-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function BodySculptingPage() {
  const content = {
    heroTitle: "Body Sculpting Experts in Vadodara",
    heroSubtitle: "Transform Your Appearance with Body Sculpting",
    
    introContent: `Body concerns are deeply personal, and seeking body sculpting takes courage. At Prime One Hair & Skin Clinic, we provide judgment-free consultations where we listen to your goals and create realistic treatment plans.

Modern body treatments have moved far beyond invasive surgical options. Today's non-invasive and minimally invasive technologies can reduce fat, tighten skin, smooth cellulite, and contour the body with minimal downtime. Our clinic offers the latest evidence-based body treatments selected for their proven track record.

Every body treatment begins with a thorough assessment of your concerns, body composition, and expectations. We're honest about what each treatment can and cannot achieve — because unrealistic expectations lead to disappointment regardless of how good the treatment is. Our goal is visible improvement that makes YOU feel confident.`,

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
                "title": "Body Sculpting Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized body sculpting protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical body sculpting."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your body sculpting concerns by board-certified specialists using advanced diagnostic tools."
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
                "question": "How many sessions of body sculpting are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does body sculpting cost in Vadodara?",
                "answer": "Body Sculpting costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is body sculpting safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, body sculpting is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for body sculpting?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is body sculpting?",
                "answer": "Body Sculpting involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Body Sculpting Consultation Awaits",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="body-sculpting-in-vadodara"
      content={content}
    />
  );
}
