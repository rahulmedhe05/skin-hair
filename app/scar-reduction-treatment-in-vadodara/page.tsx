import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Expert Scar Reduction Treatment Solutions in Vadodara | Prime One Clinic",
  description: "🏆 Best scar reduction treatment at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
  keywords: "scar, reduction, treatment vadodara, scar reduction treatment near me, best scar reduction vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/scar-reduction-treatment-in-vadodara",
  },
  openGraph: {
    title: "Expert Scar Reduction Treatment Solutions in Vadodara | Prime One Hair & Skin Clinic",
    description: "🏆 Best scar reduction treatment at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!",
    url: "https://skinhairvadodara.in/scar-reduction-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function ScarReductionTreatmentPage() {
  const content = {
    heroTitle: "Expert Scar Reduction Treatment Solutions in Vadodara",
    heroSubtitle: "Your Journey to Better Skin & Hair Starts Here",
    
    introContent: `Scars tell stories we'd sometimes rather not share. Whether from acne, injury, surgery, or burns, scar reduction treatment at Prime One Hair & Skin Clinic can significantly improve the appearance of scars using the latest dermatological techniques.

Scar treatment has evolved dramatically in recent years. We now have multiple tools — fractional lasers, microneedling, subcision, dermal fillers, PRP therapy, chemical peels, and silicone-based treatments — that can be combined strategically for superior results. The key is matching the right technique to your specific scar type.

Our scar assessment evaluates the type (atrophic, hypertrophic, keloid), depth, age, color, and location of your scars. We then create a multi-step treatment plan that typically shows progressive improvement over several sessions. While complete scar removal isn't always possible, we consistently achieve 50-80% improvement in scar appearance.`,

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
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical scar reduction treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your scar reduction treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Scar Reduction Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized scar reduction treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "How much does scar reduction treatment cost in Vadodara?",
                "answer": "Scar Reduction Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Why should I choose Prime One for scar reduction treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is scar reduction treatment?",
                "answer": "Scar Reduction Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "Is scar reduction treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, scar reduction treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of scar reduction treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          }
    ],

    ctaText: "Take the First Step Toward Scar Reduction Treatment",
    ctaDescription: "Professional scar reduction treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="scar-reduction-treatment-in-vadodara"
      content={content}
    />
  );
}
