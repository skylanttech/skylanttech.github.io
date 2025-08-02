"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Users, Star, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface TrendingCoursesProps {
  onEnrollClick: (courseId: string) => void
}

export default function TrendingCourses({ onEnrollClick }: TrendingCoursesProps) {
  const trendingCourses = [
    {
      id: "1",
      title: "Full Stack Development",
      description: "Master React, Node.js, and modern web development",
      image: "/placeholder.svg?height=200&width=300",
      price: "₹45,000",
      originalPrice: "₹65,000",
      duration: "6 months",
      students: 1250,
      rating: 4.8,
      level: "Beginner",
      trending: true,
      popular: true,
      features: ["Live Projects", "Job Support", "Certification"],
    },
    {
      id: "2",
      title: "Data Science & AI",
      description: "Python, Machine Learning, and AI applications",
      image: "/placeholder.svg?height=200&width=300",
      price: "₹55,000",
      originalPrice: "₹75,000",
      duration: "8 months",
      students: 890,
      rating: 4.9,
      level: "Intermediate",
      trending: true,
      popular: false,
      features: ["Real Datasets", "Industry Projects", "Placement"],
    },
    {
      id: "3",
      title: "Digital Marketing Pro",
      description: "SEO, Social Media, Google Ads, and Analytics",
      image: "/placeholder.svg?height=200&width=300",
      price: "₹25,000",
      originalPrice: "₹35,000",
      duration: "3 months",
      students: 2100,
      rating: 4.7,
      level: "Beginner",
      trending: true,
      popular: true,
      features: ["Live Campaigns", "Google Certified", "Internship"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#f7fbff] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-[#ffc300]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#001d3d]">Trending Courses</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Most popular courses chosen by students this month</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden group">
                {/* Trending Badge */}
                {course.trending && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-[#ffc300] to-[#ff9500] text-black font-semibold">
                      🔥 Trending
                    </Badge>
                  </div>
                )}

                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-[#0056d2] to-[#001d3d] text-white">⭐ Popular</Badge>
                  </div>
                )}

                <CardContent className="p-0">
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Quick Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {course.students}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-[#0056d2] border-[#0056d2]">
                        {course.level}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#0056d2]">{course.price}</div>
                        <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-[#001d3d] mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>

                    {/* Course Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        onClick={() => onEnrollClick(course.id)}
                        className="flex-1 bg-gradient-to-r from-[#0056d2] to-[#001d3d] hover:from-[#001d3d] hover:to-[#0056d2]"
                      >
                        Enroll Now
                      </Button>
                      <Button variant="outline" size="sm" className="px-3 bg-transparent">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Enrollment Stats */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{Math.floor(Math.random() * 50) + 10} enrolled this week</span>
                        <span className="text-green-600 font-medium">
                          {Math.floor(Math.random() * 30) + 70}% success rate
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Courses Button */}
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
            View All Courses
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
