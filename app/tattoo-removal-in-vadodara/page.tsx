import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Tattoo Removal Vadodara ₹3,000 | Q-Switch Laser | Book",
  description: "✅ Laser tattoo removal in Vadodara ₹3,000/session ✓ Q-switched laser ✓ All colors removed ✓ Safe & effective ✓ 90% fading. Free consultation. Call!",
  keywords: "tattoo removal vadodara, laser tattoo removal vadodara, tattoo removal cost vadodara, remove tattoo near me",
};

export default function TattooRemovalPage() {
  const content = {
    heroTitle: "Laser Tattoo Removal in Vadodara",
    heroSubtitle: "Erase Ink Mistakes Safely",
    
    introContent: `Tattoos are meant to be permanent, but life circumstances change. That name, that design, that youthful decision — sometimes you want it gone. Modern laser technology makes removal possible.

Laser tattoo removal works by breaking down ink particles so your body can eliminate them naturally. Q-switched lasers deliver intense energy in nanosecond pulses, shattering ink while minimizing damage to surrounding skin.

It's not instant — multiple sessions are needed, and complete removal isn't always possible. But significant fading or full removal is achievable for most tattoos. We assess your tattoo and give honest expectations before starting.`,

    whyChooseUs: [
      "Q-switched laser technology",
      "Experience with various ink colors",
      "Honest assessment and expectations",
      "Safe protocols for all skin types",
      "Progressive fading over sessions",
      "Professional medical environment"
    ],

    services: [
      {
        title: "Complete Tattoo Removal",
        description: "Full removal when possible. Multiple sessions to completely eliminate the tattoo."
      },
      {
        title: "Tattoo Fading",
        description: "Lightening for cover-up. Making old tattoos light enough for new artwork."
      },
      {
        title: "Small Tattoo Removal",
        description: "Efficient treatment of small tattoos. Often faster to clear."
      },
      {
        title: "Large Tattoo Removal",
        description: "Systematic approach to removing larger pieces. Section by section treatment."
      },
      {
        title: "Color Tattoo Removal",
        description: "Different wavelengths for different ink colors. We handle multi-colored tattoos."
      },
      {
        title: "Amateur Tattoo Removal",
        description: "Home tattoos often fade faster than professional ones. Typically fewer sessions needed."
      }
    ],

    processSteps: [
      {
        title: "Tattoo Assessment",
        description: "Evaluating ink colors, depth, size, and your skin type."
      },
      {
        title: "Expectations Setting",
        description: "Honest discussion of what's achievable and how many sessions may be needed."
      },
      {
        title: "Laser Sessions",
        description: "Spaced treatments allowing your body to clear broken-down ink between sessions."
      },
      {
        title: "Progress Monitoring",
        description: "Tracking fading and adjusting approach as needed."
      }
    ],

    faqItems: [
      {
        question: "Can all tattoos be completely removed?",
        answer: "Most can be significantly faded or removed. Factors affecting removal: ink colors, depth, your immune response. We assess your specific tattoo's removability."
      },
      {
        question: "How many sessions are needed?",
        answer: "Typically 6-12 sessions for significant fading or removal. Amateur tattoos often need fewer. Professional black tattoos may need more."
      },
      {
        question: "Does it hurt?",
        answer: "Yes, similar to getting the tattoo. Numbing cream helps. Most people tolerate it for the session duration."
      },
      {
        question: "Which colors are hardest to remove?",
        answer: "Black and dark blue are easiest. Green and bright colors are more challenging. Yellow and white are most difficult. We have multiple wavelengths for different colors."
      },
      {
        question: "Will there be scarring?",
        answer: "With proper technique, scarring is rare. The tattoo itself may have caused texture changes that become visible as ink clears."
      }
    ],

    ctaText: "Erase Your Unwanted Tattoo",
    ctaDescription: "That tattoo doesn't have to be forever. Professional laser removal can fade or eliminate unwanted ink. Book your assessment today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="tattoo-removal-in-vadodara"
      content={content}
    />
  );
}
