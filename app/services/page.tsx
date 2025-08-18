"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"
import ProjectServicesSection from "@/components/project-services-section"
import EnquiryModal from "@/components/enquiry-modal"

export default function ServicesPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} />

      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-[#0056d2] via-[#001d3d] to-[#0056d2] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Future-ready IT training, internships, and real client projects with end-to-end career support.
            </p>
          </div>
        </section>

        {/* Core services */}
        <ServicesSection />

        {/* Project services (the 6 items you shared) */}
        {/* <ProjectServicesSection /> */}
      </main>

      <Footer />

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </div>
  )
}
