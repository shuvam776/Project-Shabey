export function HeroSection() {
  return (
    <section className="relative h-[40rem] w-full bg-white flex items-center justify-center overflow-hidden border-b border-green-200">
      <div className="relative z-10 max-w-2xl text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-b from-green-600 to-green-900 bg-clip-text text-transparent">
          Join the waitlist
        </h1>

        <p className="mt-4 text-green-700 font-medium">
          High-performance commerce. Designed to feel earned.
        </p>
      </div>
    </section>
  )
}
