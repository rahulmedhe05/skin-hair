import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Dark Spot Removal Vadodara | Quick Results | ₹2,000",
  description: "✅ Dark spot removal in Vadodara from ₹2,000 ✓ Laser & chemical peels ✓ Quick results ✓ All spot types ✓ Spotless skin guaranteed. Book consultation now!",
  keywords: "dark spot removal vadodara, remove dark spots vadodara, spot removal cost vadodara, dark spot treatment",
};

export default function DarkSpotRemovalPage() {
  const content = {
    heroTitle: "Dark Spot Removal in Vadodara",
    heroSubtitle: "Clear, Spotless Skin is Possible",
    
    introContent: `Dark spots — whether from sun exposure, aging, acne, or hormonal changes — mar otherwise clear skin. They're stubborn, resist home remedies, and often get darker without proper treatment.

Effective dark spot removal requires understanding what's causing them. Sun spots, age spots, post-inflammatory marks, and hormonal pigmentation need different approaches. One-size-fits-all treatments rarely work well.

We assess your dark spots, identify the cause, and provide appropriate treatment. Using lasers, peels, and targeted therapies, we can significantly lighten or remove dark spots for clearer, more even-toned skin.`,

    whyChooseUs: [
      "Cause identification",
      "Appropriate treatment selection",
      "Multiple treatment options",
      "Visible results",
      "Prevention guidance",
      "All skin types treated"
    ],

    services: [
      {
        title: "Laser Spot Removal",
        description: "Q-switched laser for targeting and breaking up pigmented spots."
      },
      {
        title: "Chemical Peel Treatment",
        description: "Peels to lighten spots and even skin tone."
      },
      {
        title: "Combination Therapy",
        description: "Multiple modalities for stubborn spots."
      },
      {
        title: "Sun Spot Treatment",
        description: "Addressing spots from sun damage."
      },
      {
        title: "Age Spot Treatment",
        description: "Lightening spots associated with aging."
      },
      {
        title: "Post-Acne Spot Treatment",
        description: "Removing marks left behind by acne."
      }
    ],

    processSteps: [
      {
        title: "Spot Assessment",
        description: "Evaluating your dark spots and identifying their cause."
      },
      {
        title: "Treatment Selection",
        description: "Choosing the most effective approach for your spots."
      },
      {
        title: "Treatment Sessions",
        description: "Performing treatments — often multiple sessions needed."
      },
      {
        title: "Prevention Plan",
        description: "Advice to prevent new spots from forming."
      }
    ],

    faqItems: [
      {
        question: "Can all dark spots be removed?",
        answer: "Most can be significantly lightened or removed. Some deeper spots may only partially respond. We set realistic expectations."
      },
      {
        question: "How many sessions needed?",
        answer: "Typically 3-6 sessions depending on spot type and depth. Some respond in fewer, stubborn ones need more."
      },
      {
        question: "Will spots come back?",
        answer: "If you don't protect from sun and address underlying causes, new spots can form. We provide prevention guidance."
      },
      {
        question: "Is laser treatment painful?",
        answer: "Mild discomfort — like rubber band snapping. Tolerable for most. Numbing cream can be used."
      },
      {
        question: "Can dark skin types be treated?",
        answer: "Yes, with appropriate settings and techniques. We treat all skin types safely."
      }
    ],

    ctaText: "Remove Your Dark Spots",
    ctaDescription: "Clear, even-toned skin is achievable. Professional treatment for visible results. Book your dark spot consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="dark-spot-removal-in-vadodara"
      content={content}
    />
  );
}
