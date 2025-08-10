"use client"

import { useState } from "react"
import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutSection from "@/components/about-section";
import EnquiryModal from "@/components/enquiry-modal";

export default function AboutPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} />
      <main>
        <section className="pt-24 pb-12 bg-gradient-to-br from-[#0056d2] via-[#001d3d] to-[#0056d2] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Learn more about Skylant Tech Solutions, our mission, vision, and the team driving innovation in IT training and project support.
            </p>
          </div>
        </section>
        <AboutSection />
      </main>
      <Footer />
      
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </div>
  );
}
