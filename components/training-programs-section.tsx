"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"

export default function TrainingProgramsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const courses = [
    {
      title: "Full Stack Development",
      description: "Frontend (HTML, CSS, JS) and Backend (Node.js, Python)",
      image: "/courses/Fullstack.jpeg",
    },
    {
      title: "Python Programming",
      description: "Master Python, Django/Flask and scripting",
      image: "/courses/Python.jpeg",
    },
    {
      title: "Data Science",
      description: "AI/ML, Pandas, NumPy, Scikit-learn, real projects",
      image: "/courses/datascience.jpeg",
    },
    {
      title: "Web Design",
      description: "HTML, CSS, JS, UI/UX, responsive design",
      image: "/courses/Web Design.jpg",
    },
    {
      title: "Digital Marketing",
      description: "SEO, Google Ads, social media marketing, content, email campaigns",
      image: "/courses/Digital Marketing.jpeg",
    },
    {
      title: "Business Analyst",
      description: "Bridge business needs with tech solutions using analytics, documentation, tools like Jira",
      image: "/courses/business analyst.jpeg",
    },
    {
      title: "Machine Learning & AI",
      description: "Supervised, unsupervised learning, deep learning, real AI applications",
      image: "/courses/Mlai.jpg",
    },
    {
      title: "Generative AI",
      description: "ChatGPT, Midjourney & DALL·E content generation",
      image: "/courses/genai.png",
    },
    {
      title: "Cybersecurity",
      description: "Secure networks, test vulnerabilities, ethical hacking techniques",
      image: "/courses/Cybersecurity.jpg",
    },
    {
      title: "DevOps & Cloud",
      description: "Docker, Kubernetes, AWS, Azure automation",
      image: "/courses/devops.jpeg",
    },
    {
      title: "Salesforce",
      description: "CRM configuration, workflows, automation",
      image: "/courses/salesforce.jpeg",
    },
    {
      title: "Java Developer",
      description: "Backend applications with Java, Spring Boot, database integration",
      image: "/courses/java.jpeg",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3d] mb-6">Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive courses designed to make you industry-ready
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#001d3d]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#001d3d]" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#001d3d] mb-3">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      {/* <Button
                        variant="outline"
                        className="w-full border-[#0056d2] text-[#0056d2] hover:bg-[#0056d2] hover:text-white bg-transparent align-self-end"
                      >
                        Know More
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
