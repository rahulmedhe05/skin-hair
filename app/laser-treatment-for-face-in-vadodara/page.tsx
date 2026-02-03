import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Laser Treatment for Face Vadodara | FDA Approved | Book",
  description: "✨ Facial laser treatment in Vadodara ✓ US FDA approved ✓ Acne scars, pigmentation, aging ✓ Multiple lasers ✓ Expert dermatologists. Starting ₹3,000!",
  keywords: "laser treatment face vadodara, facial laser vadodara, laser for face cost, face laser treatment near me",
};

export default function LaserTreatmentFacePage() {
  const content = {
    heroTitle: "Laser Treatment for Face in Vadodara",
    heroSubtitle: "Advanced Technology for Facial Rejuvenation",
    
    introContent: `Facial laser treatment has revolutionized dermatology. What once required surgery or aggressive procedures can now be achieved with precise laser technology — targeting specific concerns with minimal damage to surrounding tissue.

Different lasers do different things. Some target pigment. Some build collagen. Some resurface skin. Some tighten. Choosing the right laser — or combination of lasers — for your concern is what produces results.

We've invested in multiple laser platforms because facial concerns vary. One laser can't do everything well. Our technology selection means we can match the right laser to your specific problem, rather than forcing your concern into whatever single laser we happen to have.`,

    whyChooseUs: [
      "Multiple laser platforms available",
      "Matched technology to concern",
      "Experience with facial laser treatments",
      "Safe protocols for Indian skin",
      "Realistic expectations setting",
      "Combined approaches when beneficial"
    ],

    services: [
      {
        title: "Laser for Acne Scars",
        description: "Fractional laser resurfacing to improve texture and reduce acne scar appearance."
      },
      {
        title: "Laser for Pigmentation",
        description: "Q-switched and specific wavelength lasers targeting dark spots and uneven tone."
      },
      {
        title: "Skin Tightening Laser",
        description: "Non-ablative lasers stimulating collagen for firmer, lifted appearance."
      },
      {
        title: "Laser Toning",
        description: "Gentle laser for overall tone improvement and brightness."
      },
      {
        title: "Laser Resurfacing",
        description: "For significant texture issues, fine lines, and comprehensive rejuvenation."
      },
      {
        title: "Vascular Laser",
        description: "Targeting redness, visible vessels, and rosacea concerns."
      }
    ],

    processSteps: [
      {
        title: "Facial Assessment",
        description: "Evaluating your concerns and determining which laser technology is appropriate."
      },
      {
        title: "Treatment Planning",
        description: "Designing a laser protocol — which lasers, what settings, how many sessions."
      },
      {
        title: "Laser Sessions",
        description: "Precise treatment with appropriate energy levels and techniques."
      },
      {
        title: "Recovery & Results",
        description: "Post-treatment care and watching results develop over time."
      }
    ],

    faqItems: [
      {
        question: "Which facial laser is best?",
        answer: "Depends entirely on your concern. Scars need different lasers than pigmentation. Tightening needs different technology than resurfacing. We match laser to concern."
      },
      {
        question: "Is facial laser safe for Indian skin?",
        answer: "With appropriate laser selection and settings, yes. Some lasers are safer for darker skin than others. We use appropriate technology and parameters."
      },
      {
        question: "How much downtime is there?",
        answer: "Varies by laser type. Toning: none. Fractional resurfacing: 3-7 days. We'll explain what to expect for your specific treatment."
      },
      {
        question: "How many sessions will I need?",
        answer: "Depends on concern and laser type. Typically 3-6 sessions for most concerns. We'll give you a realistic treatment plan."
      },
      {
        question: "Can I combine different lasers?",
        answer: "Often yes — combination approaches can be more effective than single-laser treatment. We design protocols using multiple modalities when beneficial."
      }
    ],

    ctaText: "Advanced Facial Laser Treatment",
    ctaDescription: "Multiple laser technologies, expert application, personalized protocols. Get the right laser treatment for your facial concerns. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="laser-treatment-for-face-in-vadodara"
      content={content}
    />
  );
}
