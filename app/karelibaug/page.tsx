import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Karelibaug | Dermatologist",
  description: "🏆 Top skin & hair clinic in Karelibaug, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic karelibaug, dermatologist karelibaug vadodara, hair clinic karelibaug, skin doctor near karelibaug",
};

export default function KarelibaugPage() {
  const content = {
    heroTitle: "Karelibaug's Heritage of Trusted Skin Care",
    heroSubtitle: "Where Traditional Values Meet Modern Dermatology",
    
    introContent: `Karelibaug is old Vadodara — a neighborhood where families have lived for generations, where neighbors know each other, where trust matters. Our clinic has been part of this community fabric for years.

We've watched children of our early patients grow up and bring their own families to us. That's the kind of trust Karelibaug gives to those who earn it, and we've worked hard to earn it.

In Karelibaug, word of mouth is everything. Our reputation has grown through satisfied patients recommending us to relatives, friends, and neighbors. That's the kind of marketing no advertisement can buy — and it keeps us accountable.`,

    whyChooseUs: [
      "15+ years serving Karelibaug families",
      "Multi-generational patient relationships",
      "Doctors who remember their patients",
      "Honest, old-school values in a modern clinic",
      "Walking distance from major Karelibaug localities",
      "Fair pricing that Karelibaug families approve of"
    ],

    services: [
      {
        title: "Traditional Dermatology Excellence",
        description: "Skin problems don't need fancy names — they need proper treatment. We diagnose accurately and treat effectively, just like dermatology should be practiced."
      },
      {
        title: "Hair Care for All Ages",
        description: "From children's scalp issues to elderly hair thinning, we treat hair problems at every life stage. Practical solutions, realistic expectations."
      },
      {
        title: "Skin Allergies & Reactions",
        description: "Karelibaug's older buildings and vegetation can trigger allergies. We identify triggers, provide relief, and help prevent future reactions."
      },
      {
        title: "Senior Skin Care",
        description: "With Karelibaug's older population, we see many age-related skin concerns. Itching, dryness, spots, growths — we handle them with the care our elders deserve."
      },
      {
        title: "Women's Skin Health",
        description: "Hormonal changes, pregnancy-related skin issues, menopause effects — women face unique skin challenges. We address them sensitively and effectively."
      },
      {
        title: "Cosmetic Options",
        description: "Modern treatments are available for those who want them. Subtle enhancements that help you look refreshed, not changed."
      }
    ],

    processSteps: [
      {
        title: "Familiar Welcome",
        description: "Walk in to a clinic that feels welcoming. Many of our staff have been with us for years — you might see familiar faces."
      },
      {
        title: "Unhurried Consultation",
        description: "We take our time. No rushing through appointments, no dismissing concerns as minor."
      },
      {
        title: "Honest Discussion",
        description: "We discuss options, costs, and expectations openly. No surprises, no pressure."
      },
      {
        title: "Continued Care",
        description: "Our relationship doesn't end with treatment. We're here whenever you need us."
      }
    ],

    faqItems: [
      {
        question: "Have you really been serving Karelibaug for 15+ years?",
        answer: "Yes, our association with Karelibaug goes back over 15 years. We've treated multiple generations of several families here."
      },
      {
        question: "Do you understand the specific issues in older neighborhoods?",
        answer: "Absolutely. Old buildings, vegetation, water pipes — these can affect skin differently than modern constructions. We factor these into our assessments."
      },
      {
        question: "My elderly mother has mobility issues. Do you accommodate?",
        answer: "Yes, our clinic is senior-friendly with seating, easy access, and patient staff. For severely mobility-restricted patients, we can discuss home visits."
      },
      {
        question: "Are modern cosmetic treatments really suitable for conservative families?",
        answer: "Modern doesn't mean dramatic. Many cosmetic treatments are subtle — reducing dark circles, evening out skin tone, controlling hair fall. Nothing that changes who you are."
      },
      {
        question: "What languages does your staff speak?",
        answer: "Gujarati, Hindi, and English — we communicate in whatever language makes you comfortable. Clear communication is essential for good care."
      }
    ],

    ctaText: "Karelibaug Has Trusted Us for Years — You Can Too",
    ctaDescription: "Join the families who've made us their go-to skin and hair clinic for generations. Honest care, effective treatment, familiar faces. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="karelibaug"
      content={content}
    />
  );
}
