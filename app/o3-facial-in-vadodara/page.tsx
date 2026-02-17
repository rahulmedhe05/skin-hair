import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "O3+ Facial Vadodara ₹2,000 | Professional Glow | Book",
  description: "✨ O3+ facial in Vadodara ₹2,000 ✓ Professional O3+ products ✓ Brightening & anti-aging ✓ Instant glow ✓ Expert application. Perfect for events. Book now!",
  keywords: "O3+ facial vadodara, O3+ treatment vadodara, O3 facial cost vadodara, O3+ facial near me",
};

export default function O3FacialPage() {
  const content = {
    heroTitle: "O3+ Professional Facial in Vadodara",
    heroSubtitle: "Premium Products, Professional Application",
    
    introContent: `O3+ has established itself as a premium professional skincare brand in India, known for effective formulations and visible results. Their facial protocols are designed for professional use, maximizing product penetration and efficacy.

The difference between using O3+ products at home versus getting a professional O3+ facial is significant. Professional application techniques, proper product layering, and trained hands extract more from each product than self-application can achieve.

We're trained in O3+ protocols and use their complete professional product range. Whether you want brightening, anti-aging, hydration, or clarifying treatment, O3+ has formulations that deliver — and we know how to use them properly.`,

    whyChooseUs: [
      "Certified O3+ product line",
      "Trained in official protocols",
      "Complete professional range available",
      "Maximum product efficacy",
      "Customized treatment selection",
      "Consistent quality results"
    ],

    services: [
      {
        title: "O3+ Bridal Radiance",
        description: "Wedding prep favorite — intensive brightening and glow enhancement for special occasions."
      },
      {
        title: "O3+ Power Brightening",
        description: "Target pigmentation, dullness, and uneven tone with O3+'s brightening protocols."
      },
      {
        title: "O3+ Anti-Aging",
        description: "Combat fine lines, sagging, and dullness with professional anti-aging formulations."
      },
      {
        title: "O3+ Seaweed",
        description: "Deep nourishment and hydration using their marine-based formulations."
      },
      {
        title: "O3+ Clarifying",
        description: "For acne and oily skin — purifying treatment that clears without over-drying."
      },
      {
        title: "O3+ Whitening",
        description: "Professional skin brightening using their advanced whitening range."
      }
    ],

    processSteps: [
      {
        title: "Skin Analysis",
        description: "Determining which O3+ protocol matches your skin needs."
      },
      {
        title: "Deep Cleansing",
        description: "Thorough preparation using O3+ cleansing products."
      },
      {
        title: "Treatment Layers",
        description: "Professional application of active products in proper sequence."
      },
      {
        title: "Finishing Protocol",
        description: "Sealing in benefits and protecting treated skin."
      }
    ],

    faqItems: [
      {
        question: "Why O3+ specifically?",
        answer: "O3+ is a respected professional brand with formulations proven in Indian conditions. Their products work well for our skin types and are consistently effective."
      },
      {
        question: "Is this better than using O3+ products at home?",
        answer: "Yes — professional treatment uses higher-concentration products, proper techniques, and complete protocols that aren't available for home use."
      },
      {
        question: "Which O3+ facial is best for me?",
        answer: "Depends on your concerns. We'll assess your skin and recommend the most appropriate O3+ protocol."
      },
      {
        question: "How often should I get O3+ facials?",
        answer: "Monthly for maintenance. Intensive protocols may have different schedules. We'll advise based on your treatment plan."
      },
      {
        question: "Can I combine O3+ with other treatments?",
        answer: "Yes, O3+ facials work well alongside other dermatological treatments. We coordinate appropriately."
      }
    ],

    ctaText: "Experience O3+ Professional Care",
    ctaDescription: "Get O3+ products applied the way they're meant to be — by trained professionals. Premium products deserve professional application. Book your O3+ facial.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="o3-facial-in-vadodara"
      content={content}
    />
  );
}
