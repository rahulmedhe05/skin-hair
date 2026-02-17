import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Depigmentation Treatment in Vadodara | Prime One Clinic",
  description: "Get the best depigmentation treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "depigmentation, treatment vadodara, depigmentation treatment near me, best depigmentation treatment vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/depigmentation-treatment-in-vadodara",
  },
  openGraph: {
    title: "Best Depigmentation Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best depigmentation treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/depigmentation-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function DepigmentationTreatmentPage() {
  const content = {
    heroTitle: "Best Depigmentation Treatment in Vadodara",
    heroSubtitle: "Evidence-Based Depigmentation Treatment That Actually Works",
    
    introContent: `Uneven skin tone and pigmentation issues are among the most common concerns we see at our Vadodara clinic. Depigmentation Treatment requires both expertise and patience — there are no instant fixes, but with the right approach, significant improvement is absolutely achievable.

Pigmentation develops through complex biological processes involving melanin production, sun exposure, hormonal changes, inflammation, and genetic factors. Different types of pigmentation — melasma, post-inflammatory hyperpigmentation, sun spots, and others — require different treatment strategies. That's why proper diagnosis is the essential first step.

Our pigmentation protocols at Prime One Hair & Skin Clinic combine multiple modalities for comprehensive results. This typically includes medical-grade topical treatments, chemical peels customized to your skin type, laser or light-based therapies, and strict sun protection guidance. We also address internal factors through nutritional recommendations and hormonal assessment when relevant.`,

    whyChooseUs: [
          "Sun protection education and product recommendations",
          "Advanced laser and peel options for stubborn pigmentation",
          "Before-after documentation so you see real progress",
          "Customized depigmenting protocols for Indian skin",
          "Medical-grade whitening — safe, regulated formulations",
          "Experience with all pigmentation types including melasma"
    ],

    services: [
          {
                "title": "Intense Pulsed Light (IPL)",
                "description": "Broad-spectrum light that targets pigmented lesions and evens skin tone, particularly effective for sun damage and age spots."
          },
          {
                "title": "Depigmenting Therapy",
                "description": "Medical-grade topical formulations containing hydroquinone, kojic acid, arbutin, and retinoids prescribed at optimal concentrations."
          },
          {
                "title": "Maintenance Protocol",
                "description": "Long-term skincare routine with medical-grade products and sun protection strategy to prevent pigmentation recurrence."
          },
          {
                "title": "Chemical Peels",
                "description": "Targeted peels — glycolic, lactic, TCA, or combination — selected based on your pigmentation depth and skin type for safe, effective lightening."
          },
          {
                "title": "Laser Toning",
                "description": "Low-fluence Q-switched laser sessions that gradually reduce melanin without burning or damaging skin. Safe for Indian skin tones."
          },
          {
                "title": "Glutathione Therapy",
                "description": "Antioxidant therapy that helps reduce melanin production from within, supporting overall skin brightening and health."
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
                "question": "What SPF should I use during treatment?",
                "answer": "SPF 50+ broad-spectrum sunscreen is essential during and after pigmentation treatment. We recommend specific products suitable for your skin type."
          },
          {
                "question": "Is depigmentation treatment safe for dark skin?",
                "answer": "Yes, but treatment parameters must be carefully adjusted for darker skin tones. Our specialists have extensive experience treating Indian skin types safely."
          },
          {
                "question": "Can home remedies treat pigmentation?",
                "answer": "Home remedies rarely provide significant improvement for established pigmentation. Medical-grade treatments penetrate deeper and use higher concentrations of active ingredients for measurable results."
          },
          {
                "question": "How long does depigmentation treatment take?",
                "answer": "Visible improvement begins within 4-6 weeks for most patients. Complete treatment typically takes 3-6 months depending on the type and depth of pigmentation."
          },
          {
                "question": "Will pigmentation come back?",
                "answer": "Sun exposure can trigger pigmentation recurrence. We provide comprehensive sun protection guidance and maintenance treatments to minimize this risk."
          }
    ],

    ctaText: "Don't Wait — Book Your Depigmentation Treatment Now",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized depigmentation treatment that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="depigmentation-treatment-in-vadodara"
      content={content}
    />
  );
}
