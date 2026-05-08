
"use client";

import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const FEATURE_CARDS = [
  {
    id: 1,
    type: 'video',
    videoUrl: PlaceHolderImages.find(img => img.id === 'feature-video-1')?.imageUrl,
    title: "Your creative canvas."
  },
  {
    id: 2,
    type: 'content',
    num: "01",
    icon: PlaceHolderImages.find(img => img.id === 'feature-icon-1')?.imageUrl,
    title: "Project Storyboard",
    items: ["Frame-by-frame planning", "Dynamic moodboards", "Shot list generation", "Sequence mapping"]
  },
  {
    id: 3,
    type: 'content',
    num: "02",
    icon: PlaceHolderImages.find(img => img.id === 'feature-icon-2')?.imageUrl,
    title: "Smart Critiques",
    items: ["AI-driven visual analysis", "Contextual creative notes", "Adobe Suite integration"]
  },
  {
    id: 4,
    type: 'content',
    num: "03",
    icon: PlaceHolderImages.find(img => img.id === 'feature-icon-3')?.imageUrl,
    title: "Immersion Capsule",
    items: ["Notification silencing", "Ambient soundscapes", "Focus schedule syncing"]
  }
];

export function Features() {
  return (
    <section id="programs" className="bg-background py-32 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground max-w-2xl mb-4">
          Studio-grade workflows for visionary creators.
        </h2>
        <p className="text-foreground/40 text-lg md:text-xl italic">
          Built for pure vision. Powered by art.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {FEATURE_CARDS.map((card) => (
          <div
            key={card.id}
            className={`group relative rounded-[2.5rem] overflow-hidden h-[540px] transition-all duration-500 hover:-translate-y-2 ${
              card.type === 'video' ? 'bg-black' : 'bg-card p-10 border border-white/10 flex flex-col'
            }`}
          >
            {card.type === 'video' ? (
              <>
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  src={card.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="mt-auto relative z-10 p-10">
                  <h3 className="text-2xl font-medium text-foreground">{card.title}</h3>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <img src={card.icon} alt="" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-primary/30 font-mono text-sm font-bold">{card.num}</span>
                </div>
                
                <h3 className="text-2xl font-medium text-foreground mb-8">{card.title}</h3>
                
                <ul className="space-y-5 mb-auto">
                  {card.items?.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group/item">
                      <div className="bg-primary/10 rounded-full p-1 mt-0.5 group-hover/item:bg-primary transition-colors">
                        <Check className="text-primary w-3.5 h-3.5 group-hover/item:text-background" />
                      </div>
                      <span className="text-foreground/60 text-sm md:text-base group-hover/item:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-12 flex items-center gap-3 text-primary text-sm font-bold tracking-widest uppercase group-hover:gap-5 transition-all">
                  Details
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
