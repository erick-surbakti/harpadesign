"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Portfolio } from '@/components/Portfolio';
import { Badge } from '@/components/ui/badge';

const WORK_CATEGORIES = [
  "Posters", "Album Covers", "Editorial", "Typography", 
  "Brand Identity", "Campaigns", "Motion Posters", "Art Direction",
  "Merchandise", "Packaging", "Visual Systems"
];

export default function WorkPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <div className="pt-40 px-6 md:px-12 lg:px-24">
        <header className="max-w-7xl mx-auto mb-20">
          <h1 className="text-7xl md:text-9xl font-headline italic mb-8">Portfolio.</h1>
          <div className="flex flex-wrap gap-3 max-w-4xl">
            {WORK_CATEGORIES.map(cat => (
              <Badge key={cat} variant="outline" className="px-4 py-1 border-white/10 text-foreground/40 hover:text-primary hover:border-primary cursor-pointer transition-all">
                {cat}
              </Badge>
            ))}
          </div>
        </header>
        
        <Portfolio />
        
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-[2.5rem] p-12 border border-white/5">
              <h3 className="text-3xl font-headline italic mb-6">Featured Projects</h3>
              <p className="text-foreground/40 mb-8">High-impact collaborations and award-winning narratives.</p>
              <button className="text-primary text-xs uppercase tracking-widest font-bold">Explore Featured</button>
            </div>
            <div className="bg-card rounded-[2.5rem] p-12 border border-white/5">
              <h3 className="text-3xl font-headline italic mb-6">Project Archive</h3>
              <p className="text-foreground/40 mb-8">A look back at our evolution through experimental client work.</p>
              <button className="text-primary text-xs uppercase tracking-widest font-bold">View Archive</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
