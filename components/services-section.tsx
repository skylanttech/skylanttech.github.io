"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Layers, Target, MessageSquare, FileText, Palette, Camera, Megaphone, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      bullets: [
        "Custom responsive website design",
        "E-commerce functionality",
        "SEO-optimized development",
      ],
    },
    {
      icon: Layers,
      title: "Software Development Services",
      bullets: [
        "Custom Software Development (tailored business solutions)",
        "Web Application Development (Django, PHP, .NET, etc.)",
        "Mobile App Development (Android, iOS, Flutter, React Native)",
        "Enterprise Applications (ERP, CRM, HRMS systems)",
        "IT Consulting & Strategy – smart technology planning, cost optimization, and digital growth.",
        "Staff Augmentation / Dedicated Developers – Hire skilled developers for short or long-term projects.",
        "Business Process Automation – Automate tasks like billing, reporting, and approvals to save time.",
        "Technology Training & Internship Programs – Upskill your workforce with the latest IT training.",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Analytics Services",
      bullets: [
        "Data Collection & Cleaning – Preparing accurate and reliable datasets",
        "Data Visualization – Interactive dashboards & reports (Power BI, Tableau, Excel)",
        "Business Intelligence (BI) – Transforming raw data into actionable insights",
        "Predictive Analytics – Forecasting future trends with AI & ML models",
        "Data-Driven Decision Support – Enabling smarter business strategies",
      ],
    },
    {
      icon: FileText,
      title: "College Project Kit",
      bullets: [
        "Project Report – Complete documentation (synopsis, abstract, objectives, modules, conclusion), as per college/university format, editable in Word/PDF",
        "Source Code – Fully functional project code (HTML, CSS, JS, PHP, Python, Django, etc.) with clear comments; includes DB files (MySQL/SQLite)",
        "Project Demo – Step-by-step installation guide, screenshots & workflow explanation (video demo optional)",
        "Presentation – Ready-to-use PPT with problem statement, solution, system design, screenshots, and results",
        "Example Kits – Campus Placement Management System (PHP + MySQL), AI Chatbot for Healthcare (Python/NLP), E‑Commerce Website (Django/React + MySQL), Library Management System (Java + DBMS)",
      ],
    },
    
    {
      icon: Target,
      title: "Digital Marketing",
      bullets: [
        "Search engine optimization (SEO)",
        "PPC advertising campaigns",
        "Email marketing strategies",
      ],
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      bullets: [
        "Content creation & scheduling",
        "Community engagement",
        "Analytics & reporting",
      ],
    },
    {
      icon: FileText,
      title: "Content Development",
      bullets: [
        "Blog & article writing",
        "SEO content optimization",
        "Content strategy planning",
      ],
    },
    {
      icon: Palette,
      title: "Graphic Designing",
      bullets: [
        "Logo & brand identity design",
        "Marketing materials creation",
        "Social media graphics",
      ],
    },
    {
      icon: Camera,
      title: "Instagram Management",
      bullets: [
        "Content strategy & planning",
        "Hashtag optimization",
        "Engagement growth tactics",
      ],
    },
    {
      icon: Megaphone,
      title: "Meta Ads Promotion",
      bullets: [
        "Campaign strategy development",
        "Audience targeting setup",
        "Performance optimization",
      ],
    },
  ]
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const selectedService = selectedIndex !== null ? services[selectedIndex] : null
  const SelectedIcon = selectedService?.icon

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#f7fbff] to-white ring-1 ring-transparent hover:ring-[#0056d2]/40">
                <CardContent className="p-6 text-center flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0056d2] to-[#001d3d] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#001d3d] mb-3">{service.title}</h3>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedIndex(index)
                      setIsOpen(true)
                    }}
                    className="mx-auto mt-2 border-[#0056d2] text-[#0056d2] hover:bg-[#0056d2] hover:text-white"
                    aria-haspopup="dialog"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pop-out layer for selected service */}
        <Dialog
          open={isOpen}
          onOpenChange={(open) => {
            setIsOpen(open)
            if (!open) setSelectedIndex(null)
          }}
        >
          <DialogContent className="sm:max-w-2xl md:max-w-3xl bg-white/95 backdrop-blur shadow-2xl">
            {selectedService && (
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056d2] to-[#001d3d] rounded-xl flex items-center justify-center shadow">
                    {SelectedIcon ? <SelectedIcon className="w-6 h-6 text-white" /> : null}
                  </div>
                  <DialogHeader className="flex-1">
                    <DialogTitle className="text-2xl text-[#001d3d]">
                      {selectedService.title}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      Details about {selectedService.title}
                    </DialogDescription>
                  </DialogHeader>
                </div>

                <div className="text-gray-700 leading-relaxed bg-[#f7fbff] border border-gray-100 rounded-xl p-4">
                  {Array.isArray((selectedService as any).bullets) ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {(selectedService as any).bullets.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
