"use client"

import CityHero from "@/components/city-hero"
import WhyChooseSection from "@/components/why-choose-section"
import PricingSection from "@/components/pricing-section"
import CityCTA from "@/components/city-cta"
import CityProjects from "@/components/city-projects"

export default function Bangalore() {
  const cityProjects = [
    {
      id: 1,
      name: "Tech Hub Office",
      description:
        "A cutting-edge workspace designed for a leading tech company in Bangalore, featuring innovative design and collaborative spaces.",
      image: "/images/THUB-1.jpg",
    },
    {
      id: 2,
      name: "Startup Incubator",
      description:
        "A flexible and dynamic office environment designed for a startup incubator in Bangalore's tech district, supporting growth and innovation.",
      image: "/images/office-interior-6.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <CityHero city="Bangalore" image="/images/elleys.jpg" />
      <WhyChooseSection city="Bangalore" />
      <CityProjects city="Bangalore" projects={cityProjects} />
      <PricingSection city="Bangalore" />
      <CityCTA city="Bangalore" image="/images/gallery-5.jpg" />
    </div>
  )
}
