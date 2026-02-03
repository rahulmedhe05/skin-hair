import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Fatehgunj | Dermatologist",
  description: "🏆 Top skin & hair clinic in Fatehgunj, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic fatehgunj, dermatologist fatehgunj vadodara, hair clinic fatehgunj, skin doctor near fatehgunj",
};

export default function FatehgunjPage() {
  const content = {
    heroTitle: "Fatehgunj's Distinguished Skin & Hair Clinic",
    heroSubtitle: "Premium Dermatology in Vadodara's Prime Commercial District",
    
    introContent: `Fatehgunj is where business gets done in Vadodara. Corporate offices, banks, professional services, legal chambers — this area buzzes with professionals who understand the value of presentation.

Our clinic caters to this professional clientele. Quick appointments that fit into busy schedules, discreet treatments that colleagues won't notice (unless you want them to), and results that boost confidence in boardrooms and client meetings.

But Fatehgunj is also home to residential areas and families. We serve them with equal dedication — because great dermatology isn't just about looking corporate-ready.`,

    whyChooseUs: [
      "Located in Vadodara's professional hub",
      "Understanding of corporate presentation needs",
      "Efficient treatments for busy schedules",
      "Discreet, professional environment",
      "Premium services at fair prices",
      "Serving professionals and families alike"
    ],

    services: [
      {
        title: "Executive Skin Care",
        description: "For professionals who need to look their best. Quick maintenance treatments, efficient problem-solving, results that enhance your professional image."
      },
      {
        title: "Lunch-Hour Treatments",
        description: "Many of our treatments fit within an hour. Step out looking refreshed with no one knowing you visited a dermatologist."
      },
      {
        title: "Anti-Aging Expertise",
        description: "Looking experienced is valuable. Looking tired isn't. We help you maintain a vibrant, alert appearance whatever your age."
      },
      {
        title: "Laser Precision",
        description: "Hair removal, pigmentation correction, skin rejuvenation — precise treatments that deliver consistent results."
      },
      {
        title: "Hair Solutions",
        description: "Hair confidence matters in professional settings. We address hair concerns discretely and effectively."
      },
      {
        title: "Comprehensive Dermatology",
        description: "Beyond cosmetics, we handle all skin conditions with the same level of expertise and professionalism."
      }
    ],

    processSteps: [
      {
        title: "Efficient Scheduling",
        description: "Book online or call. We minimize wait times and respect your calendar."
      },
      {
        title: "Professional Consultation",
        description: "No-nonsense assessment of your concerns with clear, actionable recommendations."
      },
      {
        title: "Time-Efficient Treatment",
        description: "Maximum results in minimum time. We know every minute counts."
      },
      {
        title: "Discrete Follow-Up",
        description: "Flexible follow-up scheduling. Walk in looking like you're going for coffee, walk out having had expert treatment."
      }
    ],

    faqItems: [
      {
        question: "Can I get treatments during work hours without it being obvious?",
        answer: "Yes, many treatments have minimal to no visible after-effects. We can advise which treatments are best for 'invisible' lunch-break appointments."
      },
      {
        question: "How quickly can you see me if I have an urgent concern?",
        answer: "We try to accommodate urgent appointments within 24 hours for existing patients. For new patients with urgent needs, we'll do our best."
      },
      {
        question: "Is your billing discrete?",
        answer: "Yes, our receipts don't have flashy branding or obviously dermatological descriptions. Discretion is standard."
      },
      {
        question: "Do you offer corporate tie-ups?",
        answer: "We can discuss arrangements with companies for employee wellness programs. Contact us for details."
      },
      {
        question: "What about parking in busy Fatehgunj?",
        answer: "There are parking options nearby. We recommend timing appointments to avoid peak commercial hours if parking is a concern."
      }
    ],

    ctaText: "Professional Results for Professionals",
    ctaDescription: "Your appearance is part of your professional toolkit. Keep it sharp with expert dermatological care. Book your Fatehgunj consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="fatehgunj"
      content={content}
    />
  );
}
