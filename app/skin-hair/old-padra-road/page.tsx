import { businesses, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const business = businesses[0];
const area = "old-padra-road";
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Skin & Hair Clinic in ${areaName}, Vadodara | Dermatologist`,
  description: `Leading Skin & Hair Clinic in ${areaName}, Vadodara. Expert dermatologists for acne, hair fall, hair transplant, laser hair removal & more. Call now!`,
};

export default function AreaPage() {
  const content = getBusinessContent("skin-hair", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
