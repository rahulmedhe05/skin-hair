import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Premium Bb Glow Treatment in Vadodara | Prime One Clinic",
  description: "🏆 Best bb glow treatment at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
  keywords: "bb, glow, treatment vadodara, bb glow treatment near me, best bb glow vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/bb-glow-treatment-in-vadodara",
  },
  openGraph: {
    title: "Premium Bb Glow Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "🏆 Best bb glow treatment at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
    url: "https://skinhairvadodara.in/bb-glow-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function BbGlowTreatmentPage() {
  const content = {
    heroTitle: "Premium Bb Glow Treatment in Vadodara",
    heroSubtitle: "Safe, Effective & Affordable Bb Glow Treatment",
    
    introContent: `Professional bb glow treatment goes far beyond what you can achieve with home care products. Clinical-grade treatments penetrate deeper, use higher concentrations of active ingredients, and are administered under expert supervision for maximum effectiveness and safety.

At Prime One Hair & Skin Clinic, our bb glow treatment protocols are designed by dermatologists, not aestheticians. This means every treatment is based on scientific evidence and tailored to your specific skin type and concerns. Whether you need deep cleansing, exfoliation, hydration, brightening, or anti-aging benefits, we select the right combination of techniques and products.

Each treatment begins with a skin analysis using specialized equipment that reveals what's happening beneath the surface — hydration levels, oil production, pigmentation depth, and pore condition. This data guides our treatment decisions and ensures you get measurable results, not just temporary effects.`,

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
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical bb glow treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your bb glow treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Bb Glow Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized bb glow treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "How much does bb glow treatment cost in Vadodara?",
                "answer": "Bb Glow Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Why should I choose Prime One for bb glow treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is bb glow treatment?",
                "answer": "Bb Glow Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "Is bb glow treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, bb glow treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of bb glow treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          }
    ],

    ctaText: "Take the First Step Toward Bb Glow Treatment",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized bb glow treatment that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="bb-glow-treatment-in-vadodara"
      content={content}
    />
  );
}
