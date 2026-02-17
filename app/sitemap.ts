import { MetadataRoute } from 'next'
import { vadodaraAreas } from '@/lib/business-config'
import { skinHairKeywords } from '@/lib/keywords-config'
import { allKeywordSlugs } from '@/lib/all-keywords'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skinhairvadodara.in'
  const currentDate = new Date()

  // Home page
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/skin-hair`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Area pages (40 Vadodara locations)
  const areaPages: MetadataRoute.Sitemap = vadodaraAreas.map((area) => ({
    url: `${baseUrl}/${area}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Original keyword pages with full config (103 keywords) - higher priority
  const existingKeywordSlugs = new Set(skinHairKeywords.map(k => k.slug))
  const originalKeywordPages: MetadataRoute.Sitemap = skinHairKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // New keyword pages (370 additional keywords)
  const newKeywordPages: MetadataRoute.Sitemap = allKeywordSlugs
    .filter(slug => !existingKeywordSlugs.has(slug))
    .map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  return [...staticPages, ...areaPages, ...originalKeywordPages, ...newKeywordPages]
}
