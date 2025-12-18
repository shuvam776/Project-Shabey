import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Auth() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-md border border-white/10 bg-black p-8">
        <h1 className="text-2xl font-semibold text-center">
          Welcome back
        </h1>

        <p className="mt-2 text-center text-sm text-neutral-400">
          Log in to continue to SHABEY
        </p>

        <form className="mt-8 space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="bg-black border-white/20"
          />

          <Input
            type="password"
            placeholder="Password"
            className="bg-black border-white/20"
          />

          <Button
            className="
              w-full mt-2
              transition-all duration-300
              hover:scale-105
              hover:bg-white
              hover:text-black
            "
          >
            Log In
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Don’t have an account?{" "}
          <Link
            to="/auth/signup"
            className="underline hover:text-white"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  )
}
