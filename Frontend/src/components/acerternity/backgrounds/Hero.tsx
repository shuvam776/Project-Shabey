import React from "react"
import { BackgroundBeams } from "@/components/acerternity/backgrounds/background-beams"

export function HeroSection() {
  return (
    <section className="relative h-[40rem] w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-2xl text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent">
          Join the waitlist
        </h1>

        <p className="mt-4 text-neutral-400">
          High-performance commerce. Designed to feel earned.
        </p>
      </div>

      <BackgroundBeams />
    </section>
  )
}
