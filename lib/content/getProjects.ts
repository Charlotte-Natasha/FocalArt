interface Project {
    slug: string
    title: string
    year: string
    category: string
    description: string
    coverImage: string
    }

    export async function getProjects(): Promise<Project[]> {
    return [
        {
        slug: 'ceramic-vessels',
        title: 'Ceramic Vessel Study',
        year: '2024',
        category: 'Product Design',
        description: 'Exploring traditional Kenyan pottery techniques through contemporary sustainable design.',
        coverImage: '/images/fine-art/globe.jpg',
        },
        {
        slug: 'oil-paintings',
        title: 'Urban Landscape Series',
        year: '2023',
        category: 'Fine Art',
        description: "Oil paintings documenting the transformation of Nairobi's architectural landscape.",
        coverImage: '/images/fine-art/globe.jpg',
        },
        {
        slug: 'brand-system',
        title: 'Airtel Kenya Rebrand',
        year: '2024',
        category: 'Graphic Design',
        description: 'Visual identity system for telecommunications brand targeting Gen-Z audiences.',
        coverImage: '/images/fine-art/globe.jpg',
        },
    ]
    }