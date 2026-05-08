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
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

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
              className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-2xl"
            >
              <Menu className="w-5 h-5 text-primary" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-3xl border-l border-white/5 w-full p-0 flex flex-col">
            <SheetTitle className="sr-only">Studio Menu</SheetTitle>
            
            <div className="p-8 flex justify-end">
              <SheetClose asChild>
                <button suppressHydrationWarning className="p-2 hover:text-primary transition-colors">
                  <X className="w-8 h-8 text-foreground/20" />
                </button>
              </SheetClose>
            </div>
            
            <ScrollArea className="flex-1 px-10 pb-20">
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-5xl font-headline italic transition-all block py-2",
                        pathname.startsWith(item.href) ? "text-primary" : "text-foreground/20 hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
