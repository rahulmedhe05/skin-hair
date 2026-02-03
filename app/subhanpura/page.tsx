import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Subhanpura | Dermatologist",
  description: "🏆 Top skin & hair clinic in Subhanpura, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic subhanpura, dermatologist subhanpura vadodara, hair clinic subhanpura, skin doctor near subhanpura",
};

export default function SubhanpuraPage() {
  const content = {
    heroTitle: "Subhanpura's Trusted Skin & Hair Specialists",
    heroSubtitle: "Neighborhood Excellence in Dermatological Care",
    
    introContent: `Subhanpura represents the best of both worlds — established neighborhood charm with modern amenities. Its residents expect quality in everything they choose, and healthcare is no exception.

Our clinic has earned the trust of Subhanpura families through consistent, reliable care. We're not the flashiest clinic, but we might be the most dependable. When your skin acts up or your hair worries you, we're the call most Subhanpura residents make.

What works here is our relationship-based approach. We know our regular patients, understand their history, and treat them like the neighbors they are. That personal touch makes a difference in healthcare.`,

    whyChooseUs: [
      "Established presence in Subhanpura community",
      "Relationship-focused patient care",
      "Consistent, dependable service",
      "Reasonable pricing for quality care",
      "Experienced doctors who know the community",
      "Easy access from all parts of Subhanpura"
    ],

    services: [
      {
        title: "Family Dermatology",
        description: "We treat the whole family — children, parents, grandparents. Multiple generations of some Subhanpura families have trusted us."
      },
      {
        title: "Consistent Skin Care",
        description: "Skin health isn't one-time — it's ongoing. We offer maintenance programs that keep your skin healthy year-round."
      },
      {
        title: "Hair Health Solutions",
        description: "From basic dandruff to advanced hair loss — we provide the full spectrum of hair treatments with honest assessment."
      },
      {
        title: "Acne Management",
        description: "Especially popular with Subhanpura's young residents. Clear skin that lasts, not just temporary fixes."
      },
      {
        title: "Age-Appropriate Treatments",
        description: "Different ages have different skin needs. We customize our approach whether you're 15 or 50."
      },
      {
        title: "Cosmetic Enhancements",
        description: "For those interested, we offer tasteful cosmetic improvements that enhance without dramatically changing."
      }
    ],

    processSteps: [
      {
        title: "Familiar Welcome",
        description: "New patients are warmly welcomed. Returning patients see familiar faces who remember them."
      },
      {
        title: "Thorough Care",
        description: "We never rush. Your concerns are fully heard and properly addressed."
      },
      {
        title: "Personalized Treatment",
        description: "Your treatment considers your history, preferences, and practical circumstances."
      },
      {
        title: "Ongoing Relationship",
        description: "We're here for the long term. Regular check-ins, easy follow-ups, continued care."
      }
    ],

    faqItems: [
      {
        question: "How long have you been serving Subhanpura?",
        answer: "Many years now. Long enough that we've treated children who've grown up and now bring their own families."
      },
      {
        question: "Do you offer family packages?",
        answer: "We offer convenience for families — schedule appointments together, family-friendly pricing on certain treatments, and records managed together when appropriate."
      },
      {
        question: "Can you treat my elderly parents?",
        answer: "Yes, we're experienced with elderly patients. Patient, gentle approach with clear communication. Home visits possible for truly mobility-restricted patients."
      },
      {
        question: "What about urgent skin issues?",
        answer: "For existing patients, we always try to accommodate urgent concerns same-day. New patients with urgent issues should call — we'll do our best."
      },
      {
        question: "Is follow-up care included?",
        answer: "Basic follow-up consultations for ongoing treatment are included. We don't nickel-and-dime you for necessary check-ins."
      }
    ],

    ctaText: "Join the Families Who Trust Us",
    ctaDescription: "Subhanpura knows us, and we know Subhanpura. Become part of a patient community that values consistent, quality care. Book your visit today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="subhanpura"
      content={content}
    />
  );
}
