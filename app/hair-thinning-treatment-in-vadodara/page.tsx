import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Thinning Treatment Vadodara | Get Density | ₹2,000",
  description: "💇 Hair thinning treatment in Vadodara from ₹2,000 ✓ Restore density ✓ PRP + medicines ✓ Stop thinning ✓ Thicker hair in 3 months. Book consultation now!",
  keywords: "hair thinning treatment vadodara, thinning hair solutions, restore hair density vadodara, thin hair near me",
};

export default function HairThinningTreatmentPage() {
  const content = {
    heroTitle: "Hair Thinning Treatment in Vadodara",
    heroSubtitle: "Restore Volume and Density",
    
    introContent: `Hair thinning is when your hair gradually loses volume without obvious bald patches. The scalp becomes more visible, ponytails feel thinner, and hair lacks its previous body. It's often more distressing than obvious baldness because the change is subtle but relentless.

Thinning happens because individual hairs are growing finer, growth phases are shortening, and some follicles stop producing visible hair. Treatment reverses this — stimulating thicker hair production and reactivating slowing follicles.

We specialize in treating hair thinning, restoring the density and volume that makes hair look healthy and full. Various treatments can address the underlying causes and restore hair's appearance.`,

    whyChooseUs: [
      "Thinning specialists",
      "Density restoration focus",
      "Multiple treatment approaches",
      "Visible volume improvement",
      "Long-term maintenance",
      "Natural-looking results"
    ],

    services: [
      {
        title: "Thinning Assessment",
        description: "Understanding your thinning pattern and causes."
      },
      {
        title: "PRP Therapy",
        description: "Growth factors to thicken and revitalize hair."
      },
      {
        title: "GFC Treatment",
        description: "Concentrated growth factors for density improvement."
      },
      {
        title: "Medical Management",
        description: "Medications to stop thinning progression."
      },
      {
        title: "Mesotherapy",
        description: "Nutrient injections for hair thickening."
      },
      {
        title: "Laser Therapy",
        description: "LLLT to stimulate follicles and improve density."
      }
    ],

    processSteps: [
      {
        title: "Evaluation",
        description: "Assessing thinning pattern and severity."
      },
      {
        title: "Cause Investigation",
        description: "Finding reasons for hair thinning."
      },
      {
        title: "Treatment",
        description: "Starting appropriate thickening protocol."
      },
      {
        title: "Density Building",
        description: "Progressive improvement over treatment course."
      }
    ],

    faqItems: [
      {
        question: "Why is my hair thinning?",
        answer: "Common causes: genetics, hormones, nutritional deficiencies, age, stress. Evaluation helps identify your specific cause."
      },
      {
        question: "Can thinning hair become thick again?",
        answer: "Often yes. Treatment can restore significant density, especially if started before extensive miniaturization."
      },
      {
        question: "How long until I see improvement?",
        answer: "Usually 3-6 months for visible density improvement. Hair growth is gradual — patience is key."
      },
      {
        question: "Is hair thinning reversible?",
        answer: "In most cases, significant improvement is possible. The earlier treatment starts, the better the outcome."
      },
      {
        question: "Will I need lifelong treatment?",
        answer: "Often maintenance is needed to sustain results. We'll discuss realistic expectations and long-term plans."
      }
    ],

    ctaText: "Stop Hair Thinning Now",
    ctaDescription: "Restore your hair's volume and density. Expert treatment for thinning hair. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-thinning-treatment-in-vadodara"
      content={content}
    />
  );
}
