'use client'

import { useState } from 'react'
import { Send, Sparkles, Code, BarChart3, Zap } from 'lucide-react'

export default function AITrialSection() {
  const [prompt, setPrompt] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [response, setResponse] = useState('')

  const samplePrompts = [
    "Create a modern e-commerce website with React and payment integration",
    "Analyze customer churn data and predict retention rates",
    "Build a real-time dashboard for IoT sensor monitoring",
    "Design a machine learning model for fraud detection",
    "Develop a mobile app for inventory management"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsProcessing(true)
    setResponse('')

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate a realistic response based on the prompt
    const responses = {
      website: "I&apos;ll create a modern, responsive website using Next.js 14, TypeScript, and Tailwind CSS. The architecture will include: authentication system, payment gateway integration (Stripe), product catalog with search/filter, shopping cart functionality, admin dashboard, and SEO optimization. Estimated timeline: 2-3 weeks.",
      data: "I&apos;ll perform comprehensive data analysis using Python, pandas, and scikit-learn. The process includes: data cleaning and preprocessing, exploratory data analysis with visualizations, statistical modeling, predictive analytics, and interactive dashboard creation. I&apos;ll provide actionable insights with detailed reports.",
      dashboard: "I&apos;ll build a real-time dashboard using React, WebSocket connections, and D3.js for data visualization. Features include: live data streaming, customizable widgets, alert systems, historical data analysis, and mobile-responsive design. Backend will use Node.js with database optimization.",
      app: "I&apos;ll develop a cross-platform mobile application using React Native or Flutter. Core features: user authentication, real-time synchronization, offline capabilities, push notifications, and intuitive UI/UX design following platform guidelines.",
      default: "I&apos;ll analyze your requirements and propose a comprehensive solution using cutting-edge technologies. Our approach includes: requirement analysis, architecture design, technology stack selection, development timeline, and deployment strategy. Let&apos;s discuss your specific needs in detail."
    }

    let responseText = responses.default
    const lowerPrompt = prompt.toLowerCase()
    
    if (lowerPrompt.includes('website') || lowerPrompt.includes('web')) {
      responseText = responses.website
    } else if (lowerPrompt.includes('data') || lowerPrompt.includes('analyz')) {
      responseText = responses.data
    } else if (lowerPrompt.includes('dashboard') || lowerPrompt.includes('monitor')) {
      responseText = responses.dashboard
    } else if (lowerPrompt.includes('app') || lowerPrompt.includes('mobile')) {
      responseText = responses.app
    }

    setResponse(responseText)
    setIsProcessing(false)
  }

  const handleSampleClick = (samplePrompt: string) => {
    setPrompt(samplePrompt)
    setResponse('')
  }

  return (
    <section className="py-16 bg-gradient-to-br from-dark-50 to-black border-y border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="terminal-text text-sm mb-4 animate-pulse">
            &gt; Initializing AI demonstration module...
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <Sparkles className="inline w-8 h-8 text-neon-cyan mr-3" />
            Try Our <span className="gradient-text">AI Assistant</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience KHIM-TECH&apos;s AI capabilities. Describe your project and get instant insights 
            on how our team would approach your solution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Sample Prompts */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 font-mono text-center">
              &gt; Try these sample prompts:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {samplePrompts.map((sample, index) => (
                <button
                  key={index}
                  onClick={() => handleSampleClick(sample)}
                  className="text-left p-3 bg-dark-50 border border-neon-cyan/30 rounded-lg hover:border-neon-cyan/60 hover:bg-neon-cyan/5 transition-all duration-300 text-sm text-gray-300 hover:text-white"
                >
                  <Code className="w-4 h-4 text-neon-cyan mb-2" />
                  {sample}
                </button>
              ))}
            </div>
          </div>

          {/* AI Prompt Interface */}
          <div className="glass-effect p-8 rounded-lg neon-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="ai-prompt" className="block text-sm font-medium text-white mb-2 font-mono">
                  &gt; Describe your project:
                </label>
                <textarea
                  id="ai-prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., Create a website for my restaurant with online ordering..."
                  className="w-full h-32 bg-black border border-neon-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:outline-none font-mono text-sm resize-none"
                  disabled={isProcessing}
                />
              </div>
              
              <button
                type="submit"
                disabled={!prompt.trim() || isProcessing}
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-green text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-mono flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <Zap className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    &gt; Analyze Project
                  </>
                )}
              </button>
            </form>

            {/* AI Response */}
            {response && (
              <div className="mt-8 p-6 bg-black border border-neon-green/30 rounded-lg">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-5 h-5 text-neon-green mr-2" />
                  <h4 className="text-lg font-semibold text-white font-mono">
                    AI Analysis Complete
                  </h4>
                </div>
                <div className="terminal-text text-xs mb-3 text-neon-green">
                  &gt; KHIM-TECH_AI_ASSISTANT: Response generated
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {response}
                </p>
                <div className="mt-6 p-4 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg">
                  <p className="text-neon-cyan text-sm font-mono">
                    &gt; Ready to turn this into reality? 
                    <span className="text-white ml-2">
                      Contact our team to get started with your project.
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Demo Notice */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 font-mono">
                * This is a demonstration of our AI capabilities. 
                <br />
                Actual project consultation requires direct team engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
