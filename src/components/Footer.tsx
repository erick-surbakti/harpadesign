
"use client";

import React from 'react';
import { Instagram, Youtube, Twitter, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="inquiries" className="bg-card pt-32 pb-16 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 lg:gap-8 mb-32">
          <div className="lg:col-span-2">
            <h2 className="text-primary text-5xl font-headline italic mb-8">Harpa*</h2>
            <div className="flex items-center gap-2 text-foreground/30 text-xs uppercase tracking-widest font-bold mb-8">
              <MapPin className="w-3 h-3" />
              <span>Depok, Indonesia</span>
            </div>
            <p className="text-foreground/40 text-lg max-w-sm leading-relaxed mb-10">
              Crafting the future of visual narrative through technology and human intuition. A nexus for visionary storytellers.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all group">
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-primary text-[10px] uppercase tracking-[0.5em] mb-10 font-bold">Studio</h4>
            <ul className="space-y-5 text-sm text-foreground/50">
              <li><a href="/story" className="hover:text-primary transition-colors">Manifesto</a></li>
              <li><a href="/work" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="/lab" className="hover:text-primary transition-colors">Lab Experiments</a></li>
              <li><a href="/story" className="hover:text-primary transition-colors">Collective</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-primary text-[10px] uppercase tracking-[0.5em] mb-10 font-bold">Workshops</h4>
            <ul className="space-y-5 text-sm text-foreground/50">
              <li><a href="#" className="hover:text-primary transition-colors">Cinematography</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">VFX Pipeline</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Narrative Design</a></li>
              <li><a href="/toolkit" className="hover:text-primary transition-colors">AI Workflows</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-primary text-[10px] uppercase tracking-[0.5em] mb-10 font-bold">Newsletter</h4>
            <p className="text-foreground/40 text-sm mb-10 leading-relaxed max-w-xs">
              Subscribe to get the latest visual experiments, lab notes, and studio updates directly to your terminal.
            </p>
            <form className="group relative">
              <input
                type="email"
                placeholder="terminal@brief.com"
                className="bg-transparent border-b border-white/10 w-full py-5 text-foreground/90 outline-none focus:border-primary transition-colors pr-24 italic"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-5 text-primary text-xs uppercase tracking-[0.3em] font-bold hover:translate-x-2 transition-transform"
              >
                Transmit
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
            <p className="text-foreground/20 text-[10px] tracking-[0.4em] uppercase font-bold">© 2026 HARPA DESIGN STUDIO</p>
            <p className="text-foreground/20 text-[10px] tracking-[0.4em] uppercase font-bold">ALL RIGHTS RESERVED</p>
          </div>
          <p className="text-foreground/20 text-[10px] tracking-[0.4em] uppercase font-bold">
            DESIGNED FOR THE FUTURE — BUILT IN DEPOK
          </p>
        </div>
      </div>
    </footer>
  );
}
