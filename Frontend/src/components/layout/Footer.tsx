import { Link } from "react-router-dom"
import { useAuth } from "@/context/authContext"
import { Github } from "lucide-react"

export default function Footer() {
  const { user } = useAuth();
  const isSeller = user?.usertype === "seller";

  return (
    <footer className="border-t border-slate-100 bg-white text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-50 gap-6">

          <p className="text-[10px] font-black uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Shabey Marketplace. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
             <a 
               href="https://github.com/shuvam776/Project-Shabey" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-green-600 transition-colors"
             >
               <Github size={14} />
               Github
             </a>
             <Link to="/" className="text-[10px] font-black uppercase tracking-widest hover:text-green-600">Privacy</Link>
             <Link to="/" className="text-[10px] font-black uppercase tracking-widest hover:text-green-600">Terms</Link>
             <Link to="/" className="text-[10px] font-black uppercase tracking-widest hover:text-green-600">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

