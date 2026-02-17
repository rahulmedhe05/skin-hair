import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Fine Lines Treatment Vadodara | Prevent Aging | ₹5,000",
  description: "✨ Fine lines treatment in Vadodara from ₹5,000 ✓ Preventive Botox ✓ Stop lines early ✓ Smooth skin ✓ Natural results. Best for 25-35 age. Book now!",
  keywords: "fine lines treatment vadodara, crow's feet treatment vadodara, early wrinkle treatment, fine lines cost vadodara",
};

export default function FineLinesTreatmentPage() {
  const content = {
    heroTitle: "Fine Lines Treatment in Vadodara",
    heroSubtitle: "Address Aging Signs Early",
    
    introContent: `Fine lines are the early messengers of aging — those delicate creases around eyes, on the forehead, and around the mouth that appear before deeper wrinkles set in. Treating them early can delay more significant aging.

Fine lines are easier to treat than deep wrinkles. The skin is still relatively elastic, and with proper intervention, these lines can be smoothed before they become permanent fixtures on your face.

We offer various treatments for fine lines, from topicals and facials to Botox and lasers. The right approach depends on line location, your skin type, and how much improvement you want.`,

    whyChooseUs: [
      "Early intervention focus",
      "Multiple treatment options",
      "Preventive approach",
      "Subtle improvement",
      "Natural results",
      "Long-term skin health"
    ],

    services: [
      {
        title: "Preventive Botox",
        description: "Relaxing muscles before deep lines form."
      },
      {
        title: "Microneedling",
        description: "Collagen stimulation for skin renewal."
      },
      {
        title: "Laser Treatment",
        description: "Gentle lasers to smooth fine lines."
      },
      {
        title: "Chemical Peels",
        description: "Skin renewal to reduce fine line appearance."
      },
      {
        title: "Topical Retinoids",
        description: "Medical-grade products for home treatment."
      },
      {
        title: "Eye Area Treatment",
        description: "Specialized care for delicate under-eye lines."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating fine lines and early aging signs."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate intervention for your lines."
      },
      {
        title: "Treatment",
        description: "Performing chosen treatments."
      },
      {
        title: "Prevention Plan",
        description: "Ongoing strategy to maintain results and prevent progression."
      }
    ],

    faqItems: [
      {
        question: "When should I start treating fine lines?",
        answer: "When you first notice them. Earlier treatment is more effective and prevents deeper wrinkle formation."
      },
      {
        question: "What's the best treatment for fine lines?",
        answer: "Depends on location — Botox for expression areas, skincare and gentle treatments for static lines."
      },
      {
        question: "Can fine lines be prevented?",
        answer: "Delayed and minimized with sun protection, skincare, and lifestyle. Genetics play a role too."
      },
      {
        question: "Are fine lines the same as wrinkles?",
        answer: "Fine lines are early, superficial wrinkles. Left untreated, they can deepen into permanent wrinkles."
      },
      {
        question: "How long until I see improvement?",
        answer: "Botox works in 2 weeks. Skincare and other treatments take 4-8 weeks for visible improvement."
      }
    ],

    ctaText: "Treat Fine Lines Before They Deepen",
    ctaDescription: "Early intervention for smoother, younger-looking skin. Address fine lines now. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="fine-lines-treatment-in-vadodara"
      content={content}
    />
  );
}
