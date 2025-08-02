"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Clock, Users, Star, CreditCard, Smartphone, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

interface CourseEnrollmentModalProps {
  isOpen: boolean
  courseId: string | null
  onClose: () => void
}

interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: string
  mode: string[]
  price: number
  originalPrice: number
  rating: number
  students: number
  instructor: string
  image: string
  features: string[]
  curriculum: { module: string; topics: string[] }[]
  schedule: { batch: string; timing: string; startDate: string; seats: number }[]
}

export default function CourseEnrollmentModal({ isOpen, courseId, onClose }: CourseEnrollmentModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedBatch, setSelectedBatch] = useState("")
  const [selectedMode, setSelectedMode] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    goals: "",
  })

  // Mock course data
  const course: Course = {
    id: "1",
    title: "Full Stack Development Bootcamp",
    description: "Master modern web development with React, Node.js, and cloud deployment",
    duration: "6 months",
    level: "Beginner to Advanced",
    mode: ["Online", "Offline", "Hybrid"],
    price: 45000,
    originalPrice: 65000,
    rating: 4.8,
    students: 1250,
    instructor: "Rahul Sharma",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Live Interactive Classes",
      "Real-world Projects",
      "1-on-1 Mentorship",
      "Job Placement Support",
      "Industry Certification",
      "Lifetime Access to Materials",
    ],
    curriculum: [
      {
        module: "Frontend Development",
        topics: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "State Management"],
      },
      {
        module: "Backend Development",
        topics: ["Node.js", "Express.js", "Database Design", "API Development"],
      },
      {
        module: "Full Stack Projects",
        topics: ["E-commerce Platform", "Social Media App", "Portfolio Website"],
      },
    ],
    schedule: [
      { batch: "Morning Batch", timing: "9:00 AM - 12:00 PM", startDate: "15 Feb 2024", seats: 8 },
      { batch: "Evening Batch", timing: "6:00 PM - 9:00 PM", startDate: "20 Feb 2024", seats: 12 },
      { batch: "Weekend Batch", timing: "10:00 AM - 4:00 PM", startDate: "25 Feb 2024", seats: 5 },
    ],
  }

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleEnrollment = () => {
    // Handle enrollment logic here
    console.log("Enrollment submitted:", { formData, selectedBatch, selectedMode, paymentMethod })
    onClose()
  }

  if (!isOpen || !courseId) return null

  return (
    <AnimatePresence>
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
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden"
        >
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-[#0056d2] to-[#001d3d] text-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Course Enrollment</CardTitle>
                  <p className="text-gray-200">Step {currentStep} of 4</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                <div
                  className="bg-[#ffc300] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </CardHeader>

            <CardContent className="p-0 max-h-[70vh] overflow-y-auto">
              {/* Step 1: Course Overview */}
              {currentStep === 1 && (
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {course.students} students
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {course.rating}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {course.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#0056d2] rounded-full" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-[#001d3d] mb-4">{course.title}</h2>
                      <p className="text-gray-600 mb-6">{course.description}</p>

                      <div className="bg-gradient-to-r from-[#0056d2]/10 to-[#001d3d]/10 rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-[#0056d2]">₹{course.price.toLocaleString()}</span>
                          <span className="text-lg text-gray-500 line-through">
                            ₹{course.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <Badge className="bg-[#ffc300] text-black">
                          Save ₹{(course.originalPrice - course.price).toLocaleString()}
                        </Badge>
                      </div>

                      <Tabs defaultValue="curriculum" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                          <TabsTrigger value="schedule">Schedule</TabsTrigger>
                        </TabsList>
                        <TabsContent value="curriculum" className="space-y-4">
                          {course.curriculum.map((module, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                              <h4 className="font-semibold text-[#001d3d] mb-2">{module.module}</h4>
                              <ul className="space-y-1">
                                {module.topics.map((topic, topicIndex) => (
                                  <li key={topicIndex} className="text-sm text-gray-600 flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#0056d2] rounded-full" />
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </TabsContent>
                        <TabsContent value="schedule" className="space-y-4">
                          {course.schedule.map((batch, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-[#001d3d]">{batch.batch}</h4>
                                <Badge variant={batch.seats > 5 ? "secondary" : "destructive"}>
                                  {batch.seats} seats left
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">{batch.timing}</p>
                              <p className="text-sm text-gray-600">Starts: {batch.startDate}</p>
                            </div>
                          ))}
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#001d3d] mb-6">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <Input
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <Input
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          value={formData.experience}
                          onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                        >
                          <option value="">Select your experience</option>
                          <option value="beginner">Complete Beginner</option>
                          <option value="some">Some Programming Knowledge</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Career Goals</label>
                        <Textarea
                          placeholder="Tell us about your career goals..."
                          rows={4}
                          value={formData.goals}
                          onChange={(e) => setFormData((prev) => ({ ...prev, goals: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Batch & Mode Selection */}
              {currentStep === 3 && (
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#001d3d] mb-6">Select Batch & Mode</h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">Choose Learning Mode</label>
                      <div className="grid md:grid-cols-3 gap-4">
                        {course.mode.map((mode) => (
                          <div
                            key={mode}
                            onClick={() => setSelectedMode(mode)}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                              selectedMode === mode
                                ? "border-[#0056d2] bg-[#0056d2]/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="text-center">
                              {mode === "Online" && <Smartphone className="w-8 h-8 mx-auto mb-2 text-[#0056d2]" />}
                              {mode === "Offline" && <Building className="w-8 h-8 mx-auto mb-2 text-[#0056d2]" />}
                              {mode === "Hybrid" && <Users className="w-8 h-8 mx-auto mb-2 text-[#0056d2]" />}
                              <h4 className="font-semibold">{mode}</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {mode === "Online" && "Learn from anywhere"}
                                {mode === "Offline" && "In-person classes"}
                                {mode === "Hybrid" && "Best of both worlds"}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">Select Batch Timing</label>
                      <div className="space-y-3">
                        {course.schedule.map((batch, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedBatch(batch.batch)}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                              selectedBatch === batch.batch
                                ? "border-[#0056d2] bg-[#0056d2]/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold">{batch.batch}</h4>
                                <p className="text-sm text-gray-600">{batch.timing}</p>
                                <p className="text-sm text-gray-600">Starts: {batch.startDate}</p>
                              </div>
                              <Badge variant={batch.seats > 5 ? "secondary" : "destructive"}>
                                {batch.seats} seats left
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Payment */}
              {currentStep === 4 && (
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#001d3d] mb-6">Payment Details</h3>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold mb-3">Order Summary</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Course Fee</span>
                            <span>₹{course.originalPrice.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-green-600">
                            <span>Discount</span>
                            <span>-₹{(course.originalPrice - course.price).toLocaleString()}</span>
                          </div>
                          <div className="border-t pt-2 flex justify-between font-semibold">
                            <span>Total Amount</span>
                            <span>₹{course.price.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">Payment Method</label>
                        <div className="space-y-3">
                          {[
                            { id: "card", name: "Credit/Debit Card", icon: CreditCard },
                            { id: "upi", name: "UPI Payment", icon: Smartphone },
                            { id: "netbanking", name: "Net Banking", icon: Building },
                          ].map((method) => (
                            <div
                              key={method.id}
                              onClick={() => setPaymentMethod(method.id)}
                              className={`p-4 border-2 rounded-lg cursor-pointer transition-colors flex items-center gap-3 ${
                                paymentMethod === method.id
                                  ? "border-[#0056d2] bg-[#0056d2]/5"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <method.icon className="w-5 h-5 text-[#0056d2]" />
                              <span className="font-medium">{method.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-gradient-to-r from-[#0056d2]/10 to-[#001d3d]/10 rounded-lg p-6">
                        <h4 className="font-semibold mb-4">Enrollment Benefits</h4>
                        <ul className="space-y-2">
                          {[
                            "Lifetime access to course materials",
                            "1-on-1 mentorship sessions",
                            "Real-world project experience",
                            "Job placement assistance",
                            "Industry certification",
                            "Alumni network access",
                          ].map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-[#0056d2] rounded-full" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>Money Back Guarantee:</strong> If you're not satisfied within the first 7 days, we'll
                          refund your full payment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>

            {/* Footer with Navigation */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full ${step <= currentStep ? "bg-[#0056d2]" : "bg-gray-300"}`}
                    />
                  ))}
                </div>

                {currentStep < 4 ? (
                  <Button onClick={handleNext} className="bg-gradient-to-r from-[#0056d2] to-[#001d3d]">
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handleEnrollment}
                    className="bg-gradient-to-r from-[#ffc300] to-[#ff9500] text-black font-semibold"
                  >
                    Complete Enrollment
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
