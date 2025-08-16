"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EnquiryModal from "@/components/enquiry-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock } from "lucide-react"

const openings = [
  { title: "Python Developer Intern", type: "Internship", location: "Nagpur", schedule: "Full-time", id: 1 },
  { title: "Frontend Developer (React)", type: "Full-time", location: "Nagpur / Hybrid", schedule: "On-site", id: 2 },
  { title: "Data Science Trainee", type: "Internship", location: "Remote", schedule: "Part-time", id: 3 },
]

export default function CareerPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} />

      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-[#0056d2] via-[#001d3d] to-[#0056d2] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at Skylant</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Join our mission to transform learners into skilled professionals.
            </p>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#001d3d] mb-6">Open Positions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openings.map((role) => (
                <Card key={role.id} className="border-0 bg-white hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#001d3d] mb-2">{role.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
                      <Badge variant="secondary">{role.type}</Badge>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{role.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{role.schedule}</span>
                    </div>
                    <Button
                      onClick={() => setIsEnquiryModalOpen(true)}
                      className="w-full bg-gradient-to-r from-[#0056d2] to-[#001d3d] hover:from-[#001d3d] hover:to-[#0056d2]"
                    >
                      Apply / Enquire
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="pb-16">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
            {["Real Impact", "Growth & Mentorship", "Collaborative Culture"].map((benefit) => (
              <Card key={benefit} className="border-0 bg-gradient-to-br from-[#f7fbff] to-white">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-[#0056d2] rounded-lg mb-3" />
                  <h4 className="font-semibold text-[#001d3d] mb-1">{benefit}</h4>
                  <p className="text-gray-600 text-sm">Be part of a team helping thousands of learners move into tech careers.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </div>
  )
}
