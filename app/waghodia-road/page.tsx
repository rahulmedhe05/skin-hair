import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic on Waghodia Road, Vadodara | Dermatology Experts",
  description: "Top skin and hair clinic on Waghodia Road, Vadodara. Expert dermatologists for acne, hair fall, laser treatment & skin problems. Near University area.",
  keywords: "skin clinic waghodia road, dermatologist waghodia road vadodara, hair specialist waghodia, skin doctor near university vadodara",
};

export default function WaghodiaRoadPage() {
  const content = {
    heroTitle: "Waghodia Road's Skin & Hair Specialists",
    heroSubtitle: "Quality Dermatology Near MS University & Beyond",
    
    introContent: `Waghodia Road — the stretch that connects MSU to Gotri and beyond — is home to students, academics, young professionals, and families. It's a vibrant corridor with diverse dermatological needs.

Our clinic caters to this diversity. University students with acne, professors dealing with stress-related hair fall, young couples preparing for weddings, families managing everyday skin issues — we see them all.

Being near the university brings its own charm. Young energy, curious questions, a willingness to try new treatments. But we balance that enthusiasm with medical prudence. Just because something is trendy doesn't mean it's right for you.`,

    whyChooseUs: [
      "Conveniently located on Waghodia Road near MSU area",
      "Student-friendly pricing and flexible hours",
      "Understanding of young skin and modern concerns",
      "Evidence-based approach — we don't follow fads",
      "Quick treatments for busy academic schedules",
      "Comprehensive care from consultation to follow-up"
    ],

    services: [
      {
        title: "Student Skin Solutions",
        description: "Late nights, hostel food, exam stress — student life affects skin. We offer practical, affordable treatments for acne, dark circles, and other student-common issues."
      },
      {
        title: "Acne & Post-Acne Care",
        description: "Acne peaks in college years. We treat active acne and also address scars and marks left behind. Complete acne management, not just surface treatment."
      },
      {
        title: "Hair Fall Treatment",
        description: "Young people shouldn't be losing hair. When they do, it's often treatable. We diagnose early and treat effectively before the problem worsens."
      },
      {
        title: "Laser Hair Removal",
        description: "Popular among students and young professionals. Package pricing makes permanent hair reduction affordable. Safe, effective, and convenient."
      },
      {
        title: "Skin Brightening",
        description: "Interview prep? Wedding season? Big event? Skin brightening treatments that deliver natural glow without looking artificial."
      },
      {
        title: "Men's Grooming",
        description: "The young men of Waghodia Road are grooming-conscious. Beard issues, acne, hair styling problems — we address men's specific concerns."
      }
    ],

    processSteps: [
      {
        title: "Quick Appointment",
        description: "Book between classes, come during free periods. We accommodate student schedules."
      },
      {
        title: "No-Judgment Consultation",
        description: "We've heard every skin concern. Nothing embarrasses us, nothing is too minor to discuss."
      },
      {
        title: "Budget-Conscious Planning",
        description: "We know student budgets. Treatment plans that work within financial constraints."
      },
      {
        title: "Flexible Follow-Up",
        description: "Exam week? Semester break? We work around academic calendars."
      }
    ],

    faqItems: [
      {
        question: "Do you offer special rates for students?",
        answer: "Yes, we have special student pricing on select treatments. Bring your valid student ID. We also offer package deals that make treatments more affordable."
      },
      {
        question: "I have acne but limited budget. What can you do?",
        answer: "A lot, actually. We offer cost-effective treatment protocols using proven generic medications and fewer in-clinic procedures. Results may take slightly longer but they're definitely achievable."
      },
      {
        question: "Is laser hair removal safe for young people?",
        answer: "Yes, for those above 18. We assess each case individually and ensure the patient is suitable for the procedure."
      },
      {
        question: "Can I come between lectures?",
        answer: "Absolutely. Many of our treatments are quick — 30-45 minutes. We can schedule around your class timings."
      },
      {
        question: "I'm embarrassed about my skin problem. How private is the consultation?",
        answer: "Completely private. Individual consultation rooms, confidential discussions, discreet treatment. We understand sensitivity around skin issues — especially at an age when appearance matters a lot."
      }
    ],

    ctaText: "Young Skin Deserves Expert Care",
    ctaDescription: "Whether you're a student, young professional, or anyone on Waghodia Road — great skin is within reach. Affordable, effective treatments await. Book your consultation today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="waghodia-road"
      content={content}
    />
  );
}
