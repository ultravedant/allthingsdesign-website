"use client"

import Hero from "@/components/hero"
import Services from "@/components/services"
import ClientsSection from "@/components/clients-section"
import WhyWorkWithUs from "@/components/why-work-with-us"
import PricingSection from "@/components/pricing-section"
import ContactForm from "@/components/contact-form"
import ProjectsShowcase from "@/components/projects-showcase"

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <ProjectsShowcase />
      <Services />
      <ClientsSection />
      <WhyWorkWithUs />
      <PricingSection />
      <ContactForm />
    </main>
  )
}
