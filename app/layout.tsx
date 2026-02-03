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
  title: "Premium Services in Vadodara | Interior, Real Estate, Solar, Healthcare & More",
  description:
    "Your one-stop destination for premium services in Vadodara. Interior Designers, Real Estate, Solar Installation, Skin & Hair Clinic, Lawyers, Dentists, Home Automation, Security Systems, Wedding Planners & Study Abroad Consultants. Serving all areas of Vadodara.",
  keywords:
    "services Vadodara, interior designers Vadodara, real estate Vadodara, solar installation Vadodara, skin clinic Vadodara, lawyers Vadodara, dentists Vadodara, home automation Vadodara, CCTV installation Vadodara, wedding planners Vadodara, study abroad consultants Vadodara",
  authors: [{ name: "Premium Services Vadodara" }],
  creator: "Premium Services Vadodara",
  publisher: "Premium Services Vadodara",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://yourwebsite.com"),
  alternates: {
    canonical: "https://yourwebsite.com",
  },
  openGraph: {
    title: "Premium Services in Vadodara | 10+ Service Categories",
    description:
      "Your trusted partner for Interior Design, Real Estate, Solar, Healthcare, Legal Services, Home Automation, Security, Weddings & Education in Vadodara.",
    url: "https://yourwebsite.com",
    siteName: "Premium Services Vadodara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Services in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Services in Vadodara",
    description: "Interior Design, Real Estate, Solar, Healthcare, Legal, Home Automation, Security, Weddings & Study Abroad in Vadodara",
    images: ["https://yourwebsite.com/og-image.jpg"],
    creator: "@premiumvadodara",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
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
