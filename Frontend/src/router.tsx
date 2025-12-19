import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/components/layout/MainLayout"

// Pages
import Home from "@/pages/Home"
import Explore from "@/pages/Explore"
import BuyProduct from "@/pages/BuyProduct"
import Auth from "@/pages/Auth"
import SignUp from "@/pages/Signup"
import SellerOnboarding from "@/pages/SellerOnboarding"
import Profile from "@/components/Profile"

// Route guard
import ProtectedRoute from "@/routes/ProtectectedRoute"

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/explore", element: <Explore /> },
      { path: "/buy/:productId", element: <BuyProduct /> },

      // Auth
      { path: "/auth", element: <Auth /> },
      { path: "/auth/signup", element: <SignUp /> },

      // Profile (PROTECTED)
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },

      // Seller (leave as-is for now)
      { path: "/seller/onboarding", element: <SellerOnboarding /> },
    ],
  },
])
