import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Sama | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Sama, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic sama, dermatologist sama vadodara, hair clinic sama, skin doctor near sama",
};

export default function SamaPage() {
  const content = {
    heroTitle: "Sama's Complete Skin & Hair Solution",
    heroSubtitle: "Expert Dermatology for Vadodara's Vibrant Eastern Community",
    
    introContent: `Sama — with its blend of established neighborhoods and new developments — is home to some of Vadodara's warmest communities. We're proud to serve this area with the quality skin and hair care it deserves.

Our clinic has become a trusted name in Sama and surrounding areas like New Sama Road and Savli Road. Patients appreciate that we combine expertise with accessibility — top-tier dermatological care without the premium often associated with specialty clinics.

From school kids with skin allergies to seniors managing age-related skin changes, from young professionals wanting cosmetic treatments to homemakers dealing with everyday skin issues — we welcome everyone and treat each with equal care.`,

    whyChooseUs: [
      "Serving Sama, New Sama Road & Savli Road areas",
      "Blend of traditional care values with modern treatment",
      "Experienced doctors who take time to listen",
      "Community-focused clinic with loyal patient base",
      "Full range of services from basic to advanced",
      "Fair pricing that respects your budget"
    ],

    services: [
      {
        title: "General Dermatology",
        description: "Skin rashes, allergies, infections, eczema, psoriasis — we handle the full spectrum of skin conditions with expertise and patience. Proper diagnosis leads to proper treatment."
      },
      {
        title: "Hair Health Management",
        description: "Hair fall, dandruff, scalp issues, premature greying — hair problems affect confidence. We investigate thoroughly and treat the underlying cause, not just the symptoms."
      },
      {
        title: "Acne Care",
        description: "Teen acne, adult acne, hormonal breakouts — each type needs different approach. We customize treatment based on your specific acne pattern and skin type."
      },
      {
        title: "Cosmetic Enhancements",
        description: "Chemical peels, HydraFacials, skin tightening, and anti-aging treatments. Looking good is feeling good — we help you achieve both."
      },
      {
        title: "Laser Services",
        description: "Hair removal, pigmentation treatment, scar reduction — our laser treatments deliver results safely and effectively."
      },
      {
        title: "Pediatric Skin Care",
        description: "Children's skin is delicate and different from adults. We provide gentle, appropriate treatment for skin issues in babies, toddlers, and older children."
      }
    ],

    processSteps: [
      {
        title: "Schedule Your Visit",
        description: "Call or message to book. We'll find a convenient time that works for you and your family."
      },
      {
        title: "Thorough Examination",
        description: "We don't rush consultations. Your concerns are heard, your condition is examined properly."
      },
      {
        title: "Clear Explanation",
        description: "We explain the diagnosis and treatment options in simple language. No confusing medical jargon."
      },
      {
        title: "Personalized Treatment",
        description: "Treatment tailored to your condition, preferences, and practical constraints."
      }
    ],

    faqItems: [
      {
        question: "How do I reach your clinic from Sama?",
        answer: "We're easily accessible from main Sama area. Specific directions are provided when you book. Auto-rickshaws are readily available from Sama circle."
      },
      {
        question: "Can the whole family get treated at your clinic?",
        answer: "Absolutely! We treat all ages — from infants to grandparents. Family appointments can be scheduled together for convenience."
      },
      {
        question: "Are your treatments suitable for sensitive skin?",
        answer: "Yes. We always assess skin type and sensitivity before recommending treatments. For sensitive skin, we use gentler approaches and conduct patch tests when appropriate."
      },
      {
        question: "What if my child is scared of doctors?",
        answer: "We're experienced with young patients. Our staff is patient and gentle with children. We make the experience as comfortable as possible."
      },
      {
        question: "Do you provide diet and lifestyle advice too?",
        answer: "Yes, skin and hair health are connected to overall wellness. We provide practical diet and lifestyle recommendations alongside treatments."
      }
    ],

    ctaText: "Sama's Families Trust Our Care",
    ctaDescription: "Join the community that trusts us with their skin and hair health. Whether it's a minor concern or a major treatment — we're here for you. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="sama"
      content={content}
    />
  );
}
