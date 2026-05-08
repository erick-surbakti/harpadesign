
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const LAB_EXPERIMENTS = [
  { title: "Visual Experiments", img: "https://picsum.photos/seed/lab1/800/800" },
  { title: "Typography Lab", img: "https://picsum.photos/seed/lab2/800/1000" },
  { title: "AI Generated Visuals", img: "https://picsum.photos/seed/lab3/1000/800" },
  { title: "Motion Studies", img: "https://picsum.photos/seed/lab4/800/800" },
  { title: "Texture Exploration", img: "https://picsum.photos/seed/lab5/800/1000" },
  { title: "Color Research", img: "https://picsum.photos/seed/lab6/1000/1000" },
];

export default function LabPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <div className="pt-40 px-6 md:px-12 lg:px-24">
        <header className="max-w-7xl mx-auto mb-24">
          <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Experimental</span>
          <h1 className="text-7xl md:text-9xl font-headline italic mb-8">The Lab.</h1>
          <p className="text-foreground/40 text-xl max-w-2xl leading-relaxed">
            Where rules are broken and new visual languages are born. A creative playground for future concepts.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-32">
          {LAB_EXPERIMENTS.map((exp, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-card border border-white/5 mb-6">
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              </div>
              <h3 className="text-2xl font-headline italic text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
            </div>
          ))}
        </div>

        <section className="bg-primary/5 rounded-[3rem] p-16 md:p-24 text-center max-w-7xl mx-auto mb-32 border border-primary/10">
          <h2 className="text-4xl md:text-6xl font-headline italic mb-8">Unreleased Works & Future Concepts</h2>
          <p className="text-foreground/40 text-lg mb-12 max-w-2xl mx-auto">
            Glimpses into the future of Harpa's creative trajectory. Projects in development and raw ideas.
          </p>
          <button 
            suppressHydrationWarning
            className="bg-primary text-background px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all"
          >
            Enter Playground
          </button>
        </section>
      </div>
      <Footer />
    </main>
  );
}
