
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
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
    { role: 'assistant', content: 'Hello! I am your AI Creative Assistant at Harpa Studio. How can I help you with your project today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

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
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl group",
          isOpen ? "bg-accent rotate-90" : "bg-primary"
        )}
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-8 h-8 text-background group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-primary animate-pulse" />
          </div>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] sm:w-[400px] h-[600px] max-h-[70vh] bg-card border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-background/80 backdrop-blur-md p-6 border-b border-white/5 flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-headline italic text-xl">Harpa Assistant</h3>
              <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Smart Critiques & Concepts</p>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-6">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[85%] animate-in fade-in duration-500",
                    msg.role === 'user' ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "px-5 py-3 rounded-2xl text-sm leading-relaxed",
                      msg.role === 'user'
                        ? "bg-primary text-background font-medium rounded-tr-none"
                        : "bg-background border border-white/5 rounded-tl-none text-foreground/80"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-foreground/40 animate-pulse">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs uppercase tracking-widest font-bold">Analyzing concepts...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-6 bg-background/50 border-t border-white/5">
            <div className="relative flex items-center gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about project concepts..."
                className="bg-card border-white/10 rounded-2xl h-12 pr-12 focus:ring-accent"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
                className="absolute right-1.5 top-1.5 w-9 h-9 bg-accent hover:bg-accent/90 rounded-xl transition-all"
              >
                <Send className="w-4 h-4 text-white" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
