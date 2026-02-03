import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Tan Removal Treatment Vadodara ₹1,500 | Instant Detan",
  description: "✨ Tan removal in Vadodara from ₹1,500 ✓ Instant de-tan ✓ Restore natural skin tone ✓ Face & body ✓ Sun damage reversed. Perfect for summers. Book now!",
  keywords: "tan removal vadodara, de-tan treatment vadodara, sun tan removal cost, tan removal near me",
};

export default function TanRemovalTreatmentPage() {
  const content = {
    heroTitle: "Tan Removal Treatment in Vadodara",
    heroSubtitle: "Restore Your Natural Skin Tone",
    
    introContent: `Vadodara summers are brutal on skin. Strong sun exposure darkens skin, leaving you several shades darker than your natural tone. Home remedies take forever. Professional tan removal speeds up the process significantly.

Tan is accumulated melanin in the outer skin layers — your skin's response to UV damage. Removing it involves exfoliating those darkened layers while preventing new melanin production. Professional treatments do this faster and more effectively than home approaches.

We offer multiple tan removal options depending on how deep the tan is and how quickly you want results. From gentle de-tan facials for mild tanning to stronger interventions for stubborn sun damage.`,

    whyChooseUs: [
      "Multiple tan removal modalities",
      "Treatment matched to tan severity",
      "Fast results when needed",
      "Safe for Indian skin",
      "Addresses underlying sun damage",
      "Prevention advice included"
    ],

    services: [
      {
        title: "De-Tan Facials",
        description: "Professional facials specifically designed to lift surface tan and brighten skin."
      },
      {
        title: "Chemical Peels",
        description: "Controlled exfoliation to remove tanned layers and reveal untanned skin beneath."
      },
      {
        title: "Laser Toning",
        description: "For deeper or stubborn tan — laser treatment to break up accumulated pigment."
      },
      {
        title: "Body Tan Removal",
        description: "Arms, neck, back — treating tan on body areas exposed to sun."
      },
      {
        title: "Quick Treatments",
        description: "When you need fast results for an upcoming event."
      },
      {
        title: "Sun Damage Repair",
        description: "Addressing deeper effects of sun exposure beyond surface tan."
      }
    ],

    processSteps: [
      {
        title: "Tan Assessment",
        description: "Evaluating depth of tan and underlying sun damage."
      },
      {
        title: "Treatment Selection",
        description: "Choosing appropriate approach based on your timeline and tan severity."
      },
      {
        title: "Active De-Tanning",
        description: "Treatment sessions to remove accumulated tan."
      },
      {
        title: "Protection Protocol",
        description: "Preventing re-tanning after treatment."
      }
    ],

    faqItems: [
      {
        question: "How quickly can tan be removed?",
        answer: "Surface tan: often visible improvement in one session. Deeper tan: 2-4 sessions over a couple of weeks. Very deep tan: may take longer."
      },
      {
        question: "Is professional tan removal better than home remedies?",
        answer: "Significantly faster and more effective. What takes months at home can be achieved in weeks professionally."
      },
      {
        question: "Will my skin return to exact original color?",
        answer: "Usually yes for recent tan. Very old, deep tan may not return to 100% original, but significant improvement is typical."
      },
      {
        question: "Is there any downtime?",
        answer: "Depends on treatment chosen. Facials have no downtime. Stronger peels may have a day or two of mild peeling."
      },
      {
        question: "How do I prevent getting tanned again?",
        answer: "Sunscreen, reapplied regularly. Physical protection like hats and sleeves. Avoiding peak sun hours. We provide complete prevention guidance."
      }
    ],

    ctaText: "Remove Your Tan Quickly",
    ctaDescription: "Don't wait months for tan to fade naturally. Professional treatment restores your skin tone faster. Book your tan removal session today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="tan-removal-treatment-in-vadodara"
      content={content}
    />
  );
}
