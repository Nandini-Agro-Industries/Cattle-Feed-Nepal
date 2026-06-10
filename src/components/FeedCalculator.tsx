"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

type AnimalType = "dairy-cow" | "buffalo" | "goat" | "pig";
type LactationStage = "early" | "mid" | "late" | "dry" | "na";

interface Result {
    feedPerAnimal: number;
    totalFeed: number;
    productId: string;
    productName: string;
    productReason: string;
    tip: string;
}

function calcResult(
    animal: AnimalType,
    milkLitres: number,
    animals: number,
    stage: LactationStage
): Result {
    let feedPerAnimal = 0;
    let productId = "";
    let productName = "";
    let productReason = "";
    let tip = "";

    if (animal === "dairy-cow") {
        const maintenance = 1.5;
        const yieldAllowance = milkLitres * 0.4;
        feedPerAnimal = maintenance + yieldAllowance;

        if (stage === "dry") {
            feedPerAnimal = 1.5;
            productId = "vanjula-pashu-aahar";
            productName = "Vanjula Pashu Aahar";
            productReason = "Dry cows need moderate maintenance nutrition — avoid over-feeding energy.";
            tip = "Gradually increase to 2.5 kg/day in the last 3 weeks before calving.";
        } else if (milkLitres >= 8 || stage === "early") {
            productId = "vanjula-highpro";
            productName = "Vanjula Pashu Aahar HighPro";
            productReason = "High-yielding or early-lactation cows need 22% crude protein for peak milk output.";
            tip = "Combine with Vanjula Bypass in a 60:40 ratio for maximum milk yield and body condition.";
        } else if (milkLitres >= 5) {
            productId = "vanjula-bypass";
            productName = "Vanjula Pashu Aahar Bypass";
            productReason = "Bypass protein technology increases milk yield by up to 28% in Nepalese field trials.";
            tip = "Feed twice daily at consistent times to stabilise rumen pH.";
        } else {
            productId = "siddhartha-cattle";
            productName = "Siddhartha Cattle Feed";
            productReason = "Cost-effective maintenance feed suitable for low-yield or late-lactation cows.";
            tip = "Supplement with quality green fodder (Napier grass, berseem) for best results.";
        }
    } else if (animal === "buffalo") {
        const maintenance = 1.5;
        const yieldAllowance = milkLitres * 0.4;
        feedPerAnimal = maintenance + yieldAllowance;
        productId = "vanjula-bhainsi-aahar";
        productName = "Vanjula Bhainsi Aahar";
        productReason = "Formulated for Nepal's dairy buffaloes with 20% protein and bypass technology.";
        tip = "Buffaloes need 80–120 litres of clean water daily — ensure troughs are always full.";
    } else if (animal === "goat") {
        feedPerAnimal = 0.2;
        productId = "siddhartha-goat";
        productName = "Siddhartha Goat Feed";
        productReason = "Specialised formula for goats to support rapid growth, immunity, and well-being.";
        tip = "Feed 100–250g depending on age and weight. Always provide unlimited access to roughage.";
    } else {
        feedPerAnimal = 1.75;
        productId = "bangur-ko-dana";
        productName = "Bangur Ko Dana";
        productReason = "High-energy pig feed with balanced amino acids for fast weight gain.";
        tip = "Feed twice daily. Increase to 2.5 kg for finishers targeting maximum weight gain.";
    }

    return {
        feedPerAnimal: Math.round(feedPerAnimal * 10) / 10,
        totalFeed: Math.round(feedPerAnimal * animals * 10) / 10,
        productId,
        productName,
        productReason,
        tip,
    };
}

const animalLabels: Record<AnimalType, string> = {
    "dairy-cow": "Dairy Cow (गाई)",
    buffalo: "Dairy Buffalo (भैंसी)",
    goat: "Goat (बाख्रा)",
    pig: "Pig (बंगुर)",
};

const stageLabels: Record<LactationStage, string> = {
    early: "Early lactation (0–10 weeks after calving)",
    mid: "Mid lactation (10–20 weeks)",
    late: "Late lactation (20+ weeks)",
    dry: "Dry period (not milking)",
    na: "Not applicable",
};

export default function FeedCalculator() {
    const [animal, setAnimal] = useState<AnimalType>("dairy-cow");
    const [milkLitres, setMilkLitres] = useState(8);
    const [animals, setAnimals] = useState(2);
    const [stage, setStage] = useState<LactationStage>("early");
    const [result, setResult] = useState<Result | null>(null);

    const isDairy = animal === "dairy-cow" || animal === "buffalo";

    const handleCalculate = () => {
        setResult(calcResult(animal, milkLitres, animals, stage));
    };

    const handleReset = () => {
        setAnimal("dairy-cow");
        setMilkLitres(8);
        setAnimals(2);
        setStage("early");
        setResult(null);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Inputs */}
            <div className="bg-background rounded-3xl border border-border/60 shadow-sm p-8 space-y-7">
                <h2 className="text-xl font-bold text-foreground">Enter Your Farm Details</h2>

                {/* Animal Type */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Animal Type</label>
                    <div className="grid grid-cols-2 gap-3">
                        {(Object.keys(animalLabels) as AnimalType[]).map((a) => (
                            <button
                                key={a}
                                onClick={() => { setAnimal(a); setResult(null); }}
                                className={`rounded-xl border px-4 py-3 text-sm font-medium text-left transition-all ${
                                    animal === a
                                        ? "border-primary bg-primary/10 text-primary"
                                        : "border-border hover:border-primary/50 text-muted-foreground"
                                }`}
                            >
                                {animalLabels[a]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Number of animals */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                        Number of Animals: <span className="text-primary">{animals}</span>
                    </label>
                    <input
                        type="range"
                        min={1}
                        max={50}
                        value={animals}
                        onChange={(e) => { setAnimals(Number(e.target.value)); setResult(null); }}
                        className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1</span><span>25</span><span>50</span>
                    </div>
                </div>

                {/* Milk per day — only for dairy */}
                {isDairy && (
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">
                            Average Milk per Animal per Day: <span className="text-primary">{milkLitres} litres</span>
                        </label>
                        <input
                            type="range"
                            min={0}
                            max={20}
                            value={milkLitres}
                            onChange={(e) => { setMilkLitres(Number(e.target.value)); setResult(null); }}
                            className="w-full accent-primary"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>0 L (dry)</span><span>10 L</span><span>20 L</span>
                        </div>
                    </div>
                )}

                {/* Lactation stage — only for dairy cow */}
                {animal === "dairy-cow" && (
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Lactation Stage</label>
                        <select
                            value={stage}
                            onChange={(e) => { setStage(e.target.value as LactationStage); setResult(null); }}
                            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            {(Object.keys(stageLabels) as LactationStage[])
                                .filter((s) => s !== "na")
                                .map((s) => (
                                    <option key={s} value={s}>{stageLabels[s]}</option>
                                ))}
                        </select>
                    </div>
                )}

                <div className="flex gap-3 pt-2">
                    <Button size="lg" className="flex-1 rounded-xl" onClick={handleCalculate}>
                        <Calculator className="mr-2 h-4 w-4" />
                        Calculate Feed
                    </Button>
                    {result && (
                        <Button size="lg" variant="outline" className="rounded-xl" onClick={handleReset}>
                            <RefreshCw className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>

            {/* Result */}
            <div>
                {!result ? (
                    <div className="rounded-3xl border border-dashed border-border bg-muted/30 p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
                        <Calculator className="h-12 w-12 text-muted-foreground/40 mb-4" />
                        <p className="text-muted-foreground font-medium">Fill in your farm details and click <br /><strong>Calculate Feed</strong> to get your recommendation.</p>
                    </div>
                ) : (
                    <div className="space-y-5">
                        {/* Feed amounts */}
                        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-7">
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Daily Feed Requirement</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-background rounded-2xl p-5 border border-border/50 text-center">
                                    <p className="text-4xl font-extrabold text-primary">{result.feedPerAnimal} kg</p>
                                    <p className="text-sm text-muted-foreground mt-1">per animal / day</p>
                                </div>
                                <div className="bg-background rounded-2xl p-5 border border-border/50 text-center">
                                    <p className="text-4xl font-extrabold text-foreground">{result.totalFeed} kg</p>
                                    <p className="text-sm text-muted-foreground mt-1">total / day ({animals} animals)</p>
                                </div>
                            </div>
                            <div className="mt-4 bg-background rounded-xl p-4 border border-border/50">
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">Monthly total: </span>
                                    {Math.round(result.totalFeed * 30)} kg
                                    &nbsp;·&nbsp;
                                    <span className="font-semibold text-foreground">Annual total: </span>
                                    {Math.round(result.totalFeed * 365)} kg
                                </p>
                            </div>
                        </div>

                        {/* Product recommendation */}
                        <div className="rounded-3xl border border-border/60 bg-background p-7 shadow-sm space-y-4">
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Recommended Product</p>
                            <p className="text-2xl font-bold text-foreground">{result.productName}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{result.productReason}</p>
                            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
                                <span className="font-semibold">Tip: </span>{result.tip}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 pt-1">
                                <Button asChild className="rounded-xl flex-1">
                                    <Link href={`/products/${result.productId}`}>
                                        View Product <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="rounded-xl flex-1">
                                    <Link href="/contact">Order Now</Link>
                                </Button>
                            </div>
                        </div>

                        <p className="text-xs text-muted-foreground px-1">
                            Figures are estimates based on the 400g/litre rule and standard maintenance requirements. Actual needs vary with breed, body weight, and forage quality. Consult a veterinary nutritionist for herd-specific recommendations.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
