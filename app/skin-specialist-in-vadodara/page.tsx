import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Skin Specialist Vadodara | MD Doctor | ₹500",
  description: "🏆 Top skin specialist in Vadodara ✓ MD certified ✓ 15+ years experience ✓ All skin problems treated ✓ 4.9★ Google rating. Consultation ₹500. Book now!",
  keywords: "skin specialist vadodara, best skin specialist vadodara, skin doctor near me, skin specialist doctor",
};

export default function SkinSpecialistPage() {
  const content = {
    heroTitle: "Advanced Skin Specialist Care in Vadodara",
    heroSubtitle: "When Basic Treatment Isn't Enough",
    
    introContent: `Some skin conditions need more than general care — they need specialist expertise. Conditions that haven't responded to treatment. Complex presentations that defy simple diagnosis. Situations where getting it right really matters.

A skin specialist brings deeper training, broader experience with unusual cases, and access to advanced diagnostic and treatment options. Not every skin problem needs a specialist, but some definitely do.

We provide that specialist-level care in Vadodara. Patients come to us after struggling elsewhere, with complex conditions, or when they simply want the most thorough care available. We justify that confidence with comprehensive assessment and targeted treatment.`,

    whyChooseUs: [
      "Specialist-level training and expertise",
      "Experience with complex and unusual cases",
      "Advanced diagnostic capabilities",
      "Access to latest treatment technologies",
      "Thorough approach to difficult problems",
      "Clear communication about your condition"
    ],

    services: [
      {
        title: "Complex Dermatology",
        description: "Conditions that haven't responded to treatment elsewhere. Fresh eyes, deeper investigation, better solutions."
      },
      {
        title: "Autoimmune Skin Conditions",
        description: "Psoriasis, lupus manifestations, dermatomyositis — conditions requiring specialist understanding and management."
      },
      {
        title: "Advanced Pigmentation",
        description: "Stubborn melasma, vitiligo management, complex pigmentation disorders requiring specialized approaches."
      },
      {
        title: "Severe Acne Management",
        description: "Cystic acne, hormonal acne, acne that hasn't responded to standard treatment."
      },
      {
        title: "Hair Loss Specialization",
        description: "Pattern baldness, alopecia areata, scarring alopecia — advanced diagnosis and treatment."
      },
      {
        title: "Dermatology Procedures",
        description: "Biopsies, excisions, advanced cosmetic procedures — specialist procedural skills when needed."
      }
    ],

    processSteps: [
      {
        title: "Comprehensive Assessment",
        description: "Detailed history, thorough examination, review of previous treatments and their results."
      },
      {
        title: "Specialist Diagnosis",
        description: "Using expertise to identify what others might have missed."
      },
      {
        title: "Tailored Treatment Plan",
        description: "Specific to your condition, your response to previous treatments, and your goals."
      },
      {
        title: "Ongoing Specialist Care",
        description: "Complex conditions often need long-term management. We provide continuity."
      }
    ],

    faqItems: [
      {
        question: "When do I need a skin specialist vs. a regular doctor?",
        answer: "When treatment isn't working, when the condition is complex or unusual, when you need advanced procedures, or when you want the most thorough evaluation possible."
      },
      {
        question: "What qualifications should I look for?",
        answer: "MD Dermatology is the specialist qualification. Additional training in subspecialties like cosmetic dermatology or dermato-surgery adds value for specific conditions."
      },
      {
        question: "Can you help if other dermatologists couldn't?",
        answer: "Often, yes. Fresh perspective, different approach, more time for investigation — these frequently uncover solutions others missed."
      },
      {
        question: "Is specialist care more expensive?",
        answer: "Consultation fees may be higher, but accurate diagnosis often saves money in the long run by avoiding ineffective treatments."
      },
      {
        question: "Do you coordinate with other doctors?",
        answer: "When needed, yes. Some skin conditions connect to other health issues. We coordinate with relevant specialists."
      }
    ],

    ctaText: "Complex Skin Problem? Get Specialist Care",
    ctaDescription: "When regular treatment hasn't worked, it's time for specialist expertise. Thorough evaluation, advanced solutions, real results. Book your specialist consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-specialist-in-vadodara"
      content={content}
    />
  );
}
