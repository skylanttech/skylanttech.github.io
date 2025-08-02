"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function BlogPreview() {
  const blogPosts = [
    {
      id: "1",
      title: "Top 10 Programming Languages to Learn in 2024",
      excerpt:
        "Discover the most in-demand programming languages that will boost your career prospects in the tech industry.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Rahul Sharma",
      date: "2024-01-15",
      category: "Programming",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: "2",
      title: "How to Crack Your First Tech Interview",
      excerpt: "Essential tips and strategies to ace technical interviews and land your dream job in the IT industry.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Priya Patel",
      date: "2024-01-12",
      category: "Career",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: "3",
      title: "The Future of AI and Machine Learning",
      excerpt: "Explore the latest trends and opportunities in artificial intelligence and machine learning fields.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Dr. Amit Kumar",
      date: "2024-01-10",
      category: "AI/ML",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: "4",
      title: "Building Your First Full Stack Application",
      excerpt:
        "Step-by-step guide to creating a complete web application using modern technologies and best practices.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Sneha Gupta",
      date: "2024-01-08",
      category: "Web Development",
      readTime: "12 min read",
      featured: true,
    },
  ]

  const categories = ["All", "Programming", "Career", "AI/ML", "Web Development", "Data Science"]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-[#0056d2]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#001d3d]">Latest from Our Blog</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest tech trends, career advice, and industry insights
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={
                index === 0
                  ? "bg-[#0056d2] hover:bg-[#001d3d]"
                  : "border-[#0056d2] text-[#0056d2] hover:bg-[#0056d2] hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {blogPosts.filter((post) => post.featured)[0] && (
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#ffc300] text-black font-semibold">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4 text-[#0056d2] border-[#0056d2]">
                    {blogPosts[0].category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#001d3d] mb-4">{blogPosts[0].title}</h3>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-[#0056d2] to-[#001d3d] hover:from-[#001d3d] hover:to-[#0056d2]">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          )}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-[#001d3d]">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
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
                      <span>{post.readTime}</span>
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

        {/* View All Blog Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-[#0056d2] text-[#0056d2] hover:bg-[#0056d2] hover:text-white bg-transparent"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
