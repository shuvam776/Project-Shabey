// src/pages/Explore.tsx
import { useState } from "react"
import { Link } from "react-router-dom"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"

const MOBILE_ITEMS_PER_PAGE = 10

export default function Explore() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(products.length / MOBILE_ITEMS_PER_PAGE)

  const mobileProducts = products.slice(
    (page - 1) * MOBILE_ITEMS_PER_PAGE,
    page * MOBILE_ITEMS_PER_PAGE
  )

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Explore SHABEY Products
        </h1>
        <p className="mt-4 text-neutral-400">
          Designed to be unlocked, not purchased.
        </p>
      </div>

      {/* DESKTOP GRID — ALL 30 */}
      <div className="hidden md:grid gap-6 grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* MOBILE GRID — PAGINATED */}
      <div className="grid gap-6 md:hidden">
        {mobileProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* MOBILE PAGINATION */}
      <div className="mt-10 flex justify-center gap-3 md:hidden">
        {[1, 2, 3].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`h-2 w-2 rounded-full transition ${
              page === p ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group border border-white/10 bg-black p-4 transition hover:border-white/30">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium">
          {product.name}
        </h3>

        <p className="text-sm text-neutral-400">
          ₹{product.price}
        </p>

        <Link to={`/buy/${product.id}`}>
          <Button
            className="
              mt-2 w-full
              transition-all duration-300
              hover:scale-105
              hover:bg-white
              hover:text-black
            "
          >
            View Product
          </Button>
        </Link>
      </div>
    </div>
  )
}
