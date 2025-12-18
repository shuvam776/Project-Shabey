import { Routes, Route } from "react-router-dom"

import AppLayout from "./components/layout/AppLayout"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import BuyProduct from "./pages/BuyProduct"

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/product/:id" element={<BuyProduct />} />
      </Routes>
    </AppLayout>
  )
}

export default App
