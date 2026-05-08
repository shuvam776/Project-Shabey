import { useNavigate } from "react-router-dom"
import { ArrowRight, TrendingUp } from "lucide-react"

const trendingItems = [
  {
    label: "Minimal Desk Lamp",
    tag: "Lighting",
    price: "₹1,299",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134121/shabey/home/trend_lamp.jpg",
    span: "row-span-2",
  },
  {
    label: "Ceramic Mug Set",
    tag: "Kitchen",
    price: "₹849",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134122/shabey/home/trend_mug.jpg",
    span: "",
  },
  {
    label: "Wireless Earbuds",
    tag: "Electronics",
    price: "₹3,499",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134122/shabey/home/trend_earbuds.jpg",
    span: "",
  },
  {
    label: "Canvas Tote Bag",
    tag: "Fashion",
    price: "₹599",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134157/shabey/home/trend_tote.jpg",
    span: "row-span-2",
  },
  {
    label: "Leather Wallet",
    tag: "Accessories",
    price: "₹1,099",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134124/shabey/home/trend_wallet.jpg",
    span: "",
  },
  {
    label: "Scented Candle",
    tag: "Home Decor",
    price: "₹449",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134180/shabey/home/trend_candle.jpg",
    span: "",
  },
  {
    label: "Running Sneakers",
    tag: "Footwear",
    price: "₹2,799",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134125/shabey/home/trend_sneakers.jpg",
    span: "",
  },
  {
    label: "Sunglasses",
    tag: "Fashion",
    price: "₹999",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134126/shabey/home/trend_sunglasses.jpg",
    span: "",
  },
]

export default function HomeTrending() {
  const navigate = useNavigate()

  return (
    <section className="bg-slate-50 py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={14} className="text-green-600" />
              <span className="text-xs font-black text-green-600 uppercase tracking-[0.3em]">Trending Now</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              What everyone's <br />
              <span className="text-slate-300">buying this week</span>
            </h2>
          </div>
          <button
            onClick={() => navigate("/explore")}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-green-600 transition-colors"
          >
            Browse all <ArrowRight size={14} />
          </button>
        </div>

        {/* Masonry-style product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px]">
          {trendingItems.map((item) => (
            <div
              key={item.label}
              className={`group relative rounded-[1.5rem] overflow-hidden cursor-pointer shadow-lg shadow-slate-200 bg-slate-100 ${item.span}`}
              onClick={() => navigate("/explore")}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Tag pill */}
              <span className="absolute top-3 left-3 bg-white/90 text-slate-700 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                {item.tag}
              </span>
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-black text-sm tracking-tight leading-tight">{item.label}</p>
                <p className="text-green-400 font-black text-sm mt-0.5">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
