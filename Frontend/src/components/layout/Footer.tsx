
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <p className="text-xs tracking-widest text-neutral-400">
            © {new Date().getFullYear()} SHABEY. ALL RIGHTS RESERVED.
          </p>

          {/* Links */}
          <div className="flex gap-6 text-xs text-neutral-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
