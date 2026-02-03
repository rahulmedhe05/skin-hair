import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Microneedling Vadodara ₹3,000 | Collagen Boost | Book",
  description: "✅ Microneedling in Vadodara ₹3,000/session ✓ Boosts collagen by 400% ✓ Reduces scars & wrinkles ✓ Minimal downtime. Visible results in 4 sessions. Call!",
  keywords: "microneedling vadodara, dermaroller vadodara, microneedling cost vadodara, collagen induction therapy",
};

export default function MicroneedlingPage() {
  const content = {
    heroTitle: "Microneedling Treatment in Vadodara",
    heroSubtitle: "Trigger Your Skin's Natural Healing",
    
    introContent: `Microneedling creates thousands of tiny channels in the skin, triggering a healing response that produces new collagen and elastin. Your skin essentially rebuilds itself — smoother, firmer, more even.

This controlled injury-and-healing process is remarkably effective for acne scars, fine lines, enlarged pores, and overall texture improvement. The results are natural because they come from your own collagen production.

Professional microneedling uses medical-grade devices with precise depth control — very different from home derma rollers. Proper technique ensures consistent results across the treatment area while maintaining safety.`,

    whyChooseUs: [
      "Medical-grade microneedling devices",
      "Precise depth control",
      "Trained, experienced practitioners",
      "Sterile clinical environment",
      "Combined with growth factors for enhanced results",
      "Safe for most skin types"
    ],

    services: [
      {
        title: "Microneedling for Acne Scars",
        description: "Breaking down scar tissue and stimulating collagen to fill depressed scars."
      },
      {
        title: "Anti-Aging Microneedling",
        description: "Collagen stimulation for fine lines, wrinkles, and improved skin texture."
      },
      {
        title: "PRP Microneedling",
        description: "Combining microneedling with platelet-rich plasma for enhanced regeneration."
      },
      {
        title: "Stretch Mark Treatment",
        description: "Microneedling to improve the appearance of stretch marks on body areas."
      },
      {
        title: "Pore Reduction",
        description: "Refined skin texture and minimized pore appearance."
      },
      {
        title: "Scalp Microneedling",
        description: "Stimulating hair follicles to support hair growth."
      }
    ],

    processSteps: [
      {
        title: "Numbing Application",
        description: "Topical anesthetic applied 30-45 minutes before treatment."
      },
      {
        title: "Treatment",
        description: "Device passed over treatment area with appropriate depth settings."
      },
      {
        title: "Serum Infusion",
        description: "Growth factors or serums applied to penetrate through open channels."
      },
      {
        title: "Recovery Support",
        description: "Post-treatment care instructions and soothing products."
      }
    ],

    faqItems: [
      {
        question: "Is microneedling painful?",
        answer: "With proper numbing, minimal. You'll feel slight pressure and mild sensation but not significant pain."
      },
      {
        question: "How is professional microneedling different from home derma rollers?",
        answer: "Medical devices have sharper, more precise needles at controlled depths. Home rollers can cause uneven results and higher infection risk. Professional treatment is significantly more effective."
      },
      {
        question: "What's the downtime?",
        answer: "Redness like a sunburn for 1-3 days. You can return to work the next day. Makeup can be applied after 24 hours."
      },
      {
        question: "How many sessions are needed?",
        answer: "Typically 3-6 sessions spaced 4-6 weeks apart for optimal results. More for significant scarring."
      },
      {
        question: "When will I see results?",
        answer: "Initial improvement after healing. Progressive improvement over months as new collagen forms. Final results after completing your session series."
      }
    ],

    ctaText: "Renew Your Skin Naturally",
    ctaDescription: "Professional microneedling triggers your skin's own regeneration. Safer, more effective than home alternatives. Book your microneedling session.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="microneedling-in-vadodara"
      content={content}
    />
  );
}
