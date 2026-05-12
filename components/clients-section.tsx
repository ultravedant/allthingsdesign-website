"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import CountUp from "react-countup"
import { Building, MapPin, ConeIcon as Crane } from "lucide-react"

export default function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [counting, setCounting] = useState(false)

  useEffect(() => {
    if (isInView) {
      setCounting(true)
    }
  }, [isInView])

  const clients = [
    { id: 1, logo: "/images/akash-byjus.png", alt: "Client 1" },
    { id: 2, logo: "/images/cityflo-logo-black.png", alt: "Client 2" },
    { id: 3, logo: "/images/cogoport.png", alt: "Client 3" },
    { id: 4, logo: "/images/elleys-logo.png", alt: "Client 4" },
    { id: 5, logo: "/images/dentons-logo.png", alt: "Client 5" },
    { id: 6, logo: "/images/infra-market.png", alt: "Client 6" },
  ]

  const stats = [
    {
      id: 1,
      icon: Building,
      value: 300000,
      suffix: "+",
      prefix: "",
      label: "Sq. Ft. of Office Space Designed",
    },
    {
      id: 2,
      icon: MapPin,
      value: 5,
      suffix: "+",
      prefix: "",
      label: "Cities Served",
    },
    {
      id: 3,
      icon: Crane,
      value: 100,
      suffix: "+",
      prefix: "",
      label: "Office Spaces Designed & Built",
    },
  ]

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex overflow-hidden mb-20"
        >
          <div className="flex animate-marquee">
            {clients.map((client) => (
              <div key={client.id} className="mx-8 flex-shrink-0">
                <div className="relative h-20 w-40 overflow-hidden rounded-lg">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.alt}
                    fill
                    className="object-cover green hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            {clients.map((client) => (
              <div key={`duplicate-${client.id}`} className="mx-8 flex-shrink-0">
                <div className="relative h-20 w-40 overflow-hidden rounded-lg">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.alt}
                    fill
                    className="object-cover green hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={48} className="text-green-700" />
              </div>
              <h3 className="text-4xl font-light mb-2 text-black flex items-center justify-center">
                <span>{stat.prefix}</span>
                {counting && <CountUp start={0} end={stat.value} duration={2.5} separator="," suffix={stat.suffix} />}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl mb-10 text-black font-light">
            Let's build a workspace that works for you designed for efficiency &  built for Success. 
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 py-6 px-8 rounded-none font-light"
            >
              +91 9326990075
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-6 px-8 rounded-none font-light"
            >
              Get a Free Test Fitout in 24 Hours
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-6 px-8 rounded-none font-light"
            >
              Enquire Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
