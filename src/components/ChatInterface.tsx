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
      <ScrollArea className="flex-1 px-6 py-6 md:px-8 md:py-8 hide-scrollbar">
        <div className="space-y-6">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-700",
                msg.role === 'user' ? "items-end" : "items-start"
              )}
            >
              <div className="max-w-[92%] md:max-w-[85%]">
                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-2.5 h-2.5 text-primary/40" />
                    <span className="text-[7px] uppercase tracking-[0.4em] font-bold text-primary/30">Harpa Intel</span>
                  </div>
                )}
                <div
                  className={cn(
                    "text-sm leading-relaxed tracking-tight font-light",
                    msg.role === 'user'
                      ? "bg-primary/10 border border-white/5 text-primary px-4 py-3 rounded-2xl rounded-tr-none italic"
                      : "text-foreground/70"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex flex-col gap-2 animate-pulse">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-accent" />
                <span className="text-[7px] uppercase tracking-[0.5em] font-bold text-accent">Synthesizing...</span>
              </div>
              <div className="w-16 h-[1px] bg-accent/20" />
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      {/* Transmission Input Area */}
      <div className={cn("p-6 md:p-8 border-t border-white/5", isEmbedded ? "bg-white/[0.01]" : "bg-black/30")}>
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <Input
            suppressHydrationWarning
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Transmit briefing..."
            className="bg-transparent border-0 border-b border-white/10 rounded-none h-10 pl-0 pr-10 focus-visible:ring-0 focus:border-primary transition-all text-base font-headline italic placeholder:text-foreground/10"
          />
          <Button
            suppressHydrationWarning
            type="submit"
            variant="ghost"
            disabled={!input.trim() || isLoading}
            className={cn(
              "absolute right-0 w-8 h-8 rounded-full transition-all duration-700",
              input.trim() ? "text-primary opacity-100 scale-100" : "opacity-0 scale-50"
            )}
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
        <div className="flex justify-between items-center mt-6 opacity-20">
          <p className="text-[7px] uppercase tracking-[0.4em] font-bold">Neural Protocol</p>
          <p className="text-[7px] uppercase tracking-[0.4em] font-bold italic">Depok Node // v2.6</p>
        </div>
      </div>
    </div>
  );
}
