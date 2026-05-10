import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
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
        title: `${product.name} | Nandani Agro Industries Pvt. Ltd.`,
        description: product.description,
        openGraph: {
            title: `${product.name} | Nandani Agro Industries Pvt. Ltd.`,
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
                {/* Back Button */}
                <Button asChild variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                    <Link href="/products">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Products
                    </Link>
                </Button>

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
                                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
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
                                <h3 className="font-semibold text-primary mb-2">Benefits</h3>
                                <p className="text-muted-foreground">{product.benefits}</p>
                            </div>
                        )}

                        {product.nutritionalInfo && (
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold mb-4">Nutritional Information</h3>
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
                                        <h3 className="font-semibold text-foreground mb-2">Feeding Rate</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{product.feedingRate}</p>
                                    </div>
                                )}
                                {product.ingredients && (
                                    <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
                                        <h3 className="font-semibold text-foreground mb-2">Ingredients</h3>
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
