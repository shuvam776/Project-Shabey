import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useProducts } from "@/lib/useProducts"
import { useCart } from "@/context/cartContext"
import { Minus, Plus } from "lucide-react"

export default function BuyProduct() {
  const { productId } = useParams<{ productId: string }>()
  const { products } = useProducts()
  const { addToCart } = useCart()
  const product = products.find((p) => p.id === Number(productId))
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-slate-400">Product not found</p>
    </div>
  )

  const handleAddToCart = (redirect = false) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
    if (redirect) navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-6">
      <section className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Product Image */}
          <div className="aspect-square bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col pt-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-tight">
              {product.title}
            </h1>
            <p className="text-3xl font-black text-green-600 tracking-tighter mb-10">
              ₹{product.price}
            </p>

            <div className="space-y-6 mb-12">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Quantity</label>
                <div className="flex items-center border border-slate-200 rounded-xl w-36 h-12 bg-white">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-12 h-full flex items-center justify-center hover:bg-slate-50 text-slate-400 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="flex-1 text-center text-sm font-bold text-slate-700">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-12 h-full flex items-center justify-center hover:bg-slate-50 text-slate-400 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                className="w-full h-14 border-2 border-green-600 text-green-600 text-sm font-bold rounded-xl hover:bg-green-50 transition-all active:scale-95"
                onClick={() => handleAddToCart()}
              >
                Add to cart
              </button>

              <button
                className="w-full h-14 bg-green-600 text-white text-sm font-bold rounded-xl transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-100 active:scale-95"
                onClick={() => handleAddToCart(true)}
              >
                Buy it now
              </button>
            </div>

            <div className="prose prose-slate max-w-none text-slate-500 leading-relaxed font-medium">
              <p>{product.description || "Experience the pinnacle of quality and design with our exclusive " + product.title + "."}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
