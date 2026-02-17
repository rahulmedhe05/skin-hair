import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Leading Alopecia Areata Treatment in Vadodara | Prime One Clinic",
  description: "Get the best alopecia areata treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
  keywords: "alopecia, areata, treatment vadodara, alopecia areata treatment near me, best alopecia areata vadodara",
  alternates: {
    canonical: "https://skinhairvadodara.in/alopecia-areata-treatment-in-vadodara",
  },
  openGraph: {
    title: "Leading Alopecia Areata Treatment in Vadodara | Prime One Hair & Skin Clinic",
    description: "Get the best alopecia areata treatment at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.",
    url: "https://skinhairvadodara.in/alopecia-areata-treatment-in-vadodara",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function AlopeciaAreataTreatmentPage() {
  const content = {
    heroTitle: "Leading Alopecia Areata Treatment in Vadodara",
    heroSubtitle: "Clinically Proven Results with Alopecia Areata Treatment",
    
    introContent: `Hair thinning and loss affect millions of people, yet most suffer in silence or waste money on products that don't work. If you're searching for alopecia areata treatment, you need to understand that effective treatment starts with proper diagnosis.

Hair loss has multiple potential causes — genetics, hormones, nutritional deficiencies, stress, medical conditions, and even certain medications. Each cause requires a different treatment approach. That's why our dermatologists at Prime One Hair & Skin Clinic begin with comprehensive diagnostics including trichoscopy, blood work, and scalp analysis.

Our treatment protocols combine multiple evidence-based approaches for the best results. Depending on your diagnosis, this might include medical therapy, PRP or GFC treatments, low-level laser therapy, nutritional supplementation, and lifestyle modifications. We track progress through regular follow-ups and digital photography so you can see measurable improvement.`,

    whyChooseUs: [
          "Nutritional and lifestyle counseling for hair health",
          "Proven results: 85%+ patient satisfaction rate",
          "Personalized treatment plans based on your specific diagnosis",
          "Expertise in both male and female pattern hair loss",
          "Multi-modality treatment combining best available options",
          "Regular progress tracking with digital photography"
    ],

    services: [
          {
                "title": "Scalp Mesotherapy",
                "description": "Micro-injections of vitamins, minerals, and growth factors directly into the scalp for localized hair loss treatment."
          },
          {
                "title": "PRP Hair Therapy",
                "description": "Platelet-rich plasma injections into the scalp to stimulate dormant follicles and promote thicker, stronger hair growth."
          },
          {
                "title": "Medical Hair Loss Therapy",
                "description": "FDA-approved medications including minoxidil and finasteride, prescribed at the right dosage with regular monitoring for effectiveness."
          },
          {
                "title": "GFC Treatment",
                "description": "Growth Factor Concentrate therapy — the next generation of PRP with 5x more growth factors for enhanced hair regeneration."
          },
          {
                "title": "Low-Level Laser Therapy",
                "description": "FDA-cleared laser cap therapy that increases blood flow to hair follicles and stimulates cellular activity for hair regrowth."
          },
          {
                "title": "Nutritional Therapy",
                "description": "Targeted supplementation based on blood test results. Correcting iron, vitamin D, biotin, and zinc deficiencies that contribute to hair loss."
          }
    ],

    processSteps: [
          {
                "title": "Consultation",
                "description": "Thorough assessment of your concerns by our specialist with advanced diagnostics."
          },
          {
                "title": "Treatment Plan",
                "description": "Personalized treatment protocol explained clearly with realistic expectations."
          },
          {
                "title": "Treatment Sessions",
                "description": "Professional procedures performed with the latest technology in a comfortable setting."
          },
          {
                "title": "Follow-Up Care",
                "description": "Regular monitoring, progress tracking, and plan adjustments for optimal results."
          }
    ],

    faqItems: [
          {
                "question": "Do hair loss treatments have side effects?",
                "answer": "Medical hair loss treatments may have some side effects, which we discuss thoroughly during consultation. We monitor all patients regularly to ensure safe, effective treatment."
          },
          {
                "question": "Can lost hair grow back?",
                "answer": "It depends on the cause. Some types of hair loss are reversible with proper treatment, while others require ongoing management. Early treatment generally yields the best outcomes."
          },
          {
                "question": "How effective is alopecia areata treatment?",
                "answer": "With proper diagnosis and treatment, most patients see 60-80% improvement in hair density. Results vary based on the cause and how early treatment begins."
          },
          {
                "question": "What causes hair loss?",
                "answer": "Hair loss can result from genetics, hormonal changes, nutritional deficiencies, stress, medications, autoimmune conditions, and scalp disorders. We identify your specific cause through comprehensive testing."
          },
          {
                "question": "When should I see a doctor for hair loss?",
                "answer": "If you're losing more than 100 hairs daily, noticing visible thinning, seeing bald patches, or finding clumps of hair when washing — it's time to consult a specialist."
          }
    ],

    ctaText: "Don't Wait — Book Your Alopecia Areata Treatment Now",
    ctaDescription: "Professional alopecia areata treatment doesn't have to be complicated or expensive. Book your consultation and discover your options today.",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="alopecia-areata-treatment-in-vadodara"
      content={content}
    />
  );
}
