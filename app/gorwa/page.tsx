import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Gorwa | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Gorwa, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic gorwa, dermatologist gorwa vadodara, hair clinic gorwa, skin doctor near gorwa",
};

export default function GorwaPage() {
  const content = {
    heroTitle: "Gorwa's Reliable Skin & Hair Specialists",
    heroSubtitle: "Quality Dermatology for North Vadodara's Industrial Community",
    
    introContent: `Gorwa is home to some of Gujarat's largest industrial establishments — GSFC, IPCL, and the refinery among them. The workers and families connected to these industries form a significant community with specific healthcare needs.

Our clinic understands this community. Industrial workers face occupational skin hazards. Their families deal with environmental factors. And everyone deserves quality dermatological care that's accessible and affordable.

We've built relationships with Gorwa families over the years. They trust us because we deliver results without pretension — straightforward treatment from doctors who treat them as neighbors, not numbers.`,

    whyChooseUs: [
      "Serving Gorwa industrial community for years",
      "Expertise in occupational skin conditions",
      "Understanding of chemical and environmental exposure",
      "Affordable for working families",
      "Convenient location for GSFC/IPCL employees",
      "Trusted by generations of Gorwa residents"
    ],

    services: [
      {
        title: "Industrial Dermatology",
        description: "Chemical exposure, petroleum products, industrial hazards — we understand and treat occupation-related skin conditions that Gorwa workers face."
      },
      {
        title: "Environmental Skin Care",
        description: "Industrial area air quality affects skin. We address these environmental factors in our treatment approach."
      },
      {
        title: "Working Family Care",
        description: "Practical healthcare for working families — flexible timing, affordable pricing, effective treatment."
      },
      {
        title: "Hair Health",
        description: "Hard water, helmet use, stress — we address the various factors causing hair problems in the working population."
      },
      {
        title: "Skin Infections",
        description: "Quick, effective treatment for infections — because missing work isn't an option for most."
      },
      {
        title: "Basic Cosmetics",
        description: "Affordable cosmetic options for those who want them. Looking good shouldn't be expensive."
      }
    ],

    processSteps: [
      {
        title: "Shift-Friendly Hours",
        description: "We accommodate factory shift timings. Let us know your schedule when booking."
      },
      {
        title: "Quick Diagnosis",
        description: "Efficient but thorough. We know you can't spend half a day at a clinic."
      },
      {
        title: "Practical Treatment",
        description: "Solutions that fit working life — realistic routines, affordable options."
      },
      {
        title: "Accessible Follow-Up",
        description: "Easy follow-ups that don't require taking leave."
      }
    ],

    faqItems: [
      {
        question: "Do you understand GSFC/refinery related skin issues?",
        answer: "Yes, we've treated many employees from local industries. We understand chemical exposure patterns and occupational skin hazards specific to this area."
      },
      {
        question: "Can I come after my shift ends?",
        answer: "Yes, we have extended evening hours. Let us know your shift timing and we'll find a suitable slot."
      },
      {
        question: "Are treatments affordable for PSU salaries?",
        answer: "We price keeping the local demographic in mind. Quality care at reasonable rates — that's our promise."
      },
      {
        question: "What about environmental factors affecting skin?",
        answer: "Industrial areas have different air quality and water. We factor these into our treatment recommendations and suggest practical protective measures."
      },
      {
        question: "Do you provide medical certificates?",
        answer: "Yes, we provide appropriate documentation for genuine skin conditions when needed for work purposes."
      }
    ],

    ctaText: "Gorwa Trusts Our Care",
    ctaDescription: "Join the industrial community that relies on us for skin and hair health. Practical treatment from doctors who understand working life. Book today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="gorwa"
      content={content}
    />
  );
}
