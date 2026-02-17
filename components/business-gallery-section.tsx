"use client";

import { useState, useCallback, useMemo } from "react";
import { BusinessConfig } from "@/lib/business-config";
import { KeywordConfig } from "@/lib/keywords-config";
import { Search, ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessGallerySectionProps {
  business: BusinessConfig;
  keyword?: KeywordConfig;
  area?: string;
}

// Local gallery images organized by category
const galleryImages: string[] = [
  // Skin Care (26 images)
  ...Array.from({ length: 26 }, (_, i) => `/gallery/skin-care/${String(i + 1).padStart(2, '0')}.webp`),
  // Hair Treatment (25 images)
  ...Array.from({ length: 25 }, (_, i) => `/gallery/hair-treatment/${String(i + 1).padStart(2, '0')}.webp`),
  // Dermatology (25 images)
  ...Array.from({ length: 25 }, (_, i) => `/gallery/dermatology/${String(i + 1).padStart(2, '0')}.webp`),
  // Beauty (22 images - 3 failed to download)
  ...Array.from({ length: 25 }, (_, i) => `/gallery/beauty/${String(i + 1).padStart(2, '0')}.webp`).filter(
    (_, i) => ![4, 7, 12].includes(i) // Skip IDs 05, 08, 13 which failed
  ),
];

export function BusinessGallerySection({ business, keyword, area }: BusinessGallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(12);
  
  const keywordText = keyword?.keyword || business.name;
  const areaText = area?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Vadodara";

  const images = useMemo(() => 
    galleryImages.map((path, index) => ({
      id: index + 1,
      url: path,
      fullUrl: path,
      alt: `${keywordText} ${areaText} - Image ${index + 1}`,
      title: `${keywordText} in ${areaText} - Project ${index + 1}`,
    })),
  [keywordText, areaText]);

  const loadMore = useCallback(() => {
    setVisibleImages((prev) => Math.min(prev + 12, images.length));
  }, [images.length]);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % images.length : 0);
  const prevImage = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + images.length) % images.length : 0);

  const gradientClass = business.colors.gradient;

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-1 rounded-full text-white text-sm font-semibold mb-4",
            gradientClass
          )}>
            <Images className="w-4 h-4" />
            <span>Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our {keywordText} Portfolio in {areaText}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of {keywordText.toLowerCase()} projects completed across {areaText} and Vadodara.
            Each project showcases our commitment to quality {keywordText.toLowerCase()} services.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, visibleImages).map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <Search className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium truncate">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < images.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className={cn(
                "px-8 py-3 rounded-full text-white font-semibold transition-all hover:scale-105",
                gradientClass
              )}
            >
              Load More ({images.length - visibleImages} remaining)
            </button>
          </div>
        )}

        {/* SEO Text with Keyword Density */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Best {keywordText} Projects in {areaText}, Vadodara
          </h3>
          <p className="text-gray-600 mb-3">
            Our gallery showcases the finest {keywordText.toLowerCase()} work we have completed in {areaText}. 
            As the leading {keywordText.toLowerCase()} provider in {areaText}, we take pride in delivering exceptional 
            results for our clients. Browse through {images.length}+ {keywordText.toLowerCase()} images from our 
            portfolio in {areaText} and throughout Vadodara.
          </p>
          <p className="text-gray-500 text-sm">
            Showing {Math.min(visibleImages, images.length)} of {images.length} {keywordText.toLowerCase()} images from {areaText}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={images[selectedImage].fullUrl}
              alt={images[selectedImage].alt}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{images[selectedImage].title}</p>
              <p className="text-white/60 text-sm mt-1">{selectedImage + 1} / {images.length}</p>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </section>
  );
}
