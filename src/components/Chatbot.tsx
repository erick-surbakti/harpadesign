"use client";

import React, { useState, useEffect } from 'react';
import { X, Cpu, Sparkles } from 'lucide-react';
import { ChatInterface } from './ChatInterface';
import { cn } from '@/lib/utils';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-harpa-chat', handleOpenChat);
    return () => window.removeEventListener('open-harpa-chat', handleOpenChat);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-[300]">
      {/* Persisted Trigger Button */}
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-[2rem] flex items-center justify-center transition-all duration-700 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group overflow-hidden border border-white/10 backdrop-blur-2xl relative",
          isOpen ? "bg-primary border-primary -rotate-90 scale-90" : "bg-card/40 hover:border-primary/50"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-background" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Cpu className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-accent opacity-50 animate-pulse" />
          </div>
        )}
      </button>

      {/* Neural Interface Panel */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[calc(100vw-5rem)] sm:w-[400px] h-[600px] max-h-[80vh] bg-card/95 border border-white/10 rounded-[2.5rem] shadow-[0_50px_120px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-500 backdrop-blur-3xl">
          {/* Header */}
          <div className="px-8 py-8 border-b border-white/5 bg-white/[0.01]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                <span className="text-[8px] text-accent uppercase tracking-[0.5em] font-bold">Active Protocol</span>
              </div>
              <span className="text-[7px] uppercase tracking-widest text-foreground/20 font-bold italic">v2.6.archive</span>
            </div>
            <h3 className="font-headline italic text-3xl text-foreground mb-1">Neural Concierge.</h3>
            <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/30 font-bold">Studio Interface</p>
          </div>

          <ChatInterface />
        </div>
      )}
    </div>
  );
}
