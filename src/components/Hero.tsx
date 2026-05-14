"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, LazyMotion, domMax } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <LazyMotion features={domMax}>
            <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-secondary/30 via-background to-background pt-20 pb-32 md:pt-32 md:pb-48">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                Nandani Agro Industries - Trusted in Nepal
                            </motion.div>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                                Best Cattle Feed in Nepal by <span className="text-primary relative inline-block">
                                    Nandani Agro
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                                Scientifically formulated feed for cattle, goats, and pigs. Maximize milk production and growth with Nandani Agro&apos;s proven nutrition.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Button asChild size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    <Link href="/products">
                                        View Products <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="text-lg px-8 h-14 rounded-full border-2 hover:bg-secondary/20">
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative h-[300px] md:h-[600px] w-full flex items-center justify-center mt-8 md:mt-0"
                        >
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />

                            <div className="relative w-full h-full max-w-lg mx-auto flex items-center justify-center">
                                {/* Left Image - Siddhartha Cattle Feed */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-32 h-48 md:w-48 md:h-64 z-10 -rotate-12 grayscale-[0.2] hover:grayscale-0 transition-all duration-300 hover:z-30 hover:scale-110"
                                >
                                    <Image
                                        src="/images/siddhartha-cattle-feed.png"
                                        alt="Siddhartha Cattle Feed"
                                        fill
                                        className="object-contain drop-shadow-xl"
                                        sizes="(max-width: 768px) 128px, 192px"
                                    />
                                </motion.div>

                                {/* Right Image - Vanjula Pashu Aahar */}
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-32 h-48 md:w-48 md:h-64 z-10 rotate-12 grayscale-[0.2] hover:grayscale-0 transition-all duration-300 hover:z-30 hover:scale-110"
                                >
                                    <Image
                                        src="/images/vanjula-pashu-aahar.png"
                                        alt="Vanjula Pashu Aahar"
                                        fill
                                        className="object-contain drop-shadow-xl"
                                        sizes="(max-width: 768px) 128px, 192px"
                                    />
                                </motion.div>

                                {/* Center Image - Vanjula HighPro */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                    className="relative w-48 h-64 md:w-72 md:h-96 z-20 hover:scale-105 transition-transform duration-300"
                                >
                                    <Image
                                        src="/images/vanjula-highpro.png"
                                        alt="Vanjula HighPro Feed"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                        sizes="(max-width: 768px) 192px, 288px"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}
