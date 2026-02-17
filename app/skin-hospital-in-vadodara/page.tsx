import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Hospital Vadodara | Advanced Dermatology | ₹500",
  description: "🏆 Best skin hospital in Vadodara ✓ Advanced facilities ✓ US FDA approved tech ✓ MD dermatologists ✓ All skin conditions treated. Consult ₹500. Visit today!",
  keywords: "skin hospital vadodara, dermatology hospital vadodara, skin treatment hospital, skin hospital near me",
};

export default function SkinHospitalPage() {
  const content = {
    heroTitle: "Skin Hospital in Vadodara",
    heroSubtitle: "Advanced Dermatology Under One Roof",
    
    introContent: `A skin hospital provides comprehensive dermatological care — from simple consultations to complex procedures, all under one roof with proper facilities and expertise. It's more than a clinic; it's a complete skin care destination.

We offer hospital-level skin care with advanced equipment, qualified specialists, and full range of services. Whether you need diagnosis, treatment, surgery, or cosmetic procedures, we have the capability and expertise.

Complex skin conditions, difficult diagnoses, procedures requiring proper setup — these need hospital-level care. We provide that level of comprehensive service for all your dermatological needs.`,

    whyChooseUs: [
      "Comprehensive facilities",
      "Advanced equipment",
      "Qualified specialists",
      "Full range of services",
      "Complex case capability",
      "Procedure facilities"
    ],

    services: [
      {
        title: "Medical Dermatology",
        description: "Diagnosis and treatment of all skin diseases."
      },
      {
        title: "Cosmetic Dermatology",
        description: "Full range of aesthetic procedures."
      },
      {
        title: "Dermatological Surgery",
        description: "Skin surgeries, excisions, and grafting."
      },
      {
        title: "Laser Center",
        description: "Multiple laser systems for various treatments."
      },
      {
        title: "Hair Restoration",
        description: "Medical treatment and hair transplant surgery."
      },
      {
        title: "Diagnostic Services",
        description: "Skin biopsies, pathology, and advanced diagnostics."
      }
    ],

    processSteps: [
      {
        title: "Registration",
        description: "Easy registration and appointment scheduling."
      },
      {
        title: "Consultation",
        description: "Thorough evaluation by qualified dermatologist."
      },
      {
        title: "Diagnosis",
        description: "Accurate diagnosis with investigations if needed."
      },
      {
        title: "Treatment",
        description: "Comprehensive treatment with follow-up care."
      }
    ],

    faqItems: [
      {
        question: "What's the difference between a skin hospital and clinic?",
        answer: "Hospital-level facilities for complex cases, surgeries, and advanced procedures. More comprehensive than a basic clinic."
      },
      {
        question: "What procedures can be done?",
        answer: "Everything from basic treatments to surgeries, hair transplants, advanced laser procedures, and cosmetic treatments."
      },
      {
        question: "Do you handle emergencies?",
        answer: "Yes — severe allergic reactions, serious skin infections, and other urgent dermatological issues."
      },
      {
        question: "Are diagnostic facilities available?",
        answer: "Yes — we have facilities for biopsies, pathology, and other diagnostic needs."
      },
      {
        question: "Is admission required for any procedures?",
        answer: "Most procedures are day-care. Rarely, some may need short admission which we can arrange."
      }
    ],

    ctaText: "Experience Comprehensive Skin Care",
    ctaDescription: "Hospital-level dermatology services. Advanced facilities, expert care. Book your consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="skin-hospital-in-vadodara"
      content={content}
    />
  );
}
