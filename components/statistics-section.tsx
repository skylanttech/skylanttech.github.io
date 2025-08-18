"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Award, TrendingUp } from "lucide-react"

export default function StatisticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { number: 1000, suffix: "+", label: "Students Trained" },
    { number: 30, suffix: "+", label: "Clients" },
    { number: 25, suffix: "+", label: "Projects Completed" },
    { number: 100, suffix: "%", label: "Placement Support" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-[#0056d2] to-[#001d3d] relative overflow-hidden">
      {/* Animated background sweep (blue theme) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-300/10 via-blue-700/10 to-blue-300/10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with pulsing award icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg"
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 0 0 rgba(255,255,255,0.45)",
                "0 0 0 18px rgba(255,255,255,0)",
                "0 0 0 0 rgba(255,255,255,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Award className="h-10 w-10 text-[#ffc300]" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Impact
          </motion.h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>

          <motion.div
            className="flex items-center justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TrendingUp className="h-5 w-5 text-gray-200" />
            <span className="text-gray-200 text-sm">Growing every month</span>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} isInView={isInView} />
                <p className="text-gray-200 text-base md:text-lg mt-2">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target, isInView])

  return (
  <div className="text-4xl md:text-5xl font-bold text-[#ffc300] mb-2">
      {count}
      {suffix}
    </div>
  )
}
