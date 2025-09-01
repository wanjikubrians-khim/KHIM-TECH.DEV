import React from 'react'
import { ArrowRight, BarChart3, Brain, Code, Database, Globe, LineChart, Smartphone, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Services() {
  const mainServices = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Advanced machine learning solutions with proven 95%+ accuracy rates",
      features: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Automated Decision Systems",
        "Model Deployment & Monitoring"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Statistical Analysis",
      description: "Comprehensive statistical modeling and hypothesis testing services",
      features: [
        "Hypothesis Testing & A/B Testing",
        "Regression & Correlation Analysis",
        "Time Series Analysis",
        "Bayesian Statistics",
        "Statistical Reporting"
      ],
      technologies: ["R", "Python", "SPSS", "SAS", "Stata"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Full-Stack Development",
      description: "Modern web applications serving 10K+ monthly active users",
      features: [
        "Responsive Web Applications",
        "E-commerce Platforms",
        "API Development & Integration",
        "Database Design & Optimization",
        "Cloud Deployment"
      ],
      technologies: ["Django", "React", "Next.js", "Node.js", "PostgreSQL"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Engineering",
      description: "Scalable data pipelines processing 100K+ records efficiently",
      features: [
        "Data Pipeline Development",
        "ETL/ELT Processes",
        "Real-time Data Processing",
        "Data Warehouse Design",
        "Performance Optimization"
      ],
      technologies: ["Apache Spark", "Airflow", "Kafka", "Docker", "AWS/GCP"]
    }
  ]

  const additionalServices = [
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Interactive dashboards and data visualizations for informed decision-making"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Consulting",
      description: "Technical consulting for web architecture, performance optimization, and scalability"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Responsive designs that work seamlessly across all devices and screen sizes"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Website and application performance monitoring with actionable insights"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your data requirements, business objectives, and technical constraints to design the optimal solution."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive project roadmap with clear milestones, timelines, and deliverables."
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Build and deploy your solution using industry best practices and cutting-edge technologies."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing and performance optimization to ensure reliability and scalability."
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing support and maintenance to ensure continued success."
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
              &gt; Loading service catalog...
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Our <span className="gradient-text">&lt;Services/&gt;</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade technology solutions delivered by our specialized teams 
              to transform your business through cutting-edge innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-neon-cyan mb-6 animate-float">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 font-mono">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2 font-mono">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-neon-cyan/20 text-neon-cyan px-3 py-1 rounded-full text-sm font-medium font-mono border border-neon-cyan/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`glass-effect p-8 rounded-lg neon-border ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-neon-cyan opacity-30 animate-pulse-slow">
                      <div className="w-32 h-32 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm mb-4">
              &gt; Scanning additional capabilities...
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">Extended <span className="gradient-text">Capabilities</span></h2>
            <p className="text-xl text-gray-300">
              Specialized services to amplify your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg card-hover text-center">
                <div className="text-neon-cyan mb-4 flex justify-center animate-float">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 font-mono">
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

      {/* Process Section */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm mb-4">
              &gt; Initializing deployment pipeline...
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">Our <span className="gradient-text">Process</span></h2>
            <p className="text-xl text-gray-300">
              Battle-tested methodology ensuring enterprise-grade project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-neon-cyan to-neon-green text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold font-mono neon-border">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 font-mono">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black border-y border-neon-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="terminal-text text-sm mb-4">
            &gt; system.ready_for_deployment: TRUE
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 font-mono">
            Ready to <span className="neon-text">Deploy</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our elite teams are standing by to architect your next-generation solutions. 
            Let&apos;s build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-neon-cyan to-neon-green text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 inline-flex items-center justify-center font-mono"
            >
              &gt; Initialize Project
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
      </section>

      <Footer />
    </div>
  )
}
