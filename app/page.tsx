import Link from "next/link";
import { businesses, getAreaDisplayName, allAreas } from "@/lib/business-config";
import { skinHairKeywords } from "@/lib/keywords-config";
import { MegaFooter } from "@/components/mega-footer";
import { BusinessHeroSlider } from "@/components/business-hero-slider";
import { BusinessNav } from "@/components/business-nav";
import { BusinessWhatsAppFloat } from "@/components/business-whatsapp-float";
import { Phone, ArrowRight, MapPin, Star, Users, Award, CheckCircle, Sparkles, Heart, Scissors, Droplet } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Skin & Hair Clinic in Vadodara | #1 Dermatologist | Book Now ₹500",
  description:
    "🏆 Vadodara's Top Rated Skin & Hair Clinic ✓ 10,000+ Happy Patients ✓ Hair Transplant from ₹35,000 ✓ Laser Hair Removal ✓ Acne Treatment ✓ PRP/GFC ✓ Free Consultation. Call Now!",
  keywords: [
    "best skin clinic vadodara",
    "hair clinic vadodara",
    "dermatologist vadodara",
    "hair fall treatment vadodara",
    "hair transplant vadodara cost",
    "acne treatment vadodara",
    "laser hair removal vadodara price",
    "skin whitening vadodara",
    "PRP therapy vadodara",
    "best skin doctor vadodara",
    "skin specialist near me vadodara",
    "hair loss treatment vadodara",
    "pigmentation treatment vadodara",
    "botox vadodara",
  ],
  openGraph: {
    title: "Best Skin & Hair Clinic in Vadodara | Trusted by 10,000+ Patients",
    description: "Transform your skin & hair! Expert dermatologists, US FDA approved treatments, affordable prices. Hair Transplant, Laser, Acne, Anti-Aging & more.",
  },
};

const skinHairBusiness = businesses[0]; // Since we only have skin-hair now

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <BusinessNav currentBusiness={skinHairBusiness} currentArea="vadodara" />
      
      {/* Hero Slider with Form */}
      <BusinessHeroSlider 
        business={skinHairBusiness} 
        area="vadodara" 
        heroTitle="Advanced Skin & Hair Care Solutions in Vadodara"
        heroSubtitle="Expert dermatologists and trichologists providing world-class treatments for all skin and hair concerns. Transform your look with our advanced medical-grade treatments."
      />

      {/* Trust Badges */}
      <section className="py-8 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-bold text-2xl text-gray-800">10,000+</p>
              <p className="text-gray-600 text-sm">Happy Patients</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl text-gray-800">4.9/5</p>
              <p className="text-gray-600 text-sm">Patient Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-bold text-2xl text-gray-800">15+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl text-gray-800">US FDA</p>
              <p className="text-gray-600 text-sm">Approved Equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">About Our Clinic</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-2">
                Vadodara's Premier Skin & Hair Care Destination
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Welcome to Vadodara's most trusted Skin & Hair Clinic. Our team of expert dermatologists and trichologists are dedicated to providing personalized care using the latest medical technologies and treatments.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From common skin conditions to advanced cosmetic treatments, from hair fall solutions to complete hair transplantation - we offer comprehensive care under one roof with a focus on safety, efficacy, and patient satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span className="font-medium">Advanced Technology</span>
                </div>
                <div className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
                  <Heart className="w-5 h-5 text-pink-600" />
                  <span className="font-medium">Personalized Care</span>
                </div>
                <div className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-pink-600" />
                  <span className="font-medium">Certified Experts</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/gallery/dermatology/02.webp"
                alt="Skin & Hair Clinic in Vadodara"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-pink-600 to-rose-500 text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">Our Treatments</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-2">
              Skin & Hair Treatment Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive skin and hair care solutions using advanced medical technologies and proven treatment protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "💆", title: "Skin Treatment", desc: "Complete skin care solutions for acne, pigmentation, aging & more" },
              { icon: "💇", title: "Hair Fall Treatment", desc: "PRP, mesotherapy & advanced solutions for hair loss" },
              { icon: "✨", title: "Hair Transplant", desc: "FUE & FUT hair transplant by expert surgeons" },
              { icon: "🌟", title: "Acne Treatment", desc: "Laser, chemical peel & medication for acne & scars" },
              { icon: "⚡", title: "Laser Hair Removal", desc: "US FDA approved machines for permanent hair reduction" },
              { icon: "🎯", title: "Anti-Aging Treatment", desc: "Botox, fillers, thread lift & laser rejuvenation" },
              { icon: "💫", title: "PRP Therapy", desc: "Natural treatment using your own blood platelets" },
              { icon: "🌸", title: "Chemical Peeling", desc: "Skin rejuvenation & pigmentation removal" },
              { icon: "✨", title: "Skin Whitening", desc: "Safe glutathione & laser treatments for fair skin" },
              { icon: "🔬", title: "Scalp Treatment", desc: "Advanced treatments for dandruff & scalp issues" },
              { icon: "💉", title: "Mesotherapy", desc: "Vitamin injections for hair growth & skin glow" },
              { icon: "🎭", title: "Scar Removal", desc: "Laser & micro-needling for all types of scars" },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-900 via-rose-900 to-pink-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-pink-300 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-2">
              The Best Care for Your Skin & Hair
            </h2>
            <p className="text-pink-200 text-lg max-w-2xl mx-auto">
              We combine expertise, technology, and personalized care to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Dermatologists</h3>
              <p className="text-pink-200">
                MD qualified skin specialists with years of experience in advanced treatments.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Sparkles className="w-12 h-12 text-pink-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Latest Technology</h3>
              <p className="text-pink-200">
                US FDA approved equipment and international standard treatment protocols.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
              <p className="text-pink-200">
                Customized treatment plans based on your unique skin and hair type.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-pink-200">
                10,000+ satisfied patients with visible, long-lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Treatments Keywords */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">Popular Searches</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">
              Find Your Treatment
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse our most popular skin and hair treatments in Vadodara.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skinHairKeywords.slice(0, 20).map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/skin-hair/${keyword.slug}`}
                className="px-4 py-2 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-full text-sm font-medium transition-colors border border-pink-100 hover:border-pink-200"
              >
                {keyword.title.replace(" in Vadodara", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">Our Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">Skin & Hair Clinic in All Areas of Vadodara</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We serve patients across all major areas of Vadodara with our expert skin and hair care services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {allAreas.map((area) => (
              <Link
                key={area}
                href={`/skin-hair/${area}`}
                className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-pink-50 transition-colors shadow-sm hover:shadow border border-gray-100"
              >
                <MapPin className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span className="font-medium text-sm">{getAreaDisplayName(area)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Quick Links */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Skin & Hair Services by Area
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="space-y-3">
              <h3 className="font-bold text-lg pb-2 border-b-2 border-pink-500 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-600" />
                Skin Treatments
              </h3>
              <ul className="space-y-1 text-sm">
                {allAreas.slice(0, 7).map((area) => (
                  <li key={area}>
                    <Link
                      href={`/skin-hair/${area}`}
                      className="text-gray-600 hover:text-pink-600 transition-colors block py-0.5"
                    >
                      Skin Treatment in {getAreaDisplayName(area)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-lg pb-2 border-b-2 border-pink-500 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-pink-600" />
                Hair Treatments
              </h3>
              <ul className="space-y-1 text-sm">
                {allAreas.slice(0, 7).map((area) => (
                  <li key={area}>
                    <Link
                      href={`/skin-hair/${area}`}
                      className="text-gray-600 hover:text-pink-600 transition-colors block py-0.5"
                    >
                      Hair Fall Treatment in {getAreaDisplayName(area)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-lg pb-2 border-b-2 border-pink-500 flex items-center gap-2">
                <Droplet className="w-5 h-5 text-pink-600" />
                Hair Transplant
              </h3>
              <ul className="space-y-1 text-sm">
                {allAreas.slice(0, 7).map((area) => (
                  <li key={area}>
                    <Link
                      href={`/skin-hair/${area}`}
                      className="text-gray-600 hover:text-pink-600 transition-colors block py-0.5"
                    >
                      Hair Transplant in {getAreaDisplayName(area)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-lg pb-2 border-b-2 border-pink-500 flex items-center gap-2">
                <Star className="w-5 h-5 text-pink-600" />
                Laser Treatments
              </h3>
              <ul className="space-y-1 text-sm">
                {allAreas.slice(0, 7).map((area) => (
                  <li key={area}>
                    <Link
                      href={`/skin-hair/${area}`}
                      className="text-gray-600 hover:text-pink-600 transition-colors block py-0.5"
                    >
                      Laser Hair Removal in {getAreaDisplayName(area)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our expert dermatologists today. Let us help you achieve healthy, glowing skin and lustrous hair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call: +91 63535 83148
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi, I'm interested in Skin & Hair treatment consultation in Vadodara"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <MegaFooter />
      <BusinessWhatsAppFloat business={skinHairBusiness} area="vadodara" />
    </div>
  );
}
