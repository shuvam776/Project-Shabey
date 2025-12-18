// src/sections/HomeFeaturedProducts.tsx
import { products } from "@/data/products"
import ThreeDCard from "@/components/acerternity/cards/ThreeDcard"

export default function HomeFeaturedProducts() {
  const featured = products.slice(0, 6)

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold">
          Featured Unlocks
        </h2>
        <p className="mt-3 text-neutral-400">
          Handpicked products worth your attention.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ThreeDCard
            key={product.id}
            title={product.name}
            description={`₹${product.price}`}
            image={product.image}
          />
        ))}
      </div>
    </section>
  )
}
