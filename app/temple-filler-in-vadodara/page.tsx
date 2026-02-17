import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Leading Temple Filler in Vadodara | Prime One Clinic",
  description: "Looking for temple filler? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
  keywords: "temple, filler vadodara, temple filler near me, best temple filler vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/temple-filler-in-vadodara",
  },
  openGraph: {
    title: "Leading Temple Filler in Vadodara | Prime One Hair & Skin Clinic",
    description: "Looking for temple filler? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!",
    url: "https://skinhairvadodara.in/temple-filler-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function TempleFillerPage() {
  const content = {
    heroTitle: "Leading Temple Filler in Vadodara",
    heroSubtitle: "Clinically Proven Results with Temple Filler",
    
    introContent: `Aging is natural, but how you age is largely within your control. Temple Filler at Prime One Hair & Skin Clinic focuses on natural-looking rejuvenation that enhances your features rather than changing them.

The key to excellent anti-aging results is understanding facial anatomy deeply. Our practitioners study how facial volume changes with age, how bone structure shifts, where skin laxity develops, and how dynamic wrinkles form from repeated expressions. This understanding allows us to create treatment plans that address the root cause of aging changes, not just the surface symptoms.

We believe in a conservative, buildable approach. Starting subtle and adding more as needed always produces better results than doing too much at once. Our patients consistently tell us that friends notice they look refreshed and rested — but can't pinpoint exactly what changed. That's the mark of truly skilled aesthetic work.`,

    whyChooseUs: [
          "Experienced injectors with artistic sensibility",
          "Zero downtime for most anti-aging procedures",
          "Regular training on latest techniques and products",
          "Conservative approach — we can always add, never subtract",
          "Only genuine, certified injectable products used",
          "Detailed facial analysis before any procedure"
    ],

    services: [
          {
                "title": "Dermal Fillers",
                "description": "Hyaluronic acid fillers for volume restoration in cheeks, under-eyes, nasolabial folds, lips, and jawline. Natural, reversible results."
          },
          {
                "title": "HIFU Treatment",
                "description": "High-Intensity Focused Ultrasound that targets deep skin layers for non-invasive lifting and tightening without any downtime."
          },
          {
                "title": "Thread Lift",
                "description": "PDO thread insertion for non-surgical face lifting and skin tightening. Stimulates collagen formation for long-lasting rejuvenation."
          },
          {
                "title": "Radiofrequency Skin Tightening",
                "description": "RF energy that heats dermal layers to stimulate new collagen and elastin production for firmer, younger-looking skin."
          },
          {
                "title": "PRP Facial Rejuvenation",
                "description": "Platelet-rich plasma applied topically or injected to boost collagen production and give skin a natural, youthful glow."
          },
          {
                "title": "Botox Treatment",
                "description": "US FDA-approved botulinum toxin injected by experienced practitioners for natural reduction of forehead lines, crow's feet, and frown lines."
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
                "question": "How many sessions of temple filler are needed?",
                "answer": "The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation."
          },
          {
                "question": "How much does temple filler cost in Vadodara?",
                "answer": "Temple Filler costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges."
          },
          {
                "question": "Is temple filler safe?",
                "answer": "When performed by qualified dermatologists using approved equipment and products, temple filler is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand."
          },
          {
                "question": "Why should I choose Prime One for temple filler?",
                "answer": "Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara."
          },
          {
                "question": "What is temple filler?",
                "answer": "Temple Filler involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs."
          }
    ],

    ctaText: "Your Temple Filler Consultation Awaits",
    ctaDescription: "Professional temple filler doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="temple-filler-in-vadodara"
      content={content}
    />
  );
}
