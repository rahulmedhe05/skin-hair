import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hair Patch Vadodara ₹15,000 | Natural Look | Book Now",
  description: "💇 Hair patch in Vadodara from ₹15,000 ✓ 100% natural look ✓ Non-surgical solution ✓ Instant full head ✓ Undetectable. For men & women. Book consultation!",
  keywords: "hair patch vadodara, hair replacement vadodara, non surgical hair cost, hair patch near me",
};

export default function HairPatchPage() {
  const content = {
    heroTitle: "Hair Patch in Vadodara",
    heroSubtitle: "Instant, Natural-Looking Hair Coverage",
    
    introContent: `Not everyone wants or is suitable for hair transplant surgery. Hair patches — also called hair systems or non-surgical hair replacement — provide instant coverage for baldness without any surgery.

Modern hair patches look remarkably natural. They're custom-made to match your hair color, density, and texture. When fitted properly, they're undetectable and allow normal activities including swimming and exercise.

We provide quality hair patch services with natural appearance priority. From selection to fitting to maintenance, we ensure you get a solution that looks real and feels comfortable.`,

    whyChooseUs: [
      "Natural-looking patches",
      "Custom-made solutions",
      "Proper fitting expertise",
      "Multiple system options",
      "Maintenance support",
      "Confidential service"
    ],

    services: [
      {
        title: "Hair Patch Consultation",
        description: "Assessing your needs and recommending appropriate system."
      },
      {
        title: "Custom Hair Patches",
        description: "Made-to-measure patches matching your hair characteristics."
      },
      {
        title: "Professional Fitting",
        description: "Expert attachment for natural, secure fit."
      },
      {
        title: "Ready-Made Options",
        description: "Standard patches for immediate needs."
      },
      {
        title: "Maintenance Services",
        description: "Regular servicing, cleaning, and adjustment."
      },
      {
        title: "Styling Services",
        description: "Cutting and styling the hair patch to your preference."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Understanding your baldness pattern and expectations."
      },
      {
        title: "Selection",
        description: "Choosing appropriate hair system type and specifications."
      },
      {
        title: "Customization",
        description: "Creating or selecting patch matching your hair."
      },
      {
        title: "Fitting & Styling",
        description: "Professional attachment and styling for natural look."
      }
    ],

    faqItems: [
      {
        question: "Will it look natural?",
        answer: "Quality hair patches look very natural when properly made and fitted. Most people can't tell the difference."
      },
      {
        question: "Can I swim and exercise?",
        answer: "Yes — properly attached patches stay secure during normal activities including swimming and workouts."
      },
      {
        question: "How long does a hair patch last?",
        answer: "6-12 months typically with proper care. Quality patches last longer."
      },
      {
        question: "Is maintenance difficult?",
        answer: "Regular maintenance needed — cleaning, reattachment every few weeks. We provide maintenance services."
      },
      {
        question: "Hair patch vs transplant — which is better?",
        answer: "Different solutions. Transplant is permanent surgery; patch is non-surgical but needs ongoing maintenance. Choice depends on your situation and preference."
      }
    ],

    ctaText: "Get Natural-Looking Hair Coverage",
    ctaDescription: "Non-surgical solution for baldness. Instant, natural results. Book your hair patch consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-patch-in-vadodara"
      content={content}
    />
  );
}
