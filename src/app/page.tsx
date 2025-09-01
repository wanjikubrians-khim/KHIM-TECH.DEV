import Link from 'next/link'
import { ArrowRight, BarChart3, Brain, Code, Database, TrendingUp, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AITrialSection from '@/components/AITrialSection'

export default function Home() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Our AI specialists develop cutting-edge ML solutions with enterprise-grade accuracy for automated decision-making systems."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Statistical Analysis",
      description: "Our data science team delivers comprehensive statistical modeling and business intelligence solutions for enterprise clients."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Our development team builds scalable web applications and platforms serving millions of users worldwide."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Our engineers architect robust data pipelines processing terabytes of data with real-time analytics capabilities."
    }
  ]

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "10+", label: "Expert Team Members" },
    { number: "99.9%", label: "Client Satisfaction" }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-black cyber-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-50 to-black opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="terminal-text text-sm mb-4 animate-pulse">
              &gt; Initializing KHIM-TECH systems...
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="font-mono">&lt;</span>Enterprise Data Solutions<span className="font-mono">/&gt;</span>
              <span className="gradient-text block font-mono">{/* Powered by Expert Teams */}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              KHIM-TECH is a cutting-edge technology company specializing in enterprise-grade data science, 
              AI solutions, and full-stack development. Our elite team of specialists transforms complex 
              business challenges into scalable digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-gradient-to-r from-neon-cyan to-neon-green text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 inline-flex items-center justify-center font-mono"
              >
                &gt; Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="border border-neon-cyan text-neon-cyan px-8 py-3 rounded-lg font-semibold hover:bg-neon-cyan/10 transition-all duration-300 font-mono neon-border"
              >
                &gt; View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-50 border-y border-neon-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold neon-text font-mono mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium font-mono text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm mb-4">
              &gt; Loading core services...
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              &lt;Core <span className="gradient-text">Services</span>/&gt;
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enterprise solutions delivered by our specialized teams across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg card-hover">
                <div className="text-neon-cyan mb-4 animate-float">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-mono">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Trial Section */}
      <AITrialSection />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="terminal-text text-sm mb-4">
                &gt; Analyzing competitive advantages...
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
                Why Choose <span className="gradient-text">KHIM-TECH</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-neon-cyan mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                      Elite Expert Team
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Our multidisciplinary team of data scientists, ML engineers, and full-stack developers delivers enterprise-grade solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-neon-green mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                      Enterprise Scale
                    </h3>
                    <p className="text-gray-300 text-sm">
                      From startup MVPs to enterprise platforms - our team handles projects of any complexity and scale.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-neon-purple mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                      Cutting-Edge Tech Stack
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Latest AI/ML frameworks, cloud-native architectures, and modern development practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-effect p-8 rounded-lg neon-border">
              <div className="terminal-text text-xs mb-4">
                &gt; system.status: READY_FOR_DEPLOYMENT
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                Ready to <span className="neon-text">Scale Your Business</span>?
              </h3>
              <p className="text-gray-300 mb-6 text-sm">
                Our team is ready to architect and deploy your next-generation data solutions. 
                Let&apos;s build something extraordinary together.
              </p>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-neon-cyan to-neon-green text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 inline-flex items-center font-mono"
              >
                &gt; Initialize Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
