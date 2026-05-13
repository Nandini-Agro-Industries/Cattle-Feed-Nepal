import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
    title: "Blog & Farming Insights",
    description: "Read the latest news, farming tips, and nutritional insights from Nandani Agro Industries, Nepal's premier cattle feed manufacturer.",
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogPage() {
    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Header */}
            <div className="bg-muted/30 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <FadeIn direction="up">
                        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
                            Knowledge Base
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Farming Insights & News</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Expert advice, industry news, and nutritional guides to help you maximize your farm's productivity and health.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <FadeIn key={post.id} delay={index * 0.1}>
                            <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
                                {/* Image Container */}
                                <Link href={`/blog/${post.slug}`} className="relative h-60 w-full bg-secondary/20 block overflow-hidden">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {post.tags[0]}
                                    </div>
                                </Link>

                                {/* Content Container */}
                                <div className="p-6 flex flex-col grow">
                                    <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                                        <div className="flex items-center">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <div className="flex items-center">
                                            <User className="h-3 w-3 mr-1" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors">
                                        <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 grow">
                                        {post.excerpt}
                                    </p>

                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto">
                                        Read Article
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
