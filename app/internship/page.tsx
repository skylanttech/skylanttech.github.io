"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectServicesSection from "@/components/project-services-section"
import EnquiryModal from "@/components/enquiry-modal"
import AboutSection from "@/components/about-section"
import TrainingProgramsSection from "@/components/training-programs-section"
import StatisticsSection from "@/components/statistics-section"
import PlacementCompaniesSection from "@/components/placement-companies-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function InternshipPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} />

      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-[#0056d2] via-[#001d3d] to-[#0056d2] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Internship & Projects</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Hands-on internships and real client projects to build experience and launch your career.
            </p>
          </div>
        </section>

  {/* Reuse the existing project services grid */}
        <ProjectServicesSection />

  {/* Additional helpful sections */}
  <AboutSection />
  <TrainingProgramsSection />
  <StatisticsSection />
  <PlacementCompaniesSection />
  <TestimonialsSection />
      </main>

      <Footer />

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </div>
  )
}
