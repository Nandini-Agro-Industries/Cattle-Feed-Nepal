"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FadeIn from "./FadeIn";
import { Loader2, Send } from "lucide-react";

export default function DealerForm() {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        phone: "",
        monthlyDemand: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Dealer Application:", formData);
        alert("Thank you for your interest! We will contact you soon.");
        setFormData({ name: "", location: "", phone: "", monthlyDemand: "" });
        setIsSubmitting(false);
    };

    return (
        <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                        Full Name / Business Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name or business name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="98XXXXXXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="h-11 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-semibold text-slate-700">
                            Location / Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="location"
                            name="location"
                            placeholder="City, District"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="h-11 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="monthlyDemand" className="text-sm font-semibold text-slate-700">
                        Estimated Monthly Demand
                    </label>
                    <Textarea
                        id="monthlyDemand"
                        name="monthlyDemand"
                        placeholder="e.g. 500 bags of Cattle Feed per month"
                        value={formData.monthlyDemand}
                        onChange={handleChange}
                        required
                        className="min-h-[120px] bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none"
                    />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            Submit Application
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </form>
        </FadeIn>
    );
}
