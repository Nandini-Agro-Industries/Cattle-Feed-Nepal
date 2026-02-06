import { MetadataRoute } from 'next'
import { products } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.cattlefeednepal.com'

    // Static routes
    const routes = [
        '',
        '/products',
        '/contact',
        '/become-dealer',
        '/privacy-policy',
        '/terms-of-service',
        '/website-map',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic product routes
    const productRoutes = products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...routes, ...productRoutes]
}
