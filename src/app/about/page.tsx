import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { Award, Factory, Users, ShieldCheck, Star, Quote, FlaskConical, Truck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nandani Agro Industries | Cattle Feed Nepal",
  description: "Learn about Nandani Agro Industries, Nepal's leading manufacturer of premium cattle feed. We produce Vanjula and Siddhartha brands for dairy and livestock farmers.",
  openGraph: {
    title: "About Nandani Agro Industries | Cattle Feed Nepal",
    description: "Learn about Nandani Agro Industries, Nepal's leading manufacturer of premium cattle feed.",
    images: ['/images/og/og-about.png'],
  },
  alternates: { canonical: '/about' },
};

const stats = [
  { value: "10+", label: "Years in Operation", icon: Factory },
  { value: "2", label: "Trusted Brand Families", icon: Award },
  { value: "6", label: "Specialized Feed Products", icon: FlaskConical },
  { value: "Nepal-Wide", label: "Dealer Network", icon: Truck },
];

const testimonials = [
  {
    quote: "Since switching to Vanjula HighPro, my dairy cows increased their daily milk yield by almost 15%. The fat content has also significantly improved.",
    author: "Ram Sharan Thapa",
    location: "Chitwan, Bagmati Province",
    rating: 5,
  },
  {
    quote: "The bypass protein really works. We've seen fewer cases of acidosis and better overall body scores in our cattle after just two months.",
    author: "Hari Khadka",
    location: "Rupandehi, Lumbini Province",
    rating: 5,
  },
  {
    quote: "My goats have reached market weight much faster since I started using Siddhartha Goat Feed. The meat quality is excellent.",
    author: "Bikash Gurung",
    location: "Pokhara, Gandaki Province",
    rating: 5,
  },
];

const complianceBadges = [
  {
    icon: ShieldCheck,
    title: "DFTQC Compliant",
    description: "Registered and compliant with Nepal's Department of Food Technology and Quality Control — the national authority for feed product standards.",
  },
  {
    icon: CheckCircle2,
    title: "DoLS Aligned",
    description: "Production practices aligned with guidelines set by Nepal's Department of Livestock Services (DoLS) for animal feed manufacturers.",
  },
  {
    icon: FlaskConical,
    title: "Lab-Tested Batches",
    description: "Every production batch undergoes laboratory analysis for crude protein, fat, fiber, and moisture to guarantee label accuracy.",
  },
  {
    icon: Users,
    title: "Formulated by Experts",
    description: "Feeds developed with the input of qualified veterinary nutritionists and agricultural scientists with experience in Nepal's livestock sector.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pb-20 pt-24">

      {/* Hero */}
      <section className="container mx-auto px-4 mb-16">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="text-primary">Nandani Agro Industries</span>: Nepal&apos;s Trusted Cattle Feed Manufacturer
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nandani Agro Industries Pvt. Ltd. was established with a singular vision: to revolutionize livestock farming in Nepal by providing scientifically formulated animal nutrition. Based in the agricultural heartland of Rupandehi, we manufacture the Vanjula and Siddhartha feed brands — trusted by farmers across Nepal&apos;s hills, Terai, and mountain regions.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Quantified Stats */}
      <section className="bg-primary/5 py-16 mb-16 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="bg-background p-6 rounded-2xl shadow-sm border text-center h-full flex flex-col items-center justify-center">
                  <stat.icon className="h-9 w-9 text-primary mb-3" />
                  <p className="text-3xl font-extrabold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Third-Party Validation */}
      <section className="container mx-auto px-4 mb-20">
        <SectionHeading
          title="Quality, Compliance & Transparency"
          subtitle="We back every claim with regulatory compliance, lab testing, and published feeding science."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {complianceBadges.map((badge, i) => (
            <FadeIn key={badge.title} delay={i * 0.1}>
              <div className="flex gap-5 items-start bg-muted/30 border border-border/50 rounded-2xl p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <badge.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{badge.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Research basis note */}
        <FadeIn delay={0.3}>
          <div className="mt-8 border border-primary/20 bg-primary/5 rounded-2xl p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Scientific basis for our formulations:</span> Our feed specifications reference nutritional standards from Nepal&apos;s National Cattle Research Program (NARC, Rampur), the Nepalese Journal of Agricultural Sciences, and the Merck Veterinary Manual. Bypass protein technology used in Vanjula Bypass is validated by a Nepalese field trial showing a <strong className="text-foreground">28% increase in daily milk yield</strong> (Osti et al., Nepalese Journal of Agricultural Sciences, 2013).
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Farmer Testimonials */}
      <section className="bg-muted/30 border-y border-border/50 py-16 mb-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Farmers Speak"
            subtitle="Real results from real farmers across Nepal's livestock regions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.1}>
                <div className="bg-background rounded-2xl border border-border/50 p-6 shadow-sm h-full flex flex-col">
                  <Quote className="h-8 w-8 text-primary/30 mb-4 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed text-sm grow mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Excellence */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Quality Process</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Nandani Agro Industries, we understand that the health and productivity of livestock directly impacts the livelihood of farmers. Every batch of feed we produce follows a documented three-stage quality process.
              </p>
              <div className="space-y-5">
                {[
                  {
                    n: "1",
                    title: "Sourcing Verified Ingredients",
                    body: "We procure premium grains, high-protein oil cakes (soya doc, mustard doc), and mineral premixes from verified suppliers — with consistent crude protein specs confirmed before intake.",
                  },
                  {
                    n: "2",
                    title: "Scientific Formulation & Milling",
                    body: "Feeds are formulated to hit precise NRC-referenced protein, fat, and fiber targets for each livestock species and life stage — then milled at our Omsatiya-2 facility to optimal particle size.",
                  },
                  {
                    n: "3",
                    title: "DFTQC-Aligned Compliance Checks",
                    body: "Finished batches are checked for moisture, protein, and physical quality. Products are registered and labelled in compliance with DFTQC regulations for animal feed in Nepal.",
                  },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4 items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">{step.n}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="order-1 md:order-2">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-muted/50 border">
            <Image
                src="/images/nandani-agro-manufacturing.png"
                alt="Nandani Agro Industries modern animal feed manufacturing plant at Omsatiya-2, Rupandehi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent mix-blend-multiply" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* JSON-LD: Organization with foundingDate, areaServed, knowsAbout */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://www.cattlefeednepal.com/about#webpage",
            "url": "https://www.cattlefeednepal.com/about",
            "name": "About Nandani Agro Industries — Nepal Cattle Feed Manufacturer",
            "description": "DFTQC-compliant manufacturer of Vanjula and Siddhartha cattle, goat, and pig feed. Based in Omsatiya-2, Rupandehi, Nepal.",
            "inLanguage": "en-US",
            "dateModified": "2025-05-13",
            "mainEntity": {
              "@type": "Organization",
              "name": "Nandani Agro Industries Pvt. Ltd.",
              "url": "https://www.cattlefeednepal.com",
              "foundingDate": "2015",
              "knowsAbout": [
                "Cattle Feed Formulation",
                "Bypass Protein Technology",
                "Dairy Cow Nutrition",
                "Nepal Livestock Farming",
                "Animal Feed Manufacturing"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Nepal"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Omsatiya-2",
                "addressLocality": "Rupandehi",
                "addressRegion": "Lumbini",
                "postalCode": "32900",
                "addressCountry": "NP"
              }
            }
          })
        }}
      />
    </div>
  );
}
