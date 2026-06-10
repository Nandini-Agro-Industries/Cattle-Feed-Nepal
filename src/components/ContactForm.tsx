"use client";

import { useActionState } from "react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
    const [state, action, isPending] = useActionState(submitContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.status === "success") {
            formRef.current?.reset();
        }
    }, [state.status]);

    return (
        <form ref={formRef} action={action} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name <span className="text-destructive">*</span></label>
                    <Input id="name" name="name" placeholder="Your Name" required disabled={isPending} />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <Input id="phone" name="phone" placeholder="Your Phone Number" disabled={isPending} />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" disabled={isPending} />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message <span className="text-destructive">*</span></label>
                <Textarea id="message" name="message" placeholder="How can we help you?" className="min-h-[150px]" required disabled={isPending} />
            </div>

            {state.status === "success" && (
                <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                    <p>{state.message}</p>
                </div>
            )}

            {state.status === "error" && (
                <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <p>{state.message}</p>
                </div>
            )}

            <Button size="lg" type="submit" className="w-full md:w-auto" disabled={isPending}>
                {isPending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    );
}
