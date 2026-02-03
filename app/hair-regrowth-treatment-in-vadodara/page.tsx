import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Regrowth Treatment Vadodara | New Hair | ₹5,000",
  description: "💇 Hair regrowth treatment in Vadodara from ₹5,000 ✓ Regrow thinning areas ✓ PRP + minoxidil combo ✓ 70% see new hair in 3 months. Book consultation now!",
  keywords: "hair regrowth treatment vadodara, regrow hair vadodara, hair regrowth cost vadodara, regrow thinning hair",
};

export default function HairRegrowthTreatmentPage() {
  const content = {
    heroTitle: "Hair Regrowth Treatment in Vadodara",
    heroSubtitle: "Stimulate Dormant Follicles Back to Life",
    
    introContent: `Hair regrowth is possible — but understanding the science helps set realistic expectations. Follicles that are miniaturized but still present can often be stimulated to produce stronger hair. Follicles that have completely disappeared cannot.

This is why timing matters. The earlier you address thinning, the more follicles remain viable for regrowth. Wait too long and there's less to work with. Treatment can't resurrect what's completely gone.

We focus on maximizing regrowth potential with combination approaches — medications that block further miniaturization, therapies that stimulate growth, and procedures that nourish follicles. Together, these can produce meaningful density improvement for appropriate candidates.`,

    whyChooseUs: [
      "Understanding of regrowth potential",
      "Realistic expectations setting",
      "Multiple regrowth stimulation methods",
      "Combination approaches for better results",
      "Progress tracking with photography",
      "Early intervention emphasis"
    ],

    services: [
      {
        title: "Growth Stimulation",
        description: "Medications and therapies that signal dormant follicles to resume active growth."
      },
      {
        title: "PRP for Regrowth",
        description: "Platelet-rich plasma delivering growth factors directly to follicles."
      },
      {
        title: "GFC Treatment",
        description: "Growth Factor Concentrate — concentrated growth signals for follicle stimulation."
      },
      {
        title: "Low-Level Laser",
        description: "Photobiomodulation therapy to energize hair follicles."
      },
      {
        title: "Topical Growth Solutions",
        description: "Minoxidil and advanced topical formulations that promote regrowth."
      },
      {
        title: "Combination Protocols",
        description: "Multiple approaches working together for maximum regrowth effect."
      }
    ],

    processSteps: [
      {
        title: "Regrowth Potential Assessment",
        description: "Evaluating how much can realistically be regrown based on current state."
      },
      {
        title: "Protocol Design",
        description: "Creating a combination approach targeting regrowth from multiple angles."
      },
      {
        title: "Intensive Phase",
        description: "Active treatment period to maximize follicle stimulation."
      },
      {
        title: "Maintenance Phase",
        description: "Sustaining regrowth and preventing future loss."
      }
    ],

    faqItems: [
      {
        question: "Can hair really regrow?",
        answer: "Miniaturized follicles can often be stimulated to produce thicker hair. However, completely gone follicles cannot regenerate. Realistic expectations depend on how much is left to work with."
      },
      {
        question: "How long does regrowth take?",
        answer: "Initial improvement typically visible at 3-4 months. Continued improvement over 6-12 months. Hair growth is slow — patience is essential."
      },
      {
        question: "Will regrowth be permanent?",
        answer: "Ongoing maintenance is typically needed. Regrown hair can thin again if treatment stops. We plan for long-term management."
      },
      {
        question: "What affects regrowth potential?",
        answer: "Duration of hair loss, extent of thinning, underlying cause, age, and how many follicles remain viable. We assess all these factors."
      },
      {
        question: "Is PRP effective for regrowth?",
        answer: "Evidence supports modest improvement in density for appropriate candidates. Results vary. It works best as part of combination therapy."
      }
    ],

    ctaText: "Start Your Regrowth Journey",
    ctaDescription: "Dormant follicles can be awakened — but the window closes over time. Act early for best regrowth potential. Book your assessment today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-regrowth-treatment-in-vadodara"
      content={content}
    />
  );
}
