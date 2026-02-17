import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Premium Mens Hair Treatment in Vadodara | Prime One Clinic",
  description: "Looking for mens hair treatment? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "mens, hair, treatment vadodara, mens hair treatment near me, best mens hair vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/mens-hair-treatment-in-vadodara",
  },
  openGraph: {
    title: "Premium Mens Hair Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for mens hair treatment? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/mens-hair-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function MensHairTreatmentPage() {
  const content = {
    heroTitle: "Premium Mens Hair Treatment in Vadodara",
    heroSubtitle: "Safe, Effective & Affordable Mens Hair Treatment",
    
    introContent: `Your wedding is one of the most photographed days of your life, and looking your absolute best is naturally a priority. Mens Hair Treatment at Prime One Hair & Skin Clinic is specifically designed to give you that wedding-ready glow through a carefully planned timeline of treatments.

We recommend starting your mens hair treatment journey 3-6 months before the wedding. This timeline allows us to address any existing skin concerns, improve overall skin quality gradually, and plan sessions that peak your results for the big day. Last-minute treatments rarely deliver the same results as a well-planned regimen.

Our bridal programs are highly personalized — we assess your skin type, specific concerns, the season of your wedding (sun exposure varies), your outfit choices (which areas need attention), and your skincare experience level. From thereon, we create a week-by-week treatment calendar that builds toward your wedding day glow.`,

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
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical mens hair treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your mens hair treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Mens Hair Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized mens hair treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "How many sessions of mens hair treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does mens hair treatment cost in Vadodara?",
                "answer": "Mens Hair Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is mens hair treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, mens hair treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for mens hair treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is mens hair treatment?",
                "answer": "Mens Hair Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Mens Hair Treatment Consultation Awaits",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized mens hair treatment that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="mens-hair-treatment-in-vadodara"
      content={content}
    />
  );
}
