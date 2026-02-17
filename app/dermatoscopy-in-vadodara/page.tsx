import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Leading Dermatoscopy in Vadodara | Prime One Clinic",
  description: "Looking for dermatoscopy? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "dermatoscopy vadodara, dermatoscopy near me, best dermatoscopy vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/dermatoscopy-in-vadodara",
  },
  openGraph: {
    title: "Leading Dermatoscopy in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for dermatoscopy? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/dermatoscopy-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function DermatoscopyPage() {
  const content = {
    heroTitle: "Leading Dermatoscopy in Vadodara",
    heroSubtitle: "Clinically Proven Results with Dermatoscopy",
    
    introContent: `Dermatoscopy represents our commitment to using the most advanced diagnostic and treatment technologies available in dermatology. At Prime One Hair & Skin Clinic, we invest in technology that delivers measurable, evidence-based results.

Accurate diagnosis is the foundation of effective treatment. Our diagnostic capabilities include high-resolution dermatoscopy, computerized skin analysis, and specialized testing that reveals conditions invisible to the naked eye. This technology helps us detect problems early and monitor treatment progress objectively.

We regularly upgrade our equipment and training to stay at the forefront of dermatological technology. Every device in our clinic is selected based on its clinical evidence, safety profile, and suitability for Indian skin types. Our practitioners are certified and trained on each technology they use.`,

    whyChooseUs: [
          "Clean, modern clinic with latest technology",
          "Convenient location in Vadodara with easy parking",
          "Evening and weekend appointments available",
          "Personalized treatment plans — no one-size-fits-all",
          "US FDA-approved equipment and medical-grade products",
          "10,000+ satisfied patients across Vadodara"
    ],

    services: [
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical dermatoscopy."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your dermatoscopy concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Dermatoscopy Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized dermatoscopy protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "How many sessions of dermatoscopy are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does dermatoscopy cost in Vadodara?",
                "answer": "Dermatoscopy costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is dermatoscopy safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, dermatoscopy is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for dermatoscopy?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is dermatoscopy?",
                "answer": "Dermatoscopy involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Dermatoscopy Consultation Awaits",
    ctaDescription: "Professional dermatoscopy doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="dermatoscopy-in-vadodara"
      content={content}
    />
  );
}
