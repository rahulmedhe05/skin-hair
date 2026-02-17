import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic Ellora Park | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Ellora Park, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic ellora park, dermatologist ellora park vadodara, hair clinic ellora park, skin doctor near ellora park",
};

export default function ElloraParkPage() {
  const content = {
    heroTitle: "Ellora Park's Modern Skin & Hair Center",
    heroSubtitle: "Contemporary Dermatology for a Contemporary Neighborhood",
    
    introContent: `Ellora Park is one of Vadodara's most desirable addresses — planned layouts, green spaces, and a community that values quality of life. Our clinic fits right into this environment with modern facilities and contemporary care.

The residents here are informed consumers. They research, they compare, they expect value. We welcome that scrutiny because we're confident in what we offer — genuine expertise, honest recommendations, and results that justify your investment.

Young families, established professionals, and active seniors make up Ellora Park's demographic. We serve each with age-appropriate, lifestyle-conscious dermatological care.`,

    whyChooseUs: [
      "Modern clinic matching Ellora Park's standards",
      "Evidence-based treatments backed by research",
      "Transparent about what works and what doesn't",
      "Comfortable, contemporary facilities",
      "Serving all age groups and skin types",
      "Value-conscious quality care"
    ],

    services: [
      {
        title: "Informed Skincare",
        description: "We explain the science behind treatments. Understand why something works, not just that it works. Educated patients make better decisions."
      },
      {
        title: "Modern Acne Solutions",
        description: "Beyond traditional approaches. Laser, LED therapy, advanced peels — we use what actually works for stubborn acne."
      },
      {
        title: "Hair Science",
        description: "Hair loss treatment grounded in trichology. We diagnose the actual cause before recommending solutions."
      },
      {
        title: "Age-Smart Treatments",
        description: "Anti-aging that's appropriate for your actual age. Prevention for younger patients, restoration for those who need it."
      },
      {
        title: "Laser Technology",
        description: "Multiple laser platforms for different concerns. The right tool for the right problem."
      },
      {
        title: "Lifestyle Dermatology",
        description: "Skincare advice that fits your actual life — your sports, your climate preferences, your schedule."
      }
    ],

    processSteps: [
      {
        title: "Convenient Booking",
        description: "Online scheduling with real-time availability. Book when it suits you."
      },
      {
        title: "Educational Consultation",
        description: "We explain your condition and options clearly. You'll understand what's happening and why."
      },
      {
        title: "Evidence-Based Treatment",
        description: "Treatments backed by research and results, not trends or marketing."
      },
      {
        title: "Tracked Progress",
        description: "We measure outcomes objectively. Photos, metrics, and honest assessment."
      }
    ],

    faqItems: [
      {
        question: "How do I know if a treatment actually works?",
        answer: "Great question — we show you research data, our own before-after documentation, and realistic timelines. We only recommend treatments with evidence of efficacy."
      },
      {
        question: "Are trendy treatments always worth it?",
        answer: "Not always. We help you distinguish between genuine innovations and marketing hype. Some new treatments are excellent; others are overhyped."
      },
      {
        question: "Can I get treatment for my whole family?",
        answer: "Yes, we treat all ages with appropriate protocols. Family appointments can be scheduled together."
      },
      {
        question: "What about ongoing skin maintenance?",
        answer: "We offer maintenance programs with regular check-ins. Prevention is more effective (and cheaper) than cure."
      },
      {
        question: "Do you recommend home skincare products?",
        answer: "Yes, and we're honest about it. Some expensive products are worth it; others aren't. We recommend based on actual efficacy, not brand prestige."
      }
    ],

    ctaText: "Smart Skincare for Smart People",
    ctaDescription: "You research your decisions. Choose a clinic that welcomes your questions. Ellora Park's informed residents trust us — find out why.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="ellora-park"
      content={content}
    />
  );
}
