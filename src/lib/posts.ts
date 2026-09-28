import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
  title: string
  slug: string
  date: string
  description: string
  excerpt: string
  tags: string[]
  readingTimeMinutes: number
}

export interface Post extends PostMeta {
  html: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

function estimateReadingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

function toMeta(fileName: string, data: Record<string, unknown>, content: string): PostMeta {
  const title = String(data.title ?? 'Untitled')
  const slug = String(data.slug ?? slugify(title) ?? fileName.replace(/\.md$/, ''))
  const tags = Array.isArray(data.tags) ? data.tags.map((t) => String(t)) : []
  const readingTimeMinutes =
    typeof data.reading_time_minutes === 'number' && data.reading_time_minutes > 0
      ? data.reading_time_minutes
      : estimateReadingTime(content)

  return {
    title,
    slug,
    date: String(data.date ?? ''),
    description: String(data.description ?? data.excerpt ?? ''),
    excerpt: String(data.excerpt ?? data.description ?? ''),
    tags,
    readingTimeMinutes,
  }
}

function postFileNames(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs.readdirSync(POSTS_DIR).filter((name) => name.endsWith('.md'))
}

/** Render Markdown to sanitized HTML. Raw HTML in the source is dropped, never rendered. */
export async function renderMarkdown(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype) // allowDangerousHtml defaults to false: raw HTML is not passed through
    .use(rehypeSlug)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown)
  return String(file)
}

/** All posts, newest first, metadata only. */
export function getAllPosts(): PostMeta[] {
  const posts = postFileNames().map((name) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, name), 'utf8')
    const { data, content } = matter(raw)
    return toMeta(name, data as Record<string, unknown>, content)
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  for (const post of getAllPosts()) post.tags.forEach((t) => tags.add(t))
  return Array.from(tags).sort((a, b) => a.localeCompare(b))
}

/** Full post (metadata + rendered HTML) for a slug, or null if not found. */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const match = postFileNames().find((name) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, name), 'utf8')
    const { data } = matter(raw)
    const fileSlug = String(data.slug ?? slugify(String(data.title ?? '')) ?? name.replace(/\.md$/, ''))
    return fileSlug === slug
  })
  if (!match) return null

  const raw = fs.readFileSync(path.join(POSTS_DIR, match), 'utf8')
  const { data, content } = matter(raw)
  const meta = toMeta(match, data as Record<string, unknown>, content)
  const html = await renderMarkdown(content)
  return { ...meta, html }
}
