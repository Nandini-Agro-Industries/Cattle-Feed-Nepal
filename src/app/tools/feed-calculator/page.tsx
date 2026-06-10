import { Metadata } from "next";
import FeedCalculator from "@/components/FeedCalculator";
import Link from "next/link";
import { Calculator, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Cattle Feed Calculator Nepal | Daily Feed Requirement Tool",
    description: "Free online cattle feed calculator for Nepal farmers. Enter your animal type and milk yield to get the exact daily feed amount and product recommendation for cows, buffaloes, goats, and pigs.",
    keywords: [
        "cattle feed calculator Nepal",
        "pashu aahar calculator",
        "गाईको दाना calculator",
        "daily feed requirement dairy cow Nepal",
        "buffalo feed calculator Nepal",
        "how much feed for dairy cow Nepal",
        "livestock feed calculator",
        "how much concentrate for cow Nepal",
        "गाईलाई कति दाना चाहिन्छ",
        "feed calculation 400g per litre rule",
    ],
    alternates: {
        canonical: "/tools/feed-calculator",
    },
    openGraph: {
        title: "Cattle Feed Calculator Nepal | Daily Feed Requirement Tool",
        description: "Free tool: enter your animal type and milk yield to get exact daily feed requirements and product recommendations for Nepal farmers.",
    },
};

const faqs = [
    {
        question: "How much feed should I give my dairy cow per day?",
        answer: "Use the 400g per litre rule: feed 1.5 kg per day for body maintenance, plus 400g (0.4 kg) for every litre of milk the cow produces. A cow giving 10 litres per day needs 1.5 + (10 × 0.4) = 5.5 kg of concentrate daily, on top of ad-libitum roughage and clean water. This is a standard industry formula used by Nepal's National Cattle Research Program (NARC).",
    },
    {
        question: "How do I use this cattle feed calculator?",
        answer: "Select your animal type (dairy cow, buffalo, goat, or pig), then enter the number of animals and — for dairy animals — the average daily milk yield per animal. For dairy cows, also select the lactation stage. Click 'Calculate Feed' to get the per-animal daily requirement, total herd daily requirement, monthly total, and a specific product recommendation from the Nandani Agro range.",
    },
    {
        question: "Does the lactation stage affect how much feed a cow needs?",
        answer: "Yes, significantly. Early-lactation cows (0–10 weeks post-calving) are at peak milk yield but in negative energy balance — they can't eat enough to cover their needs and draw on body reserves. These cows need the highest-protein feed (Vanjula HighPro, 22% CP). Dry cows need only 1.5 kg maintenance ration to avoid over-conditioning before the next calving. Mid and late-lactation cows fall in between.",
    },
    {
        question: "How much concentrate does a dairy buffalo need per day?",
        answer: "The same 400g per litre formula applies to buffaloes: 1.5 kg maintenance + 400g per litre of milk. A buffalo producing 8 litres daily needs 1.5 + (8 × 0.4) = 4.7 kg of concentrate per day. Vanjula Bhainsi Aahar is formulated specifically for Nepal's dairy buffaloes — including high-yielding Murrah and crossbred animals — with 20% crude protein and bypass technology.",
    },
    {
        question: "How much feed does a goat need per day in Nepal?",
        answer: "A typical dairy or meat goat in Nepal needs 150–250g (average 200g) of quality concentrate per day, alongside unlimited access to green fodder, hay, or straw. Feed can be increased for pregnant does in the last 4 weeks before kidding. Siddhartha Goat Feed provides the vitamins, minerals, and protein needed for rapid growth and strong immunity.",
    },
    {
        question: "What is the 400g per litre rule for cattle feed?",
        answer: "The 400g per litre rule is a widely used dairy feeding formula: for every litre of milk a cow produces above maintenance, she needs approximately 400g of balanced concentrate feed. The 1.5 kg/day maintenance allowance covers her basic body functions. Together: daily concentrate = 1.5 kg + (litres of milk × 0.4 kg). This formula is aligned with guidelines from Nepal's National Cattle Research Program and the NRC Nutrient Requirements of Dairy Cattle.",
    },
    {
        question: "Is the calculator accurate for local Nepali breeds?",
        answer: "The calculator uses standard industry formulas that apply to all cattle breeds. Local Nepali breeds (Pahadi, Lulu, Tarai) typically produce less milk — often 2–5 litres per day — so their calculated feed requirement will naturally be lower. The same formula applies: the calculator will recommend a lower daily concentrate amount and an appropriate lower-cost product like Siddhartha Cattle Feed.",
    },
    {
        question: "How many times per day should I feed concentrate to my cows?",
        answer: "Divide the daily concentrate ration into at least two equal meals, ideally morning and evening around milking time. For high-producing cows receiving 5 kg or more per day, three meals is better — never offer more than 2.5–3 kg in a single feeding, as large single doses increase the risk of rumen acidosis. Consistent feeding times reduce stress and help maintain stable milk yield.",
    },
];

export default function FeedCalculatorPage() {
    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.cattlefeednepal.com/tools/feed-calculator#webpage",
            "url": "https://www.cattlefeednepal.com/tools/feed-calculator",
            "name": "Cattle Feed Calculator Nepal | Daily Feed Requirement Tool",
            "description": "Free online cattle feed calculator for Nepal farmers. Get exact daily feed requirements and product recommendations for cows, buffaloes, goats, and pigs.",
            "inLanguage": "en-US",
            "isPartOf": {
                "@type": "WebSite",
                "@id": "https://www.cattlefeednepal.com/#website",
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Calculate Daily Cattle Feed Requirements in Nepal",
            "description": "Use the Nandani Agro free feed calculator to find out exactly how much concentrate feed your cows, buffaloes, goats, or pigs need each day.",
            "totalTime": "PT1M",
            "tool": [{ "@type": "HowToTool", "name": "Nandani Agro Cattle Feed Calculator" }],
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Select your animal type",
                    "text": "Choose from Dairy Cow (गाई), Dairy Buffalo (भैंसी), Goat (बाख्रा), or Pig (बंगुर) using the animal type buttons.",
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Enter the number of animals and daily milk yield",
                    "text": "Use the sliders to set the number of animals in your herd (1–50) and — for dairy animals — the average daily milk yield per animal in litres. For dairy cows, also select the lactation stage.",
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Click Calculate Feed",
                    "text": "Click the Calculate Feed button to see the per-animal daily feed requirement, total herd requirement, monthly and annual totals, and a specific Nandani Agro product recommendation with a feeding tip.",
                },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer,
                },
            })),
        },
    ];

    return (
        <div className="bg-background min-h-screen pb-24">
            {/* Header */}
            <div className="bg-primary/5 border-b border-border/50 py-14">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-5">
                        <Calculator className="h-4 w-4" />
                        Free Farmer Tool
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Cattle Feed Calculator
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Find out exactly how much feed your animals need every day — and which Nandani Agro product is right for your herd.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        गाई, भैंसी, बाख्रा र बंगुरको लागि दैनिक दाना मात्रा पत्ता लगाउनुहोस्।
                    </p>
                </div>
            </div>

            {/* Calculator */}
            <div className="container mx-auto px-4 py-14">
                <FeedCalculator />
            </div>

            {/* How it works */}
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto border-t pt-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6">How the Calculator Works</h2>
                    <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                        <p>
                            <strong className="text-foreground">Dairy cows and buffaloes</strong> — Feed is calculated using the widely used <strong>400g per litre of milk + 1.5 kg maintenance</strong> rule. For example, a cow producing 10 litres daily needs 10 × 0.4 + 1.5 = <strong>5.5 kg of concentrate per day</strong>, alongside ad-libitum roughage and clean water.
                        </p>
                        <p>
                            <strong className="text-foreground">Lactation stage adjustment</strong> — Early-lactation cows have higher protein demands and are recommended Vanjula HighPro (22% CP). Dry cows need only maintenance rations to avoid over-conditioning.
                        </p>
                        <p>
                            <strong className="text-foreground">Goats</strong> — Recommended at 150–250g concentrate per day (average 200g) alongside unlimited roughage.
                        </p>
                        <p>
                            <strong className="text-foreground">Pigs</strong> — Estimated at an average of 1.75 kg/day (range: 1–2.5 kg depending on grower vs. finisher stage).
                        </p>
                        <p className="text-xs">
                            These are standard industry estimates. Actual requirements vary with animal breed, body weight, ambient temperature, and forage quality. For a tailored feeding plan, contact Nandani Agro Industries at <strong>+977-9801412266</strong>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cross-link to profit calculator */}
            <div className="container mx-auto px-4 mt-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-muted/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
                        <div className="grow">
                            <p className="font-semibold text-foreground text-sm mb-1">Also try the Profit Calculator</p>
                            <p className="text-muted-foreground text-xs">Know your feed cost? Use our dairy profit calculator to see your monthly milk income and net profit.</p>
                        </div>
                        <Link
                            href="/tools/profit-calculator"
                            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all"
                        >
                            Profit Calculator <Calculator className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container mx-auto px-4 mt-16">
                <div className="max-w-3xl mx-auto">
                    <div className="border-t pt-12">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground text-sm mb-8">Common questions about cattle feed calculation and daily feed requirements in Nepal.</p>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border border-border/60 rounded-2xl p-6 bg-muted/20">
                                    <div className="flex gap-4 items-start">
                                        <div className="shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                            <HelpCircle className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground mb-2 leading-snug">{faq.question}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feed Guide CTA */}
                    <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-bold text-foreground mb-2">Need a Tailored Feeding Plan?</h3>
                        <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
                            This calculator gives standard estimates. For a herd-specific feeding plan — or to order Vanjula or Siddhartha feed in bulk — contact Nandani Agro Industries directly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors">
                                Contact Us
                            </Link>
                            <Link href="/products" className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-2.5 text-sm font-semibold hover:bg-muted/50 transition-colors">
                                View All Products
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
