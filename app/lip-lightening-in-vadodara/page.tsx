import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Premium Lip Lightening in Vadodara | Prime One Clinic",
  description: "Looking for lip lightening? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "lip, lightening vadodara, lip lightening near me, best lip lightening vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/lip-lightening-in-vadodara",
  },
  openGraph: {
    title: "Premium Lip Lightening in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for lip lightening? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/lip-lightening-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function LipLighteningPage() {
  const content = {
    heroTitle: "Premium Lip Lightening in Vadodara",
    heroSubtitle: "Safe, Effective & Affordable Lip Lightening",
    
    introContent: `Cosmetic procedures have become increasingly refined, offering subtle enhancements that boost confidence without looking obvious. Lip Lightening at Prime One Hair & Skin Clinic is performed by experienced practitioners who prioritize natural-looking results.

The best cosmetic procedures are those that enhance your existing features rather than creating an artificial look. Our approach begins with understanding what you want to achieve and then recommending the most appropriate techniques to get there safely and effectively.

Every cosmetic procedure at our clinic follows strict safety protocols. We use only certified, quality-assured products and materials. Our practitioners are trained in both the technical and artistic aspects of cosmetic treatments — because achieving beautiful results requires both medical knowledge and aesthetic sensibility.`,

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
                "title": "Expert Consultation",
                "description": "Comprehensive evaluation of your lip lightening concerns by board-certified specialists using advanced diagnostic tools."
          },
          {
                "title": "Customized Treatment Plan",
                "description": "Personalized lip lightening protocol designed specifically for your skin type, condition severity, and lifestyle requirements."
          },
          {
                "title": "Lip Lightening Procedure",
                "description": "Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort."
          },
          {
                "title": "Progress Monitoring",
                "description": "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed."
          },
          {
                "title": "Home Care Guidance",
                "description": "Expert recommendations for at-home skincare and maintenance routines that complement your clinical lip lightening."
          },
          {
                "title": "Maintenance Programs",
                "description": "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition."
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
                "question": "How many sessions of lip lightening are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does lip lightening cost in Vadodara?",
                "answer": "Lip Lightening costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is lip lightening safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, lip lightening is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for lip lightening?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is lip lightening?",
                "answer": "Lip Lightening involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Lip Lightening Consultation Awaits",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized lip lightening that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="lip-lightening-in-vadodara"
      content={content}
    />
  );
}
