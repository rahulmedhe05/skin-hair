import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Expert Broken Capillaries Treatment Solutions in Vadodara | Prime One Clinic",
  description: "Broken Capillaries Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "broken, capillaries, treatment vadodara, broken capillaries treatment near me, best broken capillaries vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/broken-capillaries-treatment-in-vadodara",
  },
  openGraph: {
    title: "Expert Broken Capillaries Treatment Solutions in Vadodara | Prime One Hair & Skin Clinic",
    description: "Broken Capillaries Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/broken-capillaries-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function BrokenCapillariesTreatmentPage() {
  const content = {
    heroTitle: "Expert Broken Capillaries Treatment Solutions in Vadodara",
    heroSubtitle: "Your Journey to Better Skin & Hair Starts Here",
    
    introContent: `Visible veins and vascular conditions on the face and body are a common cosmetic concern, but they can also sometimes indicate underlying circulatory issues. Broken Capillaries Treatment at Prime One Hair & Skin Clinic addresses both the aesthetic and medical aspects of vascular conditions.

Modern vascular treatment uses advanced laser and light-based technologies that can precisely target blood vessels without damaging surrounding skin. The specific wavelength and pulse duration are selected based on the size, depth, and type of vessel being treated.

Our vascular treatment assessment includes a thorough evaluation of the affected vessels, your medical history, and any contributing factors. We ensure there's no underlying condition requiring medical attention before proceeding with cosmetic treatment. Most vascular treatments show visible improvement after 1-3 sessions.`,

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
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical broken capillaries treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your broken capillaries treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Broken Capillaries Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized broken capillaries treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "Is broken capillaries treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, broken capillaries treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is broken capillaries treatment?",
                "answer": "Broken Capillaries Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does broken capillaries treatment cost in Vadodara?",
                "answer": "Broken Capillaries Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of broken capillaries treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for broken capillaries treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Broken Capillaries Treatment Today",
    ctaDescription: "Professional broken capillaries treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="broken-capillaries-treatment-in-vadodara"
      content={content}
    />
  );
}
