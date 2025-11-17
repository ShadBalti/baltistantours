import { NextResponse } from 'next/server';
import { blogPosts } from '@/lib/blog-posts';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return NextResponse.json(
      { error: 'Blog post not found' },
      { status: 404 }
    );
  }

  const response = NextResponse.json({
    data: post,
    timestamp: new Date().toISOString(),
  });

  // Cache individual blog post for 24 hours
  response.headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=172800');
  response.headers.set('CDN-Cache-Control', 'max-age=86400');

  return response;
}
