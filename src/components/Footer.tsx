import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-emerald-ink text-champagne border-t border-champagne/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-champagne mb-4 font-mono">&lt;KHIM-TECH/&gt;</h3>
            <p className="text-champagne/90 mb-2 text-sm">
              Founded by <span className="text-champagne font-semibold">Brian Wanjiku</span> - Elite technology company
              transforming enterprises through cutting-edge AI solutions, advanced statistical analysis, and scalable full-stack development.
            </p>
            <div className="mb-4">
              <a
                href="https://portfolio-eosin-six-13.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne hover:text-white underline underline-offset-2 transition-colors font-mono text-xs inline-flex items-center"
              >
                <ExternalLink className="mr-1 w-3 h-3" />
                View Founder&apos;s Portfolio
              </a>
            </div>
            <div className="text-champagne/80 font-mono text-xs mb-4">
              &gt; status: OPERATIONAL | uptime: 99.9% | clients: GLOBAL
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-champagne hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a
                href="https://portfolio-eosin-six-13.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-champagne hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-champagne font-mono">&gt; Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-champagne/90 hover:text-white transition-colors font-mono text-sm">&gt; About</Link></li>
              <li><Link href="/services" className="text-champagne/90 hover:text-white transition-colors font-mono text-sm">&gt; Services</Link></li>
              <li><Link href="/portfolio" className="text-champagne/90 hover:text-white transition-colors font-mono text-sm">&gt; Portfolio</Link></li>
              <li><Link href="/blog" className="text-champagne/90 hover:text-white transition-colors font-mono text-sm">&gt; Blog</Link></li>
              <li><Link href="/contact" className="text-champagne/90 hover:text-white transition-colors font-mono text-sm">&gt; Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-champagne font-mono">&gt; Connect</h4>
            <div className="space-y-2">
              <div className="flex items-center text-champagne/90 font-mono text-sm">
                <Mail size={16} className="mr-2 text-champagne" />
                <span>wanjikubrians11@gmail.com</span>
              </div>
              <div className="flex items-center text-champagne/90 font-mono text-sm">
                <Phone size={16} className="mr-2 text-champagne" />
                <span>+254 791 710 423</span>
              </div>
              <div className="flex items-center text-champagne/90 font-mono text-sm">
                <MapPin size={16} className="mr-2 text-champagne" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-champagne/20 mt-8 pt-8 text-center">
          <p className="text-champagne/80 font-mono text-sm">
            &gt; © {new Date().getFullYear()} KHIM-TECH. All systems operational.
          </p>
        </div>
      </div>
    </footer>
  )
}
