import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function HomeHero() {
  const navigate = useNavigate();
  
  return (
    <section className="bg-white pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              Premium collections <br /> 
              <span className="text-green-600">for the modern lifestyle</span>
            </h1>
            
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12">
              Discover high-quality essentials designed to elevate your everyday experience. Verified sellers, quality products.
            </p>
            
            <button 
              className="group flex items-center gap-3 h-16 px-10 bg-slate-900 text-white text-sm font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-black active:scale-95 shadow-2xl shadow-slate-200"
              onClick={() => navigate("/explore")}
            >
              Shop Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Image Mosaic — 3-column staggered */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-3 md:gap-4">

              {/* Column 1 — starts lower */}
              <div className="space-y-3 md:space-y-4 pt-10">
                <div className="aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-xl shadow-slate-200 bg-slate-100">
                  <img
                    src="https://res.cloudinary.com/dpju1wia5/image/upload/v1778134112/shabey/home/hero_sofa.jpg"
                    alt="Modern sofa"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl shadow-slate-200 bg-slate-100">
                  <img
                    src="https://res.cloudinary.com/dpju1wia5/image/upload/v1778134113/shabey/home/hero_kitchen.jpg"
                    alt="Kitchen essentials"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Column 2 — tallest, centered */}
              <div className="space-y-3 md:space-y-4">
                <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl shadow-slate-200 bg-slate-100">
                  <img
                    src="https://res.cloudinary.com/dpju1wia5/image/upload/v1778134113/shabey/home/hero_bedroom.jpg"
                    alt="Bedroom decor"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-xl shadow-slate-200 bg-slate-100">
                  <img
                    src="https://res.cloudinary.com/dpju1wia5/image/upload/v1778134114/shabey/home/hero_living.jpg"
                    alt="Living room sofa"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Column 3 — starts lower, mirrors col 1 */}
              <div className="space-y-3 md:space-y-4 pt-16">
                <div className="aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-xl shadow-slate-200 bg-slate-100">
                  <img
                    src="https://res.cloudinary.com/dpju1wia5/image/upload/v1778134115/shabey/home/hero_fashion.jpg"
                    alt="Fashion accessories"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl shadow-slate-200 bg-slate-100">
                  <img
                    src="https://res.cloudinary.com/dpju1wia5/image/upload/v1778134116/shabey/home/hero_watch.jpg"
                    alt="Premium watch"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>
            
            {/* Subtle Decorative Element */}
            <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60" />
            <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-60" />
          </div>

        </div>
      </div>
    </section>
  )
}
