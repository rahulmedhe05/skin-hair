import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Expert Hair Restoration Clinic Solutions in Vadodara | Prime One Clinic",
  description: "Looking for hair restoration clinic? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "hair, restoration, clinic vadodara, hair restoration clinic near me, best hair restoration vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/hair-restoration-clinic-in-vadodara",
  },
  openGraph: {
    title: "Expert Hair Restoration Clinic Solutions in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for hair restoration clinic? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/hair-restoration-clinic-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function HairRestorationClinicPage() {
  const content = {
    heroTitle: "Expert Hair Restoration Clinic Solutions in Vadodara",
    heroSubtitle: "Your Journey to Better Skin & Hair Starts Here",
    
    introContent: `Finding the right hair restoration clinic is a decision that impacts your health, appearance, and confidence. At Prime One Hair & Skin Clinic in Vadodara, we've earned the trust of thousands of patients through consistent results, transparent practices, and genuine care.

What should you look for in a hair restoration clinic? First, check qualifications — your dermatologist should have an MD in Dermatology or equivalent postgraduate training. Second, ask about technology — the clinic should use US FDA-approved or CE-marked devices. Third, look at real patient results. And finally, trust your comfort level during the consultation.

Our clinic is equipped with international-standard infrastructure including dedicated procedure rooms, sterilization protocols, and the latest diagnostic and treatment technology. Our doctors maintain active memberships in dermatology associations and regularly attend conferences to stay updated with the latest advances in the field.`,

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
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Hair Restoration Clinic Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your hair restoration clinic concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized hair restoration clinic protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical hair restoration clinic."
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
                "question": "How many sessions of hair restoration clinic are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does hair restoration clinic cost in Vadodara?",
                "answer": "Hair Restoration Clinic costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is hair restoration clinic safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, hair restoration clinic is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for hair restoration clinic?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is hair restoration clinic?",
                "answer": "Hair Restoration Clinic involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Hair Restoration Clinic Consultation Awaits",
    ctaDescription: "Professional hair restoration clinic doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-restoration-clinic-in-vadodara"
      content={content}
    />
  );
}
