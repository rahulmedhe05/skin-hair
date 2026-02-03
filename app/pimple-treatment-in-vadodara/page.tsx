import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Pimple Treatment Vadodara | Clear Skin in 4 Weeks | Book",
  description: "✅ Pimple treatment in Vadodara ✓ 90% see clear skin in 4 weeks ✓ All pimple types ✓ Stop breakouts ✓ Expert dermatologists. Consultation ₹500. Call now!",
  keywords: "pimple treatment vadodara, pimple doctor vadodara, pimple cure vadodara, pimple treatment near me",
};

export default function PimpleTreatmentPage() {
  const content = {
    heroTitle: "Professional Pimple Treatment in Vadodara",
    heroSubtitle: "Stop the Breakout Cycle Permanently",
    
    introContent: `Pimples are frustrating. They appear at the worst times, hurt, look bad, and leave marks. The internet is full of advice that doesn't work or makes things worse. Professional treatment offers a better path.

The key is understanding that pimples aren't random — they follow patterns. They have causes that can be identified and addressed. Once you understand why you're getting pimples, you can stop them from forming in the first place.

We specialize in breaking the pimple cycle. Not just treating individual pimples as they appear, but preventing new ones from forming. This approach produces results that spot treatments never can.`,

    whyChooseUs: [
      "Focus on prevention, not just treatment",
      "Understanding your specific pimple patterns",
      "Professional-grade products that work",
      "Safe extraction when needed",
      "Preventing marks and scars",
      "Long-term clear skin strategies"
    ],

    services: [
      {
        title: "Pimple Analysis",
        description: "What type? Where? When? Why? Understanding patterns reveals solutions."
      },
      {
        title: "Preventive Treatment",
        description: "Stopping pimples before they form is more effective than treating them after."
      },
      {
        title: "Active Pimple Care",
        description: "When pimples appear, proper treatment minimizes duration and prevents scarring."
      },
      {
        title: "Professional Extractions",
        description: "Safe removal of blackheads and whiteheads. Don't squeeze at home — let professionals handle it."
      },
      {
        title: "Spot Treatments",
        description: "Effective products for occasional pimples that break through prevention."
      },
      {
        title: "Mark Prevention & Treatment",
        description: "Minimizing marks from current pimples and treating existing post-pimple spots."
      }
    ],

    processSteps: [
      {
        title: "Pattern Identification",
        description: "Where do you get pimples? When? What triggers them?"
      },
      {
        title: "Cause Assessment",
        description: "Oil production, bacteria, hormones, products, habits — identifying your factors."
      },
      {
        title: "Prevention Protocol",
        description: "Treatment routine designed to stop new pimples from forming."
      },
      {
        title: "Ongoing Management",
        description: "Adjusting approach as skin improves and monitoring for any return."
      }
    ],

    faqItems: [
      {
        question: "Why do I keep getting pimples in the same spots?",
        answer: "Recurring pimples often indicate underlying issues at those locations — perhaps blocked pores, hormonal influences, or external factors like phone contact. We identify and address these patterns."
      },
      {
        question: "Should I pop my pimples?",
        answer: "No — DIY popping causes scarring, spreads infection, and makes things worse. Professional extraction is different and safe when needed."
      },
      {
        question: "Why do drugstore products not work for me?",
        answer: "Over-the-counter products are weak by design. Prescription-strength treatments work when OTC fails. Also, products need to match your specific pimple type."
      },
      {
        question: "Can stress cause pimples?",
        answer: "Yes — stress increases hormones that trigger oil production and breakouts. Managing stress helps, but proper treatment handles the skin effects."
      },
      {
        question: "How do I prevent pimple marks?",
        answer: "Don't pick or squeeze. Get pimples treated properly. Use sunscreen. Post-pimple marks can be treated but prevention is easier."
      }
    ],

    ctaText: "Break Free from Pimple Problems",
    ctaDescription: "Stop the frustrating cycle of breakouts. Professional treatment can give you the clear skin you want. Book your pimple consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="pimple-treatment-in-vadodara"
      content={content}
    />
  );
}
