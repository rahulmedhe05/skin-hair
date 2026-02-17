import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic New VIP Road | Best Dermatologist",
  description: "🏆 Top skin & hair clinic on New VIP Road, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic new vip road, dermatologist new vip road vadodara, hair clinic new vip road, skin doctor near new vip road",
};

export default function NewVIPRoadPage() {
  const content = {
    heroTitle: "VIP Skin & Hair Care on New VIP Road",
    heroSubtitle: "Premium Dermatology for Vadodara's Premium Address",
    
    introContent: `New VIP Road represents Vadodara's aspirational living — wide roads, premium residences, upscale commercial spaces, and residents who appreciate the finer things. Healthcare in this corridor should match those standards.

Our clinic delivers premium dermatological care that VIP Road residents expect. Not just good — exceptional. Not just effective — impressive. The same quality you'd find in metro cities, right here on New VIP Road.

We attract patients who value expertise and are willing to invest in quality. In return, we deliver treatments using the best products, performed by experienced specialists, in a facility designed for comfort.`,

    whyChooseUs: [
      "Premium location on New VIP Road",
      "Exceptional quality matching premium expectations",
      "Advanced technologies and products",
      "Experienced aesthetic specialists",
      "Comfortable, sophisticated environment",
      "Personalized VIP-style service"
    ],

    services: [
      {
        title: "Executive Skin Programs",
        description: "Comprehensive skin health management for busy executives. Regular maintenance, preventive care, and quick interventions when needed."
      },
      {
        title: "Advanced Aesthetics",
        description: "Botox, premium fillers, thread lifts, and advanced skin rejuvenation. Natural results from experienced hands."
      },
      {
        title: "Hair Restoration Excellence",
        description: "From PRP to premium hair transplant. We restore hair with attention to natural appearance and density."
      },
      {
        title: "Laser Perfection",
        description: "Multiple laser platforms for different concerns. The right technology for the right problem."
      },
      {
        title: "Signature Facials",
        description: "Beyond standard HydraFacial — customized treatment protocols that address your specific skin goals."
      },
      {
        title: "Bespoke Treatment Plans",
        description: "Completely personalized programs designed around your skin type, concerns, lifestyle, and objectives."
      }
    ],

    processSteps: [
      {
        title: "VIP Scheduling",
        description: "Appointments at your convenience. We accommodate busy schedules and last-minute needs."
      },
      {
        title: "Comprehensive Consultation",
        description: "Unhurried, thorough assessment. We understand before we recommend."
      },
      {
        title: "Premium Treatment",
        description: "Only the best products, performed by experienced specialists, in comfortable surroundings."
      },
      {
        title: "Ongoing Partnership",
        description: "Long-term skin health management. Your doctor knows you, your history, your preferences."
      }
    ],

    faqItems: [
      {
        question: "What makes your clinic 'premium'?",
        answer: "Advanced equipment, genuine premium products, experienced specialists, longer consultations, personalized protocols, and a facility designed for comfort — not just results, but the experience too."
      },
      {
        question: "Are your products genuine branded products?",
        answer: "Absolutely. We use authentic, verified products from leading brands. Receipts and batch numbers available for any product used."
      },
      {
        question: "Can treatments be scheduled around my travel?",
        answer: "Yes, we understand busy lives. We'll time treatments to ensure you're at your best when you need to be, and schedule maintenance around your calendar."
      },
      {
        question: "Is privacy maintained?",
        answer: "Complete discretion. Private consultation rooms, confidential records, discrete billing. Your privacy is paramount."
      },
      {
        question: "What about follow-up and aftercare?",
        answer: "Premium includes premium aftercare. Direct access for questions, flexible follow-up scheduling, and ongoing support between visits."
      }
    ],

    ctaText: "VIP Treatment for VIP Road",
    ctaDescription: "Your skin deserves the same quality you expect in everything else. Experience premium dermatological care. Schedule your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="new-vip-road"
      content={content}
    />
  );
}
