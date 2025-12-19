import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"

export default function Auth() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const idToken = await result.user.getIdToken()

      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/google`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: idToken }),
        }
      )

      if (!res.ok) throw new Error("Login failed")

      const data = await res.json()
      localStorage.setItem("token", data.token)

      window.location.href = "/"
    } catch (err) {
      console.error(err)
      alert("Google login failed")
    }
  }

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-md border border-white/10 bg-black p-8">
        <h1 className="text-2xl font-semibold text-center">
          Welcome back
        </h1>

        <p className="mt-2 text-center text-sm text-neutral-400">
          Log in to SHABEY with Google
        </p>

        <Button
          onClick={handleGoogleLogin}
          className="w-full mt-8 border border-white/20 bg-black text-white hover:bg-white hover:text-black transition"
        >
          Continue with Google
        </Button>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="underline hover:text-white">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  )
}
