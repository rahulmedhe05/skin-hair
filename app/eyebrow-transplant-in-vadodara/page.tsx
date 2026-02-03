import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Eyebrow Transplant Vadodara ₹30,000 | Natural Brows | Book",
  description: "✨ Eyebrow transplant in Vadodara from ₹30,000 ✓ Natural-looking brows ✓ Permanent solution ✓ Thin eyebrows fixed ✓ Expert surgeons. Free consultation!",
  keywords: "eyebrow transplant vadodara, eyebrow restoration vadodara, eyebrow transplant cost, thin eyebrows treatment",
};

export default function EyebrowTransplantPage() {
  const content = {
    heroTitle: "Eyebrow Transplant in Vadodara",
    heroSubtitle: "Natural, Fuller Eyebrows Permanently",
    
    introContent: `Eyebrows frame your face. Thin, sparse, or absent eyebrows — whether from over-plucking, medical conditions, scarring, or genetics — significantly impact facial aesthetics. Makeup pencils are daily hassles with imperfect results.

Eyebrow transplant provides permanent, natural solution. Hair from your scalp is transplanted to create or restore eyebrows. Unlike microblading that fades, transplanted hair grows permanently and naturally.

We perform eyebrow transplants with meticulous attention to angle, direction, and placement. Eyebrow hair grows at very specific angles — getting this right is crucial for natural appearance. The result should look like natural eyebrows, not transplanted hair.`,

    whyChooseUs: [
      "Meticulous technique",
      "Understanding of eyebrow aesthetics",
      "Correct angle and direction",
      "Natural-looking results",
      "Artistic approach",
      "Permanent solution"
    ],

    services: [
      {
        title: "Full Eyebrow Restoration",
        description: "Complete eyebrow creation for absent or severely sparse brows."
      },
      {
        title: "Eyebrow Thickening",
        description: "Adding density to thin eyebrows."
      },
      {
        title: "Eyebrow Reshaping",
        description: "Modifying eyebrow shape through transplant."
      },
      {
        title: "Scar Coverage",
        description: "Transplanting hair to cover scars within eyebrow area."
      },
      {
        title: "Post-Chemo Restoration",
        description: "Restoring eyebrows after chemotherapy hair loss."
      },
      {
        title: "Correcting Over-Plucking",
        description: "Restoring eyebrows damaged by years of over-plucking."
      }
    ],

    processSteps: [
      {
        title: "Design Consultation",
        description: "Designing eyebrow shape based on facial features and your preferences."
      },
      {
        title: "Donor Harvesting",
        description: "Extracting fine hair from scalp suitable for eyebrows."
      },
      {
        title: "Precise Placement",
        description: "Creating sites at exact angles and placing grafts meticulously."
      },
      {
        title: "Healing & Growth",
        description: "Post-procedure care and watching eyebrows develop over months."
      }
    ],

    faqItems: [
      {
        question: "How many grafts are needed for eyebrows?",
        answer: "Typically 100-400 grafts per eyebrow depending on desired density and existing hair. Full reconstruction needs more."
      },
      {
        question: "Will transplanted eyebrow hair grow long?",
        answer: "Yes — scalp hair grows longer than natural eyebrow hair. You'll need to trim them periodically. They behave like scalp hair initially but often adapt over time."
      },
      {
        question: "How long until final result?",
        answer: "Grafts shed initially, regrow around 3-4 months, mature by 12-18 months."
      },
      {
        question: "Is it better than microblading?",
        answer: "Different — microblading is simpler but temporary and drawn on. Transplant gives real, growing hair permanently."
      },
      {
        question: "Can you match my existing eyebrow hair?",
        answer: "We select fine hair from behind the ear that best matches eyebrow texture. Transplanted hair blends naturally."
      }
    ],

    ctaText: "Restore Your Eyebrows Naturally",
    ctaDescription: "Stop drawing eyebrows daily. Get real, permanent, natural-looking eyebrows. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="eyebrow-transplant-in-vadodara"
      content={content}
    />
  );
}
