import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Hair Doctor Vadodara | MD Specialist | ₹500",
  description: "💇 Best hair doctor in Vadodara ✓ MD trichologist ✓ 15+ years experience ✓ All hair problems solved ✓ 10,000+ patients. Consultation ₹500. Book today!",
  keywords: "hair doctor vadodara, hair specialist vadodara, trichologist vadodara, hair doctor near me",
};

export default function HairDoctorPage() {
  const content = {
    heroTitle: "Hair Doctor in Vadodara",
    heroSubtitle: "Expert Care for All Hair Problems",
    
    introContent: `Hair problems need a proper doctor, not just stylists or generic advice. A hair doctor — also called a trichologist — understands the medical aspects of hair loss, scalp conditions, and hair health.

Hair issues are often symptoms of underlying problems — hormonal imbalances, nutritional deficiencies, scalp conditions, stress, or genetic factors. A hair doctor investigates the cause, not just treats the symptom.

We specialize in hair disorders, providing medical evaluation and effective treatment. From simple hair fall to complex hair loss conditions, we diagnose accurately and treat effectively.`,

    whyChooseUs: [
      "Medical hair expertise",
      "Cause-focused approach",
      "Comprehensive evaluation",
      "Effective treatments",
      "Both medical and surgical options",
      "Long-term hair health focus"
    ],

    services: [
      {
        title: "Hair Loss Evaluation",
        description: "Thorough assessment to identify why you're losing hair."
      },
      {
        title: "Scalp Conditions",
        description: "Treatment for dandruff, seborrheic dermatitis, infections."
      },
      {
        title: "Medical Hair Treatment",
        description: "Medications and therapies for hair regrowth."
      },
      {
        title: "PRP & GFC",
        description: "Growth factor therapies for hair regeneration."
      },
      {
        title: "Hair Transplant",
        description: "Surgical hair restoration for permanent baldness."
      },
      {
        title: "Hair Health Maintenance",
        description: "Ongoing care for healthy hair."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Discussing your hair concerns and history."
      },
      {
        title: "Examination",
        description: "Scalp and hair examination, possibly trichoscopy."
      },
      {
        title: "Investigation",
        description: "Blood tests if needed to identify underlying causes."
      },
      {
        title: "Treatment",
        description: "Appropriate treatment based on diagnosis."
      }
    ],

    faqItems: [
      {
        question: "When should I see a hair doctor?",
        answer: "When you notice increased hair fall, thinning, bald patches, or scalp problems. Earlier is better for treatment outcomes."
      },
      {
        question: "What tests might I need?",
        answer: "Blood tests for thyroid, iron, vitamin D, hormones — depending on your presentation. Not everyone needs tests."
      },
      {
        question: "How is a hair doctor different from a dermatologist?",
        answer: "Hair specialists focus specifically on hair and scalp. Many dermatologists have this specialization."
      },
      {
        question: "Can you treat all types of hair loss?",
        answer: "Most types, yes. Some rare conditions may need other specialists, but common hair loss conditions are our expertise."
      },
      {
        question: "What results can I expect?",
        answer: "Depends on the cause. Many conditions respond well to treatment. We set realistic expectations during consultation."
      }
    ],

    ctaText: "Consult a Hair Specialist",
    ctaDescription: "Don't let hair problems go unaddressed. Expert diagnosis and effective treatment. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-doctor-in-vadodara"
      content={content}
    />
  );
}
