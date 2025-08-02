"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#f7fbff]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="IT Training"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=300"
                    alt="Mentorship"
                    width={300}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=300"
                    alt="Real Projects"
                    width={300}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Success Stories"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#001d3d] mb-6">About Skylant Tech Solutions</h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Skylant Tech Solutions is one of Central India's fastest-growing IT training and project support
                companies. We specialize in providing hands-on training, real client projects, and career-launching
                internships for students, freshers, and professionals.
              </p>
              <p>
                Whether you're a student just starting or a job seeker looking to upskill, Skylant is your trusted
                launchpad to career success.
              </p>
              <div className="bg-gradient-to-r from-[#0056d2] to-[#001d3d] text-white p-6 rounded-lg">
                <p className="text-xl font-semibold italic">
                  "We don't just train — we transform learners into skilled professionals."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
