import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Trusted Scar Revision in Vadodara | Prime One Clinic",
  description: "Get the best scar revision at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "scar, revision vadodara, scar revision near me, best scar revision vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/scar-revision-in-vadodara",
  },
  openGraph: {
    title: "Trusted Scar Revision in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best scar revision at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/scar-revision-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function ScarRevisionPage() {
  const content = {
    heroTitle: "Trusted Scar Revision in Vadodara",
    heroSubtitle: "Where Science Meets Beauty",
    
    introContent: `Scars tell stories we'd sometimes rather not share. Whether from acne, injury, surgery, or burns, scar revision at Prime One Hair & Skin Clinic can significantly improve the appearance of scars using the latest dermatological techniques.

Scar treatment has evolved dramatically in recent years. We now have multiple tools — fractional lasers, microneedling, subcision, dermal fillers, PRP therapy, chemical peels, and silicone-based treatments — that can be combined strategically for superior results. The key is matching the right technique to your specific scar type.

Our scar assessment evaluates the type (atrophic, hypertrophic, keloid), depth, age, color, and location of your scars. We then create a multi-step treatment plan that typically shows progressive improvement over several sessions. While complete scar removal isn't always possible, we consistently achieve 50-80% improvement in scar appearance.`,

    whyChooseUs: [
          "Transparent pricing with no hidden costs",
          "Clean, modern clinic with latest technology",
          "Convenient location in Vadodara with easy parking",
          "10,000+ satisfied patients across Vadodara",
          "Board-certified dermatologists with 15+ years experience",
          "US FDA-approved equipment and medical-grade products"
    ],

    services: [
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical scar revision."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your scar revision concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Scar Revision Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized scar revision protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "Why should I choose Prime One for scar revision?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is scar revision safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, scar revision is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of scar revision are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is scar revision?",
                "answer": "Scar Revision involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does scar revision cost in Vadodara?",
                "answer": "Scar Revision costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Scar Revision Now",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their scar revision. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="scar-revision-in-vadodara"
      content={content}
    />
  );
}
