"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "Tech Mahindra",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Skylant Tech helped me build my career from scratch. The projects and mock interviews were game changers.",
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      role: "Python Developer",
      company: "HCL Technologies",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "I got hands-on experience with real client projects. Now I'm working as a Python Developer. Highly recommended!",
      rating: 5,
    },
    {
      name: "Simran Kaur",
      role: "Data Analyst",
      company: "Persistent Systems",
      image: "/placeholder.svg?height=80&width=80",
      content: "The 100% placement support is real! I gained confidence through live coding sessions and resume help.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-[#f7fbff]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3d] mb-6">What Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Student Testimonials</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#ffc300] text-[#ffc300]" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#001d3d]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
