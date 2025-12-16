import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
}

export default function ProductCard({ id, name, image, description, brand }: ProductCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group border-border/50">
            <div className="relative h-64 w-full bg-secondary/20 p-6 flex items-center justify-center overflow-hidden">
                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
            <CardHeader>
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{brand}</div>
                <CardTitle className="text-xl line-clamp-2">{name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
            </CardContent>
            <CardFooter>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Link href={`/products/${id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
