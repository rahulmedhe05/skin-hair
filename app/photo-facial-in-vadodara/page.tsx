import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Trusted Photo Facial in Vadodara | Prime One Clinic",
  description: "✅ Photo Facial by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "photo, facial vadodara, photo facial near me, best photo facial vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/photo-facial-in-vadodara",
  },
  openGraph: {
    title: "Trusted Photo Facial in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Photo Facial by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/photo-facial-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function PhotoFacialPage() {
  const content = {
    heroTitle: "Trusted Photo Facial in Vadodara",
    heroSubtitle: "Where Science Meets Beauty",
    
    introContent: `Professional photo facial goes far beyond what you can achieve with home care products. Clinical-grade treatments penetrate deeper, use higher concentrations of active ingredients, and are administered under expert supervision for maximum effectiveness and safety.

At Prime One Hair & Skin Clinic, our photo facial protocols are designed by dermatologists, not aestheticians. This means every treatment is based on scientific evidence and tailored to your specific skin type and concerns. Whether you need deep cleansing, exfoliation, hydration, brightening, or anti-aging benefits, we select the right combination of techniques and products.

Each treatment begins with a skin analysis using specialized equipment that reveals what's happening beneath the surface — hydration levels, oil production, pigmentation depth, and pore condition. This data guides our treatment decisions and ensures you get measurable results, not just temporary effects.`,

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
                "title": "Customized Treatment Plan",
                "description": "Personalized photo facial protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical photo facial."
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
                "description": "Comprehensive evaluation of your photo facial concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Photo Facial Procedure",
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
                "question": "What is photo facial?",
                "answer": "Photo Facial involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of photo facial are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for photo facial?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does photo facial cost in Vadodara?",
                "answer": "Photo Facial costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is photo facial safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, photo facial is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Photo Facial Journey?",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their photo facial. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="photo-facial-in-vadodara"
      content={content}
    />
  );
}
