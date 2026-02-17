import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Leading Hair Transplant Surgeon in Vadodara | Prime One Clinic",
  description: "✅ Hair Transplant Surgeon by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
  keywords: "hair, transplant, surgeon vadodara, hair transplant surgeon near me, best hair transplant vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/hair-transplant-surgeon-in-vadodara",
  },
  openGraph: {
    title: "Leading Hair Transplant Surgeon in Vadodara | Prime One Hair & Skin Clinic",
    description: "✅ Hair Transplant Surgeon by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!",
    url: "https://skinhairvadodara.in/hair-transplant-surgeon-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function HairTransplantSurgeonPage() {
  const content = {
    heroTitle: "Leading Hair Transplant Surgeon in Vadodara",
    heroSubtitle: "Clinically Proven Results with Hair Transplant Surgeon",
    
    introContent: `Considering hair transplant surgeon? Making the right choice about hair restoration is one of the most important decisions you'll face. The difference between a natural-looking result and an obvious one comes down to the surgeon's skill, the technique used, and the clinic's experience.

At Prime One Hair & Skin Clinic in Vadodara, our hair transplant surgeon procedures are performed by surgeons who have completed thousands of successful cases. We don't just transplant hair — we design a hairline that matches your facial structure, age, and natural growth pattern. Every graft is placed at the precise angle and direction to mimic how your hair naturally grows.

What sets our approach apart is the attention to detail in planning. Before any procedure, we conduct a thorough scalp analysis, assess your donor area density, and create a customized plan that accounts for future hair loss patterns. This forward-thinking approach ensures your results look great not just today, but years from now.`,

    whyChooseUs: [
          "Comprehensive pre-procedure counseling and planning",
          "Comfortable, modern OT with latest equipment",
          "Dedicated post-procedure care and follow-up program",
          "Advanced FUE, DHI, and Sapphire techniques available",
          "Skilled surgeons with 15+ years of transplant experience",
          "Natural hairline design customized to your facial structure"
    ],

    services: [
          {
                "title": "Revision Surgery",
                "description": "Corrective procedures for unsatisfactory results from previous transplants. We improve density, naturalness, and overall appearance."
          },
          {
                "title": "DHI Hair Transplant",
                "description": "Direct implantation using Choi pens for precise angle and depth control. Ideal for patients wanting higher density in specific areas."
          },
          {
                "title": "FUE Hair Transplant",
                "description": "Individual follicle extraction for natural results with minimal scarring. Our advanced microscopic technique ensures maximum graft viability."
          },
          {
                "title": "Hairline Restoration",
                "description": "Artistic hairline design considering your age, facial proportions, and natural growth pattern for a completely natural appearance."
          },
          {
                "title": "Crown Area Coverage",
                "description": "Specialized technique for vertex (crown) area restoration, addressing the whorl pattern and achieving natural-looking coverage."
          },
          {
                "title": "Post-Transplant PRP",
                "description": "PRP therapy after transplant to boost graft survival, accelerate healing, and stimulate faster growth of transplanted hair."
          }
    ],

    processSteps: [
          {
                "title": "Consultation & Planning",
                "description": "Detailed scalp analysis, donor assessment, and customized hairline design for your facial structure."
          },
          {
                "title": "Preparation Day",
                "description": "Pre-procedure instructions, blood tests, and final treatment plan review with your surgeon."
          },
          {
                "title": "Procedure Day",
                "description": "Comfortable procedure under local anesthesia with precise graft extraction and placement."
          },
          {
                "title": "Recovery & Growth",
                "description": "Post-op care guidance, regular follow-ups, and tracking your new hair growth journey."
          }
    ],

    faqItems: [
          {
                "question": "Is hair transplant surgeon painful?",
                "answer": "Modern hair transplant surgeon is performed under local anesthesia, so you feel minimal discomfort during the procedure. Most patients describe it as comfortable and watch movies or rest during the session."
          },
          {
                "question": "How many grafts will I need?",
                "answer": "The number of grafts varies based on your degree of hair loss, desired density, and donor availability. During consultation, we calculate the exact number and show you a projected outcome."
          },
          {
                "question": "Can women get hair transplant surgeon?",
                "answer": "Yes, hair transplant surgeon is available for women. However, the evaluation process and technique may differ from male patients. We assess each case individually."
          },
          {
                "question": "How long does it take to see results?",
                "answer": "New hair growth typically begins at 3-4 months and continues improving until 12-14 months. Full results are visible by about 12 months after the procedure."
          },
          {
                "question": "What is the success rate of hair transplant surgeon?",
                "answer": "At our clinic, we achieve a graft survival rate exceeding 95%. The final result depends on factors like donor quality, surgical technique, and post-procedure care compliance."
          }
    ],

    ctaText: "Ready to Start Your Hair Transplant Surgeon Journey?",
    ctaDescription: "Professional hair transplant surgeon doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="hair-transplant-surgeon-in-vadodara"
      content={content}
    />
  );
}
