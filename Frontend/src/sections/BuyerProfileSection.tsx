import { Button } from "@/components/ui/button"

export default function BuyerProfileSection() {
  return (
    <section className="relative bg-white py-32 border-t border-green-200">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold text-green-900 leading-tight">
            Buy with confidence.<br />No noise. No scams.
          </h2>

          <p className="mt-6 text-green-700 max-w-md font-medium">
            Discover verified sellers, transparent pricing, and products that
            are actually worth your money.
          </p>

          <Button className="mt-8 bg-green-600 text-white hover:bg-green-700">Explore Products</Button>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border border-green-200 bg-white shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-green-200" />
            <div>
              <p className="text-green-900 font-bold">Verified Buyer</p>
              <p className="text-sm font-medium text-green-600">Secure payments enabled</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm font-medium text-green-700">
            <p>✔ Identity-verified sellers</p>
            <p>✔ Clear product history</p>
            <p>✔ Dispute protection</p>
          </div>
        </div>

      </div>
    </section>
  )
}
