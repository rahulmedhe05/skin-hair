import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Hand Rejuvenation Experts in Vadodara | Prime One Clinic",
  description: "✅ Hand Rejuvenation by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "hand, rejuvenation vadodara, hand rejuvenation near me, best hand rejuvenation vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/hand-rejuvenation-in-vadodara",
  },
  openGraph: {
    title: "Hand Rejuvenation Experts in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Hand Rejuvenation by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/hand-rejuvenation-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function HandRejuvenationPage() {
  const content = {
    heroTitle: "Hand Rejuvenation Experts in Vadodara",
    heroSubtitle: "Transform Your Appearance with Hand Rejuvenation",
    
    introContent: `Aging is natural, but how you age is largely within your control. Hand Rejuvenation at Prime One Hair & Skin Clinic focuses on natural-looking rejuvenation that enhances your features rather than changing them.

The key to excellent anti-aging results is understanding facial anatomy deeply. Our practitioners study how facial volume changes with age, how bone structure shifts, where skin laxity develops, and how dynamic wrinkles form from repeated expressions. This understanding allows us to create treatment plans that address the root cause of aging changes, not just the surface symptoms.

We believe in a conservative, buildable approach. Starting subtle and adding more as needed always produces better results than doing too much at once. Our patients consistently tell us that friends notice they look refreshed and rested — but can't pinpoint exactly what changed. That's the mark of truly skilled aesthetic work.`,

    whyChooseUs: [
          "Regular training on latest techniques and products",
          "Natural-looking results — subtle enhancement, not overdone",
          "Only genuine, certified injectable products used",
          "Experienced injectors with artistic sensibility",
          "Conservative approach — we can always add, never subtract",
          "Combined treatment plans for comprehensive rejuvenation"
    ],

    services: [
          {
                "title": "PRP Facial Rejuvenation",
                "description": "Platelet-rich plasma applied topically or injected to boost collagen production and give skin a natural, youthful glow."
          },
          {
                "title": "Dermal Fillers",
                "description": "Hyaluronic acid fillers for volume restoration in cheeks, under-eyes, nasolabial folds, lips, and jawline. Natural, reversible results."
          },
          {
                "title": "Botox Treatment",
                "description": "US FDA-approved botulinum toxin injected by experienced practitioners for natural reduction of forehead lines, crow's feet, and frown lines."
          },
          {
                "title": "Thread Lift",
                "description": "PDO thread insertion for non-surgical face lifting and skin tightening. Stimulates collagen formation for long-lasting rejuvenation."
          },
          {
                "title": "HIFU Treatment",
                "description": "High-Intensity Focused Ultrasound that targets deep skin layers for non-invasive lifting and tightening without any downtime."
          },
          {
                "title": "Radiofrequency Skin Tightening",
                "description": "RF energy that heats dermal layers to stimulate new collagen and elastin production for firmer, younger-looking skin."
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
                "question": "What is hand rejuvenation?",
                "answer": "Hand Rejuvenation involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          },
          {
                "question": "How many sessions of hand rejuvenation are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "Why should I choose Prime One for hand rejuvenation?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "How much does hand rejuvenation cost in Vadodara?",
                "answer": "Hand Rejuvenation costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is hand rejuvenation safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, hand rejuvenation is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          }
    ],

    ctaText: "Ready to Start Your Hand Rejuvenation Journey?",
    ctaDescription: "Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hand-rejuvenation-in-vadodara"
      content={content}
    />
  );
}
