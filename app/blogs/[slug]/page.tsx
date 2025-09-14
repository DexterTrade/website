import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"

// Sample blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    title: "The Future of E-commerce: AI-Powered Personalization",
    content: `
      <p>Artificial intelligence is revolutionizing the e-commerce landscape, transforming how businesses interact with customers and deliver personalized shopping experiences. In this comprehensive guide, we'll explore the cutting-edge AI technologies that are reshaping online retail.</p>
      
      <h2>Understanding AI Personalization</h2>
      <p>AI-powered personalization goes beyond simple product recommendations. It involves analyzing vast amounts of customer data to create unique, tailored experiences for each visitor. This includes personalized product suggestions, dynamic pricing, customized content, and predictive analytics.</p>
      
      <h2>Key Benefits of AI in E-commerce</h2>
      <ul>
        <li><strong>Increased Conversion Rates:</strong> Personalized experiences can boost conversion rates by up to 30%</li>
        <li><strong>Enhanced Customer Satisfaction:</strong> Relevant recommendations improve user experience</li>
        <li><strong>Reduced Cart Abandonment:</strong> AI can predict and prevent cart abandonment</li>
        <li><strong>Improved Customer Retention:</strong> Personalized experiences build stronger customer relationships</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>Successfully implementing AI personalization requires a strategic approach. Start with data collection and analysis, then gradually introduce AI-powered features like recommendation engines, dynamic pricing, and personalized marketing campaigns.</p>
      
      <p>The future of e-commerce lies in creating seamless, personalized experiences that anticipate customer needs and deliver value at every touchpoint. Businesses that embrace AI personalization today will have a significant competitive advantage in tomorrow's market.</p>
    `,
    excerpt:
      "Discover how artificial intelligence is revolutionizing online shopping experiences through personalized recommendations, dynamic pricing, and predictive analytics.",
    image: "/blog-ai-ecommerce.png",
    category: "E-commerce",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    slug: "future-ecommerce-ai-personalization",
  },
  {
    title: "Building Scalable Microservices with Node.js",
    content: `
      <p>Microservices architecture has become the gold standard for building scalable, maintainable applications. In this guide, we'll explore how to design and implement microservices using Node.js, Docker, and Kubernetes.</p>
      
      <h2>Why Microservices?</h2>
      <p>Microservices offer several advantages over monolithic architectures, including better scalability, technology diversity, fault isolation, and easier deployment and maintenance.</p>
      
      <h2>Node.js for Microservices</h2>
      <p>Node.js is particularly well-suited for microservices due to its lightweight nature, excellent performance for I/O operations, and rich ecosystem of packages.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Design services around business capabilities</li>
        <li>Implement proper service discovery</li>
        <li>Use API gateways for external communication</li>
        <li>Implement circuit breakers for fault tolerance</li>
        <li>Monitor and log everything</li>
      </ul>
    `,
    excerpt:
      "Learn best practices for designing and implementing microservices architecture using Node.js, Docker, and Kubernetes for enterprise applications.",
    image: "/blog-microservices.png",
    category: "Software Development",
    author: "Mike Chen",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    slug: "scalable-microservices-nodejs",
  },
  // Add more blog posts here...
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | TechMaster Solutions",
    }
  }

  return {
    title: `${post.title} | TechMaster Solutions Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <div className="mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">Tech Writer & Developer</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-border hover:border-blue-500 bg-transparent">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            <div
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-a:text-blue-600 dark:prose-a:text-blue-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 mb-6">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400 px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 px-3 py-1 rounded-full text-xs">
                    Technology
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex justify-between items-center">
                <Link href="/blog">
                  <Button variant="outline" className="border-border hover:border-blue-500 bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    All Articles
                  </Button>
                </Link>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Subscribe to Newsletter</Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
