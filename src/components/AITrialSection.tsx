'use client'

import { useState } from 'react'
import { Send, Sparkles, Code, BarChart3, Zap, Lock, Crown } from 'lucide-react'

export default function AITrialSection() {
  const [prompt, setPrompt] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [response, setResponse] = useState<{type: string, code: string, preview: string, description: string, livePreview: string} | null>(null)

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
        description: "Generated a complete React e-commerce website starter with Stripe payment integration, product catalog, user authentication, and admin dashboard. Includes responsive design and SEO optimization.",
        livePreview: `
          <div style="min-height: 400px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; position: relative; overflow: hidden;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.1);"></div>
            <nav style="position: relative; z-10; display: flex; justify-content: space-between; align-items: center; padding: 24px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.2);">
              <h1 style="font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">ShopTech</h1>
              <div style="display: flex; align-items: center; gap: 16px;">
                <button style="padding: 12px 20px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 12px; font-weight: 600; box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3); transition: all 0.3s ease;">
                  🛒 Cart (3)
                </button>
              </div>
            </nav>
            
            <main style="position: relative; z-10; padding: 48px 24px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px);">
              <div style="max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 48px;">
                  <h2 style="font-size: 56px; font-weight: 900; margin-bottom: 24px; background: linear-gradient(135deg, #1e293b, #475569); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    Premium Collection
                  </h2>
                  <p style="font-size: 20px; color: #64748b; margin-bottom: 32px; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.6;">
                    Discover our curated collection of luxury items crafted by world-class artisans
                  </p>
                  <button style="padding: 16px 40px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 16px; font-size: 18px; font-weight: 600; box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4); transition: all 0.3s ease; transform: translateY(0);">
                    Explore Collection
                  </button>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
                  <div style="background: white; border-radius: 24px; padding: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.2);">
                    <div style="width: 100%; height: 240px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; margin-bottom: 20px; position: relative; overflow: hidden;">
                      <div style="position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.9); border-radius: 8px; padding: 8px; backdrop-filter: blur(10px);">
                        <span style="font-size: 12px; font-weight: 600; color: #667eea;">NEW</span>
                      </div>
                      <div style="position: absolute; bottom: 16px; left: 16px; color: white; font-weight: 600;">Premium Item</div>
                    </div>
                    <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 12px; color: #1e293b;">Luxury Watch</h3>
                    <p style="color: #64748b; margin-bottom: 20px; line-height: 1.5;">Swiss-made timepiece with premium materials and precision engineering</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <div style="font-size: 24px; font-weight: 800; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">$2,499</div>
                      <button style="padding: 10px 20px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 12px; font-weight: 600; font-size: 14px;">Add to Cart</button>
                    </div>
                  </div>
                  <div style="background: white; border-radius: 24px; padding: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.2);">
                    <div style="width: 100%; height: 240px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 16px; margin-bottom: 20px; position: relative; overflow: hidden;">
                      <div style="position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.9); border-radius: 8px; padding: 8px; backdrop-filter: blur(10px);">
                        <span style="font-size: 12px; font-weight: 600; color: #f5576c;">HOT</span>
                      </div>
                      <div style="position: absolute; bottom: 16px; left: 16px; color: white; font-weight: 600;">Trending</div>
                    </div>
                    <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 12px; color: #1e293b;">Designer Bag</h3>
                    <p style="color: #64748b; margin-bottom: 20px; line-height: 1.5;">Handcrafted leather bag with modern design and premium finish</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <div style="font-size: 24px; font-weight: 800; background: linear-gradient(135deg, #f093fb, #f5576c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">$899</div>
                      <button style="padding: 10px 20px; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; border: none; border-radius: 12px; font-weight: 600; font-size: 14px;">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        `
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
        description: "Generated complete customer churn analysis pipeline with machine learning predictions, risk segmentation, and automated reporting dashboard. Includes data preprocessing, feature engineering, and business intelligence insights.",
        livePreview: `
          <div style="min-height: 400px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 24px; position: relative; overflow: hidden;">
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.1), transparent 50%), radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.1), transparent 50%);"></div>
            <div style="position: relative; z-10; background: rgba(30, 41, 59, 0.8); border-radius: 20px; padding: 32px; backdrop-filter: blur(20px); border: 1px solid rgba(6, 182, 212, 0.2); box-shadow: 0 25px 50px rgba(0,0,0,0.3);">
              <div style="display: flex; items-center; margin-bottom: 32px;">
                <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #06b6d4, #10b981); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 20px; box-shadow: 0 8px 32px rgba(6, 182, 212, 0.3);">
                  <span style="font-size: 24px;">📊</span>
                </div>
                <div>
                  <h3 style="color: #06b6d4; font-size: 24px; font-weight: 700; margin-bottom: 4px;">Customer Churn Analytics</h3>
                  <div style="color: #94a3b8; font-size: 14px; font-family: 'Courier New', monospace;">Real-time ML Predictions • Live Dashboard</div>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-bottom: 32px;">
                <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0.08)); padding: 28px; border-radius: 20px; text-align: center; border: 1px solid rgba(239, 68, 68, 0.3); backdrop-filter: blur(15px); box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);">
                  <div style="color: #ef4444; font-size: 42px; font-weight: 900; margin-bottom: 12px; text-shadow: 0 0 30px rgba(239, 68, 68, 0.6);">23.4%</div>
                  <div style="color: #f1f5f9; font-size: 16px; font-weight: 700; margin-bottom: 12px;">Churn Rate</div>
                  <div style="width: 100%; height: 8px; background: rgba(239, 68, 68, 0.2); border-radius: 4px; overflow: hidden;">
                    <div style="width: 23%; height: 100%; background: linear-gradient(90deg, #ef4444, #f87171); border-radius: 4px; box-shadow: 0 0 15px rgba(239, 68, 68, 0.6); animation: pulse 3s infinite;"></div>
                  </div>
                  <div style="margin-top: 12px; color: #fca5a5; font-size: 12px; font-weight: 500;">↑ 2.1% vs last month</div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.08)); padding: 28px; border-radius: 20px; text-align: center; border: 1px solid rgba(16, 185, 129, 0.3); backdrop-filter: blur(15px); box-shadow: 0 8px 32px rgba(16, 185, 129, 0.2);">
                  <div style="color: #10b981; font-size: 42px; font-weight: 900; margin-bottom: 12px; text-shadow: 0 0 30px rgba(16, 185, 129, 0.6);">87.2%</div>
                  <div style="color: #f1f5f9; font-size: 16px; font-weight: 700; margin-bottom: 12px;">Model Accuracy</div>
                  <div style="width: 100%; height: 8px; background: rgba(16, 185, 129, 0.2); border-radius: 4px; overflow: hidden;">
                    <div style="width: 87%; height: 100%; background: linear-gradient(90deg, #10b981, #34d399); border-radius: 4px; box-shadow: 0 0 15px rgba(16, 185, 129, 0.6); animation: pulse 3s infinite;"></div>
                  </div>
                  <div style="margin-top: 12px; color: #86efac; font-size: 12px; font-weight: 500;">↑ 3.2% improvement</div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.08)); padding: 28px; border-radius: 20px; text-align: center; border: 1px solid rgba(245, 158, 11, 0.3); backdrop-filter: blur(15px); box-shadow: 0 8px 32px rgba(245, 158, 11, 0.2);">
                  <div style="color: #f59e0b; font-size: 42px; font-weight: 900; margin-bottom: 12px; text-shadow: 0 0 30px rgba(245, 158, 11, 0.6);">142</div>
                  <div style="color: #f1f5f9; font-size: 16px; font-weight: 700; margin-bottom: 12px;">At-Risk Customers</div>
                  <div style="width: 100%; height: 8px; background: rgba(245, 158, 11, 0.2); border-radius: 4px; overflow: hidden;">
                    <div style="width: 45%; height: 100%; background: linear-gradient(90deg, #f59e0b, #fbbf24); border-radius: 4px; box-shadow: 0 0 15px rgba(245, 158, 11, 0.6); animation: pulse 3s infinite;"></div>
                  </div>
                  <div style="margin-top: 12px; color: #fcd34d; font-size: 12px; font-weight: 500;">Requires attention</div>
                </div>
              </div>
              
              <div style="background: rgba(51, 65, 85, 0.6); height: 220px; border-radius: 16px; padding: 24px; position: relative; overflow: hidden; border: 1px solid rgba(6, 182, 212, 0.2); backdrop-filter: blur(10px);">
                <div style="color: #94a3b8; font-size: 16px; font-weight: 600; margin-bottom: 20px; display: flex; align-items: center;">
                  <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; margin-right: 12px; box-shadow: 0 0 10px rgba(16, 185, 129, 0.8); animation: pulse 2s infinite;"></div>
                  Real-time Prediction Stream
                </div>
                <svg style="width: 100%; height: 140px; filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.3));">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#10b981;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <polyline points="0,70 40,55 80,80 120,45 160,65 200,50 240,75 280,40 320,60" stroke="url(#gradient1)" stroke-width="3" fill="none" stroke-linecap="round"/>
                  <polyline points="0,90 40,85 80,100 120,75 160,95 200,80 240,105 280,70 320,90" stroke="#f59e0b" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
                </svg>
                <div style="position: absolute; bottom: 16px; right: 16px; color: #06b6d4; font-size: 12px; font-weight: 600; display: flex; align-items: center;">
                  <div style="width: 6px; height: 6px; background: #10b981; border-radius: 50%; margin-right: 8px; animation: pulse 1s infinite;"></div>
                  Live ML Processing
                </div>
              </div>
            </div>
          </div>
        `
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
        description: "Generated complete IoT monitoring solution with WebSocket real-time data streaming, interactive charts, alert systems, and mobile-responsive design. Includes backend API and database optimization.",
        livePreview: `
          <div style="min-height: 400px; background: linear-gradient(135deg, #0c4a6e 0%, #155e75 50%, #0e7490 100%); color: white; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 24px; position: relative; overflow: hidden;">
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.15), transparent 40%), radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 60%);"></div>
            <div style="position: relative; z-10; background: rgba(15, 23, 42, 0.85); border-radius: 24px; padding: 32px; backdrop-filter: blur(20px); border: 1px solid rgba(6, 182, 212, 0.3); box-shadow: 0 25px 50px rgba(0,0,0,0.4);">
              <div style="display: flex; items-center; margin-bottom: 32px;">
                <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #06b6d4, #0891b2); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-right: 24px; box-shadow: 0 12px 40px rgba(6, 182, 212, 0.4);">
                  <span style="font-size: 28px;">🌡️</span>
                </div>
                <div>
                  <h3 style="color: #06b6d4; font-size: 28px; font-weight: 800; margin-bottom: 6px; text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);">IoT Control Center</h3>
                  <div style="color: #94a3b8; font-size: 16px; font-family: 'SF Mono', 'Monaco', monospace; display: flex; align-items: center;">
                    <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; margin-right: 8px; box-shadow: 0 0 10px rgba(16, 185, 129, 0.8); animation: pulse 1.5s infinite;"></div>
                    Real-time Monitoring • 24/7 Active
                  </div>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-bottom: 32px;">
                <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.05)); padding: 28px; border-radius: 20px; text-align: center; border: 1px solid rgba(6, 182, 212, 0.3); backdrop-filter: blur(15px); box-shadow: 0 8px 32px rgba(6, 182, 212, 0.2);">
                  <div style="color: #06b6d4; font-size: 42px; font-weight: 900; margin-bottom: 12px; text-shadow: 0 0 30px rgba(6, 182, 212, 0.6);">24.5°C</div>
                  <div style="color: #f1f5f9; font-size: 16px; font-weight: 700; margin-bottom: 12px;">Temperature</div>
                  <div style="width: 100%; height: 8px; background: rgba(6, 182, 212, 0.2); border-radius: 4px; overflow: hidden;">
                    <div style="width: 65%; height: 100%; background: linear-gradient(90deg, #06b6d4, #0891b2); border-radius: 4px; box-shadow: 0 0 15px rgba(6, 182, 212, 0.6); animation: pulse 3s infinite;"></div>
                  </div>
                  <div style="margin-top: 12px; color: #94a3b8; font-size: 12px; font-weight: 500;">Optimal Range</div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 28px; border-radius: 20px; text-align: center; border: 1px solid rgba(16, 185, 129, 0.3); backdrop-filter: blur(15px); box-shadow: 0 8px 32px rgba(16, 185, 129, 0.2);">
                  <div style="color: #10b981; font-size: 42px; font-weight: 900; margin-bottom: 12px; text-shadow: 0 0 30px rgba(16, 185, 129, 0.6);">68%</div>
                  <div style="color: #f1f5f9; font-size: 16px; font-weight: 700; margin-bottom: 12px;">Humidity</div>
                  <div style="width: 100%; height: 8px; background: rgba(16, 185, 129, 0.2); border-radius: 4px; overflow: hidden;">
                    <div style="width: 68%; height: 100%; background: linear-gradient(90deg, #10b981, #059669); border-radius: 4px; box-shadow: 0 0 15px rgba(16, 185, 129, 0.6); animation: pulse 3s infinite;"></div>
                  </div>
                  <div style="margin-top: 12px; color: #94a3b8; font-size: 12px; font-weight: 500;">Normal Level</div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 28px; border-radius: 20px; text-align: center; border: 1px solid rgba(245, 158, 11, 0.3); backdrop-filter: blur(15px); box-shadow: 0 8px 32px rgba(245, 158, 11, 0.2);">
                  <div style="color: #f59e0b; font-size: 32px; font-weight: 900; margin-bottom: 12px; text-shadow: 0 0 30px rgba(245, 158, 11, 0.6); display: flex; align-items: center; justify-content: center;">
                    <span style="margin-right: 8px;">⚡</span> ONLINE
                  </div>
                  <div style="color: #f1f5f9; font-size: 16px; font-weight: 700; margin-bottom: 12px;">System Status</div>
                  <div style="width: 16px; height: 16px; background: #10b981; border-radius: 50%; margin: 12px auto; box-shadow: 0 0 25px rgba(16, 185, 129, 1); animation: pulse 1.5s infinite;"></div>
                  <div style="margin-top: 8px; color: #94a3b8; font-size: 12px; font-weight: 500;">All Systems Active</div>
                </div>
              </div>
              
              <div style="background: rgba(30, 41, 59, 0.7); height: 200px; border-radius: 20px; padding: 28px; position: relative; overflow: hidden; border: 1px solid rgba(6, 182, 212, 0.3); backdrop-filter: blur(15px); box-shadow: inset 0 0 30px rgba(6, 182, 212, 0.1);">
                <div style="color: #f1f5f9; font-size: 18px; font-weight: 700; margin-bottom: 24px; display: flex; align-items: center;">
                  <div style="width: 12px; height: 12px; background: #10b981; border-radius: 50%; margin-right: 16px; box-shadow: 0 0 20px rgba(16, 185, 129, 1); animation: pulse 2s infinite;"></div>
                  Live Sensor Data Stream
                </div>
                <svg style="width: 100%; height: 120px; filter: drop-shadow(0 0 15px rgba(6, 182, 212, 0.4));">
                  <defs>
                    <linearGradient id="iotGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.8" />
                      <stop offset="50%" style="stop-color:#10b981;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#0891b2;stop-opacity:0.8" />
                    </linearGradient>
                  </defs>
                  <polyline points="0,60 50,45 100,70 150,35 200,55 250,40 300,65 350,30" stroke="url(#iotGradient)" stroke-width="4" fill="none" stroke-linecap="round"/>
                  <polyline points="0,80 50,75 100,90 150,65 200,85 250,70 300,95 350,60" stroke="#f59e0b" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8"/>
                  <circle cx="300" cy="65" r="4" fill="#06b6d4" style="animation: pulse 2s infinite;">
                    <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                <div style="position: absolute; bottom: 20px; right: 20px; background: rgba(6, 182, 212, 0.2); color: #06b6d4; padding: 8px 16px; border-radius: 12px; font-size: 14px; font-weight: 600; border: 1px solid rgba(6, 182, 212, 0.4); backdrop-filter: blur(10px);">
                  <div style="display: flex; align-items: center;">
                    <div style="width: 6px; height: 6px; background: #10b981; border-radius: 50%; margin-right: 8px; animation: pulse 1s infinite;"></div>
                    Real-time Processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
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
        description: "Generated custom solution architecture with security protocols, scalable backend, and modern frontend. Includes API design, database optimization, and deployment configuration.",
        livePreview: `
          <div style="min-height: 400px; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%); color: #1e293b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 24px; position: relative; overflow: hidden;">
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.08), transparent 50%), radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.08), transparent 50%);"></div>
            <div style="position: relative; z-10; background: rgba(255, 255, 255, 0.95); border-radius: 24px; padding: 32px; backdrop-filter: blur(20px); border: 1px solid rgba(6, 182, 212, 0.15); box-shadow: 0 25px 50px rgba(0,0,0,0.1);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px solid #f1f5f9;">
                <div style="display: flex; align-items: center;">
                  <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #06b6d4, #0891b2); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-right: 20px; box-shadow: 0 12px 40px rgba(6, 182, 212, 0.3);">
                    <span style="font-size: 24px; color: white;">🛍️</span>
                  </div>
                  <div>
                    <h1 style="color: #1e293b; font-size: 32px; font-weight: 900; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">TechStore Pro</h1>
                    <div style="color: #64748b; font-size: 14px; font-weight: 500; margin-top: 4px;">Premium Technology Marketplace</div>
                  </div>
                </div>
                <div style="display: flex; gap: 20px; align-items: center;">
                  <div style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white; padding: 12px 24px; border-radius: 16px; font-size: 16px; font-weight: 700; box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4); display: flex; align-items: center;">
                    <span style="margin-right: 8px; font-size: 20px;">🛒</span> Cart (3)
                  </div>
                  <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 12px 24px; border-radius: 16px; font-size: 16px; font-weight: 700; box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);">Login</div>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px;">
                <div style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9)); border: 2px solid rgba(6, 182, 212, 0.15); border-radius: 20px; padding: 24px; text-align: center; box-shadow: 0 12px 40px rgba(0,0,0,0.08); backdrop-filter: blur(15px); transition: all 0.3s ease;">
                  <div style="width: 100%; height: 160px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; color: #64748b; position: relative; overflow: hidden;">
                    <div style="position: absolute; inset: 0; background: linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%); animation: shimmer 2s infinite;"></div>
                    <div style="position: relative; z-10; font-size: 48px;">📱</div>
                  </div>
                  <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 12px; color: #1e293b;">Premium Smartphone</h3>
                  <p style="color: #64748b; font-size: 15px; margin-bottom: 20px; line-height: 1.5;">Latest flagship model with advanced AI camera and 5G connectivity</p>
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <div style="display: flex; align-items: center;">
                      <span style="font-size: 28px; font-weight: 900; color: #06b6d4; text-shadow: 0 2px 4px rgba(6, 182, 212, 0.3);">$899</span>
                      <span style="font-size: 18px; color: #94a3b8; text-decoration: line-through; margin-left: 12px;">$1,199</span>
                    </div>
                    <div style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 700; box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);">25% OFF</div>
                  </div>
                  <button style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white; border: none; padding: 16px 32px; border-radius: 16px; cursor: pointer; font-size: 16px; font-weight: 700; width: 100%; box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4); transition: all 0.3s ease;">Add to Cart</button>
                </div>
                
                <div style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9)); border: 2px solid rgba(16, 185, 129, 0.15); border-radius: 20px; padding: 24px; text-align: center; box-shadow: 0 12px 40px rgba(0,0,0,0.08); backdrop-filter: blur(15px); transition: all 0.3s ease;">
                  <div style="width: 100%; height: 160px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; color: #64748b; position: relative; overflow: hidden;">
                    <div style="position: absolute; inset: 0; background: linear-gradient(45deg, transparent 30%, rgba(16, 185, 129, 0.1) 50%, transparent 70%); animation: shimmer 2s infinite;"></div>
                    <div style="position: relative; z-10; font-size: 48px;">💻</div>
                  </div>
                  <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 12px; color: #1e293b;">Gaming Laptop</h3>
                  <p style="color: #64748b; font-size: 15px; margin-bottom: 20px; line-height: 1.5;">High-performance gaming laptop with RTX graphics and ultra-fast SSD</p>
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <div style="display: flex; align-items: center;">
                      <span style="font-size: 28px; font-weight: 900; color: #10b981; text-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);">$1,299</span>
                      <span style="font-size: 18px; color: #94a3b8; text-decoration: line-through; margin-left: 12px;">$1,599</span>
                    </div>
                    <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 700; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);">LIMITED</div>
                  </div>
                  <button style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; padding: 16px 32px; border-radius: 16px; cursor: pointer; font-size: 16px; font-weight: 700; width: 100%; box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4); transition: all 0.3s ease;">Add to Cart</button>
                </div>
              </div>
              
              <div style="margin-top: 32px; padding: 24px; background: linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(16, 185, 129, 0.05)); border-radius: 20px; border: 1px solid rgba(6, 182, 212, 0.2);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div style="display: flex; align-items: center;">
                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #06b6d4, #0891b2); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; box-shadow: 0 8px 25px rgba(6, 182, 212, 0.3);">
                      <span style="color: white; font-size: 20px;">🚚</span>
                    </div>
                    <div>
                      <div style="font-weight: 700; color: #1e293b; font-size: 16px;">Free Express Shipping</div>
                      <div style="color: #64748b; font-size: 14px;">On orders over $500</div>
                    </div>
                  </div>
                  <div style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white; padding: 12px 24px; border-radius: 16px; font-size: 14px; font-weight: 700; box-shadow: 0 6px 20px rgba(6, 182, 212, 0.4);">Shop Now</div>
                </div>
              </div>
            </div>
          </div>
        `,
        <div style="display: flex; justify-content: space-around; align-items: end; height: 80px; margin-bottom: 16px;">
                  <div style="width: 20px; height: 60px; background: #3b82f6; border-radius: 4px;"></div>
                  <div style="width: 20px; height: 45px; background: #10b981; border-radius: 4px;"></div>
                  <div style="width: 20px; height: 70px; background: #f59e0b; border-radius: 4px;"></div>
                  <div style="width: 20px; height: 35px; background: #ef4444; border-radius: 4px;"></div>
                </div>
                <button style="padding: 8px 24px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer;">
                  View Details
                </button>
              </div>
            </div>
          </div>
        `
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
                {/* Code and Live Preview Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Generated Code Preview */}
                  <div className="bg-black border border-neon-green/30 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-neon-green/30">
                      <div className="flex items-center">
                        <Code className="w-5 h-5 text-neon-green mr-2" />
                        <h4 className="text-lg font-semibold text-white font-mono">
                          Generated Code
                        </h4>
                      </div>
                      <div className="flex items-center text-xs text-gray-400 font-mono">
                        <Lock className="w-4 h-4 mr-1" />
                        Preview Mode
                      </div>
                    </div>
                    
                    <div className="relative">
                      <pre className="p-6 text-sm text-gray-300 font-mono overflow-x-auto bg-gray-900 blur-sm select-none h-96">
                        <code>{response.code}</code>
                      </pre>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                        <div className="text-center p-6">
                          <Lock className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                          <p className="text-white font-mono text-lg mb-2">Code Locked</p>
                          <p className="text-gray-400 text-sm">Contact team for access</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Preview Window */}
                  <div className="bg-black border border-neon-cyan/30 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-neon-cyan/30">
                      <div className="flex items-center">
                        <Sparkles className="w-5 h-5 text-neon-cyan mr-2" />
                        <h4 className="text-lg font-semibold text-white font-mono">
                          Live Preview
                        </h4>
                      </div>
                      <div className="flex items-center text-xs text-gray-400 font-mono">
                        <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse"></div>
                        Running
                      </div>
                    </div>
                    
                    <div className="relative h-96 overflow-hidden">
                      <div 
                        className="w-full h-full overflow-auto select-none"
                        style={{
                          pointerEvents: 'none',
                          userSelect: 'none',
                          WebkitUserSelect: 'none',
                          MozUserSelect: 'none',
                          msUserSelect: 'none'
                        }}
                        dangerouslySetInnerHTML={{ __html: response.livePreview }}
                      />
                      <div className="absolute top-0 right-0 bg-neon-cyan/20 text-neon-cyan px-2 py-1 text-xs font-mono">
                        DEMO
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
