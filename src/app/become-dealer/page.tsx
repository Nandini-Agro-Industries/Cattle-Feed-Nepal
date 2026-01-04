import DealerForm from "@/components/DealerForm";
import SectionHeading from "@/components/SectionHeading";
import { Metadata } from "next";
import { CheckCircle2, TrendingUp, Users, ShieldCheck, FileText, UserCheck, Store } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Become a Dealer | Nandani Agro Industries",
    description: "Join our network of successful distributors. Apply to become an authorized dealer for Nandani Agro Industries, Nepal's leading animal feed manufacturer.",
    openGraph: {
        title: "Become a Dealer | Nandani Agro Industries",
        description: "Partner with us to distribute high-quality cattle, goat, and pig feed.",
        url: "https://nandaniagro.com.np/become-dealer",
        type: "website",
    },
};

const benefits = [
    {
        title: "Premium Quality Products",
        description: "Sell scientifically formulated feed trusted by thousands of farmers across Nepal.",
        icon: ShieldCheck,
    },
    {
        title: "Competitive Margins",
        description: "Enjoy attractive profit margins and performance-based growth incentives.",
        icon: TrendingUp,
    },
    {
        title: "Marketing Support",
        description: "Get access to branding materials, banners, and digital promotion to boost sales.",
        icon: Users,
    },
    {
        title: "Growth Partnership",
        description: "We work closely with you to expand your business and territory reach.",
        icon: CheckCircle2,
    },
];

const processSteps = [
    {
        title: "Apply Online",
        description: "Fill out the simple application form below with your business details.",
        icon: FileText,
    },
    {
        title: "Verification",
        description: "Our team reviews your application and contacts you for a brief discussion.",
        icon: UserCheck,
    },
    {
        title: "Start Selling",
        description: "Upon approval, receive your first stock and start growing your business.",
        icon: Store,
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nandaniagro.com.np"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Become a Dealer",
            "item": "https://nandaniagro.com.np/become-dealer"
        }
    ]
};

export default function BecomeDealerPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Script
                id="dealer-breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Brand Aligned Hero Section - Light & Clean */}
            <section className="relative overflow-hidden min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-white pt-32 pb-20">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn direction="up">
                        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
                            Business Opportunity
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
                            Partner With <span className="text-primary">Nandini Agro</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                            Join our growing network of distributors and help us bring high-quality animal nutrition to every farm in Nepal.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Why Join Us?"
                        subtitle="We provide everything you need to succeed as a distributor."
                        align="center"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        {benefits.map((benefit, index) => (
                            <FadeIn key={benefit.title} delay={index * 0.1} className="group relative bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                                <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center mb-6 text-primary shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{benefit.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section - Clean & Stepped */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <SectionHeading
                        title="How It Works"
                        subtitle="Becoming a dealer is a simple 3-step process."
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-5xl mx-auto">
                        {processSteps.map((step, index) => (
                            <FadeIn key={step.title} delay={0.2 + (index * 0.2)} className="relative flex flex-col items-center text-center">
                                {/* Connector Line for Desktop */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-slate-200 -z-10">
                                        <div className="absolute inset-0 bg-primary/30 origin-left scale-x-0 animate-scroll-width" />
                                    </div>
                                )}

                                <div className="w-20 h-20 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center text-primary text-2xl font-bold mb-6 shadow-md relative z-10 group hover:border-primary transition-colors">
                                    <step.icon className="h-9 w-9 group-hover:scale-110 transition-transform" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-md">
                                        {index + 1}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                                <p className="text-muted-foreground max-w-xs">{step.description}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section - Clean Layout */}
            <section className="container mx-auto px-4 py-24 relative">
                <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 bg-white border border-slate-100 flex flex-col md:flex-row">
                    <div className="md:w-2/5 bg-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-20 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 p-20 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-6">Ready to Grow?</h3>
                            <p className="text-primary-foreground/90 mb-8 leading-relaxed text-lg">
                                Fill out the form and our sales manager will reach out within 24 hours.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/10">
                                        <Store className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-primary-foreground/70 uppercase tracking-wider font-semibold">Headquarters</p>
                                        <p className="font-medium text-lg">Omsatiya-2, Rupandehi</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/10">
                                        <UserCheck className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-primary-foreground/70 uppercase tracking-wider font-semibold">Direct Contact</p>
                                        <p className="font-medium text-lg">+977-9801412266</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 mt-12">
                            <div className="flex -space-x-3 mb-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-primary" />
                                ))}
                            </div>
                            <p className="text-sm text-primary-foreground/80 font-medium">Trusted by over 500+ dealers nationwide.</p>
                        </div>
                    </div>

                    <div className="md:w-3/5 p-8 md:p-12 bg-white">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-foreground">Application Form</h2>
                            <p className="text-muted-foreground mt-2">Please provide accurate business details for faster approval.</p>
                        </div>
                        <DealerForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
