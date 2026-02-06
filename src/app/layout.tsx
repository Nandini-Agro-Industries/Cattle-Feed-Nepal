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
  metadataBase: new URL("https://www.cattlefeednepal.com"),
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "12xPuXV7UMwk82v3iV7LYOV03ssuJFCA12nv91S0Zeg",
  },
  title: {
    default: "Nandani Agro Industries Pvt. Ltd. | Premium Animal Feed in Nepal",
    template: "%s | Nandani Agro Industries Pvt. Ltd."
  },
  description: "Leading manufacturer of high-quality cattle, goat, and pig feed in Nepal. Brands: Vanjula, Siddhartha. Scientifically formulated for maximum productivity.",
  keywords: ["Animal Feed", "Cattle Feed", "Goat Feed", "Pig Feed", "Nepal", "Nandani Agro", "Vanjula", "Siddhartha", "Livestock Nutrition"],
  authors: [{ name: "Nandani Agro Industries Pvt. Ltd." }],
  creator: "Nandani Agro Industries Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cattlefeednepal.com",
    title: "Nandani Agro Industries Pvt. Ltd. | Premium Animal Feed in Nepal",
    description: "Scientifically formulated feed for healthier livestock and higher yields.",
    siteName: "Nandani Agro Industries Pvt. Ltd.",
    images: [
      {
        url: "/images/vanjula-highpro.png", // Using a product image as OG image for now
        width: 1200,
        height: 630,
        alt: "Nandani Agro Industries Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandani Agro Industries Pvt. Ltd.",
    description: "Premium Animal Feed Manufacturers in Nepal.",
    images: ["/images/vanjula-highpro.png"],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/favicon/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/favicon/android-chrome-512x512.png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
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
        <main className="grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
