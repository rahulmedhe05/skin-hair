import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Laser Hair Removal Vadodara ₹1,500 | FDA Approved | Book",
  description: "✨ Laser hair removal in Vadodara from ₹1,500/session ✓ US FDA approved ✓ Safe for Indian skin ✓ 90% permanent reduction. Full body available. Book now!",
  keywords: "laser hair removal vadodara, permanent hair removal vadodara, laser treatment vadodara, full body laser hair removal cost",
};

export default function LaserHairRemovalPage() {
  const content = {
    heroTitle: "Laser Hair Removal in Vadodara",
    heroSubtitle: "Permanent Freedom from Unwanted Hair",
    
    introContent: `Waxing, shaving, threading — the endless cycle of hair removal that never actually ends. Laser hair removal offers something different: permanent reduction that frees you from the recurring hassle.

Laser technology has advanced significantly. Modern diode and ND:YAG lasers work safely and effectively on Indian skin tones — something older lasers couldn't do well. Multiple wavelengths target hair follicles precisely while protecting surrounding skin.

We've invested in proper laser equipment because results depend on it. Underpowered machines don't produce lasting results. Our lasers deliver the energy needed for permanent hair reduction while maintaining safety for our skin types.`,

    whyChooseUs: [
      "FDA-approved laser technology",
      "Safe for Indian skin tones",
      "Permanent hair reduction results",
      "Multiple laser wavelengths available",
      "Experienced laser technicians",
      "Transparent pricing, no hidden costs"
    ],

    services: [
      {
        title: "Face Laser Hair Removal",
        description: "Upper lip, chin, sideburns, full face — permanent solution for facial hair."
      },
      {
        title: "Underarm Laser",
        description: "One of the most popular areas. Freedom from regular shaving or waxing."
      },
      {
        title: "Bikini & Brazilian",
        description: "Comfortable, hygienic, lasting results for intimate areas."
      },
      {
        title: "Full Arms & Legs",
        description: "Large area treatment for complete hair-free limbs."
      },
      {
        title: "Full Body Laser",
        description: "Comprehensive packages covering all areas. Long-term investment in convenience."
      },
      {
        title: "Men's Laser Hair Removal",
        description: "Back, chest, shoulders, beard shaping — laser services for men."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Assessing your hair type, skin type, and creating realistic expectations."
      },
      {
        title: "Patch Test",
        description: "Testing laser settings on a small area to ensure appropriate parameters."
      },
      {
        title: "Treatment Sessions",
        description: "Multiple sessions targeting hair in different growth phases."
      },
      {
        title: "Maintenance",
        description: "Occasional touch-ups as needed after completing primary course."
      }
    ],

    faqItems: [
      {
        question: "Is laser hair removal permanent?",
        answer: "It's permanent hair reduction — typically 80-90% reduction after a full course. Some fine hair may regrow and need occasional maintenance."
      },
      {
        question: "Is it safe for Indian skin?",
        answer: "Yes, with appropriate laser selection and settings. ND:YAG and specific diode wavelengths are safe for darker skin tones. We use appropriate technology."
      },
      {
        question: "How many sessions are needed?",
        answer: "Usually 6-8 sessions for significant reduction. Spacing of 4-6 weeks between sessions. Results vary by individual."
      },
      {
        question: "Does it hurt?",
        answer: "Some discomfort — like rubber band snaps. Modern machines have cooling to minimize pain. Most people tolerate it well."
      },
      {
        question: "What's the cost for full body?",
        answer: "We offer transparent package pricing. Consult for exact quote based on your specific requirements."
      }
    ],

    ctaText: "End the Hair Removal Hassle",
    ctaDescription: "Permanent hair reduction is achievable. Stop wasting time and money on temporary methods. Book your laser consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="laser-hair-removal-in-vadodara"
      content={content}
    />
  );
}
