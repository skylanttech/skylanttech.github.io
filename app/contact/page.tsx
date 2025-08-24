"use client"
import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import Header from "@/components/header";
import { Mail, Phone, MapPin, User } from "lucide-react";
import Footer from "@/components/footer";
import EnquiryModal from "@/components/enquiry-modal";
// import ContactSection from "@/components/contact-section";

export default function ContactPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)
  const [state, handleSubmit] = useForm("xzzvwvrv")

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} />
      <main>
        <section className="pt-24 pb-12 bg-gradient-to-br from-[#0056d2] via-[#001d3d] to-[#0056d2] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch for course details, project support, or any queries. We're here to help!
            </p>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
            {/* Contact Details Card */}
            <div className="bg-gradient-to-br from-[#e3e9f7] to-[#f7fbff] rounded-2xl shadow-lg p-8 flex flex-col justify-center items-start mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-[#001d3d] mb-6">Contact Information</h2>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-[#0056d2]" />
                <span className="text-gray-700">7558531369 | 7249761369</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-[#0056d2]" />
                <span className="text-gray-700">skylanttech@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#0056d2]" />
                <span className="text-gray-700">401, Royal Rudra, Income Tax Colony,<br />Near Vasudev Nagar Metro,<br />Nagpur – 440016</span>
              </div>
              <div className="mt-6 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.123456789!2d79.0219321!3d21.1195977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c18e305382df:0xf294da7973dcb9d5!2sSKYLANT%20TECH%20SOLUTIONS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Skylant Tech Location"
                />
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.instagram.com/skylant.tech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#0056d2] hover:text-[#ff9500] font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.567 5.784 2.296 7.15 2.234 8.416 2.176 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.396 3.678 1.377c-.981.981-1.246 2.093-1.305 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.324 2.393 1.305 3.374.981.981 2.093 1.246 3.374 1.305C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.324 3.374-1.305.981-.981 1.246-2.093 1.305-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.324-2.393-1.305-3.374-.981-.981-2.093-1.246-3.374-1.305C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                  Instagram
                </a>
              </div>
            </div>
            {/* Contact Form Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center items-start">
              <h2 className="text-2xl font-bold text-[#001d3d] mb-6">Send Us a Message</h2>
              {state.succeeded ? (
                <div className="space-y-4">
                  <p className="text-[#001d3d] font-semibold">Thanks! We will get back to you shortly.</p>
                </div>
              ) : (
              <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" id="name" name="name" required className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0056d2]" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      title="Enter 10-digit phone number"
                      required
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0056d2]"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0056d2]"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={3} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0056d2]" />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} className="w-full bg-gradient-to-r from-[#0056d2] to-[#001d3d] text-white font-semibold py-2 rounded-md hover:from-[#001d3d] hover:to-[#0056d2] transition-colors shadow-md">{state.submitting ? "Sending..." : "Send Message"}</button>
              </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </div>
  );
}
