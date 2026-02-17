import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Top Skin Specialist in Vadodara | Prime One Clinic",
  description: "Get the best top skin specialist at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "top, skin, specialist vadodara, top skin specialist near me, best top skin vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/top-skin-specialist-in-vadodara",
  },
  openGraph: {
    title: "Best Top Skin Specialist in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best top skin specialist at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/top-skin-specialist-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function TopSkinSpecialistPage() {
  const content = {
    heroTitle: "Best Top Skin Specialist in Vadodara",
    heroSubtitle: "Evidence-Based Top Skin Specialist That Actually Works",
    
    introContent: `Finding the right top skin specialist is a decision that impacts your health, appearance, and confidence. At Prime One Hair & Skin Clinic in Vadodara, we've earned the trust of thousands of patients through consistent results, transparent practices, and genuine care.

What should you look for in a top skin specialist? First, check qualifications — your dermatologist should have an MD in Dermatology or equivalent postgraduate training. Second, ask about technology — the clinic should use US FDA-approved or CE-marked devices. Third, look at real patient results. And finally, trust your comfort level during the consultation.

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
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical top skin specialist."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your top skin specialist concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Top Skin Specialist Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized top skin specialist protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "Why should I choose Prime One for top skin specialist?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is top skin specialist safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, top skin specialist is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of top skin specialist are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is top skin specialist?",
                "answer": "Top Skin Specialist involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does top skin specialist cost in Vadodara?",
                "answer": "Top Skin Specialist costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Top Skin Specialist Now",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized top skin specialist that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="top-skin-specialist-in-vadodara"
      content={content}
    />
  );
}
