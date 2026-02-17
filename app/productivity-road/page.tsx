import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic Productivity Road | Dermatologist",
  description: "🏆 Top skin & hair clinic on Productivity Road, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic productivity road, dermatologist productivity road vadodara, hair clinic productivity road, skin doctor near productivity road",
};

export default function ProductivityRoadPage() {
  const content = {
    heroTitle: "Productivity Road's Professional Skin & Hair Clinic",
    heroSubtitle: "Expert Dermatology for Vadodara's Industrial Corridor",
    
    introContent: `Productivity Road lives up to its name — it's where work happens. Industrial units, manufacturing facilities, corporate offices, and the people who keep Vadodara's economy humming. These hardworking professionals deserve healthcare that understands their schedule and challenges.

Our clinic serves this working population with practical, efficient dermatological care. We understand you can't take a day off for a skin consultation. We understand shift timings, weekend constraints, and the need for quick solutions.

Industrial skin issues are our specialty here — but we're equally equipped for cosmetic treatments, hair restoration, and everything else modern dermatology offers.`,

    whyChooseUs: [
      "Serving Productivity Road industrial corridor",
      "Understanding of work-related skin conditions",
      "Efficient appointments for busy professionals",
      "Extended hours including early mornings",
      "Occupational dermatology expertise",
      "Quick treatments that respect your time"
    ],

    services: [
      {
        title: "Industrial Skin Care",
        description: "Chemical exposure, heat-related issues, protective equipment problems — we understand occupational skin conditions and treat them effectively."
      },
      {
        title: "Professional Skin Health",
        description: "For office workers on Productivity Road — stress-related skin issues, AC-induced dryness, and presentation-ready appearance."
      },
      {
        title: "Quick Hair Solutions",
        description: "Hair fall treatment that doesn't require multiple day-long appointments. Efficient protocols for busy schedules."
      },
      {
        title: "Lunchtime Treatments",
        description: "Quick facials, targeted treatments, and maintenance procedures that fit into work breaks."
      },
      {
        title: "Skin Infections",
        description: "Industrial environments can cause infections. Fast diagnosis and treatment to minimize work disruption."
      },
      {
        title: "Weekend Cosmetics",
        description: "Save cosmetic treatments for weekends when you have recovery time. We're available when you are."
      }
    ],

    processSteps: [
      {
        title: "Work-Friendly Scheduling",
        description: "Early morning, lunch break, post-shift — we accommodate working hours."
      },
      {
        title: "Efficient Assessment",
        description: "Quick but thorough. We diagnose accurately without wasting your time."
      },
      {
        title: "Practical Treatment",
        description: "Solutions that work with your job, not against it."
      },
      {
        title: "Flexible Follow-Up",
        description: "Follow-ups scheduled around your availability."
      }
    ],

    faqItems: [
      {
        question: "Can I come before my shift starts?",
        answer: "Yes, we offer early morning appointments for shift workers. Let us know your work timing when booking."
      },
      {
        question: "Do you treat chemical exposure on skin?",
        answer: "Yes, we regularly treat contact dermatitis and chemical exposure effects. We understand industrial skin hazards."
      },
      {
        question: "What if I need a medical certificate for work?",
        answer: "We provide appropriate documentation for work-related skin conditions when medically justified."
      },
      {
        question: "Are treatments expensive for regular workers?",
        answer: "We offer options at various price points. Basic treatments are very affordable; advanced treatments have financing options."
      },
      {
        question: "Is parking available during busy hours?",
        answer: "Yes, though we recommend slightly off-peak times if possible. We can suggest best timing when you book."
      }
    ],

    ctaText: "Productivity Includes Skin Health",
    ctaDescription: "Healthy skin supports your productivity. Get effective treatment from doctors who understand working life. Book your appointment today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="productivity-road"
      content={content}
    />
  );
}
