import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Professional Under Eye Wrinkle Treatment in Vadodara | Prime One Clinic",
  description: "Under Eye Wrinkle Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
  keywords: "under, eye, wrinkle, treatment vadodara, under eye wrinkle near me, best under eye vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/under-eye-wrinkle-treatment-in-vadodara",
  },
  openGraph: {
    title: "Professional Under Eye Wrinkle Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Under Eye Wrinkle Treatment - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!",
    url: "https://skinhairvadodara.in/under-eye-wrinkle-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function UnderEyeWrinkleTreatmentPage() {
  const content = {
    heroTitle: "Professional Under Eye Wrinkle Treatment in Vadodara",
    heroSubtitle: "Personalized Under Eye Wrinkle Treatment for Lasting Results",
    
    introContent: `Aging is natural, but how you age is largely within your control. Under Eye Wrinkle Treatment at Prime One Hair & Skin Clinic focuses on natural-looking rejuvenation that enhances your features rather than changing them.

The key to excellent anti-aging results is understanding facial anatomy deeply. Our practitioners study how facial volume changes with age, how bone structure shifts, where skin laxity develops, and how dynamic wrinkles form from repeated expressions. This understanding allows us to create treatment plans that address the root cause of aging changes, not just the surface symptoms.

We believe in a conservative, buildable approach. Starting subtle and adding more as needed always produces better results than doing too much at once. Our patients consistently tell us that friends notice they look refreshed and rested — but can't pinpoint exactly what changed. That's the mark of truly skilled aesthetic work.`,

    whyChooseUs: [
          "Conservative approach — we can always add, never subtract",
          "Combined treatment plans for comprehensive rejuvenation",
          "Experienced injectors with artistic sensibility",
          "Only genuine, certified injectable products used",
          "Regular training on latest techniques and products",
          "Natural-looking results — subtle enhancement, not overdone"
    ],

    services: [
          {
                "title": "HIFU Treatment",
                "description": "High-Intensity Focused Ultrasound that targets deep skin layers for non-invasive lifting and tightening without any downtime."
          },
          {
                "title": "PRP Facial Rejuvenation",
                "description": "Platelet-rich plasma applied topically or injected to boost collagen production and give skin a natural, youthful glow."
          },
          {
                "title": "Radiofrequency Skin Tightening",
                "description": "RF energy that heats dermal layers to stimulate new collagen and elastin production for firmer, younger-looking skin."
          },
          {
                "title": "Botox Treatment",
                "description": "US FDA-approved botulinum toxin injected by experienced practitioners for natural reduction of forehead lines, crow's feet, and frown lines."
          },
          {
                "title": "Dermal Fillers",
                "description": "Hyaluronic acid fillers for volume restoration in cheeks, under-eyes, nasolabial folds, lips, and jawline. Natural, reversible results."
          },
          {
                "title": "Thread Lift",
                "description": "PDO thread insertion for non-surgical face lifting and skin tightening. Stimulates collagen formation for long-lasting rejuvenation."
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
                "question": "Is under eye wrinkle treatment safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, under eye wrinkle treatment is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "What is under eye wrinkle treatment?",
                "answer": "Under Eye Wrinkle Treatment involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How much does under eye wrinkle treatment cost in Vadodara?",
                "answer": "Under Eye Wrinkle Treatment costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "How many sessions of under eye wrinkle treatment are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for under eye wrinkle treatment?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          }
    ],

    ctaText: "Get Expert Under Eye Wrinkle Treatment Today",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="under-eye-wrinkle-treatment-in-vadodara"
      content={content}
    />
  );
}
