"use client";

import Link from "next/link";
import { allKeywordSlugs } from "@/lib/all-keywords";
import { vadodaraAreas, getAreaDisplayName } from "@/lib/business-config";

interface InternalLinksFooterProps {
  currentSlug: string;
  type: "keyword" | "area";
}

// Group keywords by category for organized display
function categorizeKeyword(slug: string): string {
  if (slug.includes("hair-transplant") || slug.includes("fue") || slug.includes("dhi") || slug.includes("beard-transplant") || slug.includes("eyebrow-transplant") || slug.includes("moustache") || slug.includes("sideburn")) return "Hair Transplant";
  if (slug.includes("hair-fall") || slug.includes("hair-loss") || slug.includes("hair-growth") || slug.includes("hair-thinning") || slug.includes("baldness") || slug.includes("alopecia") || slug.includes("receding") || slug.includes("hair-regrowth") || slug.includes("hair-volume") || slug.includes("thin-hair") || slug.includes("hair-density") || slug.includes("hair-breakage") || slug.includes("hair-strengthening")) return "Hair Loss Treatment";
  if (slug.includes("prp") || slug.includes("gfc") || slug.includes("mesotherapy") || slug.includes("stem-cell") || slug.includes("exosome") || slug.includes("growth-factor") || slug.includes("platelet")) return "PRP & Growth Therapy";
  if (slug.includes("laser")) return "Laser Treatment";
  if (slug.includes("acne") || slug.includes("pimple") || slug.includes("blackhead") || slug.includes("whitehead") || slug.includes("comedonal")) return "Acne & Pimple";
  if (slug.includes("pigmentation") || slug.includes("melasma") || slug.includes("dark-spot") || slug.includes("dark-circle") || slug.includes("dark-neck") || slug.includes("dark-lip") || slug.includes("skin-brightening") || slug.includes("skin-whitening") || slug.includes("fairness") || slug.includes("glowing") || slug.includes("skin-glow") || slug.includes("tan-removal") || slug.includes("sun-tan") || slug.includes("depigmentation") || slug.includes("glutathione") || slug.includes("freckles") || slug.includes("age-spot") || slug.includes("sun-damage") || slug.includes("hyperpigmentation")) return "Pigmentation & Whitening";
  if (slug.includes("botox") || slug.includes("filler") || slug.includes("anti-aging") || slug.includes("wrinkle") || slug.includes("fine-lines") || slug.includes("thread-lift") || slug.includes("face-lift") || slug.includes("skin-tightening") || slug.includes("hifu") || slug.includes("rf-skin") || slug.includes("jawline") || slug.includes("chin") || slug.includes("cheek") || slug.includes("nasolabial") || slug.includes("crow-feet") || slug.includes("laugh-lines") || slug.includes("neck-lift") || slug.includes("collagen") || slug.includes("v-shape") || slug.includes("face-slimming") || slug.includes("skin-lifting") || slug.includes("tear-trough") || slug.includes("nose-filler") || slug.includes("temple") || slug.includes("liquid-face") || slug.includes("vampire-face") || slug.includes("double-chin") || slug.includes("lip-enhancement")) return "Anti-Aging & Fillers";
  if (slug.includes("facial") || slug.includes("hydrafacial") || slug.includes("chemical-peel") || slug.includes("carbon") || slug.includes("skin-polishing") || slug.includes("microdermabrasion") || slug.includes("skin-peeling") || slug.includes("o3-facial") || slug.includes("medi-facial") || slug.includes("vampire-facial") || slug.includes("dermapen") || slug.includes("bb-glow") || slug.includes("glass-skin") || slug.includes("korean") || slug.includes("aqua-peel") || slug.includes("jet-peel") || slug.includes("glycolic") || slug.includes("salicylic") || slug.includes("tca-peel") || slug.includes("lactic-acid") || slug.includes("face-cleanup") || slug.includes("gold-facial") || slug.includes("diamond-facial") || slug.includes("oxygen-facial") || slug.includes("led-facial") || slug.includes("photo-facial") || slug.includes("brightening-facial") || slug.includes("charcoal") || slug.includes("collagen-facial") || slug.includes("bridal-facial")) return "Facial & Peels";
  if (slug.includes("hair-spa") || slug.includes("keratin") || slug.includes("smoothening") || slug.includes("rebonding") || slug.includes("straightening") || slug.includes("hair-coloring") || slug.includes("hair-extension") || slug.includes("hair-weaving") || slug.includes("hair-bonding") || slug.includes("hair-replacement") || slug.includes("hair-wig") || slug.includes("hair-damage") || slug.includes("frizzy") || slug.includes("dry-hair") || slug.includes("grey-hair") || slug.includes("premature-grey")) return "Hair Care & Styling";
  if (slug.includes("scalp") || slug.includes("dandruff") || slug.includes("seborrheic") || slug.includes("oily-scalp") || slug.includes("itchy-scalp") || slug.includes("dry-scalp") || slug.includes("flaky-scalp")) return "Scalp Treatment";
  if (slug.includes("scar") || slug.includes("keloid") || slug.includes("subcision") || slug.includes("ice-pick") || slug.includes("hypertrophic")) return "Scar Treatment";
  if (slug.includes("mole") || slug.includes("wart") || slug.includes("skin-tag") || slug.includes("corn") || slug.includes("callus") || slug.includes("cyst") || slug.includes("lipoma") || slug.includes("millia") || slug.includes("xanthelasma") || slug.includes("syringoma") || slug.includes("keratosis") || slug.includes("skin-growth") || slug.includes("skin-lesion") || slug.includes("fibroma") || slug.includes("verruca") || slug.includes("cherry-angioma")) return "Skin Removal";
  if (slug.includes("eczema") || slug.includes("psoriasis") || slug.includes("vitiligo") || slug.includes("fungal") || slug.includes("ringworm") || slug.includes("rash") || slug.includes("urticaria") || slug.includes("hives") || slug.includes("lichen") || slug.includes("rosacea") || slug.includes("scabies") || slug.includes("herpes") || slug.includes("shingles") || slug.includes("infection") || slug.includes("molluscum") || slug.includes("cellulitis") || slug.includes("folliculitis") || slug.includes("dermatitis")) return "Skin Conditions";
  if (slug.includes("body-contouring") || slug.includes("fat-reduction") || slug.includes("coolsculpting") || slug.includes("inch-loss") || slug.includes("cellulite") || slug.includes("body-polishing") || slug.includes("body-sculpting") || slug.includes("lipolysis") || slug.includes("cryolipolysis") || slug.includes("tummy") || slug.includes("body-skin") || slug.includes("body-whitening") || slug.includes("stretch-mark")) return "Body Treatment";
  if (slug.includes("cost") || slug.includes("price")) return "Treatment Cost";
  if (slug.includes("bridal") || slug.includes("pre-wedding") || slug.includes("groom") || slug.includes("mens") || slug.includes("womens")) return "Bridal & Gender-Specific";
  if (slug.includes("doctor") || slug.includes("specialist") || slug.includes("clinic") || slug.includes("hospital") || slug.includes("dermatologist") || slug.includes("cosmetologist") || slug.includes("trichologist") || slug.includes("salon") || slug.includes("near-me")) return "Doctor & Clinic";
  if (slug.includes("nail")) return "Nail Treatment";
  if (slug.includes("under-eye") || slug.includes("eye-bag") || slug.includes("puffy-eyes") || slug.includes("sunken-eyes") || slug.includes("hollowness")) return "Under Eye Treatment";
  if (slug.includes("lip-") || slug.includes("ear-lobe") || slug.includes("dimple")) return "Cosmetic Procedures";
  return "Other Treatments";
}

function formatKeywordTitle(slug: string): string {
  return slug
    .replace(/-in-vadodara$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function InternalLinksFooter({ currentSlug, type }: InternalLinksFooterProps) {
  // Get all keywords and group them
  const allSlugs = allKeywordSlugs;
  const grouped: Record<string, string[]> = {};

  allSlugs.forEach((slug) => {
    if (slug === currentSlug) return;
    const cat = categorizeKeyword(slug);
    if (!grouped[cat]) grouped[cat] = [];
    if (grouped[cat].length < 8) grouped[cat].push(slug);
  });

  // Sort categories
  const sortedCategories = Object.keys(grouped).sort();

  return (
    <section className="py-12 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Explore Our Services in Vadodara
        </h3>

        {/* Keyword Links by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {sortedCategories.slice(0, 12).map((cat) => (
            <div key={cat}>
              <h4 className="font-bold text-sm text-pink-600 mb-2 uppercase tracking-wide">{cat}</h4>
              <ul className="space-y-1">
                {grouped[cat].map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/${slug}`}
                      className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      {formatKeywordTitle(slug)} in Vadodara
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Area Links */}
        {type === "keyword" && (
          <div className="border-t border-gray-200 pt-6">
            <h4 className="font-bold text-sm text-pink-600 mb-3 uppercase tracking-wide text-center">
              Service Areas in Vadodara
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {vadodaraAreas.map((area) => (
                <Link
                  key={area}
                  href={`/${area}`}
                  className="text-xs px-3 py-1 bg-white rounded-full text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors border border-gray-200"
                >
                  {getAreaDisplayName(area)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
