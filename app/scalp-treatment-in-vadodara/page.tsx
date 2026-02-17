import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Scalp Treatment Vadodara | Healthy Scalp | ₹500",
  description: "💇 Scalp treatment in Vadodara ✓ Itchy, flaky scalp fixed ✓ Psoriasis & dermatitis ✓ Healthy hair starts here ✓ Expert care. Consultation ₹500. Book now!",
  keywords: "scalp treatment vadodara, scalp problems treatment, itchy scalp treatment, scalp doctor near me",
};

export default function ScalpTreatmentPage() {
  const content = {
    heroTitle: "Scalp Treatment in Vadodara",
    heroSubtitle: "Healthy Scalp, Healthy Hair",
    
    introContent: `Your scalp is skin — and like skin anywhere, it can develop conditions. Psoriasis, eczema, dermatitis, infections, inflammation — scalp problems are common and often affect hair health too.

A troubled scalp shows up as itching, flaking, redness, tenderness, or bumps. Sometimes it causes hair loss or prevents healthy hair growth. Treating the scalp condition is essential for overall hair health.

We approach scalp problems with proper dermatological diagnosis and treatment. Understanding that scalp conditions are skin conditions, we apply dermatological expertise to restore scalp health and support healthy hair.`,

    whyChooseUs: [
      "Dermatological approach to scalp problems",
      "Proper diagnosis of scalp conditions",
      "Medical-grade treatments",
      "Understanding scalp-hair connection",
      "Treatment for all scalp conditions",
      "Long-term scalp health focus"
    ],

    services: [
      {
        title: "Scalp Diagnosis",
        description: "Proper identification of scalp conditions — psoriasis, dermatitis, infections, or other issues."
      },
      {
        title: "Scalp Psoriasis Treatment",
        description: "Managing psoriasis on the scalp with appropriate medications and light therapy."
      },
      {
        title: "Seborrheic Dermatitis",
        description: "Treatment for this common cause of scalp redness, flaking, and itching."
      },
      {
        title: "Scalp Infections",
        description: "Fungal, bacterial infections treated with appropriate medications."
      },
      {
        title: "Itchy Scalp Treatment",
        description: "Identifying and treating causes of persistent scalp itching."
      },
      {
        title: "Scalp Health Maintenance",
        description: "Ongoing protocols to maintain healthy scalp environment."
      }
    ],

    processSteps: [
      {
        title: "Scalp Examination",
        description: "Thorough assessment of scalp condition, symptoms, and distribution."
      },
      {
        title: "Condition Identification",
        description: "Diagnosing the specific scalp problem affecting you."
      },
      {
        title: "Targeted Treatment",
        description: "Appropriate medical treatment for your scalp condition."
      },
      {
        title: "Maintenance Care",
        description: "Long-term care to maintain scalp health."
      }
    ],

    faqItems: [
      {
        question: "Why is my scalp always itchy?",
        answer: "Common causes: seborrheic dermatitis, psoriasis, dry scalp, product reactions, or infections. Diagnosis identifies the cause for effective treatment."
      },
      {
        question: "Can scalp problems cause hair loss?",
        answer: "Yes — inflammation and certain scalp conditions can damage follicles or disrupt hair growth. Treating the scalp helps preserve hair."
      },
      {
        question: "Is my scalp condition contagious?",
        answer: "Most scalp conditions are not contagious. Fungal infections can spread but are easily treatable. We'll clarify for your specific condition."
      },
      {
        question: "Why do scalp problems keep coming back?",
        answer: "Many scalp conditions are chronic and need ongoing management. Proper treatment controls them effectively but requires maintenance."
      },
      {
        question: "Should I change my hair products?",
        answer: "Sometimes helpful, sometimes not the issue. We'll advise whether product changes would benefit your specific condition."
      }
    ],

    ctaText: "Get Your Scalp Healthy",
    ctaDescription: "Scalp problems affect hair health and quality of life. Professional treatment resolves what OTC products can't. Book your scalp consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="scalp-treatment-in-vadodara"
      content={content}
    />
  );
}
