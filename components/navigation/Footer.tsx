import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-soft-sand bg-nairobi-stone py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Bio */}
          <div>
            <h3 className="font-display font-bold text-volcanic-charcoal mb-3">
              Fidel Castro
            </h3>
            <p className="text-sm text-acacia-bark">
              Fine artist and educator transitioning to product design. 
              Based in Nairobi, Kenya.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-volcanic-charcoal mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work" className="text-acacia-bark hover:text-kenyan-clay transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/magazines" className="text-acacia-bark hover:text-kenyan-clay transition-colors">
                  Magazines
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-acacia-bark hover:text-kenyan-clay transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-display font-bold text-volcanic-charcoal mb-3">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:your.email@example.com"
                  className="text-acacia-bark hover:text-kenyan-clay transition-colors"
                >
                  your.email@example.com
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-acacia-bark hover:text-kenyan-clay transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-acacia-bark">
                Nairobi, Kenya
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-soft-sand mt-8 pt-8 text-center text-sm text-acacia-bark">
          <p>© 2025 Fidel Castro. Portfolio for Masters Applications.</p>
        </div>
      </div>
    </footer>
  )
}