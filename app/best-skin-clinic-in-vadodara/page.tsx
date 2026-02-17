import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Trusted Best Skin Clinic in Vadodara | Prime One Clinic",
  description: "Get the best best skin clinic at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "best, skin, clinic vadodara, best skin clinic near me, best best skin vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/best-skin-clinic-in-vadodara",
  },
  openGraph: {
    title: "Trusted Best Skin Clinic in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best best skin clinic at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/best-skin-clinic-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function BestSkinClinicPage() {
  const content = {
    heroTitle: "Trusted Best Skin Clinic in Vadodara",
    heroSubtitle: "Where Science Meets Beauty",
    
    introContent: `Finding the right best skin clinic is a decision that impacts your health, appearance, and confidence. At Prime One Hair & Skin Clinic in Vadodara, we've earned the trust of thousands of patients through consistent results, transparent practices, and genuine care.

What should you look for in a best skin clinic? First, check qualifications — your dermatologist should have an MD in Dermatology or equivalent postgraduate training. Second, ask about technology — the clinic should use US FDA-approved or CE-marked devices. Third, look at real patient results. And finally, trust your comfort level during the consultation.

Our clinic is equipped with international-standard infrastructure including dedicated procedure rooms, sterilization protocols, and the latest diagnostic and treatment technology. Our doctors maintain active memberships in dermatology associations and regularly attend conferences to stay updated with the latest advances in the field.`,

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
                "description": "Personalized best skin clinic protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical best skin clinic."
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
                "description": "Comprehensive evaluation of your best skin clinic concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Best Skin Clinic Procedure",
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
                "question": "Why should I choose Prime One for best skin clinic?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is best skin clinic safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, best skin clinic is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of best skin clinic are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is best skin clinic?",
                "answer": "Best Skin Clinic involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does best skin clinic cost in Vadodara?",
                "answer": "Best Skin Clinic costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Best Skin Clinic Now",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their best skin clinic. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="best-skin-clinic-in-vadodara"
      content={content}
    />
  );
}
