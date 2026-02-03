import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Dermatologist in Vadodara | MD Skin Doctor | ₹500",
  description: "🏆 Top dermatologist in Vadodara ✓ MD certified ✓ 15+ years experience ✓ All skin & hair problems ✓ 10,000+ patients treated. Consult ₹500. Book today!",
  keywords: "dermatologist vadodara, skin doctor vadodara, dermatologist near me, best dermatologist vadodara",
};

export default function DermatologistPage() {
  const content = {
    heroTitle: "Qualified Dermatologist Care in Vadodara",
    heroSubtitle: "MD-Trained Expertise for Skin & Hair",
    
    introContent: `A dermatologist is a physician who has completed medical school plus additional specialized training in skin, hair, and nail conditions. This matters because skin problems can be deceptively complex — what looks simple on the surface often has deeper causes.

That extra training teaches pattern recognition. A dermatologist has seen thousands of variations of conditions, understands which treatments work for which presentations, and knows when something that looks routine might actually be serious.

In Vadodara, our practice is built on this foundation of proper dermatological training. We bring formal expertise, clinical experience, and genuine commitment to staying current with medical advances. The combination gives patients confidence that they're getting care based on real knowledge.`,

    whyChooseUs: [
      "MD Dermatology qualification",
      "Years of clinical experience",
      "Continuous medical education",
      "Evidence-based treatment approach",
      "Both medical and cosmetic expertise",
      "Patient-centered care philosophy"
    ],

    services: [
      {
        title: "Medical Dermatology",
        description: "The foundation — accurate diagnosis and effective treatment of skin diseases based on proper medical training."
      },
      {
        title: "Hair Disorders",
        description: "Pattern baldness, alopecia variants, scalp conditions — complete hair medicine expertise."
      },
      {
        title: "Cosmetic Dermatology",
        description: "Aesthetic enhancement grounded in medical understanding of skin."
      },
      {
        title: "Pediatric Dermatology",
        description: "Children's skin conditions handled with appropriate expertise and gentleness."
      },
      {
        title: "Dermatological Surgery",
        description: "Biopsies, excisions, mole removal — procedural skills when needed."
      },
      {
        title: "Chronic Condition Management",
        description: "Psoriasis, eczema, vitiligo — long-term management of ongoing conditions."
      }
    ],

    processSteps: [
      {
        title: "Clinical Assessment",
        description: "Proper medical evaluation — history, examination, and clinical reasoning."
      },
      {
        title: "Accurate Diagnosis",
        description: "Training and experience applied to identify exactly what's happening."
      },
      {
        title: "Treatment Selection",
        description: "Choosing the right approach from the full range of dermatological options."
      },
      {
        title: "Monitoring & Adjustment",
        description: "Following progress and adapting treatment as needed."
      }
    ],

    faqItems: [
      {
        question: "What's the difference between a dermatologist and a skin specialist?",
        answer: "Dermatologist specifically refers to an MD-qualified physician with specialized dermatology training. It's a regulated title that indicates formal medical qualification."
      },
      {
        question: "What conditions do dermatologists treat?",
        answer: "Everything affecting skin, hair, and nails — from common acne and eczema to rare autoimmune conditions, from cosmetic concerns to potential skin cancers."
      },
      {
        question: "Should I see a dermatologist for minor skin issues?",
        answer: "For persistent or recurring issues, yes. What seems minor might have underlying causes worth investigating. For truly simple issues, your general doctor may suffice."
      },
      {
        question: "How do I verify a dermatologist's credentials?",
        answer: "MD Dermatology from a recognized institution is the key qualification. Registration with the state medical council is mandatory."
      },
      {
        question: "Do dermatologists only treat diseases or do they also do cosmetics?",
        answer: "Both. Medical dermatology (diseases) and cosmetic dermatology (aesthetic enhancement) are both within our scope. Many patients need aspects of both."
      }
    ],

    ctaText: "See a Real Dermatologist",
    ctaDescription: "Proper training, proper diagnosis, proper treatment. Get MD-qualified dermatological care for your skin and hair concerns. Book your appointment.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="dermatologist-in-vadodara"
      content={content}
    />
  );
}
