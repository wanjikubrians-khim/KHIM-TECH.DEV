'use client'

import { useState } from 'react'
import { Send, Sparkles, Code, BarChart3, Zap, Lock, Crown } from 'lucide-react'

export default function AITrialSection() {
  const [prompt, setPrompt] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [response, setResponse] = useState<{type: string, code: string, preview: string, description: string} | null>(null)

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
    setResponse(null)

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Generate code and preview based on prompt
    const lowerPrompt = prompt.toLowerCase()
    let generatedResponse

    if (lowerPrompt.includes('website') || lowerPrompt.includes('web') || lowerPrompt.includes('ecommerce')) {
      generatedResponse = {
        type: "React Website",
        code: `// Landing Page Component
import React from 'react'
import { ShoppingCart, Star, Heart } from 'lucide-react'

export default function ProductLanding() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">ShopTech</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </nav>
      
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Premium Products
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our curated collection...
            </p>
            {/* Additional components... */}
          </div>
        </div>
      </main>
    </div>
  )
}`,
        preview: "Modern e-commerce landing page with product grid, shopping cart integration, and responsive design",
        description: "Generated a complete React e-commerce website starter with Stripe payment integration, product catalog, user authentication, and admin dashboard. Includes responsive design and SEO optimization."
      }
    } else if (lowerPrompt.includes('data') || lowerPrompt.includes('analyz') || lowerPrompt.includes('churn')) {
      generatedResponse = {
        type: "Data Analysis",
        code: `# Customer Churn Analysis
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import matplotlib.pyplot as plt
import seaborn as sns

# Load and preprocess data
df = pd.read_csv('customer_data.csv')
df_clean = df.dropna()

# Feature engineering
df_clean['tenure_months'] = df_clean['tenure'] / 30
df_clean['avg_monthly_spend'] = df_clean['total_spend'] / df_clean['tenure_months']

# Model training
features = ['tenure_months', 'avg_monthly_spend', 'support_tickets']
X = df_clean[features]
y = df_clean['churned']

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# Predictions and insights
predictions = model.predict_proba(X)[:, 1]
high_risk_customers = df_clean[predictions > 0.7]

print(f"High-risk customers: {len(high_risk_customers)}")
# Visualization and reporting...`,
        preview: "Comprehensive churn analysis with 87% accuracy prediction model and actionable customer retention insights",
        description: "Generated complete customer churn analysis pipeline with machine learning predictions, risk segmentation, and automated reporting dashboard. Includes data preprocessing, feature engineering, and business intelligence insights."
      }
    } else if (lowerPrompt.includes('dashboard') || lowerPrompt.includes('monitor') || lowerPrompt.includes('iot')) {
      generatedResponse = {
        type: "Real-time Dashboard",
        code: `// IoT Monitoring Dashboard
import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { Thermometer, Zap, Wifi } from 'lucide-react'

export default function IoTDashboard() {
  const [sensorData, setSensorData] = useState([])
  const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    // WebSocket connection for real-time data
    const ws = new WebSocket('ws://localhost:8080/sensors')
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setSensorData(prev => [...prev.slice(-20), data])
    }

    return () => ws.close()
  }, [])

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <Thermometer className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">
              {sensorData[sensorData.length - 1]?.temperature || '--'}°C
            </span>
          </div>
        </div>
        {/* Additional sensor cards... */}
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sensorData}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Line type="monotone" dataKey="temperature" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}`,
        preview: "Real-time IoT monitoring dashboard with live sensor data, alerts, and historical analytics",
        description: "Generated complete IoT monitoring solution with WebSocket real-time data streaming, interactive charts, alert systems, and mobile-responsive design. Includes backend API and database optimization."
      }
    } else {
      generatedResponse = {
        type: "Custom Solution",
        code: `// Custom Application Template
import React, { useState } from 'react'
import { Database, Shield, Zap } from 'lucide-react'

export default function CustomApp() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const handleProcess = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: data })
      })
      const result = await response.json()
      setData(result.processedData)
    } catch (error) {
      console.error('Processing failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Enterprise Solution
        </h1>
        <div className="flex items-center space-x-4">
          <Database className="w-6 h-6 text-blue-500" />
          <Shield className="w-6 h-6 text-green-500" />
          <Zap className="w-6 h-6 text-yellow-500" />
        </div>
      </header>
      
      <main>
        {/* Core functionality implementation... */}
      </main>
    </div>
  )
}`,
        preview: "Enterprise-grade application template with security, scalability, and modern architecture",
        description: "Generated custom solution architecture with security protocols, scalable backend, and modern frontend. Includes API design, database optimization, and deployment configuration."
      }
    }

    setResponse(generatedResponse)
    setIsProcessing(false)
  }

  const handleSampleClick = (samplePrompt: string) => {
    setPrompt(samplePrompt)
    setResponse(null)
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
              <div className="mt-8 space-y-6">
                {/* Generated Code Preview */}
                <div className="bg-black border border-neon-green/30 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between p-4 border-b border-neon-green/30">
                    <div className="flex items-center">
                      <Sparkles className="w-5 h-5 text-neon-green mr-2" />
                      <h4 className="text-lg font-semibold text-white font-mono">
                        Generated: {response.type}
                      </h4>
                    </div>
                    <div className="flex items-center text-xs text-gray-400 font-mono">
                      <Lock className="w-4 h-4 mr-1" />
                      Preview Mode
                    </div>
                  </div>
                  
                  <div className="relative">
                    <pre className="p-6 text-sm text-gray-300 font-mono overflow-x-auto bg-gray-900 blur-sm select-none">
                      <code>{response.code}</code>
                    </pre>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                      <div className="text-center p-6">
                        <Lock className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                        <p className="text-white font-mono text-lg mb-2">Code Preview Locked</p>
                        <p className="text-gray-400 text-sm">Contact our team to access full implementation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Preview */}
                <div className="bg-dark-50 border border-neon-cyan/30 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-5 h-5 text-neon-cyan mr-2" />
                    <h4 className="text-lg font-semibold text-white font-mono">
                      Project Preview
                    </h4>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {response.preview}
                  </p>
                  <div className="terminal-text text-xs mb-3 text-neon-green">
                    &gt; KHIM-TECH_AI_ASSISTANT: Analysis complete
                  </div>
                  <p className="text-gray-400 text-sm">
                    {response.description}
                  </p>
                </div>

                {/* Premium Upgrade Prompt */}
                <div className="bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-purple/50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Crown className="w-6 h-6 text-neon-purple mr-3" />
                    <h4 className="text-xl font-semibold text-white font-mono">
                      Ready for Full Implementation?
                    </h4>
                  </div>
                  <p className="text-gray-300 mb-6 text-sm">
                    This is just a preview of what our AI can generate. Get the complete project with:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                      Full source code & documentation
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                      Database design & API endpoints
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                      Deployment & hosting setup
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                      Ongoing support & maintenance
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-gradient-to-r from-neon-cyan to-neon-green text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 font-mono flex-1">
                      &gt; Contact Our Team
                    </button>
                    <button className="border border-neon-purple text-neon-purple px-6 py-3 rounded-lg font-semibold hover:bg-neon-purple/10 transition-all duration-300 font-mono">
                      &gt; Upgrade to Premium
                    </button>
                  </div>
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
