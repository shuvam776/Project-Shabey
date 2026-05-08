import { Link } from "react-router-dom"
import { useCart } from "@/context/cartContext"
import type { Product } from "@/lib/products"

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <Link to={`/buy/${product.id}`} className="group block space-y-4 shopify-card p-4">
      <div className="aspect-square overflow-hidden bg-slate-50 rounded-md">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-bold text-slate-800 group-hover:text-green-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-lg font-black text-green-600 tracking-tighter">
          ₹{product.price}
        </p>
        <button 
          className="w-full py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-black transition-all active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.thumbnail,
              quantity: 1
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  )
}