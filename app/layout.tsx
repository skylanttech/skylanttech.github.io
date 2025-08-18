import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Skylant",
  description:
    "Leading IT training company in Central India offering hands-on training, real client projects, and 100% placement support. Transform your career with our comprehensive courses in Full Stack Development, Python, Data Science, AI/ML, and more.",
  keywords:
    "IT training, programming courses, placement support, internships, Central India, Nagpur, full stack development, python training, data science, AI ML courses",
  authors: [{ name: "Skylant Tech Solutions" }],
  applicationName: "Skylant",
  icons: {
    icon: "/logo/sklit_logo.jpeg",
    shortcut: "/logo/sklit_logo.jpeg",
    apple: "/logo/sklit_logo.jpeg",
  },
  openGraph: {
    title: "Skylant",
    description: "Transform your career with hands-on IT training and real projects",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
