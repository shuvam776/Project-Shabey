
import { Spotlight } from "@/components/acerternity/backgrounds/spotlight"
import { TextRevealCard } from "@/components/acerternity/texts/text-reveal-card"
import { Button } from "@/components/ui/button"

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-black flex items-center justify-center">
      {/* Background */}
      <Spotlight
        className="-top-40 left-1/2 -translate-x-1/2"
        fill="white"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        {/* Brand */}
        <p className="mb-6 text-2xl tracking-widest text-black">
          SHABEY
        </p>

        {/* Headline */}
        <TextRevealCard
          text="Products  aren’t  bought.  They’re unlocked."
          className="mx-auto max-w-4xl text-4xl md:text-7xl font-bold text-black leading-tight"
        />

        <p className="mx-auto mt-6 max-w-2xl flex flex-wrap opacity-0 md:opacity-100 text-neutral-700 text-base md:text-lg font-bold">
          A premium marketplace where discovery feels earned and
          design sets the standard.
        </p>

        <div className="mt-10 md:flex md:flex-row flex flex-col items-center justify-center gap-4">
          <Button size="lg" className="px-8 hover:bg-black hover:text-white hover:scale-105">
            Explore Marketplace
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-neutral-700 text-neutral-800 hover:bg-neutral-900 hover:text-neutral-300 hover:scale-105"
          >
            Become a Seller
          </Button>
        </div>
      </div>
    </section>
  )
}
