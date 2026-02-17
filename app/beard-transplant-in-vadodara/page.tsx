import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Beard Transplant Vadodara ₹40,000 | Full Beard | Book",
  description: "🧔 Beard transplant in Vadodara from ₹40,000 ✓ Dense, natural beard ✓ FUE technique ✓ Patchy beard solution ✓ Permanent results. Free consultation. Call!",
  keywords: "beard transplant vadodara, facial hair transplant vadodara, beard transplant cost vadodara, patchy beard treatment",
};

export default function BeardTransplantPage() {
  const content = {
    heroTitle: "Beard Transplant in Vadodara",
    heroSubtitle: "Create the Beard You've Always Wanted",
    
    introContent: `A full, well-defined beard is increasingly desired but not everyone's genetics cooperate. Patchy areas, sparse growth, or inability to grow facial hair can be frustrating for men wanting that bearded look.

Beard transplant takes hair from your scalp donor area and transplants it to beard region. The transplanted hair grows permanently, allowing you to grow, trim, and style a beard that wasn't possible before.

We perform beard transplants with attention to natural direction, density, and pattern. The result should look like you've always been able to grow a full beard — not like you had a procedure.`,

    whyChooseUs: [
      "Natural-looking results",
      "Understanding of beard patterns",
      "Precise follicle placement",
      "Appropriate density",
      "Experience with facial hair",
      "Artistic approach to design"
    ],

    services: [
      {
        title: "Full Beard Transplant",
        description: "Creating complete beard coverage where growth is sparse or absent."
      },
      {
        title: "Patchy Beard Filling",
        description: "Filling in patchy areas for even, full appearance."
      },
      {
        title: "Beard Shaping",
        description: "Defining beard lines and creating desired shape."
      },
      {
        title: "Goatee/Mustache Enhancement",
        description: "Targeted transplant to specific facial hair areas."
      },
      {
        title: "Sideburn Restoration",
        description: "Creating or enhancing sideburns."
      },
      {
        title: "Scar Coverage",
        description: "Transplanting hair to cover facial scars."
      }
    ],

    processSteps: [
      {
        title: "Consultation & Design",
        description: "Discussing your goals and designing the beard pattern."
      },
      {
        title: "Donor Extraction",
        description: "Harvesting hair from scalp donor area."
      },
      {
        title: "Recipient Site Creation",
        description: "Making tiny incisions at correct angles for natural direction."
      },
      {
        title: "Graft Placement",
        description: "Placing each graft carefully for optimal growth and appearance."
      }
    ],

    faqItems: [
      {
        question: "Will it look natural?",
        answer: "When done properly, yes. Key is correct angle, direction, and density. It should look like natural beard growth."
      },
      {
        question: "How many grafts are needed?",
        answer: "Varies significantly — patchy filling may need 200-500 grafts, full beard 2000-3000+. We assess during consultation."
      },
      {
        question: "When can I grow out the beard?",
        answer: "Transplanted hair falls out initially (normal), then regrows around 3-4 months. Full growth by 12-18 months."
      },
      {
        question: "Can I shave after transplant?",
        answer: "Yes — after healing, you can shave, trim, style however you want. It's your permanent hair."
      },
      {
        question: "Is it painful?",
        answer: "Local anesthesia makes the procedure comfortable. Face can be more sensitive than scalp but manageable."
      }
    ],

    ctaText: "Get the Beard You've Always Wanted",
    ctaDescription: "Don't settle for patchy or sparse facial hair. Create a full, natural-looking beard. Book your beard transplant consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="beard-transplant-in-vadodara"
      content={content}
    />
  );
}
