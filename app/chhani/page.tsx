import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Chhani | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Chhani, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic chhani, dermatologist chhani vadodara, hair clinic chhani, skin doctor near chhani",
};

export default function ChhaniPage() {
  const content = {
    heroTitle: "Chhani's Reliable Skin & Hair Clinic",
    heroSubtitle: "Quality Healthcare for North Vadodara's Growing Community",
    
    introContent: `Chhani has evolved from a small town on Vadodara's outskirts to a bustling suburb. The area's growth has brought new residents, new businesses, and new healthcare needs.

We recognized early that Chhani and Chhani Jakat Naka area needed quality dermatological services. Residents were traveling into central Vadodara for skin problems — an unnecessary inconvenience we wanted to solve.

Today, we serve families across Chhani and surrounding areas. From industrial workers in nearby factories to farmers from peripheral villages, from young families in new apartments to elderly residents — our doors are open to everyone.`,

    whyChooseUs: [
      "First-choice skin clinic for Chhani & Jakat Naka residents",
      "Understanding of local skin challenges (industrial, agricultural exposure)",
      "Affordable care for working-class families",
      "Extended hours including Sunday mornings",
      "Modern treatments in a local, accessible setting",
      "Trusted by thousands of local families"
    ],

    services: [
      {
        title: "Industrial Skin Problems",
        description: "Factory workers face chemical exposure, heat, and friction. We understand occupational dermatology and treat work-related skin conditions effectively."
      },
      {
        title: "Sun & Weather-Related Issues",
        description: "Outdoor workers, farmers, and anyone exposed to Vadodara's harsh sun develop unique skin problems. We treat sun damage, heat rash, and related conditions."
      },
      {
        title: "Affordable Hair Fall Treatment",
        description: "Hair loss doesn't discriminate by income. We offer effective hair fall solutions at prices that work for Chhani's diverse economic demographics."
      },
      {
        title: "Skin Infections & Fungal Issues",
        description: "Humid conditions and industrial environments breed skin infections. We provide quick, effective treatment for fungal infections, bacterial issues, and more."
      },
      {
        title: "Basic Cosmetic Care",
        description: "Looking good isn't a luxury. We offer skin brightening, acne treatment, and basic cosmetic procedures at reasonable prices."
      },
      {
        title: "Family Skin Health",
        description: "Bring the whole family. From children's skin allergies to parents' concerns — we handle all ages and conditions."
      }
    ],

    processSteps: [
      {
        title: "Easy Access",
        description: "Located for easy access from all parts of Chhani. Walk-ins welcome, appointments available."
      },
      {
        title: "Quick Assessment",
        description: "We respect your time. Thorough but efficient consultations that don't waste your day."
      },
      {
        title: "Practical Treatment",
        description: "Treatments that fit your budget and lifestyle. We won't recommend what you can't afford."
      },
      {
        title: "Local Follow-Up",
        description: "No need to travel far for follow-ups. We're here in Chhani whenever you need us."
      }
    ],

    faqItems: [
      {
        question: "Do you treat skin problems from factory work?",
        answer: "Yes, occupational dermatology is one of our strengths. We regularly treat contact dermatitis, chemical exposure effects, and other work-related skin issues common in industrial areas."
      },
      {
        question: "Are your treatments affordable for daily-wage workers?",
        answer: "We structure our pricing to be accessible. Basic treatments are very affordable, and we always offer lower-cost alternatives when they're medically appropriate."
      },
      {
        question: "Can I come on Sunday?",
        answer: "Yes, we're open Sunday mornings to accommodate those who can't take time off during the week."
      },
      {
        question: "Do you speak Gujarati?",
        answer: "Of course! Gujarati, Hindi, and English — we communicate in whatever language you're most comfortable with."
      },
      {
        question: "How far do patients come from?",
        answer: "While we're based in Chhani, we serve patients from surrounding villages and areas too. If you're within reasonable distance, we're happy to see you."
      }
    ],

    ctaText: "Chhani's Own Skin & Hair Experts",
    ctaDescription: "Quality dermatological care shouldn't require a journey to the city. We're here in Chhani, ready to help. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="chhani"
      content={content}
    />
  );
}
