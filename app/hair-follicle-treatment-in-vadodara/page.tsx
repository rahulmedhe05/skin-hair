import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Expert Hair Follicle Treatment Solutions in Vadodara | Prime One Clinic",
  description: "Looking for hair follicle treatment? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "hair, follicle, treatment vadodara, hair follicle treatment near me, best hair follicle vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/hair-follicle-treatment-in-vadodara",
  },
  openGraph: {
    title: "Expert Hair Follicle Treatment Solutions in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for hair follicle treatment? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/hair-follicle-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function HairFollicleTreatmentPage() {
  const content = {
    heroTitle: "Expert Hair Follicle Treatment Solutions in Vadodara",
    heroSubtitle: "Your Journey to Better Skin & Hair Starts Here",
    
    introContent: `At Prime One Hair & Skin Clinic in Vadodara, we provide expert hair follicle treatment backed by years of clinical experience and the latest medical advancements. Our dermatologists take the time to understand your specific concerns and create treatment plans that deliver real, measurable results.

We believe that everyone deserves access to quality dermatological care. That's why we've built our practice around making advanced skin and hair treatments accessible, affordable, and comfortable. From your first consultation to your follow-up appointments, we ensure a seamless, supportive experience.

Our comprehensive approach combines medical expertise with aesthetic sensibility. We don't just treat conditions — we help you achieve the best version of yourself through evidence-based treatments, honest guidance, and genuine care for your well-being.`,

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
                "title": "Hair Follicle Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your hair follicle treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized hair follicle treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical hair follicle treatment."
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
                "question": "How many sessions of hair follicle treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does hair follicle treatment cost in Vadodara?",
                "answer": "Hair Follicle Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is hair follicle treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, hair follicle treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for hair follicle treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is hair follicle treatment?",
                "answer": "Hair Follicle Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Hair Follicle Treatment Consultation Awaits",
    ctaDescription: "Professional hair follicle treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-follicle-treatment-in-vadodara"
      content={content}
    />
  );
}
