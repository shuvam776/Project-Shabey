import { Link } from "react-router-dom"
import { useAuth } from "@/context/authContext";
import { ArrowRight } from "lucide-react"

export default function HomeSellerPitch() {
  const { user } = useAuth();
  // Only show this pitch section to buyers (non-sellers)
  if (user?.usertype === "seller") return null;

  return (
    <section className="bg-white py-32 border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black rounded-[2.5rem] p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
          
          <div className="max-w-xl relative z-10">
            <h2 className="text-[10px] font-black text-green-400 uppercase tracking-[0.3em] mb-4">Got something cool to sell?</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
              Start selling <span className="text-green-400">with us</span>
            </h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              List products, control your pricing, and reach buyers through a curated, discovery-driven marketplace — not endless scrolling.
            </p>
          </div>

          <Link
            to="/seller/onboarding"
            className="relative z-10 flex-shrink-0 flex items-center gap-3 h-16 px-10 bg-green-600 text-white text-sm font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-green-500 active:scale-95 shadow-2xl shadow-green-900/50 group"
          >
            Set up your shop
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
