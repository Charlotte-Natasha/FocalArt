import Link from 'next/link'
import Image from 'next/image'

    // Temporary hardcoded project data
const projects = [
    {
        slug: 'airtel-kenya-campaign',
        title: 'Airtel Kenya Brand Campaign',
        year: '2023',
        category: 'Graphic Design',
        coverImage: '/images/paintings/image_1.jpeg',
        description: 'Corporate branding and promotional materials for telecommunications brand.'
    },
    {
        slug: 'portrait-study-01',
        title: 'Portrait Study Series',
        year: '2022',
        category: 'Fine Art',
        coverImage: '/images/paintings/image_2.jpeg',
        description: 'Oil painting exploring human emotion and traditional techniques.'
    },
    {
        slug: 'landscape-nairobi',
        title: 'Nairobi Landscape',
        year: '2023',
        category: 'Fine Art',
        coverImage: '/images/paintings/image_3.jpeg',
        description: 'Urban landscape capturing the transformation of Nairobi architecture.'
    },
    {
        slug: 'still-life-study',
        title: 'Still Life Composition',
        year: '2021',
        category: 'Fine Art',
        coverImage: '/images/paintings/image_4.jpeg',
        description: 'Exploration of light, shadow, and material texture in oil.'
    },
    {
        slug: 'abstract-exploration',
        title: 'Abstract Color Study',
        year: '2022',
        category: 'Fine Art',
        coverImage: '/images/paintings/image_5.jpeg',
        description: 'Experimental work exploring color relationships and gestural mark-making.'
    },
    {
        slug: 'figurative-painting',
        title: 'Figurative Work',
        year: '2023',
        category: 'Fine Art',
        coverImage: '/images/paintings/image_1.jpeg',
        description: 'Study of the human form using traditional oil painting techniques.'
    }
    ]

    export default function WorkPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Header */}
        <header className="mb-16">
            <p className="text-sm uppercase tracking-widest text-kenyan-clay font-bold mb-4">
            Selected Works
            </p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-volcanic-charcoal mb-6">
            Portfolio
            </h1>
            <p className="text-xl text-dusk-blue max-w-3xl">
            A collection of work spanning fine art, graphic design, and editorial projects—documenting 
            my transition from traditional painting to systems-based design thinking.
            </p>
        </header>

        {/* Filter Tags (optional for now) */}
        <div className="flex gap-4 mb-12">
            <button className="px-4 py-2 bg-kenyan-clay text-nairobi-stone rounded-soft text-sm font-medium">
            All
            </button>
            <button className="px-4 py-2 border border-volcanic-charcoal/20 text-volcanic-charcoal rounded-soft text-sm font-medium hover:bg-volcanic-charcoal/5 transition-colors">
            Fine Art
            </button>
            <button className="px-4 py-2 border border-volcanic-charcoal/20 text-volcanic-charcoal rounded-soft text-sm font-medium hover:bg-volcanic-charcoal/5 transition-colors">
            Graphic Design
            </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
            <Link 
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group"
            >
                <article className="space-y-4">
                {/* Project Image */}
                <div className="relative aspect-[4/3] bg-soft-sand rounded-soft overflow-hidden border border-soft-sand/30">
                    {/* Placeholder until you add real images */}
                    <div className="absolute inset-0 flex items-center justify-center text-acacia-bark/30">
                    Project Image
                    </div>
                    <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                </div>

                {/* Project Info */}
                <div>
                    <div className="flex items-center gap-3 text-sm text-dusk-blue mb-2">
                    <span className="uppercase tracking-wider text-kenyan-clay font-bold">{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-volcanic-charcoal group-hover:text-kenyan-clay transition-colors mb-2">
                    {project.title}
                    </h3>
                    
                    <p className="text-acacia-bark line-clamp-2">
                    {project.description}
                    </p>
                </div>
                </article>
            </Link>
            ))}
        </div>

        </div>
    )
}