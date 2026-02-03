import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Specialist Doctor Vadodara | Trichologist | ₹500",
  description: "💇 Hair specialist doctor in Vadodara ✓ MD trichologist ✓ Hair fall, baldness, scalp issues ✓ Advanced treatments ✓ 8,000+ patients. Consult ₹500. Book!",
  keywords: "hair specialist doctor vadodara, trichologist vadodara, hair loss specialist, hair specialist near me",
};

export default function HairSpecialistDoctorPage() {
  const content = {
    heroTitle: "Hair Specialist Doctor in Vadodara",
    heroSubtitle: "Medical Expertise for Hair Problems",
    
    introContent: `A hair specialist doctor brings medical training to hair problems. Unlike general advice or salon treatments, a specialist investigates causes, makes accurate diagnoses, and provides evidence-based treatment.

Hair loss is often a symptom, not just a standalone problem. Thyroid issues, hormonal imbalances, nutritional deficiencies, autoimmune conditions — many medical problems manifest as hair loss. A specialist identifies and addresses these.

We specialize in hair disorders with comprehensive diagnostic and treatment capabilities. From initial evaluation through treatment completion, our medical approach delivers results.`,

    whyChooseUs: [
      "Medical specialist approach",
      "Diagnostic expertise",
      "Underlying cause identification",
      "Evidence-based treatment",
      "Full treatment spectrum",
      "Results-focused care"
    ],

    services: [
      {
        title: "Hair Loss Diagnosis",
        description: "Medical evaluation to identify why you're losing hair."
      },
      {
        title: "Trichoscopy",
        description: "Specialized hair and scalp examination under magnification."
      },
      {
        title: "Blood Work Analysis",
        description: "Relevant tests to identify underlying causes."
      },
      {
        title: "Medical Treatment",
        description: "Prescription medications and therapies."
      },
      {
        title: "PRP/GFC Therapy",
        description: "Growth factor treatments for hair regeneration."
      },
      {
        title: "Hair Transplant",
        description: "Surgical restoration when indicated."
      }
    ],

    processSteps: [
      {
        title: "Medical History",
        description: "Detailed history of hair problem and overall health."
      },
      {
        title: "Clinical Examination",
        description: "Thorough hair and scalp examination."
      },
      {
        title: "Investigations",
        description: "Blood tests and other evaluations as needed."
      },
      {
        title: "Treatment Plan",
        description: "Comprehensive plan addressing identified causes."
      }
    ],

    faqItems: [
      {
        question: "What's the difference between a hair specialist and regular doctor?",
        answer: "Specialized training and experience in hair disorders. Better at diagnosing complex cases and knowing current treatments."
      },
      {
        question: "What tests might I need?",
        answer: "Common tests: thyroid function, iron levels, vitamin D, hormones. Specific tests depend on your presentation."
      },
      {
        question: "Can hair loss be reversed?",
        answer: "Often yes, when underlying cause is addressed. Results depend on cause, duration, and treatment compliance."
      },
      {
        question: "How long before I see results?",
        answer: "Hair grows slowly — typically 3-6 months for visible improvement. Patience is essential."
      },
      {
        question: "Do I need lifelong treatment?",
        answer: "Depends on the cause. Some conditions need ongoing treatment; others can be resolved permanently."
      }
    ],

    ctaText: "See a Hair Specialist",
    ctaDescription: "Medical expertise for your hair problems. Proper diagnosis, effective treatment. Book your specialist consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-specialist-doctor-in-vadodara"
      content={content}
    />
  );
}
