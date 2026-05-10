import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { Award, Factory, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nandani Agro Industries Pvt. Ltd.",
  description: "Learn about Nandani Agro Industries, a leading manufacturer of premium cattle feed in Nepal. Discover our history, certifications, and commitment to quality.",
  openGraph: {
    title: "About Us | Nandani Agro Industries Pvt. Ltd.",
    description: "Learn about Nandani Agro Industries, a leading manufacturer of premium cattle feed in Nepal.",
  }
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pb-20 pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nandani Agro Industries Pvt. Ltd. was established with a singular vision: to revolutionize livestock farming in Nepal by providing world-class, scientifically formulated animal nutrition. Based in the agricultural heartland of Rupandehi, we have grown to become the trusted partner of thousands of farmers across the nation.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Stats/Facts Section */}
      <section className="bg-primary/5 py-16 mb-16 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-background p-6 rounded-2xl shadow-sm border text-center h-full flex flex-col items-center justify-center">
                <Factory className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Modern Facility</h3>
                <p className="text-sm text-muted-foreground">State-of-the-art milling plant in Omsatiya, Rupandehi with high daily production capacity.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-background p-6 rounded-2xl shadow-sm border text-center h-full flex flex-col items-center justify-center">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Certified Quality</h3>
                <p className="text-sm text-muted-foreground">Compliant with Department of Food Technology and Quality Control (DFTQC) standards.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-background p-6 rounded-2xl shadow-sm border text-center h-full flex flex-col items-center justify-center">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Trusted Brands</h3>
                <p className="text-sm text-muted-foreground">Manufacturers of the highly acclaimed Vanjula and Siddhartha feed series.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-background p-6 rounded-2xl shadow-sm border text-center h-full flex flex-col items-center justify-center">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Formulations developed by experienced agricultural scientists and veterinary nutritionists.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Commitment to Excellence</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Nandani Agro Industries, we understand that the health and productivity of livestock directly impact the livelihood of farmers. That is why every batch of feed we produce undergoes rigorous quality testing.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sourcing the Best Ingredients</h4>
                    <p className="text-sm text-muted-foreground">We procure premium grains, high-protein oil cakes, and essential mineral mixtures from trusted suppliers, ensuring consistent quality from the source.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Scientific Formulation</h4>
                    <p className="text-sm text-muted-foreground">Our feeds are formulated based on the precise nutritional requirements of cattle at different life stages, ensuring optimal crude protein, fat, and fiber ratios.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Department of Livestock Services (DoL) Aligned</h4>
                    <p className="text-sm text-muted-foreground">We actively align our production practices with the best practices recommended by the national Department of Livestock Services.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn className="order-1 md:order-2">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-muted/50 border flex items-center justify-center p-8">
               <Image 
                  src="/logo/logo.png" 
                  alt="Nandani Agro Industries Facility" 
                  fill
                  className="object-contain p-12 opacity-80"
               />
               <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent mix-blend-multiply" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
