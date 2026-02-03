import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Loss Treatment Vadodara | Stop Baldness | ₹500",
  description: "💇 Hair loss treatment in Vadodara ✓ Stop baldness progression ✓ PRP + GFC + medicines ✓ Male & female hair loss ✓ 10,000+ treated. Consult ₹500. Book now!",
  keywords: "hair loss treatment vadodara, baldness treatment vadodara, hair thinning treatment, hair loss doctor near me",
};

export default function HairLossTreatmentPage() {
  const content = {
    heroTitle: "Hair Loss Treatment in Vadodara",
    heroSubtitle: "Medical Solutions for Hair Restoration",
    
    introContent: `Hair loss affects millions — men, women, young, old. It impacts confidence, self-image, and how we present to the world. The good news: medical science offers real solutions.

Different hair loss types need different approaches. Male pattern baldness responds to specific treatments. Female hair loss often has different causes requiring different solutions. Sudden hair loss has its own treatment protocol.

We're specialists in hair medicine. We diagnose precisely, treat appropriately, and track results systematically. For most patients, we can significantly slow or stop loss and often restore some density.`,

    whyChooseUs: [
      "Hair loss specialization",
      "Comprehensive diagnosis",
      "Treatment for all hair loss types",
      "Both male and female hair loss expertise",
      "Medical and procedural treatments",
      "Systematic progress tracking"
    ],

    services: [
      {
        title: "Male Pattern Baldness",
        description: "Androgenetic alopecia treatment — slowing loss and promoting regrowth with proven approaches."
      },
      {
        title: "Female Hair Loss",
        description: "Understanding and treating the multiple causes of hair loss in women."
      },
      {
        title: "Alopecia Areata",
        description: "Treatment for patchy hair loss caused by autoimmune factors."
      },
      {
        title: "Telogen Effluvium",
        description: "Addressing widespread shedding triggered by stress, illness, or other factors."
      },
      {
        title: "Scarring Alopecia",
        description: "Managing permanent hair loss conditions to preserve remaining hair."
      },
      {
        title: "Hair Restoration Options",
        description: "When medical treatment isn't enough — transplant assessment and coordination."
      }
    ],

    processSteps: [
      {
        title: "Comprehensive Evaluation",
        description: "History, examination, trichoscopy, and tests as needed."
      },
      {
        title: "Type Identification",
        description: "Precise diagnosis of hair loss type and contributing factors."
      },
      {
        title: "Treatment Selection",
        description: "Matching treatment to your specific diagnosis and situation."
      },
      {
        title: "Long-term Management",
        description: "Ongoing care to maintain and improve results over time."
      }
    ],

    faqItems: [
      {
        question: "Is hair loss permanent?",
        answer: "Depends on the type. Some hair loss is reversible with treatment. Pattern baldness can be slowed and partially reversed but follicles that have been dormant too long may not recover."
      },
      {
        question: "Can women get pattern baldness?",
        answer: "Yes, female pattern hair loss is common. It presents differently than male pattern baldness but has effective treatments."
      },
      {
        question: "What's the best treatment for hair loss?",
        answer: "Depends entirely on the cause. There's no universal 'best' — treatment must match diagnosis. That's why proper evaluation comes first."
      },
      {
        question: "How effective are hair loss treatments?",
        answer: "For appropriate candidates, significant slowing or stopping of loss in most cases. Regrowth varies — some patients see substantial improvement, others more modest."
      },
      {
        question: "Will I need treatment forever?",
        answer: "For genetic hair loss, ongoing maintenance is typically needed to preserve results. Without it, progression may resume."
      }
    ],

    ctaText: "Address Your Hair Loss Properly",
    ctaDescription: "Don't waste time on guesswork. Get proper diagnosis and targeted treatment. Hair loss is treatable when approached correctly. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-loss-treatment-in-vadodara"
      content={content}
    />
  );
}
