import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Skin Clinic Vadodara | Advanced Tech | ₹500",
  description: "🏆 Best skin clinic in Vadodara ✓ US FDA approved lasers ✓ MD dermatologists ✓ All skin & hair treatments ✓ 4.9★ rated. Consultation ₹500. Visit today!",
  keywords: "skin clinic vadodara, best skin clinic vadodara, dermatology clinic vadodara, skin clinic near me",
};

export default function SkinClinicPage() {
  const content = {
    heroTitle: "Your Complete Skin Clinic in Vadodara",
    heroSubtitle: "Everything Your Skin Needs Under One Roof",
    
    introContent: `A good skin clinic is more than a doctor's office — it's a complete ecosystem for skin health. The right doctors, yes, but also the right equipment, the right products, the right environment, and the right support systems.

When you visit our clinic, you're accessing a full dermatological facility. Consultation rooms for private discussions. Treatment areas with appropriate equipment. Laser rooms with proper safety measures. All maintained to clinical standards.

This infrastructure matters because modern dermatology needs it. You can't do good laser work without proper lasers. You can't manage complex cases without diagnostic capabilities. A clinic is the package that makes comprehensive care possible.`,

    whyChooseUs: [
      "Complete clinical infrastructure",
      "Modern diagnostic equipment",
      "Multiple treatment technologies",
      "Proper clinical environment",
      "Qualified support staff",
      "One-stop for all skin needs"
    ],

    services: [
      {
        title: "Consultation Services",
        description: "Expert dermatologist consultations in comfortable, private settings."
      },
      {
        title: "Laser Treatment Suite",
        description: "Multiple laser platforms for hair removal, resurfacing, pigmentation, and more."
      },
      {
        title: "Cosmetic Procedures",
        description: "Injectables, peels, microneedling, and aesthetic treatments in proper clinical settings."
      },
      {
        title: "Hair Restoration",
        description: "PRP, GFC therapy, hair transplant consultations — complete hair care services."
      },
      {
        title: "Medical Treatments",
        description: "Light therapy, cryotherapy, excision procedures, and other therapeutic interventions."
      },
      {
        title: "Skincare Products",
        description: "Curated medical-grade skincare available at the clinic."
      }
    ],

    processSteps: [
      {
        title: "Facility Access",
        description: "Walk into a proper clinical environment designed for dermatological care."
      },
      {
        title: "Expert Consultation",
        description: "Meet with qualified dermatologists in appropriate settings."
      },
      {
        title: "Treatment Options",
        description: "Access the full range of treatments our facility offers."
      },
      {
        title: "Ongoing Care",
        description: "Return as needed — the full clinic remains available for your skin health."
      }
    ],

    faqItems: [
      {
        question: "What facilities does your clinic have?",
        answer: "Consultation rooms, laser treatment area, procedure rooms, and appropriate support infrastructure. Everything needed for comprehensive dermatological care."
      },
      {
        question: "Is the clinic clean and hygienic?",
        answer: "Absolutely. Clinical hygiene standards, sterilization protocols, and regular maintenance. This is non-negotiable in medical settings."
      },
      {
        question: "What lasers do you have?",
        answer: "Multiple platforms for different purposes — hair removal, skin resurfacing, pigmentation treatment, vascular issues. The right tool for each job."
      },
      {
        question: "Can I see the facilities before treatment?",
        answer: "Yes, we're happy to show you our clinic during your consultation. Transparency builds trust."
      },
      {
        question: "Is parking available?",
        answer: "Yes, we have parking facilities. Accessibility matters for a clinic you'll visit regularly."
      }
    ],

    ctaText: "Visit a Proper Skin Clinic",
    ctaDescription: "Not just a doctor, but a complete facility for your skin health. Expert care, modern equipment, proper environment. Book your visit today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-clinic-in-vadodara"
      content={content}
    />
  );
}
