import { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.cattlefeednepal.com'

    // Static routes
    const routes = [
        '',
        '/about',
        '/products',
        '/blog',
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

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...productRoutes, ...blogRoutes]
}
