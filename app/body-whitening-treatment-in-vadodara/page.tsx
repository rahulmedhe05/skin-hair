import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Premium Body Whitening Treatment in Vadodara | Prime One Clinic",
  description: "Get the best body whitening treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "body, whitening, treatment vadodara, body whitening treatment near me, best body whitening vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/body-whitening-treatment-in-vadodara",
  },
  openGraph: {
    title: "Premium Body Whitening Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best body whitening treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/body-whitening-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function BodyWhiteningTreatmentPage() {
  const content = {
    heroTitle: "Premium Body Whitening Treatment in Vadodara",
    heroSubtitle: "Safe, Effective & Affordable Body Whitening Treatment",
    
    introContent: `Body concerns are deeply personal, and seeking body whitening treatment takes courage. At Prime One Hair & Skin Clinic, we provide judgment-free consultations where we listen to your goals and create realistic treatment plans.

Modern body treatments have moved far beyond invasive surgical options. Today's non-invasive and minimally invasive technologies can reduce fat, tighten skin, smooth cellulite, and contour the body with minimal downtime. Our clinic offers the latest evidence-based body treatments selected for their proven track record.

Every body treatment begins with a thorough assessment of your concerns, body composition, and expectations. We're honest about what each treatment can and cannot achieve — because unrealistic expectations lead to disappointment regardless of how good the treatment is. Our goal is visible improvement that makes YOU feel confident.`,

    whyChooseUs: [
          "Convenient location in Vadodara with easy parking",
          "Evening and weekend appointments available",
          "Board-certified dermatologists with 15+ years experience",
          "Transparent pricing with no hidden costs",
          "10,000+ satisfied patients across Vadodara",
          "Personalized treatment plans — no one-size-fits-all"
    ],

    services: [
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized body whitening treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical body whitening treatment."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your body whitening treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Body Whitening Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
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
                "question": "Why should I choose Prime One for body whitening treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is body whitening treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, body whitening treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of body whitening treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is body whitening treatment?",
                "answer": "Body Whitening Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does body whitening treatment cost in Vadodara?",
                "answer": "Body Whitening Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Body Whitening Treatment Now",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized body whitening treatment that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="body-whitening-treatment-in-vadodara"
      content={content}
    />
  );
}
