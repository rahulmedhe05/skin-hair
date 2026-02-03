import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Hair Doctor Vadodara | Top Rated | ₹500 Consult",
  description: "🏆 Best hair doctor in Vadodara ✓ 4.9★ Google rating ✓ 15+ years experience ✓ PRP, GFC, transplant expert ✓ 10,000+ patients. Consultation ₹500. Book!",
  keywords: "best hair doctor vadodara, top hair specialist vadodara, hair loss expert vadodara, best hair doctor near me",
};

export default function BestHairDoctorPage() {
  const content = {
    heroTitle: "Best Hair Doctor in Vadodara",
    heroSubtitle: "Expert Care for Your Hair Concerns",
    
    introContent: `Hair problems are emotional. Watching your hair thin, finding clumps in the shower, seeing your scalp show through — it affects confidence deeply. You need a hair doctor who understands the science and delivers results.

Effective hair treatment starts with accurate diagnosis. Hair loss has many causes — hormonal, genetic, nutritional, medical, stress-related. Treatment works when the underlying cause is identified and addressed properly.

We specialize in hair disorders with a results-focused approach. From initial evaluation through treatment completion, our goal is measurable improvement in your hair condition.`,

    whyChooseUs: [
      "Hair disorder specialization",
      "Accurate cause identification",
      "Multiple treatment options",
      "Results-focused approach",
      "Both medical and surgical options",
      "Long-term management"
    ],

    services: [
      {
        title: "Hair Loss Diagnosis",
        description: "Thorough evaluation to identify the cause of your hair loss."
      },
      {
        title: "Medical Hair Treatment",
        description: "Medications and therapies to stop loss and promote regrowth."
      },
      {
        title: "PRP & GFC Therapy",
        description: "Platelet-rich plasma and growth factors for hair regeneration."
      },
      {
        title: "Hair Transplant",
        description: "Permanent restoration for pattern baldness."
      },
      {
        title: "Scalp Conditions",
        description: "Treatment for dandruff, seborrheic dermatitis, scalp infections."
      },
      {
        title: "Female Hair Loss",
        description: "Specialized care for women's unique hair loss patterns."
      }
    ],

    processSteps: [
      {
        title: "Comprehensive Evaluation",
        description: "History, examination, and investigations as needed."
      },
      {
        title: "Cause Identification",
        description: "Determining what's causing your specific hair problem."
      },
      {
        title: "Treatment Plan",
        description: "Creating a comprehensive approach for your condition."
      },
      {
        title: "Results Monitoring",
        description: "Tracking progress and adjusting treatment as needed."
      }
    ],

    faqItems: [
      {
        question: "What causes hair loss?",
        answer: "Multiple factors — genetics, hormones, stress, nutrition, medical conditions, medications. We investigate to find your specific cause."
      },
      {
        question: "Can lost hair regrow?",
        answer: "Often yes, if treated appropriately. Results depend on cause, duration, and extent of loss."
      },
      {
        question: "Which treatment is best for hair loss?",
        answer: "Depends on the cause. Medical treatment for some, PRP for others, transplant for permanent baldness. We recommend based on your situation."
      },
      {
        question: "How long until I see results?",
        answer: "Hair grows slowly — typically 3-6 months for visible improvement. Patience and consistency are essential."
      },
      {
        question: "Is hair transplant the only permanent solution?",
        answer: "For androgenetic baldness, yes. For other types of hair loss, treating the cause can give lasting improvement."
      }
    ],

    ctaText: "Get Expert Help for Your Hair",
    ctaDescription: "Don't let hair loss continue unchecked. Expert diagnosis and effective treatment. Book your hair consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="best-hair-doctor-in-vadodara"
      content={content}
    />
  );
}
