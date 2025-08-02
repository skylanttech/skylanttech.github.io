"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md"
          >
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-[#0056d2] to-[#001d3d] text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Enquiry Form</CardTitle>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input placeholder="Full Name" className="border-gray-300" />
                  <Input placeholder="Email Address" type="email" className="border-gray-300" />
                  <Input placeholder="Phone Number" className="border-gray-300" />
                  <Input placeholder="Course of Interest" className="border-gray-300" />
                  <Textarea placeholder="Message (Optional)" rows={3} className="border-gray-300" />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ffc300] to-[#ff9500] hover:from-[#ff9500] hover:to-[#ffc300] text-black font-semibold"
                  >
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
