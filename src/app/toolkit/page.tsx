"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const TOOLS = [
  { name: "Adobe Photoshop", category: "Design" },
  { name: "Adobe Illustrator", category: "Vector" },
  { name: "Adobe After Effects", category: "Motion" },
  { name: "Blender", category: "3D" },
  { name: "Figma", category: "UI/UX" },
  { name: "Midjourney", category: "AI" },
  { name: "Runway", category: "AI Video" },
  { name: "Higgsfield AI", category: "AI Motion" },
];

export default function ToolkitPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <div className="pt-40 px-6 md:px-12 lg:px-24">
        <header className="max-w-7xl mx-auto mb-24 text-center">
          <h1 className="text-7xl md:text-9xl font-headline italic mb-8">Toolkit.</h1>
          <p className="text-foreground/40 text-xl max-w-2xl mx-auto leading-relaxed">
            The software, resources, and workflows that power the Harpa creative process.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-32">
          {TOOLS.map((tool, i) => (
            <Card key={i} className="bg-card border-white/5 rounded-[2rem] hover:border-primary/30 transition-all group overflow-hidden">
              <CardContent className="p-10 text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary/40 block mb-4">{tool.category}</span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tool.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="space-y-6">
            <h4 className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Assets</h4>
            <ul className="text-foreground/40 space-y-4">
              <li>Fonts Collection</li>
              <li>Texture Library</li>
              <li>Mockup Resources</li>
            </ul>
          </div>
          <div className="md:col-span-2 bg-white/5 rounded-[2.5rem] p-16 border border-white/5">
            <h3 className="text-3xl font-headline italic mb-8">Creative Workflow</h3>
            <p className="text-foreground/50 leading-relaxed mb-8">
              A seamless integration of human intuition and AI-assisted tools. From initial sketch to final frame, we maintain a studio-grade pipeline focused on quality and narrative depth.
            </p>
            <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-primary w-2/3" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
