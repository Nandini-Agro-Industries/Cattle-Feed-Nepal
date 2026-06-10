"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import ObfuscatedEmail from "./ObfuscatedEmail";

type NavLink = {
  name: string;
  href?: string;
  subLinks?: { name: string; href: string }[];
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { 
    name: "Tools", 
    subLinks: [
      { name: "Feed Calculator", href: "/tools/feed-calculator" },
      { name: "Profit Calculator", href: "/tools/profit-calculator" },
    ]
  },
  { name: "Contact", href: "/contact" },
  { name: "Become a Dealer", href: "/become-dealer" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-2"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-20 w-48 md:h-28 md:w-72">
            <Image
              src="/logo/logo.png"
              alt="Nandani Agro Industries Pvt. Ltd. Logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 192px, 288px"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href ? (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ) : (
              <div key={link.name} className="relative group">
                <span className="text-sm font-medium hover:text-primary transition-colors cursor-pointer flex items-center gap-1 py-4">
                  {link.name}
                  <ChevronDown className="h-4 w-4" />
                </span>
                <div className="absolute top-full left-0 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
                  {link.subLinks?.map((subLink) => (
                    <Link
                      key={subLink.name}
                      href={subLink.href}
                      className="px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
          <Button asChild className="rounded-full px-6">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8 pl-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="relative h-24 w-48">
                    <Image
                      src="/logo/logo.png"
                      alt="Nandani Agro Industries Pvt. Ltd. Logo"
                      fill
                      priority
                      className="object-contain"
                      sizes="192px"
                    />
                  </div>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    link.href ? (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <div key={link.name} className="flex flex-col gap-2">
                        <span className="text-lg font-medium text-foreground">{link.name}</span>
                        <div className="flex flex-col gap-2 pl-4 border-l-2 ml-2">
                          {link.subLinks?.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="text-base text-muted-foreground hover:text-primary transition-colors"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </nav>
                <div className="mt-auto border-t pt-6 flex flex-col gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+977-9801412266</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <ObfuscatedEmail email="cattlefeednepal@gmail.com" />
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Omsatiya-2, Rupandehi, Nepal</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
