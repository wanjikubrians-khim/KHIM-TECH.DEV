'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { PostMeta } from '@/lib/posts'

function formatDate(dateString: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return dateString
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogList({ posts, tags }: { posts: PostMeta[]; tags: string[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const shown = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts

  const chip = (selected: boolean) =>
    `px-3 py-1.5 rounded-full text-sm font-medium border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-ink ${
      selected
        ? 'bg-emerald-ink text-champagne border-emerald-ink'
        : 'bg-white text-emerald-ink border-emerald-ink/30 hover:bg-champagne-100'
    }`

  return (
    <div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter posts by tag">
          <button type="button" onClick={() => setActiveTag(null)} className={chip(activeTag === null)}>
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={chip(activeTag === tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shown.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-xl p-6 border border-emerald-ink/15 shadow-sm hover:shadow-md hover:border-emerald-ink/40 transition-all flex flex-col"
          >
            <div className="flex items-center text-sm text-emerald-ink/80 mb-3 gap-4">
              <span className="inline-flex items-center">
                <Calendar className="w-4 h-4 mr-1.5" aria-hidden="true" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center">
                <Clock className="w-4 h-4 mr-1.5" aria-hidden="true" />
                {post.readingTimeMinutes} min read
              </span>
            </div>

            <h2 className="text-xl font-bold text-emerald-ink mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-2">
                {post.title}
              </Link>
            </h2>

            <p className="text-emerald-ink/90 text-sm mb-4 flex-1">{post.excerpt}</p>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-champagne-100 text-emerald-ink border border-emerald-ink/20 px-2 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-emerald-ink font-semibold text-sm hover:text-emerald-ink-700"
            >
              Read article
              <ArrowRight className="ml-1.5 w-4 h-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="text-emerald-ink/80 text-center py-12">No posts for this tag yet.</p>
      )}
    </div>
  )
}
