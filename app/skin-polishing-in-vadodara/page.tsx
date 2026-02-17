import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Polishing Vadodara ₹2,000 | Glass Skin | Book Now",
  description: "✨ Skin polishing in Vadodara ₹2,000 ✓ Glass skin effect ✓ Microdermabrasion ✓ Remove dead cells ✓ Smooth, radiant skin. Perfect for weddings. Book now!",
  keywords: "skin polishing vadodara, skin polish treatment vadodara, microdermabrasion cost vadodara, skin polishing near me",
};

export default function SkinPolishingPage() {
  const content = {
    heroTitle: "Skin Polishing Treatment in Vadodara",
    heroSubtitle: "Reveal the Smooth Skin Underneath",
    
    introContent: `Your skin constantly renews itself, but dead cells accumulate on the surface — making skin look dull, rough, and uneven. Skin polishing removes this buildup, revealing the fresher, smoother skin beneath.

Professional skin polishing goes beyond what scrubs and exfoliants can do at home. Using microdermabrasion and clinical exfoliation techniques, we remove dead cell layers evenly and safely, stimulating skin renewal in the process.

The result is immediately visible — smoother texture, brighter tone, healthier-looking skin. Regular polishing maintains this fresh-faced appearance and improves how other products absorb and work.`,

    whyChooseUs: [
      "Professional-grade microdermabrasion",
      "Safe, controlled exfoliation",
      "Immediate visible improvement",
      "Enhanced product absorption",
      "Suitable for most skin types",
      "No significant downtime"
    ],

    services: [
      {
        title: "Diamond Microdermabrasion",
        description: "Diamond-tip technology for precise, controlled exfoliation. The gold standard in skin polishing."
      },
      {
        title: "Crystal Microdermabrasion",
        description: "Fine crystal spray technique for thorough dead cell removal."
      },
      {
        title: "Face Polishing",
        description: "Complete facial skin polishing for bright, smooth complexion."
      },
      {
        title: "Body Polishing",
        description: "Arms, back, neck — polishing treatment for body areas with dull or rough skin."
      },
      {
        title: "Pre-Event Polish",
        description: "Intensive polishing before weddings, parties, or photos for maximum glow."
      },
      {
        title: "Combination Protocols",
        description: "Polishing combined with peels or facials for enhanced results."
      }
    ],

    processSteps: [
      {
        title: "Skin Preparation",
        description: "Cleansing and prepping skin for polishing treatment."
      },
      {
        title: "Controlled Exfoliation",
        description: "Microdermabrasion removing dead cells layer by layer."
      },
      {
        title: "Debris Removal",
        description: "Thorough clearing of loosened cells and debris."
      },
      {
        title: "Soothing Finish",
        description: "Calming and hydrating post-treatment care."
      }
    ],

    faqItems: [
      {
        question: "How is skin polishing different from home exfoliation?",
        answer: "Much more effective. Professional equipment removes dead cells more thoroughly and evenly than manual scrubbing, with better control and safety."
      },
      {
        question: "Does skin polishing hurt?",
        answer: "No — feels like a mild scratching sensation. Most people find it comfortable, even pleasant."
      },
      {
        question: "How soon will I see results?",
        answer: "Immediately. Your skin will look smoother and brighter right after the treatment."
      },
      {
        question: "Is there any downtime?",
        answer: "Minimal — some mild redness that fades within hours. You can continue normal activities."
      },
      {
        question: "How often should I polish my skin?",
        answer: "Every 3-4 weeks for maintenance. More frequent initially if addressing significant dullness or texture issues."
      }
    ],

    ctaText: "Polish Away the Dullness",
    ctaDescription: "Smooth, bright, fresh skin is underneath the dull surface layer. Professional polishing reveals it instantly. Book your skin polishing session.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-polishing-in-vadodara"
      content={content}
    />
  );
}
