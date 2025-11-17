import { NextResponse } from 'next/server';
import { blogPosts } from '@/lib/blog-posts';

export async function GET() {
  const response = NextResponse.json({
    data: blogPosts,
    count: blogPosts.length,
    timestamp: new Date().toISOString(),
  });

  // Cache blog list for 24 hours
  response.headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=172800');
  response.headers.set('CDN-Cache-Control', 'max-age=86400');

  return response;
}
