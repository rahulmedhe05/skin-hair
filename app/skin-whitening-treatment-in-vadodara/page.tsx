import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Whitening Treatment Vadodara | Safe & Natural | Book",
  description: "✨ Skin whitening in Vadodara ✓ Safe, medically supervised ✓ Glutathione + peels ✓ 2-3 shades brighter ✓ No harmful chemicals. Starting ₹3,000. Book now!",
  keywords: "skin whitening vadodara, skin brightening treatment, skin lightening vadodara, glow treatment vadodara",
};

export default function SkinWhiteningTreatmentPage() {
  const content = {
    heroTitle: "Skin Brightening Treatment in Vadodara",
    heroSubtitle: "Safe, Medical Approaches to Radiant Skin",
    
    introContent: `Let's be clear about skin brightening: the goal is healthy, even-toned, radiant skin — not changing your natural complexion. Medical skin brightening addresses dullness, uneven patches, and tired-looking skin to reveal your skin's natural glow.

Dangerous skin lightening with mercury or harsh chemicals isn't what we offer. Instead, we use safe, medically-supervised approaches that improve skin quality, reduce pigmentation irregularities, and enhance natural radiance.

The result is skin that looks healthy and vibrant — clearer, more even, more luminous. Your best skin, not someone else's.`,

    whyChooseUs: [
      "Safe, medical approaches only",
      "Focus on skin health and radiance",
      "Even tone rather than bleaching",
      "No harmful chemicals",
      "Medically supervised protocols",
      "Sustainable, healthy results"
    ],

    services: [
      {
        title: "Skin Analysis",
        description: "Understanding what's causing dullness or uneven tone — pigmentation, texture, dead skin buildup, or other factors."
      },
      {
        title: "Professional Peels",
        description: "Controlled exfoliation to remove dull surface skin and reveal fresher, brighter layers."
      },
      {
        title: "Brightening Treatments",
        description: "Medical-grade products that improve skin luminosity safely."
      },
      {
        title: "Laser Toning",
        description: "Gentle laser treatment to even out skin tone and improve radiance."
      },
      {
        title: "Glutathione Therapy",
        description: "For appropriate candidates — antioxidant therapy that can improve skin quality."
      },
      {
        title: "Maintenance Protocol",
        description: "Home care routine to maintain bright, healthy-looking skin."
      }
    ],

    processSteps: [
      {
        title: "Skin Assessment",
        description: "Determining why your skin looks dull or uneven."
      },
      {
        title: "Safe Protocol Design",
        description: "Choosing medical approaches appropriate for your skin."
      },
      {
        title: "Progressive Treatment",
        description: "Gradual improvement through safe, effective methods."
      },
      {
        title: "Maintenance Phase",
        description: "Keeping skin bright and healthy long-term."
      }
    ],

    faqItems: [
      {
        question: "Is skin whitening safe?",
        answer: "Medical skin brightening using safe, approved products and procedures — yes. Products containing mercury or harsh bleaching agents — absolutely not, and we don't use them."
      },
      {
        question: "What results can I expect?",
        answer: "Healthier-looking skin, reduced dullness, more even tone, natural radiance. Your skin at its best, not a different complexion entirely."
      },
      {
        question: "Are the results permanent?",
        answer: "Skin health requires ongoing care. Results are maintained with proper home care and sun protection. Occasional maintenance treatments help."
      },
      {
        question: "How long does treatment take?",
        answer: "Visible improvement in 4-6 weeks for most patients. Full results develop over several months of treatment."
      },
      {
        question: "Will my skin get darker again?",
        answer: "Without sun protection, yes. Consistent sunscreen is essential to maintain results. We emphasize this as part of treatment."
      }
    ],

    ctaText: "Achieve Your Skin's Natural Radiance",
    ctaDescription: "Healthy, bright, even-toned skin through safe medical approaches. No harsh chemicals, no dangerous shortcuts. Book your brightening consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-whitening-treatment-in-vadodara"
      content={content}
    />
  );
}
