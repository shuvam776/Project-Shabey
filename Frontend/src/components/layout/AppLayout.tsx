import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-green-900 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
