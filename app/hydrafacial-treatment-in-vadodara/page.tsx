import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "HydraFacial Treatment Vadodara ₹3,500 | Deep Clean | Book",
  description: "✨ HydraFacial treatment in Vadodara ₹3,500 ✓ Deep cleansing ✓ Hydration boost ✓ Instant glow ✓ Zero downtime ✓ All skin types. Book your session now!",
  keywords: "hydrafacial vadodara, hydrafacial treatment vadodara, hydrafacial cost vadodara, hydrafacial near me",
};

export default function HydraFacialTreatmentPage() {
  const content = {
    heroTitle: "HydraFacial Treatment in Vadodara",
    heroSubtitle: "The Red Carpet Facial",
    
    introContent: `HydraFacial is the facial celebrities get before events — and there's a reason. It combines cleansing, exfoliation, extraction, and hydration in one treatment with immediate, visible results and no downtime.

The patented technology uses vortex suction to remove impurities while simultaneously delivering serums into the skin. It's thorough yet gentle, providing deep cleansing without the redness and discomfort of traditional extractions.

We offer HydraFacial as standalone treatment or combined with boosters for specific concerns. Whether you want routine maintenance, pre-event glow, or targeted treatment, HydraFacial delivers.`,

    whyChooseUs: [
      "Authentic HydraFacial system",
      "Trained technicians",
      "Customizable boosters",
      "Immediate results",
      "No downtime",
      "Suitable for all skin types"
    ],

    services: [
      {
        title: "Signature HydraFacial",
        description: "Complete HydraFacial experience — cleanse, extract, hydrate."
      },
      {
        title: "HydraFacial with Boosters",
        description: "Added boosters for specific concerns — brightening, anti-aging, acne."
      },
      {
        title: "HydraFacial for Acne",
        description: "Targeting congested, acne-prone skin."
      },
      {
        title: "HydraFacial for Pigmentation",
        description: "Brightening focus for uneven skin tone."
      },
      {
        title: "Pre-Event HydraFacial",
        description: "Perfect glow for special occasions."
      },
      {
        title: "HydraFacial Series",
        description: "Multiple sessions for ongoing skin improvement."
      }
    ],

    processSteps: [
      {
        title: "Cleanse + Peel",
        description: "Gentle exfoliation to uncover fresh skin."
      },
      {
        title: "Extract + Hydrate",
        description: "Painless extraction while infusing hydration."
      },
      {
        title: "Fuse + Protect",
        description: "Saturating skin with antioxidants and peptides."
      },
      {
        title: "Glow",
        description: "Walk out with immediately visible, glowing skin."
      }
    ],

    faqItems: [
      {
        question: "Why is HydraFacial so popular?",
        answer: "Immediate results, no downtime, comfortable procedure, suitable for all skin types. You can go straight back to your day looking better."
      },
      {
        question: "How often should I get HydraFacial?",
        answer: "Monthly for maintenance. Before events for that glow. More frequently initially if addressing specific concerns."
      },
      {
        question: "Is it better than regular facials?",
        answer: "Different — HydraFacial's technology provides deeper cleansing and better product penetration. Results are more immediate."
      },
      {
        question: "Can I wear makeup after?",
        answer: "Yes — no downtime. Though your skin looks so good, you might not want to!"
      },
      {
        question: "Is it suitable for sensitive skin?",
        answer: "Yes — HydraFacial is gentle despite being thorough. We can adjust settings for sensitive skin."
      }
    ],

    ctaText: "Get the HydraFacial Glow",
    ctaDescription: "Instant results, no downtime. The facial everyone's talking about. Book your HydraFacial today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hydrafacial-treatment-in-vadodara"
      content={content}
    />
  );
}
