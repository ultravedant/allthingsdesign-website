"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Urvi Kataria",
      position: "Founder & Principal Designer",
      image: "/images/urvi.jpg",
      bio: "With over 15 years of experience in interior design, Urvi leads our creative vision and ensures every project reflects our commitment to excellence.",
    },
    {
      id: 2,
      name: "Naofil Khatib",
      position: "Co-Founder",
      image: "/images/naofil.jpeg",
      bio: "Naofil brings a wealth of experience in project management and client relations, ensuring smooth communication and successful project delivery.",
    },
    {
      id: 3,
      name: "Anuja Kadam",
      position: "Growth Manager",
      image: "/images/anuja.jpeg",
      bio: "Anuja specializes in modern office layouts and sustainable design practices, bringing innovation to every workspace we create.",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      position: "Design Consultant",
      image: "/images/office-interior-4.png",
      bio: "Sneha brings fresh perspectives to our design process, focusing on ergonomic solutions and employee well-being.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-8 text-black">About All Things Design</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are passionate about creating inspiring workspaces that enhance productivity, reflect your brand, and
              optimize costs. Our journey began with a simple belief: every office should be a place where people love
              to work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, All Things Design emerged from a vision to transform the way businesses approach
                  office interiors. We recognized that traditional design processes were often lengthy, expensive, and
                  disconnected from the real needs of modern workplaces.
                </p>
                <p>
                  Our innovative approach combines speed with quality, delivering comprehensive design and build
                  solutions in just 75 days. We've successfully completed over 100 office spaces across 5+ cities,
                  covering more than 300,000 square feet of thoughtfully designed workspace.
                </p>
                <p>
                  What sets us apart is our commitment to understanding your business, your culture, and your people.
                  Every design decision we make is driven by the goal of creating spaces that inspire, motivate, and
                  drive success.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative h-96 overflow-hidden rounded-lg">
              <Image src="/images/gallery-8.jpg" alt="Our design process" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">Our Values</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries to create unique, functional spaces that reflect the future of work.",
              },
              {
                title: "Quality",
                description:
                  "Every material, every detail, every finish is carefully selected to ensure lasting beauty and durability.",
              },
              {
                title: "Speed",
                description:
                  "We understand that time is money. Our streamlined process delivers exceptional results in record time.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-500"
              >
                <h3 className="text-xl font-medium mb-4 text-black">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented team of designers, architects, and project managers work together to bring your vision to
              life.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-8"
          >
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full max-w-xs"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-black">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">Ready to Transform Your Workspace?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create an inspiring office environment that drives your business forward.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-700 hover:bg-green-800 text-white px-12 py-4 rounded-none font-light text-lg transition-all duration-300"              onClick={() => (window.location.href = "/#contact")}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
