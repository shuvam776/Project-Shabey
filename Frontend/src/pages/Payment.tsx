import { useRazorpay } from "@/hooks/useRazorpay";
import { useCart } from "@/context/cartContext";
import { Navigate } from "react-router-dom";

export default function PaymentPage() {
    const { handlePayment } = useRazorpay();
    const { cartItems, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return <Navigate to="/cart" replace />;
    }

    return (
        <div className="min-h-screen pt-32 pb-20 bg-white px-6">
            <div className="max-w-xl mx-auto">
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-12 text-center">Checkout</h1>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                    <div className="p-10 space-y-10">
                        {/* Summary */}
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Order summary</h3>
                            <div className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex justify-between items-center text-sm">
                                        <span className="text-slate-600 font-medium">
                                            {item.name} <span className="text-slate-300 ml-2 font-bold">× {item.quantity}</span>
                                        </span>
                                        <span className="text-slate-900 font-bold">₹{Math.ceil(item.price * item.quantity)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                                <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Total Payable</span>
                                <span className="text-3xl font-black text-green-600 tracking-tighter">₹{cartTotal}</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <button
                                className="w-full h-16 bg-green-600 text-white text-base font-black rounded-xl transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-100 active:scale-95"
                                onClick={() => handlePayment(cartTotal)}
                            >
                                Pay Now
                            </button>

                            <p className="text-[10px] text-slate-400 text-center font-bold uppercase tracking-[0.1em]">
                                🛡️ Secure 256-bit SSL Encrypted Payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}