// app/magazines/[slug]/page.tsx
import Link from 'next/link'
import Image from 'next/image'

// Magazine data mapping
const magazineData = {
  'chinese-feature': {
    title: 'Featured in Jambo Magazine',
    year: '2024',
    role: 'Featured Artist',
    pdfUrl: '/docs/Jambo.pdf',
    description: 'My work was selected for feature in Jambo Magazine, a publication showcasing contemporary East African art to Chinese audiences.',
    context: `This feature highlights my oil painting series exploring themes of identity and cultural heritage. The editorial spread includes high-resolution images of three key works along with an interview discussing my artistic journey and the cultural influences shaping my practice.
    
    Being featured in an international publication provided valuable exposure to new audiences and demonstrated the universal language of visual art despite geographical and linguistic differences.`,
    spreads: [
        '/images/magazines/Jambo-5.jpg',
        '/images/magazines/Jambo-6.jpg',
        '/images/magazines/Jambo-7.jpg',
        '/images/magazines/Jambo-8.jpg',
    ]
  },
  'self-published': {
    title: 'Art & War',
    year: '2023',
    role: 'Designer, Editor, Publisher',
    pdfUrl: '/docs/Art&War.pdf',
    description: 'An independent publication exploring the relationship between artistic expression and social conflict.',
    context: `This self-published magazine was an ambitious project where I handled every aspect of production—from conceptualization and content curation to layout design, typography, and print production.
    
    The editorial focus was on examining how artists respond to and document conflict, using visual storytelling to bridge cultural divides. Through this project, I learned complete publication workflows, including grid systems, typographic hierarchy, image editing, and managing print specifications.
    
    This hands-on experience with editorial design directly informed my transition toward product design by teaching me systematic thinking, user experience considerations, and the importance of cohesive visual language.`,
    spreads: [
        '/images/magazines/Art&War-1.jpg',
        '/images/magazines/Art&War-2.jpg',
        '/images/magazines/Art&War-3.jpg',
        '/images/magazines/Art&War-5.jpg',
    ]
  }
}

// ADD ASYNC HERE and AWAIT params
export default async function MagazineDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  // AWAIT the params
  const { slug } = await params
  
  const magazine = magazineData[slug as keyof typeof magazineData]

  if (!magazine) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Magazine not found</h1>
        <Link href="/magazines" className="text-kenyan-clay hover:text-acacia-bark">
          ← Back to Magazines
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* Back Link */}
      <Link 
        href="/magazines"
        className="inline-flex items-center gap-2 text-kenyan-clay hover:text-acacia-bark transition-colors mb-8"
      >
        ← Back to Magazines
      </Link>

      {/* Magazine Header */}
      <header className="mb-12">
        <p className="text-sm uppercase tracking-widest text-kenyan-clay font-bold mb-2">
          Editorial Design
        </p>
        <h1 className="text-4xl lg:text-5xl font-display font-bold text-volcanic-charcoal mb-6">
          {magazine.title}
        </h1>
        <div className="flex flex-wrap gap-6 text-dusk-blue mb-6">
          <div>
            <span className="text-sm text-acacia-bark uppercase tracking-wider">Year: </span>
            <span className="font-medium">{magazine.year}</span>
          </div>
          <span>•</span>
          <div>
            <span className="text-sm text-acacia-bark uppercase tracking-wider">Role: </span>
            <span className="font-medium">{magazine.role}</span>
          </div>
        </div>
        <p className="text-xl text-dusk-blue max-w-3xl">
          {magazine.description}
        </p>
      </header>

      {/* PDF Download Section */}
      <section className="bg-volcanic-charcoal/5 rounded-soft p-6 mb-12">
        <p className="text-sm text-acacia-bark mb-4">
          <strong>View Full Magazine:</strong> Download or open the PDF to read the complete publication.
        </p>
        <a 
          href={magazine.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-kenyan-clay text-nairobi-stone font-medium rounded-soft hover:bg-acacia-bark transition-colors"
        >
          Open PDF in New Tab ↗
        </a>
      </section>

      {/* Embedded PDF Viewer */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-6">Preview</h2>
        <div className="w-full h-[600px] border-2 border-soft-sand rounded-soft overflow-hidden bg-white">
          <iframe
            src={magazine.pdfUrl}
            className="w-full h-full"
            title={magazine.title}
          />
        </div>
      </section>

      {/* Context Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-6">Project Context</h2>
        <div className="max-w-none">
          {magazine.context.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-dusk-blue leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Selected Spreads */}
        <section className="mb-12">
  <h2 className="text-2xl font-display font-bold mb-6">Selected Spreads</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {magazine.spreads.map((spread, index) => (
      <div 
        key={index}
        className="relative aspect-[4/3] bg-soft-sand rounded-soft border border-soft-sand/30 overflow-hidden"
      >
        <Image
          src={spread}
          alt={`${magazine.title} - Spread ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    ))}
  </div>
</section>

      {/* Editorial Note */}
      <section className="bg-soft-sand/30 border-l-4 border-kenyan-clay p-6 rounded-soft">
        <h3 className="font-display font-bold mb-2">Editorial Note</h3>
        <p className="text-sm text-acacia-bark">
          This publication reflects my early transition from fine art to design practice. 
          Some grammatical inconsistencies remain from the original bilingual editing 
          process and represent authentic challenges in East African independent publishing.
        </p>
      </section>

    </div>
  )
}