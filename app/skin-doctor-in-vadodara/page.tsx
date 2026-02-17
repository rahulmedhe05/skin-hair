import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Skin Doctor Vadodara | MD Certified | ₹500",
  description: "🏆 Best skin doctor in Vadodara ✓ MD dermatologist ✓ 15+ years experience ✓ Treats all skin problems ✓ 10,000+ happy patients. Consult ₹500. Book now!",
  keywords: "skin doctor vadodara, best skin doctor vadodara, skin specialist vadodara, dermatologist near me",
};

export default function SkinDoctorPage() {
  const content = {
    heroTitle: "Find the Right Skin Doctor in Vadodara",
    heroSubtitle: "Expert Dermatology That Actually Works",
    
    introContent: `Choosing a skin doctor is personal. You want someone who listens, understands, and actually solves your problem — not someone who rushes through appointments and hands out generic prescriptions.

Good skin doctors are problem-solvers. They dig into what's causing your issue, not just treat the surface symptoms. They explain things clearly so you understand your skin and can take care of it properly.

In Vadodara, we've built our practice on this philosophy. Patients come with frustrations — problems other doctors couldn't solve, confusion about contradictory advice, skepticism after failed treatments. We take the time to investigate, explain, and treat properly. That's why patients keep returning and recommending us.`,

    whyChooseUs: [
      "Thorough investigation of root causes",
      "Clear explanation you can understand",
      "Evidence-based treatment protocols",
      "No unnecessary procedures or products",
      "Genuine interest in solving your problem",
      "Track record of handling difficult cases"
    ],

    services: [
      {
        title: "Diagnostic Excellence",
        description: "Proper diagnosis is half the cure. We investigate thoroughly before treating."
      },
      {
        title: "Acne & Scarring",
        description: "Understanding why you get acne, stopping it, then addressing the marks it left behind."
      },
      {
        title: "Pigmentation Problems",
        description: "Dark spots, uneven tone, melasma — identifying the type and treating it correctly."
      },
      {
        title: "Hair & Scalp",
        description: "Hair fall, thinning, dandruff, scalp conditions — complete hair health management."
      },
      {
        title: "Allergies & Chronic Conditions",
        description: "Eczema, psoriasis, recurring allergies — conditions that need proper ongoing management."
      },
      {
        title: "Skin Infections",
        description: "Fungal, bacterial, viral — quick diagnosis and effective treatment."
      }
    ],

    processSteps: [
      {
        title: "Detailed History",
        description: "We ask questions others don't. Your lifestyle, diet, stress, previous treatments — all matter."
      },
      {
        title: "Proper Examination",
        description: "Actual examination, not just a glance. We look carefully at what's happening."
      },
      {
        title: "Clear Diagnosis",
        description: "We explain what we've found and why. You understand your condition."
      },
      {
        title: "Effective Treatment",
        description: "Treatment plan that makes sense, that you can follow, that actually works."
      }
    ],

    faqItems: [
      {
        question: "What makes a good skin doctor?",
        answer: "Patience to listen, knowledge to diagnose correctly, honesty to recommend only what's needed, and skill to treat effectively. We aim for all four."
      },
      {
        question: "I've tried many treatments without success. Can you help?",
        answer: "Often, treatment failures happen because the underlying cause wasn't identified correctly. We start fresh, investigate properly, and usually find a path forward."
      },
      {
        question: "Will you push expensive procedures?",
        answer: "No. We recommend what works. Sometimes that's simple medication. Sometimes advanced treatment is genuinely needed. We're honest about which is which."
      },
      {
        question: "How long before I see results?",
        answer: "Depends entirely on the condition. Some things improve quickly; others need months. We'll give you realistic timelines upfront."
      },
      {
        question: "Do you treat children?",
        answer: "Yes, we see patients of all ages. Pediatric skin conditions are handled with appropriate gentleness and expertise."
      }
    ],

    ctaText: "Ready to Actually Solve Your Skin Problem?",
    ctaDescription: "Stop living with skin issues. Find a doctor who takes your concerns seriously and has the expertise to help. Book your consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-doctor-in-vadodara"
      content={content}
    />
  );
}
