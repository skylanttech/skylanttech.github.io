"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Users,
  BadgeCheck,
  MessageSquare,
  FileText,
  Code,
  CalendarCheck,
  BrainCircuit,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function StudentServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "Hands-on IT Training",
      description: "Project-based learning paths designed for beginners and upskilling.",
    },
    {
      icon: Code,
      title: "Internships & Live Projects",
      description: "Work on real client projects to build a strong portfolio.",
    },
    {
      icon: FileText,
      title: "Resume & LinkedIn Makeover",
      description: "ATS-friendly resume crafting and profile optimization.",
    },
    {
      icon: MessageSquare,
      title: "Mock Interviews",
      description: "Technical + HR rounds with actionable feedback from mentors.",
    },
    {
      icon: BadgeCheck,
      title: "Certifications",
      description: "Course completion and industry-recognized certifications.",
    },
    {
      icon: Users,
      title: "1:1 Mentorship",
      description: "Personal guidance, doubt clearing, and career planning.",
    },
    {
      icon: CalendarCheck,
      title: "Campus Programs",
      description: "Campus drives, seminars, and customized college workshops.",
    },
    {
      icon: BrainCircuit,
      title: "Live Coding Sessions",
      description: "Interactive coding sessions with expert mentors",
    },
  ]

  return (
    <section id="student-services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3d] mb-6">Student Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to go from learning to landing your first job
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-[#f7fbff] to-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0056d2] to-[#001d3d] rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#001d3d] mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
