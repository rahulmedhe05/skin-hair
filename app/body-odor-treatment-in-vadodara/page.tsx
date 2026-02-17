import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Professional Body Odor Treatment in Vadodara | Prime One Clinic",
  description: "Body Odor Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "body, odor, treatment vadodara, body odor treatment near me, best body odor vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/body-odor-treatment-in-vadodara",
  },
  openGraph: {
    title: "Professional Body Odor Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Body Odor Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/body-odor-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function BodyOdorTreatmentPage() {
  const content = {
    heroTitle: "Professional Body Odor Treatment in Vadodara",
    heroSubtitle: "Personalized Body Odor Treatment for Lasting Results",
    
    introContent: `Excessive sweating and related concerns can significantly impact your daily life, social interactions, and self-confidence. Body Odor Treatment at Prime One Hair & Skin Clinic provides medically proven solutions for these often-underestimated conditions.

Hyperhidrosis (excessive sweating) affects approximately 3% of the population and can occur in the underarms, palms, feet, or generalized areas. It's a medical condition, not a hygiene issue, and it has effective treatment options that many people aren't aware of.

Our treatment approach begins with assessing the severity and pattern of your sweating. Options range from prescription-strength antiperspirants and oral medications to Botox injections (which can reduce sweating by 80-90%) and advanced energy-based treatments. We help you find the right balance between efficacy, convenience, and budget.`,

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
                "title": "Body Odor Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your body odor treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized body odor treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical body odor treatment."
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
                "question": "Is body odor treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, body odor treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is body odor treatment?",
                "answer": "Body Odor Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does body odor treatment cost in Vadodara?",
                "answer": "Body Odor Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of body odor treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for body odor treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Body Odor Treatment Today",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="body-odor-treatment-in-vadodara"
      content={content}
    />
  );
}
