import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Xanthelasma Removal in Vadodara | Prime One Clinic",
  description: "Xanthelasma Removal - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "xanthelasma, removal vadodara, xanthelasma removal near me, best xanthelasma removal vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/xanthelasma-removal-in-vadodara",
  },
  openGraph: {
    title: "Best Xanthelasma Removal in Vadodara | Prime One Hair & Skin Clinic",
    description: "Xanthelasma Removal - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/xanthelasma-removal-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function XanthelasmaRemovalPage() {
  const content = {
    heroTitle: "Best Xanthelasma Removal in Vadodara",
    heroSubtitle: "Evidence-Based Xanthelasma Removal That Actually Works",
    
    introContent: `Unwanted skin growths can be both cosmetically concerning and sometimes medically relevant. Xanthelasma Removal at our Vadodara clinic is performed by qualified dermatologists using precise techniques that minimize scarring and ensure complete removal.

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
                "description": "Comprehensive evaluation of your xanthelasma removal concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized xanthelasma removal protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Xanthelasma Removal Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical xanthelasma removal."
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
                "question": "Is xanthelasma removal safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, xanthelasma removal is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is xanthelasma removal?",
                "answer": "Xanthelasma Removal involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does xanthelasma removal cost in Vadodara?",
                "answer": "Xanthelasma Removal costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of xanthelasma removal are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for xanthelasma removal?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Xanthelasma Removal Today",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized xanthelasma removal that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="xanthelasma-removal-in-vadodara"
      content={content}
    />
  );
}
