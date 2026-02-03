import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Transplant Vadodara ₹35,000 | Natural Results | Book",
  description: "💇 FUE hair transplant in Vadodara from ₹35,000 ✓ 95% graft survival ✓ No scars ✓ 5,000+ successful transplants ✓ Natural hairline. Free consultation!",
  keywords: "hair transplant vadodara, fue hair transplant vadodara, hair transplant cost vadodara, best hair transplant near me",
};

export default function HairTransplantPage() {
  const content = {
    heroTitle: "Hair Transplant in Vadodara",
    heroSubtitle: "Permanent Solution for Pattern Baldness",
    
    introContent: `When medical treatment can't restore hair in balding areas — because follicles are simply gone — hair transplant offers a permanent solution. We move hair from where you have plenty to where you need it.

Modern FUE (Follicular Unit Extraction) technique harvests individual follicular units without a linear scar. It's meticulous work — thousands of grafts placed one by one to recreate natural hair patterns.

Results are permanent because transplanted hair comes from areas genetically resistant to balding. Once healed, these hairs grow naturally for life. No ongoing treatment needed for the transplanted hair itself.`,

    whyChooseUs: [
      "FUE technique expertise",
      "Natural hairline design",
      "High graft survival rates",
      "Experienced transplant team",
      "Realistic expectations setting",
      "Comprehensive pre and post-care"
    ],

    services: [
      {
        title: "FUE Hair Transplant",
        description: "Individual follicle extraction and placement. No linear scar, faster healing."
      },
      {
        title: "Hairline Restoration",
        description: "Recreating natural-looking hairline for frontal baldness."
      },
      {
        title: "Crown Transplant",
        description: "Addressing vertex/crown baldness with appropriate density."
      },
      {
        title: "Beard to Scalp",
        description: "Using beard hair when scalp donor area is limited."
      },
      {
        title: "Repair Transplants",
        description: "Fixing unsatisfactory results from previous procedures."
      },
      {
        title: "Eyebrow Transplant",
        description: "Restoring eyebrows lost to over-plucking, scars, or medical conditions."
      }
    ],

    processSteps: [
      {
        title: "Evaluation & Planning",
        description: "Assessing candidacy, donor area, baldness pattern, and designing the restoration plan."
      },
      {
        title: "Surgery Day",
        description: "Local anesthesia, graft harvesting, recipient site creation, and graft placement."
      },
      {
        title: "Initial Healing",
        description: "1-2 weeks recovery. Grafts secure, initial redness fades."
      },
      {
        title: "Growth Phase",
        description: "3-12 months for transplanted hair to fully grow in."
      }
    ],

    faqItems: [
      {
        question: "Is hair transplant permanent?",
        answer: "Yes — transplanted hair is genetically resistant to balding. It will grow for life. However, non-transplanted native hair may continue to thin."
      },
      {
        question: "How many grafts will I need?",
        answer: "Depends on baldness extent and desired density. We assess during consultation and provide a graft estimate."
      },
      {
        question: "What's the cost of hair transplant?",
        answer: "Typically calculated per graft. Total cost depends on number of grafts needed. We provide detailed quotes after assessment."
      },
      {
        question: "Is the surgery painful?",
        answer: "Local anesthesia makes the procedure comfortable. Some soreness after, manageable with mild pain medication."
      },
      {
        question: "When will I see results?",
        answer: "Initial shedding is normal. New growth begins around 3-4 months. Full results visible at 12-18 months."
      }
    ],

    ctaText: "Get Permanent Hair Restoration",
    ctaDescription: "When nothing else will restore hair in bald areas, transplant offers permanent solution. Natural results from experienced hands. Book your assessment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-transplant-in-vadodara"
      content={content}
    />
  );
}
