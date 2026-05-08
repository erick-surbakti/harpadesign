"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 mt-6 hidden md:block">
        <div className="bg-black/80 backdrop-blur-md rounded-full px-8 py-4 flex items-center gap-10 border border-white/10 shadow-2xl">
          <Link href="/" className="text-primary font-headline italic text-2xl mr-4 hover:scale-105 transition-transform">Harpa*</Link>
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-primary whitespace-nowrap relative group",
                  pathname.startsWith(item.href) ? "text-primary" : "text-foreground/50"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 transition-transform origin-left",
                  pathname.startsWith(item.href) ? "scale-x-100" : "group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 md:hidden flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link href="/" className="text-primary font-headline italic text-3xl">Harpa*</Link>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button 
              suppressHydrationWarning
              className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-md"
            >
              <Menu className="w-6 h-6 text-primary" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l border-white/5 w-full sm:w-[400px] p-0 flex flex-col">
            <div className="p-10 flex justify-between items-center border-b border-white/5">
              <span className="text-primary font-headline italic text-3xl">Menu.</span>
              <SheetClose asChild>
                <button suppressHydrationWarning className="p-2 hover:text-primary transition-colors">
                  <X className="w-8 h-8" />
                </button>
              </SheetClose>
            </div>
            
            <div className="flex-1 px-10 py-16 flex flex-col gap-12">
              {NAV_ITEMS.map((item) => (
                <SheetClose asChild key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-5xl font-headline italic transition-all",
                      pathname.startsWith(item.href) ? "text-primary translate-x-4" : "text-foreground/40 hover:text-foreground hover:translate-x-2"
                    )}
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
            </div>

            <div className="p-10 border-t border-white/5">
              <div className="flex flex-col gap-4">
                <span className="text-[9px] uppercase tracking-[0.4em] text-foreground/20 font-bold">Location</span>
                <p className="text-foreground/60 text-sm">Depok, Indonesia</p>
                <div className="w-full h-[1px] bg-white/5 my-4" />
                <p className="text-[9px] uppercase tracking-[0.4em] text-foreground/20 font-bold">© 2026 Harpa Studio</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
