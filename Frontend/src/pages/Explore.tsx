import { useState } from "react"
import { Search, Loader2 } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { useProducts } from "@/lib/useProducts";
const CATEGORIES = ["All", "smartphones", "laptops", "fragrances", "skincare", "groceries", "furniture"]

export default function Explore() {
  const { products, loading, error } = useProducts()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  
  // Filter by search query
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Filter by category on top of search
  const displayProducts = activeCategory === "All"
    ? filteredProducts
    : filteredProducts.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-6">
      <section className="mx-auto max-w-7xl">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Collections</h1>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-transparent rounded-xl text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mt-8 flex items-center gap-6 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-bold pb-2 transition-all border-b-2 whitespace-nowrap capitalize ${
                  activeCategory === cat
                    ? "border-green-600 text-green-600"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center py-32 gap-3 text-slate-400">
            <Loader2 size={20} className="animate-spin" />
            <span className="text-sm font-bold">Loading products...</span>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-32 bg-red-50 rounded-3xl border-2 border-dashed border-red-200">
            <p className="text-red-400 font-medium">Failed to load products. Try refreshing.</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && displayProducts.length === 0 && (
          <div className="text-center py-32 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">No results found for your search.</p>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && displayProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {displayProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
  }