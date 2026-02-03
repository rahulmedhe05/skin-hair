import { Metadata } from "next";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Skin & Hair Clinic in Harni, Vadodara | Top Dermatologist",
  description: "Best skin and hair clinic in Harni, Vadodara. Expert treatment for hair loss, acne, laser hair removal & skin conditions. Near Harni Airport area.",
  keywords: "skin clinic harni, dermatologist harni vadodara, hair specialist harni, skin doctor harni airport road",
};

export default function HarniPage() {
  const content = {
    heroTitle: "Harni's Premier Skin & Hair Care Destination",
    heroSubtitle: "Advanced Dermatology Near Vadodara Airport",
    
    introContent: `Harni has transformed from a quiet area near the airport to one of Vadodara's most desirable residential zones. With premium housing, good connectivity, and a growing community, it deserves quality healthcare to match.

Our presence in Harni means residents don't need to travel far for expert dermatological care. Whether you've just moved into one of the new high-rises or have lived here for years, we're your local skin and hair specialists.

The Harni community is diverse — airline staff, business travelers, IT professionals, retired senior officers. Each brings unique skin concerns, and we're equipped to handle them all with the same level of expertise and care.`,

    whyChooseUs: [
      "Conveniently located near Harni Airport Road",
      "Serving Harni's upscale residential community",
      "Modern clinic with premium facilities",
      "Experienced specialists with cosmetic expertise",
      "Flexible scheduling for frequent travelers",
      "Understanding of travel-related skin issues"
    ],

    services: [
      {
        title: "Executive Skin Care",
        description: "For professionals who need to look their best. Quick, effective treatments that fit into busy schedules. Maintenance programs that keep skin healthy despite frequent travel."
      },
      {
        title: "Travel-Related Skin Issues",
        description: "Cabin air, changing climates, jet lag — travel takes toll on skin. We understand these challenges and offer solutions for frequent flyers."
      },
      {
        title: "Anti-Aging Excellence",
        description: "Botox, fillers, skin tightening, and rejuvenation treatments performed by experienced specialists. Natural results that enhance without altering."
      },
      {
        title: "Advanced Hair Solutions",
        description: "From PRP and GFC to hair transplant consultations — we offer the full spectrum of hair restoration options."
      },
      {
        title: "Laser Treatments",
        description: "Hair removal, pigmentation correction, skin resurfacing — our laser suite handles it all with precision and safety."
      },
      {
        title: "Premium Facial Treatments",
        description: "HydraFacial, carbon laser facial, and customized medi-facials. Because Harni residents appreciate quality."
      }
    ],

    processSteps: [
      {
        title: "Convenient Scheduling",
        description: "Book at times that work for you. We understand unpredictable schedules and offer flexibility."
      },
      {
        title: "Comprehensive Consultation",
        description: "A thorough assessment of your concerns, skin type, and goals. No rushing, no assumptions."
      },
      {
        title: "Customized Treatment Plan",
        description: "Treatments designed around your lifestyle, travel schedule, and aesthetic goals."
      },
      {
        title: "Ongoing Care",
        description: "Maintenance protocols and follow-up schedules that account for your travel patterns."
      }
    ],

    faqItems: [
      {
        question: "Do you cater to frequent travelers?",
        answer: "Yes, we understand the challenges frequent travel poses for skincare routines and treatment schedules. We design flexible protocols and provide travel-friendly skincare advice."
      },
      {
        question: "Can I get treatments done between flights?",
        answer: "Many of our treatments — facials, quick laser sessions, Botox — can be done in under an hour. Perfect for layovers or before important trips."
      },
      {
        question: "What about airline cabin-related skin dryness?",
        answer: "This is a common concern among our patients who fly frequently. We offer intensive hydration treatments and home care protocols specifically for combating cabin air effects."
      },
      {
        question: "Do you have evening and weekend hours?",
        answer: "Yes, we offer extended evening hours and weekend appointments to accommodate various schedules."
      },
      {
        question: "Is parking available near your clinic?",
        answer: "Yes, ample parking is available. Harni's newer infrastructure means better facilities for patients."
      }
    ],

    ctaText: "Harni's Skin & Hair Experts Are Ready",
    ctaDescription: "Whether you're settling into Harni or just passing through, great skin care is right here. Book your consultation with our specialists today.",
  };

  return (
    <BusinessPageTemplate
      business={business}
      area="harni"
      content={content}
    />
  );
}
