import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read our latest articles and guides about Baltistan, travel tips, culture, and adventures.",
};

export const revalidate = 86400; // 24 hours
export const dynamic = 'force-static';

export default function BlogsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Explore stories, tips, and guides about Baltistan
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-2">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                <span className="text-xs text-muted-foreground">{post.publishedDate}</span>
              </div>
              <Button asChild variant="outline">
                <Link href={`/blogs/${post.slug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
