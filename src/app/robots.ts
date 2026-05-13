import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'OAI-SearchBot'],
                allow: '/',
            }
        ],
        sitemap: 'https://www.cattlefeednepal.com/sitemap.xml',
    }
}
