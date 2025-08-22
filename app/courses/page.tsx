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
      title: "Python Developer",
      description: "Learn Python from basics to advanced with hands-on projects and frameworks.",
  image: "/courses/Python.jpeg",
      price: 30000,
      originalPrice: 45000,
      duration: "4 months",
      level: "Beginner to Intermediate",
      mode: ["Online", "Offline", "Hybrid"],
      rating: 4.7,
      students: 1200,
      instructor: "Skylant Team",
      category: "Programming",
      features: ["Live Coding", "Frameworks (Flask, Django)", "Certification", "Interview Prep"],
      popular: true,
      trending: false,
    },
    {
      id: "2",
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, databases, and cloud deployment.",
      image: "/courses/Fullstack.jpeg",
      price: 35000,
      originalPrice: 65000,
      duration: "6 months",
      level: "Beginner",
      mode: ["Online", "Offline", "Hybrid"],
      rating: 4.8,
      students: 1500,
      instructor: "Skylant Team",
      category: "Web Development",
      features: ["Live Projects", "Job Support", "Certification", "Mentorship"],
      popular: true,
      trending: true,
    },
    {
      id: "3",
      title: "Digital Marketing Pro",
      description: "Master SEO, social media, PPC, email marketing, and analytics for a digital-first world.",
  image: "/courses/Digital Marketing.jpeg",
      price: 30000,
      originalPrice: 40000,
      duration: "2 months",
      level: "Beginner to Advanced",
      mode: ["Online", "Hybrid"],
      rating: 4.6,
      students: 980,
      instructor: "Skylant Team",
      category: "Marketing",
      features: ["Case Studies", "Live Campaigns", "Google Ads Certification", "Analytics Training"],
      popular: true,
      trending: true,
    },
    {
      id: "4",
      title: "Data Science & AI",
      description: "End-to-end data science with Python, ML, AI, statistics, and real-world datasets.",
  image: "/courses/datascience.jpeg",
      price: 45000,
      originalPrice: 80000,
      duration: "8 months",
      level: "Intermediate to Advanced",
      mode: ["Online", "Offline", "Hybrid"],
      rating: 4.9,
      students: 1120,
      instructor: "Skylant Team",
      category: "Data Science",
      features: ["Capstone Project", "Job Support", "Mentorship", "Advanced Tools (TensorFlow, PyTorch)"],
      popular: true,
      trending: true,
    },
    {
      id: "5",
      title: "Business Analyst",
      description: "Learn business analytics, SQL, Excel, visualization tools, and problem-solving skills.",
  image: "/courses/business analyst.jpeg",
      price: 35000,
      originalPrice: 50000,
      duration: "5 months",
      level: "Beginner to Intermediate",
      mode: ["Online", "Hybrid"],
      rating: 4.7,
      students: 860,
      instructor: "Skylant Team",
      category: "Business & Analytics",
      features: ["Case Studies", "Excel Mastery", "SQL Queries", "Power BI/Tableau"],
      popular: true,
      trending: false,
    },
    {
      id: "6",
      title: "Machine Learning & AI",
      description: "Master machine learning algorithms, AI concepts, and deploy models in production.",
  image: "/courses/Mlai.jpg",
      price: 30000,
      originalPrice: 50000,
      duration: "4 months",
      level: "Intermediate",
      mode: ["Online", "Offline"],
      rating: 4.8,
      students: 920,
      instructor: "Skylant Team",
      category: "AI & Machine Learning",
      features: ["Hands-on Projects", "Deep Learning", "NLP & CV", "Cloud Deployment"],
      popular: true,
      trending: false,
    },
    {
      id: "7",
      title: "Data Analyst",
      description: "Learn to clean, analyze, and visualize data with Python, SQL, and BI tools.",
  image: "/courses/dataanalyst.jpeg",
      price: 30000,
      originalPrice: 45000,
      duration: "4 months",
      level: "Beginner",
      mode: ["Online", "Hybrid"],
      rating: 4.6,
      students: 990,
      instructor: "Skylant Team",
      category: "Data Analytics",
      features: ["Excel to Advanced", "SQL Queries", "Tableau/Power BI", "Capstone Project"],
      popular: true,
      trending: true,
    },
    {
      id: "8",
      title: "Django Developer",
      description: "Specialized course on Django framework for building robust web applications.",
  image: "/courses/Web developer.jpeg",
      price: 32000,
      originalPrice: 45000,
      duration: "4 months",
      level: "Intermediate",
      mode: ["Online", "Offline"],
      rating: 4.7,
      students: 640,
      instructor: "Skylant Team",
      category: "Web Development",
      features: ["Django REST API", "Database Integration", "Live Projects", "Deployment"],
      popular: false,
      trending: false,
    },
    {
      id: "9",
      title: "Generative AI",
      description: "Explore Generative AI, LLMs, Prompt Engineering, and real-world AI use cases.",
  image: "/courses/genai.png",
      price: 55000,
      originalPrice: 75000,
      duration: "5 months",
      level: "Intermediate to Advanced",
      mode: ["Online", "Hybrid"],
      rating: 4.9,
      students: 780,
      instructor: "Skylant Team",
      category: "Artificial Intelligence",
      features: ["Prompt Engineering", "ChatGPT & LLMs", "Image/Video AI", "Capstone AI Project"],
      popular: true,
      trending: true,
    },
    {
      id: "10",
      title: "Salesforce",
      description: "Learn Salesforce CRM, administration, development, and integration for business apps.",
  image: "/courses/salesforce.jpeg",
      price: 40000,
      originalPrice: 60000,
      duration: "5 months",
      level: "Beginner to Intermediate",
      mode: ["Online", "Hybrid"],
      rating: 4.6,
      students: 610,
      instructor: "Skylant Team",
      category: "CRM & Cloud",
      features: ["Salesforce Admin", "Salesforce Developer", "Live CRM Projects", "Certification Prep"],
      popular: true,
      trending: false,
    },
    {
      id: "11",
      title: "Java Developer",
      description: "Become a skilled Java developer with core Java, Spring Boot, and enterprise projects.",
  image: "/courses/java.jpeg",
      price: 35000,
      originalPrice: 50000,
      duration: "5 months",
      level: "Beginner to Intermediate",
      mode: ["Online", "Offline", "Hybrid"],
      rating: 4.7,
      students: 1040,
      instructor: "Skylant Team",
      category: "Programming",
      features: ["OOPs Concepts", "Spring Boot", "Microservices", "Capstone Project"],
      popular: true,
      trending: true,
    },
    {
      id: "12",
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, and frameworks to build responsive websites.",
  image: "/courses/Web Design.jpg",
      price: 25000,
      originalPrice: 40000,
      duration: "3 months",
      level: "Beginner",
      mode: ["Online", "Offline"],
      rating: 4.5,
      students: 880,
      instructor: "Skylant Team",
      category: "Web Development",
      features: ["Frontend + Backend Basics", "Responsive Design", "Live Projects", "Certification"],
      popular: true,
      trending: false,
    },
    {
      id: "13",
      title: "AutoCAD (Electrical, Mechanical, Civil)",
      description: "Master AutoCAD for Electrical, Mechanical, and Civil engineering applications.",
  image: "/courses/AutoCAD.svg",
      price: 20000,
      originalPrice: 40000,
      duration: "3 months",
      level: "Beginner to Advanced",
      mode: ["Offline", "Hybrid"],
      rating: 4.6,
      students: 540,
      instructor: "Skylant Team",
      category: "Design & Engineering",
      features: ["2D & 3D Drafting", "Project Based", "Industry Tools", "Certification"],
      popular: true,
      trending: false,
    },
  ]

  const categories = [
    "All",
    "Programming",
    "Web Development",
    "Marketing",
    "Data Science",
    "Business & Analytics",
    "AI & Machine Learning",
    "Data Analytics",
    "Artificial Intelligence",
    "CRM & Cloud",
    "Design & Engineering",
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
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {sortedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white relative overflow-hidden group rounded-xl">
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
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    <div className="p-5 flex flex-col h-full text-[0.95rem]">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-[#0056d2] border-[#0056d2] text-xs px-2 py-0.5">
                          {course.level}
                        </Badge>
                        <div className="text-right">
                          <div className="text-xl font-bold text-[#0056d2]">₹{course.price.toLocaleString()}</div>
                          <div className="text-xs text-gray-500 line-through">
                            ₹{course.originalPrice.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-[#001d3d] mb-1 min-h-[2.25rem]">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm min-h-[3.5rem] overflow-hidden">
                        {course.description}
                      </p>

                      {/* Instructor */}
                      <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                        <div className="w-6 h-6 bg-[#0056d2] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{course.instructor.charAt(0)}</span>
                        </div>
                        <span>By {course.instructor}</span>
                      </div>

                      {/* Course Features */}
                      <div className="flex flex-wrap gap-2 mb-4 min-h-[44px]">
                        {course.features.slice(0, 3).map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Mode Options */}
                      <div className="flex items-center gap-2 mb-4 min-h-[24px]">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <div className="flex gap-1 flex-wrap">
                          {course.mode.map((mode, modeIndex) => (
                            <Badge key={modeIndex} variant="outline" className="text-xs px-2 py-0.5">
                              {mode}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-auto">
                        <Button className="flex-1 h-10 text-sm bg-gradient-to-r from-[#0056d2] to-[#001d3d] hover:from-[#001d3d] hover:to-[#0056d2]">
                          Enroll Now
                        </Button>
                        <Button variant="outline" size="sm" className="px-3 bg-transparent h-10">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Enrollment Stats (client-only random) */}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs text-gray-500">
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
      {/* <section className="pb-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001d3d]">Explore More Programs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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
              <Card key={p.title} className="h-full border border-gray-100 bg-white hover:shadow-md transition rounded-xl">
                <CardContent className="p-0">
                  <div className="relative h-32 w-full overflow-hidden rounded-t-md">
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="p-4 flex flex-col h-full">
                    <h3 className="text-base font-semibold text-[#001d3d] mb-1 min-h-[2.25rem]">{p.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 flex-1 min-h-[3.25rem] overflow-hidden">{p.desc}</p>
                    <Button
                      onClick={() => setIsEnquiryModalOpen(true)}
                      variant="outline"
                      className="h-9 text-sm border-[#0056d2] text-[#0056d2] hover:bg-[#0056d2] hover:text-white bg-transparent"
                    >
                      Know More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
      
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </div>
  )
}
