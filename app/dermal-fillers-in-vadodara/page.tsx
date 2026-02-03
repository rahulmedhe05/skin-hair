import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Dermal Fillers Vadodara ₹12,000 | Instant Volume | Book",
  description: "✨ Dermal fillers in Vadodara from ₹12,000 ✓ US FDA approved ✓ Instant results ✓ Natural look ✓ Expert injectors. Lips, cheeks, jawline. Book consultation!",
  keywords: "dermal fillers vadodara, lip filler vadodara, cheek filler vadodara, filler cost vadodara",
};

export default function DermalFillersPage() {
  const content = {
    heroTitle: "Dermal Fillers in Vadodara",
    heroSubtitle: "Restore Volume & Contour Naturally",
    
    introContent: `As we age, we lose facial volume — cheeks flatten, under-eyes hollow, lips thin, and facial contours soften. Dermal fillers replace this lost volume, restoring youthful structure without surgery.

Modern hyaluronic acid fillers are remarkably sophisticated. Different densities for different areas. Softer fillers for lips, firmer ones for cheeks, specific formulations for under-eyes. The right filler in the right place produces natural results.

Our approach prioritizes natural enhancement. We enhance your features, not create new ones. The goal is looking like a refreshed version of yourself, not like you've had work done.`,

    whyChooseUs: [
      "Multiple filler types available",
      "Natural-looking results priority",
      "Understanding of facial proportions",
      "Conservative approach to avoid overdone look",
      "Premium branded fillers only",
      "Safe injection techniques"
    ],

    services: [
      {
        title: "Lip Fillers",
        description: "Natural lip enhancement — subtle volume, defined borders, balanced proportions."
      },
      {
        title: "Cheek Fillers",
        description: "Restoring mid-face volume for lifted, contoured appearance."
      },
      {
        title: "Under-Eye Fillers",
        description: "Treating hollow under-eyes and tear troughs. Requires specialized technique."
      },
      {
        title: "Jawline Contouring",
        description: "Defining jawline for more structured facial appearance."
      },
      {
        title: "Nasolabial Folds",
        description: "Softening the lines from nose to mouth that deepen with age."
      },
      {
        title: "Chin Enhancement",
        description: "Non-surgical chin projection and definition."
      }
    ],

    processSteps: [
      {
        title: "Facial Assessment",
        description: "Analyzing your facial structure and discussing what enhancement would be beneficial."
      },
      {
        title: "Filler Selection",
        description: "Choosing appropriate filler type and amount for each area."
      },
      {
        title: "Precise Injection",
        description: "Strategic placement with appropriate technique for each area."
      },
      {
        title: "Immediate Review",
        description: "Assessing results and ensuring symmetry and natural appearance."
      }
    ],

    faqItems: [
      {
        question: "Will fillers look natural?",
        answer: "With appropriate amounts and placement, yes. Unnatural-looking fillers result from too much product or poor placement. Our conservative approach prioritizes natural results."
      },
      {
        question: "How long do fillers last?",
        answer: "Typically 9-18 months depending on the area and filler type. Lip fillers tend to metabolize faster. Cheek fillers last longer."
      },
      {
        question: "Is the procedure painful?",
        answer: "Most fillers contain numbing agent. Additional numbing cream is applied. Discomfort is minimal for most patients."
      },
      {
        question: "What if I don't like the results?",
        answer: "Hyaluronic acid fillers can be dissolved if needed. However, this is rarely necessary with proper assessment and conservative approach."
      },
      {
        question: "Can fillers be combined with Botox?",
        answer: "Yes, often done together. Botox for dynamic wrinkles, fillers for volume. They complement each other well."
      }
    ],

    ctaText: "Restore Your Facial Volume",
    ctaDescription: "Natural-looking enhancement with premium dermal fillers. Look refreshed, not overdone. Book your filler consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="dermal-fillers-in-vadodara"
      content={content}
    />
  );
}
