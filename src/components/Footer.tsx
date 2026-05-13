import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import FadeIn from "./FadeIn";
import ObfuscatedEmail from "./ObfuscatedEmail";

export default function Footer() {
    return (
        <footer className="bg-muted/30 border-t pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Info */}
                    <FadeIn delay={0}>
                        <div className="space-y-4">
                            <Link href="/" prefetch={false} className="flex flex-col items-start gap-3">
                                <div className="relative h-28 w-72">
                                    <Image
                                        src="/logo/logo.png"
                                        alt="Nandani Agro Industries Pvt. Ltd. Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-lg font-bold text-primary leading-tight">
                                    Nandani Agro Industries Pvt. Ltd.
                                </span>
                            </Link>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Manufacturers of high-quality animal feed in Nepal. Dedicated to supporting farmers with nutritious feed for cattle, goats, and pigs.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Quick Links */}
                    <FadeIn delay={0.1}>
                        <div>
                            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link href="/" prefetch={false} className="hover:text-primary transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products" prefetch={false} className="hover:text-primary transition-colors">
                                        Our Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" prefetch={false} className="hover:text-primary transition-colors">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/become-dealer" prefetch={false} className="hover:text-primary transition-colors">
                                        Become a Dealer
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </FadeIn>

                    {/* Contact Info */}
                    <FadeIn delay={0.2}>
                        <div>
                            <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                                    <a
                                        href="https://maps.app.goo.gl/8wJzW9uGCBGcui3B8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Omsatiya-2, Rupandehi, Nepal
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-primary shrink-0" />
                                    <span>+977-9801412266</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-primary shrink-0" />
                                    <ObfuscatedEmail email="cattlefeednepal@gmail.com" />
                                </li>
                            </ul>
                        </div>
                    </FadeIn>

                    {/* Socials */}
                    <FadeIn delay={0.3}>
                        <div>
                            <h3 className="font-semibold mb-4 text-foreground">Follow Us</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.facebook.com/vanjuladaana"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
                                >
                                    <Facebook className="h-5 w-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/nandiniagroindustries/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
                                >
                                    <Instagram className="h-5 w-5" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="border-t pt-8 text-center text-sm text-muted-foreground">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <p>&copy; {new Date().getFullYear()} Nandani Agro Industries Pvt. Ltd. All rights reserved.</p>
                            <span className="hidden md:block text-muted-foreground/50">|</span>
                            <p className="text-xs">
                                Developed by{" "}
                                <a
                                    href="https://fossatechnology.com.np/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Fossa Technology
                                </a>
                            </p>
                        </div>
                        <div className="flex gap-6">
                            <Link href="/privacy-policy" prefetch={false} className="hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" prefetch={false} className="hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/website-map" prefetch={false} className="hover:text-primary transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
