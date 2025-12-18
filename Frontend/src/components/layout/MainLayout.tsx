// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
