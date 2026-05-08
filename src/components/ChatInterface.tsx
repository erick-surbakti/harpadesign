"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { aiCreativeAssistantChatbot } from '@/ai/flows/ai-creative-assistant-chatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

interface ChatInterfaceProps {
  className?: string;
  isEmbedded?: boolean;
}

export function ChatInterface({ className, isEmbedded = false }: ChatInterfaceProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Protocol initiated. This is the Harpa Neural Node. Brief me on your project or request studio-grade analysis.' }
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
    } catch (err) {
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: "Transmission interrupted. Please use the Direct Terminal protocol below." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col h-full bg-transparent overflow-hidden", className)}>
      <ScrollArea className="flex-1 px-4 py-2 hide-scrollbar">
        <div className="space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col animate-in fade-in slide-in-from-bottom-1 duration-300",
                msg.role === 'user' ? "items-end" : "items-start"
              )}
            >
              <div className="max-w-[85%]">
                <div
                  className={cn(
                    "text-[10px] leading-snug tracking-tight font-light",
                    msg.role === 'user'
                      ? "bg-primary/10 border border-white/5 text-primary px-3 py-1.5 rounded-xl rounded-tr-none italic"
                      : msg.role === 'system' 
                        ? "text-destructive/60 border border-destructive/10 bg-destructive/5 px-2 py-1 rounded-lg italic"
                        : "text-foreground/60 px-1"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-1 animate-pulse pl-1">
              <span className="text-[7px] uppercase tracking-[0.4em] font-bold text-accent/50">Synthesizing...</span>
            </div>
          )}
          
          <div className="mt-3 pt-3 border-t border-white/5">
            <a 
              href="https://wa.me/6281318432288" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-primary/5 border border-white/5 text-primary/40 text-[9px] font-bold uppercase tracking-widest hover:bg-primary hover:text-background transition-all"
            >
              <MessageSquare className="w-2.5 h-2.5" />
              Direct Node (+62813)
            </a>
          </div>
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      <div className="px-4 py-3 border-t border-white/5 bg-white/[0.01]">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <Input
            suppressHydrationWarning
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Query..."
            className="bg-transparent border-0 border-b border-white/10 rounded-none h-8 pl-0 pr-8 focus-visible:ring-0 focus:border-primary transition-all text-[10px] font-headline italic placeholder:text-foreground/10"
          />
          <Button
            suppressHydrationWarning
            type="submit"
            variant="ghost"
            size="icon"
            disabled={!input.trim() || isLoading}
            className={cn(
              "absolute right-0 w-7 h-7 rounded-full transition-all",
              input.trim() ? "text-primary opacity-100" : "opacity-10"
            )}
          >
            <Send className="w-3 h-3" />
          </Button>
        </form>
      </div>
    </div>
  );
}
