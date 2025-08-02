"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectServicesSection() {
  const projects = [
    {
      title: "E-Commerce Store System",
      description: "Cart, Checkout, Admin Panel",
      category: "Web Development",
      tech: "Django, Python, MySQL",
      color: "bg-blue-500",
    },
    {
      title: "AI Chatbot for College",
      description: "NLP-based chatbot for FAQs",
      category: "AI/Chatbot",
      tech: "Python, NLTK, Flask",
      color: "bg-purple-500",
    },
    {
      title: "Sales Dashboard",
      description: "Visual analytics for product & region-based sales",
      category: "Data Analytics",
      tech: "Python, Pandas, Power BI",
      color: "bg-green-500",
    },
    {
      title: "Invoice Generator System",
      description: "Dynamic billing and PDF export",
      category: "Desktop App",
      tech: "Python, Tkinter",
      color: "bg-orange-500",
    },
    {
      title: "College Management System",
      description: "Student, faculty, marks, attendance",
      category: "Full Stack",
      tech: "Java, JSP, MySQL",
      color: "bg-red-500",
    },
    {
      title: "Inventory Management",
      description: "Product tracking, suppliers, alerts",
      category: "Business Automation",
      tech: "Django, MySQL",
      color: "bg-indigo-500",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-[#f7fbff]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3d] mb-6">Project Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">For Your IT Students</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold text-lg">{project.title.charAt(0)}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#001d3d] mb-2">{project.title}</h3>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="space-y-3 mb-6">
                    <Badge variant="secondary" className="bg-[#ffc300]/20 text-[#001d3d]">
                      {project.category}
                    </Badge>
                    <p className="text-sm text-gray-500">
                      <strong>Tech Stack:</strong> {project.tech}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-[#0056d2] text-[#0056d2] hover:bg-[#0056d2] hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
