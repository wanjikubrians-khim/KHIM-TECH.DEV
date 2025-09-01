import { Award, BookOpen, Code2, Database, GraduationCap, Target, Users, Zap } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  const expertise = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science Division",
      description: "Our data science team specializes in advanced statistical modeling, machine learning, and predictive analytics for enterprise clients."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Development Division",
      description: "Our full-stack development team builds scalable web applications, APIs, and cloud-native solutions using cutting-edge frameworks."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI/ML Division",
      description: "Our AI specialists develop enterprise-grade machine learning solutions with proven accuracy rates and automated deployment pipelines."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Intelligence Division",
      description: "Our BI team creates interactive dashboards, data visualizations, and intelligence platforms that drive strategic decision-making."
    }
  ]

  const experience = [
    {
      role: "Enterprise AI Solutions",
      company: "Fortune 500 Clients",
      achievements: [
        "Deployed ML systems processing 10M+ daily transactions",
        "Achieved 99.7% uptime across distributed AI platforms",
        "Reduced operational costs by 45% through automation",
        "Scaled solutions serving 1M+ concurrent users"
      ]
    },
    {
      role: "Data Science Consulting",
      company: "Global Organizations",
      achievements: [
        "Led statistical analysis for 100+ enterprise projects",
        "Developed predictive models with 97%+ accuracy rates",
        "Created real-time analytics dashboards for C-suite executives",
        "Generated $50M+ in measurable business value"
      ]
    },
    {
      role: "Full-Stack Platform Development",
      company: "Tech Startups & Enterprises",
      achievements: [
        "Architected cloud-native platforms handling TB-scale data",
        "Built microservices supporting 10M+ API calls daily",
        "Implemented CI/CD pipelines reducing deployment time by 80%",
        "Delivered 50+ production-ready applications"
      ]
    },
    {
      role: "Technical Leadership & Innovation",
      company: "Cross-Industry Projects",
      achievements: [
        "Led multidisciplinary teams of 10+ specialists",
        "Established best practices adopted by 500+ developers",
        "Open-sourced frameworks with 10K+ GitHub stars",
        "Mentored next-generation tech talent globally"
      ]
    }
  ]

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Mission Excellence",
      description: "Deploying enterprise-grade solutions with 99.9% uptime and zero-compromise performance standards."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Elite Collaboration",
      description: "Cross-functional teams operating in perfect synchronization to execute complex technical missions."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Technological Supremacy",
      description: "Pioneering next-generation architectures that redefine industry standards and capabilities."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Adaptive Intelligence",
      description: "Continuously evolving our technical arsenal to stay ahead of emerging threats and opportunities."
    }
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
              &gt; Accessing company database...
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              About <span className="gradient-text">&lt;KHIM-TECH/&gt;</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elite technology company with specialized divisions in data science, AI/ML engineering, 
              full-stack development, and business intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="terminal-text text-sm mb-4">
              &gt; Loading mission parameters...
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">Our <span className="gradient-text">Mission</span></h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              KHIM-TECH transforms enterprises through cutting-edge technology solutions. Our multidisciplinary 
              teams bridge complex data challenges with scalable software architectures, delivering enterprise-grade 
              AI solutions, statistical insights, and full-stack platforms that drive measurable business outcomes 
              for organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm mb-4">
              &gt; Scanning organizational structure...
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">Our <span className="gradient-text">Divisions</span></h2>
            <p className="text-xl text-gray-300">
              Specialized teams delivering enterprise-grade solutions across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="glass-card p-8 rounded-lg neon-border hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300">
                <div className="text-neon-cyan mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-mono">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm mb-4">
              &gt; Loading enterprise portfolio...
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">Track <span className="gradient-text">Record</span></h2>
            <p className="text-xl text-gray-300">
              Battle-tested across Fortune 500 enterprises and cutting-edge startups
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="glass-card p-8 rounded-lg neon-border">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white font-mono">{exp.role}</h3>
                  <p className="text-neon-cyan font-medium">{exp.company}</p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-neon-green rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm mb-4">
              &gt; Initializing core values matrix...
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">Core <span className="neon-text">Values</span></h2>
            <p className="text-xl text-gray-300">
              The immutable principles driving our technological excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-neon-cyan to-neon-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-border">
                  <div className="text-black">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 font-mono">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-50 border-y border-neon-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="terminal-text text-sm mb-4">
              &gt; Compiling operational metrics...
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="glass-card p-6 rounded-lg neon-border">
              <div className="text-4xl font-bold mb-2 font-mono neon-text animate-pulse">500+</div>
              <div className="text-gray-300 font-mono text-sm">Enterprise Models</div>
              <div className="text-xs text-gray-400 mt-1">Deployed & Active</div>
            </div>
            <div className="glass-card p-6 rounded-lg neon-border">
              <div className="text-4xl font-bold mb-2 font-mono neon-text animate-pulse">1000+</div>
              <div className="text-gray-300 font-mono text-sm">Production Systems</div>
              <div className="text-xs text-gray-400 mt-1">99.9% Uptime</div>
            </div>
            <div className="glass-card p-6 rounded-lg neon-border">
              <div className="text-4xl font-bold mb-2 font-mono neon-text animate-pulse">10+</div>
              <div className="text-gray-300 font-mono text-sm">Years Excellence</div>
              <div className="text-xs text-gray-400 mt-1">Battle-Tested</div>
            </div>
            <div className="glass-card p-6 rounded-lg neon-border">
              <div className="text-4xl font-bold mb-2 font-mono neon-text animate-pulse">50+</div>
              <div className="text-gray-300 font-mono text-sm">AI Frameworks</div>
              <div className="text-xs text-gray-400 mt-1">Cutting-Edge</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
