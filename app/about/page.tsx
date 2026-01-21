export default function AboutPage() {

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <header className="mb-16">
            <p className="text-sm uppercase tracking-widest text-kenyan-clay font-bold mb-4">
            About
            </p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-volcanic-charcoal mb-6">
            Fidel Castro
            </h1>
            <p className="text-xl text-dusk-blue leading-relaxed">
            Fine artist and educator transitioning to product design, with a foundation 
            in painting, graphic design, and visual pedagogy. Based in Nairobi, Kenya.
            </p>
        </header>

        {/* Artist Statement */}
        <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Why Product Design</h2>
            <div className="space-y-4 text-lg text-dusk-blue leading-relaxed">
            <p>
                My journey began with painting—exploring form, color, and narrative through 
                traditional mediums. Over six years, I have worked with diverse clients, taught 
                aspiring artists, and developed visual systems for corporate brands across Kenya.
            </p>
            <p>
                This transition to product design feels like a natural evolution. Where painting 
                taught me to observe and interpret the world, design challenges me to shape it. 
                I am drawn to the systematic thinking, material exploration, and human-centered 
                problem-solving that product design demands—especially within the context of 
                sustainable development and culturally-grounded innovation.
            </p>
            <p>
                I am pursuing a Masters in Product Design in Sweden to deepen my understanding 
                of design research, prototyping methodologies, and circular economy principles—skills 
                that will allow me to contribute meaningfully to Africas design landscape.
            </p>
            </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-8">Experience</h2>
            
            <div className="space-y-12">
            
            {/* Current: Graphic Design Instructor */}
            <div className="border-l-4 border-kenyan-clay pl-6">
                <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-display font-bold text-volcanic-charcoal">
                    Graphic Design Instructor
                </h3>
                <span className="text-sm text-acacia-bark">2024 – Present</span>
                </div>
                <p className="text-kenyan-clay mb-3">[Institution Name]</p>
                <ul className="space-y-2 text-dusk-blue">
                <li>• Teaching graphic design fundamentals and professional workflows</li>
                <li>• [Add more details when available]</li>
                </ul>
            </div>

            {/* Painter/Freelance */}
            <div className="border-l-4 border-acacia-bark pl-6">
                <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-display font-bold text-volcanic-charcoal">
                    Painter & Freelance Designer
                </h3>
                <span className="text-sm text-acacia-bark">2018 – Ongoing</span>
                </div>
                <p className="text-acacia-bark mb-3">Independent Practice</p>
                <ul className="space-y-2 text-dusk-blue">
                <li>• Create original paintings in acrylics and oils for private clients</li>
                <li>• Study techniques of established artists to explore new mediums and ideas</li>
                <li>• Develop social media content strategy, growing audience engagement across platforms</li>
                <li>• Design corporate brand identities including logos, stationery, and packaging</li>
                <li>• Build client relationships through clear communication and iterative design processes</li>
                <li>• Present design work professionally, incorporating constructive feedback</li>
                </ul>
            </div>

            {/* Sketchers Design */}
            <div className="border-l-4 border-acacia-bark pl-6">
                <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-display font-bold text-volcanic-charcoal">
                    Design Intern
                </h3>
                <span className="text-sm text-acacia-bark">2023</span>
                </div>
                <p className="text-acacia-bark mb-3">Sketchers Design Promoters Ltd, Nairobi</p>
                <ul className="space-y-2 text-dusk-blue">
                <li>• Worked on brand campaigns for major clients including Airtel Kenya, DSTV Kenya, and Marie Stopes</li>
                <li>• Gained corporate design industry experience in fast-paced agency environment</li>
                <li>• Operated printing machinery for promotional materials (apparel, accessories, giveaways)</li>
                <li>• Collaborated with cross-functional teams on design production workflows</li>
                </ul>
            </div>

            {/* QuickSmudge */}
            <div className="border-l-4 border-acacia-bark pl-6">
                <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-display font-bold text-volcanic-charcoal">
                    Painting Instructor
                </h3>
                <span className="text-sm text-acacia-bark">2021 – 2023</span>
                </div>
                <p className="text-acacia-bark mb-3">QuickSmudge</p>
                <ul className="space-y-2 text-dusk-blue">
                <li>• Demonstrated painting techniques across multiple mediums and styles</li>
                <li>• Addressed challenging behavioral needs with care and sensitivity for effective classroom management</li>
                <li>• Built constructive relationships with students and parents through proactive communication</li>
                <li>• Developed curriculum materials for diverse skill levels</li>
                </ul>
            </div>

            </div>
        </section>

        {/* Design Language Section */}
        <section className="mb-16 bg-soft-sand/30 rounded-soft p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Design Language</h2>
            
            <p className="text-lg text-dusk-blue leading-relaxed mb-8">
            This portfolios visual identity draws from East African material culture 
            and landscape—a deliberate choice reflecting my design philosophy of grounding 
            digital work in tactile, cultural specificity.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
                <div className="w-full h-20 bg-kenyan-clay rounded-soft mb-3"></div>
                <h3 className="font-display font-bold text-sm mb-1">Kenyan Clay</h3>
                <p className="text-xs text-acacia-bark">Traditional pottery terracotta</p>
            </div>
            
            <div>
                <div className="w-full h-20 bg-nairobi-stone rounded-soft mb-3 border border-soft-sand"></div>
                <h3 className="font-display font-bold text-sm mb-1">Nairobi Stone</h3>
                <p className="text-xs text-acacia-bark">Limestone architecture</p>
            </div>
            
            <div>
                <div className="w-full h-20 bg-acacia-bark rounded-soft mb-3"></div>
                <h3 className="font-display font-bold text-sm mb-1">Acacia Bark</h3>
                <p className="text-xs text-acacia-bark">Indigenous wood tones</p>
            </div>
            
            <div>
                <div className="w-full h-20 bg-dusk-blue rounded-soft mb-3"></div>
                <h3 className="font-display font-bold text-sm mb-1">Dusk Blue</h3>
                <p className="text-xs text-acacia-bark">Highland evening sky</p>
            </div>
            </div>

            <p className="text-sm text-acacia-bark italic">
            Typography pairs Space Grotesk (geometric clarity) with Inter (utilitarian warmth), 
            mirroring my transition from fine arts expressiveness to product designs systematic rigor.
            </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-8">Skills & Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="font-display font-bold text-kenyan-clay mb-4">Design & Art</h3>
                <ul className="space-y-2 text-dusk-blue">
                <li>• Traditional painting (acrylics, oils)</li>
                <li>• Graphic design & branding</li>
                <li>• Layout & typography</li>
                <li>• Color theory & composition</li>
                </ul>
            </div>
            
            <div>
                <h3 className="font-display font-bold text-kenyan-clay mb-4">Process & Collaboration</h3>
                <ul className="space-y-2 text-dusk-blue">
                <li>• Client communication & presentations</li>
                <li>• Teaching & curriculum development</li>
                <li>• Design research & iteration</li>
                <li>• Print production workflows</li>
                </ul>
            </div>
            </div>
        </section>

        {/* CTA */}
        <section className="border-t border-soft-sand pt-12 text-center">
            <p className="text-lg text-dusk-blue mb-6">
            Interested in my work or want to discuss design education?
            </p>
            <a 
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-4 bg-kenyan-clay text-nairobi-stone font-medium rounded-soft hover:bg-acacia-bark transition-colors"
            >
            Get in Touch
            </a>
        </section>

        </div>
    )
}