import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Premium Aesthetic Clinic in Vadodara | Prime One Clinic",
  description: "✅ Aesthetic Clinic by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "aesthetic, clinic vadodara, aesthetic clinic near me, best aesthetic clinic vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/aesthetic-clinic-in-vadodara",
  },
  openGraph: {
    title: "Premium Aesthetic Clinic in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Aesthetic Clinic by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/aesthetic-clinic-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function AestheticClinicPage() {
  const content = {
    heroTitle: "Premium Aesthetic Clinic in Vadodara",
    heroSubtitle: "Safe, Effective & Affordable Aesthetic Clinic",
    
    introContent: `Finding the right aesthetic clinic is a decision that impacts your health, appearance, and confidence. At Prime One Hair & Skin Clinic in Vadodara, we've earned the trust of thousands of patients through consistent results, transparent practices, and genuine care.

What should you look for in a aesthetic clinic? First, check qualifications — your dermatologist should have an MD in Dermatology or equivalent postgraduate training. Second, ask about technology — the clinic should use US FDA-approved or CE-marked devices. Third, look at real patient results. And finally, trust your comfort level during the consultation.

Our clinic is equipped with international-standard infrastructure including dedicated procedure rooms, sterilization protocols, and the latest diagnostic and treatment technology. Our doctors maintain active memberships in dermatology associations and regularly attend conferences to stay updated with the latest advances in the field.`,

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
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical aesthetic clinic."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your aesthetic clinic concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Aesthetic Clinic Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized aesthetic clinic protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
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
                "question": "What is aesthetic clinic?",
                "answer": "Aesthetic Clinic involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of aesthetic clinic are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for aesthetic clinic?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does aesthetic clinic cost in Vadodara?",
                "answer": "Aesthetic Clinic costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is aesthetic clinic safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, aesthetic clinic is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Aesthetic Clinic Journey?",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized aesthetic clinic that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="aesthetic-clinic-in-vadodara"
      content={content}
    />
  );
}
