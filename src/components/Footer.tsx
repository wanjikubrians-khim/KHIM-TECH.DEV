import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4 font-mono">&lt;KHIM-TECH/&gt;</h3>
            <p className="text-gray-300 mb-2 text-sm">
              Founded by <span className="neon-text font-semibold">Brian Wanjiku</span> - Elite technology company 
              transforming enterprises through cutting-edge AI solutions, advanced statistical analysis, and scalable full-stack development.
            </p>
            <div className="mb-4">
              <a 
                href="https://portfolio-eosin-six-13.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-white transition-colors font-mono text-xs inline-flex items-center"
              >
                <ExternalLink className="mr-1 w-3 h-3" />
                View Founder's Portfolio
              </a>
            </div>
            <div className="terminal-text text-xs mb-4">
              &gt; status: OPERATIONAL | uptime: 99.9% | clients: GLOBAL
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Linkedin size={20} />
              </a>
              <a 
                href="https://portfolio-eosin-six-13.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white font-mono">&gt; Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white font-mono">&gt; Connect</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 font-mono text-sm">
                <Mail size={16} className="mr-2 text-neon-cyan" />
                <span>wanjikubrians11@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300 font-mono text-sm">
                <Phone size={16} className="mr-2 text-neon-green" />
                <span>+254 791 710 423</span>
              </div>
              <div className="flex items-center text-gray-300 font-mono text-sm">
                <MapPin size={16} className="mr-2 text-neon-purple" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neon-cyan/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-mono text-sm">
            &gt; © {new Date().getFullYear()} KHIM-TECH. All systems operational.
          </p>
        </div>
      </div>
    </footer>
  )
}
