import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Exosome Hair Treatment Experts in Vadodara | Prime One Clinic",
  description: "Looking for exosome hair treatment? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "exosome, hair, treatment vadodara, exosome hair treatment near me, best exosome hair vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/exosome-hair-treatment-in-vadodara",
  },
  openGraph: {
    title: "Exosome Hair Treatment Experts in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for exosome hair treatment? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/exosome-hair-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function ExosomeHairTreatmentPage() {
  const content = {
    heroTitle: "Exosome Hair Treatment Experts in Vadodara",
    heroSubtitle: "Transform Your Appearance with Exosome Hair Treatment",
    
    introContent: `Exosome Hair Treatment represents one of the most exciting advances in regenerative medicine for hair and skin. This treatment harnesses your body's own healing mechanisms to stimulate growth and renewal — no synthetic chemicals, no foreign substances.

At Prime One Hair & Skin Clinic, our exosome hair treatment protocol uses advanced preparation techniques that concentrate the maximum number of growth factors from your blood. The quality of preparation directly impacts results, which is why we invest in the latest centrifuge technology and follow strict protocols.

The procedure itself is straightforward — a small blood sample is drawn, processed in our lab, and the concentrated growth factors are precisely injected into the treatment area. Most patients find the treatment comfortable, especially with the topical numbing we apply beforehand. Sessions typically take 30-45 minutes, and you can resume normal activities immediately afterward.`,

    whyChooseUs: [
          "Treatment protocols backed by peer-reviewed research",
          "Advanced PRP/GFC preparation for maximum growth factors",
          "Latest generation centrifuge technology",
          "Consistent, measurable results tracked over sessions",
          "Combined with complementary therapies for enhanced results",
          "Minimal downtime — resume activities same day"
    ],

    services: [
          {
                "title": "Exosome Hair Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized exosome hair treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical exosome hair treatment."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your exosome hair treatment concerns by board-certified specialists using advanced diagnostic tools."
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
                "question": "How many sessions of exosome hair treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does exosome hair treatment cost in Vadodara?",
                "answer": "Exosome Hair Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is exosome hair treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, exosome hair treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for exosome hair treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is exosome hair treatment?",
                "answer": "Exosome Hair Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Exosome Hair Treatment Consultation Awaits",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="exosome-hair-treatment-in-vadodara"
      content={content}
    />
  );
}
