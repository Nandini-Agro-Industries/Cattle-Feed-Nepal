import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag, Home, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { PortableText } from '@portabletext/react';
import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/lib/queries";

// Generate static params for all blog posts
export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    let post = blogPosts.find((p) => p.slug === slug) as any;
    try {
        const sanityPost = await client.fetch(postBySlugQuery, { slug });
        if (sanityPost) {
            post = sanityPost;
        }
    } catch (e) {}

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.coverImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post = blogPosts.find((p) => p.slug === slug) as any;
    try {
        const sanityPost = await client.fetch(postBySlugQuery, { slug });
        if (sanityPost) {
            post = sanityPost;
        }
    } catch (e) {
        console.warn("Sanity fetch failed or not configured yet. Falling back to static data.");
    }

    if (!post) {
        notFound();
    }

    return (
        <article className="bg-background min-h-screen pb-24 pt-24">
            <div className="container mx-auto px-4 max-w-4xl">
                
                {/* Breadcrumbs Navigation */}
                <nav className="flex items-center text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 flex-wrap">
                        <li>
                            <Link href="/" className="flex items-center hover:text-primary transition-colors">
                                <Home className="h-4 w-4 mr-1" />
                                <span className="sr-only">Home</span>
                            </Link>
                        </li>
                        <li>
                            <ChevronRight className="h-4 w-4 text-border" />
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-primary transition-colors font-medium">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <ChevronRight className="h-4 w-4 text-border" />
                        </li>
                        <li className="text-foreground font-semibold line-clamp-1" aria-current="page">
                            {post.title}
                        </li>
                    </ol>
                </nav>

                {/* Hero Section */}
                <header className="mb-12 text-center">
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {post.tags?.map((tag: string) => (
                            <span key={tag} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                        {post.title}
                    </h1>
                    
                    <div className="flex items-center justify-center text-sm text-muted-foreground space-x-6">
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </time>
                        </div>
                        <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            {post.author}
                        </div>
                    </div>
                </header>

                {/* Cover Image */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg border">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                </div>

                {/* Main Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-strong:font-bold prose-img:rounded-2xl">
                    {typeof post.content === 'string' ? (
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    ) : (
                        <PortableText value={post.content} />
                    )}
                </div>

                {/* Footer Section */}
                <footer className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Tag className="h-5 w-5 text-muted-foreground" />
                        <div className="flex gap-2">
                            {post.tags?.map((tag: string) => (
                                <span key={tag} className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <Button asChild variant="outline">
                        <Link href="/blog">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to all articles
                        </Link>
                    </Button>
                </footer>
            </div>
            
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "image": post.coverImage.startsWith("http")
                                ? post.coverImage
                                : `https://www.cattlefeednepal.com${post.coverImage}`,
                            "datePublished": post.date,
                            "dateModified": post.date,
                            "keywords": post.tags.join(", "),
                            "author": {
                                "@type": "Organization",
                                "name": post.author,
                                "url": "https://www.cattlefeednepal.com"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Nandani Agro Industries Pvt. Ltd.",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://www.cattlefeednepal.com/logo/logo.png"
                                }
                            },
                            "description": post.excerpt,
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://www.cattlefeednepal.com/blog/${post.slug}`
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://www.cattlefeednepal.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Blog",
                                    "item": "https://www.cattlefeednepal.com/blog"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": post.title,
                                    "item": `https://www.cattlefeednepal.com/blog/${post.slug}`
                                }
                            ]
                        }
                    ])
                }}
            />
        </article>
    );
}
