import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Vampire Facial Vadodara ₹6,000 | Celebrity Favorite | Book",
  description: "✨ Vampire facial in Vadodara ₹6,000 ✓ PRP + microneedling ✓ Ultimate skin rejuvenation ✓ Natural glow ✓ Celebrity favorite treatment. Book your session now!",
  keywords: "vampire facial vadodara, prp facial vadodara, vampire facial cost vadodara, prp microneedling",
};

export default function VampireFacialPage() {
  const content = {
    heroTitle: "Vampire Facial in Vadodara",
    heroSubtitle: "Your Own Platelets for Skin Regeneration",
    
    introContent: `The Vampire Facial combines two powerful treatments — microneedling and PRP — for amplified skin rejuvenation. Your own platelet-rich plasma applied during microneedling takes results to another level.

Microneedling creates thousands of micro-channels. PRP delivers concentrated growth factors directly into these channels. The combination triggers intense healing and collagen production that neither treatment achieves alone.

We perform vampire facials using proper PRP preparation and precise microneedling technique. The treatment addresses aging, scars, dullness, and overall skin quality using your body's own regenerative capabilities.`,

    whyChooseUs: [
      "Quality PRP preparation",
      "Precise microneedling technique",
      "Combination protocol expertise",
      "Natural regeneration approach",
      "Comprehensive skin rejuvenation",
      "Evidence-based treatment"
    ],

    services: [
      {
        title: "Full Vampire Facial",
        description: "Complete PRP microneedling treatment for face."
      },
      {
        title: "Acne Scar Treatment",
        description: "Vampire facial targeting acne scarring specifically."
      },
      {
        title: "Anti-Aging Protocol",
        description: "Addressing fine lines, wrinkles, and skin laxity."
      },
      {
        title: "Skin Rejuvenation",
        description: "Overall skin quality improvement — texture, tone, radiance."
      },
      {
        title: "Neck and Décolletage",
        description: "Extending vampire facial benefits to neck and chest."
      },
      {
        title: "Series Treatment",
        description: "Multiple sessions for maximum results."
      }
    ],

    processSteps: [
      {
        title: "Blood Draw",
        description: "Small blood sample taken and processed to extract PRP."
      },
      {
        title: "PRP Preparation",
        description: "Centrifuging blood to concentrate platelets and growth factors."
      },
      {
        title: "Microneedling with PRP",
        description: "Microneedling while applying PRP for deep penetration."
      },
      {
        title: "Recovery & Results",
        description: "Redness for few days, then progressively improving skin over weeks."
      }
    ],

    faqItems: [
      {
        question: "Why is it called vampire facial?",
        answer: "Because it uses your own blood-derived PRP. The name was popularized when celebrities posted about it — looks dramatic but it's scientific."
      },
      {
        question: "How is it different from regular microneedling?",
        answer: "PRP adds concentrated growth factors that significantly enhance results. The combination is more powerful than either alone."
      },
      {
        question: "What's the downtime?",
        answer: "Red, slightly swollen skin for 2-3 days. Looks like mild sunburn. Can return to work next day with makeup if needed."
      },
      {
        question: "When will I see results?",
        answer: "Initial glow within a week. Collagen building continues for 3-6 months. Best results with series of treatments."
      },
      {
        question: "How many sessions needed?",
        answer: "3-4 sessions spaced 4-6 weeks apart recommended for optimal results. Maintenance annually."
      }
    ],

    ctaText: "Regenerate Your Skin Naturally",
    ctaDescription: "Harness your own growth factors for powerful skin rejuvenation. Book your vampire facial consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="vampire-facial-in-vadodara"
      content={content}
    />
  );
}
