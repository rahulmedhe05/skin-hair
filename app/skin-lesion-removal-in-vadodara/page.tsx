import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Skin Lesion Removal in Vadodara | Prime One Clinic",
  description: "✅ Skin Lesion Removal by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "skin, lesion, removal vadodara, skin lesion removal near me, best skin lesion vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/skin-lesion-removal-in-vadodara",
  },
  openGraph: {
    title: "Best Skin Lesion Removal in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Skin Lesion Removal by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/skin-lesion-removal-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function SkinLesionRemovalPage() {
  const content = {
    heroTitle: "Best Skin Lesion Removal in Vadodara",
    heroSubtitle: "Evidence-Based Skin Lesion Removal That Actually Works",
    
    introContent: `Unwanted skin growths can be both cosmetically concerning and sometimes medically relevant. Skin Lesion Removal at our Vadodara clinic is performed by qualified dermatologists using precise techniques that minimize scarring and ensure complete removal.

Before any removal procedure, our dermatologists examine the growth carefully — sometimes using dermatoscopy for magnified analysis. This step is crucial because it helps us distinguish between benign growths and those that need biopsy or special attention. Safety always comes first.

Our removal techniques include radiofrequency ablation, electrocautery, laser removal, cryotherapy, and minor surgical excision. The technique chosen depends on the type, size, and location of the growth. Most procedures are performed under local anesthesia, take 15-30 minutes, and have minimal downtime. We provide detailed aftercare instructions to ensure proper healing with minimal scarring.`,

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
                "description": "Comprehensive evaluation of your skin lesion removal concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized skin lesion removal protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Skin Lesion Removal Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical skin lesion removal."
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
                "question": "What is skin lesion removal?",
                "answer": "Skin Lesion Removal involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of skin lesion removal are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for skin lesion removal?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does skin lesion removal cost in Vadodara?",
                "answer": "Skin Lesion Removal costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is skin lesion removal safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, skin lesion removal is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Skin Lesion Removal Journey?",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized skin lesion removal that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-lesion-removal-in-vadodara"
      content={content}
    />
  );
}
