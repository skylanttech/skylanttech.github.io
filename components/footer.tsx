"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm, ValidationError } from "@formspree/react"

export default function Footer() {
  const [state, handleSubmit] = useForm("mblkbkon")
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Internship", href: "/internship" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-[#001d3d] text-white ">
      <div className="container mx-auto px-4 pt-16 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between border-r border-white/10 pr-6"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#ffc300] to-[#ff9500] rounded-xl flex items-center justify-center shadow-xl">
                  <span className="text-black font-extrabold text-3xl tracking-wide">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">Skylant Tech</h3>
                  <p className="text-sm text-gray-300">Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Central India's fastest-growing IT training and project support company,<br />
                transforming learners into skilled professionals.
              </p>
            </div>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc300] hover:text-black transition-colors shadow">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc300] hover:text-black transition-colors shadow">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc300] hover:text-black transition-colors shadow">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc300] hover:text-black transition-colors shadow">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/*
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=""
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-[#ffc300] transition-colors font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          */}

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-2"
          >
            <h4 className="text-lg font-semibold mb-6">Contact Details</h4>
            <div className="space-y-3 text-gray-300 text-base">
              <p className="leading-relaxed">
                <span className="font-semibold text-white">Address:</span><br />
                401, Royal Rudra, Income Tax Colony,<br />
                Near Vasudev Nagar Metro,<br />
                Nagpur – 440016
              </p>
              <p><span className="font-semibold text-white">Phone:</span> 7558531369 | 7249761369</p>
              <p><span className="font-semibold text-white">Email:</span> skylanttech@gmail.com</p>
              <p>
                <span className="font-semibold text-white">Working Hours:</span><br />
                Mon - Sat: 9:00 AM - 7:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pl-6 border-l border-white/10"
          >
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-base">
              Subscribe to our newsletter for the latest updates on courses and opportunities.
            </p>
            {state.succeeded ? (
              <p className="text-[#ffc300] font-semibold">Thanks for subscribing!</p>
            ) : (
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
              <div>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-md focus:ring-2 focus:ring-[#ffc300]"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <Button disabled={state.submitting} className="w-full bg-gradient-to-r from-[#ffc300] to-[#ff9500] hover:from-[#ff9500] hover:to-[#ffc300] text-black font-semibold rounded-md shadow-lg">
                <Mail className="w-4 h-4 mr-2" />
                {state.submitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            )}
          </motion.div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-gray-300 text-xs flex flex-col md:flex-row md:justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span>&copy; 2024 Skylant Tech Solutions.</span>
            <span className="hidden md:inline-block">|</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <span>Made with</span>
            <span className="text-[#ffc300]">&#10084;</span>
            <span>by Skylant Web Team</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
