import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin Clinic Pratap Nagar | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Pratap Nagar, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic pratap nagar, dermatologist pratap nagar vadodara, hair clinic pratap nagar, skin doctor near pratap nagar",
};

export default function PratapNagarPage() {
  const content = {
    heroTitle: "Pratap Nagar's Premier Skin & Hair Center",
    heroSubtitle: "Modern Dermatology for a Dynamic Neighborhood",
    
    introContent: `Pratap Nagar has developed into one of Vadodara's most vibrant residential and commercial zones. Well-connected, well-planned, and home to a community that values quality — including quality healthcare.

Our clinic caters to Pratap Nagar's dynamic population. Working professionals, busy families, active students — each needs dermatological care that fits their lifestyle. We provide exactly that.

What Pratap Nagar residents appreciate is our efficiency. Quick appointments, effective treatments, clear communication, fair pricing. No wasted time, no unnecessary visits, no inflated bills.`,

    whyChooseUs: [
      "Located in vibrant Pratap Nagar",
      "Efficient care for busy lifestyles",
      "Modern clinic, updated protocols",
      "Well-connected, easy to reach",
      "Results-focused approach",
      "Transparent pricing"
    ],

    services: [
      {
        title: "Professional Skin Care",
        description: "For working professionals who need quick, effective skin solutions. Treatments that fit into busy schedules."
      },
      {
        title: "Hair Solutions",
        description: "Hair fall affecting your confidence? We diagnose properly and treat effectively."
      },
      {
        title: "Laser Services",
        description: "Hair removal, pigmentation, skin improvement — our laser treatments deliver consistent results."
      },
      {
        title: "Acne Expertise",
        description: "Clear skin through scientific treatment. Popular with Pratap Nagar's younger demographic."
      },
      {
        title: "Anti-Aging",
        description: "Look refreshed, not tired. Subtle enhancements that preserve your natural appearance."
      },
      {
        title: "Quick Treatments",
        description: "Lunch-hour facials, quick laser sessions — treatments designed for time-pressed schedules."
      }
    ],

    processSteps: [
      {
        title: "Easy Booking",
        description: "Book online or call. We fit into your schedule, not the other way around."
      },
      {
        title: "Efficient Consultation",
        description: "Thorough but not time-wasting. We respect your time."
      },
      {
        title: "Clear Plan",
        description: "What we'll do, how much it costs, what results to expect — all upfront."
      },
      {
        title: "Effective Results",
        description: "Treatment that delivers. We measure outcomes and adjust as needed."
      }
    ],

    faqItems: [
      {
        question: "Can I get treatment during lunch break?",
        answer: "Many treatments fit within an hour. Book ahead and specify your time constraint — we'll accommodate."
      },
      {
        question: "How's parking in busy Pratap Nagar?",
        answer: "We're located with parking convenience in mind. Specific guidance provided when you book."
      },
      {
        question: "Are prices quoted final or are there extras?",
        answer: "What we quote is what you pay. No hidden charges, no surprise fees. Transparency is our policy."
      },
      {
        question: "What if I need multiple treatments?",
        answer: "We can create packages and treatment plans. Often more efficient than individual sessions."
      },
      {
        question: "Do you offer late evening appointments?",
        answer: "Yes, we have extended hours for working professionals. Last appointments can be scheduled late."
      }
    ],

    ctaText: "Pratap Nagar's Skin & Hair Experts",
    ctaDescription: "Efficient, effective dermatological care for busy people. No wasted time, real results. Book your Pratap Nagar consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="pratap-nagar"
      content={content}
    />
  );
}
