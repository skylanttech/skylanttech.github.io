"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Clock, Users, Star, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EnquiryModal from "@/components/enquiry-modal"
import Image from "next/image"

interface Course {
  id: string
  title: string
  description: string
  image: string
  price: number
  originalPrice: number
  duration: string
  level: string
  mode: string[]
  rating: number
  students: number
  instructor: string
  category: string
  features: string[]
  popular: boolean
  trending: boolean
}

export default function CoursesPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)
  // Store random stats for each course in state to avoid hydration errors
  const [enrollmentStats, setEnrollmentStats] = useState<number[]>([]);
  const [successRates, setSuccessRates] = useState<number[]>([]);

  // Generate random stats only on client
  useEffect(() => {
    setEnrollmentStats(courses.map(() => Math.floor(Math.random() * 50) + 10));
    setSuccessRates(courses.map(() => Math.floor(Math.random() * 30) + 70));
    // eslint-disable-next-line
  }, []);
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")
  const [selectedMode, setSelectedMode] = useState("All")
  const [selectedDuration, setSelectedDuration] = useState("All")
  const [sortBy, setSortBy] = useState("popular")

  const courses: Course[] = [
    {
      id: "1",
      title: "Full Stack Development Bootcamp",
      description: "Master modern web development with React, Node.js, databases, and cloud deployment",
      image: "/courses/Fullstack.jpeg",
      price: 45000,
      originalPrice: 65000,
      duration: "6 months",
      level: "Beginner",
      mode: ["Online", "Offline", "Hybrid"],
      rating: 4.8,
      students: 1250,
      instructor: "Rahul Sharma",
      category: "Web Development",
      features: ["Live Projects", "Job Support", "Certification", "Mentorship"],
      popular: true,
      trending: true,
    },
    {
      id: "2",
      title: "Data Science & AI Mastery",
      description: "Learn Python, Machine Learning, Deep Learning, and AI applications with real datasets",
      image: "/courses/datascience.jpeg",
      price: 55000,
      originalPrice: 75000,
      duration: "8 months",
      level: "Intermediate",
      mode: ["Online", "Hybrid"],
      rating: 4.9,
      students: 890,
      instructor: "Dr. Priya Patel",
      category: "Data Science",
      features: ["Real Datasets", "Industry Projects", "Placement", "Research Papers"],
      popular: true,
      trending: true,
    },
    {
      id: "3",
      title: "Python Programming Complete",
      description: "From basics to advanced Python programming with Django, Flask, and automation",
      image: "/courses/Python.jpeg",
      price: 35000,
      originalPrice: 45000,
      duration: "4 months",
      level: "Beginner",
      mode: ["Online", "Offline"],
      rating: 4.7,
      students: 2100,
      instructor: "Amit Kumar",
      category: "Programming",
      features: ["Hands-on Projects", "Automation Scripts", "Web Frameworks"],
      popular: true,
      trending: false,
    },
    {
      id: "4",
      title: "Digital Marketing Pro",
      description: "Complete digital marketing with SEO, Social Media, Google Ads, and Analytics",
      image: "/courses/Digital Marketing.jpeg",
      price: 25000,
      originalPrice: 35000,
      duration: "3 months",
      level: "Beginner",
      mode: ["Online", "Offline", "Hybrid"],
      rating: 4.6,
      students: 1800,
      instructor: "Sneha Gupta",
      category: "Marketing",
      features: ["Live Campaigns", "Google Certified", "Internship"],
      popular: true,
      trending: true,
    },
    {
      id: "5",
      title: "Cybersecurity & Ethical Hacking",
      description: "Learn network security, penetration testing, and ethical hacking techniques",
      image: "/courses/Cybersecurity.jpg",
      price: 50000,
      originalPrice: 70000,
      duration: "6 months",
      level: "Advanced",
      mode: ["Offline", "Hybrid"],
      rating: 4.8,
      students: 650,
      instructor: "Vikash Singh",
      category: "Cybersecurity",
      features: ["Lab Access", "Certification", "Industry Tools"],
      popular: false,
      trending: true,
    },
    {
      id: "6",
      title: "DevOps & Cloud Computing",
      description: "Master Docker, Kubernetes, AWS, Azure, and CI/CD pipelines",
      image: "/courses/devops.jpeg",
      price: 48000,
      originalPrice: 65000,
      duration: "5 months",
      level: "Intermediate",
      mode: ["Online", "Hybrid"],
      rating: 4.7,
      students: 750,
      instructor: "Rajesh Verma",
      category: "Cloud Computing",
      features: ["Cloud Labs", "Real Deployments", "Industry Projects"],
      popular: false,
      trending: false,
    },
  ]

  const categories = [
    "All",
    "Web Development",
    "Data Science",
    "Programming",
    "Marketing",
    "Cybersecurity",
    "Cloud Computing",
  ]
  const levels = ["All", "Beginner", "Intermediate", "Advanced"]
  const modes = ["All", "Online", "Offline", "Hybrid"]
  const durations = ["All", "1-3 months", "3-6 months", "6+ months"]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel
    const matchesMode = selectedMode === "All" || course.mode.includes(selectedMode)
    const matchesDuration =
      selectedDuration === "All" ||
      (selectedDuration === "1-3 months" && ["3 months"].includes(course.duration)) ||
      (selectedDuration === "3-6 months" && ["4 months", "5 months", "6 months"].includes(course.duration)) ||
      (selectedDuration === "6+ months" && ["8 months"].includes(course.duration))

    return matchesSearch && matchesCategory && matchesLevel && matchesMode && matchesDuration
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.students - a.students
      case "rating":
        return b.rating - a.rating
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "duration":
        return Number.parseInt(a.duration) - Number.parseInt(b.duration)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0056d2] via-[#001d3d] to-[#0056d2] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore Our Courses</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choose from our comprehensive range of industry-focused courses designed to accelerate your career
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Training Programs (simple featured grid) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001d3d]">Our Training Programs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Full Stack Development",
                desc: "Learn frontend, backend, and databases to become job-ready.",
              },
              {
                title: "Python Programming",
                desc: "Master Python for automation, scripting, and backend development.",
              },
              { title: "Data Science", desc: "Build a career in AI, ML, and analytics with Python and tools." },
              { title: "Web Design", desc: "Design responsive websites using HTML, CSS, and JavaScript." },
            ].map((item) => (
              <Card key={item.title} className="h-full border-0 bg-gradient-to-br from-[#f7fbff] to-white hover:shadow-lg transition">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-[#001d3d] mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{item.desc}</p>
                  <Button
                    onClick={() => setIsEnquiryModalOpen(true)}
                    className="bg-gradient-to-r from-[#0056d2] to-[#001d3d] hover:from-[#001d3d] hover:to-[#0056d2]"
                  >
                    Know More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-6 gap-4 items-end">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Courses</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Mode Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mode</label>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                {modes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {sortedCourses.length} of {courses.length} courses
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
                setSelectedLevel("All")
                setSelectedMode("All")
                setSelectedDuration("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden group">
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    {course.trending && (
                      <Badge className="bg-gradient-to-r from-[#ffc300] to-[#ff9500] text-black font-semibold">
                        🔥 Trending
                      </Badge>
                    )}
                    {course.popular && (
                      <Badge className="bg-gradient-to-r from-[#0056d2] to-[#001d3d] text-white">⭐ Popular</Badge>
                    )}
                  </div>

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
                          <div className="text-2xl font-bold text-[#0056d2]">₹{course.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-500 line-through">
                            ₹{course.originalPrice.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-[#001d3d] mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{course.description}</p>

                      {/* Instructor */}
                      <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                        <div className="w-6 h-6 bg-[#0056d2] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{course.instructor.charAt(0)}</span>
                        </div>
                        <span>By {course.instructor}</span>
                      </div>

                      {/* Course Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {course.features.slice(0, 3).map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Mode Options */}
                      <div className="flex items-center gap-2 mb-6">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <div className="flex gap-1">
                          {course.mode.map((mode, modeIndex) => (
                            <Badge key={modeIndex} variant="outline" className="text-xs">
                              {mode}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-[#0056d2] to-[#001d3d] hover:from-[#001d3d] hover:to-[#0056d2]">
                          Enroll Now
                        </Button>
                        <Button variant="outline" size="sm" className="px-3 bg-transparent">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Enrollment Stats (client-only random) */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{enrollmentStats[index] !== undefined ? enrollmentStats[index] : 35} enrolled this week</span>
                          <span className="text-green-600 font-medium">
                            {successRates[index] !== undefined ? successRates[index] : 85}% success rate
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search criteria or filters</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedLevel("All")
                  setSelectedMode("All")
                  setSelectedDuration("All")
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* More Programs (no horizontal scrolling) */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001d3d]">Explore More Programs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Business Analyst",
                desc:
                  "Bridge business needs with tech solutions using analytics, documentation, and tools like Jira.",
                img: "/courses/business analyst.jpeg",
              },
              {
                title: "Machine Learning & AI",
                desc: "Learn supervised/unsupervised learning, deep learning, and real AI applications.",
                img: "/courses/Mlai.jpg",
              },
              { title: "Generative AI", desc: "Use ChatGPT, Midjourney & DALL·E to generate content using AI.", img: "/courses/genai.png" },
              {
                title: "Cybersecurity & Ethical Hacking",
                desc: "Secure networks, test vulnerabilities, and learn ethical hacking techniques.",
                img: "/courses/Cybersecurity.jpg",
              },
              {
                title: "DevOps & Cloud",
                desc: "Automate development with Docker, Kubernetes, AWS, and Azure.",
                img: "/courses/devops.jpeg",
              },
              { title: "Salesforce", desc: "Learn CRM configuration, workflows, and automation.", img: "/courses/salesforce.jpeg" },
              {
                title: "Digital Marketing",
                desc: "Master SEO, Google Ads, social media marketing, content, and email campaigns.",
                img: "/courses/Digital Marketing.jpeg",
              },
              { title: "Java Developer", desc: "Build backend apps with Java, Spring Boot, and DB integration.", img: "/courses/java.jpeg" },
            ].map((p) => (
              <Card key={p.title} className="h-full border-0 bg-white hover:shadow-lg transition">
                <CardContent className="p-0">
                  <div className="relative h-40 w-full overflow-hidden rounded-t-md">
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold text-[#001d3d] mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">{p.desc}</p>
                    <Button
                      onClick={() => setIsEnquiryModalOpen(true)}
                      variant="outline"
                      className="border-[#0056d2] text-[#0056d2] hover:bg-[#0056d2] hover:text-white bg-transparent"
                    >
                      Know More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </div>
  )
}
