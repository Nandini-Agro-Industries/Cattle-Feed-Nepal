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
    // Trailing slash added to match actual served URL
    canonical: 'https://www.cattlefeednepal.com/',
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
    // Removed unverifiable "Best" superlative; targets brand + local queries
    default: "Vanjula & Siddhartha Feed | Cattle Feed Manufacturers in Rupandehi, Nepal",
    template: "%s | Nandani Agro Industries - Cattle Feed Nepal"
  },
  description: "Nandani Agro Industries is the leading manufacturer of cattle feed in Nepal. Our premium brands Vanjula and Siddhartha are scientifically formulated for maximum productivity.",
  keywords: ["Cattle Feed Nepal", "Nandani Agro Industries", "Pashu Aahar Rupandehi", "Animal Feed Nepal", "Goat Feed", "Pig Feed", "Livestock Nutrition", "Vanjula", "Siddhartha", "Bypass Protein Cattle Feed Nepal", "Bakhra Ko Dana", "Cattle Feed Butwal"],
  authors: [{ name: "Nandani Agro Industries Pvt. Ltd." }],
  creator: "Nandani Agro Industries Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cattlefeednepal.com/",
    title: "Vanjula & Siddhartha Feed | Cattle Feed Manufacturers in Rupandehi, Nepal",
    // OG description now matches meta description for consistent Facebook sharing
    description: "Nandani Agro Industries is the leading manufacturer of cattle feed in Nepal. Our premium brands Vanjula and Siddhartha are scientifically formulated for maximum productivity.",
    siteName: "Nandani Agro Industries Pvt. Ltd.",
    images: [
      {
        url: "/images/vanjula-highpro.png",
        width: 1200,
        height: 630,
        alt: "Vanjula and Siddhartha cattle feed products by Nandani Agro Industries",
      },
    ],
  },
  // Twitter card removed: no verified @handle registered.
  // A twitter:card without twitter:site can render incorrectly when shared.
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
