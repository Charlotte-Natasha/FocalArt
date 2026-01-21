import Image from "next/image";
import Link from "next/link";

// This will eventually be dynamic - for now it's hardcoded
export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Mock project data - replace with real data later
  const project = {
    title: "Airtel Kenya Brand Campaign",
    category: "Graphic Design",
    year: "2023",
    role: "Design Intern",
    tools: "Adobe Illustrator, Photoshop, InDesign",
    description: `This project involved creating brand materials for Airtel Kenya's promotional campaign. 
    Working under supervision at Sketchers Design Promoters, I contributed to logo adaptations, 
    promotional merchandise design, and print production workflows.`,
    process: `The design process began with understanding Airtel's brand guidelines and target audience. 
    I explored multiple layout options, received feedback from senior designers, and iterated on designs 
    to meet client specifications. The project taught me valuable lessons about working within 
    corporate brand constraints while maintaining creative solutions.`,
    images: [
      "/images/paintings/image_1.jpeg",
      "/images/paintings/image_2.jpeg",
      "/images/paintings/image_3.jpeg",
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Back Link */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-kenyan-clay hover:text-acacia-bark transition-colors mb-8"
      >
        ← Back to Work
      </Link>

      {/* Project Header */}
      <header className="mb-12">
        <p className="text-sm uppercase tracking-widest text-kenyan-clay font-bold mb-2">
          {project.category}
        </p>
        <h1 className="text-4xl lg:text-5xl font-display font-bold text-volcanic-charcoal mb-6">
          {project.title}
        </h1>

        {/* Project Meta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-dusk-blue">
          <div>
            <p className="text-sm text-acacia-bark uppercase tracking-wider mb-1">
              Year
            </p>
            <p className="font-medium">{project.year}</p>
          </div>
          <div>
            <p className="text-sm text-acacia-bark uppercase tracking-wider mb-1">
              Role
            </p>
            <p className="font-medium">{project.role}</p>
          </div>
          <div>
            <p className="text-sm text-acacia-bark uppercase tracking-wider mb-1">
              Tools
            </p>
            <p className="font-medium">{project.tools}</p>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-video bg-soft-sand rounded-soft overflow-hidden border border-soft-sand/30 mb-12">
        <div className="absolute inset-0 flex items-center justify-center text-acacia-bark/30">
          Hero Image
        </div>

        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Description */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-4">Overview</h2>
        <p className="text-lg text-dusk-blue leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-4">Design Process</h2>
        <p className="text-lg text-dusk-blue leading-relaxed">
          {project.process}
        </p>
      </section>

      {/* Image Gallery */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-6">Project Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((img, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] bg-soft-sand rounded-soft overflow-hidden border border-soft-sand/30"
            >
              <div className="absolute inset-0 flex items-center justify-center text-acacia-bark/30">
                Image {index + 1}
              </div>

              <Image
                src={img}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="border-t border-soft-sand pt-12">
        <Link
          href="/work"
          className="inline-block px-8 py-4 bg-kenyan-clay text-nairobi-stone font-medium rounded-soft hover:bg-acacia-bark transition-colors"
        >
          View All Projects
        </Link>
      </section>
    </div>
  );
}
