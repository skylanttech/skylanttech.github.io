"use client"

import { motion } from "framer-motion"
import { Smartphone, Download, Bell, BookOpen, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MobileAppPromo() {
  const appFeatures = [
    {
      icon: BookOpen,
      title: "Learn Anywhere",
      description: "Access courses offline and learn on the go",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get reminders for classes and assignments",
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Connect with peers and mentors instantly",
    },
    {
      icon: Award,
      title: "Track Progress",
      description: "Monitor your learning journey and achievements",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#0056d2] via-[#001d3d] to-[#0056d2] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-10 h-10 text-[#ffc300]" />
              <h2 className="text-4xl md:text-5xl font-bold">Get Our Mobile App</h2>
            </div>

            <p className="text-xl text-gray-200 mb-8">
              Take your learning experience to the next level with our feature-rich mobile application. Learn anytime,
              anywhere with offline access and smart notifications.
            </p>

            {/* App Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#ffc300]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xs">📱</span>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>

              <Button size="lg" className="bg-black hover:bg-gray-800 text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xs">▶️</span>
                </div>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>

            {/* QR Code Section */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-black rounded grid grid-cols-4 gap-px p-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`${Math.random() > 0.5 ? "bg-white" : "bg-black"} rounded-sm`} />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Scan QR Code</p>
                <p className="text-sm text-gray-300">Quick download with your phone</p>
              </div>
            </div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-96">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gray-800 rounded-3xl p-2">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-[#0056d2] h-12 flex items-center justify-between px-4 text-white text-sm">
                    <span>9:41</span>
                    <span>Skylant Tech</span>
                    <span>100%</span>
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#0056d2] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">S</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#001d3d]">Welcome back!</h3>
                        <p className="text-sm text-gray-600">Continue learning</p>
                      </div>
                    </div>

                    <Card className="border-0 bg-gradient-to-r from-[#0056d2]/10 to-[#001d3d]/10">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-[#001d3d] mb-2">Current Course</h4>
                        <p className="text-sm text-gray-600 mb-2">Full Stack Development</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#0056d2] h-2 rounded-full w-3/4"></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">75% Complete</p>
                      </CardContent>
                    </Card>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#001d3d]">Today's Schedule</h4>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm font-medium">React Components</p>
                        <p className="text-xs text-gray-500">10:00 AM - 12:00 PM</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm font-medium">Project Review</p>
                        <p className="text-xs text-gray-500">2:00 PM - 3:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#ffc300] rounded-full flex items-center justify-center shadow-lg"
              >
                <Download className="w-8 h-8 text-black" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <Bell className="w-6 h-6 text-[#0056d2]" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* App Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
        >
          {[
            { number: "50K+", label: "App Downloads" },
            { number: "4.8", label: "App Store Rating" },
            { number: "95%", label: "User Satisfaction" },
            { number: "24/7", label: "Offline Access" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[#ffc300] mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
