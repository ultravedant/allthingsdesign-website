"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"

type SiteShellProps = {
  children: ReactNode
}

export default function SiteShell({ children }: SiteShellProps) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const markReady = () => setIsReady(true)

    if (document.readyState === "complete") {
      // Defer to the next frame so hydration finishes before revealing UI
      requestAnimationFrame(markReady)
      return
    }

    window.addEventListener("load", markReady, { once: true })
    return () => window.removeEventListener("load", markReady)
  }, [])

  useEffect(() => {
    if (!isReady) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = ""
      }
    }

    document.body.style.overflow = ""
    return
  }, [isReady])

  return (
    <>
      <div
        className={`transition-opacity duration-500 ${
          isReady ? "opacity-100" : "opacity-0 pointer-events-none select-none"
        }`}
      >
        {children}
      </div>

      {!isReady && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white text-gray-900">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />
          <p className="text-lg font-semibold tracking-wide">
            Hang tight, the website is loading…
          </p>
        </div>
      )}
    </>
  )
}

