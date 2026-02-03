import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Vitiligo Treatment Vadodara | 70% Repigmentation | Book",
  description: "✅ Vitiligo treatment in Vadodara ✓ 70% repigmentation rate ✓ Phototherapy available ✓ White patches specialist ✓ Proven results. Consultation ₹500. Call now!",
  keywords: "vitiligo treatment vadodara, white patches treatment vadodara, leucoderma treatment vadodara, vitiligo doctor near me",
};

export default function VitiligoTreatmentPage() {
  const content = {
    heroTitle: "Vitiligo Treatment in Vadodara",
    heroSubtitle: "Hope for White Patch Restoration",
    
    introContent: `Vitiligo — the appearance of white patches due to melanocyte loss — can be emotionally challenging, especially in our culture where it carries social stigma. But treatment options exist, and many patients achieve significant repigmentation.

The condition varies widely. Some have stable, limited patches. Others experience progressive spread. Treatment depends on extent, activity, and location. Multiple approaches — phototherapy, medications, and surgical options — can help restore color.

We approach vitiligo with both medical expertise and emotional sensitivity. Understanding the social impact, we work to achieve maximum possible repigmentation while providing realistic expectations about what treatment can accomplish.`,

    whyChooseUs: [
      "Vitiligo treatment expertise",
      "Multiple treatment modalities",
      "Understanding of emotional impact",
      "Realistic yet hopeful approach",
      "Surgical options for stable vitiligo",
      "Long-term management"
    ],

    services: [
      {
        title: "Vitiligo Assessment",
        description: "Evaluating extent, activity, and treatment potential of your vitiligo."
      },
      {
        title: "Phototherapy",
        description: "Narrowband UVB — the most effective treatment for many vitiligo patients."
      },
      {
        title: "Topical Treatment",
        description: "Immunomodulators and other topicals to stimulate repigmentation."
      },
      {
        title: "Systemic Treatment",
        description: "For rapidly spreading vitiligo — medications to halt progression."
      },
      {
        title: "Surgical Options",
        description: "Melanocyte transplant and grafting for stable vitiligo in suitable patients."
      },
      {
        title: "Combination Therapy",
        description: "Multiple approaches together for enhanced repigmentation."
      }
    ],

    processSteps: [
      {
        title: "Comprehensive Evaluation",
        description: "Assessing vitiligo type, extent, stability, and treatment history."
      },
      {
        title: "Activity Assessment",
        description: "Determining if vitiligo is spreading or stable — this affects treatment choice."
      },
      {
        title: "Treatment Planning",
        description: "Creating a protocol based on your specific vitiligo pattern."
      },
      {
        title: "Long-term Management",
        description: "Ongoing treatment and monitoring for maximum repigmentation."
      }
    ],

    faqItems: [
      {
        question: "Can vitiligo be cured?",
        answer: "Cure isn't the right word, but repigmentation is often achievable. Many patients see significant color return with proper treatment."
      },
      {
        question: "Why did I get vitiligo?",
        answer: "It's an autoimmune condition — immune cells attack melanocytes. Genetics and triggers play roles. It's not contagious or caused by anything you did."
      },
      {
        question: "How long does treatment take?",
        answer: "Repigmentation is slow — typically 6-12 months of treatment for visible results. Some areas respond better than others."
      },
      {
        question: "Will white patches spread?",
        answer: "Not always. Some vitiligo remains stable for years. We assess activity and treat spreading vitiligo differently from stable disease."
      },
      {
        question: "Is phototherapy safe?",
        answer: "When administered properly with appropriate dosing and monitoring, yes. We follow established protocols."
      }
    ],

    ctaText: "Get Help for Your Vitiligo",
    ctaDescription: "White patches can be treated. Many patients achieve significant repigmentation. Take the first step toward restored confidence. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="vitiligo-treatment-in-vadodara"
      content={content}
    />
  );
}
