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
    <nav className={cn("relative z-50 flex w-full justify-center gap-6", className)}>
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
      className="relative group"
    >
      <span className="cursor-pointer px-4 py-2 text-sm font-bold text-green-700 hover:text-green-900 transition-colors">
        {item}
      </span>

      {active && (
        <div className="absolute left-1/2 top-full mt-2 w-48 -translate-x-1/2 rounded-md border border-green-200 bg-white p-3 shadow-lg flex flex-col gap-2">
          {children}
        </div>
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
      className="block rounded px-3 py-2 text-sm font-medium text-green-700 hover:bg-green-50 hover:text-green-900 transition-colors"
    >
      {children}
    </Link>
  )
}
