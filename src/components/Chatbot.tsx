
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, Minimize2 } from 'lucide-react';
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
    { role: 'assistant', content: 'Welcome to Harpa Studio. I am the Creative Assistant. How can I facilitate your vision today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Listen for custom events to open chat from other components
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
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection interrupted. Our studio systems are currently optimizing. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[300]">
      {/* Trigger Button - More minimal and studio-like */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group overflow-hidden border border-white/10",
          isOpen ? "bg-accent border-accent/20 rotate-180" : "bg-card hover:bg-secondary"
        )}
      >
        {isOpen ? (
          <Minimize2 className="w-6 h-6 text-white" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}
      </button>

      {/* Chat Panel - Redesigned to be less "AI coded" and more "Harpa Studio" */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-4rem)] sm:w-[420px] h-[650px] max-h-[80vh] bg-card border border-white/10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-500 backdrop-blur-3xl">
          {/* Header */}
          <div className="p-8 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                  <span className="font-headline italic text-2xl text-primary">H*</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-card" />
              </div>
              <div>
                <h3 className="font-headline italic text-2xl tracking-tight text-foreground">Creative Assistant</h3>
                <p className="text-[9px] text-primary uppercase tracking-[0.3em] font-bold opacity-50">Experimental AI Node</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-foreground/20 hover:text-primary transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-8 py-6 hide-scrollbar">
            <div className="space-y-8">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[90%] animate-in fade-in slide-in-from-bottom-2 duration-700",
                    msg.role === 'user' ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "text-sm leading-relaxed tracking-tight",
                      msg.role === 'user'
                        ? "bg-primary text-background px-5 py-3 rounded-2xl rounded-tr-none font-medium"
                        : "text-foreground/70 pl-0 pr-6"
                    )}
                  >
                    {msg.role === 'assistant' && (
                      <span className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2 block">Harpa System</span>
                    )}
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-3 text-accent/60">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1 h-1 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1 h-1 bg-accent rounded-full animate-bounce" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Synthesizing vision...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-8 bg-background/40 backdrop-blur-md border-t border-white/5">
            <form onSubmit={handleSubmit} className="relative flex items-center group">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your project vision..."
                className="bg-secondary/50 border-white/5 rounded-2xl h-14 pl-6 pr-14 focus:ring-accent focus:border-accent/50 transition-all text-sm placeholder:text-foreground/20"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
                className={cn(
                  "absolute right-2 w-10 h-10 rounded-xl transition-all duration-500",
                  input.trim() ? "bg-accent hover:bg-accent/80 scale-100" : "bg-white/5 scale-90 opacity-20"
                )}
              >
                <Send className="w-4 h-4 text-white" />
              </Button>
            </form>
            <p className="text-[8px] text-center mt-4 uppercase tracking-[0.2em] text-foreground/20">
              Harpa Studio AI Collective — Optimized for High-End Visual Narrative
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
