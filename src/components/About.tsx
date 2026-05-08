
"use client";

import React from 'react';

export function About() {
  return (
    <section id="story" className="bg-background py-32 px-4 md:px-12 lg:px-24">
      <div className="bg-card rounded-[3rem] p-12 md:p-24 lg:p-32 text-center max-w-7xl mx-auto border border-white/5 relative overflow-hidden group">
        {/* Subtle accent glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-accent/20 transition-all duration-1000" />
        
        <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-12 block font-bold opacity-60">
          Visual Arts Collective
        </span>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-5xl mx-auto leading-[0.95] tracking-tight mb-16">
          <span className="block mb-2">I am Harry Prambudy,</span>
          <span className="font-headline italic text-accent mr-4">a self-taught director.</span>
          <span className="block text-foreground/90 mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            I craft cinematic narratives through color, VFX, and human intuition.
          </span>
        </h2>

        <div className="max-w-3xl mx-auto border-t border-white/10 pt-16">
          <p className="text-foreground/60 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
            Over the last seven years, I have collaborated with leading production houses globally, from Berlin to Paris, creating visual works that challenge traditional storytelling and earn international acclaim at major film festivals.
          </p>
        </div>
      </div>
    </section>
  );
}
