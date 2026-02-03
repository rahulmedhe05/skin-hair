import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hormonal Acne Treatment Vadodara | PCOS Acne | ₹500",
  description: "✅ Hormonal acne treatment in Vadodara ✓ PCOS & adult acne expert ✓ Jawline acne cleared ✓ Balance hormones ✓ Long-term solution. Consult ₹500. Book now!",
  keywords: "hormonal acne treatment vadodara, PCOS acne treatment, adult acne vadodara, jawline acne treatment",
};

export default function HormonalAcneTreatmentPage() {
  const content = {
    heroTitle: "Hormonal Acne Treatment in Vadodara",
    heroSubtitle: "Addressing Acne at Its Root Cause",
    
    introContent: `When acne follows your menstrual cycle, appears along your jawline and chin, or persists into adulthood — it's probably hormonal. This type doesn't respond well to standard acne treatments because the underlying driver is internal, not skin-deep.

Hormonal acne is especially common in women with conditions like PCOS, during perimenopause, or with other hormonal imbalances. The acne is a symptom of deeper hormonal patterns that need addressing.

Our approach combines dermatological treatment with attention to the hormonal component. We work with the understanding that for lasting results, treatment needs to address both what's happening on the skin and what's triggering it from within.`,

    whyChooseUs: [
      "Understanding of hormonal acne patterns",
      "Experience with PCOS-related acne",
      "Combined dermatological and hormonal approaches",
      "Addressing root causes, not just symptoms",
      "Treatment for adult female acne",
      "Long-term management strategies"
    ],

    services: [
      {
        title: "Hormonal Pattern Assessment",
        description: "Identifying cycle-related breakouts, distribution patterns, and hormonal indicators."
      },
      {
        title: "Anti-Androgen Treatment",
        description: "Medications that address the hormonal component of acne when appropriate."
      },
      {
        title: "Combined Approach",
        description: "Topical and systemic treatments working together on skin and hormones."
      },
      {
        title: "PCOS Acne Management",
        description: "Specialized protocols for patients with polycystic ovary syndrome."
      },
      {
        title: "Adult Acne Treatment",
        description: "Addressing acne that continues or starts in adulthood."
      },
      {
        title: "Maintenance Protocols",
        description: "Long-term strategies to keep hormonal acne controlled."
      }
    ],

    processSteps: [
      {
        title: "Pattern Analysis",
        description: "Tracking when breakouts occur, where they appear, and what might trigger them."
      },
      {
        title: "Hormonal Evaluation",
        description: "Relevant tests if needed to understand the hormonal picture."
      },
      {
        title: "Targeted Treatment",
        description: "Treatment addressing both skin symptoms and hormonal drivers."
      },
      {
        title: "Long-term Management",
        description: "Ongoing care that adapts to hormonal changes over time."
      }
    ],

    faqItems: [
      {
        question: "How do I know if my acne is hormonal?",
        answer: "Classic signs: jawline and chin location, monthly flares around your period, adult onset, and deep painful cysts. We assess your pattern to determine if hormones are the primary driver."
      },
      {
        question: "Can birth control help hormonal acne?",
        answer: "Certain types can, by regulating hormones. This is one option we may discuss, especially for patients who also want contraception."
      },
      {
        question: "I have PCOS — can my acne be treated?",
        answer: "Yes, PCOS acne responds well to appropriate treatment. We use approaches specifically suited to PCOS-related hormonal patterns."
      },
      {
        question: "Will treatment interfere with my hormones?",
        answer: "Treatments are chosen carefully. We discuss implications and options, especially if you're planning pregnancy or have other hormonal considerations."
      },
      {
        question: "Is hormonal acne treatment long-term?",
        answer: "Often requires ongoing management since hormonal patterns continue. However, treatment simplifies over time as we find what works for you."
      }
    ],

    ctaText: "Control Your Hormonal Acne",
    ctaDescription: "Standard acne treatment won't fix hormonal causes. Get specialized care that addresses why you're breaking out. Book your hormonal acne consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hormonal-acne-treatment-in-vadodara"
      content={content}
    />
  );
}
