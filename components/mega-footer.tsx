"use client";

import Link from "next/link";
import { vadodaraAreas, getAreaDisplayName } from "@/lib/business-config";
import { skinHairKeywords } from "@/lib/keywords-config";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, Sparkles, Heart, Scissors, Droplets } from "lucide-react";

// Local gallery images
const dermaImages = {
  skinCare: "/gallery/skin-care/01.webp",
  hairTreatment: "/gallery/hair-treatment/01.webp",
  laserTreatment: "/gallery/dermatology/04.webp",
  clinic: "/gallery/dermatology/01.webp",
  consultation: "/gallery/dermatology/03.webp",
  skinGlow: "/gallery/beauty/01.webp",
};

export function MegaFooter() {
  // Group keywords by category
  const skinTreatments = skinHairKeywords.filter(k => 
    k.slug.includes('acne') || k.slug.includes('pigmentation') || k.slug.includes('pimple') || 
    k.slug.includes('melasma') || k.slug.includes('dark-spot') || k.slug.includes('brightening') || 
    k.slug.includes('whitening') || k.slug.includes('vitiligo') || k.slug.includes('fungal') ||
    k.slug.includes('skin-doctor') || k.slug.includes('skin-specialist') || k.slug.includes('dermatologist')
  ).slice(0, 15);
  
  const hairTreatments = skinHairKeywords.filter(k => 
    k.slug.includes('hair') || k.slug.includes('prp') || k.slug.includes('gfc') || 
    k.slug.includes('dandruff') || k.slug.includes('scalp') || k.slug.includes('alopecia') ||
    k.slug.includes('beard') || k.slug.includes('trichologist')
  ).slice(0, 15);
  
  const laserTreatments = skinHairKeywords.filter(k => 
    k.slug.includes('laser') || k.slug.includes('tattoo') || k.slug.includes('carbon')
  ).slice(0, 8);
  
  const antiAgingTreatments = skinHairKeywords.filter(k => 
    k.slug.includes('botox') || k.slug.includes('filler') || k.slug.includes('anti-aging') ||
    k.slug.includes('wrinkle') || k.slug.includes('fine-line') || k.slug.includes('tightening')
  ).slice(0, 8);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Hero Images Banner */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <img src={dermaImages.skinCare} alt="Skin Care Treatment" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 text-xs font-semibold">Skin Care</span>
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <img src={dermaImages.hairTreatment} alt="Hair Treatment" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 text-xs font-semibold">Hair Care</span>
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <img src={dermaImages.laserTreatment} alt="Laser Treatment" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 text-xs font-semibold">Laser</span>
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-square hidden md:block">
              <img src={dermaImages.clinic} alt="Modern Clinic" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 text-xs font-semibold">Clinic</span>
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-square hidden md:block">
              <img src={dermaImages.consultation} alt="Doctor Consultation" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 text-xs font-semibold">Consult</span>
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-square hidden md:block">
              <img src={dermaImages.skinGlow} alt="Glowing Skin Results" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 text-xs font-semibold">Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-pink-400" />
            Prime One Hair & Skin Clinic Vadodara - All Services
            <Sparkles className="w-6 h-6 text-pink-400" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Areas Column 1 */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg border-b border-pink-600 pb-2 flex items-center gap-2 text-pink-400">
                <MapPin className="w-5 h-5" />
                Vadodara Areas
              </h3>
              <ul className="space-y-1 text-sm">
                {vadodaraAreas.slice(0, 20).map((area) => (
                  <li key={area}>
                    <Link href={`/${area}`} className="text-gray-400 hover:text-pink-400 transition-colors block py-0.5">
                      {getAreaDisplayName(area)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas Column 2 */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg border-b border-pink-600 pb-2 flex items-center gap-2 text-pink-400">
                <MapPin className="w-5 h-5" />
                More Areas
              </h3>
              <ul className="space-y-1 text-sm">
                {vadodaraAreas.slice(20, 40).map((area) => (
                  <li key={area}>
                    <Link href={`/${area}`} className="text-gray-400 hover:text-pink-400 transition-colors block py-0.5">
                      {getAreaDisplayName(area)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skin Treatments */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg border-b border-pink-600 pb-2 flex items-center gap-2 text-pink-400">
                <Sparkles className="w-5 h-5" />
                Skin Treatments
              </h3>
              <ul className="space-y-1 text-sm">
                {skinTreatments.map((keyword) => (
                  <li key={keyword.slug}>
                    <Link href={`/${keyword.slug}`} className="text-gray-400 hover:text-pink-400 transition-colors block py-0.5">
                      {keyword.title.replace(" in Vadodara", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hair Treatments */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg border-b border-pink-600 pb-2 flex items-center gap-2 text-pink-400">
                <Scissors className="w-5 h-5" />
                Hair Treatments
              </h3>
              <ul className="space-y-1 text-sm">
                {hairTreatments.map((keyword) => (
                  <li key={keyword.slug}>
                    <Link href={`/${keyword.slug}`} className="text-gray-400 hover:text-pink-400 transition-colors block py-0.5">
                      {keyword.title.replace(" in Vadodara", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Laser & Anti-Aging */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg border-b border-pink-600 pb-2 flex items-center gap-2 text-pink-400">
                <Droplets className="w-5 h-5" />
                Laser & Anti-Aging
              </h3>
              <ul className="space-y-1 text-sm">
                {laserTreatments.map((keyword) => (
                  <li key={keyword.slug}>
                    <Link href={`/${keyword.slug}`} className="text-gray-400 hover:text-pink-400 transition-colors block py-0.5">
                      {keyword.title.replace(" in Vadodara", "")}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 border-t border-gray-700 mt-2">
                  <span className="text-pink-400 text-xs font-semibold">Anti-Aging:</span>
                </li>
                {antiAgingTreatments.map((keyword) => (
                  <li key={keyword.slug}>
                    <Link href={`/${keyword.slug}`} className="text-gray-400 hover:text-pink-400 transition-colors block py-0.5">
                      {keyword.title.replace(" in Vadodara", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Treatments Row */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <h3 className="text-lg font-semibold mb-4 text-center text-pink-400">Popular Treatments in Vadodara</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "acne-treatment-in-vadodara",
              "hair-fall-treatment-in-vadodara",
              "laser-hair-removal-in-vadodara",
              "pigmentation-treatment-in-vadodara",
              "hair-transplant-in-vadodara",
              "botox-treatment-in-vadodara",
              "prp-hair-treatment-in-vadodara",
              "hydrafacial-treatment-in-vadodara",
              "skin-whitening-treatment-in-vadodara",
              "dermal-fillers-in-vadodara",
              "chemical-peel-in-vadodara",
              "dandruff-treatment-in-vadodara",
            ].map((slug) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="px-3 py-1.5 bg-gray-800 hover:bg-pink-600 rounded-full text-xs text-gray-300 hover:text-white transition-colors border border-gray-700 hover:border-pink-600"
              >
                {slug.replace(/-in-vadodara$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-400">+91 63535 83148</p>
                <p className="text-gray-400">+91 98765 43211</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-400">info@skinhairclinic.com</p>
                <p className="text-gray-400">appointments@skinhairclinic.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-gray-400">G-12, Royal Business Park,</p>
                <p className="text-gray-400">Opp. Inox Cinema, RC Dutt Road,</p>
                <p className="text-gray-400">Alkapuri, Vadodara - 390007</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Clinic Hours</h4>
                <p className="text-gray-400">Mon - Sat: 10:00 AM - 8:00 PM</p>
                <p className="text-gray-400">Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Text */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-500 text-xs text-center max-w-4xl mx-auto leading-relaxed">
            Prime One Hair & Skin Clinic - Best Hair & Skin Clinic in Vadodara offering advanced dermatology treatments including acne treatment, 
            hair fall treatment, laser hair removal, pigmentation treatment, hair transplant, botox, PRP therapy, 
            HydraFacial, chemical peels, and more. Our expert dermatologists serve patients across Vadodara including 
            Alkapuri, Akota, Gotri, Manjalpur, Karelibaug, Waghodia Road, Fatehgunj, Sayajigunj, and all areas. 
            US FDA approved treatments with proven results.
          </p>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Prime One Hair & Skin Clinic Vadodara. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
