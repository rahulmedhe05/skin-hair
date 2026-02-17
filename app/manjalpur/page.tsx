import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Manjalpur | Dermatologist",
  description: "🏆 Top skin & hair clinic in Manjalpur, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic manjalpur, dermatologist manjalpur vadodara, hair clinic manjalpur, skin doctor near manjalpur",
};

export default function ManjalpurPage() {
  const content = {
    heroTitle: "Manjalpur's Trusted Skin & Hair Care Center",
    heroSubtitle: "Serving South Vadodara with Excellence in Dermatology",
    
    introContent: `Manjalpur — with its mix of residential colonies, industrial zones, and commercial establishments — represents the hardworking spirit of Vadodara. It deserves healthcare that understands its unique needs.

We've been serving Manjalpur and the surrounding GIDC belt for years. Our patients include factory workers dealing with occupational skin issues, housewives managing household-related skin problems, and professionals seeking cosmetic enhancements. Each gets personalized care.

What Manjalpur residents appreciate about us: we're straight shooters. No unnecessary tests, no exaggerated claims, no hidden costs. Just honest advice and effective treatment from doctors who genuinely want to help.`,

    whyChooseUs: [
      "Centrally located for Manjalpur, GIDC & surrounding areas",
      "Understanding of occupational skin conditions",
      "Affordable treatments for middle-class families",
      "No-nonsense approach — only treatments you actually need",
      "Hindi and Gujarati speaking staff for comfortable communication",
      "Evening hours for working patients"
    ],

    services: [
      {
        title: "Occupational Skin Problems",
        description: "Factory workers, mechanics, and industrial employees face unique skin challenges. Chemical exposure, heat, friction — we understand these occupational hazards and treat accordingly."
      },
      {
        title: "Affordable Acne Treatment",
        description: "Clear skin shouldn't be a luxury. We offer effective acne solutions at price points that work for Manjalpur's families. Generic medications when they work, branded when necessary."
      },
      {
        title: "Hair Fall Solutions",
        description: "Hard water, pollution, and stress take their toll on hair. We identify the cause and recommend practical, affordable solutions for hair fall control and regrowth."
      },
      {
        title: "Fungal & Skin Infections",
        description: "Vadodara's humid climate breeds fungal infections. We see plenty of ringworm, athlete's foot, and similar issues — and we know how to treat them effectively."
      },
      {
        title: "Basic Cosmetic Treatments",
        description: "Looking good isn't just for the wealthy. We offer affordable facials, peels, and skin brightening treatments that deliver results without breaking the bank."
      },
      {
        title: "Laser Hair Removal",
        description: "Even our advanced treatments are priced competitively. Permanent hair reduction is an investment that saves money on waxing in the long run."
      }
    ],

    processSteps: [
      {
        title: "Walk In or Book",
        description: "We welcome walk-ins though booking ahead is recommended during peak hours. Flexible timing for working patients."
      },
      {
        title: "Practical Assessment",
        description: "We examine your condition and discuss treatment options that fit your budget and lifestyle."
      },
      {
        title: "Honest Recommendations",
        description: "We tell you what you need, not what costs more. If a simple cream will work, we won't push for procedures."
      },
      {
        title: "Effective Treatment",
        description: "Get treated and get on with your life. We don't drag things out unnecessarily."
      }
    ],

    faqItems: [
      {
        question: "Do you treat factory-related skin problems?",
        answer: "Yes, occupational dermatology is one of our focus areas. We treat contact dermatitis, chemical burns, heat rashes, and other work-related skin conditions common in the GIDC area."
      },
      {
        question: "Are your treatments affordable for middle-class families?",
        answer: "Absolutely. We price our services keeping Manjalpur's demographics in mind. We offer treatment options at different price points and never push expensive procedures unnecessarily."
      },
      {
        question: "Can I come after factory hours?",
        answer: "Yes, we stay open till 8 PM on weekdays specifically to accommodate working patients. Saturday and Sunday morning slots are also available."
      },
      {
        question: "What about severe skin conditions like psoriasis?",
        answer: "We treat chronic conditions like psoriasis, eczema, and vitiligo with appropriate long-term management plans. These require patience and consistent care."
      },
      {
        question: "Do you accept cash payments?",
        answer: "Cash, cards, and UPI — whatever is convenient for you. We keep payment simple and transparent."
      }
    ],

    ctaText: "Manjalpur Trusts Us — You Can Too",
    ctaDescription: "Don't let skin or hair problems affect your work and confidence. Manjalpur's reliable dermatologists are here to help. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="manjalpur"
      content={content}
    />
  );
}
