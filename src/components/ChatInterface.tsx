"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, Terminal, Sparkles, MessageSquare } from 'lucide-react';
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
    { role: 'assistant', content: 'Protocol initiated. This is the Harpa Neural Node. Brief me on your creative narrative or request studio-grade analysis.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
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
    setError(false);
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await aiCreativeAssistantChatbot({ query: userMsg });
      setMessages(prev => [...prev, { role: 'assistant', content: response.response }]);
    } catch (err) {
      setError(true);
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: "Transmission interrupted. The AI node is experiencing high latency. Redirecting to Direct Terminal protocol." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col h-full bg-transparent overflow-hidden", className)}>
      <ScrollArea className="flex-1 px-4 py-4 hide-scrollbar">
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col animate-in fade-in slide-in-from-bottom-1 duration-500",
                msg.role === 'user' ? "items-end" : "items-start"
              )}
            >
              <div className="max-w-[90%]">
                {msg.role === 'assistant' && (
                  <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-accent mb-1 block ml-1">Intel.</span>
                )}
                <div
                  className={cn(
                    "text-[11px] leading-relaxed tracking-tight font-light",
                    msg.role === 'user'
                      ? "bg-primary/10 border border-white/5 text-primary px-3 py-2 rounded-xl rounded-tr-none italic"
                      : msg.role === 'system' 
                        ? "text-destructive border border-destructive/20 bg-destructive/5 px-3 py-2 rounded-xl italic"
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
              <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-accent">Synthesizing...</span>
            </div>
          )}
          
          {(error || messages.length > 5) && (
            <div className="mt-4 pt-4 border-t border-white/5 animate-in fade-in duration-700">
              <a 
                href="https://wa.me/6281318432288" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-primary text-background text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500"
              >
                <MessageSquare className="w-3 h-3" />
                Direct Node (WhatsApp)
              </a>
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      <div className={cn("px-4 py-4 border-t border-white/5", isEmbedded ? "bg-white/[0.01]" : "bg-black/20")}>
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <Input
            suppressHydrationWarning
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter query..."
            className="bg-transparent border-0 border-b border-white/10 rounded-none h-8 pl-0 pr-10 focus-visible:ring-0 focus:border-primary transition-all text-xs font-headline italic placeholder:text-foreground/10"
          />
          <Button
            suppressHydrationWarning
            type="submit"
            variant="ghost"
            size="icon"
            disabled={!input.trim() || isLoading}
            className={cn(
              "absolute right-0 w-8 h-8 rounded-full transition-all duration-500",
              input.trim() ? "text-primary opacity-100 scale-100" : "opacity-20 scale-90"
            )}
          >
            <Send className="w-3.5 h-3.5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
