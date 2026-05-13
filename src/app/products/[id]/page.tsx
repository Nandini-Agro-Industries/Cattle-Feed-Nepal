import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";

// This function generates the static paths for all products at build time
export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: product.name,
        description: product.description,
        alternates: {
            canonical: `/products/${product.id}`,
        },
        openGraph: {
            title: product.name,
            description: product.description,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 800,
                    alt: product.name,
                },
            ],
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen pb-20 pt-24">
            <div className="container mx-auto px-4">
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
                            <Link href="/products" className="hover:text-primary transition-colors font-medium">
                                Products
                            </Link>
                        </li>
                        <li>
                            <ChevronRight className="h-4 w-4 text-border" />
                        </li>
                        <li className="text-foreground font-semibold line-clamp-1" aria-current="page">
                            {product.name}
                        </li>
                    </ol>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Product Image */}
                    <div className="relative bg-white rounded-2xl p-8 border shadow-sm aspect-square flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                                {product.brand}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                {product.name}
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="h-px bg-border my-2" />

                        {product.features && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                                <ul className="grid grid-cols-1 gap-3">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {product.benefits && (
                            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                                <h2 className="font-semibold text-primary mb-2">Benefits</h2>
                                <p className="text-muted-foreground">{product.benefits}</p>
                            </div>
                        )}

                        {product.nutritionalInfo && (
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold mb-4">Nutritional Information</h2>
                                <div className="overflow-hidden rounded-xl border border-border">
                                    <table className="w-full text-left text-sm">
                                        <tbody className="divide-y divide-border">
                                            <tr className="bg-muted/50">
                                                <th className="px-4 py-3 font-medium text-foreground w-1/2">Crude Protein</th>
                                                <td className="px-4 py-3 text-muted-foreground">{product.nutritionalInfo.crudeProtein}</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 py-3 font-medium text-foreground w-1/2">Crude Fat</th>
                                                <td className="px-4 py-3 text-muted-foreground">{product.nutritionalInfo.crudeFat}</td>
                                            </tr>
                                            <tr className="bg-muted/50">
                                                <th className="px-4 py-3 font-medium text-foreground w-1/2">Crude Fiber</th>
                                                <td className="px-4 py-3 text-muted-foreground">{product.nutritionalInfo.crudeFiber}</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 py-3 font-medium text-foreground w-1/2">Moisture</th>
                                                <td className="px-4 py-3 text-muted-foreground">{product.nutritionalInfo.moisture}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {(product.feedingRate || product.ingredients) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                {product.feedingRate && (
                                    <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
                                        <h2 className="font-semibold text-foreground mb-2">Feeding Rate</h2>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{product.feedingRate}</p>
                                    </div>
                                )}
                                {product.ingredients && (
                                    <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
                                        <h2 className="font-semibold text-foreground mb-2">Ingredients</h2>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{product.ingredients}</p>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button asChild size="lg" className="flex-1">
                                <Link href="/contact">Order Now</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="flex-1">
                                {/* Placeholder for a brochure or specification sheet download if available later */}
                                <Link href="/contact">Request Details</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Additional Information Sections */}
                <div className="mt-16 space-y-16">
                    {/* Usage Guide */}
                    {product.usageGuide && (
                        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
                            <h2 className="text-2xl font-bold mb-6 text-foreground">Usage Guide</h2>
                            <ul className="space-y-4">
                                {product.usageGuide.map((step: string, index: number) => (
                                    <li key={index} className="flex gap-4 items-start">
                                        <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <p className="text-muted-foreground mt-1 leading-relaxed">{step}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Testimonials */}
                    {product.testimonials && (
                        <div>
                            <h2 className="text-2xl font-bold mb-8 text-foreground text-center">What Farmers Say</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {product.testimonials.map((testimonial: any, index: number) => (
                                    <div key={index} className="bg-background border rounded-2xl p-8 shadow-sm relative">
                                        <div className="absolute top-6 right-6 text-primary/20 text-6xl font-serif">"</div>
                                        <p className="text-muted-foreground italic mb-6 relative z-10 leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>
                                        <div>
                                            <p className="font-bold text-foreground">{testimonial.author}</p>
                                            <p className="text-sm text-primary font-medium">{testimonial.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQs */}
                    {product.faqs && (
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold mb-8 text-foreground text-center">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {product.faqs.map((faq: any, index: number) => (
                                    <div key={index} className="border-b pb-6">
                                        <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Related Products Section */}
                <div className="mt-24 border-t pt-16">
                    <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products
                            .filter(p => p.id !== product.id)
                            .sort((a, b) => (a.brand === product.brand ? -1 : 1))
                            .slice(0, 3)
                            .map((p, index) => (
                                <ProductCard key={p.id} {...p} delay={index * 0.1} />
                            ))}
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": product.name,
                            "image": `https://www.cattlefeednepal.com${product.image}`,
                            "description": product.description,
                            "brand": {
                                "@type": "Brand",
                                "name": product.brand
                            },
                            "manufacturer": {
                                "@type": "Organization",
                                "name": "Nandani Agro Industries Pvt. Ltd."
                            },
                            "offers": {
                                "@type": "Offer",
                                "url": `https://www.cattlefeednepal.com/products/${product.id}`,
                                "priceCurrency": "NPR",
                                "price": "0",
                                "availability": "https://schema.org/InStock",
                                "seller": {
                                    "@type": "Organization",
                                    "name": "Nandani Agro Industries Pvt. Ltd."
                                }
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
                                    "name": "Products",
                                    "item": "https://www.cattlefeednepal.com/products"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": product.name,
                                    "item": `https://www.cattlefeednepal.com/products/${product.id}`
                                }
                            ]
                        }
                    ])
                }}
            />
        </div >
    );
}
