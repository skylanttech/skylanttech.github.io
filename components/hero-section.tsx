"use client"

import { useState, useEffect } from "react"
import type { ReactNode, CSSProperties } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, CheckCircle2, Code2, Brain, Briefcase } from "lucide-react"

export default function HeroSection() {
  // Rotating text-only hero copy (no images)
  const [currentSlide, setCurrentSlide] = useState(0)
  const actionWords = ["Learn", "Build", "Grow", "Launch"]
  const [wordIndex, setWordIndex] = useState(0)

  const slides = [
    {
      title: "Don't Just Learn — Build!",
      subtitle: "Work on Real Projects with Mentors & Land Your Dream Job",
      description: "Future-Ready IT Skills with Real Projects & Placement Support",
    },
    {
      title: "Transform Your Career",
      subtitle: "From Learning to Leading in Tech Industry",
      description: "Hands-on Training with Industry Experts",
    },
    {
      title: "100% Placement Support",
      subtitle: "Your Success is Our Commitment",
      description: "Real Projects, Real Skills, Real Jobs",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % actionWords.length), 2200)
    return () => clearInterval(id)
  }, [])

  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "SQL", "Python",
    "Docker", "Kubernetes", "AWS", "CI/CD", "Machine Learning", "GenAI",
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pb-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0056d2] via-[#001d3d] to-[#0056d2]">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(255,195,0,0.25), transparent)" }}
          animate={{ x: [0, 20, -10, 0], y: [0, -10, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-28 -right-24 w-[40rem] h-[40rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.12), transparent)" }}
          animate={{ x: [0, -30, 10, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(0,86,210,0.25), transparent)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white lg:col-span-7 xl:col-span-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      className="text-[#ffc300]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      {actionWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>{" "}
                  your future with
                  <br className="hidden md:block" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#ffc300] to-white">
                    industry-grade training
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl mb-4 text-[#ffc300]">{slides[currentSlide].subtitle}</h2>
                <p className="text-lg md:text-xl mb-8 text-gray-200">{slides[currentSlide].description}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#ffc300] to-[#ff9500] hover:from-[#ff9500] hover:to-[#ffc300] text-black font-semibold"
              >
                <a href="/services">Our Services</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#001d3d] bg-transparent"
              >
                <a href="/courses">Get Started</a>
              </Button>
            </div>




          </motion.div>

          {/* Interactive, image-free panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:col-span-5 xl:col-span-4"
          >
            <InteractivePanel>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm mb-4">
                <Sparkles className="w-4 h-4 text-[#ffc300]" />
                Pick your track
              </div>
              <Tabs defaultValue="dev" className="w-full">
                <TabsList className="bg-white/10">
                  <TabsTrigger value="data" className="data-[state=active]:bg-white/20">
                    <Brain className="w-4 h-4 mr-2" /> Data & AI
                  </TabsTrigger>
                  <TabsTrigger value="dev" className="data-[state=active]:bg-white/20">
                    <Code2 className="w-4 h-4 mr-2" /> Dev
                  </TabsTrigger>
                  <TabsTrigger value="biz" className="data-[state=active]:bg-white/20">
                    <Briefcase className="w-4 h-4 mr-2" /> Business
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="dev" className="mt-4">
                  <ul className="space-y-3 text-sm">
                    {[
                      "React + TypeScript foundations",
                      "API design, auth, and databases",
                      "CI/CD and cloud deployment basics",
                    ].map((line) => (
                      <li key={line} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#ffc300]" /> {line}
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="data" className="mt-4">
                  <ul className="space-y-3 text-sm">
                    {[
                      "Python, Pandas, and data storytelling",
                      "Machine learning projects end-to-end",
                      "GenAI prompting & RAG intro",
                    ].map((line) => (
                      <li key={line} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#ffc300]" /> {line}
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="biz" className="mt-4">
                  <ul className="space-y-3 text-sm">
                    {[
                      "Business analytics with SQL & Excel",
                      "No-code automation and dashboards",
                      "Portfolio building and interviews",
                    ].map((line) => (
                      <li key={line} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#ffc300]" /> {line}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>


            </InteractivePanel>
          </motion.div>
        </div>
      </div>

      {/* Scrolling skills marquee pinned to bottom over blue area */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <motion.div
              className="flex gap-6 text-sm text-blue-100 whitespace-nowrap py-2 px-3"
              animate={{ x: [0, -800] }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            >
              {[...skills, ...skills, ...skills].map((s, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/10">{s}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  )
}

// Interactive panel with mouse-follow spotlight and subtle grid
function InteractivePanel({ children }: { children: ReactNode }) {
  const [spot, setSpot] = useState({ x: 0, y: 0 })
  return (
    <div
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      className="relative h-auto rounded-2xl overflow-hidden text-white"
      style={{
        background:
          `radial-gradient(600px circle at ${spot.x}px ${spot.y}px, rgba(255,195,0,0.15), transparent 40%), rgba(255,255,255,0.06)`,
        backdropFilter: "blur(8px)",
      } as CSSProperties}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px, 24px 24px",
        maskImage: "radial-gradient(closest-side, black, transparent)",
        WebkitMaskImage: "radial-gradient(closest-side, black, transparent)",
      }} />
      <div className="relative p-6 md:p-8">{children}</div>
    </div>
  )
}
