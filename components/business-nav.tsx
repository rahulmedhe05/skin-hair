"use client";

import { useState } from "react";
import Link from "next/link";
import { businesses, getAreaDisplayName, BusinessConfig } from "@/lib/business-config";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

// Prime One Logo Component
function PrimeOneLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#fbbf24" }} />
          <stop offset="100%" style={{ stopColor: "#f59e0b" }} />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" fill="url(#logoGrad)"/>
      <text x="16" y="21" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#831843">P1</text>
      <path d="M8 8 Q16 4 24 8" stroke="#831843" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M8 24 Q16 28 24 24" stroke="#831843" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
    </svg>
  );
}

interface BusinessNavProps {
  currentBusiness?: BusinessConfig;
  currentArea?: string;
}

export function BusinessNav({ currentBusiness, currentArea }: BusinessNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const gradientClass = currentBusiness?.colors.gradient || "from-blue-600 to-blue-800";

  return (
    <header className={cn("bg-gradient-to-r text-white sticky top-0 z-50 shadow-lg", gradientClass)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            {currentBusiness ? (
              <span className="flex items-center gap-2">
                <PrimeOneLogo className="w-7 h-7 md:w-8 md:h-8" />
                <span className="text-sm md:text-xl truncate max-w-[180px] md:max-w-none">{currentBusiness.name}</span>
              </span>
            ) : (
              "All Services"
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="#services" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Services
            </Link>
            <Link href="#about" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              About
            </Link>
            <Link href="#contact" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+916353583148"
              className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <Link href="#services" className="block text-sm py-2 hover:underline" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="#about" className="block text-sm py-2 hover:underline" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="#contact" className="block text-sm py-2 hover:underline" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>

            <div className="border-t border-white/20 pt-4">
              <a
                href="tel:+916353583148"
                className="flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
