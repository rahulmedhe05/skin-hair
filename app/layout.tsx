import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Best Skin & Hair Clinic in Vadodara | Expert Dermatologists | Book Now",
    template: "%s | Skin Hair Clinic Vadodara"
  },
  description:
    "Vadodara's #1 Skin & Hair Clinic ✓ Expert Dermatologists ✓ Hair Transplant ✓ Laser Treatment ✓ Acne & Pigmentation ✓ PRP Therapy ✓ 10,000+ Happy Patients. Call Now!",
  keywords:
    "skin clinic vadodara, hair clinic vadodara, dermatologist vadodara, hair transplant vadodara, laser treatment vadodara, acne treatment vadodara, hair fall treatment vadodara, skin specialist vadodara, best skin doctor vadodara",
  authors: [{ name: "Skin & Hair Clinic Vadodara" }],
  creator: "Skin & Hair Clinic Vadodara",
  publisher: "Skin & Hair Clinic Vadodara",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://skinhairvadodara.in"),
  alternates: {
    canonical: "https://skinhairvadodara.in",
  },
  openGraph: {
    title: "Best Skin & Hair Clinic in Vadodara | Expert Dermatologists",
    description:
      "Transform your skin & hair at Vadodara's top-rated clinic. Advanced treatments for acne, hair loss, pigmentation & anti-aging. 10,000+ satisfied patients.",
    url: "https://skinhairvadodara.in",
    siteName: "Skin & Hair Clinic Vadodara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://skinhairvadodara.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Skin & Hair Clinic in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Skin & Hair Clinic in Vadodara",
    description: "Expert dermatologists for hair transplant, laser treatment, acne, pigmentation & anti-aging in Vadodara",
    images: ["https://skinhairvadodara.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
  verification: {
    google: "googlec1b155cb6acd07f9",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://yourwebsite.com/#organization",
        name: "Premium Services Vadodara",
        image: "https://yourwebsite.com/logo.png",
        description: "Your one-stop destination for premium services in Vadodara - Interior Design, Real Estate, Solar, Healthcare, Legal, Home Automation, Security, Weddings & Study Abroad",
        url: "https://yourwebsite.com",
        telephone: "+916353583148",
        email: "info@yourwebsite.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123, Business Hub",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          postalCode: "390007",
          addressCountry: "IN",
        },
        sameAs: [],
        priceRange: "$$",
        serviceArea: {
          "@type": "City",
          name: "Vadodara",
        },
        areaServed: ["Vadodara", "Alkapuri", "Race Course", "Manjalpur", "Gotri", "Vasna", "Karelibaug", "Fatehgunj", "Sayajigunj", "Akota", "Harni", "Tandalja", "Subhanpura", "Makarpura", "Nizampura"],
      },
      {
        "@type": "Organization",
        "@id": "https://yourwebsite.com/#organization",
        name: "Premium Services Vadodara",
        url: "https://yourwebsite.com",
        logo: "https://yourwebsite.com/logo.png",
        foundingDate: "2010",
        knowsAbout: [
          "Interior Design",
          "Real Estate",
          "Solar Installation",
          "Skin & Hair Treatment",
          "Legal Services",
          "Dental Care",
          "Home Automation",
          "Security Systems",
          "Wedding Planning",
          "Study Abroad Consulting",
        ],
      },
    ],
  }

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
