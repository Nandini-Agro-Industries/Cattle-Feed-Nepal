"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitDealerApplication, type DealerFormState } from "@/app/actions/dealer";

const initialState: DealerFormState = { status: "idle", message: "" };

export default function DealerForm() {
    const [state, action, isPending] = useActionState(submitDealerApplication, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.status === "success") {
            formRef.current?.reset();
        }
    }, [state.status]);

    return (
        <form ref={formRef} action={action} className="space-y-5">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                    Full Name / Business Name <span className="text-red-500">*</span>
                </label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name or business name"
                    required
                    disabled={isPending}
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
                        required
                        disabled={isPending}
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
                        required
                        disabled={isPending}
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
                    disabled={isPending}
                    className="min-h-[120px] bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none"
                />
            </div>

            {state.status === "success" && (
                <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                    <p>{state.message}</p>
                </div>
            )}

            {state.status === "error" && (
                <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <p>{state.message}</p>
                </div>
            )}

            <Button
                type="submit"
                size="lg"
                className="w-full text-lg h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                disabled={isPending}
            >
                {isPending ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting…
                    </>
                ) : (
                    <>
                        Submit Application
                        <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    );
}
