"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { name: "Story", href: "/story" },
  { name: "Work", href: "/work" },
  { name: "Lab", href: "/lab" },
  { name: "Toolkit", href: "/toolkit" },
  { name: "Journal", href: "/journal" },
  { name: "Inquiries", href: "/inquiries" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 md:px-0 mt-6">
      <div className="bg-black/80 backdrop-blur-md rounded-full px-8 py-4 flex items-center gap-8 md:gap-12 border border-white/10 shadow-2xl">
        <Link href="/" className="text-primary font-headline italic text-xl mr-4">Harpa*</Link>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-primary whitespace-nowrap",
              pathname.startsWith(item.href) ? "text-primary" : "text-foreground/50"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
