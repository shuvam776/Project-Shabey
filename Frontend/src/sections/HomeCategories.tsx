import React from "react"
import { HoverBorderGradient } from "@/components/acerternity/effects/hover-border-gradient"

const categories = [
  { title: "Sneakers", desc: "Limited drops & rare finds" },
  { title: "Streetwear", desc: "Curated premium apparel" },
  { title: "Tech Gear", desc: "Functional. Minimal. Smart." },
]

export default function HomeCategories() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          Explore by Category
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <HoverBorderGradient key={cat.title}>
              <div className="p-8 h-full bg-black">
                <h3 className="text-xl font-semibold text-white">
                  {cat.title}
                </h3>
                <p className="mt-2 text-neutral-400">
                  {cat.desc}
                </p>
              </div>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </section>
  )
}
