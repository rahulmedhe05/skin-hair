import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Leading Subcision Treatment in Vadodara | Prime One Clinic",
  description: "✅ Subcision Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "subcision, treatment vadodara, subcision treatment near me, best subcision treatment vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/subcision-treatment-in-vadodara",
  },
  openGraph: {
    title: "Leading Subcision Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Subcision Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/subcision-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function SubcisionTreatmentPage() {
  const content = {
    heroTitle: "Leading Subcision Treatment in Vadodara",
    heroSubtitle: "Clinically Proven Results with Subcision Treatment",
    
    introContent: `Scars tell stories we'd sometimes rather not share. Whether from acne, injury, surgery, or burns, subcision treatment at Prime One Hair & Skin Clinic can significantly improve the appearance of scars using the latest dermatological techniques.

Scar treatment has evolved dramatically in recent years. We now have multiple tools — fractional lasers, microneedling, subcision, dermal fillers, PRP therapy, chemical peels, and silicone-based treatments — that can be combined strategically for superior results. The key is matching the right technique to your specific scar type.

Our scar assessment evaluates the type (atrophic, hypertrophic, keloid), depth, age, color, and location of your scars. We then create a multi-step treatment plan that typically shows progressive improvement over several sessions. While complete scar removal isn't always possible, we consistently achieve 50-80% improvement in scar appearance.`,

    whyChooseUs: [
          "Clean, modern clinic with latest technology",
          "Convenient location in Vadodara with easy parking",
          "Evening and weekend appointments available",
          "Personalized treatment plans — no one-size-fits-all",
          "US FDA-approved equipment and medical-grade products",
          "10,000+ satisfied patients across Vadodara"
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
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical subcision treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your subcision treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Subcision Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized subcision treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "What is subcision treatment?",
                "answer": "Subcision Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of subcision treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for subcision treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does subcision treatment cost in Vadodara?",
                "answer": "Subcision Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is subcision treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, subcision treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Subcision Treatment Journey?",
    ctaDescription: "Professional subcision treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="subcision-treatment-in-vadodara"
      content={content}
    />
  );
}
