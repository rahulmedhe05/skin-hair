import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Sunken Eyes Treatment Experts in Vadodara | Prime One Clinic",
  description: "Sunken Eyes Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "sunken, eyes, treatment vadodara, sunken eyes treatment near me, best sunken eyes vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/sunken-eyes-treatment-in-vadodara",
  },
  openGraph: {
    title: "Sunken Eyes Treatment Experts in Vadodara | Prime One Hair & Skin Clinic",
    description: "Sunken Eyes Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/sunken-eyes-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function SunkenEyesTreatmentPage() {
  const content = {
    heroTitle: "Sunken Eyes Treatment Experts in Vadodara",
    heroSubtitle: "Transform Your Appearance with Sunken Eyes Treatment",
    
    introContent: `The area around your eyes is the thinnest, most delicate skin on your body — and often the first place to show signs of aging, stress, and fatigue. Sunken Eyes Treatment at our Vadodara clinic uses specialized techniques designed specifically for this sensitive zone.

Under-eye concerns can include dark circles (caused by pigmentation, thin skin, or visible blood vessels), puffiness (from fluid retention, allergies, or fat pad changes), hollowness (volume loss), fine lines, and wrinkles. Each concern has different underlying causes and requires different treatment approaches.

Our under-eye treatment assessment considers your specific anatomy, skin type, concern severity, and lifestyle factors. Treatment options range from topical medical-grade products and chemical peels to dermal fillers, PRP therapy, laser treatments, and radiofrequency. We take a conservative approach in this delicate area — safety and natural results are our top priorities.`,

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
                "title": "Sunken Eyes Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized sunken eyes treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical sunken eyes treatment."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your sunken eyes treatment concerns by board-certified specialists using advanced diagnostic tools."
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
                "question": "Is sunken eyes treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, sunken eyes treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is sunken eyes treatment?",
                "answer": "Sunken Eyes Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does sunken eyes treatment cost in Vadodara?",
                "answer": "Sunken Eyes Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of sunken eyes treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for sunken eyes treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Sunken Eyes Treatment Today",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="sunken-eyes-treatment-in-vadodara"
      content={content}
    />
  );
}
