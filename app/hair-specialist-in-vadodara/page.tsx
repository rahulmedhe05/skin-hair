import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Hair Specialist Vadodara | Stop Hair Fall | ₹500",
  description: "💇 Best hair specialist in Vadodara ✓ MD certified ✓ Treats all hair problems ✓ PRP, GFC, transplant available ✓ 8,000+ patients. Consult ₹500. Book!",
  keywords: "hair specialist vadodara, hair doctor vadodara, trichologist vadodara, hair specialist near me",
};

export default function HairSpecialistPage() {
  const content = {
    heroTitle: "Expert Hair Specialist in Vadodara",
    heroSubtitle: "Dedicated Expertise for Your Hair Concerns",
    
    introContent: `Hair problems need specialized attention. General practitioners treat hair as an afterthought. A hair specialist dedicates focused expertise to understanding hair biology, diagnosing hair conditions accurately, and treating them effectively.

This specialization matters because hair medicine is nuanced. Hair loss has dozens of causes. Scalp conditions affect hair differently. Treatment timing, choice, and combination affect outcomes dramatically. Expertise produces better results.

We've built specific expertise in hair medicine — understanding the hair cycle, the different conditions that disrupt it, and the treatments that restore normal growth. This focused knowledge translates into better outcomes for patients.`,

    whyChooseUs: [
      "Focused hair medicine expertise",
      "Deep understanding of hair biology",
      "Accurate diagnosis of hair conditions",
      "Multiple treatment modalities available",
      "Both medical and procedural options",
      "Ongoing research into hair treatments"
    ],

    services: [
      {
        title: "Hair Loss Diagnosis",
        description: "Specialized assessment to identify exact cause — essential for effective treatment."
      },
      {
        title: "Pattern Baldness Management",
        description: "Expert treatment of androgenetic alopecia in men and women."
      },
      {
        title: "Scalp Conditions",
        description: "Treating scalp problems that affect hair health and growth."
      },
      {
        title: "Hair Restoration Therapies",
        description: "PRP, GFC, mesotherapy — regenerative treatments for hair growth."
      },
      {
        title: "Hair Transplant Consultation",
        description: "Assessment for surgical hair restoration when appropriate."
      },
      {
        title: "Ongoing Hair Care",
        description: "Long-term management strategies for continued hair health."
      }
    ],

    processSteps: [
      {
        title: "Specialist Evaluation",
        description: "Detailed history, trichoscopy, and examination by hair specialist."
      },
      {
        title: "Expert Diagnosis",
        description: "Precise identification of condition using specialized knowledge."
      },
      {
        title: "Targeted Treatment",
        description: "Treatment selection based on expert understanding of what works."
      },
      {
        title: "Specialist Monitoring",
        description: "Ongoing care with someone who understands hair medicine deeply."
      }
    ],

    faqItems: [
      {
        question: "What's the difference between a dermatologist and a hair specialist?",
        answer: "A hair specialist is typically a dermatologist with additional focus on hair medicine. The specialization means deeper knowledge and more experience with hair conditions specifically."
      },
      {
        question: "Do I need a specialist or will any doctor do?",
        answer: "For simple, obvious issues, general doctors may suffice. For persistent problems, unclear diagnosis, or failed previous treatments, specialist expertise makes a difference."
      },
      {
        question: "What can a hair specialist do that others can't?",
        answer: "More accurate diagnosis, broader treatment options, deeper understanding of when and how to combine treatments, and experience managing complex cases."
      },
      {
        question: "How do I know if I have a serious hair problem?",
        answer: "Sudden increased shedding, visible scalp through hair, patchy loss, or scalp changes all warrant specialist evaluation."
      },
      {
        question: "Can a hair specialist treat all hair problems?",
        answer: "Most — from common pattern baldness to rare conditions. Complex cases may benefit from multi-specialty coordination."
      }
    ],

    ctaText: "See a Real Hair Specialist",
    ctaDescription: "Hair problems deserve focused expertise. Don't settle for generic advice. See a specialist who deeply understands hair medicine. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-specialist-in-vadodara"
      content={content}
    />
  );
}
