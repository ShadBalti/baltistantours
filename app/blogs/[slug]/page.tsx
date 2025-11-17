import { Metadata } from "next";
import { notFound } from 'next/navigation';
import { blogPosts } from "@/lib/blog-posts";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

export const revalidate = 86400;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8 max-w-3xl mx-auto">
      <div>
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.publishedDate}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {post.featuredImage && (
        <div className="rounded-lg overflow-hidden">
          <img 
            src={post.featuredImage || "/placeholder.svg"} 
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </div>
      )}

      <Card>
        <CardContent className="pt-8 prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>

      <div className="space-y-2 pt-8 border-t">
        <h3 className="font-semibold">Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="inline-block px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
