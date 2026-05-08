"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ChatInterface } from '@/components/ChatInterface';
import { MapPin, Clock, Terminal, Globe } from 'lucide-react';

export default function InquiriesPage() {
  return (
    <main className="bg-background min-h-screen" suppressHydrationWarning>
      <Navigation />
      <div className="pt-40 px-6 md:px-12 lg:px-24">
        <header className="max-w-7xl mx-auto mb-24">
          <h1 className="text-7xl md:text-9xl font-headline italic mb-8">Inquiries.</h1>
          <p className="text-foreground/40 text-xl max-w-2xl leading-relaxed">
            Let's build something visionary. Reach out for commissions, collaborations, or studio briefings from our hub in Depok.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto mb-32">
          {/* Formal Briefing Section */}
          <div className="space-y-12">
            <div className="bg-card rounded-[3rem] p-12 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -mr-32 -mt-32 rounded-full" />
              <h3 className="text-3xl font-headline italic mb-8 relative z-10">Studio Briefing</h3>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-foreground/40 ml-1">Identity</label>
                    <Input suppressHydrationWarning placeholder="Full Name" className="bg-background/50 border-white/10 rounded-2xl h-16 px-6" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-foreground/40 ml-1">Terminal</label>
                    <Input suppressHydrationWarning placeholder="Email Address" className="bg-background/50 border-white/10 rounded-2xl h-16 px-6" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-foreground/40 ml-1">Subject</label>
                  <Input suppressHydrationWarning placeholder="Project Narrative Title" className="bg-background/50 border-white/10 rounded-2xl h-16 px-6" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-foreground/40 ml-1">Manifesto</label>
                  <Textarea suppressHydrationWarning placeholder="Describe your vision, timeline, and the desired narrative impact..." className="bg-background/50 border-white/10 rounded-[2rem] min-h-[200px] p-8" />
                </div>
                <Button suppressHydrationWarning className="w-full bg-primary text-background h-16 rounded-2xl font-bold uppercase tracking-[0.4em] text-[11px] hover:bg-accent transition-all duration-700 shadow-xl">
                  Transmit Proposal
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-12 px-12 py-8">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-white/5"><Clock className="w-4 h-4 text-accent" /></div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Availability</h4>
                  <p className="text-foreground/40 text-sm">Booking Q4 2026</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-white/5"><Globe className="w-4 h-4 text-accent" /></div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Node</h4>
                  <p className="text-foreground/40 text-sm">Depok, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Neural Interface Embedded */}
          <div className="flex flex-col gap-12">
            <div className="bg-secondary/20 rounded-[3rem] border border-white/5 flex flex-col overflow-hidden h-[750px] group transition-all duration-1000 hover:border-primary/30">
              <div className="px-10 pt-10 pb-6 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-[9px] text-accent uppercase tracking-[0.4em] font-bold">Node Activated</span>
                  </div>
                  <Terminal className="w-4 h-4 text-primary/40" />
                </div>
                <h3 className="text-3xl font-headline italic">Concierge AI Node.</h3>
                <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/20 font-bold mt-1">Direct Neural Interface</p>
              </div>
              <div className="flex-1 overflow-hidden">
                <ChatInterface isEmbedded />
              </div>
            </div>
            
            <div className="flex-1 bg-card rounded-[3rem] p-12 border border-white/5 flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/40 mb-12">Digital Archive Presence</h4>
                <div className="flex flex-col gap-8 text-5xl font-headline italic">
                  <a href="#" className="hover:text-primary transition-all hover:translate-x-4">Instagram</a>
                  <a href="#" className="hover:text-primary transition-all hover:translate-x-4">Behance</a>
                  <a href="#" className="hover:text-primary transition-all hover:translate-x-4">Vimeo</a>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/20 font-bold">
                  All rights reserved — Harpa Studio © 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
