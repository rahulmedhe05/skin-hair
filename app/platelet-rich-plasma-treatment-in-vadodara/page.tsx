import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Professional Platelet Rich Plasma Treatment in Vadodara | Prime One Clinic",
  description: "Platelet Rich Plasma Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "platelet, rich, plasma, treatment vadodara, platelet rich plasma near me, best platelet rich vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/platelet-rich-plasma-treatment-in-vadodara",
  },
  openGraph: {
    title: "Professional Platelet Rich Plasma Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Platelet Rich Plasma Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/platelet-rich-plasma-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function PlateletRichPlasmaTreatmentPage() {
  const content = {
    heroTitle: "Professional Platelet Rich Plasma Treatment in Vadodara",
    heroSubtitle: "Personalized Platelet Rich Plasma Treatment for Lasting Results",
    
    introContent: `Platelet Rich Plasma Treatment represents one of the most exciting advances in regenerative medicine for hair and skin. This treatment harnesses your body's own healing mechanisms to stimulate growth and renewal — no synthetic chemicals, no foreign substances.

At Prime One Hair & Skin Clinic, our platelet rich plasma treatment protocol uses advanced preparation techniques that concentrate the maximum number of growth factors from your blood. The quality of preparation directly impacts results, which is why we invest in the latest centrifuge technology and follow strict protocols.

The procedure itself is straightforward — a small blood sample is drawn, processed in our lab, and the concentrated growth factors are precisely injected into the treatment area. Most patients find the treatment comfortable, especially with the topical numbing we apply beforehand. Sessions typically take 30-45 minutes, and you can resume normal activities immediately afterward.`,

    whyChooseUs: [
          "Combined with complementary therapies for enhanced results",
          "Minimal downtime — resume activities same day",
          "Consistent, measurable results tracked over sessions",
          "Latest generation centrifuge technology",
          "Treatment protocols backed by peer-reviewed research",
          "Advanced PRP/GFC preparation for maximum growth factors"
    ],

    services: [
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Platelet Rich Plasma Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your platelet rich plasma treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized platelet rich plasma treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical platelet rich plasma treatment."
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
                "question": "Is platelet rich plasma treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, platelet rich plasma treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is platelet rich plasma treatment?",
                "answer": "Platelet Rich Plasma Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does platelet rich plasma treatment cost in Vadodara?",
                "answer": "Platelet Rich Plasma Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of platelet rich plasma treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for platelet rich plasma treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Platelet Rich Plasma Treatment Today",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="platelet-rich-plasma-treatment-in-vadodara"
      content={content}
    />
  );
}
