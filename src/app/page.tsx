import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Award, Leaf, TrendingUp, Truck } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "vanjula-highpro",
    name: "Vanjula Pashu Aahar HighPro",
    brand: "Vanjula",
    image: "/images/vanjula-highpro.png",
    description: "Premium high-protein feed designed to maximize milk production in high-yielding dairy cattle. Enriched with essential vitamins and minerals.",
  },
  {
    id: "vanjula-bypass",
    name: "Vanjula Pashu Aahar Bypass",
    brand: "Vanjula",
    image: "/images/vanjula-bypass.png",
    description: "Formulated with bypass protein technology to ensure better nutrient absorption and improved health for your livestock.",
  },
  {
    id: "vanjula-pashu-aahar",
    name: "Vanjula Pashu Aahar",
    brand: "Vanjula",
    image: "/images/vanjula-pashu-aahar.png",
    description: "Balanced daily nutrition for cattle, ensuring steady growth, maintenance, and consistent milk quality.",
  },
  {
    id: "siddhartha-cattle",
    name: "Siddhartha Cattle Feed",
    brand: "Siddhartha",
    image: "/images/siddhartha-cattle-feed.png",
    description: "Economical and nutritious choice for general cattle maintenance and health.",
  },
  {
    id: "siddhartha-goat",
    name: "Siddhartha Goat Feed",
    brand: "Siddhartha",
    image: "/images/siddhartha-goat-feed.png",
    description: "Specialized formula for goats (Bakhra Ko Dana) to support rapid growth, immunity, and overall well-being.",
  },
  {
    id: "bangur-ko-dana",
    name: "Bangur Ko Dana",
    brand: "Nandani Agro",
    image: "/images/bangur-ko-dana.png",
    description: "High-energy feed for pigs ensuring fast weight gain and healthy development.",
  },
];

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We use only the finest natural ingredients to ensure the safety and health of your animals.",
  },
  {
    icon: TrendingUp,
    title: "Boost Production",
    description: "Scientifically formulated to increase milk yield and accelerate growth rates.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "Manufactured under strict quality controls to meet national standards.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Consistent availability and distribution network across the region.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* About Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <div className="text-center p-8 text-white">
                    <h3 className="text-4xl font-bold mb-2">Nandani Agro</h3>
                    <p className="text-xl opacity-90">Excellence in Animal Nutrition</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                  Empowering Farmers with <span className="text-primary">Quality Feed</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nandani Agro Industries Pvt. Ltd. is a leading manufacturer of animal feed in Nepal.
                  Based in Rupandehi, we are dedicated to empowering farmers by providing high-quality,
                  nutritious feed for cattle, goats, and pigs.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our brands, <strong>Vanjula</strong> and <strong>Siddhartha</strong>, are trusted by thousands of farmers
                  for their consistency and results. We combine traditional knowledge with modern nutritional science
                  to create feeds that deliver real value.
                </p>
                <Button asChild variant="outline" className="rounded-full px-8">
                  <Link href="/contact">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading
              title="Our Premium Products"
              subtitle="Explore our range of scientifically formulated feeds for every stage of livestock growth."
            />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.1}>
                <ProductCard {...product} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full px-8 text-lg h-12">
              <Link href="/products">View All Products</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <FadeIn>
            <SectionHeading title="Why Choose Nandani Agro?" subtitle="We are committed to your success." />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="h-14 w-14 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/20">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Boost Your Farm's Productivity?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
              Contact us today for bulk orders, dealership inquiries, or nutritional advice.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 text-lg h-14 font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nandani Agro Industries Pvt. Ltd.",
            "url": "https://www.nandaniagro.com.np",
            "logo": "https://www.nandaniagro.com.np/logo/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+977-9801412266",
              "contactType": "customer service",
              "areaServed": "NP",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Omsatiya-2",
              "addressLocality": "Rupandehi",
              "addressCountry": "NP"
            },
            "sameAs": [
              "https://www.facebook.com/vanjuladaana",
              "https://www.instagram.com/nandiniagroindustries/"
            ]
          })
        }}
      />
    </div>
  );
}
