"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-0">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-accent">Prime One Hair & Skin Clinic</h3>
            <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6">
              {
                "Your trusted destination for advanced hair and skin care solutions in Vadodara. Expert dermatologists providing world-class treatments."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Gallery", "Packages", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(" ", "-"))
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>Hair Fall Treatment</li>
              <li>Hair Transplant</li>
              <li>Skin Care Treatments</li>
              <li>Laser Hair Removal</li>
              <li>Acne & Pigmentation</li>
              <li>Anti-Aging Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    Prime One Hair & Skin Clinic,
                    <br />
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+918618080171"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  +91 861 808 0171
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:nestureinterior@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  nestureinterior@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">Hair & Skin Clinic Services - All Areas of Vadodara</h4>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed">
            Serving patients across Vadodara's premium localities including Alkapuri, Akota, Gotri, Manjalpur, Karelibaug, Fatehgunj, Sayajigunj, Waghodia Road, Race Course, and surrounding areas
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3">
            ✓ Hair Transplant | ✓ Laser Treatments | ✓ Skin Care Solutions
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © {new Date().getFullYear()} Prime One Hair & Skin Clinic. All rights reserved. | Vadodara's Premier Hair & Skin Clinic
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Prime One Hair Skin Clinic Vadodara, dermatologist Vadodara, skin specialist, hair transplant, laser hair removal, acne treatment, hair fall treatment, PRP therapy, GFC treatment, HydraFacial, chemical peel, pigmentation treatment, anti-aging, botox, dermal fillers, skin clinic near me
      </div>
    </footer>
  )
}
