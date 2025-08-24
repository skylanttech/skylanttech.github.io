"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export default function TrainingProgramsSection() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      // Ensure hover/pause works on the whole carousel wrapper (not just viewport)
      rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement as HTMLElement,
    })
  )
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
            <div className="flex items-center justify-center gap-3 mb-2">
              <Image src="/logo/sklit_logo.jpeg" alt="Skylant" width={44} height={44} className="rounded-sm" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#001d3d]">Training Programs</h2>
            </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive courses designed to make you industry-ready
          </p>
        </motion.div>

        {/* Courses Slider */}
        <div className="relative">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[autoplay.current]}
              setApi={() => autoplay.current.play()}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              className="w-full"
            >
            <CarouselContent>
              {courses.map((course, index) => (
                <CarouselItem key={course.title} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="h-48 overflow-hidden rounded-t-lg">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={600}
                            height={320}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-[#001d3d] mb-3">{course.title}</h3>
                          <p className="text-gray-600 mb-4">{course.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-8 bg-white/90 border-0 shadow" />
            <CarouselNext className="-right-4 md:-right-8 bg-white/90 border-0 shadow" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
