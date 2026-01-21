import Hero from "@/components/home/Hero";
import ProjectGrid from "@/components/home/ProjectGrid";
import { getProjects } from "@/lib/content/getProjects";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-nairobi-stone">
      <Hero />

      {/* Brand Marquee */}
      <section className="py-12 border-y border-soft-sand overflow-hidden bg-nairobi-stone">
        <div className="inline-flex gap-16 animate-marquee whitespace-nowrap text-acacia-bark/40 font-display text-lg uppercase tracking-[0.2em]">
          {/* First set */}
          <span>Sustainable Design</span>
          <span>User Research</span>
          <span>Material Studies</span>
          <span>Design Thinking</span>
          <span>Prototyping</span>
          {/* Duplicate for smooth infinite loop */}
          <span>Sustainable Design</span>
          <span>User Research</span>
          <span>Material Studies</span>
          <span>Design Thinking</span>
          <span>Prototyping</span>
          <span>Kenyatta University</span>
        </div>
      </section>

      {/* Featured Works */}
      <section id="work" className="py-section">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-16">
            <h2 className="text-sm uppercase tracking-widest text-kenyan-clay font-bold mb-4">
              Selected Works
            </h2>
            <p className="text-3xl font-display text-volcanic-charcoal">
              A transition from 2D canvases to 3D systems.
            </p>
          </header>
          <ProjectGrid projects={projects} />
        </div>
      </section>

      {/* Teaching Section */}
      <section className="bg-volcanic-charcoal text-nairobi-stone py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display mb-6">Instruction & Pedagogy</h2>
            <p className="text-softSand text-lg leading-relaxed mb-8">
              Beyond individual practice, I am committed to visual literacy. 
              Currently teaching Graphic Design, I focus on deconstructing 
              professional branding workflows for the next generation of 
              Kenyan creatives.
            </p>
            <a 
              href="/about" 
              className="inline-block border-b-2 border-kenyan-clay pb-1 hover:text-kenyan-clay transition-colors"
            >
              Read Teaching Philosophy →
            </a>
          </div>
          <div className="aspect-video bg-acacia-bark/20 rounded-soft border border-soft-sand/10 flex items-center justify-center">
            <span className="text-soft-sand/30 italic">Classroom Documentation / Workshop View</span>
          </div>
        </div>
      </section>
    </main>
  );
}