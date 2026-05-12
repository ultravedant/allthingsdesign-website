"use client"

import CityHero from "@/components/city-hero"
import WhyChooseSection from "@/components/why-choose-section"
import PricingSection from "@/components/pricing-section"
import CityCTA from "@/components/city-cta"
import CityProjects from "@/components/city-projects"

export default function Mumbai() {
  const cityProjects = [
    {
      id: 1,
      name: "House of Sparsh",
      description:
        "A modern office space designed for a growing tech company in Mumbai, featuring collaborative areas, focus zones, and a vibrant cafeteria.",
      image: "/images/HOS-1.jpg",
    },
    {
      id: 2,
      name: "Corporate Headquarters",
      description:
        "An elegant and sophisticated office design for a financial services firm in Mumbai's business district, balancing professionalism with comfort.",
      image: "/images/elleys.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <CityHero city="Mumbai" image="/images/hero-slide-1.jpeg" />
      <WhyChooseSection city="Mumbai" />
      <CityProjects city="Mumbai" projects={cityProjects} />
      <PricingSection city="Mumbai" />
      <CityCTA city="Mumbai" image="/images/HOS-2.jpg" />
    </div>
  )
}
