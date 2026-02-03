import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Open Pores Treatment Vadodara | 60% Reduction | Book",
  description: "✅ Open pores treatment in Vadodara ✓ 60% pore reduction ✓ Laser + peels combo ✓ Smoother skin in 4 sessions ✓ No downtime. Starting ₹2,000. Call now!",
  keywords: "open pores treatment vadodara, large pores treatment vadodara, pore minimizing vadodara, open pores near me",
};

export default function OpenPoresPage() {
  const content = {
    heroTitle: "Open Pores Treatment in Vadodara",
    heroSubtitle: "Minimize Pores, Refine Skin Texture",
    
    introContent: `Large, visible pores frustrate because they're so prominent — like little craters dotting your face, collecting oil and dirt, making skin look rough. Makeup settles into them. They seem to get bigger over time.

Pores are natural and necessary — they house hair follicles and release oil. But they can enlarge due to genetics, oily skin, aging, and sun damage. While we can't eliminate pores or permanently shrink them dramatically, we can minimize their appearance significantly.

We offer multiple approaches to pore minimization — from basic treatments to advanced procedures. Understanding the cause of your enlarged pores helps us choose the most effective approach for your skin.`,

    whyChooseUs: [
      "Multiple treatment modalities",
      "Understanding pore science",
      "Realistic expectations",
      "Effective results",
      "Customized protocols",
      "Maintenance guidance"
    ],

    services: [
      {
        title: "Chemical Peels for Pores",
        description: "Exfoliating peels to refine pore appearance."
      },
      {
        title: "Carbon Peel",
        description: "Laser treatment particularly effective for pores."
      },
      {
        title: "Microneedling",
        description: "Collagen stimulation for improved skin texture and pore appearance."
      },
      {
        title: "Laser Skin Resurfacing",
        description: "More intensive treatment for significant pore reduction."
      },
      {
        title: "HydraFacial",
        description: "Deep pore cleansing and temporary pore tightening."
      },
      {
        title: "Combination Treatment",
        description: "Multiple modalities for maximum pore refinement."
      }
    ],

    processSteps: [
      {
        title: "Skin Assessment",
        description: "Evaluating pore size, skin type, and contributing factors."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate treatments based on your skin."
      },
      {
        title: "Treatment Sessions",
        description: "Performing chosen treatments — often a series is needed."
      },
      {
        title: "Maintenance",
        description: "Ongoing care to maintain pore minimization."
      }
    ],

    faqItems: [
      {
        question: "Can pores be permanently reduced?",
        answer: "We can minimize appearance significantly but can't physically shrink pores permanently. Results need maintenance."
      },
      {
        question: "Why are my pores so large?",
        answer: "Genetics, oily skin, sun damage, aging, and congestion contribute. We assess what's causing your enlarged pores."
      },
      {
        question: "Which treatment is best for pores?",
        answer: "Depends on skin type and severity. Often a combination works best. Laser treatments give most significant results."
      },
      {
        question: "How many sessions needed?",
        answer: "Usually 3-6 sessions of chosen treatment, then maintenance. Not a one-time fix."
      },
      {
        question: "Will results last?",
        answer: "With proper skincare and occasional maintenance treatments, improved appearance can be maintained long-term."
      }
    ],

    ctaText: "Minimize Your Visible Pores",
    ctaDescription: "Large pores don't have to dominate your skin. Effective treatments for smoother, refined skin. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="open-pores-treatment-in-vadodara"
      content={content}
    />
  );
}
