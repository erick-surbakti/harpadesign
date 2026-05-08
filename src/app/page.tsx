
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { Portfolio } from '@/components/Portfolio';
import { Chatbot } from '@/components/Chatbot';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Portfolio />
      <Footer />
      <Chatbot />
    </main>
  );
}
