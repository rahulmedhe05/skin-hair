import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Acne Scar Treatment Vadodara | 70% Improvement | Book",
  description: "✅ Acne scar treatment in Vadodara ✓ 70% scar improvement ✓ Laser + microneedling ✓ All scar types treated ✓ 5,000+ patients. Starting ₹3,000. Book now!",
  keywords: "acne scar treatment vadodara, pimple scar removal vadodara, acne marks treatment, scar removal cost vadodara",
};

export default function AcneScarTreatmentPage() {
  const content = {
    heroTitle: "Acne Scar Treatment in Vadodara",
    heroSubtitle: "Smooth Skin After Acne",
    
    introContent: `Acne eventually ends, but its scars can last forever — unless properly treated. Those ice pick marks, rolling depressions, and discolored patches don't have to be permanent reminders of past breakouts.

Modern scar treatment has advanced dramatically. We can now improve even severe scarring that once seemed hopeless. Different scar types respond to different treatments, and combining approaches often produces the best results.

The key is proper scar assessment. Not all scars are the same, and treatment must match scar type. We evaluate your specific scarring and design a protocol that addresses your particular patterns.`,

    whyChooseUs: [
      "Expert scar type assessment",
      "Multiple treatment technologies",
      "Combination protocols for best results",
      "Realistic expectations and timelines",
      "Experience with all scar severities",
      "Progressive improvement approach"
    ],

    services: [
      {
        title: "Scar Assessment",
        description: "Identifying scar types — ice pick, boxcar, rolling, or mixed. Different scars need different approaches."
      },
      {
        title: "Laser Resurfacing",
        description: "Fractional laser to stimulate collagen and resurface scarred skin. The cornerstone of modern scar treatment."
      },
      {
        title: "Microneedling",
        description: "Creating controlled micro-injuries that trigger collagen production and skin remodeling."
      },
      {
        title: "Chemical Peels",
        description: "Controlled exfoliation to improve texture and reduce superficial scarring."
      },
      {
        title: "TCA Cross",
        description: "Targeted treatment for deep ice pick scars using trichloroacetic acid."
      },
      {
        title: "Subcision",
        description: "Breaking fibrous bands that pull scars down, releasing them for filling."
      }
    ],

    processSteps: [
      {
        title: "Scar Mapping",
        description: "Documenting scar types, locations, and severity across affected areas."
      },
      {
        title: "Protocol Design",
        description: "Creating a treatment plan combining appropriate modalities for your scars."
      },
      {
        title: "Progressive Treatment",
        description: "Multiple sessions, each building on previous improvement."
      },
      {
        title: "Final Assessment",
        description: "Evaluating results and any further optimization possible."
      }
    ],

    faqItems: [
      {
        question: "Can acne scars really be removed?",
        answer: "Significantly improved, yes. Complete removal isn't always possible, but dramatic improvement often is. We set realistic expectations during consultation."
      },
      {
        question: "How many sessions will I need?",
        answer: "Typically 4-6 sessions for noticeable improvement, more for severe scarring. Sessions are spaced 4-6 weeks apart."
      },
      {
        question: "Does scar treatment hurt?",
        answer: "Depends on the modality. We use numbing cream for laser and more aggressive treatments. Discomfort is manageable."
      },
      {
        question: "What's the downtime?",
        answer: "Varies by treatment — chemical peels have minimal downtime, while aggressive laser may need a few days of redness. We'll explain what to expect."
      },
      {
        question: "Should I wait until acne is completely gone?",
        answer: "Active acne should be controlled first, otherwise new scars may form during treatment. We can work on both simultaneously in some cases."
      }
    ],

    ctaText: "Don't Live with Acne Scars",
    ctaDescription: "Scars don't have to be permanent. Modern treatment can significantly improve your skin texture. Book your scar assessment today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="acne-scar-treatment-in-vadodara"
      content={content}
    />
  );
}
