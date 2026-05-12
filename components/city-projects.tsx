"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CityProjectsProps {
  city: string
  projects: {
    id: number
    name: string
    description: string
    image: string
  }[]
}

export default function CityProjects({ city, projects }: CityProjectsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-black">Our Projects in {city}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of inspiring office spaces designed and built in {city}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-medium mb-4 text-black">{project.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">View Project</Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            onClick={() => (window.location.href = "/gallery")}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
