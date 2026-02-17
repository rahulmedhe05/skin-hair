import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Prp Treatment in Vadodara | Prime One Clinic",
  description: "🏆 Best prp treatment at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
  keywords: "prp, treatment vadodara, prp treatment near me, best prp treatment vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/prp-treatment-in-vadodara",
  },
  openGraph: {
    title: "Best Prp Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "🏆 Best prp treatment at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
    url: "https://skinhairvadodara.in/prp-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrpTreatmentPage() {
  const content = {
    heroTitle: "Best Prp Treatment in Vadodara",
    heroSubtitle: "Evidence-Based Prp Treatment That Actually Works",
    
    introContent: `Prp Treatment represents one of the most exciting advances in regenerative medicine for hair and skin. This treatment harnesses your body's own healing mechanisms to stimulate growth and renewal — no synthetic chemicals, no foreign substances.

At Prime One Hair & Skin Clinic, our prp treatment protocol uses advanced preparation techniques that concentrate the maximum number of growth factors from your blood. The quality of preparation directly impacts results, which is why we invest in the latest centrifuge technology and follow strict protocols.

The procedure itself is straightforward — a small blood sample is drawn, processed in our lab, and the concentrated growth factors are precisely injected into the treatment area. Most patients find the treatment comfortable, especially with the topical numbing we apply beforehand. Sessions typically take 30-45 minutes, and you can resume normal activities immediately afterward.`,

    whyChooseUs: [
          "Sterile, comfortable treatment environment",
          "Combined with complementary therapies for enhanced results",
          "Minimal downtime — resume activities same day",
          "Advanced PRP/GFC preparation for maximum growth factors",
          "Uses your own blood — 100% natural, zero allergic reactions",
          "Treatment protocols backed by peer-reviewed research"
    ],

    services: [
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical prp treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your prp treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Prp Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized prp treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "How much does prp treatment cost in Vadodara?",
                "answer": "Prp Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Why should I choose Prime One for prp treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is prp treatment?",
                "answer": "Prp Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "Is prp treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, prp treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of prp treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          }
    ],

    ctaText: "Take the First Step Toward Prp Treatment",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized prp treatment that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="prp-treatment-in-vadodara"
      content={content}
    />
  );
}
