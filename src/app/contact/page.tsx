'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "wanjikubrians11@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+254 791 710 423",
      description: "WhatsApp available 24/7"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Nairobi, Kenya",
      description: "Available for remote work globally"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "24 Hours",
      description: "We'll get back to you quickly"
    }
  ]

  const services = [
    "AI & Machine Learning",
    "Statistical Analysis",
    "Full-Stack Development",
    "Data Engineering",
    "Business Intelligence",
    "Web Consulting",
    "Other"
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-black via-dark-50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="terminal-text text-sm mb-4">
              &gt; Establishing secure communication channel...
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Initiate <span className="neon-text">Contact</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to deploy next-generation solutions? Our elite teams are standing by 
              to architect your mission-critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-dark-50 border-y border-neon-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-neon-cyan to-neon-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-border">
                  <div className="text-black">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                  {info.title}
                </h3>
                <p className="text-neon-cyan font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-gray-300 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass-card p-8 rounded-lg neon-border">
              <div className="terminal-text text-sm mb-4">
                &gt; Secure message transmission protocol active...
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 font-mono">
                Transmit <span className="neon-text">Message</span>
              </h2>
              
              {submitStatus === 'success' && (
                <div className="bg-neon-green/10 border border-neon-green text-neon-green px-4 py-3 rounded-lg mb-6 font-mono">
                  &gt; Message transmitted successfully! Response ETA: 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2 font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-50 border border-neon-cyan/30 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-50 border border-neon-cyan/30 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2 font-mono">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-50 border border-neon-cyan/30 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-white placeholder-gray-400"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2 font-mono">
                      Service Category
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-50 border border-neon-cyan/30 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-dark-50 text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2 font-mono">
                    Mission Brief *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-50 border border-neon-cyan/30 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-white placeholder-gray-400"
                    placeholder="Describe your mission parameters: project scope, technical requirements, timeline constraints, and strategic objectives..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-green text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-mono"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Transmitting...
                    </>
                  ) : (
                    <>
                      &gt; Transmit Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                  Mission <span className="neon-text">Parameters</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  Our elite engineering divisions specialize in architecting next-generation 
                  systems that power Fortune 500 enterprises. From AI-driven platforms to 
                  mission-critical infrastructure, we deliver the impossible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2 mr-3 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-white font-mono">Strategic Assessment</h4>
                      <p className="text-gray-300 text-sm">Comprehensive technical evaluation at no cost</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 mr-3 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-white font-mono">Enterprise Solutions</h4>
                      <p className="text-gray-300 text-sm">Architected for scale, security, and performance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 mr-3 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-white font-mono">24/7 Operations</h4>
                      <p className="text-gray-300 text-sm">Round-the-clock monitoring and support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-lg neon-border">
                <h4 className="text-lg font-semibold text-white mb-3 font-mono">
                  Deployment <span className="neon-text">Protocol</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-neon-cyan to-neon-green text-black rounded-full flex items-center justify-center text-xs font-bold mr-3">1</div>
                    <span className="text-gray-300">Secure channel established &lt; 24hrs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-neon-cyan to-neon-green text-black rounded-full flex items-center justify-center text-xs font-bold mr-3">2</div>
                    <span className="text-gray-300">Strategic briefing session initiated</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-neon-cyan to-neon-green text-black rounded-full flex items-center justify-center text-xs font-bold mr-3">3</div>
                    <span className="text-gray-300">Technical architecture blueprint delivered</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-neon-cyan to-neon-green text-black rounded-full flex items-center justify-center text-xs font-bold mr-3">4</div>
                    <span className="text-gray-300">Mission deployment commences</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
