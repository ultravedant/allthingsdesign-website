"use client"

import CityHero from "@/components/city-hero"
import WhyChooseSection from "@/components/why-choose-section"
import PricingSection from "@/components/pricing-section"
import CityCTA from "@/components/city-cta"
import CityProjects from "@/components/city-projects"

export default function NaviMumbai() {
  const cityProjects = [
    {
      id: 1,
      name: "Tungsten Gym",
      description:
        "A modern gym designed for a growing gym in Navi Mumbai, featuring collaborative areas and smart office solutions.",
      image: "/images/tungsten.jpeg",
    },
    {
      id: 2,
      name: "Financial Services Hub",
      description:
        "An elegant office space designed for a financial services firm in Navi Mumbai, balancing professionalism with employee comfort.",
      image: "/images/hero-slide-3.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <CityHero city="Navi Mumbai" image="/images/hero-slide-2.jpeg" />
      <WhyChooseSection city="Navi Mumbai" />
      <CityProjects city="Navi Mumbai" projects={cityProjects} />
      <PricingSection city="Navi Mumbai" />
      <CityCTA city="Navi Mumbai" image="/images/office-interior-2.png" />
    </div>
  )
}
