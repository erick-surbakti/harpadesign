
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
    { role: 'assistant', content: 'Protocol initiated. Brief me.' }
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
      setMessages(prev => [...prev, { role: 'assistant', content: "Transmission failure." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col h-full", className)}>
      <ScrollArea className="flex-1 px-4 py-4 hide-scrollbar">
        <div className="space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col animate-in fade-in slide-in-from-bottom-1 duration-500",
                msg.role === 'user' ? "items-end" : "items-start"
              )}
            >
              <div className="max-w-[90%]">
                <div
                  className={cn(
                    "text-[12px] leading-snug tracking-tight font-light",
                    msg.role === 'user'
                      ? "bg-primary/10 border border-white/5 text-primary px-3 py-1.5 rounded-xl rounded-tr-none italic"
                      : "text-foreground/70 px-1"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex flex-col gap-1 animate-pulse pl-1">
              <span className="text-[6px] uppercase tracking-[0.5em] font-bold text-accent">Synthesizing...</span>
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      <div className={cn("px-4 py-3 border-t border-white/5", isEmbedded ? "bg-white/[0.01]" : "bg-black/20")}>
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <Input
            suppressHydrationWarning
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Transmit..."
            className="bg-transparent border-0 border-b border-white/10 rounded-none h-7 pl-0 pr-8 focus-visible:ring-0 focus:border-primary transition-all text-xs font-headline italic placeholder:text-foreground/10"
          />
          <Button
            suppressHydrationWarning
            type="submit"
            variant="ghost"
            size="icon"
            disabled={!input.trim() || isLoading}
            className={cn(
              "absolute right-0 w-6 h-6 rounded-full transition-all duration-500",
              input.trim() ? "text-primary opacity-100 scale-100" : "opacity-0 scale-50"
            )}
          >
            <Send className="w-3 h-3" />
          </Button>
        </form>
      </div>
    </div>
  );
}
