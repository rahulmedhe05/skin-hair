import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Advanced Hair Restoration in Vadodara | Prime One Clinic",
  description: "✅ Hair Restoration by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "hair, restoration vadodara, hair restoration near me, best hair restoration vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/hair-restoration-in-vadodara",
  },
  openGraph: {
    title: "Advanced Hair Restoration in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Hair Restoration by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/hair-restoration-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function HairRestorationPage() {
  const content = {
    heroTitle: "Advanced Hair Restoration in Vadodara",
    heroSubtitle: "Board-Certified Specialists for Hair Restoration",
    
    introContent: `Hair health is a reflection of overall wellness, and finding the right hair restoration can transform both your appearance and confidence. At Prime One Hair & Skin Clinic, our trichologists and dermatologists specialize in comprehensive hair care solutions.

Whether you're dealing with hair fall, thinning, damage, scalp issues, or simply want to maintain healthy hair, we offer evidence-based treatments tailored to your specific needs. Our approach begins with understanding your hair type, lifestyle, diet, and health history — because these all influence your hair health.

Our hair care services range from therapeutic treatments for medical hair conditions to cosmetic procedures for styling and enhancement. We combine in-clinic treatments with personalized home care regimens to ensure your results are sustainable and your hair stays healthy long-term.`,

    whyChooseUs: [
          "Board-certified dermatologists with 15+ years experience",
          "US FDA-approved equipment and medical-grade products",
          "10,000+ satisfied patients across Vadodara",
          "Convenient location in Vadodara with easy parking",
          "Transparent pricing with no hidden costs",
          "Clean, modern clinic with latest technology"
    ],

    services: [
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical hair restoration."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your hair restoration concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Hair Restoration Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized hair restoration protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "What is hair restoration?",
                "answer": "Hair Restoration involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of hair restoration are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for hair restoration?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does hair restoration cost in Vadodara?",
                "answer": "Hair Restoration costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is hair restoration safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, hair restoration is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Hair Restoration Journey?",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their hair restoration. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-restoration-in-vadodara"
      content={content}
    />
  );
}
