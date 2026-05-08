"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
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
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-7xl px-6 mt-8 hidden md:block">
        <div className="bg-black/40 backdrop-blur-2xl rounded-full px-10 py-5 flex items-center justify-between border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-primary font-headline italic text-3xl hover:scale-105 transition-transform flex items-center gap-2">
              Harpa<span className="text-accent text-sm not-italic font-serif -mt-4">*</span>
            </Link>
            <div className="flex items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-primary whitespace-nowrap relative group",
                    pathname.startsWith(item.href) ? "text-primary" : "text-foreground/40"
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
          <div className="flex items-center gap-4 text-foreground/20 text-[9px] font-bold uppercase tracking-widest">
            <Globe className="w-3 h-3 text-accent" />
            <span>Depok, IDN</span>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-8 md:hidden flex justify-between items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent -z-10 h-32" />
        <Link href="/" className="text-primary font-headline italic text-3xl">
          Harpa<span className="text-accent text-xs not-italic font-serif">*</span>
        </Link>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button 
              suppressHydrationWarning
              className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-2xl"
            >
              <Menu className="w-6 h-6 text-primary" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-2xl border-l border-white/5 w-full p-0 flex flex-col">
            <SheetTitle className="sr-only">Harpa Studio Navigation Menu</SheetTitle>
            <div className="p-10 flex justify-between items-center border-b border-white/5">
              <span className="text-primary font-headline italic text-3xl">Menu.</span>
              <SheetClose asChild>
                <button suppressHydrationWarning className="p-2 hover:text-primary transition-colors">
                  <X className="w-8 h-8" />
                </button>
              </SheetClose>
            </div>
            
            <div className="flex-1 px-10 py-12 flex flex-col justify-center gap-10">
              {NAV_ITEMS.map((item) => (
                <SheetClose asChild key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-5xl font-headline italic transition-all block",
                      pathname.startsWith(item.href) ? "text-primary translate-x-4" : "text-foreground/30 hover:text-foreground hover:translate-x-2"
                    )}
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
            </div>

            <div className="p-10 border-t border-white/5 bg-white/[0.02]">
              <div className="flex flex-col gap-6">
                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-foreground/20 font-bold">Node Location</span>
                  <p className="text-foreground/60 text-sm flex items-center gap-2">
                    <Globe className="w-3 h-3 text-accent" />
                    Depok, Indonesia
                  </p>
                </div>
                <div className="w-full h-[1px] bg-white/5" />
                <p className="text-[8px] uppercase tracking-[0.4em] text-foreground/20 font-bold">© 2026 Harpa Studio — Digital Archive</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}