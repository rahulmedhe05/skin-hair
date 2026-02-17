"use client"

import { useState } from "react"

const categories = ['skin-care', 'hair-treatment', 'dermatology', 'beauty'];
const titles = [
  "Facial Treatment", "Skin Care Routine", "Laser Treatment", "Hair Wash", "Hair Styling",
  "Dermatology Checkup", "Skin Rejuvenation", "Hair Transplant", "Anti-Aging Treatment",
  "Chemical Peel", "Botox Treatment", "PRP Therapy", "Hair Color", "Skin Consultation",
  "Beauty Treatment", "GFC Hair Treatment", "Acne Treatment", "Hair Fall Solution",
  "Dark Spot Removal", "Scalp Treatment", "Face Mask Therapy", "Hair Straightening",
  "Skin Analysis", "Beauty Care", "Dermal Fillers", "Facial Cleanser", "Hair Spa",
  "Microneedling", "Skin Glow Treatment", "Hair Conditioning", "Laser Hair Removal",
  "Body Treatment", "Eyebrow Treatment", "Hair Growth Therapy", "Face Lift",
  "Beard Treatment", "Skin Tightening", "Hair Restoration", "Pigmentation Treatment",
  "Wellness Treatment", "UV Protection", "Hair Volume", "Collagen Therapy",
  "Hydra Facial", "Hair Nutrition", "Wrinkle Reduction", "Hair Shining",
  "Pore Minimizing", "Beauty Consultation", "Advanced Skin Care", "Hair Repair",
  "Anti-Dandruff", "Skin Brightening", "Hair Extension", "Alopecia Treatment", "Skin Hydration"
];

const galleryItems = Array.from({ length: 56 }, (_, i) => ({
  id: i + 1,
  type: "image" as const,
  src: `/gallery/${categories[i % 4]}/${String(Math.min((i % 25) + 1, i < 4 * 26 ? 26 : 25)).padStart(2, '0')}.webp`,
  title: titles[i] || `Treatment ${i + 1}`,
}));

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "image">("all")
  const [showAll, setShowAll] = useState(false)

  const filteredItems =
    selectedFilter === "all" ? galleryItems : galleryItems.filter((item) => item.type === selectedFilter)
  
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 12)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Gallery of Excellence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Explore our stunning collection of interior designs - from modern living rooms to luxurious bedrooms"
            }
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-primary-foreground font-bold text-sm md:text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredItems.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors"
            >
              {showAll ? "Show Less" : `View All ${filteredItems.length} Photos`}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono mb-6 text-lg">
            {"Want to transform your space? Contact us today for a free consultation"}
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors inline-block"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
