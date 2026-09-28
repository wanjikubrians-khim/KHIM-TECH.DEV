import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags.join(', '),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      type: 'article',
      url,
      publishedTime: post.date || undefined,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

function formatDate(dateString: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return dateString
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="brand-page">
      <Navbar />

      <div className="pt-28 pb-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-ink font-semibold hover:text-emerald-ink-700"
          >
            <ArrowLeft className="mr-1.5 w-4 h-4" aria-hidden="true" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-ink mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-emerald-ink/80 mb-5">
              <span className="inline-flex items-center">
                <Calendar className="w-4 h-4 mr-1.5" aria-hidden="true" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center">
                <Clock className="w-4 h-4 mr-1.5" aria-hidden="true" />
                {post.readingTimeMinutes} min read
              </span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-emerald-ink border border-emerald-ink/25 px-2.5 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Rendered from Markdown and sanitized (no raw HTML) in src/lib/posts.ts */}
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />

          <footer className="mt-12 pt-8 border-t border-emerald-ink/20">
            <Link
              href="/blog"
              className="inline-flex items-center bg-emerald-ink text-champagne px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-ink-700 transition-colors"
            >
              More Articles
            </Link>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  )
}
