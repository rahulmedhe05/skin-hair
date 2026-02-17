import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Care Clinic Vadodara | Complete Solutions | ₹500",
  description: "✨ Skin care clinic in Vadodara ✓ Complete skin solutions ✓ Medical & cosmetic ✓ Expert dermatologists ✓ 10,000+ happy patients. Consult ₹500. Book now!",
  keywords: "skin care clinic vadodara, skin clinic vadodara, skin care center vadodara, skin clinic near me",
};

export default function SkinCareClinicPage() {
  const content = {
    heroTitle: "Skin Care Clinic in Vadodara",
    heroSubtitle: "Complete Care for Healthy, Beautiful Skin",
    
    introContent: `Proper skin care goes beyond products — it requires understanding your skin type, addressing problems correctly, and maintaining skin health long-term. A skin care clinic provides this comprehensive approach.

We combine medical dermatology with aesthetic treatments. Treating conditions when needed, preventing problems, and maintaining skin health. Whether you have specific concerns or want to maintain good skin, we provide appropriate care.

Our clinic offers everything from basic skin care consultations to advanced treatments. Understanding that each person's skin is different, we customize our approach to your specific needs and goals.`,

    whyChooseUs: [
      "Comprehensive skin care approach",
      "Medical and aesthetic expertise",
      "Customized skin care plans",
      "Range of treatment options",
      "Ongoing skin health focus",
      "Expert guidance"
    ],

    services: [
      {
        title: "Skin Assessment",
        description: "Understanding your skin type, concerns, and developing appropriate care plan."
      },
      {
        title: "Problem Treatment",
        description: "Addressing acne, pigmentation, aging, and other skin concerns."
      },
      {
        title: "Preventive Care",
        description: "Skin protection, sun damage prevention, and early intervention."
      },
      {
        title: "Facial Treatments",
        description: "Professional facials and skin rejuvenation services."
      },
      {
        title: "Home Care Guidance",
        description: "Recommending appropriate products and routines for your skin."
      },
      {
        title: "Advanced Treatments",
        description: "Laser, peels, and other advanced skin care procedures."
      }
    ],

    processSteps: [
      {
        title: "Skin Analysis",
        description: "Evaluating your skin condition, type, and concerns."
      },
      {
        title: "Care Planning",
        description: "Developing a comprehensive skin care approach."
      },
      {
        title: "Treatment Implementation",
        description: "Providing appropriate treatments for your skin."
      },
      {
        title: "Ongoing Care",
        description: "Regular follow-up and maintenance for lasting skin health."
      }
    ],

    faqItems: [
      {
        question: "What should I expect at first visit?",
        answer: "Skin evaluation, discussion of your concerns, and recommendations for treatment and home care."
      },
      {
        question: "How often should I visit a skin care clinic?",
        answer: "For maintenance, monthly treatments are common. For specific concerns, frequency depends on the treatment plan."
      },
      {
        question: "Can you help me choose skin care products?",
        answer: "Absolutely — we assess your skin and recommend appropriate products, not just what's popular."
      },
      {
        question: "Do I need treatments or just home care?",
        answer: "Depends on your skin and goals. Some need treatments, others just need proper home care guidance."
      },
      {
        question: "What's the difference from a beauty salon?",
        answer: "Medical expertise — we diagnose conditions, not just provide services. Treatments are evidence-based."
      }
    ],

    ctaText: "Start Your Skin Care Journey",
    ctaDescription: "Proper skin care with expert guidance. Healthy, beautiful skin starts here. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-care-clinic-in-vadodara"
      content={content}
    />
  );
}
