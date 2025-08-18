"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import TrainingProgramsSection from "@/components/training-programs-section"
import ProjectServicesSection from "@/components/project-services-section"
import StatisticsSection from "@/components/statistics-section"
import PlacementCompaniesSection from "@/components/placement-companies-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import EnquiryModal from "@/components/enquiry-modal"

export default function HomePage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} />

      <main>
        <HeroSection />
        {/* <ServicesSection /> */}
        {/* <AboutSection /> */}
        <TrainingProgramsSection />
        {/* <ProjectServicesSection /> */}
        <StatisticsSection />
        <PlacementCompaniesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </div>
  )
}
