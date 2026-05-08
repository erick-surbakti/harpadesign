
"use client";

import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const CATEGORIES = [
  { id: 'posters', name: 'Posters', img: PlaceHolderImages.find(i => i.id === 'portfolio-posters')?.imageUrl },
  { id: 'album', name: 'Album Covers', img: PlaceHolderImages.find(i => i.id === 'portfolio-album')?.imageUrl },
  { id: 'motion', name: 'Motion Visuals', img: PlaceHolderImages.find(i => i.id === 'portfolio-motion')?.imageUrl },
  { id: 'ai', name: 'AI Experiments', img: "https://picsum.photos/seed/harpaai/800/800" },
  { id: 'journal', name: 'Studio Journal', img: "https://picsum.photos/seed/harpaj/800/1000" },
  { id: 'lab', name: 'Creative Lab', img: "https://picsum.photos/seed/harpal/800/800" },
];

export function Portfolio() {
  return (
    <section id="collective" className="bg-background py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Portfolio</span>
            <h2 className="text-5xl lg:text-6xl font-headline italic leading-none mb-6">Visual Collective</h2>
            <p className="text-foreground/60 text-lg">
              Exploring the boundaries between technology and traditional aesthetics.
            </p>
          </div>
          <button className="px-8 py-3 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all duration-300">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group cursor-pointer relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-headline italic text-foreground mb-4">{cat.name}</h3>
                <div className="w-12 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
