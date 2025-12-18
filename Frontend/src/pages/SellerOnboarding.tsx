import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SellerOnboarding() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 space-y-20">

      {/* ================= PROFILE SETUP ================= */}
      <div>
        <h1 className="text-3xl font-semibold">
          Seller Profile
        </h1>
        <p className="mt-2 text-neutral-400">
          This is how buyers will see you on SHABEY.
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {/* Profile Picture */}
          <div className="space-y-4">
            <p className="text-sm text-neutral-300">
              Profile Picture
            </p>

            <div className="flex items-center gap-6">
              <div className="h-24 w-24 rounded-full border border-white/20 bg-white/5" />

              <Button variant="outline">
                Upload Photo
              </Button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-4">
            <Input
              placeholder="Seller name"
              className="bg-black border-white/20"
            />

            <Textarea
              placeholder="Short description about you or your brand"
              className="bg-black border-white/20"
            />
          </div>
        </div>
      </div>

      {/* ================= SELLER STATS ================= */}
      <div>
        <h2 className="text-2xl font-semibold">
          Seller Overview
        </h2>
        <p className="mt-2 text-neutral-400">
          Your performance snapshot.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Total Products", value: "6" },
            { label: "Total Sales", value: "128" },
            { label: "Revenue", value: "₹48,900" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 bg-black p-6"
            >
              <p className="text-sm text-neutral-400">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-medium">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Fake chart placeholder */}
        <div className="mt-8 h-48 border border-white/10 bg-white/5 flex items-center justify-center text-neutral-500">
          Sales Chart (placeholder)
        </div>
      </div>

      {/* ================= UPLOAD PRODUCT ================= */}
      <div>
        <h2 className="text-2xl font-semibold">
          Upload New Product
        </h2>
        <p className="mt-2 text-neutral-400">
          Add a new product to your store.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Input
            placeholder="Product name"
            className="bg-black border-white/20"
          />

          <Input
            placeholder="Price (₹)"
            className="bg-black border-white/20"
          />

          <Textarea
            placeholder="Product description"
            className="bg-black border-white/20 md:col-span-2"
          />

          <div className="md:col-span-2 flex items-center gap-4">
            <Button variant="outline">
              Upload Product Images
            </Button>

            <Button
              className="
                transition-all
                hover:scale-105
                hover:bg-white
                hover:text-black
              "
            >
              Publish Product
            </Button>
          </div>
        </div>
      </div>

      {/* ================= SELLER PRODUCTS ================= */}
      <div>
        <h2 className="text-2xl font-semibold">
          Your Products
        </h2>
        <p className="mt-2 text-neutral-400">
          Products currently live on SHABEY.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-white/10 bg-black p-4"
            >
              <div className="aspect-square bg-white/5 mb-4" />

              <h3 className="font-medium">
                Sample Product {i}
              </h3>

              <p className="text-sm text-neutral-400">
                ₹1,999
              </p>

              <Button
                variant="outline"
                className="mt-3 w-full"
              >
                Edit Product
              </Button>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
