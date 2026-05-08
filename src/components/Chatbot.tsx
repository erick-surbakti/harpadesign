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
    <div className="fixed bottom-8 right-8 z-[300]">
      {/* Persisted Trigger Button */}
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 shadow-2xl group overflow-hidden border border-white/10 backdrop-blur-3xl relative",
          isOpen ? "bg-primary border-primary -rotate-90 scale-90" : "bg-card/40 hover:border-primary/50"
        )}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-background" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Cpu className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Sparkles className="absolute -top-1 -right-1 w-2.5 h-2.5 text-accent opacity-50 animate-pulse" />
          </div>
        )}
      </button>

      {/* Neural Interface Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] h-[450px] max-h-[70vh] bg-card/95 border border-white/10 rounded-[2rem] shadow-[0_50px_120px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-500 backdrop-blur-3xl">
          {/* Extremely Compact Header */}
          <div className="px-5 py-4 border-b border-white/5 bg-white/[0.01]">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                <span className="text-[6px] text-accent uppercase tracking-[0.5em] font-bold">Node Active</span>
              </div>
            </div>
            <h3 className="font-headline italic text-base text-foreground">Concierge.</h3>
          </div>

          <ChatInterface />
        </div>
      )}
    </div>
  );
}
