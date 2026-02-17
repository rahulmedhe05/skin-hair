import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic Vasna Bhayli Road | Dermatologist",
  description: "🏆 Top skin & hair clinic on Vasna Bhayli Road ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic vasna bhayli road, dermatologist vasna bhayli vadodara, hair clinic vasna bhayli, skin doctor near vasna bhayli",
};

export default function VasnaBhayliRoadPage() {
  const content = {
    heroTitle: "Premium Skin & Hair Care on Vasna Bhayli Road",
    heroSubtitle: "Bringing Advanced Dermatology to Vadodara's Fast-Growing Corridor",
    
    introContent: `The Vasna-Bhayli stretch has seen incredible growth over the past few years. New residential projects, improved infrastructure, and a growing community of families and professionals call this area home.

We saw the need for quality healthcare services in this developing corridor. That's why we're here — to ensure residents of Vasna, Bhayli, and surrounding areas have access to advanced skin and hair treatments without the long commute to central Vadodara.

Our clinic serves everyone from young families in newly developed societies to established residents who've called this area home for decades. Whatever your skin or hair concern, we're equipped and ready to help.`,

    whyChooseUs: [
      "Conveniently located on the Vasna-Bhayli corridor",
      "Serving residents from Vasna, Bhayli, Sevasi & nearby areas",
      "Full range of dermatological services under one roof",
      "Modern facility in a growing neighborhood",
      "Experienced doctors with patient-first approach",
      "No more traveling to city center for quality care"
    ],

    services: [
      {
        title: "Complete Skin Care Services",
        description: "From basic consultations to advanced laser treatments — we've got your skin covered. Acne, pigmentation, aging, infections — whatever the issue, we have the solution."
      },
      {
        title: "Hair Fall & Thinning Treatment",
        description: "Hair problems are increasingly common among residents of developing areas (new construction dust, water quality changes, stress of moving). We address these specific concerns along with standard hair fall treatment."
      },
      {
        title: "Family Dermatology",
        description: "Young families are the backbone of Vasna-Bhayli. We offer pediatric dermatology for your little ones and age-appropriate treatments for every family member."
      },
      {
        title: "Laser Hair Removal",
        description: "Permanent hair reduction is one of our most requested services. Safe, effective, and increasingly affordable — a practical investment for busy individuals."
      },
      {
        title: "Skin Brightening & Glow Treatments",
        description: "Look your best for special occasions or just everyday confidence. Chemical peels, facials, and brightening treatments that deliver visible results."
      },
      {
        title: "Hair Transplant Consultations",
        description: "Considering hair restoration? We provide honest assessments and realistic expectations. If you're a good candidate, we'll guide you through the process."
      }
    ],

    processSteps: [
      {
        title: "Easy Scheduling",
        description: "Call or book online. We accommodate the schedules of working professionals and homemakers alike."
      },
      {
        title: "Welcoming Consultation",
        description: "First visits are thorough but comfortable. We want to understand your concerns completely."
      },
      {
        title: "Personalized Treatment",
        description: "Your treatment plan is designed for your specific needs, lifestyle, and budget."
      },
      {
        title: "Ongoing Support",
        description: "Treatments don't end at the clinic door. We provide aftercare guidance and follow-up support."
      }
    ],

    faqItems: [
      {
        question: "Is your clinic easy to find on Vasna Bhayli Road?",
        answer: "Yes, we're located at a prominent spot on the main road. Landmarks and directions are provided when you book. Ample parking available."
      },
      {
        question: "Do you serve patients from Bhayli and Sevasi too?",
        answer: "Absolutely. We serve the entire Vasna-Bhayli-Sevasi corridor and surrounding areas. Many patients prefer us over traveling to central Vadodara."
      },
      {
        question: "Are your prices higher than city-center clinics?",
        answer: "Actually, our overhead is lower here, and we pass those savings to patients. You'll find our pricing competitive while receiving the same quality of care."
      },
      {
        question: "What about water quality affecting skin?",
        answer: "Great question — we see this often. Hard water in new construction areas can affect skin and hair. We factor this into our treatment recommendations and suggest practical solutions."
      },
      {
        question: "Do you offer home services for elderly patients?",
        answer: "For mobility-restricted patients in nearby areas, we can arrange home consultations. Please call to discuss your specific needs."
      }
    ],

    ctaText: "Quality Skincare Has Arrived on Your Doorstep",
    ctaDescription: "Vasna Bhayli Road residents no longer need to travel far for excellent dermatological care. We're your neighborhood skin and hair experts — book your visit today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="vasna-bhayli-road"
      content={content}
    />
  );
}
