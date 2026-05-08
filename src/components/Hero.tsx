
"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroVideo = PlaceHolderImages.find(img => img.id === 'hero-video');

  return (
    <section className="h-screen w-full p-4 md:p-6 relative">
      <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-zinc-900 border border-white/5">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src={heroVideo?.imageUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 overflow-hidden">
              <h1 className="text-[28vw] lg:text-[22vw] font-headline font-medium leading-[0.8] tracking-[-0.07em] text-foreground animate-pull-up relative">
                Harpa
                <span className="absolute top-[0.1em] -right-[0.1em] text-[0.3em] font-serif">*</span>
              </h1>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-8 mb-4 lg:mb-12 animate-fade-in [animation-delay:0.5s]">
              <p className="text-foreground/80 text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
                A worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential.
              </p>
              
              <button 
                suppressHydrationWarning
                className="group flex items-center justify-between bg-primary text-primary-foreground w-fit pr-1.5 pl-6 py-1.5 rounded-full gap-4 transition-all hover:gap-8 hover:bg-primary/90"
              >
                <span className="font-bold tracking-tight text-sm md:text-base">Join the lab</span>
                <div className="bg-background rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight className="text-primary w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
