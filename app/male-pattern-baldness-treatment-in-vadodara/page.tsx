import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Male Pattern Baldness Treatment Vadodara | Stop MPB",
  description: "👨 Male pattern baldness treatment in Vadodara ✓ Stop MPB progression ✓ Finasteride + PRP ✓ Hair transplant option ✓ 8,000+ patients. Consult ₹500. Book!",
  keywords: "male pattern baldness treatment vadodara, mpb treatment vadodara, men hair loss vadodara, baldness treatment near me",
};

export default function MalePatternBaldnessPage() {
  const content = {
    heroTitle: "Male Pattern Baldness Treatment in Vadodara",
    heroSubtitle: "Science-Based Solutions for Men's Hair Loss",
    
    introContent: `Male pattern baldness affects over half of all men. It's genetic, progressive, and often begins earlier than expected. The good news: we understand it well and have effective treatments.

The cause is DHT — dihydrotestosterone — a hormone that miniaturizes susceptible hair follicles over time. Treatment either blocks DHT or stimulates follicles to resist its effects. Starting early preserves more hair.

We offer the full range of proven treatments for pattern baldness: FDA-approved medications, regenerative therapies like PRP and GFC, and hair transplant for areas that won't respond to medical treatment. A comprehensive approach produces the best results.`,

    whyChooseUs: [
      "Deep understanding of androgenetic alopecia",
      "All proven treatment options available",
      "Evidence-based approach",
      "Early intervention emphasis",
      "Long-term management strategies",
      "Realistic expectations always"
    ],

    services: [
      {
        title: "Finasteride Treatment",
        description: "FDA-approved DHT blocker that slows or stops hair loss in most men."
      },
      {
        title: "Minoxidil Therapy",
        description: "Topical treatment that stimulates hair growth and extends growth phase."
      },
      {
        title: "PRP/GFC Treatment",
        description: "Regenerative therapies to support and enhance follicle function."
      },
      {
        title: "Combination Therapy",
        description: "Multiple treatments together for maximum effect."
      },
      {
        title: "Hair Transplant",
        description: "Permanent restoration for areas that won't respond to medical treatment."
      },
      {
        title: "Maintenance Protocols",
        description: "Long-term strategies to maintain results."
      }
    ],

    processSteps: [
      {
        title: "Baldness Assessment",
        description: "Evaluating stage, pattern, and rate of progression."
      },
      {
        title: "Treatment Planning",
        description: "Designing appropriate treatment based on your specific situation."
      },
      {
        title: "Treatment Initiation",
        description: "Starting medications and/or procedures."
      },
      {
        title: "Long-term Management",
        description: "Ongoing treatment to maintain and improve results."
      }
    ],

    faqItems: [
      {
        question: "Can male pattern baldness be stopped?",
        answer: "Yes, medications like finasteride stop or slow progression in most men. The earlier you start, the more hair you preserve."
      },
      {
        question: "Will I get side effects from finasteride?",
        answer: "Sexual side effects occur in a small percentage of men (1-2%). We discuss this thoroughly. Most men tolerate it without issues."
      },
      {
        question: "How long do I need to take medication?",
        answer: "Ongoing — stopping medication allows progression to resume. It's long-term management, not a cure."
      },
      {
        question: "When should I start treatment?",
        answer: "As early as possible once you notice thinning. Preservation is easier than regrowth. Don't wait until significant loss occurs."
      },
      {
        question: "When should I consider transplant?",
        answer: "When medical treatment alone can't achieve the density you want in certain areas. Often combined with ongoing medical treatment."
      }
    ],

    ctaText: "Take Control of Your Hair Loss",
    ctaDescription: "Male pattern baldness is treatable. The sooner you start, the more you save. Book your hair loss consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="male-pattern-baldness-treatment-in-vadodara"
      content={content}
    />
  );
}
