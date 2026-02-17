import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "FUE Hair Transplant Vadodara ₹35,000 | No Scars | Book",
  description: "💇 FUE hair transplant in Vadodara from ₹35,000 ✓ No linear scar ✓ 95% graft survival ✓ Natural hairline ✓ 5,000+ surgeries. Free consultation. Book now!",
  keywords: "fue hair transplant vadodara, follicular unit extraction vadodara, fue cost vadodara, fue transplant near me",
};

export default function FUEHairTransplantPage() {
  const content = {
    heroTitle: "FUE Hair Transplant in Vadodara",
    heroSubtitle: "The Modern Approach to Hair Restoration",
    
    introContent: `FUE — Follicular Unit Extraction — has revolutionized hair transplantation. Instead of removing a strip of scalp, we extract individual follicular units one by one. No linear scar, faster healing, more natural results.

The technique requires patience and precision. Each follicle is extracted with a tiny punch, then carefully placed at the correct angle and direction in the recipient area. Thousands of individual placements create a natural pattern.

We've invested in the training and equipment for proper FUE. The results speak for themselves — patients with full-looking hair and no visible signs of having had surgery.`,

    whyChooseUs: [
      "Expert FUE technique",
      "No linear scar",
      "High graft survival rates",
      "Natural placement angles",
      "Modern extraction equipment",
      "Meticulous attention to detail"
    ],

    services: [
      {
        title: "Standard FUE",
        description: "Individual follicle extraction with punch devices. The gold standard in modern transplant."
      },
      {
        title: "Mega FUE Sessions",
        description: "Large graft numbers in single sessions for significant coverage."
      },
      {
        title: "Dense Pack FUE",
        description: "Higher density placement for maximum coverage in target areas."
      },
      {
        title: "FUE for Hairline",
        description: "Precise placement for natural-looking frontal hairline."
      },
      {
        title: "Body Hair FUE",
        description: "Extracting beard or body hair when scalp donor is limited."
      },
      {
        title: "FUE Repair",
        description: "Correcting results from older strip procedures or poor transplants."
      }
    ],

    processSteps: [
      {
        title: "Donor Preparation",
        description: "Trimming donor area for extraction. Local anesthesia for comfort."
      },
      {
        title: "Graft Extraction",
        description: "Individual follicular units extracted with precise punch technique."
      },
      {
        title: "Recipient Creation",
        description: "Making tiny incisions at correct angles for graft placement."
      },
      {
        title: "Graft Placement",
        description: "Carefully placing each graft for natural pattern and direction."
      }
    ],

    faqItems: [
      {
        question: "Why is FUE better than strip method?",
        answer: "No linear scar, faster healing, less post-operative discomfort, can wear hair very short. Results are equivalent when done well."
      },
      {
        question: "How many grafts can be done in one FUE session?",
        answer: "Typically 2000-4000 grafts per session. Larger sessions possible but may require multiple days."
      },
      {
        question: "Will people know I had a transplant?",
        answer: "Initial redness fades within weeks. Once hair grows, it looks completely natural. No visible signs of surgery with FUE."
      },
      {
        question: "What's recovery like?",
        answer: "Return to desk work in 2-3 days. Avoid strenuous activity for 2 weeks. Donor area heals quickly with tiny dots that become invisible."
      },
      {
        question: "Is FUE more expensive than strip?",
        answer: "Often slightly higher due to time and skill required. However, benefits of no scar and faster recovery are worth the difference for most patients."
      }
    ],

    ctaText: "Modern Hair Restoration with FUE",
    ctaDescription: "No linear scar, natural results, quick recovery. FUE is how hair transplant should be done. Book your FUE consultation today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="fue-hair-transplant-in-vadodara"
      content={content}
    />
  );
}
