import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Best Skin Hospital in Vadodara | Prime One Clinic",
  description: "Best Skin Hospital - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "best, skin, hospital vadodara, best skin hospital near me, best best skin vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/best-skin-hospital-in-vadodara",
  },
  openGraph: {
    title: "Best Best Skin Hospital in Vadodara | Prime One Hair & Skin Clinic",
    description: "Best Skin Hospital - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/best-skin-hospital-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function BestSkinHospitalPage() {
  const content = {
    heroTitle: "Best Best Skin Hospital in Vadodara",
    heroSubtitle: "Evidence-Based Best Skin Hospital That Actually Works",
    
    introContent: `Finding the right best skin hospital is a decision that impacts your health, appearance, and confidence. At Prime One Hair & Skin Clinic in Vadodara, we've earned the trust of thousands of patients through consistent results, transparent practices, and genuine care.

What should you look for in a best skin hospital? First, check qualifications — your dermatologist should have an MD in Dermatology or equivalent postgraduate training. Second, ask about technology — the clinic should use US FDA-approved or CE-marked devices. Third, look at real patient results. And finally, trust your comfort level during the consultation.

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
                "title": "Customized Treatment Plan",
                "description": "Personalized best skin hospital protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical best skin hospital."
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
                "description": "Comprehensive evaluation of your best skin hospital concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Best Skin Hospital Procedure",
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
                "question": "Is best skin hospital safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, best skin hospital is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is best skin hospital?",
                "answer": "Best Skin Hospital involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does best skin hospital cost in Vadodara?",
                "answer": "Best Skin Hospital costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of best skin hospital are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for best skin hospital?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Best Skin Hospital Today",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized best skin hospital that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="best-skin-hospital-in-vadodara"
      content={content}
    />
  );
}
