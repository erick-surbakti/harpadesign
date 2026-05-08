
"use client";

import React from 'react';
import { Instagram, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="inquiries" className="bg-card pt-32 pb-16 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 lg:gap-8 mb-32">
          <div className="lg:col-span-2">
            <h2 className="text-primary text-5xl font-headline italic mb-8">Harpa*</h2>
            <p className="text-foreground/40 text-lg max-w-sm leading-relaxed mb-8">
              Crafting the future of visual narrative through technology and human intuition. A nexus for storytellers.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-primary text-[10px] uppercase tracking-[0.4em] mb-8 font-bold">Studio</h4>
            <ul className="space-y-4 text-sm text-foreground/50">
              <li><a href="#" className="hover:text-primary transition-colors">Manifesto</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lab Experiments</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Collective</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-primary text-[10px] uppercase tracking-[0.4em] mb-8 font-bold">Workshops</h4>
            <ul className="space-y-4 text-sm text-foreground/50">
              <li><a href="#" className="hover:text-primary transition-colors">Cinematography</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">VFX Pipeline</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Narrative Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Workflows</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-primary text-[10px] uppercase tracking-[0.4em] mb-8 font-bold">Newsletter</h4>
            <p className="text-foreground/40 text-sm mb-8 leading-relaxed">
              Subscribe to get latest visual experiments and lab notes directly to your inbox.
            </p>
            <form className="group relative">
              <input
                type="email"
                placeholder="email@address.com"
                className="bg-transparent border-b border-white/10 w-full py-4 text-foreground/90 outline-none focus:border-primary transition-colors pr-24"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-4 text-primary text-xs uppercase tracking-widest font-bold hover:translate-x-1 transition-transform"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p className="text-foreground/20 text-[10px] tracking-widest uppercase">© 2026 HARPA DESIGN STUDIO</p>
            <p className="text-foreground/20 text-[10px] tracking-widest uppercase">ALL RIGHTS RESERVED</p>
          </div>
          <p className="text-foreground/20 text-[10px] tracking-widest uppercase font-bold">
            DESIGNED IN PARIS — BUILT GLOBALLY
          </p>
        </div>
      </div>
    </footer>
  );
}
