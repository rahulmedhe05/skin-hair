import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Expert Nail Disorder Treatment Solutions in Vadodara | Prime One Clinic",
  description: "Get the best nail disorder treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "nail, disorder, treatment vadodara, nail disorder treatment near me, best nail disorder vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/nail-disorder-treatment-in-vadodara",
  },
  openGraph: {
    title: "Expert Nail Disorder Treatment Solutions in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best nail disorder treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/nail-disorder-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function NailDisorderTreatmentPage() {
  const content = {
    heroTitle: "Expert Nail Disorder Treatment Solutions in Vadodara",
    heroSubtitle: "Your Journey to Better Skin & Hair Starts Here",
    
    introContent: `Nail problems are more common than people realize, and they often indicate underlying health conditions. Nail Disorder Treatment at Prime One Hair & Skin Clinic addresses nail concerns through proper diagnosis and targeted treatment.

Nail disorders can result from fungal infections, psoriasis, lichen planus, nutritional deficiencies, trauma, and systemic conditions. Our dermatologists examine your nails carefully and may perform microscopy or culture tests to identify the exact cause. This precision in diagnosis leads to faster, more effective treatment.

Treatment approaches vary from topical antifungal medications and medicated nail lacquers to oral medications and minor procedural interventions. For conditions like ingrown nails, we offer definitive correction procedures that prevent recurrence. We also provide guidance on nail care practices that promote healthy nail growth.`,

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
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical nail disorder treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your nail disorder treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Nail Disorder Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized nail disorder treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "Why should I choose Prime One for nail disorder treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is nail disorder treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, nail disorder treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of nail disorder treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is nail disorder treatment?",
                "answer": "Nail Disorder Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does nail disorder treatment cost in Vadodara?",
                "answer": "Nail Disorder Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Nail Disorder Treatment Now",
    ctaDescription: "Professional nail disorder treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="nail-disorder-treatment-in-vadodara"
      content={content}
    />
  );
}
