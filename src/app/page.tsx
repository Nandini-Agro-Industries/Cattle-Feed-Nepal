import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Award, Leaf, TrendingUp, Truck, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cattle Feed Manufacturers in Nepal | Nandani Agro Industries",
  description: "Nandani Agro Industries is Nepal's leading manufacturer of premium cattle feed, goat feed, and pig feed. Discover our high-protein Vanjula and Siddhartha brands designed for maximum livestock productivity.",
  keywords: [
    "Cattle Feed Nepal",
    "Nandani Agro Industries",
    "Vanjula Feed",
    "Siddhartha Feed",
    "Animal Nutrition Nepal",
    "Best Cattle Feed Rupandehi",
    "Dairy Cow Feed Nepal",
    "Livestock Feed Manufacturer Nepal"
  ],
  alternates: {
    canonical: '/',
  },
};

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
      <section className="py-12 md:py-24 bg-linear-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/80 to-secondary/80 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
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
                  Established with a vision to revolutionize livestock farming, Nandani Agro Industries Pvt. Ltd. is a leading manufacturer of premium cattle feed in Nepal.
                  Based in Rupandehi, our state-of-the-art facility utilizes advanced milling technology to produce highly nutritious feed for cattle, goats, and pigs, ensuring maximum yield and animal health.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our flagship brands, <strong>Vanjula</strong> and <strong>Siddhartha</strong>, are trusted by thousands of farmers across the nation. Adhering to strict quality standards and nutritional science, our products are formulated to deliver consistent, measurable results in dairy and meat production.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We believe that a thriving agricultural sector starts with healthy animals. That is why our formulations focus on holistic animal wellness, integrating balanced proteins, bypass fats, and essential trace minerals. From rural family farms to large commercial dairy operations, we provide tailored feeding solutions that improve milk fat content, enhance reproductive health, and boost overall herd immunity.
                </p>
                <Button asChild variant="outline" className="rounded-full px-8">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
              title="Our Premium Products"
              subtitle="Explore our range of scientifically formulated feeds for every stage of livestock growth."
            />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} {...product} delay={index * 0.1} className="h-full" />
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
          <SectionHeading title="Why Choose Nandani Agro?" subtitle="We are committed to your success." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="h-14 w-14 bg-linear-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/20">
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

      {/* Nutrition Science Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Comprehensive Livestock Nutrition in Nepal
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed text-left md:text-justify">
              <p>
                At Nandani Agro Industries, we understand that high-quality livestock feed is the cornerstone of successful farming in Nepal. Dairy farmers, poultry breeders, and livestock owners face unique challenges related to climate, breed genetics, and seasonal forage availability. To address these factors, our dedicated team of agricultural experts and animal nutritionists has developed a comprehensive range of feed solutions tailored specifically for the local environment.
              </p>
              <p>
                Our advanced formulation process integrates the latest in bypass protein technology, essential amino acid balancing, and mineral supplementation. This scientific approach ensures that your cattle, goats, and pigs receive the precise nutrients they need at every life stage—from early growth to peak lactation. By focusing on gut health and nutrient absorption, our feeds not only increase milk yield and weight gain but also strengthen the animal&apos;s natural immune system against common diseases.
              </p>
              <p>
                Furthermore, we source only the highest quality raw materials, including premium grains, oilcakes, and vitamin premixes. Every batch undergoes rigorous laboratory testing to guarantee safety, consistency, and nutritional integrity. Whether you are managing a small family farm or a large-scale commercial dairy operation, our Vanjula and Siddhartha brands provide the reliable, cost-effective nutrition required to maximize your profitability and ensure the long-well-being of your herd. By choosing Nandani Agro, you are investing in sustainable agricultural practices and the future of livestock farming in Nepal.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Knowledge Hub
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest from the Blog</h2>
              <p className="mt-4 text-lg text-muted-foreground">Expert insights and guides to help you maximize your farm&apos;s productivity.</p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/blog" className="flex items-center">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-background rounded-3xl overflow-hidden border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <div className="flex items-center gap-2 text-sm text-primary font-bold mb-3 uppercase tracking-wider">
                      <BookOpen className="h-4 w-4" />
                      Guide
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 mb-6 grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-bold text-primary">
                      Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Boost Your Farm&apos;s Productivity?</h2>
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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nandani Agro Industries Pvt. Ltd.",
              "url": "https://www.cattlefeednepal.com",
              "logo": "https://www.cattlefeednepal.com/logo/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+977-9801412266",
                "contactType": "customer service",
                "areaServed": "NP",
                "availableLanguage": ["English", "Nepali"]
              },
              "sameAs": [
                "https://www.facebook.com/vanjuladaana",
                "https://www.instagram.com/nandiniagroindustries/",
                "https://www.nandaniagro.com.np"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Nandani Agro Industries Pvt. Ltd.",
              "url": "https://www.cattlefeednepal.com",
              "logo": "https://www.cattlefeednepal.com/logo/logo.png",
              "image": "https://www.cattlefeednepal.com/logo/logo.png",
              "description": "Leading manufacturer of premium cattle feed, goat feed, and pig feed in Rupandehi, Nepal. Manufacturer of Vanjula and Siddhartha brands.",
              "telephone": "+977-9801412266",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Omsatiya-2",
                "addressLocality": "Rupandehi",
                "addressRegion": "Lumbini",
                "postalCode": "32900",
                "addressCountry": "NP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.5256,
                "longitude": 83.4975
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 27.5256,
                  "longitude": 83.4975
                },
                "geoRadius": "500000"
              },
              "sameAs": [
                "https://www.facebook.com/vanjuladaana",
                "https://www.instagram.com/nandiniagroindustries/",
                "https://www.nandaniagro.com.np" 
              ]
            }
          ])
        }}
      />
    </div>
  );
}
