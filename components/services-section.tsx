"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, School, Target, Award, MessageSquare, FileText, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "IT Training & Internships",
      description: "Comprehensive training programs with hands-on internship opportunities",
    },
    {
      icon: Briefcase,
      title: "Real Client Projects",
      description: "Work on actual client projects to gain real-world experience",
    },
    {
      icon: School,
      title: "School/College Programs",
      description: "Specialized programs designed for educational institutions",
    },
    {
      icon: Target,
      title: "100% Placement Support",
      description: "Guaranteed placement assistance with our industry partners",
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Get certified with industry-recognized credentials",
    },
    {
      icon: MessageSquare,
      title: "Mock Interviews",
      description: "Practice interviews with industry professionals",
    },
    {
      icon: FileText,
      title: "Resume Building",
      description: "Professional resume crafting and optimization services",
    },
    {
      icon: Code,
      title: "Live Coding Sessions",
      description: "Interactive coding sessions with expert mentors",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3d] mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Future-Ready IT Skills with Real Projects & Placement Support
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
