"use client";

import { useState, useEffect } from "react";
import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { HeroForm } from "./hero-form";
import { Phone, ChevronLeft, ChevronRight, Users, Star, Award, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessHeroSliderProps {
  business: BusinessConfig;
  area: string;
  heroTitle: string;
  heroSubtitle: string;
  keyword?: string;
}

// Demo images for each business type
const businessImages: Record<string, string[]> = {
  "skin-hair": [
    "/gallery/dermatology/01.webp",
    "/gallery/skin-care/01.webp",
    "/gallery/hair-treatment/01.webp",
    "/gallery/dermatology/06.webp",
    "/gallery/beauty/01.webp",
  ],
};

export function BusinessHeroSlider({ business, area, heroTitle, heroSubtitle, keyword }: BusinessHeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const areaName = getAreaDisplayName(area);
  const images = businessImages[business.slug] || businessImages["skin-hair"];
  const gradientClass = business.colors.gradient;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className={cn("absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10")} />
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60 z-10", gradientClass)} />

      {/* Content */}
      <div className="relative z-20 flex items-start md:items-center min-h-screen pt-1 md:pt-2 px-3 md:px-4 pb-16 md:pb-0">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-4 md:gap-8 items-start md:items-center">
            {/* Form First on Mobile (order-1 mobile, order-2 desktop) */}
            <div className="md:col-span-2 order-1 md:order-2">
              <HeroForm business={business} area={area} keyword={keyword} />
            </div>

            {/* Text Content (order-2 mobile, order-1 desktop) */}
            <div className="md:col-span-3 text-white space-y-3 md:space-y-6 order-2 md:order-1">
              <div className="flex items-center gap-2 text-white/80">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-medium uppercase tracking-wider">
                  {business.tagline}
                </span>
              </div>
              
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {heroTitle}
              </h1>
              
              <p className="text-sm md:text-lg lg:text-xl opacity-90 max-w-xl">
                {heroSubtitle}
              </p>

              {/* Keyword for SEO - hidden on mobile for cleaner look */}
              <p className="hidden md:block text-sm md:text-base opacity-80">
                Looking for the best <strong>{business.name.toLowerCase()}</strong> in {areaName}? 
                We are the top-rated <strong>{business.name.toLowerCase()}</strong> serving {areaName} and all of Vadodara 
                with premium <strong>{business.name.toLowerCase()}</strong> services.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-2 md:gap-6 pt-1 md:pt-2">
                <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium">5000+ Customers</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                  <span className="text-xs md:text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  <Award className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium">15+ Years</span>
                </div>
              </div>

              {/* CTA Buttons - Mobile Only */}
              <div className="flex flex-row gap-2 pt-2 md:hidden">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-1.5 bg-white text-gray-900 px-4 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all text-sm flex-1"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/916353583148?text=Hi, I'm interested in ${business.name} services in ${areaName}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-green-500 text-white px-4 py-2.5 rounded-full font-bold hover:bg-green-600 transition-all text-sm flex-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation - hidden on mobile for cleaner UI */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              )}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
