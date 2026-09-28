import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Portfolio() {
  const featuredProjects = [
    {
      title: "Enterprise AI Trading Platform",
      description: "A high-frequency trading system processing millions of transactions daily with real-time ML predictions, risk management, and automated portfolio optimization for institutional clients.",
      technologies: ["Python", "TensorFlow", "Apache Kafka", "Redis", "PostgreSQL", "React"],
      category: "AI & Machine Learning",
      image: "/api/placeholder/600/400",
      features: [
        "Real-time ML predictions",
        "High-frequency trading algorithms",
        "Risk management systems",
        "Portfolio optimization",
        "Regulatory compliance"
      ]
    },
    {
      title: "Global Supply Chain Analytics",
      description: "An enterprise-scale platform for Fortune 500 companies providing real-time supply chain visibility, predictive analytics, and automated optimization across global operations.",
      technologies: ["Java", "Spring Boot", "Apache Spark", "Kubernetes", "React", "MongoDB"],
      category: "Data Engineering",
      image: "/api/placeholder/600/400",
      features: [
        "Real-time supply chain tracking",
        "Predictive demand forecasting",
        "Automated optimization",
        "Global operations dashboard",
        "Multi-tenant architecture"
      ]
    },
    {
      title: "Healthcare AI Diagnostic System",
      description: "A medical AI platform deployed across 50+ hospitals, providing real-time diagnostic assistance, patient risk assessment, and treatment recommendations with 99.2% accuracy.",
      technologies: ["Python", "PyTorch", "FastAPI", "Docker", "PostgreSQL", "Vue.js"],
      category: "AI & Machine Learning",
      image: "/api/placeholder/600/400",
      features: [
        "Medical image analysis",
        "Real-time diagnostics",
        "Patient risk scoring",
        "Treatment recommendations",
        "HIPAA compliance"
      ]
    }
  ]

  const additionalProjects = [
    {
      title: "Fintech Fraud Detection Engine",
      description: "Real-time fraud detection system processing 100M+ transactions daily for major financial institutions, reducing false positives by 85% while maintaining 99.9% accuracy.",
      technologies: ["Python", "Apache Kafka", "TensorFlow", "Redis"],
      category: "AI & Machine Learning"
    },
    {
      title: "Smart City IoT Analytics Platform",
      description: "Municipal IoT data platform managing 50K+ sensors across traffic, energy, and environmental systems, providing real-time insights for urban optimization.",
      technologies: ["Java", "Apache Storm", "InfluxDB", "Grafana"],
      category: "Data Engineering"
    },
    {
      title: "Enterprise Customer Intelligence Hub",
      description: "360-degree customer analytics platform serving Fortune 100 companies, processing behavioral data from 10M+ users to drive personalization and retention strategies.",
      technologies: ["Scala", "Apache Spark", "Elasticsearch", "React"],
      category: "Business Intelligence"
    },
    {
      title: "Autonomous Vehicle ML Pipeline",
      description: "Computer vision and sensor fusion platform for autonomous vehicles, processing real-time data from cameras, LiDAR, and radar systems for navigation decisions.",
      technologies: ["Python", "PyTorch", "CUDA", "ROS"],
      category: "AI & Machine Learning"
    },
    {
      title: "Global Energy Grid Optimizer",
      description: "Smart grid optimization system managing renewable energy distribution across multiple countries, reducing waste by 30% and improving grid stability.",
      technologies: ["C++", "Apache Flink", "TimescaleDB", "Angular"],
      category: "Data Engineering"
    },
    {
      title: "Pharmaceutical Research Platform",
      description: "Drug discovery acceleration platform using AI to analyze molecular structures and predict compound efficacy, reducing research timelines by 40%.",
      technologies: ["Python", "PyTorch", "MongoDB", "Vue.js"],
      category: "AI & Machine Learning"
    }
  ]

  return (
    <div className="brand-page">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-emerald-ink text-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Elite Projects
            </h1>
            <p className="text-xl text-champagne/90 max-w-3xl mx-auto">
              Mission-critical systems deployed across Fortune 500 enterprises,
              processing billions of transactions and transforming industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-champagne-100 border-y border-emerald-ink/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-ink mb-2">500+</div>
              <div className="text-emerald-ink/80">Enterprise Systems</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-ink mb-2">100+</div>
              <div className="text-emerald-ink/80">AI Platforms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-ink mb-2">10B+</div>
              <div className="text-emerald-ink/80">Records Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-ink mb-2">99.9%</div>
              <div className="text-emerald-ink/80">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-ink mb-4">Mission Critical</h2>
            <p className="text-xl text-emerald-ink/80">
              Enterprise-scale solutions powering the world&apos;s most demanding systems
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-emerald-ink text-champagne px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-ink mb-4">
                    {project.title}
                  </h3>
                  <p className="text-emerald-ink/90 mb-6">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-emerald-ink mb-3">Core Systems:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-emerald-ink rounded-full mr-3"></div>
                          <span className="text-emerald-ink/90 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-emerald-ink mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-champagne-100 text-emerald-ink px-3 py-1 rounded-full text-sm border border-emerald-ink/25">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white p-4 rounded-lg border border-emerald-ink/15 shadow-sm">
                    <div className="aspect-video bg-champagne-100 rounded-lg flex items-center justify-center">
                      <div className="text-emerald-ink text-6xl font-bold opacity-70">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="py-16 bg-champagne-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-ink mb-4">Active Deployments</h2>
            <p className="text-xl text-emerald-ink/80">
              Additional enterprise solutions currently powering global operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-emerald-ink/15 shadow-sm hover:shadow-md hover:border-emerald-ink/40 transition-all duration-300">
                <div className="bg-emerald-ink text-champagne px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-emerald-ink mb-3">
                  {project.title}
                </h3>
                <p className="text-emerald-ink/90 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-champagne-100 text-emerald-ink px-2 py-1 rounded text-xs border border-emerald-ink/25">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-ink text-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Deploy?
          </h2>
          <p className="text-xl text-champagne/90 mb-8 max-w-2xl mx-auto">
            Our elite engineering teams are standing by to architect your next
            mission-critical system. Let&apos;s build the impossible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-champagne text-emerald-ink px-8 py-3 rounded-lg font-semibold hover:bg-champagne-300 transition-all duration-300 inline-flex items-center justify-center"
            >
              Initialize Mission
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="border border-champagne text-champagne px-8 py-3 rounded-lg font-semibold hover:bg-emerald-ink-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
