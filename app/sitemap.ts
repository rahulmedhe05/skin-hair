import { MetadataRoute } from 'next'
import { vadodaraAreas } from '@/lib/business-config'
import { skinHairKeywords } from '@/lib/keywords-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skinhairclinicvadodara.com'
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

  // Keyword/Treatment pages (90+ keywords)
  const keywordPages: MetadataRoute.Sitemap = skinHairKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...areaPages, ...keywordPages]
}
