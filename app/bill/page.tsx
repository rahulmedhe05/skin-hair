import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Bill, Vadodara | Expert Dermatologist",
  description: "Trusted skin and hair clinic in Bill, Vadodara. Treatment for acne, hair fall, skin allergies & all skin conditions. Serving Bill & surrounding villages.",
  keywords: "skin clinic bill, dermatologist bill vadodara, hair specialist bill, skin doctor bill village vadodara",
};

export default function BillPage() {
  const content = {
    heroTitle: "Bill's Dedicated Skin & Hair Clinic",
    heroSubtitle: "Quality Healthcare for Our Community",
    
    introContent: `Bill may be on Vadodara's periphery, but its residents deserve healthcare that doesn't require long journeys. We've established our presence here to serve this community with the dermatological care it needs.

Our clinic treats the diverse skin concerns of Bill's population — farmers dealing with sun and agricultural exposure, families managing everyday skin issues, young people with acne concerns. Each receives appropriate, personalized care.

What Bill residents appreciate: we don't judge, we don't condescend, we don't overcharge. We're here to solve your skin and hair problems, simply and effectively.`,

    whyChooseUs: [
      "Local clinic for Bill and nearby areas",
      "Understanding of agricultural skin challenges",
      "Affordable care for rural families",
      "No need to travel to Vadodara city",
      "Respectful treatment for all patients",
      "Simple, effective solutions"
    ],

    services: [
      {
        title: "Agricultural Skin Care",
        description: "Farming families face sun damage, pesticide exposure, and hard water effects. We understand and treat these specific challenges."
      },
      {
        title: "General Dermatology",
        description: "All common skin conditions — allergies, infections, rashes, chronic issues — treated with expertise."
      },
      {
        title: "Affordable Hair Care",
        description: "Hair fall treatment that doesn't require city prices. Effective solutions at accessible rates."
      },
      {
        title: "Skin Infections",
        description: "Quick treatment for fungal infections, bacterial issues, and other common problems."
      },
      {
        title: "Family Skin Health",
        description: "Treat the whole family — children, parents, grandparents — all under one roof."
      },
      {
        title: "Basic Cosmetics",
        description: "Simple treatments for those who want to look better. Affordable and accessible."
      }
    ],

    processSteps: [
      {
        title: "Easy Access",
        description: "Local clinic means less travel. More time for work and family."
      },
      {
        title: "Respectful Consultation",
        description: "We listen without judgment. Every concern is valid."
      },
      {
        title: "Practical Treatment",
        description: "Solutions that fit your life — affordable, sensible, effective."
      },
      {
        title: "Local Support",
        description: "We're part of the community. Available when you need us."
      }
    ],

    faqItems: [
      {
        question: "Do you understand problems faced by farmers?",
        answer: "Yes. Sun exposure, pesticide contact, hard well water, outdoor work conditions — we treat these agricultural skin issues regularly."
      },
      {
        question: "Are your prices affordable for village families?",
        answer: "We price consciously. Basic treatments are very affordable. We won't recommend expensive procedures unnecessarily."
      },
      {
        question: "What languages do you speak?",
        answer: "Gujarati (including local dialect), Hindi, and English. We communicate in whatever makes you comfortable."
      },
      {
        question: "Can elderly patients come to you?",
        answer: "Yes, we welcome patients of all ages. Our staff is patient and respectful with elderly patients."
      },
      {
        question: "Is it as good as city hospital?",
        answer: "For dermatology, absolutely. We have the expertise and equipment to treat skin conditions just as effectively."
      }
    ],

    ctaText: "Bill's Own Skin Specialists",
    ctaDescription: "Quality skincare has come to your village. No more long trips for treatment. We're here, ready to help. Visit us today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="bill"
      content={content}
    />
  );
}
