import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Botox Vadodara ₹4,000 | Silky Smooth Hair | Book",
  description: "💇 Hair botox in Vadodara ₹4,000 ✓ Silky smooth hair ✓ Frizz-free for 3 months ✓ Deep conditioning ✓ No formaldehyde. Damaged hair repaired. Book now!",
  keywords: "botox hair treatment vadodara, hair botox vadodara, hair botox cost vadodara, hair smoothing near me",
};

export default function BotoxHairTreatmentPage() {
  const content = {
    heroTitle: "Botox Hair Treatment in Vadodara",
    heroSubtitle: "Transform Damaged, Frizzy Hair",
    
    introContent: `Hair Botox isn't the same Botox used on skin — it's a deep conditioning treatment that fills in damaged, porous hair fibers. The result is smoother, shinier, healthier-looking hair without harsh straightening chemicals.

Damaged hair has gaps and holes in its structure from heat styling, coloring, and environmental damage. Hair Botox fills these gaps, restoring smoothness and sealing the cuticle for lasting improvement.

We offer hair Botox as a conditioning treatment separate from chemical straightening. It's about hair health and manageability, not altering your natural texture permanently.`,

    whyChooseUs: [
      "Genuine hair Botox products",
      "Professional application",
      "No harsh chemicals",
      "Hair health focus",
      "Visible improvement",
      "Suitable for colored hair"
    ],

    services: [
      {
        title: "Classic Hair Botox",
        description: "Full deep conditioning treatment for damaged hair."
      },
      {
        title: "Frizz Control Botox",
        description: "Targeting frizzy, unmanageable hair."
      },
      {
        title: "Color-Treated Hair Botox",
        description: "Safe treatment for colored, highlighted hair."
      },
      {
        title: "Damaged Hair Restoration",
        description: "Intensive treatment for severely damaged hair."
      },
      {
        title: "Shine Enhancement",
        description: "Restoring shine to dull, lifeless hair."
      },
      {
        title: "Maintenance Treatment",
        description: "Regular sessions for ongoing hair health."
      }
    ],

    processSteps: [
      {
        title: "Hair Assessment",
        description: "Evaluating hair condition and damage level."
      },
      {
        title: "Preparation",
        description: "Cleansing and preparing hair for treatment."
      },
      {
        title: "Application",
        description: "Applying hair Botox product and processing."
      },
      {
        title: "Sealing",
        description: "Heat sealing for lasting results."
      }
    ],

    faqItems: [
      {
        question: "Is hair Botox the same as straightening?",
        answer: "No — hair Botox is conditioning, not chemical straightening. It smooths without permanently altering your texture."
      },
      {
        question: "How long does it last?",
        answer: "2-4 months typically, depending on hair type and maintenance."
      },
      {
        question: "Can I color my hair after Botox treatment?",
        answer: "Yes — wait about 2 weeks. Hair Botox doesn't interfere with coloring."
      },
      {
        question: "Will it make curly hair straight?",
        answer: "No — it reduces frizz and adds smoothness but doesn't eliminate natural texture like chemical treatments."
      },
      {
        question: "Is it safe for all hair types?",
        answer: "Yes — hair Botox is safe for all hair types including color-treated, highlighted, and chemically processed hair."
      }
    ],

    ctaText: "Transform Your Hair with Botox Treatment",
    ctaDescription: "Deep conditioning for damaged, frizzy hair. Smooth, shiny, healthy results. Book your hair Botox treatment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="botox-hair-treatment-in-vadodara"
      content={content}
    />
  );
}
