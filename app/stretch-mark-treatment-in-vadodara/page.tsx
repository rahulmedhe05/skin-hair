import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Stretch Mark Treatment Vadodara | 60% Fading | Book",
  description: "✅ Stretch mark treatment in Vadodara ✓ 60% fading guaranteed ✓ Laser + microneedling ✓ Pregnancy & weight loss marks ✓ Safe treatment. Starting ₹3,000!",
  keywords: "stretch mark treatment vadodara, stretch mark removal vadodara, stretch marks cost vadodara, stretch marks near me",
};

export default function StretchMarkPage() {
  const content = {
    heroTitle: "Stretch Mark Treatment in Vadodara",
    heroSubtitle: "Reduce Stretch Marks, Restore Confidence",
    
    introContent: `Stretch marks — those silvery or purple streaks left behind by pregnancy, rapid weight changes, or growth spurts — are permanent reminders on your skin. They bother many people, especially when wearing swimsuits or revealing clothing.

Stretch marks are scars where skin stretched faster than it could adapt. Complete removal isn't possible, but significant improvement is. Treatment works best on newer (red/purple) stretch marks, but older (white) ones can also be improved.

We offer multiple approaches to stretch mark treatment. While we're honest that complete elimination isn't possible, meaningful improvement that makes them less noticeable is achievable.`,

    whyChooseUs: [
      "Realistic expectations",
      "Multiple treatment options",
      "Treatment for all stretch mark stages",
      "Effective protocols",
      "Body and abdomen treatment",
      "Combination approaches"
    ],

    services: [
      {
        title: "Microneedling for Stretch Marks",
        description: "Collagen induction therapy to improve stretch mark appearance."
      },
      {
        title: "Laser Stretch Mark Treatment",
        description: "Laser therapy to remodel scar tissue and improve color."
      },
      {
        title: "PRP Treatment",
        description: "Growth factors to enhance stretch mark healing."
      },
      {
        title: "Chemical Peels",
        description: "Peels to improve texture and blend stretch marks."
      },
      {
        title: "Combination Protocols",
        description: "Multiple modalities for maximum improvement."
      },
      {
        title: "Pregnancy Stretch Marks",
        description: "Specific treatment for post-pregnancy abdominal stretch marks."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating stretch marks — age, location, severity."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate treatment based on stretch mark characteristics."
      },
      {
        title: "Treatment Series",
        description: "Performing multiple sessions for progressive improvement."
      },
      {
        title: "Result Assessment",
        description: "Evaluating improvement and planning maintenance if desired."
      }
    ],

    faqItems: [
      {
        question: "Can stretch marks be completely removed?",
        answer: "No treatment completely removes stretch marks. We can improve their appearance significantly — making them less noticeable, but not invisible."
      },
      {
        question: "Are newer stretch marks easier to treat?",
        answer: "Yes — red/purple stretch marks respond better than older white ones. Treat early for best results."
      },
      {
        question: "How many sessions needed?",
        answer: "Typically 4-6 sessions for noticeable improvement. More may be needed for older, deeper stretch marks."
      },
      {
        question: "Does treatment hurt?",
        answer: "Depending on modality — some discomfort, usually manageable. We use numbing cream for procedures like microneedling."
      },
      {
        question: "What results can I realistically expect?",
        answer: "50-70% improvement in appearance is realistic. They become less noticeable but typically don't disappear completely."
      }
    ],

    ctaText: "Improve Your Stretch Marks",
    ctaDescription: "Stretch marks don't have to stay as prominent. Effective treatment for meaningful improvement. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="stretch-mark-treatment-in-vadodara"
      content={content}
    />
  );
}
