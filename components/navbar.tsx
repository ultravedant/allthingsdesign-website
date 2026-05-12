"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHeroCovered, setIsHeroCovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const heroSection = document.getElementById("hero-section")

    if (!heroSection) {
      setIsHeroCovered(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroCovered(!entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: "-120px 0px 0px 0px",
      }
    )

    observer.observe(heroSection)

    return () => {
      observer.disconnect()
    }
  }, [pathname])

  const shouldShowNav = pathname !== "/" || isHeroCovered || isScrolled
  const visibilityClasses = shouldShowNav ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"

  return (
    <motion.nav
      initial={false}
      animate={{ y: shouldShowNav ? 0 : -20, opacity: shouldShowNav ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white text-black shadow-sm ${visibilityClasses} ${
        shouldShowNav && isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/header-logo.png" alt="All Things Design" width={120} height={70} className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <Link
            href="/about"
            className={`text-lg font-medium transition-colors ${
              pathname === "/about" ? "text-green-700" : "text-black"
            } hover:text-green-700`}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className={`text-lg font-medium transition-colors ${
              pathname === "/gallery" ? "text-green-700" : "text-black"
            } hover:text-green-700`}
          >
            Gallery
          </Link>
          <Link
            href="/#pricing"
            className="text-lg font-medium transition-colors text-black hover:text-green-700"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault()
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Pricing
          </Link>
          <Link
            href="/#contact"
            className="text-lg font-medium transition-colors text-black hover:text-green-700"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Button
            className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
            onClick={() => window.open("tel:+919326990075", "_self")}
          >
            <Phone size={16} />
            +91 9326990075
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl p-2 text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-black shadow-lg border-t border-black/5"
          >
            <div className="flex flex-col space-y-4 p-4">
              <Link
                href="/about"
                className="py-2 transition-colors text-lg font-medium hover:text-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="py-2 transition-colors text-lg font-medium hover:text-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/#pricing"
                className="py-2 transition-colors text-lg font-medium hover:text-green-700"
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (pathname === "/") {
                    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Pricing
              </Link>
              <Link
                href="/#contact"
                className="py-2 transition-colors text-lg font-medium hover:text-green-700"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact Us
              </Link>

              <Button
                className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 mt-2"
                onClick={() => window.open("tel:+919326990075", "_self")}
              >
                <Phone size={16} />
                +91 9326990075
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
