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
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our flagship brands, <strong>Vanjula</strong> and <strong>Siddhartha</strong>, are trusted by thousands of farmers across the nation. Adhering to strict quality standards and nutritional science, our products are formulated to deliver consistent, measurable results in dairy and meat production.
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
          __html: JSON.stringify({
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
            "sameAs": [
              "https://www.facebook.com/vanjuladaana",
              "https://www.instagram.com/nandiniagroindustries/",
              "https://www.nandaniagro.com.np" 
            ]
          })
        }}
      />
    </div>
  );
}
