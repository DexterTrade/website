import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Blog | TechMaster Solutions",
  description:
    "Latest insights, trends, and best practices in technology, software development, digital marketing, and cloud services.",
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/tech-blog-hero.png" alt="Technology blog" fill className="object-cover" priority sizes="100vw" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Tech Insights Blog</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">
            Stay updated with the latest trends, best practices, and insights in technology, development, and digital
            transformation.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 md:py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {blogCategories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={
                    index === 0
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "border-border hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
                Featured Article
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Latest Insights</h2>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    <Link href={`/blogs/${featuredPost.slug}`}>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">Recent Articles</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our latest articles covering technology trends, development tips, marketing strategies, and
                cloud innovations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-border"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-foreground">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <Link href={`/blogs/${post.slug}`}>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest tech insights, development tips, and industry trends
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 whitespace-nowrap">Subscribe Now</Button>
            </div>
            <p className="text-gray-400 text-sm mt-4">No spam, unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

const blogCategories = [
  "All",
  "Software Development",
  "E-commerce",
  "Cloud Services",
  "Digital Marketing",
  "Tech Trends",
]

const featuredPost = {
  title: "The Future of E-commerce: AI-Powered Personalization",
  excerpt:
    "Discover how artificial intelligence is revolutionizing online shopping experiences through personalized recommendations, dynamic pricing, and predictive analytics.",
  image: "/blog-ai-ecommerce.png",
  category: "E-commerce",
  author: "Sarah Johnson",
  date: "Dec 15, 2024",
  readTime: "8 min read",
  slug: "future-ecommerce-ai-personalization",
}

const blogPosts = [
  {
    title: "Building Scalable Microservices with Node.js",
    excerpt:
      "Learn best practices for designing and implementing microservices architecture using Node.js, Docker, and Kubernetes for enterprise applications.",
    image: "/blog-microservices.png",
    category: "Software Development",
    author: "Mike Chen",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    slug: "scalable-microservices-nodejs",
  },
  {
    title: "Cloud Migration Strategies for Small Businesses",
    excerpt:
      "A comprehensive guide to planning and executing cloud migration for small businesses, including cost optimization and security considerations.",
    image: "/blog-cloud-migration.png",
    category: "Cloud Services",
    author: "Emily Rodriguez",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    slug: "cloud-migration-small-business",
  },
  {
    title: "Social Media Marketing Trends for 2025",
    excerpt:
      "Explore the latest social media marketing trends, platform updates, and strategies that will dominate the digital landscape in 2025.",
    image: "/blog-social-media-trends.png",
    category: "Digital Marketing",
    author: "Alex Thompson",
    date: "Dec 8, 2024",
    readTime: "5 min read",
    slug: "social-media-trends-2025",
  },
  {
    title: "React 19: New Features and Performance Improvements",
    excerpt:
      "Deep dive into React 19's new features including Server Components, improved hydration, and performance optimizations for modern web applications.",
    image: "/blog-react-19.png",
    category: "Software Development",
    author: "David Park",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    slug: "react-19-new-features",
  },
  {
    title: "Cybersecurity Best Practices for Cloud Infrastructure",
    excerpt:
      "Essential security measures and best practices to protect your cloud infrastructure from threats and ensure compliance with industry standards.",
    image: "/blog-cloud-security.png",
    category: "Cloud Services",
    author: "Lisa Wang",
    date: "Dec 3, 2024",
    readTime: "8 min read",
    slug: "cloud-security-best-practices",
  },
  {
    title: "Converting Visitors to Customers: E-commerce UX Tips",
    excerpt:
      "Proven user experience strategies and design principles to improve conversion rates and reduce cart abandonment in e-commerce websites.",
    image: "/blog-ecommerce-ux.png",
    category: "E-commerce",
    author: "Jennifer Lee",
    date: "Nov 30, 2024",
    readTime: "6 min read",
    slug: "ecommerce-ux-conversion-tips",
  },
]
