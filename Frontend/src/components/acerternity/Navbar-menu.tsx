"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Link } from "react-router-dom"

export function Menu({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <nav
      className={cn(
        "relative z-50 flex w-full justify-center",
        className
      )}
    >
      {children}
    </nav>
  )
}

export function MenuItem({
  item,
  children,
}: {
  item: string
  children: React.ReactNode
}) {
  const [active, setActive] = useState(false)

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="relative"
    >
      <span className="cursor-pointer px-4 py-2 text-sm text-neutral-300 hover:text-white">
        {item}
      </span>

      {active && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 top-full mt-4 w-48 -translate-x-1/2 rounded-xl border border-white/10 bg-neutral-900 p-4 shadow-xl"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

export function HoveredLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <Link
      to={to}
      className="block rounded-md px-3 py-2 text-sm text-neutral-400 hover:bg-white/10 hover:text-white"
    >
      {children}
    </Link>
  )
}
