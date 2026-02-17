import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Varicose Veins Treatment in Vadodara | Prime One Clinic",
  description: "Get the best varicose veins treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "varicose, veins, treatment vadodara, varicose veins treatment near me, best varicose veins vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/varicose-veins-treatment-in-vadodara",
  },
  openGraph: {
    title: "Best Varicose Veins Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best varicose veins treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/varicose-veins-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function VaricoseVeinsTreatmentPage() {
  const content = {
    heroTitle: "Best Varicose Veins Treatment in Vadodara",
    heroSubtitle: "Evidence-Based Varicose Veins Treatment That Actually Works",
    
    introContent: `Visible veins and vascular conditions on the face and body are a common cosmetic concern, but they can also sometimes indicate underlying circulatory issues. Varicose Veins Treatment at Prime One Hair & Skin Clinic addresses both the aesthetic and medical aspects of vascular conditions.

Modern vascular treatment uses advanced laser and light-based technologies that can precisely target blood vessels without damaging surrounding skin. The specific wavelength and pulse duration are selected based on the size, depth, and type of vessel being treated.

Our vascular treatment assessment includes a thorough evaluation of the affected vessels, your medical history, and any contributing factors. We ensure there's no underlying condition requiring medical attention before proceeding with cosmetic treatment. Most vascular treatments show visible improvement after 1-3 sessions.`,

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
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your varicose veins treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized varicose veins treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Varicose Veins Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical varicose veins treatment."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
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
                "question": "Why should I choose Prime One for varicose veins treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is varicose veins treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, varicose veins treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of varicose veins treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is varicose veins treatment?",
                "answer": "Varicose Veins Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does varicose veins treatment cost in Vadodara?",
                "answer": "Varicose Veins Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Varicose Veins Treatment Now",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized varicose veins treatment that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="varicose-veins-treatment-in-vadodara"
      content={content}
    />
  );
}
