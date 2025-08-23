"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm, ValidationError } from "@formspree/react"

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  mode?: "general" | "career"
}

export default function EnquiryModal({ isOpen, onClose, mode = "general" }: EnquiryModalProps) {
  const [state, handleSubmit] = useForm("xdkdjdek")
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
                {state.succeeded ? (
                  <div className="space-y-4 text-center">
                    <p className="text-[#001d3d] font-semibold">Thank you! Your enquiry has been submitted.</p>
                    <Button
                      onClick={onClose}
                      className="w-full bg-gradient-to-r from-[#ffc300] to-[#ff9500] hover:from-[#ff9500] hover:to-[#ffc300] text-black font-semibold"
                    >
                      Close
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Identify where the form was opened from */}
                    {mode === "career" && (
                      <input type="hidden" name="form_source" value="career" />
                    )}
                    <div>
                      <Input name="name" placeholder="Full Name" required className="border-gray-300" />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div>
                      <Input
                        name="email"
                        placeholder="Email Address"
                        type="email"
                        required
                        className="border-gray-300"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        title="Enter 10-digit phone number"
                        required
                        className="border-gray-300"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                    {mode === "career" ? (
                      <div>
                        <Input
                          name="resume_link"
                          placeholder="Resume drive link (URL)"
                          type="url"
                          required
                          className="border-gray-300"
                        />
                        <ValidationError prefix="Resume Link" field="resume_link" errors={state.errors} />
                      </div>
                    ) : (
                      <div>
                        <Input name="course" placeholder="Course of Interest" className="border-gray-300" />
                        <ValidationError prefix="Course" field="course" errors={state.errors} />
                      </div>
                    )}
                    <div>
                      <Textarea name="message" placeholder="Message (Optional)" rows={3} className="border-gray-300" />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-gradient-to-r from-[#ffc300] to-[#ff9500] hover:from-[#ff9500] hover:to-[#ffc300] text-black font-semibold"
                    >
                      {state.submitting ? "Submitting..." : "Submit Enquiry"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
