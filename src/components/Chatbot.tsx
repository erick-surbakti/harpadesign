
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Minimize2, Terminal } from 'lucide-react';
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
    { role: 'assistant', content: 'Welcome to Harpa Studio. I am your Creative Concierge. How shall we refine your vision today?' }
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
      setMessages(prev => [...prev, { role: 'assistant', content: "Our systems are currently recalibrating for optimal output. Please initiate dialogue again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[300]">
      {/* Trigger Button - More like a high-end studio seal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-1000 shadow-[0_20px_60px_rgba(0,0,0,0.6)] group overflow-hidden border border-white/5",
          isOpen ? "bg-primary border-primary rotate-90" : "bg-card hover:border-primary/30"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-background" />
        ) : (
          <div className="relative flex items-center justify-center">
            <span className="font-headline italic text-2xl text-primary group-hover:scale-110 transition-transform">H*</span>
            <div className="absolute inset-0 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}
      </button>

      {/* Chat Panel - Redesigned to be "The Concierge" */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[calc(100vw-4rem)] sm:w-[450px] h-[700px] max-h-[85vh] bg-card/95 border border-white/10 rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 fade-in duration-700 backdrop-blur-3xl">
          {/* Header */}
          <div className="px-10 py-10 border-b border-white/5 bg-secondary/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-accent" />
                <span className="text-[9px] text-accent uppercase tracking-[0.5em] font-bold">Harpa Neural Node</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[8px] uppercase tracking-widest text-foreground/30 font-bold">Online</span>
              </div>
            </div>
            <h3 className="font-headline italic text-4xl text-foreground mb-1">Creative Concierge.</h3>
            <p className="text-[10px] text-foreground/30 uppercase tracking-[0.2em]">Crafting Narratives via Depok Hub v2.0</p>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-10 py-8 hide-scrollbar">
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
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Concierge Response —</span>
                    )}
                    <div
                      className={cn(
                        "text-lg leading-relaxed tracking-tight font-light",
                        msg.role === 'user'
                          ? "bg-primary/5 border border-white/10 text-primary px-6 py-4 rounded-3xl rounded-tr-none italic"
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
                  <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent">Synthesizing Vision...</span>
                  <div className="w-full h-[1px] bg-white/5 overflow-hidden">
                    <div className="w-full h-full bg-accent animate-[loading_2s_infinite]" />
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-10 bg-background/20 border-t border-white/5">
            <form onSubmit={handleSubmit} className="relative flex items-center group">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Brief the studio..."
                className="bg-transparent border-0 border-b border-white/10 rounded-none h-16 pl-0 pr-14 focus-visible:ring-0 focus:border-primary transition-all text-xl font-headline italic placeholder:text-foreground/10"
              />
              <Button
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
            <div className="flex justify-between items-center mt-6">
              <p className="text-[8px] uppercase tracking-[0.3em] text-foreground/20 font-bold">
                Harpa Intelligence Collective
              </p>
              <p className="text-[8px] uppercase tracking-[0.3em] text-foreground/20 font-bold">
                2026 Studio Node
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
