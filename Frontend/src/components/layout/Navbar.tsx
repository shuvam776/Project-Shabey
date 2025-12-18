"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, MenuItem, HoveredLink} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl h-16 px-6 flex items-center justify-between">

        {/* LEFT: BRAND */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide text-white"
        >
        <p>  SHABEY </p>
        </Link>

        {/* CENTER: BUY / SELL CTAs */}
        <Menu setActive={setActive}>
          {/* BUY */}
          <MenuItem item="Buy" active={active} setActive={setActive}>
            <div className="flex flex-col space-y-3 text-sm">
              <HoveredLink to="/explore">Explore All</HoveredLink>
              <HoveredLink to="/explore?cat=sneakers">Cart</HoveredLink>
            </div>
          </MenuItem>

          {/* SELL */}
          <MenuItem item="Sell" active={active} setActive={setActive}>
            <div className="flex flex-col space-y-3 text-sm">
              <HoveredLink to="/sell">Become a Seller</HoveredLink>
              <HoveredLink to="/dashboard">Seller Dashboard</HoveredLink>
            </div>
          </MenuItem>
        </Menu>

        {/* RIGHT: SECONDARY CTA */}
        <Link
          to="/get-started"
          className="rounded-md border border-white/20 px-4 py-1.5 text-sm text-white hover:bg-white hover:text-black transition"
        >
          Get Started
        </Link>

      </div>
    </header>
  )
}



