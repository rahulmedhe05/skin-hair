import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Expert Radiofrequency Treatment Solutions in Vadodara | Prime One Clinic",
  description: "Get the best radiofrequency treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "radiofrequency, treatment vadodara, radiofrequency treatment near me, best radiofrequency treatment vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/radiofrequency-treatment-in-vadodara",
  },
  openGraph: {
    title: "Expert Radiofrequency Treatment Solutions in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best radiofrequency treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/radiofrequency-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function RadiofrequencyTreatmentPage() {
  const content = {
    heroTitle: "Expert Radiofrequency Treatment Solutions in Vadodara",
    heroSubtitle: "Your Journey to Better Skin & Hair Starts Here",
    
    introContent: `Radiofrequency Treatment represents our commitment to using the most advanced diagnostic and treatment technologies available in dermatology. At Prime One Hair & Skin Clinic, we invest in technology that delivers measurable, evidence-based results.

Accurate diagnosis is the foundation of effective treatment. Our diagnostic capabilities include high-resolution dermatoscopy, computerized skin analysis, and specialized testing that reveals conditions invisible to the naked eye. This technology helps us detect problems early and monitor treatment progress objectively.

We regularly upgrade our equipment and training to stay at the forefront of dermatological technology. Every device in our clinic is selected based on its clinical evidence, safety profile, and suitability for Indian skin types. Our practitioners are certified and trained on each technology they use.`,

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
                "title": "Radiofrequency Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized radiofrequency treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical radiofrequency treatment."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your radiofrequency treatment concerns by board-certified specialists using advanced diagnostic tools."
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
                "question": "Why should I choose Prime One for radiofrequency treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is radiofrequency treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, radiofrequency treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of radiofrequency treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is radiofrequency treatment?",
                "answer": "Radiofrequency Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does radiofrequency treatment cost in Vadodara?",
                "answer": "Radiofrequency Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Radiofrequency Treatment Now",
    ctaDescription: "Professional radiofrequency treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="radiofrequency-treatment-in-vadodara"
      content={content}
    />
  );
}
