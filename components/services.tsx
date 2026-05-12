"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const service1Ref = useRef(null)
  const service2Ref = useRef(null)
  const service3Ref = useRef(null)
  
  const service1InView = useInView(service1Ref, { once: false, amount: 0.2 })
  const service2InView = useInView(service2Ref, { once: false, amount: 0.2 })
  const service3InView = useInView(service3Ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const services = [
    {
      id: 1,
      title: "Due Diligence & Test Fitout Layout",
      description:
        "Get a space assessment and layout within 24 hours to help you visualize and make informed decisions.",
      cta: "Get a free Test Fitout",
      image: "/images/dentos.jpg",
    },
    {
      id: 2,
      title: "Tailor-made Office Designs",
      description:
        "Experience our exclusive design-only service, where creativity meets precision. In just 3 weeks, we craft meticulously tailored office designs that align with your brand identity and functional needs.",
      cta: "Start Now",
      image: "/images/THUB-2.jpg",
    },
    {
      id: 3,
      title: "Design & Build Your Dream Office",
      description2:
        "Our Design & Build service is crafted to ensure a stress-free, efficient, and premium office transformation. We bring together top-tier professionals, use the finest materials, and follow a streamlined process to deliver workspaces that elevate your brand and enhance productivity.",
      cta: "Build Today",
      image: "/images/HOS-2.jpg",
    },
  ]

  return (
    <section id="services" className="bg-white" ref={ref}>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-black">Fast-Track Your Office Interiors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From Concept to Completion</p>
        </motion.div>

        <div className="flex flex-col">
          {services.map((service, index) => {
            const serviceRefs = [service1Ref, service2Ref, service3Ref]
            const serviceInViews = [service1InView, service2InView, service3InView]

            return (
              <div
                key={service.id}
                id={index === 0 ? "service-fitout" : index === 1 ? "service-design" : "service-build"}
                ref={serviceRefs[index]}
                className={`relative min-h-[95vh] w-full overflow-hidden flex items-center ${
                  index !== services.length - 1 ? "mb-0" : ""
                }`}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent pointer-events-none" />

                <div className="relative z-10 w-full px-6 lg:px-20 max-w-6xl mx-auto">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={serviceInViews[index] ? "visible" : "hidden"}
                    className="max-w-3xl space-y-3 text-white"
                  >
                    <motion.h3
                      variants={itemVariants}
                      className="text-2xl md:text-4xl font-light"
                    >
                      {service.title}
                    </motion.h3>
                    {service.description && (
                      <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-base text-white/85 leading-relaxed"
                      >
                        {service.description}
                      </motion.p>
                    )}
                    {service.description2 && (
                      <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-base text-white/85 leading-relaxed"
                      >
                        {service.description2}
                      </motion.p>
                    )}
                    <motion.div variants={buttonVariants}>
                      <Button
                        className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-3 text-sm md:text-base transition-all duration-300"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        {service.cta}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
