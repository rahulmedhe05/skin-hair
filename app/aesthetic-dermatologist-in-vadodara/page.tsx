import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Aesthetic Dermatologist in Vadodara | Prime One Clinic",
  description: "🏆 Best aesthetic dermatologist at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
  keywords: "aesthetic, dermatologist vadodara, aesthetic dermatologist near me, best aesthetic dermatologist vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/aesthetic-dermatologist-in-vadodara",
  },
  openGraph: {
    title: "Best Aesthetic Dermatologist in Vadodara | Prime One Hair & Skin Clinic",
    description: "🏆 Best aesthetic dermatologist at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
    url: "https://skinhairvadodara.in/aesthetic-dermatologist-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function AestheticDermatologistPage() {
  const content = {
    heroTitle: "Best Aesthetic Dermatologist in Vadodara",
    heroSubtitle: "Evidence-Based Aesthetic Dermatologist That Actually Works",
    
    introContent: `Finding the right aesthetic dermatologist is a decision that impacts your health, appearance, and confidence. At Prime One Hair & Skin Clinic in Vadodara, we've earned the trust of thousands of patients through consistent results, transparent practices, and genuine care.

What should you look for in a aesthetic dermatologist? First, check qualifications — your dermatologist should have an MD in Dermatology or equivalent postgraduate training. Second, ask about technology — the clinic should use US FDA-approved or CE-marked devices. Third, look at real patient results. And finally, trust your comfort level during the consultation.

Our clinic is equipped with international-standard infrastructure including dedicated procedure rooms, sterilization protocols, and the latest diagnostic and treatment technology. Our doctors maintain active memberships in dermatology associations and regularly attend conferences to stay updated with the latest advances in the field.`,

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
                "description": "Comprehensive evaluation of your aesthetic dermatologist concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized aesthetic dermatologist protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Aesthetic Dermatologist Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical aesthetic dermatologist."
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
                "question": "How much does aesthetic dermatologist cost in Vadodara?",
                "answer": "Aesthetic Dermatologist costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Why should I choose Prime One for aesthetic dermatologist?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is aesthetic dermatologist?",
                "answer": "Aesthetic Dermatologist involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "Is aesthetic dermatologist safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, aesthetic dermatologist is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of aesthetic dermatologist are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          }
    ],

    ctaText: "Take the First Step Toward Aesthetic Dermatologist",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized aesthetic dermatologist that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="aesthetic-dermatologist-in-vadodara"
      content={content}
    />
  );
}
