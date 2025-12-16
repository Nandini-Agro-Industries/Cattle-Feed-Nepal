import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nandini Agro Industries | Premium Animal Feed in Nepal",
    template: "%s | Nandini Agro Industries"
  },
  description: "Leading manufacturer of high-quality cattle, goat, and pig feed in Nepal. Brands: Vanjula, Siddhartha. Scientifically formulated for maximum productivity.",
  keywords: ["Animal Feed", "Cattle Feed", "Goat Feed", "Pig Feed", "Nepal", "Nandini Agro", "Vanjula", "Siddhartha", "Livestock Nutrition"],
  authors: [{ name: "Nandini Agro Industries" }],
  creator: "Nandini Agro Industries",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nandiniagro.com",
    title: "Nandini Agro Industries | Premium Animal Feed in Nepal",
    description: "Scientifically formulated feed for healthier livestock and higher yields.",
    siteName: "Nandini Agro Industries",
    images: [
      {
        url: "/images/vanjula-highpro.png", // Using a product image as OG image for now
        width: 1200,
        height: 630,
        alt: "Nandini Agro Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandini Agro Industries",
    description: "Premium Animal Feed Manufacturers in Nepal.",
    images: ["/images/vanjula-highpro.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
