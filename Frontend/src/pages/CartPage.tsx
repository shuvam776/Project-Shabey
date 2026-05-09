import React from "react";
import { useCart } from "@/context/cartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-3xl font-medium text-[#1a1a1a] mb-4">Your cart is empty</h1>
        <p className="text-[#1a1a1a]/60 text-sm mb-8">Items you add to your cart will appear here.</p>
        <button
          onClick={() => navigate("/explore")}
          className="px-8 h-12 bg-[#1a1a1a] text-white text-sm font-medium transition-opacity hover:opacity-90"
        >
          Continue shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-12">Your cart</h1>

        <div className="space-y-8 border-t border-slate-100 pt-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-6 pb-8 border-b border-slate-50">
              <div className="w-28 h-28 bg-slate-50 border border-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                {item.image && (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                )}
              </div>

              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-slate-800">{item.title}</h3>
                    <p className="text-sm font-bold text-green-600 mt-1">₹{item.price}</p>
                  </div>
                  <p className="text-lg font-black text-slate-900 tracking-tighter">₹{Math.ceil(item.price * item.quantity)}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-slate-200 rounded-lg h-9">
                    <button
                      onClick={() => updateQuantity(String(item.id), item.quantity - 1)}
                      className="w-9 h-full flex items-center justify-center hover:bg-slate-50 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-12 text-center text-sm font-bold text-slate-700">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(String(item.id), item.quantity + 1)}
                      className="w-9 h-full flex items-center justify-center hover:bg-slate-50 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(String(item.id))}
                    className="text-[10px] font-black text-red-400 hover:text-red-600 uppercase tracking-widest transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-end">
          <div className="w-full sm:w-96 bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Subtotal</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">₹{cartTotal}</span>
            </div>
            <p className="text-[10px] text-slate-400 text-right uppercase tracking-widest leading-relaxed">Taxes and shipping calculated <br /> at checkout</p>
            <button
              onClick={() => navigate("/payment")}
              className="w-full h-14 bg-green-600 text-white text-sm font-bold rounded-xl transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-100 active:scale-95"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
