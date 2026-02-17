import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Bhayli | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Bhayli, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic bhayli, dermatologist bhayli vadodara, hair clinic bhayli, skin doctor near bhayli",
};

export default function BhayliPage() {
  const content = {
    heroTitle: "Bhayli's Premium Skin & Hair Destination",
    heroSubtitle: "Advanced Dermatology for Vadodara's Newest Premium Suburb",
    
    introContent: `Bhayli has rapidly emerged as one of Vadodara's most sought-after residential destinations. Premium apartments, planned infrastructure, and a community of discerning residents who expect quality in everything — including healthcare.

Our clinic matches Bhayli's premium profile. Modern facilities, advanced treatments, and doctors who understand what contemporary patients want: effectiveness, efficiency, and excellent service.

The Bhayli demographic is distinctive — young professionals, established families, people who've chosen this area for quality of life. They research their options and expect value for their investment. We deliver exactly that.`,

    whyChooseUs: [
      "Premium clinic for Bhayli's premium community",
      "Advanced treatments matching modern expectations",
      "Latest technology and protocols",
      "Efficient service for busy professionals",
      "Beautiful, comfortable facility",
      "Results-driven approach"
    ],

    services: [
      {
        title: "Contemporary Skin Care",
        description: "Modern skin solutions for modern problems — pollution effects, screen exposure, stress-related issues. We address today's skin challenges."
      },
      {
        title: "Advanced Hair Restoration",
        description: "PRP, GFC, and hair transplant options using latest techniques. Restore hair confidence with proven methods."
      },
      {
        title: "Aesthetic Excellence",
        description: "Botox, fillers, and advanced anti-aging. Natural-looking results from experienced practitioners."
      },
      {
        title: "Laser Precision",
        description: "Hair removal, pigmentation, rejuvenation — our laser suite offers comprehensive solutions."
      },
      {
        title: "Result-Focused Facials",
        description: "HydraFacial and medical-grade facials that deliver visible results, not just relaxation."
      },
      {
        title: "Maintenance Programs",
        description: "Structured skin and hair maintenance for long-term health. Prevention beats cure."
      }
    ],

    processSteps: [
      {
        title: "Seamless Booking",
        description: "Online booking with real availability. Choose your preferred time."
      },
      {
        title: "Expert Assessment",
        description: "Thorough evaluation by specialists who stay updated with latest developments."
      },
      {
        title: "Customized Protocol",
        description: "Treatment plans designed for your specific goals and lifestyle."
      },
      {
        title: "Measurable Outcomes",
        description: "We track and document results. You'll see the difference."
      }
    ],

    faqItems: [
      {
        question: "What makes your clinic suitable for Bhayli residents?",
        answer: "We match Bhayli's standards — modern facility, advanced treatments, professional service. Plus, we're local, saving you travel time."
      },
      {
        question: "Do you use the latest technologies?",
        answer: "Yes, we continuously update our equipment and protocols. When something better comes along that's proven effective, we adopt it."
      },
      {
        question: "Can I see real results from your treatments?",
        answer: "We document outcomes and can show you relevant before-after cases during consultation. We believe in demonstrated results."
      },
      {
        question: "What about ongoing maintenance?",
        answer: "We offer maintenance programs for skin and hair health. Regular care is more effective (and cost-efficient) than fixing problems later."
      },
      {
        question: "Is parking convenient?",
        answer: "Yes, Bhayli's planned infrastructure includes good parking facilities. We're easy to access."
      }
    ],

    ctaText: "Bhayli Expects Excellence — We Deliver",
    ctaDescription: "Premium skincare for a premium neighborhood. Experience the level of dermatological care Bhayli deserves. Book your consultation now.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="bhayli"
      content={content}
    />
  );
}
