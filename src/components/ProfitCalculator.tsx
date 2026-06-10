"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

type AnimalType = "buffalo" | "cow";

interface ProfitResult {
    dailyMilkTotal: number;
    monthlyMilkIncome: number;
    monthlyFeedCost: number;
    monthlyOtherCosts: number;
    monthlyNetProfit: number;
    profitPerLitre: number;
    annualProfit: number;
    feedPerAnimalDay: number;
    recommendedProductId: string;
    recommendedProductName: string;
    breakEvenLitres: number | null;
}

const DEFAULT_PRICE: Record<AnimalType, number> = { buffalo: 85, cow: 65 };

export default function ProfitCalculator() {
    const [animalType, setAnimalType] = useState<AnimalType>("buffalo");
    const [numAnimals, setNumAnimals] = useState(3);
    const [milkPerAnimal, setMilkPerAnimal] = useState(8);
    const [milkPrice, setMilkPrice] = useState(85);
    const [feedCostPerKg, setFeedCostPerKg] = useState(38);
    const [otherCosts, setOtherCosts] = useState(3000);
    const [result, setResult] = useState<ProfitResult | null>(null);

    const handleAnimalChange = (type: AnimalType) => {
        setAnimalType(type);
        setMilkPrice(DEFAULT_PRICE[type]);
        setResult(null);
    };

    const handleCalculate = () => {
        const feedPerAnimal = 1.5 + milkPerAnimal * 0.4;
        const dailyMilkTotal = numAnimals * milkPerAnimal;
        const monthlyMilkIncome = dailyMilkTotal * 30 * milkPrice;
        const monthlyFeedCost = numAnimals * feedPerAnimal * 30 * feedCostPerKg;
        const monthlyNetProfit = monthlyMilkIncome - monthlyFeedCost - otherCosts;

        // Break-even: solve for litres/animal/day where income = costs
        // price * x * n * 30 = (1.5 + x*0.4) * n * 30 * feedCost + otherCosts
        const denom = 30 * numAnimals * (milkPrice - 0.4 * feedCostPerKg);
        const breakEvenLitres =
            denom > 0
                ? Math.ceil(((1.5 * numAnimals * 30 * feedCostPerKg + otherCosts) / denom) * 10) / 10
                : null;

        let recommendedProductId = "vanjula-bhainsi-aahar";
        let recommendedProductName = "Vanjula Bhainsi Aahar";
        if (animalType === "cow") {
            if (milkPerAnimal >= 8) {
                recommendedProductId = "vanjula-highpro";
                recommendedProductName = "Vanjula HighPro";
            } else if (milkPerAnimal >= 5) {
                recommendedProductId = "vanjula-bypass";
                recommendedProductName = "Vanjula Bypass";
            } else {
                recommendedProductId = "siddhartha-cattle";
                recommendedProductName = "Siddhartha Cattle Feed";
            }
        }

        setResult({
            dailyMilkTotal,
            monthlyMilkIncome,
            monthlyFeedCost,
            monthlyOtherCosts: otherCosts,
            monthlyNetProfit,
            profitPerLitre: dailyMilkTotal > 0 ? Math.round((monthlyNetProfit / (dailyMilkTotal * 30)) * 10) / 10 : 0,
            annualProfit: monthlyNetProfit * 12,
            feedPerAnimalDay: Math.round(feedPerAnimal * 10) / 10,
            recommendedProductId,
            recommendedProductName,
            breakEvenLitres,
        });
    };

    const handleReset = () => {
        setAnimalType("buffalo");
        setNumAnimals(3);
        setMilkPerAnimal(8);
        setMilkPrice(85);
        setFeedCostPerKg(38);
        setOtherCosts(3000);
        setResult(null);
    };

    const fmt = (n: number) => Math.abs(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Inputs */}
            <div className="bg-background rounded-3xl border border-border/60 shadow-sm p-8 space-y-7">
                <h2 className="text-xl font-bold text-foreground">Enter Your Farm Details</h2>

                {/* Animal type */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Animal Type</label>
                    <div className="grid grid-cols-2 gap-3">
                        {(
                            [
                                ["buffalo", "Dairy Buffalo (भैंसी)"],
                                ["cow", "Dairy Cow (गाई)"],
                            ] as [AnimalType, string][]
                        ).map(([type, label]) => (
                            <button
                                key={type}
                                onClick={() => handleAnimalChange(type)}
                                className={`rounded-xl border px-4 py-3 text-sm font-medium text-left transition-all ${
                                    animalType === type
                                        ? "border-primary bg-primary/10 text-primary"
                                        : "border-border hover:border-primary/50 text-muted-foreground"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Number of animals */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                        Number of Animals: <span className="text-primary">{numAnimals}</span>
                    </label>
                    <input
                        type="range" min={1} max={50} value={numAnimals}
                        onChange={(e) => { setNumAnimals(Number(e.target.value)); setResult(null); }}
                        className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1</span><span>25</span><span>50</span>
                    </div>
                </div>

                {/* Milk yield */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                        Average Milk per Animal per Day: <span className="text-primary">{milkPerAnimal} litres</span>
                    </label>
                    <input
                        type="range" min={1} max={25} value={milkPerAnimal}
                        onChange={(e) => { setMilkPerAnimal(Number(e.target.value)); setResult(null); }}
                        className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1 L</span><span>13 L</span><span>25 L</span>
                    </div>
                </div>

                {/* Milk price */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-semibold text-foreground">
                            Milk Sale Price: <span className="text-primary">NPR {milkPrice}/litre</span>
                        </label>
                        <button
                            onClick={() => { setMilkPrice(DEFAULT_PRICE[animalType]); setResult(null); }}
                            className="text-xs text-primary hover:underline"
                        >
                            Reset to DDC rate
                        </button>
                    </div>
                    <input
                        type="range" min={40} max={130} value={milkPrice}
                        onChange={(e) => { setMilkPrice(Number(e.target.value)); setResult(null); }}
                        className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>NPR 40</span>
                        <span className="text-primary">Default: NPR {DEFAULT_PRICE[animalType]} (DDC)</span>
                        <span>NPR 130</span>
                    </div>
                </div>

                {/* Feed cost per kg */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                        Concentrate Feed Cost: <span className="text-primary">NPR {feedCostPerKg}/kg</span>
                    </label>
                    <input
                        type="range" min={20} max={80} value={feedCostPerKg}
                        onChange={(e) => { setFeedCostPerKg(Number(e.target.value)); setResult(null); }}
                        className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>NPR 20</span>
                        <span className="text-primary">~NPR 38 typical</span>
                        <span>NPR 80</span>
                    </div>
                </div>

                {/* Other monthly costs */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                        Other Monthly Costs:{" "}
                        <span className="text-primary">NPR {fmt(otherCosts)}</span>
                    </label>
                    <input
                        type="range" min={0} max={30000} step={500} value={otherCosts}
                        onChange={(e) => { setOtherCosts(Number(e.target.value)); setResult(null); }}
                        className="w-full accent-primary"
                    />
                    <p className="text-xs text-muted-foreground">Labour, medicine, roughage, housing (NPR 0 – 30,000)</p>
                </div>

                <div className="flex gap-3 pt-2">
                    <Button size="lg" className="flex-1 rounded-xl" onClick={handleCalculate}>
                        <DollarSign className="mr-2 h-4 w-4" />
                        Calculate Profit
                    </Button>
                    {result && (
                        <Button size="lg" variant="outline" className="rounded-xl" onClick={handleReset}>
                            <RefreshCw className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>

            {/* Results */}
            <div>
                {!result ? (
                    <div className="rounded-3xl border border-dashed border-border bg-muted/30 p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
                        <TrendingUp className="h-12 w-12 text-muted-foreground/40 mb-4" />
                        <p className="text-muted-foreground font-medium">
                            Enter your farm details and click
                            <br />
                            <strong>Calculate Profit</strong> to see your income breakdown.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-5">
                        {/* Net profit headline */}
                        <div
                            className={`rounded-3xl border p-7 ${
                                result.monthlyNetProfit >= 0
                                    ? "border-green-200 bg-green-50"
                                    : "border-red-200 bg-red-50"
                            }`}
                        >
                            <p
                                className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                                    result.monthlyNetProfit >= 0 ? "text-green-700" : "text-red-700"
                                }`}
                            >
                                Monthly Net Profit
                            </p>
                            <div className="flex items-end gap-3 mb-3">
                                {result.monthlyNetProfit >= 0 ? (
                                    <TrendingUp className="h-8 w-8 text-green-600 shrink-0" />
                                ) : (
                                    <TrendingDown className="h-8 w-8 text-red-600 shrink-0" />
                                )}
                                <span
                                    className={`text-5xl font-extrabold leading-none ${
                                        result.monthlyNetProfit >= 0 ? "text-green-700" : "text-red-700"
                                    }`}
                                >
                                    NPR {fmt(result.monthlyNetProfit)}
                                </span>
                                {result.monthlyNetProfit < 0 && (
                                    <span className="text-red-600 font-bold text-lg self-end">(loss)</span>
                                )}
                            </div>
                            <p
                                className={`text-sm ${
                                    result.monthlyNetProfit >= 0 ? "text-green-700" : "text-red-700"
                                }`}
                            >
                                <strong>Annual:</strong> NPR {fmt(result.annualProfit)}
                                {result.monthlyNetProfit < 0 && " (loss)"}
                                &nbsp;·&nbsp;
                                <strong>Per litre:</strong>{" "}
                                {result.profitPerLitre >= 0 ? "+" : ""}NPR {result.profitPerLitre}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="rounded-3xl border border-border/60 bg-background p-7 shadow-sm space-y-1">
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                                Monthly Breakdown
                            </p>
                            {[
                                {
                                    label: `Gross milk income (${result.dailyMilkTotal} L/day × 30 days × NPR ${milkPrice})`,
                                    value: `+ NPR ${fmt(result.monthlyMilkIncome)}`,
                                    positive: true,
                                },
                                {
                                    label: `Concentrate feed (${result.feedPerAnimalDay} kg/animal × ${numAnimals} × 30 days × NPR ${feedCostPerKg})`,
                                    value: `− NPR ${fmt(result.monthlyFeedCost)}`,
                                    positive: false,
                                },
                                {
                                    label: "Other costs (labour, medicine, roughage)",
                                    value: `− NPR ${fmt(result.monthlyOtherCosts)}`,
                                    positive: false,
                                },
                            ].map((row, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-start gap-4 py-2.5 border-b border-border/40 last:border-b-0 text-sm"
                                >
                                    <span className="text-muted-foreground leading-snug">{row.label}</span>
                                    <span
                                        className={`font-semibold shrink-0 ${
                                            row.positive ? "text-green-700" : "text-red-600"
                                        }`}
                                    >
                                        {row.value}
                                    </span>
                                </div>
                            ))}
                            <div className="flex justify-between items-center pt-3 font-bold text-base">
                                <span className="text-foreground">Net Monthly Profit</span>
                                <span
                                    className={
                                        result.monthlyNetProfit >= 0 ? "text-green-700" : "text-red-600"
                                    }
                                >
                                    NPR {fmt(result.monthlyNetProfit)}
                                    {result.monthlyNetProfit < 0 && " (loss)"}
                                </span>
                            </div>
                        </div>

                        {/* Break-even + product rec */}
                        <div className="rounded-3xl border border-border/60 bg-background p-7 shadow-sm space-y-4">
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                                Insights &amp; Recommendation
                            </p>
                            {result.breakEvenLitres !== null && (
                                <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
                                    <span className="font-semibold">Break-even yield: </span>
                                    Your herd needs to average at least{" "}
                                    <strong>{result.breakEvenLitres} L/animal/day</strong> to cover all
                                    costs at current prices.
                                    {milkPerAnimal < result.breakEvenLitres && (
                                        <span className="block mt-1 font-medium text-amber-900">
                                            Current yield ({milkPerAnimal} L) is below break-even — consider upgrading to higher-protein feed to boost yield.
                                        </span>
                                    )}
                                </div>
                            )}
                            <div>
                                <p className="text-sm font-semibold text-foreground mb-1">Recommended Feed</p>
                                <p className="text-sm text-muted-foreground">
                                    For {milkPerAnimal} L/day{" "}
                                    {animalType === "buffalo" ? "buffalo" : "dairy cow"}:{" "}
                                    <strong className="text-foreground">{result.recommendedProductName}</strong>
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 pt-1">
                                <Button asChild className="rounded-xl flex-1">
                                    <Link href={`/products/${result.recommendedProductId}`}>
                                        View Product <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="rounded-xl flex-1">
                                    <Link href="/contact">Order Feed</Link>
                                </Button>
                            </div>
                        </div>

                        <p className="text-xs text-muted-foreground px-1">
                            Milk prices based on DDC reference rates (NPR 65/L cow, NPR 85/L buffalo). Feed
                            calculated using the 400g/litre rule. Roughage costs, housing depreciation, and
                            debt servicing are not included unless added in &ldquo;Other costs&rdquo;. Actual results
                            vary with season, fat content, and local buyer.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
