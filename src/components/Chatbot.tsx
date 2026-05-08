
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Terminal, Cpu, Sparkles } from 'lucide-react';
import { aiCreativeAssistantChatbot } from '@/ai/flows/ai-creative-assistant-chatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Protocol initiated. This is the Harpa Neural Node. Brief me on your creative narrative or request studio-grade analysis.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-harpa-chat', handleOpenChat);
    return () => window.removeEventListener('open-harpa-chat', handleOpenChat);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await aiCreativeAssistantChatbot({ query: userMsg });
      setMessages(prev => [...prev, { role: 'assistant', content: response.response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection unstable. Neural interference detected. Please re-transmit." }]);
    } finally {
      setIsLoading(false);
    }
  };

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
        <div className="absolute bottom-24 right-0 w-[calc(100vw-5rem)] sm:w-[450px] h-[700px] max-h-[85vh] bg-card/95 border border-white/10 rounded-[3rem] shadow-[0_50px_120px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 fade-in duration-700 backdrop-blur-3xl">
          {/* Architecture Header */}
          <div className="px-10 py-10 border-b border-white/5 bg-white/[0.01]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
                <span className="text-[9px] text-accent uppercase tracking-[0.5em] font-bold">Active Protocol</span>
              </div>
              <span className="text-[8px] uppercase tracking-widest text-foreground/20 font-bold italic">Depok Node // v2.6.archive</span>
            </div>
            <h3 className="font-headline italic text-4xl text-foreground mb-2">Neural Concierge.</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-bold">Human Intuition x Neural Logic</p>
          </div>

          {/* Neural Data Stream (Messages) */}
          <ScrollArea className="flex-1 px-10 py-10 hide-scrollbar">
            <div className="space-y-12">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-1000",
                    msg.role === 'user' ? "items-end" : "items-start"
                  )}
                >
                  <div className="max-w-[85%]">
                    {msg.role === 'assistant' && (
                      <div className="flex items-center gap-2 mb-4">
                        <Terminal className="w-3 h-3 text-primary/40" />
                        <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-primary/30">Harpa Intelligence</span>
                      </div>
                    )}
                    <div
                      className={cn(
                        "text-lg leading-relaxed tracking-tight font-light",
                        msg.role === 'user'
                          ? "bg-primary/10 border border-white/10 text-primary px-6 py-4 rounded-[1.5rem] rounded-tr-none italic shadow-xl"
                          : "text-foreground/70"
                      )}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex flex-col gap-4 animate-pulse">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">Synthesizing Brief...</span>
                  </div>
                  <div className="w-32 h-[1px] bg-accent/20" />
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Transmission Input Area */}
          <div className="p-10 bg-black/30 border-t border-white/5">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <Input
                suppressHydrationWarning
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Brief the studio archive..."
                className="bg-transparent border-0 border-b border-white/10 rounded-none h-14 pl-0 pr-14 focus-visible:ring-0 focus:border-primary transition-all text-xl font-headline italic placeholder:text-foreground/10"
              />
              <Button
                suppressHydrationWarning
                type="submit"
                variant="ghost"
                disabled={!input.trim() || isLoading}
                className={cn(
                  "absolute right-0 w-12 h-12 rounded-full transition-all duration-700",
                  input.trim() ? "text-primary opacity-100 scale-100" : "opacity-0 scale-50"
                )}
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
            <div className="flex justify-between items-center mt-8 opacity-20 group">
              <p className="text-[8px] uppercase tracking-[0.4em] font-bold group-hover:text-primary transition-colors">Neural Interface</p>
              <p className="text-[8px] uppercase tracking-[0.4em] font-bold group-hover:text-accent transition-colors">Studio Protocol 2026</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
