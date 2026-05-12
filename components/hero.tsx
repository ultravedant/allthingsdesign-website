"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/hero-slide-1.jpeg",
      title: "Creating inspiring workspaces",
      subtitle: "Transform your office in 75 days",
      highlightWords: { title: ["inspiring"], subtitle: ["Transform"] },
    },
    {
      image: "/images/hero-slide-2.jpeg",
      title: "From concept to completion",
      subtitle: "Your office, your way",
      highlightWords: { title: ["completion"], subtitle: ["Your"] },
    },
    {
      image: "/images/hero-slide-3.jpeg",
      title: "Design that drives success",
      subtitle: "Built for productivity & growth",
      highlightWords: { title: ["success"], subtitle: ["productivity"] },
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const renderTextWithHighlight = (text: string, highlightWords: string[]) => {
    const words = text.split(" ")
    return words.map((word, index) => {
      const isHighlighted = highlightWords.includes(word)
      return (
        <motion.span
          key={index}
          variants={letterVariants}
          className={`inline-block mr-2 ${isHighlighted ? "font-medium relative highlight-text" : ""}`}
        >
          {word}
        </motion.span>
      )
    })
  }

  const blurDataURL = useMemo(
    () =>
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%232b2b2b' width='1' height='1'/%3E%3C/svg%3E",
    []
  )

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Images - All slides rendered with opacity control */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out overflow-hidden ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className={`object-cover object-center transition-[transform] duration-[5000ms] ease-in-out ${
              currentSlide === index ? "scale-105" : "scale-100"
            }`}
            style={{
              filter: "brightness(1.15) contrast(1.1) saturate(1.1)",
            }}
          />
        </div>
      ))}

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 z-20 flex items-center justify-center min-h-screen">
        <div className="max-w-3xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-5"
            >
              <motion.h1
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="text-3xl md:text-5xl lg:text-6xl font-medium mb-2 text-white leading-tight tracking-wider"
              >
                {renderTextWithHighlight(slides[currentSlide].title, slides[currentSlide].highlightWords.title)}
              </motion.h1>
              {/* <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="text-xl md:text-3xl lg:text-4xl font-medium text-gray-200 tracking-wide"
              >
                {slides[currentSlide].subtitle.split(" ").map((word, index) => {
                  const isHighlighted = slides[currentSlide].highlightWords.subtitle.includes(word)
                  return (
                    <span key={index} className={`mr-2 ${isHighlighted ? "font-medium relative highlight-text" : ""}`}>
                      {word}
                    </span>
                  )
                })}
              </motion.h2> */}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-5"
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-base md:text-lg font-medium text-white max-w-xl mx-auto"
            ></motion.p>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 pt-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <Button
                  size="lg"
                  className="bg-green-700 hover:bg-green-800 text-white text-sm px-8 py-4 rounded-none font-light transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Enquire Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-green-700 w-6" : "bg-gray-500 w-1.5"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .highlight-text::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 3px;
          background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4));
          border-radius: 2px;
          animation: highlightPulse 2s ease-in-out infinite;
        }
        @keyframes highlightPulse {
          0%, 100% {
            opacity: 0.7;
            transform: scaleX(0.95);
          }
          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}
