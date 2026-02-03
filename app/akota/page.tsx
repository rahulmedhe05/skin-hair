import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Akota | Best Dermatologist",
  description: "🏆 Top skin & hair clinic in Akota, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic akota, dermatologist akota vadodara, hair clinic akota, skin doctor near akota",
};

export default function AkotaPage() {
  const content = {
    heroTitle: "Akota's Trusted Skin & Hair Experts",
    heroSubtitle: "Quality Dermatology Care in Your Neighborhood",
    
    introContent: `Akota has grown into one of Vadodara's most sought-after residential areas — and its residents deserve healthcare that matches their standards.

Our clinic has been serving Akota families for years. We've watched kids grow up, treated three generations of some families, and built relationships that go beyond doctor-patient. That trust isn't given easily in Akota — it's earned.

What makes us different? We combine old-school values (thorough examinations, honest advice, genuine care) with new-school technology (latest lasers, evidence-based treatments, digital records). It's the best of both worlds.`,

    whyChooseUs: [
      "Serving Akota residents for over a decade",
      "Family-friendly clinic with pediatric dermatology expertise",
      "Easy access from Akota Stadium and surrounding societies",
      "Multilingual staff (Gujarati, Hindi, English)",
      "Senior citizen friendly with wheelchair accessibility",
      "Affordable pricing without compromising quality"
    ],

    services: [
      {
        title: "Family Dermatology",
        description: "From your toddler's eczema to your parent's age spots — we treat skin conditions across all ages. One clinic for the whole family means continuity of care and convenience."
      },
      {
        title: "Teenage Acne Solutions",
        description: "Akota's students and young adults trust us for acne treatment that actually works. We understand acne affects confidence, and we treat it with the seriousness it deserves."
      },
      {
        title: "Hair Fall Treatment",
        description: "Noticing more hair on your pillow? Hair fall has many causes — stress, nutrition, hormones, genetics. We find the real reason and treat accordingly. No generic solutions here."
      },
      {
        title: "Skin Allergy & Rash Treatment",
        description: "Vadodara's weather can trigger all sorts of skin reactions. Whether it's heat rash, allergic dermatitis, or something more persistent — we diagnose accurately and treat effectively."
      },
      {
        title: "Cosmetic Treatments",
        description: "Looking good isn't vanity — it's self-care. Chemical peels, HydraFacials, laser treatments, and more. Affordable luxury for Akota residents."
      },
      {
        title: "Chronic Skin Conditions",
        description: "Psoriasis, vitiligo, eczema — these conditions need long-term management, not quick fixes. We partner with you for the long haul."
      }
    ],

    processSteps: [
      {
        title: "Easy Appointment Booking",
        description: "Walk-ins welcome, but booking ahead saves time. Call or WhatsApp to schedule at your convenience."
      },
      {
        title: "Comprehensive Consultation",
        description: "We examine thoroughly, ask the right questions, and often identify issues others have missed."
      },
      {
        title: "Clear Treatment Plan",
        description: "No medical jargon. We explain what's wrong, what we recommend, and what it costs — in plain language."
      },
      {
        title: "Treatment & Support",
        description: "Effective treatment backed by proper follow-up. We're here when you need us."
      }
    ],

    faqItems: [
      {
        question: "Do you treat children's skin problems?",
        answer: "Yes, pediatric dermatology is one of our specialties. We treat everything from diaper rash and eczema to birthmarks and childhood skin infections with gentle, child-appropriate approaches."
      },
      {
        question: "What areas near Akota do you serve?",
        answer: "Besides Akota, we regularly see patients from Old Padra Road, Gotri, Vasna Road, and nearby areas. Our central location makes us accessible from most parts of western Vadodara."
      },
      {
        question: "Are your treatments expensive?",
        answer: "We believe quality dermatology shouldn't break the bank. Our pricing is competitive, and we always offer treatment options at different price points without compromising on care."
      },
      {
        question: "Can you treat severe acne scars?",
        answer: "Yes, we have advanced options including fractional laser, microneedling RF, and subcision for even stubborn acne scars. Results depend on scar type and depth — we'll assess and advise honestly."
      },
      {
        question: "Do you offer home visit consultations?",
        answer: "For elderly or mobility-challenged patients in Akota and nearby areas, we can arrange home visits for consultations. Please call to discuss."
      }
    ],

    ctaText: "Your Neighborhood Skin & Hair Experts Await",
    ctaDescription: "Akota residents don't need to travel far for excellent dermatological care. Book your consultation today and experience the difference personalized attention makes.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="akota"
      content={content}
    />
  );
}
