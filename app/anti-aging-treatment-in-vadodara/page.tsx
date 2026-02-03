import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Anti-Aging Treatment Vadodara | Look Younger | ₹5,000",
  description: "✨ Anti-aging treatment in Vadodara from ₹5,000 ✓ Botox, fillers, laser ✓ Turn back the clock ✓ No surgery ✓ Natural results. Expert care. Book today!",
  keywords: "anti aging treatment vadodara, anti wrinkle treatment vadodara, skin rejuvenation vadodara, anti aging near me",
};

export default function AntiAgingTreatmentPage() {
  const content = {
    heroTitle: "Anti-Aging Treatment in Vadodara",
    heroSubtitle: "Turn Back Time Without Surgery",
    
    introContent: `Aging affects skin in multiple ways — wrinkles form, volume depletes, skin sags, texture roughens, and tone becomes uneven. Effective anti-aging addresses all these changes, not just one.

Modern dermatology offers a comprehensive toolkit for aging skin. Botox for dynamic wrinkles. Fillers for lost volume. Laser for texture and tone. Tightening devices for laxity. The key is understanding which combination suits your aging pattern.

We take a multi-modal approach to anti-aging. Rather than relying on one treatment, we combine appropriate technologies for comprehensive improvement. The result is looking naturally younger, not artificially altered.`,

    whyChooseUs: [
      "Comprehensive anti-aging approach",
      "Multiple technologies available",
      "Natural-looking rejuvenation",
      "Customized treatment combinations",
      "Progressive improvement protocols",
      "Age-appropriate recommendations"
    ],

    services: [
      {
        title: "Wrinkle Treatment",
        description: "Botox for dynamic wrinkles, fillers for static lines. Smooth, natural results."
      },
      {
        title: "Volume Restoration",
        description: "Fillers to replace lost facial volume in cheeks, temples, and other hollow areas."
      },
      {
        title: "Skin Tightening",
        description: "RF devices, ultrasound, and laser for improved skin firmness."
      },
      {
        title: "Texture Improvement",
        description: "Laser resurfacing and peels for smoother, more refined skin surface."
      },
      {
        title: "Tone Correction",
        description: "Addressing age spots, uneven pigmentation, and dullness."
      },
      {
        title: "Preventive Protocols",
        description: "Starting early to slow aging process before significant changes occur."
      }
    ],

    processSteps: [
      {
        title: "Aging Analysis",
        description: "Comprehensive assessment of how your face has aged and what's bothering you most."
      },
      {
        title: "Treatment Strategy",
        description: "Designing a multi-modal approach targeting your specific aging signs."
      },
      {
        title: "Progressive Treatment",
        description: "Implementing treatments in logical sequence for optimal results."
      },
      {
        title: "Maintenance Plan",
        description: "Long-term strategy to maintain results and continue improvement."
      }
    ],

    faqItems: [
      {
        question: "What's the best anti-aging treatment?",
        answer: "There isn't one best — aging is multi-factorial. The best approach combines treatments targeting your specific concerns: wrinkles, volume loss, laxity, texture, or tone."
      },
      {
        question: "When should I start anti-aging treatments?",
        answer: "Depends on genetics and lifestyle. Preventive care in late 20s-30s. More active treatment when changes become noticeable to you."
      },
      {
        question: "Can I look naturally younger?",
        answer: "Absolutely — that's the goal. Natural rejuvenation comes from treating all aspects of aging proportionally, not overdoing any single treatment."
      },
      {
        question: "How much does comprehensive anti-aging cost?",
        answer: "Varies based on what's needed. We create treatment plans at various investment levels. During consultation, we'll discuss options within your budget."
      },
      {
        question: "Will I need treatments forever?",
        answer: "Aging continues, so maintenance is ongoing. However, good baseline treatment can be maintained with less frequent sessions over time."
      }
    ],

    ctaText: "Age Gracefully, Look Younger",
    ctaDescription: "Comprehensive anti-aging that looks natural. Multiple technologies, expert combination, beautiful results. Book your anti-aging consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="anti-aging-treatment-in-vadodara"
      content={content}
    />
  );
}
