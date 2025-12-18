// src/components/layout/Navbar.tsx
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="tracking-widest font-semibold">
          SHABEY
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-neutral-300">
          <NavLink to="/explore" className="hover:text-white">
            Explore
          </NavLink>
          <NavLink to="/seller/onboarding" className="hover:text-white">
            Sell
          </NavLink>
        </nav>

        <Link
          to="/auth"
          className="
            border border-white/20 px-4 py-1.5
            transition-all
            hover:scale-105
            hover:bg-white
            hover:text-black
          "
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}
