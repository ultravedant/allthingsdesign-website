"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"

export default function WhyWorkWithUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [currentSlide, setCurrentSlide] = useState(0)

  const reasons = [
    {
      id: 1,
      icon: "💡",
      title: "Clarity Before You Commit",
      description: "Test fit-out layouts give you a clear vision before decisions. Fast and free validation.",
    },
    {
      id: 2,
      icon: "⚡",
      title: "Fast-Paced & Deadline-Driven",
      description: "Designs in 3 weeks, execution in 60-75 days. Quality without compromise.",
    },
    {
      id: 3,
      icon: "👥",
      title: "Lean Team, Maximum Efficiency",
      description: "Expert-driven team ensures faster communication and streamlined process.",
    },
    {
      id: 4,
      icon: "🤝",
      title: "One Point of Contact",
      description: "Dedicated POC for seamless coordination. Clear updates, hassle-free experience.",
    },
    {
      id: 5,
      icon: "📉",
      title: "Cost-Effective & Transparent",
      description: "Value-driven design with transparent pricing. No surprises, no hidden charges.",
    },
  ]

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reasons.length)
    }, 2000) // 2 seconds

    return () => clearInterval(interval)
  }, [reasons.length])

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-light mb-20 text-center text-black"
        >
          Why Work With Us?
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Slides */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reasons.map((reason, index) => (
                <div
                  key={reason.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="p-8 bg-white hover:shadow-lg transition-all duration-300 group text-center"
                  >
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
                    <h3 className="text-2xl font-medium mb-4 text-black group-hover:text-gray-600 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{reason.description}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reasons.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl font-light text-black">
            Let's Build Your Dream Office—Fast, Efficient, and Hassle-Free!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
