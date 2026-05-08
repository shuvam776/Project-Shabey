import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/context/authContext"
import { useCart } from "@/context/cartContext"
import { ShoppingBag, User } from "lucide-react"

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-black text-slate-900 tracking-tighter cursor-pointer ">
          <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>SHABEY</button><span className="text-green-600">.</span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/explore" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-green-600 transition-colors">Shop</Link>
          <Link to="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-green-600 transition-colors">About</Link>
          <Link to="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-green-600 transition-colors">Contact</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">

          <Link to="/cart" className="relative group">
            <ShoppingBag size={20} className="text-slate-900 group-hover:text-green-600 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/profile">
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden hover:border-green-500 transition-colors">
                  {user.avatar ? <img src={user.avatar} className="w-full h-full object-cover" /> : <User size={16} className="m-1.5 text-slate-400" />}
                </div>
              </Link>
              <button onClick={logout} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors">Sign Out</button>
            </div>
          ) : (
            <Link to="/auth" className="text-[10px] font-black uppercase tracking-widest bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-black transition-all">
              Join
            </Link>
          )}
        </div>

      </div>
    </nav>
  )
}
