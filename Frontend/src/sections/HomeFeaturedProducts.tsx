import React from "react"
import { ThreeDcard } from "@/components/acerternity/cards/ThreeDcard"

const products = [
  {
    title: "Hoodie",
    description: "Comfort-driven street essential",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1z_aL9NSYE_c402zNQGbp5khRt3m-hV8gg&s", // you will add later
  },
  {
    title: "Shoes",
    description: "Built for everyday performance",
    image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_766,c_limit/74ef3933-b9e4-4fce-9a6f-7a78ebde2b20/nike-just-do-it.png", // you will add later
  },
  {
    title: "Watch",
    description: "Precision that lasts",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1753431990/rolexcom/collection/family-pages/professional-watches/cosmograph-daytona/landing/2025/professional-watches-cosmograph-daytona-cover-m126508-0008_2505stj_0001", // you will add later
  },
]

export default function HomeFeaturedProducts() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Featured Products
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            A curated selection of essentials designed to stand out.
          </p>
        </div>

        {/* Products */}
        <div className="grid gap-10 md:grid-cols-3 place-items-center">
          {products.map((product) => (
            <ThreeDcard
              key={product.title}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
