import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import type { ReactNode } from "react"
import { useRef } from "react"

import { cn } from "@/lib/utils"

/* =========================
   Menu (wrap   per)
========================= */

export function Menu({
  children,
}: {
  children: ReactNode
}) {
  return (
    <nav className="flex items-center gap-6">
      {children}
    </nav>
  )
}

/* =========================
   Menu Item (hover trigger)
========================= */

export function MenuItem({
  item,
  active,
  setActive,
  children,
}: {
  item: string
  active: string | null
  setActive: (value: string | null) => void
  children: ReactNode
}) {
  const isActive = active === item
  const closeTimeout = useRef<number | null>(null)

  const openMenu = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setActive(item)
  }

  const closeMenu = () => {
    closeTimeout.current = window.setTimeout(() => {
      setActive(null)
    }, 120)
  }

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      {/* Trigger */}
      <span
        className={cn(
          "cursor-pointer px-3 py-2 text-sm transition select-none font-medium",
          isActive
            ? "text-green-900"
            : "text-green-600 hover:text-green-900"
        )}
      >
        {item}
      </span>

      {/* Dropdown */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute left-1/2 top-full mt-3 -translate-x-1/2
                     rounded-xl border border-green-200 bg-white
                     p-4 shadow-xl"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

/* =========================
   Hovered Link (dropdown item)
========================= */

export function HoveredLink({
  to,
  children,
  closeMenu,
}: {
  to: string
  children: ReactNode
  closeMenu?: () => void
}) {
  return (
    <Link
      to={to}
      onClick={closeMenu}
      className="block rounded-md px-3 py-2 text-sm
                 text-green-600 font-medium transition
                 hover:bg-green-50 hover:text-green-900"
    >
      {children}
    </Link>
  )
}
