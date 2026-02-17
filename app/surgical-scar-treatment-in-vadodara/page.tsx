import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Premium Surgical Scar Treatment in Vadodara | Prime One Clinic",
  description: "Get the best surgical scar treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "surgical, scar, treatment vadodara, surgical scar treatment near me, best surgical scar vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/surgical-scar-treatment-in-vadodara",
  },
  openGraph: {
    title: "Premium Surgical Scar Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best surgical scar treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/surgical-scar-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function SurgicalScarTreatmentPage() {
  const content = {
    heroTitle: "Premium Surgical Scar Treatment in Vadodara",
    heroSubtitle: "Safe, Effective & Affordable Surgical Scar Treatment",
    
    introContent: `Scars tell stories we'd sometimes rather not share. Whether from acne, injury, surgery, or burns, surgical scar treatment at Prime One Hair & Skin Clinic can significantly improve the appearance of scars using the latest dermatological techniques.

Scar treatment has evolved dramatically in recent years. We now have multiple tools — fractional lasers, microneedling, subcision, dermal fillers, PRP therapy, chemical peels, and silicone-based treatments — that can be combined strategically for superior results. The key is matching the right technique to your specific scar type.

Our scar assessment evaluates the type (atrophic, hypertrophic, keloid), depth, age, color, and location of your scars. We then create a multi-step treatment plan that typically shows progressive improvement over several sessions. While complete scar removal isn't always possible, we consistently achieve 50-80% improvement in scar appearance.`,

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
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical surgical scar treatment."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your surgical scar treatment concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Surgical Scar Treatment Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized surgical scar treatment protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "Why should I choose Prime One for surgical scar treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is surgical scar treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, surgical scar treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of surgical scar treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is surgical scar treatment?",
                "answer": "Surgical Scar Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does surgical scar treatment cost in Vadodara?",
                "answer": "Surgical Scar Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Surgical Scar Treatment Now",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized surgical scar treatment that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="surgical-scar-treatment-in-vadodara"
      content={content}
    />
  );
}
