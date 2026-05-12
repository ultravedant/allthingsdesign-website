import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SiteShell from "@/components/site-shell"

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
})

export const metadata: Metadata = {
  title: "All Things Design - Creating Inspiring Workspaces",
  description:
    "Transform your workspace in just 75 days with high-performance, brand-driven designs that enhance productivity, reflect your vision, and optimize costs.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${gilroy.variable}`}>
      <body className={gilroy.className}>
        <SiteShell>
          <Navbar />
          {children}
          <Footer />
        </SiteShell>
      </body>
    </html>
  )
}
