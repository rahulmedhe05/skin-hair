import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Makarpura | Dermatologist",
  description: "🏆 Top skin & hair clinic in Makarpura, Vadodara ✓ Expert dermatologists ✓ Hair fall treatment ✓ Acne specialist ✓ Laser hair removal ✓ Walk-in welcome. Book Now!",
  keywords: "skin clinic makarpura, dermatologist makarpura vadodara, hair clinic makarpura, skin doctor near makarpura",
};

export default function MakarpuraPage() {
  const content = {
    heroTitle: "Makarpura's Complete Skin & Hair Care",
    heroSubtitle: "Expert Dermatology for South Vadodara's Industrial Hub",
    
    introContent: `Makarpura — home to one of Gujarat's largest industrial estates — is where Vadodara gets to work. Thousands of employees, factory workers, and business owners spend their days here. They deserve accessible, quality healthcare.

Our clinic understands Makarpura's unique profile. Industrial workers face specific skin challenges — chemical exposure, heat, protective gear-related issues. White-collar employees deal with stress-related skin problems. We treat both.

We've positioned ourselves to serve this working community. Extended hours that accommodate shift timings, understanding of occupational skin conditions, and pricing that respects working-class budgets.`,

    whyChooseUs: [
      "Understanding of industrial skin conditions",
      "Extended hours for shift workers",
      "Serving Makarpura GIDC and residential areas",
      "Affordable care for working families",
      "Quick treatments that fit into work breaks",
      "Experienced in occupational dermatology"
    ],

    services: [
      {
        title: "Occupational Skin Treatment",
        description: "Chemical dermatitis, heat rash, friction injuries, protective equipment reactions — we understand and treat work-related skin conditions."
      },
      {
        title: "Factory Worker Care",
        description: "Practical solutions for practical people. Treatments that work with your work schedule, not against it."
      },
      {
        title: "Hair Fall Treatment",
        description: "Helmet-induced hair loss, stress-related thinning, general hair fall — we address all causes with effective solutions."
      },
      {
        title: "Skin Infections",
        description: "Industrial environments can breed infections. Quick diagnosis and effective treatment to get you back to work healthy."
      },
      {
        title: "Basic Cosmetic Care",
        description: "Looking good isn't just for office workers. We offer affordable cosmetic treatments for all."
      },
      {
        title: "Family Dermatology",
        description: "Makarpura workers have families too. We treat everyone — from worker to spouse to children."
      }
    ],

    processSteps: [
      {
        title: "Flexible Timing",
        description: "Early morning, lunch break, after shift — we accommodate working hours."
      },
      {
        title: "Quick Assessment",
        description: "We know your time is limited. Efficient consultations that don't waste it."
      },
      {
        title: "Practical Solutions",
        description: "Treatments that fit your budget and lifestyle. No unrealistic recommendations."
      },
      {
        title: "Work-Friendly Follow-Up",
        description: "Follow-ups scheduled around your availability. We don't disrupt your work."
      }
    ],

    faqItems: [
      {
        question: "Do you treat chemical burns and industrial skin problems?",
        answer: "Yes, occupational dermatology is one of our focus areas. We treat contact dermatitis, chemical exposure effects, and other work-related skin issues regularly."
      },
      {
        question: "Can I come before or after my shift?",
        answer: "Yes, our extended hours are designed for shift workers. Let us know your work timing and we'll find a suitable appointment slot."
      },
      {
        question: "Are your treatments affordable for factory workers?",
        answer: "Absolutely. We price our services keeping Makarpura's demographics in mind. Quality care doesn't have to be expensive."
      },
      {
        question: "What about recurring skin problems from work conditions?",
        answer: "Chronic occupational skin issues need management, not just treatment. We help you manage ongoing exposure while treating symptoms."
      },
      {
        question: "Can you provide medical certificates if needed?",
        answer: "Yes, we provide proper documentation for work-related skin conditions when medically appropriate."
      }
    ],

    ctaText: "Makarpura Works Hard — So Do We",
    ctaDescription: "Your skin problems shouldn't affect your work. Get effective treatment from doctors who understand working life. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="makarpura"
      content={content}
    />
  );
}
