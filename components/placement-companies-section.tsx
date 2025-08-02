"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function PlacementCompaniesSection() {
  const companies = [
    { name: "Asian Paints", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Intuit", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Cisco", logo: "/placeholder.svg?height=80&width=120" },
    { name: "HCL", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Amazon", logo: "/placeholder.svg?height=80&width=120" },
    { name: "TCS", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Persistent", logo: "/placeholder.svg?height=80&width=120" },
    { name: "HotelKey", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Tech Mahindra", logo: "/placeholder.svg?height=80&width=120" },
  ]

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
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3d] mb-6">Our Students Placed At</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Leading companies trust our graduates</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * companies.length] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-12 items-center"
            style={{ width: `${200 * companies.length}px` }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={80}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
