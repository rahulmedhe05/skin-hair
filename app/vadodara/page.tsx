import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Vadodara | #1 Dermatologist",
  description: "🏆 Top skin & hair clinic in Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic vadodara, dermatologist vadodara, hair clinic vadodara, skin doctor near vadodara",
};

export default function VadodaraPage() {
  const content = {
    heroTitle: "Vadodara's Most Trusted Skin & Hair Clinic",
    heroSubtitle: "Where Science Meets Beauty — Real Results, Real People",
    
    introContent: `For over 15 years, we've been the go-to destination for anyone in Vadodara dealing with stubborn skin issues or frustrating hair problems. What sets us apart? We actually listen. 

Every patient who walks through our doors gets a personalized treatment plan — not some cookie-cutter approach that treats everyone the same. Your skin is unique. Your hair concerns are unique. Your treatment should be too.

Our clinic sits at the heart of Vadodara, equipped with the latest technology from the US and Europe. But honestly? The real magic isn't in our machines. It's in our team of board-certified dermatologists and trichologists who genuinely care about getting you results.`,

    whyChooseUs: [
      "MD Dermatologists with 15+ years of hands-on experience",
      "US FDA approved equipment — no shortcuts, no compromises", 
      "Transparent pricing with zero hidden charges",
      "Over 12,000 successful treatments and counting",
      "Located centrally for easy access from all parts of Vadodara",
      "Same-day appointments available for urgent concerns"
    ],

    services: [
      {
        title: "Advanced Acne & Scar Treatment",
        description: "Tired of trying every cream on the shelf? Our medical-grade treatments target acne at its root — whether it's hormonal, bacterial, or lifestyle-related. We combine laser therapy, chemical peels, and customized skincare to give you clear skin that lasts."
      },
      {
        title: "Hair Fall & Hair Transplant Solutions", 
        description: "Hair loss isn't just about genetics. Stress, diet, hormones — there are dozens of triggers. We diagnose the actual cause before recommending PRP, GFC therapy, or hair transplant. No guesswork, just science-backed solutions."
      },
      {
        title: "Laser Hair Removal",
        description: "Permanent hair reduction that actually works. Our US FDA approved lasers are safe for Indian skin tones and deliver smooth, hair-free skin in 6-8 sessions. Men and women both trust us for face, underarms, bikini, and full body treatments."
      },
      {
        title: "Anti-Aging & Skin Rejuvenation",
        description: "Turn back the clock without surgery. Botox, dermal fillers, thread lifts, and HydraFacials — we offer everything you need to look refreshed and youthful. Natural results that make people wonder what your secret is."
      },
      {
        title: "Pigmentation & Skin Brightening",
        description: "Dark spots, melasma, uneven skin tone — these stubborn issues need expert attention. Our combination of laser treatments, chemical peels, and medical-grade products delivers visible results within weeks."
      },
      {
        title: "Medical Dermatology",
        description: "From eczema and psoriasis to vitiligo and fungal infections — we treat the full spectrum of skin conditions. Proper diagnosis, effective treatment, and long-term management plans."
      }
    ],

    processSteps: [
      {
        title: "Book Your Consultation",
        description: "Call us or book online. We'll find a slot that works for your schedule — often same-day for urgent concerns."
      },
      {
        title: "In-Depth Skin/Hair Analysis",
        description: "Our specialists examine your concern thoroughly using advanced diagnostic tools. No rushing, no assumptions."
      },
      {
        title: "Custom Treatment Plan",
        description: "Based on your diagnosis, budget, and goals, we create a treatment plan that makes sense for YOU."
      },
      {
        title: "Treatment & Follow-Up",
        description: "We perform the treatment and schedule follow-ups to track your progress. Your journey doesn't end when you leave our clinic."
      }
    ],

    faqItems: [
      {
        question: "How do I know which treatment is right for me?",
        answer: "That's exactly what your consultation is for. We never recommend treatments without first understanding your specific condition, medical history, and goals. Every treatment plan is customized."
      },
      {
        question: "Are your treatments safe for all skin types?",
        answer: "Absolutely. Our equipment and protocols are specifically calibrated for Indian skin tones (Fitzpatrick types III-V). We've treated thousands of patients across all skin types safely and effectively."
      },
      {
        question: "What's the cost of treatment?",
        answer: "It depends on your condition and the treatment required. We provide transparent pricing upfront — no surprises. EMI options are available for larger treatments like hair transplant."
      },
      {
        question: "How soon will I see results?",
        answer: "It varies by treatment. Some procedures like HydraFacial show instant glow. Acne treatment may take 4-6 weeks. Hair regrowth treatments typically show visible results in 3-4 months. We'll set realistic expectations during consultation."
      },
      {
        question: "Do you offer any guarantees?",
        answer: "While medical treatments can't be 'guaranteed' (anyone who says otherwise is misleading you), we stand behind our work. If you're not seeing expected progress, we reassess and adjust your treatment at no extra charge."
      }
    ],

    ctaText: "Ready to Transform Your Skin & Hair?",
    ctaDescription: "Stop living with skin and hair problems that affect your confidence. Our experts are ready to help you look and feel your best. Book your consultation today — your future self will thank you.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="vadodara"
      content={content}
    />
  );
}
