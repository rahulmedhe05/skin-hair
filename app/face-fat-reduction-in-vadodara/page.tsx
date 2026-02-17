import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Trusted Face Fat Reduction in Vadodara | Prime One Clinic",
  description: "Looking for face fat reduction? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "face, fat, reduction vadodara, face fat reduction near me, best face fat vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/face-fat-reduction-in-vadodara",
  },
  openGraph: {
    title: "Trusted Face Fat Reduction in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for face fat reduction? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/face-fat-reduction-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function FaceFatReductionPage() {
  const content = {
    heroTitle: "Trusted Face Fat Reduction in Vadodara",
    heroSubtitle: "Where Science Meets Beauty",
    
    introContent: `Aging is natural, but how you age is largely within your control. Face Fat Reduction at Prime One Hair & Skin Clinic focuses on natural-looking rejuvenation that enhances your features rather than changing them.

The key to excellent anti-aging results is understanding facial anatomy deeply. Our practitioners study how facial volume changes with age, how bone structure shifts, where skin laxity develops, and how dynamic wrinkles form from repeated expressions. This understanding allows us to create treatment plans that address the root cause of aging changes, not just the surface symptoms.

We believe in a conservative, buildable approach. Starting subtle and adding more as needed always produces better results than doing too much at once. Our patients consistently tell us that friends notice they look refreshed and rested — but can't pinpoint exactly what changed. That's the mark of truly skilled aesthetic work.`,

    whyChooseUs: [
          "Combined treatment plans for comprehensive rejuvenation",
          "Experienced injectors with artistic sensibility",
          "Zero downtime for most anti-aging procedures",
          "Detailed facial analysis before any procedure",
          "Natural-looking results — subtle enhancement, not overdone",
          "Only genuine, certified injectable products used"
    ],

    services: [
          {
                "title": "Radiofrequency Skin Tightening",
                "description": "RF energy that heats dermal layers to stimulate new collagen and elastin production for firmer, younger-looking skin."
          },
          {
                "title": "Botox Treatment",
                "description": "US FDA-approved botulinum toxin injected by experienced practitioners for natural reduction of forehead lines, crow's feet, and frown lines."
          },
          {
                "title": "PRP Facial Rejuvenation",
                "description": "Platelet-rich plasma applied topically or injected to boost collagen production and give skin a natural, youthful glow."
          },
          {
                "title": "Dermal Fillers",
                "description": "Hyaluronic acid fillers for volume restoration in cheeks, under-eyes, nasolabial folds, lips, and jawline. Natural, reversible results."
          },
          {
                "title": "Thread Lift",
                "description": "PDO thread insertion for non-surgical face lifting and skin tightening. Stimulates collagen formation for long-lasting rejuvenation."
          },
          {
                "title": "HIFU Treatment",
                "description": "High-Intensity Focused Ultrasound that targets deep skin layers for non-invasive lifting and tightening without any downtime."
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
                "question": "How many sessions of face fat reduction are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does face fat reduction cost in Vadodara?",
                "answer": "Face Fat Reduction costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is face fat reduction safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, face fat reduction is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for face fat reduction?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is face fat reduction?",
                "answer": "Face Fat Reduction involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Face Fat Reduction Consultation Awaits",
    ctaDescription: "Join 10,000+ satisfied patients who chose Prime One for their face fat reduction. Your transformation starts with a simple phone call.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="face-fat-reduction-in-vadodara"
      content={content}
    />
  );
}
