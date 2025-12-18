import { Button } from "@/components/ui/button"

export function SellerProfileSection() {
  return (
    <section className="relative bg-neutral-950 py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Profile Card */}
        <div className="rounded-2xl border border-white/10 bg-black p-6 order-2 md:order-1">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-neutral-700" />
            <div>
              <p className="text-white font-medium">Top Seller</p>
              <p className="text-sm text-neutral-400">Revenue ↑ 38%</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm text-neutral-300">
            <p>✔ Seller analytics dashboard</p>
            <p>✔ Reputation-based discovery</p>
            <p>✔ Direct buyer reach</p>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-semibold text-white leading-tight">
            Sell with authority.<br />Build a real brand.
          </h2>

          <p className="mt-6 text-neutral-400 max-w-md">
            Get discovered for quality, not ads. Own your audience and grow
            trust with every transaction.
          </p>

          <Button variant="outline" className="mt-8">
            Start Selling
          </Button>
        </div>

      </div>
    </section>
  )
}
