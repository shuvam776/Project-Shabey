// src/pages/BuyProduct.tsx
import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function BuyProduct() {
  const { productId } = useParams()

  // Later: replace this with AI / API data
  const product = {
    name: productId?.toUpperCase(),
    tagline: "Designed to unlock performance, not promise it.",
    description:
      "This product is engineered for creators who value clarity, speed, and control. Every feature exists for a reason.",
    price: "₹1,999",
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        
        {/* Left: Info */}
        <div className="space-y-6">
          <p className="text-xs tracking-widest text-neutral-400">
            SHABEY PRODUCT
          </p>

          <h1 className="text-4xl font-semibold">
            {product.name}
          </h1>

          <p className="text-neutral-300">
            {product.description}
          </p>

          <p className="text-2xl font-medium">
            {product.price}
          </p>
        </div>

        {/* Right: Action */}
        <div className="flex flex-col justify-center gap-4 border border-white/10 p-8">
          <p className="text-sm text-neutral-400">
            One-time access. Lifetime value.
          </p>

          <Button size="lg" className="w-full">
            Unlock Product
          </Button>
        </div>
      </div>
    </section>
  )
}
