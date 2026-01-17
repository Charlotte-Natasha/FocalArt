import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-nairobi-stone">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-10">
                <div>
                <p className="text-sm uppercase tracking-[0.2em] text-kenyan-clay font-bold mb-4">
                    Masters Application Portfolio
                </p>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-volcanic-charcoal leading-tight mb-6">
                    Product Design
                </h1>
                <p className="text-lg lg:text-xl text-dusk-blue leading-relaxed max-w-xl mb-4">
                    Fidel Castro — Kenyan artist and educator exploring the
                    intersection of sustainable design, tactile materiality, and
                    human-centered systems.
                </p>
                </div>

                <div className="flex flex-wrap gap-4">
                <Link
                    href="/work"
                    className="px-8 py-4 bg-kenyan-clay text-nairobi-stone font-medium rounded-soft hover:bg-acacia-bark transition-all duration-300 shadow-sm"
                >
                    View Projects
                </Link>
                <Link
                    href="/about"
                    className="px-8 py-4 border-2 border-volcanic-charcoal text-volcanic-charcoal font-medium rounded-soft hover:bg-volcanic-charcoal hover:text-nairobi-stone transition-all duration-300"
                >
                    Read Statement
                </Link>
                </div>
            </div>

            {/* Right Column: Visual Element */}
            <div className="lg:col-span-5 relative">
                {/* Decorative Background Frame */}
                <div className="absolute -inset-4 border border-acacia-bark/10 translate-x-4 translate-y-4 rounded-soft pointer-events-none" />

                <div className="relative `aspect-4/5` w-full `max-w-120` mx-auto overflow-hidden rounded-soft shadow-2xl border border-soft-sand/30 bg-soft-sand/20">
                <Image
                    src="/images/fine-art/Sad.png"
                    alt="Fine Art Study by Fidel Castro"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}
