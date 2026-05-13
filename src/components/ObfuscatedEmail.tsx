"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ObfuscatedEmailProps {
  email: string; // The real email address
  className?: string;
  showIcon?: boolean;
}

export default function ObfuscatedEmail({ email, className }: ObfuscatedEmailProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Before hydration, render a bot-safe version
  if (!isMounted) {
    const [user, domain] = email.split("@");
    return (
      <span className={cn("cursor-default", className)}>
        {user} [at] {domain.replace(".", " [dot] ")}
      </span>
    );
  }

  // After hydration, render the real clickable link
  return (
    <a
      href={`mailto:${email}`}
      className={cn("hover:text-primary transition-colors", className)}
    >
      {email}
    </a>
  );
}
