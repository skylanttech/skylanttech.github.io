"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, User, Clock, ArrowRight, BookOpen, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: string
  featured: boolean
  trending: boolean
  tags: string[]
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Top 10 Programming Languages to Learn in 2024",
      excerpt:
        "Discover the most in-demand programming languages that will boost your career prospects in the tech industry.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=300&width=400",
      author: "Rahul Sharma",
      date: "2024-01-15",
      category: "Programming",
      readTime: "5 min read",
      featured: true,
      trending: true,
      tags: ["Programming", "Career", "Technology", "2024"],
    },
    {
      id: "2",
      title: "How to Crack Your First Tech Interview",
      excerpt: "Essential tips and strategies to ace technical interviews and land your dream job in the IT industry.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=300&width=400",
      author: "Priya Patel",
      date: "2024-01-12",
      category: "Career",
      readTime: "8 min read",
      featured: false,
      trending: true,
      tags: ["Interview", "Career", "Tips", "Job Search"],
    },
    {
      id: "3",
      title: "The Future of AI and Machine Learning",
      excerpt: "Explore the latest trends and opportunities in artificial intelligence and machine learning fields.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=300&width=400",
      author: "Dr. Amit Kumar",
      date: "2024-01-10",
      category: "AI/ML",
      readTime: "6 min read",
      featured: true,
      trending: false,
      tags: ["AI", "Machine Learning", "Future", "Technology"],
    },
    {
      id: "4",
      title: "Building Your First Full Stack Application",
      excerpt:
        "Step-by-step guide to creating a complete web application using modern technologies and best practices.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=300&width=400",
      author: "Sneha Gupta",
      date: "2024-01-08",
      category: "Web Development",
      readTime: "12 min read",
      featured: false,
      trending: true,
      tags: ["Full Stack", "Web Development", "Tutorial", "React"],
    },
    {
      id: "5",
      title: "Data Science Career Roadmap 2024",
      excerpt: "Complete guide to becoming a data scientist with skills, tools, and career progression paths.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=300&width=400",
      author: "Dr. Priya Patel",
      date: "2024-01-05",
      category: "Data Science",
      readTime: "10 min read",
      featured: false,
      trending: false,
      tags: ["Data Science", "Career", "Roadmap", "Skills"],
    },
    {
      id: "6",
      title: "Digital Marketing Trends for 2024",
      excerpt: "Latest digital marketing strategies and trends that will dominate the industry this year.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=300&width=400",
      author: "Rajesh Verma",
      date: "2024-01-03",
      category: "Marketing",
      readTime: "7 min read",
      featured: false,
      trending: true,
      tags: ["Digital Marketing", "Trends", "SEO", "Social Media"],
    },
  ]

  const categories = ["All", "Programming", "Career", "AI/ML", "Web Development", "Data Science", "Marketing"]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)
  const trendingPosts = blogPosts.filter((post) => post.trending).slice(0, 5)

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <Header onEnquiryClick={() => {}} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0056d2] via-[#001d3d] to-[#0056d2] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-12 h-12 text-[#ffc300]" />
              <h1 className="text-4xl md:text-6xl font-bold">Tech Blog</h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Stay updated with the latest tech trends, career advice, and industry insights from our experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-[#0056d2] hover:bg-[#001d3d]"
                      : "border-[#0056d2] text-[#0056d2] hover:bg-[#0056d2] hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4">
            <p className="text-gray-600">Showing {filteredPosts.length} articles</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#001d3d] mb-6 flex items-center gap-2">
                  <span className="text-[#ffc300]">⭐</span>
                  Featured Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white group overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-[#ffc300] text-black font-semibold">Featured</Badge>
                            </div>
                            {post.trending && (
                              <div className="absolute top-4 right-4">
                                <Badge className="bg-gradient-to-r from-[#0056d2] to-[#001d3d] text-white">
                                  🔥 Trending
                                </Badge>
                              </div>
                            )}
                          </div>

                          <div className="p-6">
                            <Badge variant="outline" className="mb-3 text-[#0056d2] border-[#0056d2]">
                              {post.category}
                            </Badge>

                            <h3 className="text-xl font-semibold text-[#001d3d] mb-3 group-hover:text-[#0056d2] transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>

                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(post.date).toLocaleDateString()}
                                </span>
                              </div>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </span>
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto text-[#0056d2] hover:text-[#001d3d] font-semibold"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Regular Posts */}
            <section>
              <h2 className="text-2xl font-bold text-[#001d3d] mb-6">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white group">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {post.trending && (
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-gradient-to-r from-[#0056d2] to-[#001d3d] text-white">
                                🔥 Trending
                              </Badge>
                            </div>
                          )}
                        </div>

                        <div className="p-6">
                          <Badge variant="outline" className="mb-3 text-[#0056d2] border-[#0056d2]">
                            {post.category}
                          </Badge>

                          <h3 className="text-lg font-semibold text-[#001d3d] mb-3 group-hover:text-[#0056d2] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>

                          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {post.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(post.date).toLocaleDateString()}
                              </span>
                            </div>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto text-[#0056d2] hover:text-[#001d3d] font-semibold"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your search or category filter</p>
                  <Button
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All")
                    }}
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending Posts */}
            <Card className="mb-8 border-0 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#001d3d] mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#ffc300]" />
                  Trending Now
                </h3>
                <div className="space-y-4">
                  {trendingPosts.map((post, index) => (
                    <div key={post.id} className="flex gap-3 group cursor-pointer">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-[#001d3d] group-hover:text-[#0056d2] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-0 bg-gradient-to-br from-[#0056d2] to-[#001d3d] text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <p className="text-sm text-gray-200 mb-4">
                  Get the latest tech articles and career tips delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    placeholder="Your email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  <Button className="w-full bg-[#ffc300] hover:bg-[#ff9500] text-black font-semibold">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
