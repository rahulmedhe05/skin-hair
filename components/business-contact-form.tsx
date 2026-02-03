"use client";

import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { SkinHairForm } from "./forms/skin-hair-form";

interface BusinessContactFormProps {
  business: BusinessConfig;
  area: string;
  keyword?: string;
}

export function BusinessContactForm({ business, area, keyword }: BusinessContactFormProps) {
  const areaName = getAreaDisplayName(area);

  // Render the Skin & Hair form
  return <SkinHairForm area={areaName} keyword={keyword} />;
}
