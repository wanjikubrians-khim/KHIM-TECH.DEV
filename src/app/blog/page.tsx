import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogList from '@/components/BlogList'
import { getAllPosts, getAllTags } from '@/lib/posts'
import { SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, tutorials and case studies on data science, machine learning, and full-stack development from the KHIM-TECH team.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description:
      'Insights, tutorials and case studies on data science, machine learning, and full-stack development.',
    type: 'website',
    url: '/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="brand-page">
      <Navbar />

      <section className="pt-28 pb-12 bg-emerald-ink text-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Blog</h1>
          <p className="text-lg text-champagne/90 max-w-3xl">
            Insights, tutorials, and deep dives into data science, machine learning, and
            full-stack development from the team at KHIM-TECH.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-emerald-ink/80 text-center py-16">
              No posts yet. Add Markdown files under <code>content/blog/</code>.
            </p>
          ) : (
            <BlogList posts={posts} tags={tags} />
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
