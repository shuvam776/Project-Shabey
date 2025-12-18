// src/pages/BuyProduct.tsx
import { useParams } from "react-router-dom"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export default function BuyProduct() {
  const { productId } = useParams()

  const product = products.find(
    (p) => p.id === productId
  )

  if (!product) {
    return (
      <div className="py-32 text-center text-neutral-400">
        Product not found.
      </div>
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 md:grid-cols-2">
        
        {/* Image */}
        <div className="aspect-square overflow-hidden border border-white/10">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
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
            ₹{product.price}
          </p>

          <div className="flex gap-4">
            <Button className="flex gap-2">
              <ShoppingCart size={18} />
              Add to Cart
            </Button>

            <Button variant="outline">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
