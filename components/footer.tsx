"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  const cities = [
    { name: "Mumbai", path: "/mumbai" },
    { name: "Navi Mumbai", path: "/navi-mumbai" },
    { name: "Pune", path: "/pune" },
    { name: "Chennai", path: "/chennai" },
    { name: "Hyderabad", path: "/hyderabad" },
    { name: "Delhi", path: "/delhi" },
    { name: "Bangalore", path: "/bangalore" },
  ]

  const handleServiceClick = (section: string) => {
    // Navigate to home page first if not already there
    if (window.location.pathname !== "/") {
      router.push("/")
      // Need to wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Image src="/images/header-logo.png" alt="All Things Design" width={150} height={100} className="h-16 w-auto" />
            <p className="text-gray-400 leading-relaxed">
              Transform your workspace in just 75 days with high-performance, brand-driven designs that enhance
              productivity.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="https://www.instagram.com/allthingsdesign.in" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.linkedin.com/company/all-things-design-mumbai" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </Link>  
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleServiceClick("services")}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Test Fitout Layout
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("service-design")}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Office Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("service-build")}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Design & Build
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("contact")}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Office Renovation
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("contact")}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("pricing")}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-medium mb-4">Office Interiors</h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.name}>
                  <Link href={city.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    Office Interiors in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All Things Design. All rights reserved.
            </p>
            <Link
              href="https://enlightenintelligence.framer.ai/"
              className="text-gray-500 text-sm md:text-right hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Designed with 💖 by Enlighten Intelligence
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
