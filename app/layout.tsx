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
    default: "Prime One Hair & Skin Clinic Vadodara | Expert Dermatologists | Book Now",
    template: "%s | Prime One Hair & Skin Clinic"
  },
  description:
    "Vadodara's #1 Hair & Skin Clinic ✓ Expert Dermatologists ✓ Hair Transplant ✓ Laser Treatment ✓ Acne & Pigmentation ✓ PRP Therapy ✓ 10,000+ Happy Patients. Call Now!",
  keywords:
    "prime one hair skin clinic, skin clinic vadodara, hair clinic vadodara, dermatologist vadodara, hair transplant vadodara, laser treatment vadodara, acne treatment vadodara, hair fall treatment vadodara, skin specialist vadodara, best skin doctor vadodara",
  authors: [{ name: "Prime One Hair & Skin Clinic" }],
  creator: "Prime One Hair & Skin Clinic",
  publisher: "Prime One Hair & Skin Clinic",
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
    title: "Prime One Hair & Skin Clinic Vadodara | Expert Dermatologists",
    description:
      "Transform your hair & skin at Vadodara's top-rated clinic. Advanced treatments for acne, hair loss, pigmentation & anti-aging. 10,000+ satisfied patients.",
    url: "https://skinhairvadodara.in",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://skinhairvadodara.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prime One Hair & Skin Clinic Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime One Hair & Skin Clinic Vadodara",
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
        "@id": "https://skinhairvadodara.in/#organization",
        name: "Prime One Hair & Skin Clinic",
        image: "https://skinhairvadodara.in/logo.png",
        description: "Vadodara's premier hair and skin clinic offering advanced dermatology treatments including hair transplant, laser treatments, acne treatment, and more.",
        url: "https://skinhairvadodara.in",
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
        "@id": "https://skinhairvadodara.in/#organization",
        name: "Prime One Hair & Skin Clinic",
        url: "https://skinhairvadodara.in",
        logo: "https://skinhairvadodara.in/logo.png",
        foundingDate: "2010",
        knowsAbout: [
          "Hair Transplant",
          "Laser Hair Removal",
          "Skin Treatment",
          "Hair Fall Treatment",
          "Acne Treatment",
          "Dermatology",
          "PRP Therapy",
          "Anti-Aging Treatment",
          "Pigmentation Treatment",
          "HydraFacial",
        ],
      },
    ],
  }

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#EC4899" />
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
