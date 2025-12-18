import { Button } from "@/components/ui/button"

export default function BuyerProfileSection() {
  return (
    <section className="relative bg-black py-32">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <h2 className="text-4xl font-semibold text-white leading-tight">
            Buy with confidence.<br />No noise. No scams.
          </h2>

          <p className="mt-6 text-neutral-400 max-w-md">
            Discover verified sellers, transparent pricing, and products that
            are actually worth your money.
          </p>

          <Button className="mt-8">Explore Products</Button>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-neutral-700" />
            <div>
              <p className="text-white font-medium">Verified Buyer</p>
              <p className="text-sm text-neutral-400">Secure payments enabled</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm text-neutral-300">
            <p>✔ Identity-verified sellers</p>
            <p>✔ Clear product history</p>
            <p>✔ Dispute protection</p>
          </div>
        </div>

      </div>
    </section>
  )
}
