import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <section className="py-24 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-headline italic mb-8">Crafting the future of visual narrative.</h2>
        <p className="text-foreground/40 text-lg leading-relaxed font-light">
          Harpa is the creative vessel of Harry Prambudy, a worldwide network of visual artists, filmmakers, and storytellers. Explore our collective works, experimental lab, and creative philosophy.
        </p>
      </section>
      <Footer />
    </main>
  );
}
