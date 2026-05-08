
"use client";

import React from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { name: "Our story", href: "#story" },
  { name: "Collective", href: "#collective" },
  { name: "Workshops", href: "#workshops" },
  { name: "Programs", href: "#programs" },
  { name: "Inquiries", href: "#inquiries" },
];

export function Navigation() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 md:px-0">
      <div className="bg-black/80 backdrop-blur-md rounded-b-3xl px-6 py-4 flex items-center gap-6 md:gap-10 border-x border-b border-white/10 shadow-2xl">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors whitespace-nowrap"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
