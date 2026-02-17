import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Tarsali | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Tarsali, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic tarsali, dermatologist tarsali vadodara, hair clinic tarsali, skin doctor near tarsali",
};

export default function TarsaliPage() {
  const content = {
    heroTitle: "Tarsali's Advanced Skin & Hair Clinic",
    heroSubtitle: "Modern Dermatology for Vadodara's Dynamic Southern Hub",
    
    introContent: `Tarsali has emerged as one of Vadodara's most dynamic areas. With excellent connectivity via the ring road, growing commercial establishments, and premium residential projects, it's become a magnet for young professionals and families.

Our clinic matches Tarsali's modern energy. Contemporary facility, latest equipment, and doctors who understand what today's patients want — quick appointments, effective treatments, clear communication, and fair pricing.

The Tarsali crowd is informed. They research before they book, they ask questions, they expect answers. We welcome that. Informed patients make better decisions, and we're confident in what we offer.`,

    whyChooseUs: [
      "Modern clinic for modern Tarsali",
      "Near Ring Road — accessible from all directions",
      "Latest technology and treatment protocols",
      "Transparent pricing with no hidden costs",
      "Efficient appointments that respect your time",
      "Results that speak for themselves"
    ],

    services: [
      {
        title: "Advanced Acne Treatment",
        description: "Beyond basic creams and medications. We use laser, chemical peels, and advanced protocols for stubborn acne that hasn't responded to regular treatment."
      },
      {
        title: "Hair Restoration",
        description: "PRP, GFC, mesotherapy, and hair transplant options. We assess your hair loss type and recommend what will actually work for you."
      },
      {
        title: "Laser Hair Removal",
        description: "Fast, effective, and increasingly affordable. Our US FDA approved lasers deliver permanent hair reduction safely."
      },
      {
        title: "Anti-Aging Solutions",
        description: "Botox, fillers, thread lifts, and skin boosters. Looking younger isn't about vanity — it's about feeling confident."
      },
      {
        title: "Skin Brightening & Pigmentation",
        description: "Dark spots, uneven tone, melasma — these common concerns respond well to our combination approach."
      },
      {
        title: "Quick Result Facials",
        description: "HydraFacial, carbon laser, medi-facials — visible glow in under an hour. Perfect before events or just for regular skin maintenance."
      }
    ],

    processSteps: [
      {
        title: "Online Booking",
        description: "Book your slot online — no phone calls, no waiting. Pick a time that suits you."
      },
      {
        title: "Efficient Consultation",
        description: "Thorough but not drawn-out. We respect your time while ensuring nothing is missed."
      },
      {
        title: "Clear Treatment Plan",
        description: "What we'll do, how much it costs, how long it takes, what results to expect. All clear upfront."
      },
      {
        title: "Measurable Results",
        description: "Before-after documentation, progress tracking, and honest assessment of outcomes."
      }
    ],

    faqItems: [
      {
        question: "How long does a typical appointment take?",
        answer: "Consultations are usually 15-20 minutes. Treatments vary — quick facials take 45 minutes, laser sessions 30-60 minutes depending on area. We run on schedule."
      },
      {
        question: "Can I see your before-after results?",
        answer: "Yes, we document results (with patient consent) and can show you relevant cases during consultation. We believe in demonstrated outcomes."
      },
      {
        question: "Is everything on your price list or are there hidden costs?",
        answer: "What we quote is what you pay. Consultation fees, treatment costs, required products — all disclosed upfront. No surprise charges."
      },
      {
        question: "Do you offer EMI on treatments?",
        answer: "Yes, for larger treatments like hair transplant, we offer EMI through partner financial institutions."
      },
      {
        question: "How's parking near your Tarsali clinic?",
        answer: "Ample parking available. Tarsali's modern infrastructure means you won't struggle to find a spot."
      }
    ],

    ctaText: "Tarsali Expects the Best — We Deliver",
    ctaDescription: "Modern problems need modern solutions. Your skin and hair concerns deserve expert attention. Book your consultation now.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="tarsali"
      content={content}
    />
  );
}
