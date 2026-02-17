import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic Old Padra Road | Best Dermatologist",
  description: "🏆 Top skin & hair clinic on Old Padra Road, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic old padra road, dermatologist old padra road vadodara, hair clinic old padra road, skin doctor near old padra road",
};

export default function OldPadraRoadPage() {
  const content = {
    heroTitle: "Old Padra Road's Complete Skin & Hair Solution",
    heroSubtitle: "Where Vadodara Comes for Real Results",
    
    introContent: `Old Padra Road has been Vadodara's commercial heartbeat for generations. And right here, in the middle of it all, we've built something special — a skin and hair clinic that actually delivers what it promises.

We chose this location deliberately. Old Padra Road is accessible from everywhere in Vadodara — whether you're coming from Gotri, Akota, Manjalpur, or the city center. Great healthcare shouldn't require a journey.

Our patients range from college students battling acne to business owners wanting to look their best, from new mothers dealing with hair fall to grandparents managing chronic skin conditions. Whoever you are, whatever your concern — we're ready to help.`,

    whyChooseUs: [
      "Prime Old Padra Road location — accessible from all of Vadodara",
      "Extended working hours including Sundays",
      "Specialists for both medical and cosmetic dermatology",
      "Modern clinic with all treatments under one roof",
      "Honest assessments — we won't sell you what you don't need",
      "Strong track record with verifiable results"
    ],

    services: [
      {
        title: "Complete Acne Management",
        description: "Acne isn't just a teenager's problem. Adult acne, hormonal breakouts, stubborn blackheads — we've seen it all and know how to treat it. Our approach combines in-clinic treatments with practical skincare you can maintain at home."
      },
      {
        title: "Hair Transplant & Restoration",
        description: "Considering hair transplant? Get it done right the first time. Our FUE technique ensures natural-looking results with minimal downtime. We've restored confidence for hundreds of patients from Old Padra Road and beyond."
      },
      {
        title: "Laser Treatments",
        description: "From permanent hair removal to pigmentation correction and skin tightening — our laser suite handles it all. US FDA approved machines operated by trained professionals."
      },
      {
        title: "Anti-Aging Expertise",
        description: "Aging gracefully doesn't mean accepting every wrinkle. Botox, fillers, thread lifts, and skin boosters — we help you look refreshed, not 'worked on.' Subtle enhancements that preserve your natural appearance."
      },
      {
        title: "Pigmentation Solutions",
        description: "Vadodara's sun is unforgiving on skin. Dark spots, melasma, uneven tone — these are among our most common complaints. And among our most successful treatments. Combination approaches yield best results."
      },
      {
        title: "Hair Fall Investigation",
        description: "Hair fall is a symptom, not a diagnosis. We dig deeper — blood tests, scalp analysis, lifestyle assessment — to find why you're losing hair. Only then do we recommend treatment."
      }
    ],

    processSteps: [
      {
        title: "Reach Out",
        description: "Call, WhatsApp, or walk in. Our front desk team will get you scheduled quickly, often same-day for urgent concerns."
      },
      {
        title: "Detailed Evaluation",
        description: "Your first visit is thorough. We examine, ask questions, and sometimes order tests. Proper diagnosis is non-negotiable."
      },
      {
        title: "Tailored Treatment Plan",
        description: "No two patients are alike. Your treatment plan considers your condition, budget, lifestyle, and goals."
      },
      {
        title: "Treatment & Tracking",
        description: "We deliver treatment and track progress systematically. Adjustments are made as needed until you're satisfied."
      }
    ],

    faqItems: [
      {
        question: "What are your working hours?",
        answer: "We're open Monday to Saturday from 10 AM to 8 PM, and Sundays from 10 AM to 2 PM. We understand busy schedules and try to accommodate accordingly."
      },
      {
        question: "Is there parking near the clinic?",
        answer: "Yes, parking is available nearby. We're also well-connected by auto and city bus routes, making access convenient from anywhere in Vadodara."
      },
      {
        question: "Do you offer free consultations?",
        answer: "We charge a nominal consultation fee that's adjusted against treatment costs if you proceed. Free consultations often lead to rushed assessments — we believe in thorough evaluations."
      },
      {
        question: "Can I see before-after photos of your work?",
        answer: "Absolutely. During your consultation, we can show you relevant before-after cases (with patient consent, of course) so you have realistic expectations."
      },
      {
        question: "What if I'm not satisfied with results?",
        answer: "Open communication is key. If you're not seeing expected progress, tell us. We reassess, adjust treatment if needed, and work with you until you're satisfied. Your results matter to us."
      }
    ],

    ctaText: "Old Padra Road's Best-Kept Secret in Skincare",
    ctaDescription: "Join thousands of satisfied patients who've transformed their skin and hair with us. Your consultation is just a call away — take that first step today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="old-padra-road"
      content={content}
    />
  );
}
