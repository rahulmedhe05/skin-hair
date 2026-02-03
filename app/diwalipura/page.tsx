import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic Diwalipura | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Diwalipura, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic diwalipura, dermatologist diwalipura vadodara, hair clinic diwalipura, skin doctor near diwalipura",
};

export default function DiwalipuraPage() {
  const content = {
    heroTitle: "Diwalipura's Complete Skin & Hair Solution",
    heroSubtitle: "Expert Dermatology for South Vadodara Residents",
    
    introContent: `Diwalipura serves as a key residential area in south Vadodara, with good connectivity and a mix of established and developing neighborhoods. Its residents need quality healthcare options nearby.

Our clinic fills that need for dermatological care. Whether you've lived in Diwalipura for decades or recently moved here, we provide expert skin and hair treatment without requiring long journeys to other parts of the city.

We've designed our services to match Diwalipura's demographic — working families, professionals, students, and seniors. Each group has specific concerns, and we address them with tailored approaches.`,

    whyChooseUs: [
      "Strategically located for Diwalipura residents",
      "Full range of dermatological services",
      "Experienced doctors, modern equipment",
      "Fair pricing for middle-class families",
      "Easy access from nearby areas",
      "Consistent quality of care"
    ],

    services: [
      {
        title: "Complete Dermatology",
        description: "All skin conditions — medical and cosmetic — treated under one roof. No referrals needed for most issues."
      },
      {
        title: "Effective Hair Care",
        description: "Hair fall, dandruff, scalp problems, thinning — we provide solutions that work."
      },
      {
        title: "Acne Management",
        description: "Comprehensive acne treatment from diagnosis through scar management. Clear skin is achievable."
      },
      {
        title: "Laser Treatments",
        description: "Hair removal, pigmentation, rejuvenation — advanced laser services available locally."
      },
      {
        title: "Family Care",
        description: "All ages welcome. Children, adults, seniors — appropriate treatment for each."
      },
      {
        title: "Cosmetic Enhancement",
        description: "Anti-aging, skin brightening, aesthetic procedures for those interested."
      }
    ],

    processSteps: [
      {
        title: "Convenient Access",
        description: "Local clinic means quick visits without disrupting your day."
      },
      {
        title: "Thorough Assessment",
        description: "We examine properly before recommending anything."
      },
      {
        title: "Practical Treatment",
        description: "Solutions that fit your life, not just textbook protocols."
      },
      {
        title: "Reliable Follow-Up",
        description: "Easy follow-ups ensure treatment stays on track."
      }
    ],

    faqItems: [
      {
        question: "Which areas do you serve from Diwalipura?",
        answer: "Besides Diwalipura itself, we see patients from nearby areas including parts of Tarsali, Manjalpur, and surrounding localities."
      },
      {
        question: "Are your services affordable for average families?",
        answer: "Yes, we price keeping the local demographic in mind. Quality care shouldn't require premium pricing."
      },
      {
        question: "What about evening appointments?",
        answer: "We have extended evening hours for working patients. Let us know your constraints when booking."
      },
      {
        question: "Is the full range of treatments available here?",
        answer: "Yes, from basic consultations to laser treatments — we've invested in making comprehensive care locally available."
      },
      {
        question: "How's parking near your clinic?",
        answer: "Adequate parking available. We're accessible by various routes and parking isn't usually a problem."
      }
    ],

    ctaText: "Diwalipura's Trusted Skin Specialists",
    ctaDescription: "Quality dermatological care right in your area. No more long trips for skin and hair treatment. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="diwalipura"
      content={content}
    />
  );
}
