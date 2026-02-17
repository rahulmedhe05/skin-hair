import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Advanced Excessive Sweating Treatment in Vadodara | Prime One Clinic",
  description: "✅ Excessive Sweating Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "excessive, sweating, treatment vadodara, excessive sweating treatment near me, best excessive sweating vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/excessive-sweating-treatment-in-vadodara",
  },
  openGraph: {
    title: "Advanced Excessive Sweating Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Excessive Sweating Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/excessive-sweating-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function ExcessiveSweatingTreatmentPage() {
  const content = {
    heroTitle: "Advanced Excessive Sweating Treatment in Vadodara",
    heroSubtitle: "Board-Certified Specialists for Excessive Sweating Treatment",
    
    introContent: `Excessive sweating and related concerns can significantly impact your daily life, social interactions, and self-confidence. Excessive Sweating Treatment at Prime One Hair & Skin Clinic provides medically proven solutions for these often-underestimated conditions.

Hyperhidrosis (excessive sweating) affects approximately 3% of the population and can occur in the underarms, palms, feet, or generalized areas. It's a medical condition, not a hygiene issue, and it has effective treatment options that many people aren't aware of.

Our treatment approach begins with assessing the severity and pattern of your sweating. Options range from prescription-strength antiperspirants and oral medications to Botox injections (which can reduce sweating by 80-90%) and advanced energy-based treatments. We help you find the right balance between efficacy, convenience, and budget.`,

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
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical excessive sweating treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your excessive sweating treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Excessive Sweating Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized excessive sweating treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "What is excessive sweating treatment?",
                "answer": "Excessive Sweating Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of excessive sweating treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for excessive sweating treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does excessive sweating treatment cost in Vadodara?",
                "answer": "Excessive Sweating Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is excessive sweating treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, excessive sweating treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Excessive Sweating Treatment Journey?",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their excessive sweating treatment. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="excessive-sweating-treatment-in-vadodara"
      content={content}
    />
  );
}
