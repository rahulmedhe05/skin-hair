import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Sevasi | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Sevasi, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic sevasi, dermatologist sevasi vadodara, hair clinic sevasi, skin doctor near sevasi",
};

export default function SevasiPage() {
  const content = {
    heroTitle: "Sevasi's Community Skin & Hair Clinic",
    heroSubtitle: "Quality Care for Our Growing Town",
    
    introContent: `Sevasi has evolved from a village to a growing town at Vadodara's edge. New developments bring new residents, but the community spirit remains. Healthcare here should respect both the growth and the roots.

Our clinic serves Sevasi's unique blend — longtime residents who remember when this was all farmland, and newcomers discovering the area's appeal. Both find quality dermatological care that understands their needs.

What works in Sevasi is our grounded approach. We're not a fancy city clinic putting on airs. We're honest doctors providing genuine treatment to real people.`,

    whyChooseUs: [
      "Part of Sevasi's community growth",
      "Understanding of both old and new residents",
      "Quality care at sensible prices",
      "Local access, no city travel needed",
      "Respectful treatment for all",
      "Growing with the community"
    ],

    services: [
      {
        title: "Community Dermatology",
        description: "Skin care for everyone — from farmers to IT professionals, from village elders to young families. All welcome, all treated well."
      },
      {
        title: "Practical Hair Care",
        description: "Hair fall treatment that works without breaking the bank. Effective solutions at accessible prices."
      },
      {
        title: "General Skin Treatment",
        description: "Allergies, infections, rashes, chronic conditions — comprehensive care under one roof."
      },
      {
        title: "New Resident Skin Issues",
        description: "Moving to Sevasi? We help your skin adjust to new water and environment."
      },
      {
        title: "Agricultural Skin Care",
        description: "For those still connected to the land — sun protection, pesticide exposure treatment, hard water effects."
      },
      {
        title: "Modern Treatments",
        description: "Laser, cosmetic options, and advanced treatments — available right here in Sevasi."
      }
    ],

    processSteps: [
      {
        title: "Easy Visit",
        description: "Walk in or call ahead. We're accessible and welcoming."
      },
      {
        title: "Understanding Consultation",
        description: "We listen to your concerns without rushing or judging."
      },
      {
        title: "Sensible Treatment",
        description: "Solutions that make sense for your life and budget."
      },
      {
        title: "Ongoing Support",
        description: "We're here for the long term. Follow-ups and continued care."
      }
    ],

    faqItems: [
      {
        question: "Do you serve both old Sevasi residents and new apartment dwellers?",
        answer: "Yes, we serve everyone. Long-time Sevasi families and newcomers are equally welcome. Different concerns, same quality of care."
      },
      {
        question: "Is your pricing affordable for village families?",
        answer: "We keep pricing reasonable. Basic treatments are very affordable, and we never push expensive procedures unnecessarily."
      },
      {
        question: "Can you treat agricultural skin problems?",
        answer: "Yes, we understand farming-related skin issues. Sun damage, chemical exposure, hard water effects — all addressed here."
      },
      {
        question: "What about advanced treatments?",
        answer: "We have laser and modern cosmetic treatments too. You don't need to go to the city for advanced dermatology."
      },
      {
        question: "What languages does your staff speak?",
        answer: "Gujarati, Hindi, English — whatever you're comfortable with."
      }
    ],

    ctaText: "Sevasi's Own Skin Doctors",
    ctaDescription: "Quality skincare has come to your town. No matter if you've been here for generations or just moved in — we're here for you. Book your visit today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="sevasi"
      content={content}
    />
  );
}
