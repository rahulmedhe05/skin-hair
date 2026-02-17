import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Leading Glowing Skin Treatment in Vadodara | Prime One Clinic",
  description: "✅ Glowing Skin Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "glowing, skin, treatment vadodara, glowing skin treatment near me, best glowing skin vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/glowing-skin-treatment-in-vadodara",
  },
  openGraph: {
    title: "Leading Glowing Skin Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Glowing Skin Treatment by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/glowing-skin-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function GlowingSkinTreatmentPage() {
  const content = {
    heroTitle: "Leading Glowing Skin Treatment in Vadodara",
    heroSubtitle: "Clinically Proven Results with Glowing Skin Treatment",
    
    introContent: `Uneven skin tone and pigmentation issues are among the most common concerns we see at our Vadodara clinic. Glowing Skin Treatment requires both expertise and patience — there are no instant fixes, but with the right approach, significant improvement is absolutely achievable.

Pigmentation develops through complex biological processes involving melanin production, sun exposure, hormonal changes, inflammation, and genetic factors. Different types of pigmentation — melasma, post-inflammatory hyperpigmentation, sun spots, and others — require different treatment strategies. That's why proper diagnosis is the essential first step.

Our pigmentation protocols at Prime One Hair & Skin Clinic combine multiple modalities for comprehensive results. This typically includes medical-grade topical treatments, chemical peels customized to your skin type, laser or light-based therapies, and strict sun protection guidance. We also address internal factors through nutritional recommendations and hormonal assessment when relevant.`,

    whyChooseUs: [
          "Maintenance plans to prevent pigmentation recurrence",
          "Medical-grade whitening — safe, regulated formulations",
          "Experience with all pigmentation types including melasma",
          "Advanced laser and peel options for stubborn pigmentation",
          "Combination approach for faster, lasting results",
          "Sun protection education and product recommendations"
    ],

    services: [
          {
                "title": "Glutathione Therapy",
                "description": "Antioxidant therapy that helps reduce melanin production from within, supporting overall skin brightening and health."
          },
          {
                "title": "Maintenance Protocol",
                "description": "Long-term skincare routine with medical-grade products and sun protection strategy to prevent pigmentation recurrence."
          },
          {
                "title": "Intense Pulsed Light (IPL)",
                "description": "Broad-spectrum light that targets pigmented lesions and evens skin tone, particularly effective for sun damage and age spots."
          },
          {
                "title": "Depigmenting Therapy",
                "description": "Medical-grade topical formulations containing hydroquinone, kojic acid, arbutin, and retinoids prescribed at optimal concentrations."
          },
          {
                "title": "Chemical Peels",
                "description": "Targeted peels — glycolic, lactic, TCA, or combination — selected based on your pigmentation depth and skin type for safe, effective lightening."
          },
          {
                "title": "Laser Toning",
                "description": "Low-fluence Q-switched laser sessions that gradually reduce melanin without burning or damaging skin. Safe for Indian skin tones."
          }
    ],

    processSteps: [
          {
                "title": "Consultation",
                "description": "Thorough assessment of your concerns by our specialist with advanced diagnostics."
          },
          {
                "title": "Treatment Plan",
                "description": "Personalized treatment protocol explained clearly with realistic expectations."
          },
          {
                "title": "Treatment Sessions",
                "description": "Professional procedures performed with the latest technology in a comfortable setting."
          },
          {
                "title": "Follow-Up Care",
                "description": "Regular monitoring, progress tracking, and plan adjustments for optimal results."
          }
    ],

    faqItems: [
          {
                "question": "How long does glowing skin treatment take?",
                "answer": "Visible improvement begins within 4-6 weeks for most patients. Complete treatment typically takes 3-6 months depending on the type and depth of pigmentation."
          },
          {
                "question": "Can home remedies treat pigmentation?",
                "answer": "Home remedies rarely provide significant improvement for established pigmentation. Medical-grade treatments penetrate deeper and use higher concentrations of active ingredients for measurable results."
          },
          {
                "question": "What SPF should I use during treatment?",
                "answer": "SPF 50+ broad-spectrum sunscreen is essential during and after pigmentation treatment. We recommend specific products suitable for your skin type."
          },
          {
                "question": "Will pigmentation come back?",
                "answer": "Sun exposure can trigger pigmentation recurrence. We provide comprehensive sun protection guidance and maintenance treatments to minimize this risk."
          },
          {
                "question": "Is glowing skin treatment safe for dark skin?",
                "answer": "Yes, but treatment parameters must be carefully adjusted for darker skin tones. Our specialists have extensive experience treating Indian skin types safely."
          }
    ],

    ctaText: "Ready to Start Your Glowing Skin Treatment Journey?",
    ctaDescription: "Professional glowing skin treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="glowing-skin-treatment-in-vadodara"
      content={content}
    />
  );
}
