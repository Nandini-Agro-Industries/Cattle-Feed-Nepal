import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
const ProductCard = dynamic(() => import("@/components/ProductCard"));
const SectionHeading = dynamic(() => import("@/components/SectionHeading"));
const FadeIn = dynamic(() => import("@/components/FadeIn"));
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button));
import { Award, Leaf, TrendingUp, Truck, BookOpen, ArrowRight, Calendar, HelpCircle, Factory } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cattle Feed Manufacturers in Nepal | Nandani Agro Industries",
  description: "Nandani Agro Industries is Nepal's leading cattle, goat & pig feed manufacturer. Discover our premium Vanjula & Siddhartha brands for maximum livestock yield.",
  keywords: [
    "Cattle Feed Nepal",
    "Nandani Agro Industries",
    "Nandini Agro Industries",
    "Vanjula Feed",
    "Siddhartha Feed",
    "Animal Nutrition Nepal",
    "Best Cattle Feed Rupandehi",
    "Dairy Cow Feed Nepal",
    "Livestock Feed Manufacturer Nepal",
    "पशु आहार नेपाल",
    "गाईको दाना",
    "pashu aahar Nepal",
    "gai ko dana",
    "dudh barne dana Nepal",
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

const faqs = [
  {
    question: "What is the best cattle feed in Nepal?",
    answer: "Nandani Agro Industries produces some of the most trusted and scientifically formulated cattle feed in Nepal. Our Vanjula and Siddhartha brands are specifically designed to meet the nutritional requirements of local dairy cattle, boosting milk yield and overall herd health."
  },
  {
    question: "Where is Nandani Agro Industries located?",
    answer: "Nandani Agro Industries Pvt. Ltd. is proudly located in Omsatiya-2, Rupandehi, in the Lumbini province of Nepal. We have a robust distribution network that supplies our premium animal nutrition products, including goat feed and pig feed, to farmers all across the nation."
  },
  {
    question: "Why should I choose Vanjula Pashu Aahar for my dairy cows?",
    answer: "Vanjula Pashu Aahar, especially our HighPro and Bypass variants, utilizes advanced bypass protein technology. This ensures better nutrient absorption in the lower gut, leading to higher milk production, increased fat content, and improved reproductive health for your dairy cows in Nepal."
  },
  {
    question: "Do you manufacture feed for animals other than cattle?",
    answer: "Yes! Alongside being a leading cattle feed manufacturer, Nandani Agro Industries also produces high-quality Siddhartha Goat Feed (Bakhra Ko Dana) and Bangur Ko Dana for pigs. These feeds are formulated for rapid growth, strong immunity, and overall well-being."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

        <section className="py-16 md:py-32 bg-linear-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 border border-primary/20">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  About Us
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight tracking-tight">
                  Empowering Farmers with <br className="hidden md:block"/><span className="text-primary bg-clip-text text-transparent bg-linear-to-r from-primary to-green-500">Quality Feed</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed font-light">
                  Established with a vision to revolutionize livestock farming, Nandani Agro Industries Pvt. Ltd. is a leading manufacturer of premium cattle feed in Nepal.
                  Based in Rupandehi, our state-of-the-art facility utilizes advanced milling technology to produce highly nutritious feed.
                </p>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                  Our flagship brands, <strong className="text-foreground">Vanjula</strong> and <strong className="text-foreground">Siddhartha</strong>, are trusted by thousands of farmers across the nation. Adhering to strict quality standards, our products are formulated to deliver consistent, measurable results in dairy and meat production.
                </p>
                <Button asChild size="lg" className="rounded-full px-8 h-12 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                  <Link href="/about">Discover Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </FadeIn>
            </div>

            {/* Right Column: Bento Grid Stats & Highlights */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-0">
              <FadeIn delay={0.2} className="col-span-2 sm:col-span-1 bg-background rounded-3xl p-6 shadow-sm border border-border/50 hover:border-primary/30 transition-colors group">
                <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-extrabold text-foreground mb-1">10+</h3>
                <p className="text-sm text-muted-foreground font-medium">Years in Operation</p>
              </FadeIn>
              
              <FadeIn delay={0.3} className="col-span-2 sm:col-span-1 bg-primary text-primary-foreground rounded-3xl p-6 shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform">
                <div className="h-12 w-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                   <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold mb-1">100%</h3>
                <p className="text-sm text-primary-foreground/90 font-medium">DFTQC Compliant</p>
              </FadeIn>

              <FadeIn delay={0.4} className="col-span-2 bg-gradient-to-br from-muted/50 to-background rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity">
                   <TrendingUp className="h-40 w-40 -mr-10 -mb-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">Holistic Wellness</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  Our formulations focus on holistic animal wellness, integrating balanced proteins, bypass fats, and essential trace minerals. We provide tailored feeding solutions that improve milk fat content, enhance reproductive health, and boost overall herd immunity.
                </p>
              </FadeIn>
            </div>

          </div>
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
                Best Cattle Feed in Nepal | Nandani Agro Industries
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
                <Calendar className="h-3.5 w-3.5" />
                Content reviewed &amp; updated — 2025
              </div>
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

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Learn more about Nandani Agro Industries and our premium animal nutrition products."
          />
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 h-full hover:shadow-md transition-shadow">
                  <div className="flex gap-4 items-start">
                    <div className="shrink-0 mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground leading-snug">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
                   <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm text-primary font-bold uppercase tracking-wider">
                        <BookOpen className="h-4 w-4" />
                        Guide
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                        </time>
                      </div>
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
              "foundingDate": "2015",
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
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.cattlefeednepal.com/#webpage",
              "url": "https://www.cattlefeednepal.com/",
              "name": "Cattle Feed Manufacturers in Nepal | Nandani Agro Industries",
              "description": "Nepal's leading manufacturer of premium cattle feed, goat feed, and pig feed. Vanjula and Siddhartha brands trusted by thousands of farmers.",
              "datePublished": "2025-01-01",
              "dateModified": "2026-06-05",
              "inLanguage": "en-US",
              "isPartOf": {
                "@type": "WebSite",
                "@id": "https://www.cattlefeednepal.com/#website",
                "url": "https://www.cattlefeednepal.com/",
                "name": "Nandani Agro Industries Pvt. Ltd."
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ])
        }}
      />
    </div>
  );
}
