import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Eczema Treatment Vadodara | Fast Relief | ₹500 Consult",
  description: "✅ Eczema treatment in Vadodara ✓ 90% get relief in 2 weeks ✓ Stop itching fast ✓ Atopic dermatitis expert ✓ Long-term control. Consult ₹500. Call now!",
  keywords: "eczema treatment vadodara, atopic dermatitis treatment, eczema specialist vadodara, eczema doctor near me",
};

export default function EczemaTreatmentPage() {
  const content = {
    heroTitle: "Eczema Treatment in Vadodara",
    heroSubtitle: "End the Itch-Scratch Cycle",
    
    introContent: `Eczema is miserable — the relentless itching, the dry cracked skin, the embarrassment of visible patches. It disrupts sleep, affects quality of life, and standard creams often don't provide adequate relief.

The condition involves a compromised skin barrier that allows moisture loss and irritant entry. Treatment addresses both the underlying barrier problem and the inflammatory response. Long-term management, not just crisis control, is the goal.

We take eczema seriously. Understanding different types, identifying triggers, using appropriate medications, and building maintenance routines that keep flares at bay. Most patients can achieve excellent control with proper treatment.`,

    whyChooseUs: [
      "Expertise in eczema management",
      "Understanding different eczema types",
      "Trigger identification",
      "Flare treatment and prevention",
      "Long-term management focus",
      "Quality of life improvement"
    ],

    services: [
      {
        title: "Eczema Diagnosis",
        description: "Identifying eczema type — atopic, contact, seborrheic, or other variants."
      },
      {
        title: "Acute Flare Treatment",
        description: "Quick relief during severe flare-ups with appropriate medications."
      },
      {
        title: "Maintenance Therapy",
        description: "Long-term protocols to prevent flares and maintain clear skin."
      },
      {
        title: "Trigger Identification",
        description: "Finding what triggers your flares so you can avoid them."
      },
      {
        title: "Barrier Repair",
        description: "Restoring skin barrier function with appropriate moisturizers and treatments."
      },
      {
        title: "Advanced Therapies",
        description: "For severe cases — biologics and other advanced treatments when standard therapy isn't enough."
      }
    ],

    processSteps: [
      {
        title: "Comprehensive Assessment",
        description: "Understanding your eczema pattern, triggers, and previous treatments."
      },
      {
        title: "Type Identification",
        description: "Diagnosing specific eczema type for targeted treatment."
      },
      {
        title: "Treatment Initiation",
        description: "Starting appropriate treatment for control."
      },
      {
        title: "Maintenance Planning",
        description: "Long-term strategy to keep eczema controlled."
      }
    ],

    faqItems: [
      {
        question: "Can eczema be cured?",
        answer: "Managed, not cured. Most patients can achieve excellent control where eczema doesn't significantly impact life. Some children outgrow it."
      },
      {
        question: "Why does eczema keep coming back?",
        answer: "It's a chronic condition with underlying tendency. Flares are triggered by various factors. Long-term maintenance reduces flare frequency and severity."
      },
      {
        question: "Are steroid creams safe for eczema?",
        answer: "When used appropriately under medical guidance, yes. We use the right strength for the right area for the right duration."
      },
      {
        question: "What triggers eczema flares?",
        answer: "Common triggers: stress, weather changes, irritants, allergens, infections. We help identify your specific triggers."
      },
      {
        question: "Should I avoid certain foods?",
        answer: "Food triggers are less common than believed. We evaluate if food might be relevant for your case before recommending restrictions."
      }
    ],

    ctaText: "Get Your Eczema Under Control",
    ctaDescription: "Life with constant itching isn't necessary. Proper treatment can give you comfortable, clear skin. Book your eczema consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="eczema-treatment-in-vadodara"
      content={content}
    />
  );
}
