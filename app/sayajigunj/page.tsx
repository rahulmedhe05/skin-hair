import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Sayajigunj | Dermatologist",
  description: "🏆 Top skin & hair clinic in Sayajigunj, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic sayajigunj, dermatologist sayajigunj vadodara, hair clinic sayajigunj, skin doctor near sayajigunj",
};

export default function SayajigunjPage() {
  const content = {
    heroTitle: "Sayajigunj's Elite Skin & Hair Destination",
    heroSubtitle: "Where Vadodara's Heart Meets Premium Dermatology",
    
    introContent: `Sayajigunj isn't just the center of Vadodara — it's the soul of the city. From the majesty of Sayaji Garden to the bustle of the railway station, from heritage buildings to modern offices, this area represents everything Vadodara is.

Our clinic sits in this vibrant heart, serving the diverse population that flows through Sayajigunj daily. Office workers, tourists, students, shoppers, heritage enthusiasts — they all find expert skin and hair care with us.

Being in Sayajigunj means being accessible from anywhere in Vadodara. Whether you're coming from the old city or the new suburbs, we're centrally located for your convenience.`,

    whyChooseUs: [
      "Prime location in Vadodara's city center",
      "Accessible from anywhere in Vadodara",
      "Premium clinic in a premium location",
      "Expert doctors with cosmetic specialization",
      "Walk-in friendly during business hours",
      "Connected by bus, auto, and train station proximity"
    ],

    services: [
      {
        title: "Executive Skin Programs",
        description: "Busy professionals need efficient skincare. Our executive programs offer comprehensive skin health in time-efficient formats."
      },
      {
        title: "Cosmetic Dermatology",
        description: "Botox, fillers, thread lifts, and advanced anti-aging. Sayajigunj expects sophistication, and we deliver."
      },
      {
        title: "Laser Excellence",
        description: "Hair removal, pigmentation, resurfacing — our laser treatments are performed by trained specialists using premium equipment."
      },
      {
        title: "Hair Restoration",
        description: "Complete hair solutions from medication to transplant. We handle everything from early thinning to advanced baldness."
      },
      {
        title: "Wedding & Event Prep",
        description: "Sayajigunj's wedding halls see many celebrations. We offer bridal and groom prep packages for that perfect glow."
      },
      {
        title: "Quick Glow Treatments",
        description: "HydraFacial and quick skin boosters for immediate results. Perfect for lunch breaks or before important meetings."
      }
    ],

    processSteps: [
      {
        title: "Easy Reach",
        description: "Central location means you can drop in during work breaks, shopping trips, or dedicated visits."
      },
      {
        title: "Expert Assessment",
        description: "Our specialists evaluate your concerns with expertise honed from treating Vadodara's diverse population."
      },
      {
        title: "Customized Solutions",
        description: "From quick fixes to comprehensive programs — we design treatments around your needs and schedule."
      },
      {
        title: "Lasting Relationships",
        description: "Many patients have been with us for years. We build relationships, not just treatment plans."
      }
    ],

    faqItems: [
      {
        question: "Is parking difficult in Sayajigunj?",
        answer: "We're near paid parking facilities. Being central, you can also reach us easily by auto, city bus, or even from the railway station. We're designed for accessibility."
      },
      {
        question: "Can I come during lunch break from nearby offices?",
        answer: "Absolutely. Many of our treatments fit within a lunch hour. Book ahead for guaranteed timing."
      },
      {
        question: "Do you cater to tourists and visitors?",
        answer: "Yes, we welcome one-time consultations for skin issues or quick treatments. Being near tourist areas, we see many visitors."
      },
      {
        question: "Are your prices higher because you're in city center?",
        answer: "Our pricing is competitive with quality clinics anywhere in Vadodara. Location doesn't inflate our costs."
      },
      {
        question: "What makes Sayajigunj clinic special?",
        answer: "Our central location combined with premium care creates unique accessibility. You don't need to travel to the outskirts for quality dermatology."
      }
    ],

    ctaText: "Vadodara's Center Deserves Vadodara's Best",
    ctaDescription: "In the heart of the city, expert skin and hair care awaits you. Step into our Sayajigunj clinic and step out with confidence. Book today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="sayajigunj"
      content={content}
    />
  );
}
