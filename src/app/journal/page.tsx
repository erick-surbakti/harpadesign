"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const JOURNAL_ENTRIES = [
  { date: "MAR 2026", title: "The Future of AI in Graphic Design", category: "Essay" },
  { date: "FEB 2026", title: "Poster Breakdown: The Obsidian Sequence", category: "Process" },
  { date: "JAN 2026", title: "Notes on Ethereal Cinematography", category: "Design Notes" },
  { date: "DEC 2025", title: "Studio Updates: Paris Lab Opening", category: "Studio" },
  { date: "NOV 2025", title: "Visual Inspirations: 70s Sci-Fi", category: "Inspiration" },
];

export default function JournalPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <div className="pt-40 px-6 md:px-12 lg:px-24">
        <header className="max-w-7xl mx-auto mb-24">
          <h1 className="text-7xl md:text-9xl font-headline italic mb-8">Journal.</h1>
          <p className="text-foreground/40 text-xl max-w-2xl leading-relaxed">
            Personal essays, design notes, and studio updates from the heart of the collective.
          </p>
        </header>

        <div className="max-w-7xl mx-auto mb-32 divide-y divide-white/5">
          {JOURNAL_ENTRIES.map((entry, i) => (
            <div key={i} className="group py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:px-8 transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center gap-8 mb-4 md:mb-0">
                <span className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.4em]">{entry.date}</span>
                <h3 className="text-3xl md:text-5xl font-headline italic text-foreground group-hover:text-primary transition-colors">{entry.title}</h3>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-foreground/20 font-bold px-4 py-2 border border-white/5 rounded-full group-hover:border-primary/20 group-hover:text-primary transition-all">
                {entry.category}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
