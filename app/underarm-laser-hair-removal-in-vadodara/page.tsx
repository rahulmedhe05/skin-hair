import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Underarm Laser Hair Removal Experts in Vadodara | Prime One Clinic",
  description: "Underarm Laser Hair Removal - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "underarm, laser, hair, removal vadodara, underarm laser hair near me, best underarm laser vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/underarm-laser-hair-removal-in-vadodara",
  },
  openGraph: {
    title: "Underarm Laser Hair Removal Experts in Vadodara | Prime One Hair & Skin Clinic",
    description: "Underarm Laser Hair Removal - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/underarm-laser-hair-removal-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function UnderarmLaserHairRemovalPage() {
  const content = {
    heroTitle: "Underarm Laser Hair Removal Experts in Vadodara",
    heroSubtitle: "Transform Your Appearance with Underarm Laser Hair Removal",
    
    introContent: `Underarm Laser Hair Removal uses precisely calibrated light energy to address specific skin and hair concerns with remarkable accuracy. Unlike older methods, modern laser technology can target specific tissues while leaving surrounding skin completely untouched.

Our laser suite at Prime One Hair & Skin Clinic features US FDA-cleared devices chosen for their proven safety profile on Indian skin tones. This is particularly important because laser parameters that work on lighter skin can cause complications on darker skin types — our specialists understand these nuances deeply.

Each underarm laser hair removal session is preceded by a thorough assessment of your skin type, the condition being treated, and your treatment history. We customize laser settings for every individual, because a one-size-fits-all approach simply doesn't work in dermatology. Our practitioners undergo continuous training on the latest laser techniques and safety protocols.`,

    whyChooseUs: [
          "Regular device maintenance and calibration schedules",
          "US FDA-approved laser devices for proven safety",
          "Parameters customized for Indian skin tones (Fitzpatrick IV-V)",
          "Strict safety protocols and eye protection",
          "Multiple laser platforms for different conditions",
          "Built-in cooling systems for comfortable treatments"
    ],

    services: [
          {
                "title": "Laser Skin Tightening",
                "description": "Non-ablative laser that heats deep skin layers to stimulate collagen production, resulting in firmer, tighter skin over time."
          },
          {
                "title": "Laser Skin Resurfacing",
                "description": "Fractional CO2 or Erbium lasers that resurface skin, reduce scars, tighten pores, and stimulate collagen for younger-looking skin."
          },
          {
                "title": "Laser Hair Removal",
                "description": "Permanent hair reduction using diode or Nd:YAG lasers with parameters optimized for Indian skin. Safe, effective, and comfortable."
          },
          {
                "title": "Laser Pigmentation Treatment",
                "description": "Q-switched Nd:YAG laser targeting melanin deposits for effective removal of dark spots, melasma patches, and uneven pigmentation."
          },
          {
                "title": "Laser Tattoo Removal",
                "description": "Multi-wavelength Q-switched laser that breaks down tattoo ink particles safely, with progressive fading over multiple sessions."
          },
          {
                "title": "Laser Mole/Wart Removal",
                "description": "Precise CO2 laser removal of benign skin growths with minimal scarring and quick healing time."
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
                "question": "Is underarm laser hair removal safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, underarm laser hair removal is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is underarm laser hair removal?",
                "answer": "Underarm Laser Hair Removal involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does underarm laser hair removal cost in Vadodara?",
                "answer": "Underarm Laser Hair Removal costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of underarm laser hair removal are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for underarm laser hair removal?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Underarm Laser Hair Removal Today",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="underarm-laser-hair-removal-in-vadodara"
      content={content}
    />
  );
}
