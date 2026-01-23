import Link from 'next/link'
import Image from 'next/image'

const magazines = [
  {
    slug: 'chinese-feature',
    title: 'Featured in Chinese Art Magazine',
    year: '2024',
    role: 'Featured Artist',
    coverImage: '/images/fine-art/Jambo-cover.jpg',
    pdfUrl: '/docs/Jambo.pdf',
    description: 'Selected work featured in [Magazine Name], showcasing East African contemporary art to Chinese audiences.',
  },
  {
    slug: 'self-published',
    title: 'Art & War',
    year: '2023',
    role: 'Designer, Editor, Publisher',
    coverImage: '/images/fine-art/Art&War-cover.jpg',
    pdfUrl: '/docs/Art&War.pdf',
    description: 'Independent editorial project exploring [theme], designed and produced from concept to print.',
  }
]

export default function MagazinesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Header */}
      <header className="mb-16 max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-kenyan-clay font-bold mb-4">
          Editorial Projects
        </p>
        <h1 className="text-4xl lg:text-5xl font-display font-bold text-volcanic-charcoal mb-6">
          Magazines
        </h1>
        <p className="text-xl text-dusk-blue leading-relaxed mb-6">
          Two magazine projects demonstrating editorial design, layout systems, and visual storytelling.
        </p>
        
        {/* Editorial Note */}
        <div className="bg-soft-sand/30 border-l-4 border-kenyan-clay p-6 rounded-soft">
          <p className="text-sm text-acacia-bark">
            <strong>Note:</strong> These magazines were created during my transition 
            from fine art to design. Some grammatical inconsistencies reflect the 
            learning process and bilingual editing challenges common in East African 
            publishing contexts.
          </p>
        </div>
      </header>

      {/* Magazine Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {magazines.map((magazine) => (
          <article key={magazine.slug} className="space-y-6">
            
            {/* Magazine Cover */}
            <div className="relative aspect-[3/4] bg-soft-sand rounded-soft border border-soft-sand/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-acacia-bark/30">
                Magazine Cover
              </div>
              <Image
                src={magazine.coverImage}
                alt={`${magazine.title} cover`}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Magazine Info */}
            <div>
              <h2 className="text-2xl font-display font-bold text-volcanic-charcoal mb-2">
                {magazine.title}
              </h2>
              <p className="text-sm text-kenyan-clay uppercase tracking-widest mb-4">
                {magazine.year} • {magazine.role}
              </p>
              <p className="text-dusk-blue leading-relaxed mb-6">
                {magazine.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={magazine.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-kenyan-clay text-nairobi-stone font-medium rounded-soft hover:bg-acacia-bark transition-colors"
                >
                  View PDF ↗
                </a>
                <Link 
                  href={`/magazines/${magazine.slug}`}
                  className="inline-block px-6 py-3 border-2 border-volcanic-charcoal text-volcanic-charcoal font-medium rounded-soft hover:bg-volcanic-charcoal hover:text-nairobi-stone transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
            
          </article>
        ))}

      </div>
    </div>
  )
}