import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Trusted Eye Bag Treatment in Vadodara | Prime One Clinic",
  description: "🏆 Best eye bag treatment at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
  keywords: "eye, bag, treatment vadodara, eye bag treatment near me, best eye bag vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/eye-bag-treatment-in-vadodara",
  },
  openGraph: {
    title: "Trusted Eye Bag Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "🏆 Best eye bag treatment at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
    url: "https://skinhairvadodara.in/eye-bag-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function EyeBagTreatmentPage() {
  const content = {
    heroTitle: "Trusted Eye Bag Treatment in Vadodara",
    heroSubtitle: "Where Science Meets Beauty",
    
    introContent: `The area around your eyes is the thinnest, most delicate skin on your body — and often the first place to show signs of aging, stress, and fatigue. Eye Bag Treatment at our Vadodara clinic uses specialized techniques designed specifically for this sensitive zone.

Under-eye concerns can include dark circles (caused by pigmentation, thin skin, or visible blood vessels), puffiness (from fluid retention, allergies, or fat pad changes), hollowness (volume loss), fine lines, and wrinkles. Each concern has different underlying causes and requires different treatment approaches.

Our under-eye treatment assessment considers your specific anatomy, skin type, concern severity, and lifestyle factors. Treatment options range from topical medical-grade products and chemical peels to dermal fillers, PRP therapy, laser treatments, and radiofrequency. We take a conservative approach in this delicate area — safety and natural results are our top priorities.`,

    whyChooseUs: [
          "Transparent pricing with no hidden costs",
          "Clean, modern clinic with latest technology",
          "Convenient location in Vadodara with easy parking",
          "10,000+ satisfied patients across Vadodara",
          "Board-certified dermatologists with 15+ years experience",
          "US FDA-approved equipment and medical-grade products"
    ],

    services: [
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized eye bag treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical eye bag treatment."
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
                "description": "Comprehensive evaluation of your eye bag treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Eye Bag Treatment Procedure",
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
                "question": "How much does eye bag treatment cost in Vadodara?",
                "answer": "Eye Bag Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Why should I choose Prime One for eye bag treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is eye bag treatment?",
                "answer": "Eye Bag Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "Is eye bag treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, eye bag treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of eye bag treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          }
    ],

    ctaText: "Take the First Step Toward Eye Bag Treatment",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their eye bag treatment. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="eye-bag-treatment-in-vadodara"
      content={content}
    />
  );
}
