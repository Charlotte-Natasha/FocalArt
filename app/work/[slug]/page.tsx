interface ProjectPageProps {
    params: {
        slug: string;
    };
    }

export default function ProjectPage({ params }: ProjectPageProps) {
    return (
        <section className="container py-section">
        <h1 className="text-4xl font-display tracking-tight">
            Project: {params.slug}
        </h1>

        <p className="mt-4 max-w-prose">
            This is the project page for <strong>{params.slug}</strong>.
        </p>
        </section>
    );
}