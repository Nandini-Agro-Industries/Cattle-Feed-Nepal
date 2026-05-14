import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#450a0a", // Matches the primary color oklch(0.45 0.15 140)
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cattlefeednepal.com"),
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
  other: {
    'preconnect': 'https://images.unsplash.com',
    'dns-prefetch': 'https://images.unsplash.com',
  },
  title: {
    default: "Cattle Feed Manufacturers in Nepal | Nandani Agro Industries",
    template: "%s | Nandani Agro"
  },
  description: "Nandani Agro Industries is Nepal's leading cattle feed manufacturer. Our premium brands Vanjula and Siddhartha are formulated for maximum productivity.",
  authors: [{ name: "Nandani Agro Industries Pvt. Ltd." }],
  creator: "Nandani Agro Industries Pvt. Ltd.",
  keywords: [
    "Cattle Feed Nepal",
    "Nandani Agro Industries",
    "Nandini Agro Industries",
    "Vanjula Pashu Aahar",
    "Siddhartha Cattle Feed",
    "Dairy Cattle Nutrition",
    "Goat Feed Nepal",
    "Pig Feed Nepal",
    "Rupandehi Feed Manufacturer"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cattlefeednepal.com/",
    title: "Cattle Feed Manufacturers in Nepal | Nandani Agro Industries",
    // OG description now matches meta description for consistent Facebook sharing
    description: "Nandani Agro Industries is Nepal's leading cattle feed manufacturer. Our premium brands Vanjula and Siddhartha are formulated for maximum productivity.",
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
        className={`${geistSans.variable} antialiased flex flex-col min-h-screen`}
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
