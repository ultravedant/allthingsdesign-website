"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CityCTAProps {
  city: string
  image: string
}

export default function CityCTA({ city, image }: CityCTAProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">
              Let's build an office in {city} that works as hard as you do.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced designers and project managers are ready to transform your workspace into a
              productive, inspiring environment that reflects your brand and culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get a Free Test Fit Plan
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                onClick={() => window.open("tel:+919326990075", "_self")}
              >
                Talk to Our Team - +91 9326990075
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src={image || "/placeholder.svg"} alt={`Office design in ${city}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-xl font-light">Creating inspiring workspaces in {city}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
