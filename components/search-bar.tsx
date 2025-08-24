"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Filter, Clock, Star, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SearchResult {
  id: string
  title: string
  type: "course" | "blog" | "service"
  description: string
  category: string
  duration?: string
  level?: string
  mode?: string
  price?: string
  rating?: number
  image?: string
}

type FiltersState = { duration: string; level: string; mode: string; priceRange: string }

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [filters, setFilters] = useState<FiltersState>({
    duration: "",
    level: "",
    mode: "",
    priceRange: "",
  })
  const [showFilters, setShowFilters] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Mock search data (memoized to satisfy hooks deps)
  const searchData: SearchResult[] = useMemo(() => [
    {
      id: "1",
      title: "Full Stack Development",
      type: "course",
      description: "Complete web development with React, Node.js, and databases",
      category: "Web Development",
      duration: "6 months",
      level: "Beginner",
      mode: "Hybrid",
      price: "₹45,000",
      rating: 4.8,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "2",
      title: "Python Programming Mastery",
      type: "course",
      description: "Learn Python from basics to advanced with real projects",
      category: "Programming",
      duration: "4 months",
      level: "Beginner",
      mode: "Online",
      price: "₹35,000",
      rating: 4.9,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "3",
      title: "Data Science & AI",
      type: "course",
      description: "Machine learning, data analysis, and AI applications",
      category: "Data Science",
      duration: "8 months",
      level: "Intermediate",
      mode: "Offline",
      price: "₹65,000",
      rating: 4.7,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "4",
      title: "How to Crack Technical Interviews",
      type: "blog",
      description: "Complete guide to ace your next tech interview",
      category: "Career Guidance",
    },
    {
      id: "5",
      title: "Mock Interview Sessions",
      type: "service",
      description: "Practice interviews with industry professionals",
      category: "Placement Support",
    },
  ], [])

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData
        .filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase()),
        )
        .filter((item) => {
          if (item.type !== "course") return true

          if (filters.duration && item.duration !== filters.duration) return false
          if (filters.level && item.level !== filters.level) return false
          if (filters.mode && item.mode !== filters.mode) return false

          return true
        })

      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query, filters, searchData])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setShowFilters(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const clearFilters = () => {
    setFilters({
      duration: "",
      level: "",
      mode: "",
      priceRange: "",
    })
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course":
        return "📚"
      case "blog":
        return "📝"
      case "service":
        return "🛠️"
      default:
        return "🔍"
    }
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search courses, blogs, services..."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-20 h-12 text-lg border-2 border-gray-200 focus:border-[#0056d2] rounded-full"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)} className="rounded-full">
            <Filter className="w-4 h-4" />
          </Button>
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setQuery("")
                setIsOpen(false)
              }}
              className="rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Search Results */}
      <AnimatePresence>
        {isOpen && (query || showFilters) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-hidden"
          >
            {/* Filters */}
            {showFilters && (
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-[#001d3d]">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <select
                    value={filters.duration}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setFilters((prev: FiltersState) => ({ ...prev, duration: e.target.value }))
                    }
                    className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  >
                    <option value="">Duration</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                  <select
                    value={filters.level}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setFilters((prev: FiltersState) => ({ ...prev, level: e.target.value }))
                    }
                    className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  >
                    <option value="">Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  <select
                    value={filters.mode}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setFilters((prev: FiltersState) => ({ ...prev, mode: e.target.value }))
                    }
                    className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  >
                    <option value="">Mode</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                  <select
                    value={filters.priceRange}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setFilters((prev: FiltersState) => ({ ...prev, priceRange: e.target.value }))
                    }
                    className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  >
                    <option value="">Price Range</option>
                    <option value="0-25000">₹0 - ₹25,000</option>
                    <option value="25000-50000">₹25,000 - ₹50,000</option>
                    <option value="50000+">₹50,000+</option>
                  </select>
                </div>
              </div>
            )}

            {/* Results */}
            <div className="max-h-80 overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-2">
                  {results.map((result: SearchResult) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                          {getTypeIcon(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-[#001d3d] truncate">{result.title}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {result.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            {result.duration && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {result.duration}
                              </span>
                            )}
                            {result.mode && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {result.mode}
                              </span>
                            )}
                            {result.rating && (
                              <span className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                {result.rating}
                              </span>
                            )}
                            {result.price && <span className="font-semibold text-[#0056d2]">{result.price}</span>}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : query ? (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>No results found for "{query}"</p>
                  <p className="text-sm mt-1">Try adjusting your search or filters</p>
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>Start typing to search...</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
