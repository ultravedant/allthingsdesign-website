"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CityHeroProps {
  city: string
  image: string
}

export default function CityHero({ city, image }: CityHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="container mx-auto px-4 z-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-white leading-tight">
              Smart Office Interiors in <span className="text-green-400">{city}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">Built for Speed, Style & Efficiency</p>
            <p className="text-lg text-gray-300 mb-8">
              75-day guaranteed execution for ergonomic, fully-furnished workspaces.
            </p>
          </motion.div>

          {/* Quick Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-medium mb-6 text-black">Get Your Free Consultation</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-700">
                  Name
                </Label>
                <Input id="name" className="mt-1" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="company" className="text-gray-700">
                  Company
                </Label>
                <Input id="company" className="mt-1" placeholder="Company name" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-700">
                  Phone
                </Label>
                <Input id="phone" className="mt-1" placeholder="Phone number" />
              </div>
              <div>
                <Label htmlFor="area" className="text-gray-700">
                  Area (Sq. Ft.)
                </Label>
                <Input id="area" className="mt-1" placeholder="Project area" />
              </div>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://calendly.com/allthingsdesign-work/15min", "_blank");
                }}
                type="button"
              >
                Get Free Quote
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
