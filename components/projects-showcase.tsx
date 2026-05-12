"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { useRouter } from "next/navigation"

export default function ProjectsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const router = useRouter()

  const projects = [
    {
      id: 1,
      image: "/images/OMR-1.jpeg",
      name: "Trend India OMR",
      location: "Chennai",
    },
    {
      id: 2,
      image: "/images/HOS-1.jpg",
      name: "House of Sparsh",
      location: "Mumbai",
    },
    {
      id: 3,
      image: "/images/THUB-1.jpg",
      name: "Trend India",
      location: "Bangalore",
    },
    {
      id: 4,
      image: "/images/tungsten.jpeg",
      name: "Tungsten Gym",
      location: "Navi Mumbai",
    },
    {
      id: 5,
      image: "/images/trend.jpg",
      name: "Trend India Ekkattungal",
      location: "Pune",
    },
    {
      id: 6,
      image: "/images/trend1.jpg",
      name: "Trend India Karuna",
      location: "Hyderabad",
    },
  ]

  const handleProjectClick = () => {
    router.push("/gallery")
  }

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-black">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover our portfolio of inspiring office spaces</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={handleProjectClick}
            >
              <div className="relative h-80 overflow-hidden mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-green-700 text-white px-6 py-2 rounded-none font-light">View in Gallery</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-black group-hover:text-green-700 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
