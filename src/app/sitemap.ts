import { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.cattlefeednepal.com'

    // Static routes — lastModified dates reflect actual content edits, not build time.
    // Using real dates prevents Google from treating every crawl as a "just updated" signal.
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${baseUrl}`,                    lastModified: new Date('2025-05-13'), changeFrequency: 'monthly', priority: 1.0 },
        { url: `${baseUrl}/about`,              lastModified: new Date('2025-04-01'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/products`,           lastModified: new Date('2025-04-01'), changeFrequency: 'weekly',  priority: 0.9 },
        { url: `${baseUrl}/blog`,               lastModified: new Date('2025-05-13'), changeFrequency: 'weekly',  priority: 0.8 },
        { url: `${baseUrl}/contact`,            lastModified: new Date('2025-04-01'), changeFrequency: 'yearly',  priority: 0.7 },
        { url: `${baseUrl}/become-dealer`,      lastModified: new Date('2025-04-01'), changeFrequency: 'yearly',  priority: 0.7 },
        { url: `${baseUrl}/tools/feed-calculator`,    lastModified: new Date('2026-06-05'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/tools/profit-calculator`, lastModified: new Date('2026-06-05'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/privacy-policy`,     lastModified: new Date('2025-04-01'), changeFrequency: 'yearly',  priority: 0.3 },
        { url: `${baseUrl}/terms-of-service`,   lastModified: new Date('2025-04-01'), changeFrequency: 'yearly',  priority: 0.3 },
        { url: `${baseUrl}/website-map`,        lastModified: new Date('2025-04-01'), changeFrequency: 'monthly', priority: 0.4 },
    ]

    // Dynamic product routes — static date prevents false "just updated" signals to Google
    const productRoutes = products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: new Date('2025-05-13'),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...productRoutes, ...blogRoutes]
}
