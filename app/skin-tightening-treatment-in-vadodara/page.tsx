import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Tightening Treatment Vadodara | No Surgery | ₹5,000",
  description: "✨ Skin tightening treatment in Vadodara from ₹5,000 ✓ HIFU & RF technology ✓ No surgery ✓ Instant lift ✓ Face & body. Look years younger. Book now!",
  keywords: "skin tightening treatment vadodara, non surgical skin lift, hifu treatment cost vadodara, skin tightening near me",
};

export default function SkinTighteningTreatmentPage() {
  const content = {
    heroTitle: "Skin Tightening Treatment in Vadodara",
    heroSubtitle: "Lift and Firm Without Surgery",
    
    introContent: `Sagging skin used to mean choosing between accepting it or undergoing surgery. Non-surgical skin tightening changes that equation, offering meaningful lifting and firming through energy-based devices.

Technologies like HIFU (High-Intensity Focused Ultrasound), radiofrequency, and others stimulate collagen production deep in the skin. The result is tighter, firmer skin that develops gradually as your body builds new collagen.

We offer multiple tightening technologies for face and body. Results are subtle but real — you'll look refreshed and firmer, not "lifted." It's improvement without the telltale signs of surgery.`,

    whyChooseUs: [
      "Multiple tightening technologies",
      "Non-surgical approach",
      "No downtime options",
      "Natural-looking lift",
      "Face and body treatments",
      "Collagen stimulation"
    ],

    services: [
      {
        title: "HIFU Treatment",
        description: "Deep ultrasound energy for significant lifting."
      },
      {
        title: "Radiofrequency Tightening",
        description: "RF energy for skin firming and tightening."
      },
      {
        title: "Face Lifting",
        description: "Non-surgical lifting for jowls, jawline, cheeks."
      },
      {
        title: "Neck Tightening",
        description: "Firming loose neck skin."
      },
      {
        title: "Body Skin Tightening",
        description: "Treating lax skin on arms, abdomen, thighs."
      },
      {
        title: "Combination Protocols",
        description: "Multiple technologies for enhanced results."
      }
    ],

    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating skin laxity and realistic expectations."
      },
      {
        title: "Technology Selection",
        description: "Choosing appropriate device and settings."
      },
      {
        title: "Treatment",
        description: "Performing tightening treatment."
      },
      {
        title: "Collagen Building",
        description: "Results develop over 2-3 months as collagen regenerates."
      }
    ],

    faqItems: [
      {
        question: "How much tightening can I expect?",
        answer: "Improvement, not transformation. Good for mild to moderate laxity. Severe sagging may still need surgery."
      },
      {
        question: "Is there any downtime?",
        answer: "Minimal to none with most treatments. Some may have mild redness for a day."
      },
      {
        question: "When will I see results?",
        answer: "Some immediate effect from tissue contraction. Full results over 2-3 months as collagen builds."
      },
      {
        question: "How long do results last?",
        answer: "1-2 years typically. Maintenance treatments help sustain results."
      },
      {
        question: "Is it painful?",
        answer: "Varies by treatment. HIFU can be uncomfortable; RF is generally comfortable. We manage comfort."
      }
    ],

    ctaText: "Tighten Your Skin Non-Surgically",
    ctaDescription: "Firmer, tighter skin without surgery. Advanced technologies for natural lift. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-tightening-treatment-in-vadodara"
      content={content}
    />
  );
}
