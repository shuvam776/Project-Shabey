import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const categories = [
  { 
    title: "Living Room", 
    desc: "Curated comfort for your main space.",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134154/shabey/home/cat_living_room.jpg"
  },
  { 
    title: "Dining Area", 
    desc: "Elevated settings for shared meals.",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134155/shabey/home/cat_dining.jpg"
  },
  { 
    title: "Workspace", 
    desc: "Functional design for deep focus.",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134156/shabey/home/cat_workspace.jpg"
  },
  { 
    title: "Fashion & Style", 
    desc: "Curated looks for every occasion.",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134118/shabey/home/cat_fashion.jpg"
  },
  { 
    title: "Electronics", 
    desc: "Next-gen gadgets for modern life.",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134119/shabey/home/cat_electronics.jpg"
  },
  { 
    title: "Outdoors", 
    desc: "Gear built for adventure seekers.",
    image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1778134120/shabey/home/cat_outdoors.jpg"
  },
]

export default function HomeCategories() {
  const navigate = useNavigate()
  
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs font-black text-green-600 uppercase tracking-[0.3em] mb-4">Categories</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              Explore our <br /> <span className="text-slate-300">curated spaces</span>
            </h3>
          </div>
          <button 
            onClick={() => navigate("/explore")}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-green-600 transition-colors"
          >
            View all categories <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <div 
              key={cat.title} 
              className="group cursor-pointer"
              onClick={() => navigate("/explore")}
            >
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-5 shadow-xl shadow-slate-100 bg-slate-50">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <h4 className="text-base font-black text-slate-900 tracking-tight group-hover:text-green-600 transition-colors">
                {cat.title}
              </h4>
              <p className="mt-1 text-slate-400 font-medium text-xs">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
