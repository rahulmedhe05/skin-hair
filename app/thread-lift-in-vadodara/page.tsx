import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Thread Lift Vadodara ₹25,000 | Instant Lift | Book Now",
  description: "✨ Thread lift in Vadodara from ₹25,000 ✓ Instant lifting ✓ No surgery ✓ Lunch-time procedure ✓ Results last 2 years. PDO threads by experts. Book!",
  keywords: "thread lift vadodara, pdo threads vadodara, non surgical facelift vadodara, thread lift cost",
};

export default function ThreadLiftPage() {
  const content = {
    heroTitle: "Thread Lift in Vadodara",
    heroSubtitle: "Lift and Contour Without Surgery",
    
    introContent: `Thread lifts offer what fillers can't — actual lifting and repositioning of sagging tissue. Using dissolvable threads placed under the skin, we can lift cheeks, jawline, brows, and neck without surgery.

The threads provide immediate mechanical lift. Then, as they dissolve over months, they stimulate collagen production for ongoing improvement. It's a minimally invasive option that bridges the gap between injectables and facelift surgery.

We perform thread lifts with precision technique for natural-looking lifting. Understanding facial anatomy and thread mechanics is crucial — poorly placed threads look unnatural or don't hold.`,

    whyChooseUs: [
      "Precise technique",
      "Natural-looking lifting",
      "Understanding of facial anatomy",
      "Appropriate patient selection",
      "Quality thread materials",
      "Realistic expectation setting"
    ],

    services: [
      {
        title: "Mid-Face Thread Lift",
        description: "Lifting cheeks and restoring mid-face volume appearance."
      },
      {
        title: "Jawline Thread Lift",
        description: "Defining jawline and lifting jowls."
      },
      {
        title: "Neck Thread Lift",
        description: "Tightening and lifting loose neck skin."
      },
      {
        title: "Brow Lift Threads",
        description: "Subtle brow elevation for refreshed appearance."
      },
      {
        title: "PDO Thread Treatment",
        description: "Collagen-stimulating threads for skin quality improvement."
      },
      {
        title: "Combination Treatment",
        description: "Threads combined with fillers for comprehensive rejuvenation."
      }
    ],

    processSteps: [
      {
        title: "Consultation",
        description: "Assessing if thread lift is appropriate for your concerns and expectations."
      },
      {
        title: "Treatment Planning",
        description: "Determining thread placement strategy for optimal lift."
      },
      {
        title: "Thread Placement",
        description: "Precise insertion of threads under local anesthesia."
      },
      {
        title: "Recovery & Results",
        description: "Mild swelling resolves, results continue improving over weeks."
      }
    ],

    faqItems: [
      {
        question: "How long do results last?",
        answer: "12-18 months typically. Threads dissolve but collagen stimulation provides lasting benefit. Maintenance possible."
      },
      {
        question: "Is recovery significant?",
        answer: "Mild swelling and bruising for a few days. Most return to work in 2-3 days. Avoid strenuous activity for 2 weeks."
      },
      {
        question: "Does it hurt?",
        answer: "Local anesthesia makes the procedure tolerable. Mild discomfort for a few days after."
      },
      {
        question: "Is it as good as facelift?",
        answer: "No — thread lift provides subtle lifting, not the dramatic correction of surgical facelift. Right for mild to moderate sagging."
      },
      {
        question: "What if I don't like the result?",
        answer: "Threads are adjustable early on and eventually dissolve. It's not permanent if suboptimal."
      }
    ],

    ctaText: "Explore Thread Lift for Natural Lifting",
    ctaDescription: "Get lifted, contoured results without surgery. Minimally invasive with minimal downtime. Book your thread lift consultation.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="thread-lift-in-vadodara"
      content={content}
    />
  );
}
