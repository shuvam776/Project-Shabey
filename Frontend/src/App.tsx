import { Routes, Route } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"

import Home from "./pages/Home"
import Explore from "./pages/Explore"
import BuyProduct from "./pages/BuyProduct"
import "./index.css"


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/product/:id" element={<BuyProduct />} />
      </Route>
    </Routes>
  )
}

export default App
