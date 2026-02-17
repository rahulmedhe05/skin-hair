import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Rashes Treatment Vadodara | Fast Relief | ₹500 Consult",
  description: "✅ Rashes treatment in Vadodara ✓ Fast relief from itching ✓ All rash types diagnosed ✓ Stop recurrence ✓ Expert dermatologist. Consultation ₹500. Call!",
  keywords: "rashes treatment vadodara, skin rash doctor vadodara, rash treatment cost, rash treatment near me",
};

export default function RashesTreatmentPage() {
  const content = {
    heroTitle: "Rashes Treatment in Vadodara",
    heroSubtitle: "Identify the Cause, Get Relief Fast",
    
    introContent: `Skin rashes can be alarming — red, itchy, spreading patches that appear suddenly. The discomfort is real, but so is the confusion. What's causing it? Is it serious? Will it spread? Should you scratch or not?

Rashes have many causes — allergies, infections, irritants, medications, underlying conditions. The same red, itchy skin can result from completely different causes requiring opposite treatments. Proper diagnosis is essential.

We diagnose skin rashes accurately and provide effective treatment. Whether it's a simple contact reaction or something requiring more investigation, we identify the cause and provide relief.`,

    whyChooseUs: [
      "Accurate rash diagnosis",
      "Understanding multiple causes",
      "Quick symptom relief",
      "Identifying triggers",
      "Treatment for chronic rashes",
      "Investigation when needed"
    ],

    services: [
      {
        title: "Rash Diagnosis",
        description: "Identifying the type and cause of your skin rash."
      },
      {
        title: "Acute Rash Treatment",
        description: "Immediate relief for current rash symptoms."
      },
      {
        title: "Allergic Rash Treatment",
        description: "Managing rashes caused by allergic reactions."
      },
      {
        title: "Infection-Related Rashes",
        description: "Treatment when rash is caused by infection."
      },
      {
        title: "Chronic Rash Management",
        description: "Long-term management for recurring rashes."
      },
      {
        title: "Cause Investigation",
        description: "Testing and evaluation to identify rash triggers."
      }
    ],

    processSteps: [
      {
        title: "Clinical Assessment",
        description: "Examining the rash, gathering history, identifying likely cause."
      },
      {
        title: "Diagnosis",
        description: "Determining what's causing your specific rash."
      },
      {
        title: "Treatment",
        description: "Providing appropriate treatment for relief and resolution."
      },
      {
        title: "Prevention",
        description: "Guidance on preventing recurrence when cause is identified."
      }
    ],

    faqItems: [
      {
        question: "What's causing my rash?",
        answer: "Possibilities include allergies, irritants, infections, medications, and underlying conditions. We examine and diagnose specifically."
      },
      {
        question: "Is my rash contagious?",
        answer: "Depends on cause. Allergic and irritant rashes aren't contagious. Some infectious rashes can spread. We'll tell you."
      },
      {
        question: "How long until the rash goes away?",
        answer: "Varies by cause. Simple allergic reactions clear in days with treatment. Some conditions take longer. We set expectations."
      },
      {
        question: "Should I use an over-the-counter cream?",
        answer: "Without knowing the cause, random creams might help or worsen. Get proper diagnosis first."
      },
      {
        question: "Why do I keep getting rashes?",
        answer: "Recurring rashes suggest ongoing exposure to trigger or underlying condition. We investigate to identify the pattern."
      }
    ],

    ctaText: "Get Your Rash Diagnosed and Treated",
    ctaDescription: "Stop suffering from unexplained rashes. Proper diagnosis leads to effective treatment. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="rashes-treatment-in-vadodara"
      content={content}
    />
  );
}
