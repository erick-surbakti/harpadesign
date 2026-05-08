
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

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
            Let's build something visionary. Reach out for commissions, collaborations, or studio visits to our base in Indonesia.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto mb-32">
          <div className="space-y-12">
            <div className="bg-card rounded-[2.5rem] p-12 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -mr-32 -mt-32 rounded-full" />
              <h3 className="text-2xl font-headline italic mb-8 relative z-10">Commission Request</h3>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" className="bg-background border-white/10 rounded-xl h-14" />
                  <Input placeholder="Email Address" className="bg-background border-white/10 rounded-xl h-14" />
                </div>
                <Input placeholder="Project Title" className="bg-background border-white/10 rounded-xl h-14" />
                <Textarea placeholder="Describe your vision, timeline, and budget..." className="bg-background border-white/10 rounded-2xl min-h-[180px]" />
                <Button className="w-full bg-primary text-background h-14 rounded-xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-accent transition-all duration-500">
                  Submit Proposal
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-8 px-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-4">Availability</h4>
                <p className="text-foreground/40 text-sm">Booking for Q4 2026</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-4">Location</h4>
                <p className="text-foreground/40 text-sm">Depok, Indonesia / Global Remote</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="bg-secondary/30 rounded-[2.5rem] p-12 border border-white/5 flex flex-col items-center text-center group cursor-pointer hover:border-accent/30 transition-all duration-700" onClick={handleTriggerChat}>
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 relative">
                <Sparkles className="w-10 h-10 text-accent" />
                <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-headline italic mb-4">Creative Assistant AI</h3>
              <p className="text-foreground/40 mb-10 max-w-xs leading-relaxed">
                Receive instant project feedback, creative concept brainstorming, and studio logistics 24/7.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full px-10 border-white/10 hover:border-accent hover:text-accent uppercase tracking-widest text-[9px] font-bold h-12"
              >
                Initiate Dialogue
              </Button>
            </div>
            
            <div className="flex-1 bg-card rounded-[2.5rem] p-12 border border-white/5 flex flex-col justify-end">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-foreground/20 mb-8">Digital Presence</h4>
              <div className="flex flex-col gap-6 text-4xl font-headline italic">
                <a href="#" className="hover:text-primary transition-all hover:translate-x-2">Instagram</a>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-2">Behance</a>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-2">Vimeo</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
