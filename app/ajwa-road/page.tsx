import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic Ajwa Road | Best Dermatologist",
  description: "🏆 Top skin & hair clinic on Ajwa Road, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic ajwa road, dermatologist ajwa road vadodara, hair clinic ajwa road, skin doctor near ajwa road",
};

export default function AjwaRoadPage() {
  const content = {
    heroTitle: "Ajwa Road's Complete Skin & Hair Solution",
    heroSubtitle: "Quality Dermatology on Vadodara's Popular Western Route",
    
    introContent: `Ajwa Road — the route to Ajwa Lake, Ajwa Fun World, and beyond — is also home to growing residential developments. What was once primarily a weekend destination route now hosts thriving communities.

Our clinic serves these newer residential areas along Ajwa Road. Families who've moved here for quieter living shouldn't have to sacrifice healthcare access. We bring quality dermatology to your neighborhood.

The Ajwa Road community is young and growing — new families, first-time homeowners, professionals seeking peace away from city hustle. We understand their demographics and design our services accordingly.`,

    whyChooseUs: [
      "Serving growing Ajwa Road communities",
      "Modern clinic for modern neighborhoods",
      "Full dermatological services locally available",
      "No need to travel to city center",
      "Young, energetic medical team",
      "Understanding of new resident needs"
    ],

    services: [
      {
        title: "New Resident Care",
        description: "Moving brings skin changes — new water, new environment. We help your skin adjust to its new home."
      },
      {
        title: "Young Family Dermatology",
        description: "Ajwa Road's young families need convenient skin care. We treat parents and children under one roof."
      },
      {
        title: "Acne Solutions",
        description: "Popular with the younger demographic. Clear skin through proper treatment, not endless products."
      },
      {
        title: "Hair Health",
        description: "Hair fall, thinning, dandruff — we address the concerns that affect confidence."
      },
      {
        title: "Laser Treatments",
        description: "Hair removal, pigmentation, rejuvenation — modern treatments available locally."
      },
      {
        title: "Weekend Cosmetics",
        description: "Many Ajwa Road residents prefer weekend treatments. We're available when you are."
      }
    ],

    processSteps: [
      {
        title: "Local Convenience",
        description: "No long drives to city center. Quality care right on Ajwa Road."
      },
      {
        title: "Fresh Approach",
        description: "Modern clinic, contemporary protocols, updated knowledge."
      },
      {
        title: "Practical Solutions",
        description: "Treatment that fits your life in the newer suburbs."
      },
      {
        title: "Growing Together",
        description: "As Ajwa Road grows, we grow with it. Long-term community partnership."
      }
    ],

    faqItems: [
      {
        question: "Is the clinic easy to find on Ajwa Road?",
        answer: "Yes, we're on the main road with clear signage. Directions provided when you book. Plenty of parking available."
      },
      {
        question: "We just moved to Ajwa Road. Why is my skin acting up?",
        answer: "Common issue! New water source, different environment, settling-in stress — all affect skin. We see this often and know how to help."
      },
      {
        question: "Are treatments here same quality as city clinics?",
        answer: "Absolutely. Same equipment, same expertise, just more convenient location for Ajwa Road residents."
      },
      {
        question: "What about weekend appointments?",
        answer: "Available! Many of our patients prefer weekends. Book ahead as weekends fill up."
      },
      {
        question: "Do you see patients from nearby villages too?",
        answer: "Yes, we serve the broader Ajwa Road corridor including surrounding areas."
      }
    ],

    ctaText: "Ajwa Road's Skin Care Has Arrived",
    ctaDescription: "Quality dermatology is now in your neighborhood. No more long trips for skin and hair treatment. Book your local consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="ajwa-road"
      content={content}
    />
  );
}
