"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Terminal, Cpu } from 'lucide-react';
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
    { role: 'assistant', content: 'Neural node online. I am the Harpa Creative Concierge. Brief me on your vision or request studio analysis.' }
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
      setMessages(prev => [...prev, { role: 'assistant', content: "Neural interference detected. Please re-transmit your query." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[300]">
      {/* Trigger Button - Floating High-End Seal */}
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group overflow-hidden border border-white/10 backdrop-blur-xl",
          isOpen ? "bg-primary border-primary -rotate-90 scale-90" : "bg-card/80 hover:border-primary/50"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-background" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Cpu className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}
      </button>

      {/* Chat Panel - Minimalist Glass Architecture */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[calc(100vw-4rem)] sm:w-[420px] h-[650px] max-h-[80vh] bg-card/90 border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-500 backdrop-blur-2xl">
          {/* Header */}
          <div className="px-8 py-8 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-[8px] text-accent uppercase tracking-[0.4em] font-bold">Harpa Neural Protocol</span>
              </div>
              <span className="text-[8px] uppercase tracking-widest text-foreground/20 font-bold italic">Depok Hub v2.5</span>
            </div>
            <h3 className="font-headline italic text-3xl text-foreground">Creative Concierge.</h3>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-8 py-8 hide-scrollbar">
            <div className="space-y-10">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-700",
                    msg.role === 'user' ? "items-end" : "items-start"
                  )}
                >
                  <div className="max-w-[90%]">
                    {msg.role === 'assistant' && (
                      <div className="flex items-center gap-2 mb-3">
                        <Terminal className="w-3 h-3 text-primary/50" />
                        <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-primary/40">Transmission Received</span>
                      </div>
                    )}
                    <div
                      className={cn(
                        "text-base leading-relaxed tracking-tight font-light",
                        msg.role === 'user'
                          ? "bg-primary/5 border border-white/10 text-primary px-5 py-3 rounded-2xl rounded-tr-none italic"
                          : "text-foreground/60"
                      )}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex flex-col gap-3 animate-pulse">
                  <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-accent">Synthesizing Narrative...</span>
                  <div className="w-24 h-[1px] bg-accent/30" />
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-8 bg-black/20 border-t border-white/5">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <Input
                suppressHydrationWarning
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message the archive..."
                className="bg-transparent border-0 border-b border-white/10 rounded-none h-12 pl-0 pr-12 focus-visible:ring-0 focus:border-primary transition-all text-lg font-headline italic placeholder:text-foreground/10"
              />
              <Button
                suppressHydrationWarning
                type="submit"
                variant="ghost"
                disabled={!input.trim() || isLoading}
                className={cn(
                  "absolute right-0 w-10 h-10 rounded-full transition-all duration-500",
                  input.trim() ? "text-primary opacity-100" : "opacity-0"
                )}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
            <div className="flex justify-between items-center mt-6 opacity-20">
              <p className="text-[7px] uppercase tracking-[0.3em] font-bold">Harpa Intelligence Node</p>
              <p className="text-[7px] uppercase tracking-[0.3em] font-bold">2026 Archive Access</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
