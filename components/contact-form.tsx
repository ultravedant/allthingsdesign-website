"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { type ChangeEvent, type FormEvent, useRef, useState } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    city: "",
    area: "",
    mobile: "",
    message: "",
  })
  const [acceptedPolicy, setAcceptedPolicy] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const updateField =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      city: "",
      area: "",
      mobile: "",
      message: "",
    })
    setAcceptedPolicy(false)
  }

  const handleMobileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = event.target.value.replace(/\D/g, "").slice(0, 10)
    setFormData((prev) => ({ ...prev, mobile: digitsOnly }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!acceptedPolicy) {
      setError("Please accept the privacy policy to continue.")
      return
    }

    if (formData.mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.")
      return
    }

    if (!formData.message.trim()) {
      setError("Message is required.")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit the form. Please try again.")
      }

      resetForm()
      setShowSuccessModal(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-black mb-6">Let's Discuss Your Office Space</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      Name (Required)
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={updateField("name")}
                      className="border-gray-300 focus:border-green-700 focus:ring focus:ring-green-700/20 transition-all rounded-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700">
                      Company Name (Required)
                    </Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={updateField("company")}
                      className="border-gray-300 focus:border-green-700 focus:ring focus:ring-green-700/20 transition-all rounded-none"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Work Email ID (Required)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={updateField("email")}
                      className="border-gray-300 focus:border-green-700 focus:ring focus:ring-green-700/20 transition-all rounded-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700">
                      City Name (Required)
                    </Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={updateField("city")}
                      className="border-gray-300 focus:border-green-700 focus:ring focus:ring-green-700/20 transition-all rounded-none"
                      placeholder="Your city"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area" className="text-gray-700">
                      Project Area (Sq. Ft.) (Required)
                    </Label>
                    <Input
                      id="area"
                      required
                      value={formData.area}
                      onChange={updateField("area")}
                      className="border-gray-300 focus:border-green-700 focus:ring focus:ring-green-700/20 transition-all rounded-none"
                      placeholder="Area in sq. ft."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-gray-700">
                      Mobile Number (Required)
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                      value={formData.mobile}
                      onChange={handleMobileChange}
                      className="border-gray-300 focus:border-green-700 focus:ring focus:ring-green-700/20 transition-all rounded-none"
                      placeholder="Enter 10-digit mobile number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">
                    Message (Required)
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={updateField("message")}
                    className="border-gray-300 focus:border-green-700 focus:ring focus:ring-green-700/20 transition-all rounded-none"
                    placeholder="Tell us about your project"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    required
                    checked={acceptedPolicy}
                    onCheckedChange={(checked) => setAcceptedPolicy(Boolean(checked))}
                    className="text-green-700 border-gray-300 rounded-none data-[state=checked]:bg-green-700 data-[state=checked]:border-green-700"
                  />
                  <Label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the Privacy Policy and updates from All Things Design.
                  </Label>
                </div>

                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white py-6 rounded-none text-lg font-light"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                <span className="sr-only" role="status" aria-live="polite">
                  {isSubmitting ? "Submitting form" : "Form idle"}
                </span>
              </form>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[580px] overflow-hidden">
                <Image src="/images/HOS-1.jpg" alt="Modern office interior" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-light mb-2">Ready to Transform Your Workspace?</h3>
                  <p className="text-lg opacity-90">Let's create something amazing together</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="max-w-md w-full bg-white p-8 text-center space-y-4 shadow-2xl">
            <h3 className="text-2xl font-light text-black">Thank you!</h3>
            <p className="text-gray-700">Thanks for submitting. Our team will get back to you ASAP!</p>
            <Button className="bg-green-700 hover:bg-green-800 text-white rounded-none" onClick={() => setShowSuccessModal(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
