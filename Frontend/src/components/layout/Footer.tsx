// src/components/layout/Footer.tsx
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h3 className="text-xl font-medium">
          Ready to sell on SHABEY?
        </h3>

        <Link
          to="/seller/onboarding"
          className="
            inline-block mt-6 px-8 py-3
            border border-white/20
            transition-all duration-300
            hover:scale-105
            hover:bg-white
            hover:text-black
          "
        >
          Sell on SHABEY
        </Link>

        <p className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} SHABEY
        </p>
      </div>
    </footer>
  )
}
