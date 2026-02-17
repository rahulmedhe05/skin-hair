import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Acne Specialist in Vadodara | Prime One Clinic",
  description: "✅ Acne Specialist by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "acne, specialist vadodara, acne specialist near me, best acne specialist vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/acne-specialist-in-vadodara",
  },
  openGraph: {
    title: "Best Acne Specialist in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Acne Specialist by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/acne-specialist-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function AcneSpecialistPage() {
  const content = {
    heroTitle: "Best Acne Specialist in Vadodara",
    heroSubtitle: "Evidence-Based Acne Specialist That Actually Works",
    
    introContent: `Dealing with acne goes beyond the surface — it affects confidence, social interactions, and emotional well-being. If you're looking for acne specialist, you deserve a treatment approach based on medical science, not marketing promises.

At Prime One Hair & Skin Clinic, we treat acne as the complex medical condition it is. Our dermatologists identify your specific acne type — whether it's comedonal, inflammatory, cystic, hormonal, or a combination — because each type responds to different treatments. We also investigate underlying factors like hormonal imbalances, gut health, diet triggers, and stress patterns.

Our treatment success rate exceeds 90% because we take a systematic approach. We combine prescription-strength topical treatments, oral medications when necessary, and clinical procedures like chemical peels, LED therapy, or laser treatments. We also address the psychological impact of acne and provide realistic timelines so you know exactly what to expect.`,

    whyChooseUs: [
          "Both active acne and scar treatment under one roof",
          "Hormonal acne expertise with appropriate testing",
          "Medical-grade products — not cosmetic-grade substitutes",
          "MD dermatologists specializing in acne management",
          "Follow-up protocols to prevent relapse",
          "Sensitive, confidential treatment environment"
    ],

    services: [
          {
                "title": "Chemical Peels for Acne",
                "description": "Medical-grade peels using salicylic acid, glycolic acid, or combination formulas to unclog pores, reduce inflammation, and improve skin texture."
          },
          {
                "title": "Extraction Treatment",
                "description": "Professional comedone extraction performed hygienically to clear blackheads and whiteheads without scarring."
          },
          {
                "title": "LED Light Therapy",
                "description": "Blue and red light therapy that kills acne-causing bacteria and reduces inflammation without any downtime or discomfort."
          },
          {
                "title": "Hormonal Acne Management",
                "description": "Targeted approach for hormone-related breakouts including appropriate testing and specific anti-androgen treatments when indicated."
          },
          {
                "title": "Clinical Acne Assessment",
                "description": "Comprehensive evaluation including acne grading, skin type analysis, and identification of contributing factors for targeted treatment."
          },
          {
                "title": "Medical Acne Treatment",
                "description": "Prescription topical and oral medications customized to your acne type and severity for maximum clearance with minimum side effects."
          }
    ],

    processSteps: [
          {
                "title": "Skin Assessment",
                "description": "Detailed examination of your acne type, severity, and contributing factors."
          },
          {
                "title": "Custom Protocol",
                "description": "Evidence-based treatment plan combining topical, oral, and procedural options."
          },
          {
                "title": "Active Treatment",
                "description": "Regular sessions with progress monitoring and protocol adjustments as needed."
          },
          {
                "title": "Clear Skin Maintenance",
                "description": "Long-term skincare routine and prevention strategies for lasting clarity."
          }
    ],

    faqItems: [
          {
                "question": "How long does acne specialist take to work?",
                "answer": "Most patients notice improvement within 4-6 weeks. Significant clearing usually occurs by 3 months. Severe or cystic acne may take longer."
          },
          {
                "question": "Is acne specialist safe for sensitive skin?",
                "answer": "Absolutely. We customize all treatments based on your skin sensitivity level. Gentler options are available for reactive skin types."
          },
          {
                "question": "Do I need prescription medication for acne?",
                "answer": "Mild acne may respond to topical treatments alone. Moderate to severe acne usually benefits from prescription medications. We recommend the minimum effective treatment."
          },
          {
                "question": "Will acne come back after treatment?",
                "answer": "Good treatment addresses underlying causes, reducing the likelihood of recurrence. We also provide maintenance protocols and skincare routines to keep skin clear long-term."
          },
          {
                "question": "Can diet affect acne?",
                "answer": "Research suggests high glycemic foods and dairy may worsen acne in some individuals. We discuss dietary modifications specific to your situation."
          }
    ],

    ctaText: "Ready to Start Your Acne Specialist Journey?",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized acne specialist that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="acne-specialist-in-vadodara"
      content={content}
    />
  );
}
