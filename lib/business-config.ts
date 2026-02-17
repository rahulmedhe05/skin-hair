// Business Configuration - Skin & Hair Clinic Focused

export interface BusinessConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  icon: string;
  services: string[];
  areas: string[];
}

// 40 Areas of Vadodara
export const vadodaraAreas = [
  "vadodara",
  "alkapuri",
  "akota",
  "old-padra-road",
  "gotri",
  "vasna-bhayli-road",
  "manjalpur",
  "sama",
  "karelibaug",
  "waghodia-road",
  "chhani",
  "harni",
  "kalali",
  "atladara",
  "vadsar-road",
  "tarsali",
  "sayajigunj",
  "subhanpura",
  "tandalja",
  "makarpura",
  "fatehgunj",
  "race-course",
  "ellora-park",
  "new-sama-road",
  "productivity-road",
  "nizampura",
  "gorwa",
  "ajwa-road",
  "bill",
  "bajwa",
  "bhayli",
  "sevasi",
  "vemali",
  "diwalipura",
  "pratap-nagar",
  "new-vip-road",
  "laxmipura",
  "navapura",
  "panigate",
  "raopura",
];

export const businesses: BusinessConfig[] = [
  {
    id: "skin-hair",
    name: "Prime One Hair & Skin Clinic",
    slug: "skin-hair",
    tagline: "Advanced Hair & Skin Care Solutions",
    description: "Expert dermatology and hair care services in Vadodara",
    colors: {
      primary: "#EC4899", // Pink
      secondary: "#F9A8D4", // Light Pink
      accent: "#831843", // Dark Pink
      gradient: "from-pink-600 to-rose-500",
    },
    icon: "💆",
    services: [
      "Skin Treatment",
      "Hair Fall Treatment",
      "Hair Transplant",
      "Acne Treatment",
      "Laser Hair Removal",
      "Anti-Aging Treatment",
      "PRP Therapy",
      "Chemical Peeling",
      "Skin Whitening",
      "Scalp Treatment",
      "Dermatology Consultation",
      "Pigmentation Treatment",
      "Scar Removal",
      "Mesotherapy",
      "Botox & Fillers",
      "HydraFacial",
      "GFC Treatment",
      "Dandruff Treatment",
      "Vitiligo Treatment",
      "Melasma Treatment",
    ],
    areas: vadodaraAreas,
  },
];

export const getBusinessBySlug = (slug: string): BusinessConfig | undefined => {
  return businesses.find((b) => b.slug === slug);
};

export const getAreaDisplayName = (area: string): string => {
  const areaNames: Record<string, string> = {
    "vadodara": "Vadodara",
    "alkapuri": "Alkapuri",
    "akota": "Akota",
    "old-padra-road": "Old Padra Road",
    "gotri": "Gotri",
    "vasna-bhayli-road": "Vasna-Bhayli Road",
    "manjalpur": "Manjalpur",
    "sama": "Sama",
    "karelibaug": "Karelibaug",
    "waghodia-road": "Waghodia Road",
    "chhani": "Chhani",
    "harni": "Harni",
    "kalali": "Kalali",
    "atladara": "Atladara",
    "vadsar-road": "Vadsar Road",
    "tarsali": "Tarsali",
    "sayajigunj": "Sayajigunj",
    "subhanpura": "Subhanpura",
    "tandalja": "Tandalja",
    "makarpura": "Makarpura",
    "fatehgunj": "Fatehgunj",
    "race-course": "Race Course",
    "ellora-park": "Ellora Park",
    "new-sama-road": "New Sama Road",
    "productivity-road": "Productivity Road",
    "nizampura": "Nizampura",
    "gorwa": "Gorwa",
    "ajwa-road": "Ajwa Road",
    "bill": "Bill",
    "bajwa": "Bajwa",
    "bhayli": "Bhayli",
    "sevasi": "Sevasi",
    "vemali": "Vemali",
    "diwalipura": "Diwalipura",
    "pratap-nagar": "Pratap Nagar",
    "new-vip-road": "New VIP Road",
    "laxmipura": "Laxmipura",
    "navapura": "Navapura",
    "panigate": "Panigate",
    "raopura": "Raopura",
  };
  return areaNames[area] || area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export const allAreas = vadodaraAreas;
