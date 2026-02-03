import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Brightening Vadodara ₹2,500 | Instant Glow | Book",
  description: "✨ Skin brightening in Vadodara from ₹2,500 ✓ Instant radiance ✓ Dull skin transformed ✓ Safe treatments ✓ Lasting glow. Look fresh & vibrant. Book now!",
  keywords: "skin brightening vadodara, skin glow treatment vadodara, radiant skin treatment, glowing skin vadodara",
};

export default function SkinBrighteningPage() {
  const content = {
    heroTitle: "Skin Brightening Treatment in Vadodara",
    heroSubtitle: "Reveal Your Natural Radiance",
    
    introContent: `Dull, tired-looking skin robs you of your natural radiance. Pollution, stress, lack of sleep, and accumulated dead cells make skin look lifeless. You want that healthy glow, not a painted-on look.

Skin brightening is different from bleaching — it's about enhancing your skin's natural radiance, not changing your complexion. Proper brightening removes dullness, evens tone, and brings out the healthy glow your skin should have.

We offer brightening treatments that work with your skin's natural tone. Through facials, peels, and targeted treatments, we help you achieve radiant, healthy-looking skin that glows from within.`,

    whyChooseUs: [
      "Natural brightening approach",
      "Not bleaching — enhancing",
      "Multiple treatment options",
      "Visible radiance improvement",
      "Safe for all skin types",
      "Sustainable results"
    ],

    services: [
      {
        title: "Brightening Facials",
        description: "Specialized facials targeting dullness and enhancing radiance."
      },
      {
        title: "Chemical Peels",
        description: "Exfoliating peels to reveal brighter, fresher skin."
      },
      {
        title: "Glutathione Treatment",
        description: "Antioxidant therapy for overall skin brightening."
      },
      {
        title: "Carbon Peel",
        description: "Laser treatment for instant brightness and glow."
      },
      {
        title: "HydraFacial",
        description: "Deep cleansing and hydration for glowing skin."
      },
      {
        title: "Combination Protocols",
        description: "Multiple treatments for maximum brightening."
      }
    ],

    processSteps: [
      {
        title: "Skin Assessment",
        description: "Evaluating skin condition and causes of dullness."
      },
      {
        title: "Treatment Plan",
        description: "Creating a brightening protocol for your skin."
      },
      {
        title: "Treatment Sessions",
        description: "Performing treatments for progressive brightening."
      },
      {
        title: "Maintenance",
        description: "Ongoing care to maintain radiant skin."
      }
    ],

    faqItems: [
      {
        question: "Is skin brightening the same as whitening?",
        answer: "No — brightening enhances your natural radiance and evenness. It's not about changing your skin color."
      },
      {
        question: "When will I see results?",
        answer: "Some glow immediately after treatment. Full brightening develops over a series of sessions."
      },
      {
        question: "Are brightening treatments safe?",
        answer: "When done properly, yes. We use safe methods appropriate for your skin type."
      },
      {
        question: "How do I maintain bright skin?",
        answer: "Sun protection, proper skincare, and periodic maintenance treatments. We provide guidance."
      },
      {
        question: "Can I get brightening if I have sensitive skin?",
        answer: "Yes — we customize treatment intensity for sensitive skin. Gentle options are available."
      }
    ],

    ctaText: "Get Glowing, Radiant Skin",
    ctaDescription: "Dull skin doesn't have to be your normal. Reveal your natural radiance. Book your brightening consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-brightening-treatment-in-vadodara"
      content={content}
    />
  );
}
