import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import path from 'path'

const POSTS_DIR = path.join(process.cwd(), 'data', 'posts')

// Ensure the posts directory exists
async function ensurePostsDir() {
  try {
    await mkdir(POSTS_DIR, { recursive: true })
  } catch (error) {
    // Directory already exists or other error, ignore
  }
}

// Create a slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

// GET - Fetch all blog posts
export async function GET() {
  try {
    await ensurePostsDir()
    
    // Try to read the posts index file
    try {
      const indexPath = path.join(POSTS_DIR, 'index.json')
      const indexContent = await readFile(indexPath, 'utf8')
      const posts = JSON.parse(indexContent)
      
      // Sort posts by creation date (newest first)
      posts.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      
      return NextResponse.json(posts)
    } catch (error) {
      // Index file doesn't exist yet, return empty array
      return NextResponse.json([])
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

// POST - Create a new blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.title || !body.content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
    }
    
    await ensurePostsDir()
    
    // Create post object
    const post = {
      id: Date.now().toString(),
      title: body.title,
      content: body.content,
      topic: body.topic || 'General',
      keywords: body.keywords || [],
      created_at: body.created_at || new Date().toISOString(),
      slug: createSlug(body.title),
      status: body.status || 'published'
    }
    
    // Save individual post file
    const postPath = path.join(POSTS_DIR, `${post.slug}.json`)
    await writeFile(postPath, JSON.stringify(post, null, 2))
    
    // Update the index file
    let posts: any[] = []
    const indexPath = path.join(POSTS_DIR, 'index.json')
    
    try {
      const indexContent = await readFile(indexPath, 'utf8')
      posts = JSON.parse(indexContent)
    } catch (error) {
      // Index doesn't exist yet, start with empty array
      posts = []
    }
    
    // Add new post to index
    posts.push({
      id: post.id,
      title: post.title,
      topic: post.topic,
      keywords: post.keywords,
      created_at: post.created_at,
      slug: post.slug,
      excerpt: post.content.substring(0, 200) + '...'
    })
    
    // Save updated index
    await writeFile(indexPath, JSON.stringify(posts, null, 2))
    
    return NextResponse.json({
      success: true,
      post: post,
      message: 'Blog post created successfully'
    }, { status: 201 })
    
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}