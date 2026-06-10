import { Metadata } from "next";
import ProfitCalculator from "@/components/ProfitCalculator";
import Link from "next/link";
import { TrendingUp, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Dairy Farming Profit Calculator Nepal | Milk Income Estimator",
    description: "Free dairy profit calculator for Nepal farmers. Enter your cows or buffaloes, daily milk yield, and local milk price to calculate monthly income, feed costs, and net profit from dairy farming.",
    keywords: [
        "dairy farming profit calculator Nepal",
        "milk income calculator Nepal",
        "buffalo farming profit Nepal",
        "how much earn from dairy farming Nepal",
        "dairy cow income per month Nepal",
        "दुध बेचेर कति कमाउन सकिन्छ",
        "गाई भैंसी पालनबाट आम्दानी",
        "cattle farming income Nepal",
        "dairy farm profit margin Nepal",
        "is dairy farming profitable Nepal",
    ],
    alternates: {
        canonical: "/tools/profit-calculator",
    },
    openGraph: {
        title: "Dairy Farming Profit Calculator Nepal | Milk Income Estimator",
        description: "Free tool: calculate monthly milk income, feed costs, and net profit from dairy cows or buffaloes in Nepal — with real NPR prices and DDC milk rates.",
    },
};

const faqs = [
    {
        question: "How much can I earn from dairy farming in Nepal?",
        answer: "A farmer with 3 buffaloes each producing 8 litres per day earns approximately NPR 61,200/month in gross milk income (at NPR 85/L DDC rate). After concentrate feed costs (around NPR 24,600/month) and other costs (labour, medicine — roughly NPR 5,000–10,000/month), net profit is typically NPR 25,000–35,000 per month. High-yielding crossbred HF cows (12+ L/day) can earn NPR 40,000–50,000/month net per 3–5 animals.",
    },
    {
        question: "Is buffalo farming more profitable than cow farming in Nepal?",
        answer: "Generally yes, in Nepal's current market. Buffalo milk fetches NPR 75–100/litre vs. NPR 60–75/litre for cow milk, due to higher fat content and DDC procurement preference. Research from Kaski district shows buffalo farming achieves a revenue-to-cost ratio of 1.81 vs. 1.18 for cattle. However, high-yielding HF-crossbred cows producing 12+ litres/day can match or exceed buffalo profitability, especially when fed high-protein concentrates like Vanjula HighPro.",
    },
    {
        question: "What is the current DDC milk price per litre in Nepal in 2025?",
        answer: "As of 2025, the Dairy Development Corporation (DDC) procurement price is approximately NPR 62–68/litre for cow milk and NPR 80–95/litre for buffalo milk. Prices vary by season, collection point, and measured fat content (SNF). Private dairy processors sometimes offer higher rates. Retail prices for packaged pasteurized milk are around NPR 97–118/litre.",
    },
    {
        question: "What costs should I include when calculating dairy farm profit?",
        answer: "The main costs are: (1) Concentrate feed — typically NPR 35–45/kg for quality commercial feed like Vanjula or Siddhartha; (2) Labour — NPR 10,000–20,000/month for a family helper or hired worker; (3) Veterinary costs — NPR 500–2,000/animal/month average; (4) Roughage — Napier grass, berseem, straw; (5) Housing depreciation. This calculator covers concentrate feed automatically plus a custom field for all other monthly costs.",
    },
    {
        question: "What is the break-even milk yield for dairy farming in Nepal?",
        answer: "The break-even yield depends on your milk price and feed cost. At NPR 85/L (buffalo), NPR 38/kg feed, and NPR 5,000/month other costs for 3 animals, break-even is around 4–5 litres/animal/day. Above that, you earn net profit. Use the calculator above to find your specific break-even point.",
    },
    {
        question: "How can I increase my dairy farm profit in Nepal?",
        answer: "The fastest ways to increase profit: (1) Use bypass protein feed like Vanjula Bypass or HighPro — shown to increase daily yield by 28% in Nepal field trials; (2) Upgrade to higher-yielding crossbred animals through AI; (3) Negotiate better milk prices with cooperatives or private processors; (4) Grow your own roughage (Napier grass) to reduce 'other costs'; (5) Track each animal's daily yield and cull unproductive animals. The feed calculator and profit calculator tools on this site help you model each scenario.",
    },
];

export default function ProfitCalculatorPage() {
    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.cattlefeednepal.com/tools/profit-calculator#webpage",
            "url": "https://www.cattlefeednepal.com/tools/profit-calculator",
            "name": "Dairy Farming Profit Calculator Nepal",
            "description": "Free dairy profit calculator for Nepal farmers. Calculate monthly milk income, feed costs, and net profit from dairy cows or buffaloes using real NPR prices.",
            "inLanguage": "en-US",
            "isPartOf": { "@type": "WebSite", "@id": "https://www.cattlefeednepal.com/#website" },
        },
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Calculate Dairy Farm Profit in Nepal",
            "description": "Use this free calculator to estimate monthly net income from dairy cows or buffaloes — with Nepal-specific DDC milk prices and concentrate feed costs.",
            "totalTime": "PT1M",
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Select animal type and enter herd size",
                    "text": "Choose Dairy Buffalo (भैंसी) or Dairy Cow (गाई) and set the number of animals using the slider (1–50).",
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Set milk yield, prices, and costs",
                    "text": "Enter average daily milk yield per animal, your local milk sale price (pre-filled with DDC rates: NPR 85/L buffalo, NPR 65/L cow), concentrate feed cost per kg, and other monthly costs.",
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Click Calculate Profit",
                    "text": "See your monthly gross income, feed cost, net monthly and annual profit, profit per litre, break-even yield, and a recommended Nandani Agro feed product.",
                },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
        },
    ];

    return (
        <div className="bg-background min-h-screen pb-24">
            {/* Header */}
            <div className="bg-primary/5 border-b border-border/50 py-14">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-5">
                        <TrendingUp className="h-4 w-4" />
                        Free Farmer Tool
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Dairy Profit Calculator Nepal
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Calculate your monthly milk income, feed costs, and net profit from dairy cows or
                        buffaloes — using Nepal&apos;s actual DDC milk prices and feed rates.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        दुध बेचेर कति कमाउन सकिन्छ? यहाँ हिसाब गर्नुहोस्।
                    </p>
                </div>
            </div>

            {/* Calculator */}
            <div className="container mx-auto px-4 py-14">
                <ProfitCalculator />
            </div>

            {/* Cross-link to feed calculator */}
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto border-t pt-10 pb-2">
                    <div className="bg-muted/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
                        <div className="grow">
                            <p className="font-semibold text-foreground text-sm mb-1">Also try the Feed Calculator</p>
                            <p className="text-muted-foreground text-xs">Get the exact daily feed amount for each animal — then plug that feed cost into this profit tool.</p>
                        </div>
                        <Link
                            href="/tools/feed-calculator"
                            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all"
                        >
                            Feed Calculator <TrendingUp className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container mx-auto px-4 mt-12">
                <div className="max-w-3xl mx-auto">
                    <div className="border-t pt-12">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground text-sm mb-8">
                            Common questions about dairy farming income and profitability in Nepal.
                        </p>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border border-border/60 rounded-2xl p-6 bg-muted/20">
                                    <div className="flex gap-4 items-start">
                                        <div className="shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                            <HelpCircle className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground mb-2 leading-snug">
                                                {faq.question}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            Ready to Boost Your Dairy Profit?
                        </h3>
                        <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
                            The fastest way to improve your profit margin is better feed — scientifically
                            formulated Vanjula and Siddhartha products from Nandani Agro Industries.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center rounded-xl bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
                            >
                                View All Products
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-2.5 text-sm font-semibold hover:bg-muted/50 transition-colors"
                            >
                                Order Feed
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </div>
    );
}
