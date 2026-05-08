"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { About } from '@/components/About';

export default function StoryPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <div className="pt-32">
        <About />
        
        <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold block mb-8">01 / Manifesto</span>
            <h2 className="text-5xl font-headline italic mb-12">Art is the only <br/>honest feedback.</h2>
            <p className="text-foreground/50 text-xl leading-relaxed font-light mb-8">
              We believe in technology as an extension of the soul, not a replacement for it. Harpa exists to bridge the gap between digital precision and human imperfection.
            </p>
          </div>
          
          <div className="space-y-16">
            <div>
              <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Creative Philosophy</span>
              <p className="text-foreground/40 leading-relaxed">
                Visual direction is guided by the tension between order and chaos. Every frame is a study of light, every sequence a journey through color.
              </p>
            </div>
            <div>
              <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Visual Direction</span>
              <p className="text-foreground/40 leading-relaxed">
                Cinematic, ethereal, and deeply personal. We lean into the textures of film and the possibilities of VFX to create new worlds.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card py-32 px-6 md:px-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-6xl md:text-8xl font-headline italic text-primary/10 mb-12">The Archive</h3>
            <p className="text-foreground/30 text-lg max-w-2xl mx-auto">
              A repository of inspirations, behind-the-scenes moments, and the visual DNA that forms Harpa Studio.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
