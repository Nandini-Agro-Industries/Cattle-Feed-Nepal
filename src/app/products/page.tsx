import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";

import { products } from "@/data/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Products | Nandani Agro Industries Pvt. Ltd.",
    description: "Browse our complete range of high-quality animal feeds for cattle, goats, and pigs (Vanjula, Siddhartha brands).",
};

export default function ProductsPage() {
    return (
        <div className="bg-background min-h-screen pb-20">
            <div className="bg-muted/30 py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Our Products</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Browse our complete range of high-quality animal feeds.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
