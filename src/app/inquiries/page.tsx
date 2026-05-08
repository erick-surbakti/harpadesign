"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function InquiriesPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <div className="pt-40 px-6 md:px-12 lg:px-24">
        <header className="max-w-7xl mx-auto mb-24">
          <h1 className="text-7xl md:text-9xl font-headline italic mb-8">Inquiries.</h1>
          <p className="text-foreground/40 text-xl max-w-2xl leading-relaxed">
            Let's build something visionary. Reach out for commissions, collaborations, or studio visits.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto mb-32">
          <div className="space-y-12">
            <div className="bg-card rounded-[2.5rem] p-12 border border-white/5">
              <h3 className="text-2xl font-headline italic mb-6">Commission Request</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Full Name" className="bg-background border-white/10 rounded-xl h-14" />
                  <Input placeholder="Email Address" className="bg-background border-white/10 rounded-xl h-14" />
                </div>
                <Input placeholder="Project Title" className="bg-background border-white/10 rounded-xl h-14" />
                <Textarea placeholder="Describe your vision..." className="bg-background border-white/10 rounded-2xl min-h-[150px]" />
                <Button className="w-full bg-primary text-background h-14 rounded-xl font-bold uppercase tracking-widest text-xs">
                  Submit Proposal
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-8 px-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-4">Availability</h4>
                <p className="text-foreground/40 text-sm">Booking for Q3 2026</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-4">Location</h4>
                <p className="text-foreground/40 text-sm">Paris / Global Remote</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-primary/5 rounded-[2.5rem] p-12 border border-primary/10 flex flex-col items-center text-center">
              <h3 className="text-3xl font-headline italic mb-6">Creative Assistant AI</h3>
              <p className="text-foreground/40 mb-8 max-w-xs">
                Have quick questions about our process, pricing, or portfolio? Our AI assistant is here to help 24/7.
              </p>
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center animate-pulse mb-8">
                <div className="w-12 h-12 bg-primary rounded-full" />
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-primary/60">Toggle chat below to start</p>
            </div>
            
            <div className="mt-12 flex flex-col gap-6 items-end">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">Social Channels</h4>
              <div className="flex gap-8 text-2xl font-headline italic">
                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="hover:text-primary transition-colors">Behance</a>
                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Chatbot />
      <Footer />
    </main>
  );
}
