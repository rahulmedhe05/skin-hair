import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Double Chin Treatment Vadodara | Non-Surgical | ₹10,000",
  description: "✨ Double chin treatment in Vadodara from ₹10,000 ✓ Fat dissolving injections ✓ No surgery ✓ Defined jawline ✓ Results in 4 weeks. Book consultation now!",
  keywords: "double chin treatment vadodara, chin fat removal vadodara, double chin removal cost, double chin near me",
};

export default function DoubleChinTreatmentPage() {
  const content = {
    heroTitle: "Double Chin Treatment in Vadodara",
    heroSubtitle: "Define Your Jawline, Eliminate the Double Chin",
    
    introContent: `That stubborn pocket of fat under your chin doesn't respond to diet or exercise. It softens your jawline, makes you look heavier than you are, and shows up in every photo. It's frustrating because it often has nothing to do with your overall weight.

Non-surgical double chin treatment has become highly effective. Fat-dissolving injections, targeted devices, and combination approaches can significantly reduce submental fullness and restore jawline definition.

We offer multiple approaches to double chin reduction, selecting based on the amount of fat, skin quality, and your preferences. The goal is a defined jawline and improved profile.`,

    whyChooseUs: [
      "Multiple treatment options",
      "Non-surgical approaches",
      "Understanding of facial anatomy",
      "Customized treatment plans",
      "Natural-looking results",
      "Combination protocols when needed"
    ],

    services: [
      {
        title: "Fat Dissolving Injections",
        description: "Injections that permanently destroy fat cells under the chin."
      },
      {
        title: "Chin Lipolysis",
        description: "Targeted fat reduction using various technologies."
      },
      {
        title: "Skin Tightening",
        description: "For cases with skin laxity along with fat — tightening after fat reduction."
      },
      {
        title: "Combination Treatment",
        description: "Fat reduction plus skin tightening for comprehensive results."
      },
      {
        title: "Jawline Contouring",
        description: "Enhancing jawline definition as part of double chin treatment."
      },
      {
        title: "Profile Balancing",
        description: "Addressing chin projection issues that contribute to double chin appearance."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating fat amount, skin quality, and contributing factors."
      },
      {
        title: "Treatment Selection",
        description: "Choosing the most appropriate approach for your situation."
      },
      {
        title: "Treatment Sessions",
        description: "Performing treatments — typically multiple sessions needed."
      },
      {
        title: "Refinement",
        description: "Assessing results and refining if needed."
      }
    ],

    faqItems: [
      {
        question: "How many sessions are needed?",
        answer: "Typically 2-4 sessions spaced 4-6 weeks apart. Depends on fat amount and treatment chosen."
      },
      {
        question: "Is it permanent?",
        answer: "Fat cells destroyed are gone permanently. However, significant weight gain can create new fat."
      },
      {
        question: "What's the downtime?",
        answer: "Swelling for 1-2 weeks after injections. You'll look like you have a worse double chin before looking better."
      },
      {
        question: "Does it hurt?",
        answer: "Injections cause some discomfort and burning sensation. Local anesthesia helps. Tolerable for most."
      },
      {
        question: "Am I a good candidate?",
        answer: "Best for moderate submental fat with reasonable skin quality. Severe fat or very loose skin may need other approaches."
      }
    ],

    ctaText: "Eliminate Your Double Chin",
    ctaDescription: "Define your jawline without surgery. Permanent fat reduction for improved profile. Book your double chin consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="double-chin-treatment-in-vadodara"
      content={content}
    />
  );
}
