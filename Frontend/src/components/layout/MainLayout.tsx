import { Outlet } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
