"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ChatInterface } from '@/components/ChatInterface';
import { Clock, Terminal, Globe, ArrowRight } from 'lucide-react';

export default function InquiriesPage() {
  const handleOpenChat = () => {
    window.dispatchEvent(new CustomEvent('open-harpa-chat'));
  };

  return (
    <main className="bg-background min-h-screen" suppressHydrationWarning>
      <Navigation />
      <div className="pt-40 px-6 md:px-12 lg:px-24">
        <header className="max-w-7xl mx-auto mb-20">
          <h1 className="text-7xl md:text-9xl font-headline italic mb-8">Inquiries.</h1>
          <p className="text-foreground/40 text-xl max-w-2xl leading-relaxed">
            Let's build something visionary. Reach out for commissions, collaborations, or studio briefings from our hub in Depok, Indonesia.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto mb-32">
          {/* Formal Briefing Section */}
          <div className="space-y-8">
            <div className="bg-card rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -mr-32 -mt-32 rounded-full" />
              <h3 className="text-2xl font-headline italic mb-8 relative z-10">Studio Briefing</h3>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-foreground/40 ml-1">Identity</label>
                    <Input suppressHydrationWarning placeholder="Full Name" className="bg-background/50 border-white/10 rounded-2xl h-14 px-6" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-foreground/40 ml-1">Terminal</label>
                    <Input suppressHydrationWarning placeholder="Email Address" className="bg-background/50 border-white/10 rounded-2xl h-14 px-6" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-foreground/40 ml-1">Subject</label>
                  <Input suppressHydrationWarning placeholder="Project Narrative Title" className="bg-background/50 border-white/10 rounded-2xl h-14 px-6" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-foreground/40 ml-1">Manifesto</label>
                  <Textarea suppressHydrationWarning placeholder="Describe your vision..." className="bg-background/50 border-white/10 rounded-[1.5rem] min-h-[150px] p-6" />
                </div>
                <Button suppressHydrationWarning className="w-full bg-primary text-background h-14 rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-accent transition-all duration-700 shadow-xl">
                  Transmit Proposal
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-8 px-8 py-4">
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-white/5"><Clock className="w-3.5 h-3.5 text-accent" /></div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-widest font-bold text-accent mb-1">Availability</h4>
                  <p className="text-foreground/40 text-xs">Booking Q4 2026</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-white/5"><Globe className="w-3.5 h-3.5 text-accent" /></div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-widest font-bold text-accent mb-1">Node</h4>
                  <p className="text-foreground/40 text-xs">Depok, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Neural Interface */}
          <div className="flex flex-col gap-8">
            <div className="bg-secondary/20 rounded-[2.5rem] border border-white/5 flex flex-col overflow-hidden h-[500px] group transition-all duration-1000 hover:border-primary/30">
              <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    <span className="text-[8px] text-accent uppercase tracking-[0.4em] font-bold">Node Activated</span>
                  </div>
                  <Terminal className="w-3.5 h-3.5 text-primary/40" />
                </div>
                <h3 className="text-2xl font-headline italic">Concierge AI.</h3>
                <p className="text-[8px] uppercase tracking-[0.2em] text-foreground/20 font-bold mt-1">Direct Neural Interface</p>
              </div>
              <div className="flex-1 overflow-hidden">
                <ChatInterface isEmbedded />
              </div>
            </div>
            
            <div className="bg-card rounded-[2.5rem] p-10 border border-white/5 flex flex-col justify-between relative h-[180px] group cursor-pointer overflow-hidden" onClick={handleOpenChat}>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-primary/40 mb-4">Neural Protocol</h4>
                  <p className="text-2xl font-headline italic leading-tight">Need assistance? <br/>Open studio node.</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-background transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
