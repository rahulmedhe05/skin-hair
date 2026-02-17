import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hyperhidrosis Treatment Experts in Vadodara | Prime One Clinic",
  description: "✅ Hyperhidrosis Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "hyperhidrosis, treatment vadodara, hyperhidrosis treatment near me, best hyperhidrosis treatment vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/hyperhidrosis-treatment-in-vadodara",
  },
  openGraph: {
    title: "Hyperhidrosis Treatment Experts in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Hyperhidrosis Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/hyperhidrosis-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function HyperhidrosisTreatmentPage() {
  const content = {
    heroTitle: "Hyperhidrosis Treatment Experts in Vadodara",
    heroSubtitle: "Transform Your Appearance with Hyperhidrosis Treatment",
    
    introContent: `Excessive sweating and related concerns can significantly impact your daily life, social interactions, and self-confidence. Hyperhidrosis Treatment at Prime One Hair & Skin Clinic provides medically proven solutions for these often-underestimated conditions.

Hyperhidrosis (excessive sweating) affects approximately 3% of the population and can occur in the underarms, palms, feet, or generalized areas. It's a medical condition, not a hygiene issue, and it has effective treatment options that many people aren't aware of.

Our treatment approach begins with assessing the severity and pattern of your sweating. Options range from prescription-strength antiperspirants and oral medications to Botox injections (which can reduce sweating by 80-90%) and advanced energy-based treatments. We help you find the right balance between efficacy, convenience, and budget.`,

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
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Hyperhidrosis Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your hyperhidrosis treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized hyperhidrosis treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical hyperhidrosis treatment."
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
                "question": "What is hyperhidrosis treatment?",
                "answer": "Hyperhidrosis Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of hyperhidrosis treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for hyperhidrosis treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does hyperhidrosis treatment cost in Vadodara?",
                "answer": "Hyperhidrosis Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is hyperhidrosis treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, hyperhidrosis treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Hyperhidrosis Treatment Journey?",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hyperhidrosis-treatment-in-vadodara"
      content={content}
    />
  );
}
