import React from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import ProtectedRoute from "./routes/ProtectectedRoute"

// Pages
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import BuyProduct from "./pages/BuyProduct"
import PaymentPage from "./pages/Payment"
import Auth from "./pages/Auth"
import SignUp from "./pages/Signup"
import SellerOnboarding from "./pages/SellerProfile"
import BuyerProfile from "./pages/BuyerProfile"
import CartPage from "./pages/CartPage"
import { CartProvider } from "./context/cartContext"

export default function App() {

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="buy/:productId" element={<BuyProduct />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="payment" element={<PaymentPage />} />

          {/* Auth */}
          <Route path="auth" element={<Auth />} />
          <Route path="auth/signup" element={<SignUp />} />

          {/* Profile (PROTECTED) */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <BuyerProfile />
              </ProtectedRoute>
            }
          />


          {/* Seller */}
          <Route path="seller/onboarding" element={<SellerOnboarding />} />

          <Route path="*" element={<div className="flex h-screen items-center justify-center text-xl font-bold">404 - Not Found</div>} />
        </Route>
      </Routes>
    </CartProvider>

  )
}