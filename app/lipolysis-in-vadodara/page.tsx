import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Expert Lipolysis Solutions in Vadodara | Prime One Clinic",
  description: "✅ Lipolysis by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "lipolysis vadodara, lipolysis near me, best lipolysis vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/lipolysis-in-vadodara",
  },
  openGraph: {
    title: "Expert Lipolysis Solutions in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Lipolysis by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/lipolysis-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function LipolysisPage() {
  const content = {
    heroTitle: "Expert Lipolysis Solutions in Vadodara",
    heroSubtitle: "Your Journey to Better Skin & Hair Starts Here",
    
    introContent: `Body concerns are deeply personal, and seeking lipolysis takes courage. At Prime One Hair & Skin Clinic, we provide judgment-free consultations where we listen to your goals and create realistic treatment plans.

Modern body treatments have moved far beyond invasive surgical options. Today's non-invasive and minimally invasive technologies can reduce fat, tighten skin, smooth cellulite, and contour the body with minimal downtime. Our clinic offers the latest evidence-based body treatments selected for their proven track record.

Every body treatment begins with a thorough assessment of your concerns, body composition, and expectations. We're honest about what each treatment can and cannot achieve — because unrealistic expectations lead to disappointment regardless of how good the treatment is. Our goal is visible improvement that makes YOU feel confident.`,

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
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical lipolysis."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your lipolysis concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Lipolysis Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized lipolysis protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "What is lipolysis?",
                "answer": "Lipolysis involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of lipolysis are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for lipolysis?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does lipolysis cost in Vadodara?",
                "answer": "Lipolysis costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is lipolysis safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, lipolysis is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Lipolysis Journey?",
    ctaDescription: "Professional lipolysis doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="lipolysis-in-vadodara"
      content={content}
    />
  );
}
