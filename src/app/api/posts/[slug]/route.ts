import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

const POSTS_DIR = path.join(process.cwd(), 'data', 'posts')

// GET - Fetch a specific blog post by slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }
    
    // Try to read the specific post file
    const postPath = path.join(POSTS_DIR, `${slug}.json`)
    
    try {
      const postContent = await readFile(postPath, 'utf8')
      const post = JSON.parse(postContent)
      
      return NextResponse.json(post)
    } catch (error) {
      // Post file doesn't exist
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}