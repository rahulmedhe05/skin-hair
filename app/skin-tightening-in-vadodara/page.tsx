import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Tightening Vadodara | Non-Surgical Lift | ₹5,000",
  description: "✨ Skin tightening in Vadodara from ₹5,000 ✓ HIFU, RF, laser ✓ No surgery ✓ Visible lift in 1 session ✓ Treats sagging skin. Look 5 years younger. Book!",
  keywords: "skin tightening vadodara, non surgical skin tightening, hifu vadodara, skin tightening cost",
};

export default function SkinTighteningPage() {
  const content = {
    heroTitle: "Skin Tightening in Vadodara",
    heroSubtitle: "Firm, Lift Without Surgery",
    
    introContent: `Gravity and time show their effects — jawlines soften, cheeks descend, neck skin loosens. The face that once was firm begins to sag. Surgery isn't the only answer anymore.

Non-surgical skin tightening stimulates your body's own collagen production to restore firmness from within. Technologies like radiofrequency, ultrasound, and combination devices can meaningfully lift and tighten without incisions or downtime.

We offer advanced tightening treatments for face and body. Results build gradually as collagen regenerates. The outcome is natural — you look refreshed and firmer, not "done."`,

    whyChooseUs: [
      "Advanced tightening technologies",
      "Non-surgical, no downtime",
      "Face and body treatments",
      "Natural-looking results",
      "Collagen stimulation",
      "Customized treatment plans"
    ],

    services: [
      {
        title: "HIFU Treatment",
        description: "High-intensity focused ultrasound for deep tissue lifting."
      },
      {
        title: "Radiofrequency Tightening",
        description: "RF energy to heat and tighten skin layers."
      },
      {
        title: "Facial Tightening",
        description: "Lifting jowls, jawline, cheeks, and forehead."
      },
      {
        title: "Neck Tightening",
        description: "Addressing loose neck skin and banding."
      },
      {
        title: "Body Skin Tightening",
        description: "Treating lax skin on arms, abdomen, thighs."
      },
      {
        title: "Combination Treatments",
        description: "Multiple modalities for enhanced results."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating skin laxity and determining appropriate treatment."
      },
      {
        title: "Treatment Planning",
        description: "Creating a protocol based on your goals and skin condition."
      },
      {
        title: "Treatment Sessions",
        description: "Performing tightening treatments with appropriate technology."
      },
      {
        title: "Collagen Building",
        description: "Results develop over weeks as new collagen forms."
      }
    ],

    faqItems: [
      {
        question: "How much tightening can I expect?",
        answer: "Improvement, not transformation. Good for mild to moderate laxity. Severe sagging may need surgery. We set realistic expectations."
      },
      {
        question: "When will I see results?",
        answer: "Some immediate effect, but main results appear over 2-3 months as collagen builds. Continued improvement for up to 6 months."
      },
      {
        question: "Is treatment painful?",
        answer: "Discomfort during treatment varies by technology. Generally tolerable. HIFU can be more uncomfortable than RF."
      },
      {
        question: "How long do results last?",
        answer: "1-2 years typically. Aging continues, so maintenance treatments help sustain results."
      },
      {
        question: "Who is a good candidate?",
        answer: "Those with mild to moderate skin laxity who want improvement without surgery. Not for severe sagging."
      }
    ],

    ctaText: "Lift and Tighten Without Surgery",
    ctaDescription: "Restore firmness non-surgically. Advanced technologies, natural results. Book your skin tightening consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-tightening-in-vadodara"
      content={content}
    />
  );
}
