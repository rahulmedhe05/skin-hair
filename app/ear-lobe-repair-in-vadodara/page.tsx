import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Ear Lobe Repair in Vadodara | Prime One Clinic",
  description: "Get the best ear lobe repair at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "ear, lobe, repair vadodara, ear lobe repair near me, best ear lobe vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/ear-lobe-repair-in-vadodara",
  },
  openGraph: {
    title: "Best Ear Lobe Repair in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best ear lobe repair at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/ear-lobe-repair-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function EarLobeRepairPage() {
  const content = {
    heroTitle: "Best Ear Lobe Repair in Vadodara",
    heroSubtitle: "Evidence-Based Ear Lobe Repair That Actually Works",
    
    introContent: `Cosmetic procedures have become increasingly refined, offering subtle enhancements that boost confidence without looking obvious. Ear Lobe Repair at Prime One Hair & Skin Clinic is performed by experienced practitioners who prioritize natural-looking results.

The best cosmetic procedures are those that enhance your existing features rather than creating an artificial look. Our approach begins with understanding what you want to achieve and then recommending the most appropriate techniques to get there safely and effectively.

Every cosmetic procedure at our clinic follows strict safety protocols. We use only certified, quality-assured products and materials. Our practitioners are trained in both the technical and artistic aspects of cosmetic treatments — because achieving beautiful results requires both medical knowledge and aesthetic sensibility.`,

    whyChooseUs: [
          "10,000+ satisfied patients across Vadodara",
          "Personalized treatment plans — no one-size-fits-all",
          "Transparent pricing with no hidden costs",
          "Board-certified dermatologists with 15+ years experience",
          "Convenient location in Vadodara with easy parking",
          "Evening and weekend appointments available"
    ],

    services: [
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical ear lobe repair."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your ear lobe repair concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Ear Lobe Repair Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized ear lobe repair protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "Why should I choose Prime One for ear lobe repair?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is ear lobe repair safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, ear lobe repair is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of ear lobe repair are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is ear lobe repair?",
                "answer": "Ear Lobe Repair involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does ear lobe repair cost in Vadodara?",
                "answer": "Ear Lobe Repair costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Ear Lobe Repair Now",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized ear lobe repair that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="ear-lobe-repair-in-vadodara"
      content={content}
    />
  );
}
