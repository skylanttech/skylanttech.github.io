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
import CourseEnrollmentModal from "@/components/course-enrollment-modal"
import SearchBar from "@/components/search-bar"
import LiveChatWidget from "@/components/live-chat-widget"
import TrendingCourses from "@/components/trending-courses"
import BlogPreview from "@/components/blog-preview"
import MobileAppPromo from "@/components/mobile-app-promo"

export default function HomePage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} searchBar={<SearchBar />} />

      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TrainingProgramsSection />
        <ProjectServicesSection />
        <StatisticsSection />
        <PlacementCompaniesSection />
        <TestimonialsSection />
        <ContactSection />
        <TrendingCourses onEnrollClick={setSelectedCourse} />
        <BlogPreview />
        <MobileAppPromo />
      </main>

      <Footer />

      <CourseEnrollmentModal
        isOpen={!!selectedCourse}
        courseId={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
      <LiveChatWidget />
    </div>
  )
}
