import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Nandini Agro Industries",
    description: "Get in touch with Nandini Agro Industries for orders, dealership inquiries, or support. Call +977-9801412266.",
};

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen pb-20">
            <div className="bg-muted/30 py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have questions or want to place an order? We'd love to hear from you.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                        <Input id="phone" placeholder="Your Phone Number" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="your@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                                </div>
                                <Button size="lg" className="w-full md:w-auto">Send Message</Button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Factory Location</h3>
                                        <p className="text-muted-foreground">
                                            Nandini Agro Industries Pvt. Ltd.<br />
                                            Omsatiya-2, Rupandehi, Nepal
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <p className="text-muted-foreground">+977-9801412266</p>
                                        <p className="text-muted-foreground text-sm">(Available 9 AM - 6 PM)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <p className="text-muted-foreground">cattlefeednepal@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-xl overflow-hidden border h-[300px] bg-muted relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.859664509063!2d83.4666!3d27.6915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQxJzI5LjQiTiA4M8KwMjcnNTkuOCJF!5e0!3m2!1sen!2snp!4v1634567890123!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Nandini Agro Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
