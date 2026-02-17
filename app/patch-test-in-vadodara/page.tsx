import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Trusted Patch Test in Vadodara | Prime One Clinic",
  description: "✅ Patch Test by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "patch, test vadodara, patch test near me, best patch test vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/patch-test-in-vadodara",
  },
  openGraph: {
    title: "Trusted Patch Test in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Patch Test by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/patch-test-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function PatchTestPage() {
  const content = {
    heroTitle: "Trusted Patch Test in Vadodara",
    heroSubtitle: "Where Science Meets Beauty",
    
    introContent: `Patch Test represents our commitment to using the most advanced diagnostic and treatment technologies available in dermatology. At Prime One Hair & Skin Clinic, we invest in technology that delivers measurable, evidence-based results.

Accurate diagnosis is the foundation of effective treatment. Our diagnostic capabilities include high-resolution dermatoscopy, computerized skin analysis, and specialized testing that reveals conditions invisible to the naked eye. This technology helps us detect problems early and monitor treatment progress objectively.

We regularly upgrade our equipment and training to stay at the forefront of dermatological technology. Every device in our clinic is selected based on its clinical evidence, safety profile, and suitability for Indian skin types. Our practitioners are certified and trained on each technology they use.`,

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
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical patch test."
          },
          {
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your patch test concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
          },
          {
                "title": "Patch Test Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized patch test protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
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
                "question": "What is patch test?",
                "answer": "Patch Test involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of patch test are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for patch test?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does patch test cost in Vadodara?",
                "answer": "Patch Test costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is patch test safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, patch test is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Patch Test Journey?",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their patch test. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="patch-test-in-vadodara"
      content={content}
    />
  );
}
