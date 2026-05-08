"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, Terminal, Sparkles } from 'lucide-react';
import { aiCreativeAssistantChatbot } from '@/ai/flows/ai-creative-assistant-chatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

interface ChatInterfaceProps {
  className?: string;
  isEmbedded?: boolean;
}

export function ChatInterface({ className, isEmbedded = false }: ChatInterfaceProps) {
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
  }, [messages]);

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
    <div className={cn("flex flex-col h-full", className)}>
      {/* Neural Data Stream */}
      <ScrollArea className="flex-1 px-6 py-6 md:px-10 md:py-10 hide-scrollbar">
        <div className="space-y-12">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-1000",
                msg.role === 'user' ? "items-end" : "items-start"
              )}
            >
              <div className="max-w-[90%] md:max-w-[85%]">
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
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">Synthesizing...</span>
              </div>
              <div className="w-32 h-[1px] bg-accent/20" />
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      {/* Transmission Input Area */}
      <div className={cn("p-6 md:p-10 border-t border-white/5", isEmbedded ? "bg-white/[0.01]" : "bg-black/30")}>
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <Input
            suppressHydrationWarning
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Transmit briefing..."
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
        <div className="flex justify-between items-center mt-8 opacity-20">
          <p className="text-[8px] uppercase tracking-[0.4em] font-bold">Neural Interface</p>
          <p className="text-[8px] uppercase tracking-[0.4em] font-bold italic">Depok Node // v2.6</p>
        </div>
      </div>
    </div>
  );
}
