import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Advanced Pre Wedding Skin Treatment in Vadodara | Prime One Clinic",
  description: "Pre Wedding Skin Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "pre, wedding, skin, treatment vadodara, pre wedding skin near me, best pre wedding vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/pre-wedding-skin-treatment-in-vadodara",
  },
  openGraph: {
    title: "Advanced Pre Wedding Skin Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Pre Wedding Skin Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/pre-wedding-skin-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function PreWeddingSkinTreatmentPage() {
  const content = {
    heroTitle: "Advanced Pre Wedding Skin Treatment in Vadodara",
    heroSubtitle: "Board-Certified Specialists for Pre Wedding Skin Treatment",
    
    introContent: `Your wedding is one of the most photographed days of your life, and looking your absolute best is naturally a priority. Pre Wedding Skin Treatment at Prime One Hair & Skin Clinic is specifically designed to give you that wedding-ready glow through a carefully planned timeline of treatments.

We recommend starting your pre wedding skin treatment journey 3-6 months before the wedding. This timeline allows us to address any existing skin concerns, improve overall skin quality gradually, and plan sessions that peak your results for the big day. Last-minute treatments rarely deliver the same results as a well-planned regimen.

Our bridal programs are highly personalized — we assess your skin type, specific concerns, the season of your wedding (sun exposure varies), your outfit choices (which areas need attention), and your skincare experience level. From thereon, we create a week-by-week treatment calendar that builds toward your wedding day glow.`,

    whyChooseUs: [
          "Board-certified dermatologists with 15+ years experience",
          "US FDA-approved equipment and medical-grade products",
          "10,000+ satisfied patients across Vadodara",
          "Convenient location in Vadodara with easy parking",
          "Transparent pricing with no hidden costs",
          "Clean, modern clinic with latest technology"
    ],

    services: [
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your pre wedding skin treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized pre wedding skin treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Pre Wedding Skin Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical pre wedding skin treatment."
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
                "question": "Is pre wedding skin treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, pre wedding skin treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is pre wedding skin treatment?",
                "answer": "Pre Wedding Skin Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does pre wedding skin treatment cost in Vadodara?",
                "answer": "Pre Wedding Skin Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of pre wedding skin treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for pre wedding skin treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Pre Wedding Skin Treatment Today",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their pre wedding skin treatment. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="pre-wedding-skin-treatment-in-vadodara"
      content={content}
    />
  );
}
