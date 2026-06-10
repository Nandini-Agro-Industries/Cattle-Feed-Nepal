import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

import { products } from "@/data/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pashu Aahar Products Nepal | Vanjula & Siddhartha Feed Range",
    description: "Buy premium cattle feed (गाईको दाना), goat feed (बाख्राको दाना), and pig feed in Nepal. Vanjula HighPro, Bypass, Siddhartha brands by Nandani Agro Industries.",
    keywords: [
        "pashu aahar Nepal",
        "gai ko dana",
        "गाईको दाना",
        "बाख्राको दाना",
        "bakhra ko dana Nepal",
        "bangur ko dana Nepal",
        "Vanjula pashu aahar price",
        "Siddhartha cattle feed Nepal",
        "cattle feed buy Nepal",
    ],
    alternates: {
        canonical: '/products',
    },
    openGraph: {
        title: "Pashu Aahar Products Nepal | Vanjula & Siddhartha Feed Range",
        description: "Buy premium cattle feed, goat feed, and pig feed in Nepal. Vanjula HighPro, Bypass, Siddhartha brands by Nandani Agro Industries.",
        images: ['/images/og/og-products.png'],
    },
};

export default function ProductsPage() {
    return (
        <div className="bg-background min-h-screen pb-20">
            <div className="bg-primary/5 border-b border-border/50 py-14">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                        Nandani Agro Industries
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Pashu Aahar Products Nepal
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Premium cattle feed, buffalo feed, goat feed, and pig feed — scientifically formulated by Nandani Agro Industries, Rupandehi, Nepal. Vanjula and Siddhartha brands trusted by farmers nationwide.
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                        गाई · भैंसी · बाख्रा · बंगुरका लागि उत्कृष्ट पशु आहार
                    </p>
                </div>
            </div>

            {/* SEO intro paragraph */}
            <div className="container mx-auto px-4 py-12">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <p className="text-muted-foreground leading-relaxed text-base">
                            Nandani Agro Industries manufactures Nepal&apos;s most complete range of livestock concentrate feeds — from high-protein dairy formulas to specialized buffalo, goat, and pig feeds. Our <strong className="text-foreground">Vanjula</strong> brand targets peak milk production with bypass protein technology (proven +28% milk yield in Nepal field trials), while the <strong className="text-foreground">Siddhartha</strong> range offers cost-effective nutrition for maintenance feeding and smaller operations. Every product is DFTQC-compliant, lab-tested, and formulated by qualified animal nutritionists.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} {...product} delay={index * 0.05} />
                    ))}
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "Nandani Agro Industries Animal Feed Products",
                            "description": "Complete range of cattle, buffalo, goat, and pig feed products manufactured by Nandani Agro Industries Pvt. Ltd. in Rupandehi, Nepal.",
                            "url": "https://www.cattlefeednepal.com/products",
                            "itemListElement": products.map((product, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "url": `https://www.cattlefeednepal.com/products/${product.id}`,
                                "name": product.name,
                            })),
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
                                    "name": "Products",
                                    "item": "https://www.cattlefeednepal.com/products"
                                }
                            ]
                        }
                    ])
                }}
            />
        </div>
    );
}
