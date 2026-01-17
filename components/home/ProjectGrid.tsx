import Link from 'next/link'
import Image from 'next/image'

    interface Project {
        slug: string
        title: string
        year: string
        category: string
        description: string
        coverImage: string
    }

interface ProjectGridProps {
        projects: Project[]
    }

    export default function ProjectGrid({ projects }: ProjectGridProps) {
        if (!projects || projects.length === 0) {
            return (
            <div className="text-center py-16 text-duskBlue">
                <p>No projects available yet. Add some MDX files to get started!</p>
            </div>
            )
        }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
            <Link 
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group"
            >
            <article className="space-y-4">
                {/* Project Image */}
                <div className="relative aspect-[4/3] bg-softSand rounded-soft overflow-hidden">
                <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                </div>

                {/* Project Info */}
                <div>
                <div className="flex items-center gap-3 text-sm text-duskBlue mb-2">
                    <span className="uppercase tracking-wider">{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-volcanicCharcoal group-hover:text-kenyanClay transition-colors mb-2">
                    {project.title}
                </h3>
                
                <p className="text-acaciaBark line-clamp-2">
                    {project.description}
                </p>
                </div>
            </article>
            </Link>
        ))}
        </div>
    )
    }