import { Button } from "@/components/ui/button"

export function SellerProfileSection() {
  return (
    <section className="relative bg-green-50 py-32 border-t border-green-200">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Profile Card */}
        <div className="rounded-2xl border border-green-200 bg-white shadow-sm p-6 order-2 md:order-1">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-green-200" />
            <div>
              <p className="text-green-900 font-bold">Top Seller</p>
              <p className="text-sm font-medium text-green-600">Revenue ↑ 38%</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm font-medium text-green-700">
            <p>✔ Seller analytics dashboard</p>
            <p>✔ Reputation-based discovery</p>
            <p>✔ Direct buyer reach</p>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold text-green-900 leading-tight">
            Sell with authority.<br />Build a real brand.
          </h2>

          <p className="mt-6 text-green-700 max-w-md font-medium">
            Get discovered for quality, not ads. Own your audience and grow
            trust with every transaction.
          </p>

          <Button variant="outline" className="mt-8 border-green-300 text-green-800 hover:bg-green-100">
            Start Selling
          </Button>
        </div>

      </div>
    </section>
  )
}
