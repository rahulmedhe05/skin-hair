import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Growth Solutions Vadodara | Faster Growth | ₹2,000",
  description: "💇 Hair growth solutions in Vadodara from ₹2,000 ✓ Faster, thicker growth ✓ Medical treatments ✓ PRP & GFC available ✓ Visible results. Book consultation!",
  keywords: "hair growth vadodara, hair regrowth vadodara, hair growth treatment cost, hair growth near me",
};

export default function HairGrowthPage() {
  const content = {
    heroTitle: "Hair Growth in Vadodara",
    heroSubtitle: "Proven Solutions for Hair Regrowth",
    
    introContent: `Growing hair where it's thinned or stopped growing requires stimulating follicles that have slowed down or gone dormant. Medical hair growth treatments can reactivate these follicles, resulting in visible regrowth.

Hair follicles don't die easily — even in areas that look bare, many follicles are still present but producing thin, barely visible hairs. Treatment can convert these to producing normal, thick hair again.

We specialize in hair growth treatments that actually work. From growth factors to medications to laser therapy, we use proven approaches to stimulate your follicles and restore visible hair.`,

    whyChooseUs: [
      "Proven growth treatments",
      "Scientific approach",
      "Visible results",
      "Multiple treatment options",
      "Individualized protocols",
      "Long-term support"
    ],

    services: [
      {
        title: "PRP Hair Growth",
        description: "Growth factors from your blood to stimulate follicles."
      },
      {
        title: "GFC Treatment",
        description: "Concentrated growth factors for hair regeneration."
      },
      {
        title: "Medical Therapy",
        description: "Prescription treatments proven to regrow hair."
      },
      {
        title: "Mesotherapy",
        description: "Scalp injections with growth-stimulating cocktails."
      },
      {
        title: "LLLT",
        description: "Low-level laser therapy for follicle stimulation."
      },
      {
        title: "Hair Transplant",
        description: "Surgical restoration for permanent baldness."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating your hair loss and regrowth potential."
      },
      {
        title: "Treatment Selection",
        description: "Choosing the most effective approach for your situation."
      },
      {
        title: "Treatment Sessions",
        description: "Regular treatments for progressive hair growth."
      },
      {
        title: "Results",
        description: "Visible regrowth developing over months."
      }
    ],

    faqItems: [
      {
        question: "Can lost hair actually regrow?",
        answer: "Often yes — dormant follicles can be reactivated. Even thinning areas usually have follicles capable of producing hair again."
      },
      {
        question: "Which treatment grows hair fastest?",
        answer: "PRP/GFC typically show results in 3-4 months. Hair transplant gives immediate coverage that matures over 12-18 months."
      },
      {
        question: "Is hair growth treatment permanent?",
        answer: "Medical treatments need ongoing maintenance. Hair transplant is permanent. We discuss this during consultation."
      },
      {
        question: "How much regrowth can I expect?",
        answer: "Varies individually. Most see meaningful improvement with proper treatment. We set realistic expectations."
      },
      {
        question: "Will regrowing hair look natural?",
        answer: "Yes — it's your own hair growing from your follicles. Regrown hair looks completely natural."
      }
    ],

    ctaText: "Start Your Hair Growth Journey",
    ctaDescription: "Regrow the hair you've lost. Proven medical treatments for visible results. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-growth-in-vadodara"
      content={content}
    />
  );
}
