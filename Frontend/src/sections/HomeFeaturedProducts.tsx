// src/sections/HomeFeaturedProducts.tsx
import { useProducts } from "@/lib/useProducts"
import ProductCard from "@/components/ProductCard"

export default function HomeFeaturedProducts() {
  const { products } = useProducts()
  const featured = products.slice(0, 6)

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-b border-green-200">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-green-900">
          Our top picks for you
        </h2>
        <p className="mt-3 text-green-700">
          Stuff we really think you'll like.
        </p>
      </div>

      {/* Grid */}
      {featured.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-green-100 rounded-2xl">
          <p className="text-green-600">No featured products yet.</p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
