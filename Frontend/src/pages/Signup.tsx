import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"

export default function Signup() {
  const handleGoogleSignup = async () => {
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

      if (!res.ok) throw new Error("Signup failed")

      const data = await res.json()
      localStorage.setItem("token", data.token)

      window.location.href = "/"
    } catch (err) {
      console.error(err)
      alert("Google signup failed")
    }
  }

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-md border border-white/10 bg-black p-8">
        <h1 className="text-2xl font-semibold text-center">
          Create your account
        </h1>

        <p className="mt-2 text-center text-sm text-neutral-400">
          Join SHABEY using Google
        </p>

        <Button
          onClick={handleGoogleSignup}
          className="w-full mt-8 border border-white/20 bg-black text-white hover:bg-white hover:text-black transition"
        >
          Continue with Google
        </Button>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Already have an account?{" "}
          <Link to="/auth" className="underline hover:text-white">
            Log in
          </Link>
        </p>
      </div>
    </section>
  )
}
