import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Verify the request is authorized
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.REVALIDATION_SECRET}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { tag } = await request.json();
    
    if (!tag) {
      return NextResponse.json(
        { message: 'Missing revalidation tag' },
        { status: 400 }
      );
    }

    revalidateTag(tag, 'max');
    
    return NextResponse.json({ 
      message: `Cache revalidated for tag: ${tag}`,
      revalidated: true,
      now: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Revalidation failed', error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
