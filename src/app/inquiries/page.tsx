
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Sparkles, Terminal, MapPin, Clock } from 'lucide-react';

export default function InquiriesPage() {
  const handleTriggerChat = () => {
    window.dispatchEvent(new CustomEvent('open-harpa-chat'));
  };

  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <div className="pt-40 px-6 md:px-12 lg:px-24">
        <header className="max-w-7xl mx-auto mb-24">
          <h1 className="text-7xl md:text-9xl font-headline italic mb-8">Inquiries.</h1>
          <p className="text-foreground/40 text-xl max-w-2xl leading-relaxed">
            Let's build something visionary. Reach out for commissions, collaborations, or studio briefings from our hub in Depok.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto mb-32">
          <div className="space-y-12">
            <div className="bg-card rounded-[3rem] p-12 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -mr-32 -mt-32 rounded-full" />
              <h3 className="text-3xl font-headline italic mb-8 relative z-10">Studio Briefing</h3>
              <form className="space-y-8 relative z-10">
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
                <div className="p-2 rounded-lg bg-white/5"><MapPin className="w-4 h-4 text-accent" /></div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Location</h4>
                  <p className="text-foreground/40 text-sm">Depok, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="bg-secondary/20 rounded-[3rem] p-12 border border-white/5 flex flex-col items-center text-center group cursor-pointer hover:border-primary/30 transition-all duration-1000" onClick={handleTriggerChat}>
              <div className="w-24 h-24 bg-primary/5 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-1000 relative">
                <Terminal className="w-10 h-10 text-primary" />
                <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-4xl font-headline italic mb-6">Concierge AI Node.</h3>
              <p className="text-foreground/40 mb-12 max-w-sm leading-relaxed text-lg font-light">
                Initiate an automated creative briefing for instant concept feedback, project logistics, and studio-grade analysis.
              </p>
              <Button 
                variant="outline" 
                suppressHydrationWarning
                className="rounded-full px-12 border-white/10 hover:border-primary hover:text-primary uppercase tracking-[0.3em] text-[10px] font-bold h-14 transition-all"
              >
                Access Neural Interface
              </Button>
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
