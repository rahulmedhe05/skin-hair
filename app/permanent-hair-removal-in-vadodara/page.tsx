import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Professional Permanent Hair Removal in Vadodara | Prime One Clinic",
  description: "🏆 Best permanent hair removal at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
  keywords: "permanent, hair, removal vadodara, permanent hair removal near me, best permanent hair vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/permanent-hair-removal-in-vadodara",
  },
  openGraph: {
    title: "Professional Permanent Hair Removal in Vadodara | Prime One Hair & Skin Clinic",
    description: "🏆 Best permanent hair removal at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
    url: "https://skinhairvadodara.in/permanent-hair-removal-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function PermanentHairRemovalPage() {
  const content = {
    heroTitle: "Professional Permanent Hair Removal in Vadodara",
    heroSubtitle: "Personalized Permanent Hair Removal for Lasting Results",
    
    introContent: `At Prime One Hair & Skin Clinic in Vadodara, we provide expert permanent hair removal backed by years of clinical experience and the latest medical advancements. Our dermatologists take the time to understand your specific concerns and create treatment plans that deliver real, measurable results.

We believe that everyone deserves access to quality dermatological care. That's why we've built our practice around making advanced skin and hair treatments accessible, affordable, and comfortable. From your first consultation to your follow-up appointments, we ensure a seamless, supportive experience.

Our comprehensive approach combines medical expertise with aesthetic sensibility. We don't just treat conditions — we help you achieve the best version of yourself through evidence-based treatments, honest guidance, and genuine care for your well-being.`,

    whyChooseUs: [
          "Personalized treatment plans — no one-size-fits-all",
          "Transparent pricing with no hidden costs",
          "Clean, modern clinic with latest technology",
          "US FDA-approved equipment and medical-grade products",
          "Evening and weekend appointments available",
          "Board-certified dermatologists with 15+ years experience"
    ],

    services: [
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Permanent Hair Removal Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your permanent hair removal concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized permanent hair removal protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical permanent hair removal."
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
                "question": "How much does permanent hair removal cost in Vadodara?",
                "answer": "Permanent Hair Removal costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Why should I choose Prime One for permanent hair removal?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is permanent hair removal?",
                "answer": "Permanent Hair Removal involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "Is permanent hair removal safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, permanent hair removal is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of permanent hair removal are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          }
    ],

    ctaText: "Take the First Step Toward Permanent Hair Removal",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="permanent-hair-removal-in-vadodara"
      content={content}
    />
  );
}
