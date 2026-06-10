import Link from "next/link";
import { Metadata } from "next";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, BookOpen, Calculator, FileText, Home, Layers, Package, Phone, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Sitemap",
    description: "Complete overview of pages on the Nandani Agro Industries website.",
    alternates: {
        canonical: '/website-map',
    },
};

export default function SitemapPage() {
    const mainLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "About Us", href: "/#about", icon: Users },
        { name: "Our Products", href: "/products", icon: Package },
        { name: "Feed Calculator", href: "/tools/feed-calculator", icon: Calculator },
        { name: "Profit Calculator", href: "/tools/profit-calculator", icon: Calculator },
        { name: "Contact Us", href: "/contact", icon: Phone },
        { name: "Become a Dealer", href: "/become-dealer", icon: Layers },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "/privacy-policy", icon: Shield },
        { name: "Terms of Service", href: "/terms-of-service", icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-background pb-20 pt-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <FadeIn>
                    <SectionHeading
                        title="Sitemap"
                        subtitle="Easily navigate through all sections of our website."
                        align="left"
                    />
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <FadeIn delay={0.1}>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-foreground border-b pb-2">Main Pages</h2>
                            <ul className="space-y-3">
                                {mainLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                        >
                                            <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <link.icon className="h-5 w-5" />
                                            </div>
                                            <span className="text-lg font-medium text-foreground">{link.name}</span>
                                            <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    <div className="space-y-12">
                        <FadeIn delay={0.2}>
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-b pb-2">Our Products</h2>
                                <ul className="space-y-3">
                                    {products.map((product) => (
                                        <li key={product.id}>
                                            <Link
                                                href={`/products/${product.id}`}
                                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                            >
                                                <div className="bg-secondary/20 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <Package className="h-5 w-5" />
                                                </div>
                                                <span className="text-lg font-medium text-foreground">{product.name}</span>
                                                <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-b pb-2">Blog Articles</h2>
                                <ul className="space-y-3">
                                    {blogPosts.map((post) => (
                                        <li key={post.slug}>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                            >
                                                <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <BookOpen className="h-5 w-5" />
                                                </div>
                                                <span className="text-lg font-medium text-foreground line-clamp-1">{post.title}</span>
                                                <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground border-b pb-2">Legal & Support</h2>
                                <ul className="space-y-3">
                                    {legalLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                            >
                                                <div className="bg-slate-100 p-2 rounded-full text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                                                    <link.icon className="h-5 w-5" />
                                                </div>
                                                <span className="text-lg font-medium text-foreground">{link.name}</span>
                                                <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
}
