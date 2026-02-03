import { businesses } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const business = businesses[0];

export const metadata: Metadata = {
  title: "Best Skin & Hair Clinic in Vadodara | Dermatologist & Hair Treatment",
  description: "Leading Skin & Hair Clinic in Vadodara. Expert dermatologists for acne, hair fall, hair transplant, laser hair removal, skin whitening, PRP therapy & more.",
};

export default function SkinHairPage() {
  const content = getBusinessContent("skin-hair", "vadodara");
  return <BusinessPageTemplate business={business} area="vadodara" content={content} />;
}
