import { businesses, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const business = businesses[0];
const area = "vadodara";
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Skin & Hair Clinic in ${areaName} | Dermatologist & Hair Treatment`,
  description: `Leading Skin & Hair Clinic in ${areaName}. Expert dermatologists for acne, hair fall, hair transplant, laser hair removal & more. Call now!`,
};

export default function AreaPage() {
  const content = getBusinessContent("skin-hair", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
