"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://skinhairvadodara.in",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `https://skinhairvadodara.in${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-1 py-2 text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-pink-600 transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                {item.href && index < items.length - 1 ? (
                  <Link
                    href={item.href}
                    className="hover:text-pink-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-pink-600 font-medium truncate max-w-[200px] sm:max-w-none">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
