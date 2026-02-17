import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Laser Wart Removal in Vadodara | Prime One Clinic",
  description: "Get the best laser wart removal at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "laser, wart, removal vadodara, laser wart removal near me, best laser wart vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/laser-wart-removal-in-vadodara",
  },
  openGraph: {
    title: "Best Laser Wart Removal in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best laser wart removal at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/laser-wart-removal-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function LaserWartRemovalPage() {
  const content = {
    heroTitle: "Best Laser Wart Removal in Vadodara",
    heroSubtitle: "Evidence-Based Laser Wart Removal That Actually Works",
    
    introContent: `Laser Wart Removal uses precisely calibrated light energy to address specific skin and hair concerns with remarkable accuracy. Unlike older methods, modern laser technology can target specific tissues while leaving surrounding skin completely untouched.

Our laser suite at Prime One Hair & Skin Clinic features US FDA-cleared devices chosen for their proven safety profile on Indian skin tones. This is particularly important because laser parameters that work on lighter skin can cause complications on darker skin types — our specialists understand these nuances deeply.

Each laser wart removal session is preceded by a thorough assessment of your skin type, the condition being treated, and your treatment history. We customize laser settings for every individual, because a one-size-fits-all approach simply doesn't work in dermatology. Our practitioners undergo continuous training on the latest laser techniques and safety protocols.`,

    whyChooseUs: [
          "Certified laser practitioners with specialized training",
          "Multiple laser platforms for different conditions",
          "Built-in cooling systems for comfortable treatments",
          "US FDA-approved laser devices for proven safety",
          "Results visible from the very first session",
          "Regular device maintenance and calibration schedules"
    ],

    services: [
          {
                "title": "Laser Pigmentation Treatment",
                "description": "Q-switched Nd:YAG laser targeting melanin deposits for effective removal of dark spots, melasma patches, and uneven pigmentation."
          },
          {
                "title": "Laser Mole/Wart Removal",
                "description": "Precise CO2 laser removal of benign skin growths with minimal scarring and quick healing time."
          },
          {
                "title": "Laser Tattoo Removal",
                "description": "Multi-wavelength Q-switched laser that breaks down tattoo ink particles safely, with progressive fading over multiple sessions."
          },
          {
                "title": "Laser Skin Tightening",
                "description": "Non-ablative laser that heats deep skin layers to stimulate collagen production, resulting in firmer, tighter skin over time."
          },
          {
                "title": "Laser Hair Removal",
                "description": "Permanent hair reduction using diode or Nd:YAG lasers with parameters optimized for Indian skin. Safe, effective, and comfortable."
          },
          {
                "title": "Laser Skin Resurfacing",
                "description": "Fractional CO2 or Erbium lasers that resurface skin, reduce scars, tighten pores, and stimulate collagen for younger-looking skin."
          }
    ],

    processSteps: [
          {
                "title": "Consultation",
                "description": "Thorough assessment of your concerns by our specialist with advanced diagnostics."
          },
          {
                "title": "Treatment Plan",
                "description": "Personalized treatment protocol explained clearly with realistic expectations."
          },
          {
                "title": "Treatment Sessions",
                "description": "Professional procedures performed with the latest technology in a comfortable setting."
          },
          {
                "title": "Follow-Up Care",
                "description": "Regular monitoring, progress tracking, and plan adjustments for optimal results."
          }
    ],

    faqItems: [
          {
                "question": "Why should I choose Prime One for laser wart removal?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "Is laser wart removal safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, laser wart removal is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "How many sessions of laser wart removal are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "What is laser wart removal?",
                "answer": "Laser Wart Removal involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does laser wart removal cost in Vadodara?",
                "answer": "Laser Wart Removal costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          }
    ],

    ctaText: "Don't Wait — Book Your Laser Wart Removal Now",
    ctaDescription: "Stop waiting and start seeing results. Book a consultation with our specialist for personalized laser wart removal that actually works.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="laser-wart-removal-in-vadodara"
      content={content}
    />
  );
}
