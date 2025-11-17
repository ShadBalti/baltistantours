export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  author: string;
  publishedDate: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "complete-guide-to-skardu-valley",
    title: "Complete Guide to Skardu Valley: Gateway to K2",
    excerpt: "Discover everything you need to know about Skardu, the stunning valley that serves as the gateway to some of the world's highest peaks.",
    content: `<h2>Complete Guide to Skardu Valley: Gateway to K2</h2><p>Skardu Valley stands as one of Pakistan's most breathtaking destinations...</p>`,
    featuredImage: "/images/skardu-valley.jpg",
    category: "Destinations",
    tags: ["Skardu", "K2", "Karakoram", "Travel Guide"],
    author: "Baltistan Tourism Team",
    publishedDate: "2024-10-20",
    readTime: "8 min read"
  },
  {
    id: "2",
    slug: "balti-culture-and-traditions",
    title: "Understanding Balti Culture: A Rich Heritage",
    excerpt: "Explore the unique blend of Tibetan and Islamic traditions that make Balti culture one of the most fascinating in the Himalayas.",
    content: `<h2>Understanding Balti Culture: A Rich Heritage</h2><p>The Balti people have preserved a remarkable cultural heritage...</p>`,
    featuredImage: "/images/balti-culture.jpg",
    category: "Culture & Traditions",
    tags: ["Culture", "Traditions", "Balti People", "Heritage"],
    author: "Dr. Amina Shah",
    publishedDate: "2024-10-15",
    readTime: "10 min read"
  },
];
