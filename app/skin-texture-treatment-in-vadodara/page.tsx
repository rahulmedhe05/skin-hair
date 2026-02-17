import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Leading Skin Texture Treatment in Vadodara | Prime One Clinic",
  description: "✅ Skin Texture Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "skin, texture, treatment vadodara, skin texture treatment near me, best skin texture vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/skin-texture-treatment-in-vadodara",
  },
  openGraph: {
    title: "Leading Skin Texture Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Skin Texture Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/skin-texture-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function SkinTextureTreatmentPage() {
  const content = {
    heroTitle: "Leading Skin Texture Treatment in Vadodara",
    heroSubtitle: "Clinically Proven Results with Skin Texture Treatment",
    
    introContent: `Cosmetic procedures have become increasingly refined, offering subtle enhancements that boost confidence without looking obvious. Skin Texture Treatment at Prime One Hair & Skin Clinic is performed by experienced practitioners who prioritize natural-looking results.

The best cosmetic procedures are those that enhance your existing features rather than creating an artificial look. Our approach begins with understanding what you want to achieve and then recommending the most appropriate techniques to get there safely and effectively.

Every cosmetic procedure at our clinic follows strict safety protocols. We use only certified, quality-assured products and materials. Our practitioners are trained in both the technical and artistic aspects of cosmetic treatments — because achieving beautiful results requires both medical knowledge and aesthetic sensibility.`,

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
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Skin Texture Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your skin texture treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized skin texture treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical skin texture treatment."
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
                "question": "What is skin texture treatment?",
                "answer": "Skin Texture Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of skin texture treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for skin texture treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does skin texture treatment cost in Vadodara?",
                "answer": "Skin Texture Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is skin texture treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, skin texture treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Skin Texture Treatment Journey?",
    ctaDescription: "Professional skin texture treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-texture-treatment-in-vadodara"
      content={content}
    />
  );
}
