"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onEnquiryClick: () => void
  searchBar?: React.ReactNode
}

export default function Header({ onEnquiryClick, searchBar }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
  { name: "Internship & Projects", href: "/internship" },
    { name: "Services", href: "/services" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#0056d2] to-[#001d3d] rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/logo/sklit_logo.jpeg"
                alt="Skylant Tech Logo"
                className="w-8 h-8 object-contain rounded"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#001d3d]">Skylant Tech</h1>
              <p className="text-xs text-gray-600">Solutions</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-[#0056d2] transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Search Bar (if provided) */}
          {searchBar && <div className="hidden md:block flex-1 max-w-md mx-8">{searchBar}</div>}

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={onEnquiryClick}
              className="bg-gradient-to-r from-[#ffc300] to-[#ff9500] hover:from-[#ff9500] hover:to-[#ffc300] text-black font-semibold"
            >
              Enquiry Form
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:text-[#0056d2] hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <Button
                    onClick={() => {
                      onEnquiryClick()
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full bg-gradient-to-r from-[#ffc300] to-[#ff9500] hover:from-[#ff9500] hover:to-[#ffc300] text-black font-semibold"
                  >
                    Enquiry Form
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
