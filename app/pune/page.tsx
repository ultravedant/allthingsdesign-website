"use client"

import CityHero from "@/components/city-hero"
import WhyChooseSection from "@/components/why-choose-section"
import PricingSection from "@/components/pricing-section"
import CityCTA from "@/components/city-cta"
import CityProjects from "@/components/city-projects"

export default function Pune() {
  const cityProjects = [
    {
      id: 1,
      name: "Creative Studio",
      description:
        "A vibrant and inspiring workspace designed for a creative agency in Pune, featuring flexible work areas and innovative design elements.",
      image: "/images/gallery-7.jpg",
    },    
    {
      id: 2,
      name: "Tech Innovation Hub",
      description:
        "A modern office space for a tech startup in Pune's IT corridor, designed to foster innovation and collaboration among team members.",
      image: "/images/trend.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <CityHero city="Pune" image="/images/trend1.jpg" />
      <WhyChooseSection city="Pune" />
      <CityProjects city="Pune" projects={cityProjects} />
      <PricingSection city="Pune" />
      <CityCTA city="Pune" image="/images/HOS-1.jpg" />
    </div>
  )
}
