import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// This will be replaced with actual API call later
async function getBlogPosts() {
  // For now, return empty array - posts will be added via API
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/posts`, {
      cache: 'no-store'
    })
    if (!res.ok) return []
    return await res.json()
  } catch {
    return []
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function getReadingTime(content: string) {
  const wordsPerMinute = 200
  const words = content.split(' ').length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

function createSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-black cyber-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-50 to-black opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="terminal-text text-sm mb-4 animate-pulse">
              &gt; Loading blog.khim-tech.dev...
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="font-mono">&lt;</span>Technical<span className="gradient-text"> Blog</span><span className="font-mono">/&gt;</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Insights, tutorials, and deep dives into data science, machine learning, and full-stack development 
              from our team of experts at KHIM-TECH.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="terminal-text text-sm mb-4">
                &gt; No posts found in database...
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 font-mono">
                Blog posts coming soon
              </h2>
              <p className="text-gray-300 mb-8">
                Our team is working on creating valuable content about data science, AI, and web development. 
                Check back soon for our latest insights and tutorials.
              </p>
              <div className="glass-effect p-6 rounded-lg neon-border max-w-md mx-auto">
                <div className="terminal-text text-xs mb-2">
                  &gt; system.status: CONTENT_PIPELINE_INITIALIZING
                </div>
                <p className="text-sm text-gray-300">
                  Our AI-powered blog system will start publishing technical articles soon.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <div className="terminal-text text-sm mb-4">
                  &gt; Found {posts.length} blog posts
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                  Latest <span className="gradient-text">Articles</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any, index: number) => (
                  <article key={post.id || index} className="glass-effect p-6 rounded-lg card-hover group">
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-400 mb-3 font-mono">
                        <Calendar className="w-4 h-4 mr-2 text-neon-cyan" />
                        {formatDate(post.created_at)}
                        <Clock className="w-4 h-4 ml-4 mr-2 text-neon-green" />
                        {getReadingTime(post.content)}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-neon-cyan transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-3">
                        {post.content.substring(0, 150)}...
                      </p>
                    </div>
                    
                    {post.keywords && post.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.keywords.slice(0, 3).map((keyword: string, i: number) => (
                          <span 
                            key={i} 
                            className="bg-neon-cyan/20 text-neon-cyan px-2 py-1 rounded text-xs font-mono"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Link
                      href={`/blog/${createSlug(post.title)}`}
                      className="inline-flex items-center text-neon-cyan hover:text-neon-green transition-colors font-mono text-sm"
                    >
                      &gt; Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}