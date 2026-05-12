"use client"

import { motion } from "framer-motion"
import { Check, Zap, Users, Heart, TrendingDown, Clock } from "lucide-react"

interface WhyChooseSectionProps {
  city?: string
}

export default function WhyChooseSection({ city = "" }: WhyChooseSectionProps) {
  const features = [
    {
      icon: Check,
      title: "Ergonomic Layouts",
      description:
        "Designed for comfort & productivity, our layouts maximize space efficiency while prioritizing employee wellbeing.",
    },
    {
      icon: Zap,
      title: "Design + Build Expertise",
      description:
        "One team handles everything from concept to completion, ensuring seamless execution and consistent quality.",
    },
    {
      icon: Clock,
      title: "75-Day Turnaround Guarantee",
      description:
        "We commit to completing your project within 75 days, so you can move in and start working without delays.",
    },
    {
      icon: Users,
      title: "Smart Material Selection",
      description:
        "Premium materials chosen for aesthetics, durability, and sustainability to create spaces that last.",
    },
    {
      icon: Heart,
      title: "Single Point of Contact",
      description:
        "Your dedicated project manager ensures clear communication and smooth coordination throughout the process.",
    },
    {
      icon: TrendingDown,
      title: "Test Fit Plans in 24 Hours",
      description:
        "Quick visualization of your space helps you make informed decisions before committing to the full project.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
          <h2 className="text-3xl md:text-5xl font-light mb-8 text-black">
            Why Choose All Things Design{city ? ` in ${city}` : ""}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine design excellence with operational efficiency to deliver exceptional office spaces
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-500 group hover:bg-green-50 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <feature.icon size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-black">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Whether you're setting up a new office or renovating your current space, our experienced team ensures a
            smooth, hassle-free journey from concept to completion.
            {city && (
              <span className="block mt-4 font-medium">Serving Startups, SMEs, and Corporates across {city}.</span>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
