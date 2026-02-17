import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Alkapuri | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Alkapuri, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic alkapuri, dermatologist alkapuri vadodara, hair clinic alkapuri, skin doctor near alkapuri",
};

export default function AlkapuriPage() {
  const content = {
    heroTitle: "Alkapuri's Premier Skin & Hair Destination",
    heroSubtitle: "Advanced Dermatology Just Minutes from Race Course Road",
    
    introContent: `Alkapuri residents know quality when they see it. That's why discerning patients from this upscale neighborhood choose us for their skin and hair concerns.

Our Alkapuri-convenient location means you don't have to travel far for world-class dermatological care. Whether you're dealing with persistent acne, noticing more hair in your brush than usual, or simply want to maintain that youthful glow — we've got you covered.

What brings Alkapuri's residents to us? Honestly, it's our no-nonsense approach. We don't upsell unnecessary treatments. We diagnose accurately, recommend what works, and deliver results. That's earned us referrals from some of Alkapuri's most respected families.`,

    whyChooseUs: [
      "Convenient location for Alkapuri, RC Dutt Road & Race Course residents",
      "Specialists trained at top institutions in India and abroad",
      "Private consultation rooms for complete confidentiality",
      "Evening and weekend appointments for working professionals",
      "Premium ambiance matching Alkapuri's standards",
      "Validated parking available"
    ],

    services: [
      {
        title: "Executive Skin Health Programs",
        description: "Designed for busy professionals who want great skin without complicated routines. Monthly maintenance plans that keep you looking sharp for boardrooms and social events alike."
      },
      {
        title: "Advanced Hair Restoration",
        description: "Hair thinning doesn't wait for a convenient time. Our PRP, GFC, and hair transplant options fit your lifestyle. Minimal downtime, maximum results — perfect for those who can't afford weeks away from work."
      },
      {
        title: "Bridal & Pre-Event Packages",
        description: "Alkapuri hosts some of Vadodara's grandest weddings. Our bridal skin prep packages ensure you glow on your big day. Starting treatments 3-6 months before yields the best results."
      },
      {
        title: "Men's Grooming & Skin Care",
        description: "More men in Alkapuri are prioritizing skin health — and that's smart. From beard grooming issues to anti-aging treatments, we offer discreet, effective solutions for the modern man."
      },
      {
        title: "Laser & Light Therapies",
        description: "Our laser suite features the latest technology for hair removal, pigmentation, acne scars, and skin tightening. Safe for Indian skin, performed by trained specialists."
      },
      {
        title: "Injectable Treatments",
        description: "Botox and fillers done right look natural, not 'done.' Our aesthetic specialists have the artistic eye and technical skill to enhance your features subtly."
      }
    ],

    processSteps: [
      {
        title: "Schedule at Your Convenience",
        description: "Online booking or call us directly. We offer flexible timing including early mornings and late evenings for working professionals."
      },
      {
        title: "Thorough Assessment",
        description: "No rushed appointments. We take time to understand your concerns, examine thoroughly, and explain findings clearly."
      },
      {
        title: "Personalized Recommendation",
        description: "Treatment options explained with pros, cons, costs, and expected timelines. You make informed decisions."
      },
      {
        title: "Treatment & Ongoing Care",
        description: "Expert treatment delivery followed by proper aftercare guidance and scheduled follow-ups."
      }
    ],

    faqItems: [
      {
        question: "Is parking available near your clinic?",
        answer: "Yes, we have dedicated parking space for patients. The clinic is also easily accessible via auto from Alkapuri circle and Race Course Road."
      },
      {
        question: "Can I get treatments during lunch breaks?",
        answer: "Many of our treatments like chemical peels, Botox, and quick laser sessions can be done in under an hour. We call them 'lunchtime procedures' for exactly this reason."
      },
      {
        question: "Do you offer packages for regular treatments?",
        answer: "Absolutely. Our maintenance packages for laser hair removal, facials, and skin treatments offer better value for patients committed to ongoing care."
      },
      {
        question: "What payment options do you accept?",
        answer: "Cash, cards, UPI, and EMI options through major banks. We make quality skincare accessible with flexible payment plans."
      },
      {
        question: "How private are consultations?",
        answer: "Completely private. Individual consultation rooms, discreet billing, and confidential medical records. Your privacy is non-negotiable."
      }
    ],

    ctaText: "Alkapuri Deserves the Best — So Do You",
    ctaDescription: "Don't settle for average when it comes to your skin and hair. Book a consultation with Alkapuri's trusted dermatologists and discover the difference expertise makes.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="alkapuri"
      content={content}
    />
  );
}
