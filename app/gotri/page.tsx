import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Gotri | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Gotri, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic gotri, dermatologist gotri vadodara, hair clinic gotri, skin doctor near gotri",
};

export default function GotriPage() {
  const content = {
    heroTitle: "Gotri's Go-To Skin & Hair Specialists",
    heroSubtitle: "Expert Care for Vadodara's Growing Western Suburb",
    
    introContent: `Gotri has transformed from a quiet suburb to one of Vadodara's most dynamic residential hubs. With IT parks, educational institutions, and modern housing — the area attracts young professionals and families who expect quality services nearby.

That's exactly why we established our presence here. Gotri residents shouldn't have to travel to the city center for quality skin and hair care. We bring the expertise to you — same skilled doctors, same advanced equipment, same results.

Our patient base in Gotri is diverse: software engineers dealing with screen-induced skin issues, students struggling with acne, young professionals wanting laser hair removal, new parents seeking pediatric dermatology. We serve them all.`,

    whyChooseUs: [
      "Strategically located for Gotri, Waghodia Road & surrounding areas",
      "Young, tech-savvy team that understands modern lifestyle concerns",
      "Latest equipment for quick, effective treatments",
      "Flexible appointment scheduling for working professionals",
      "Clean, modern clinic environment",
      "Competitive pricing for Gotri's young demographic"
    ],

    services: [
      {
        title: "Tech Professional Skin Care",
        description: "Hours of screen time, AC exposure, irregular sleep — modern work takes a toll on skin. We offer targeted treatments and practical advice for Gotri's tech workforce."
      },
      {
        title: "Laser Hair Removal Packages",
        description: "Popular among Gotri's young professionals. Permanent hair reduction that saves time, money, and hassle in the long run. Full body, face, or specific areas — your choice."
      },
      {
        title: "Acne & Acne Scar Treatment",
        description: "Clear skin isn't just about looking good — it's about confidence. Our comprehensive acne management addresses active breakouts and works on existing scars simultaneously."
      },
      {
        title: "Hair Fall Solutions",
        description: "Gotri's young residents are increasingly concerned about early hair thinning. We catch it early, treat it effectively, and help maintain what you have."
      },
      {
        title: "Quick Facial Treatments",
        description: "HydraFacial, chemical peels, medi-facials — treatments that deliver visible results in under an hour. Perfect for busy schedules."
      },
      {
        title: "Men's Skincare",
        description: "Gotri's men are paying attention to skincare, and we applaud it. From shaving problems to anti-aging, we offer no-fuss treatments designed for men."
      }
    ],

    processSteps: [
      {
        title: "Book Online or Call",
        description: "Our online booking system makes scheduling easy. Pick your time, get confirmation, show up — simple."
      },
      {
        title: "Quick Check-In",
        description: "Minimal paperwork, digital records. We respect your time and get you to the doctor quickly."
      },
      {
        title: "Expert Consultation",
        description: "Our specialists listen, examine, and explain. No rushed appointments, no unexplained recommendations."
      },
      {
        title: "Treatment & Follow-Up",
        description: "Effective treatment with clear aftercare instructions. We follow up to ensure you're on track."
      }
    ],

    faqItems: [
      {
        question: "Do you cater specifically to working professionals?",
        answer: "Yes, we understand the time constraints. That's why we offer early morning, evening, and weekend slots. Many of our treatments are 'lunchtime procedures' — quick enough to fit into a work break."
      },
      {
        question: "Is laser hair removal safe for men?",
        answer: "Absolutely. We treat many men for chest, back, and beard shaping. Our lasers are calibrated for different hair types and skin tones, ensuring safe, effective treatment for both men and women."
      },
      {
        question: "I have sensitive skin — can you still treat me?",
        answer: "Sensitive skin needs careful handling, not avoidance of treatment. We conduct patch tests when needed and adjust protocols to suit your skin's needs."
      },
      {
        question: "What's the parking situation?",
        answer: "Gotri's newer buildings offer better parking facilities. We have adequate parking space, and the area is also well-served by public transport."
      },
      {
        question: "Do you offer student discounts?",
        answer: "We have special pricing for students on select treatments. Bring your valid student ID and ask about our student rates."
      }
    ],

    ctaText: "Gotri's Skin & Hair Problems — Solved",
    ctaDescription: "You work hard, you deserve to look great. Let Gotri's trusted dermatologists help you achieve clear skin and healthy hair. Book your consultation now.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="gotri"
      content={content}
    />
  );
}
