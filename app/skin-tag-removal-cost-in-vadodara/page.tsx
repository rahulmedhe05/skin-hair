import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Premium Skin Tag Removal Cost in Vadodara | Prime One Clinic",
  description: "Get the best skin tag removal cost at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "skin, tag, removal, cost vadodara, skin tag removal near me, best skin tag vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/skin-tag-removal-cost-in-vadodara",
  },
  openGraph: {
    title: "Premium Skin Tag Removal Cost in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best skin tag removal cost at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/skin-tag-removal-cost-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function SkinTagRemovalCostPage() {
  const content = {
    heroTitle: "Premium Skin Tag Removal Cost in Vadodara",
    heroSubtitle: "Safe, Effective & Affordable Skin Tag Removal Cost",
    
    introContent: `Unwanted skin growths can be both cosmetically concerning and sometimes medically relevant. Skin Tag Removal Cost at our Vadodara clinic is performed by qualified dermatologists using precise techniques that minimize scarring and ensure complete removal.

Before any removal procedure, our dermatologists examine the growth carefully — sometimes using dermatoscopy for magnified analysis. This step is crucial because it helps us distinguish between benign growths and those that need biopsy or special attention. Safety always comes first.

Our removal techniques include radiofrequency ablation, electrocautery, laser removal, cryotherapy, and minor surgical excision. The technique chosen depends on the type, size, and location of the growth. Most procedures are performed under local anesthesia, take 15-30 minutes, and have minimal downtime. We provide detailed aftercare instructions to ensure proper healing with minimal scarring.`,

    whyChooseUs: [
          "Convenient location in Vadodara with easy parking",
          "Evening and weekend appointments available",
          "Board-certified dermatologists with 15+ years experience",
          "Transparent pricing with no hidden costs",
          "10,000+ satisfied patients across Vadodara",
          "Personalized treatment plans — no one-size-fits-all"
    ],

    services: [
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized skin tag removal cost protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical skin tag removal cost."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your skin tag removal cost concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Skin Tag Removal Cost Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
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
                "question": "Why should I choose Prime One for skin tag removal cost?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is skin tag removal cost safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, skin tag removal cost is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of skin tag removal cost are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is skin tag removal cost?",
                "answer": "Skin Tag Removal Cost involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does skin tag removal cost cost in Vadodara?",
                "answer": "Skin Tag Removal Cost costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Skin Tag Removal Cost Now",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized skin tag removal cost that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-tag-removal-cost-in-vadodara"
      content={content}
    />
  );
}
