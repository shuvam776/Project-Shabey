import { Link } from "react-router-dom"

const products = [
  {
    id: "1",
    name: "Minimal Desk Lamp",
    price: "₹2,499",
    image: "/images/products/lamp.jpg",
  },
  {
    id: "2",
    name: "Leather Work Bag",
    price: "₹5,999",
    image: "/images/products/bag.jpg",
  },
  {
    id: "3",
    name: "Wireless Headphones",
    price: "₹8,499",
    image: "/images/products/headphones.jpg",
  },
]

export default function Explore() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold text-white">
          Explore Products
        </h1>
        <p className="mt-2 text-neutral-400">
          Discover quality products from verified sellers.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group rounded-xl border border-white/10 bg-neutral-900 p-5
                       hover:border-white/20 transition"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover
                           transition-transform duration-300
                           group-hover:scale-105"
              />
            </div>

            {/* Text */}
            <h3 className="mt-4 text-lg font-medium text-white">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-neutral-400">
              {product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
